#!/usr/bin/env python3
"""生成应用图标（纯标准库，不依赖 Pillow）。

图标语言与页面一致：品牌绿渐变 + 白色罗盘。
圆角矩形底 + 罗盘环 + 45° 指针，3x3 超采样做抗锯齿。
"""
import os
import struct
import zlib

OUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "app")

# 品牌色：#0ea86a -> #12C87A -> #3AD596
C1 = (0x0E, 0xA8, 0x6A)
C2 = (0x3A, 0xD5, 0x96)


def lerp(a, b, t):
    return tuple(int(round(a[i] + (b[i] - a[i]) * t)) for i in range(3))


def rounded_rect_alpha(x, y, s, radius):
    """点 (x,y) 在圆角矩形内的覆盖率（0/1，硬边；靠超采样平滑）。"""
    cx = min(max(x, radius), s - radius)
    cy = min(max(y, radius), s - radius)
    if radius <= x <= s - radius or radius <= y <= s - radius:
        return 1.0 if 0 <= x <= s and 0 <= y <= s else 0.0
    dx, dy = x - cx, y - cy
    return 1.0 if dx * dx + dy * dy <= radius * radius else 0.0


def sample(x, y, s, scale):
    """返回该采样点的 (r,g,b,a) 或 None 表示透明。"""
    cx = cy = s / 2.0
    # 整体缩放（maskable 需要留安全区）
    px = (x - cx) / scale + cx
    py = (y - cy) / scale + cy

    radius = s * 0.22
    if rounded_rect_alpha(px, py, s, radius) == 0:
        return None

    # 背景：对角线渐变
    t = (px + py) / (2.0 * s)
    bg = lerp(C1, C2, t)

    col = bg
    # 罗盘外环
    R = s * 0.30
    ring_w = s * 0.042
    d = ((px - cx) ** 2 + (py - cy) ** 2) ** 0.5
    if R - ring_w <= d <= R:
        col = (255, 255, 255)

    # 指针：沿 45° 的细菱形，左下浅、右上实心
    ang = -0.7853981634  # -45°
    ca, sa = 0.7071067812, -0.7071067812
    u = (px - cx) * ca + (py - cy) * sa
    v = -(px - cx) * sa + (py - cy) * ca
    a_len, a_wid = R * 0.92, s * 0.062
    if abs(u) / a_len + abs(v) / a_wid <= 1.0:
        # 指针一半亮白、一半半透明白，形成立体感
        col = (255, 255, 255) if v <= 0 else (214, 246, 232)

    # 中心轴点
    if d <= s * 0.032:
        col = (255, 255, 255)

    return col


def render(s, scale=1.0, ss=3):
    rows = []
    step = 1.0 / ss
    for py in range(s):
        row = bytearray()
        for px in range(s):
            acc_r = acc_g = acc_b = acc_a = 0
            for sy in range(ss):
                for sx in range(ss):
                    c = sample(px + (sx + 0.5) * step, py + (sy + 0.5) * step, s, scale)
                    if c is not None:
                        acc_r += c[0]
                        acc_g += c[1]
                        acc_b += c[2]
                        acc_a += 255
            n = ss * ss
            if acc_a == 0:
                row += bytes((0, 0, 0, 0))
            else:
                # 前景色按覆盖数量平均，alpha 按覆盖率折算
                cov = acc_a // 255
                row += bytes((acc_r // cov, acc_g // cov, acc_b // cov, acc_a // n))
        rows.append(bytes(row))
    return rows


def write_png(path, size, rows):
    raw = b"".join(b"\x00" + r for r in rows)

    def chunk(tag, data):
        body = tag + data
        return struct.pack(">I", len(data)) + body + struct.pack(">I", zlib.crc32(body) & 0xFFFFFFFF)

    ihdr = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    blob = (b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr)
            + chunk(b"IDAT", zlib.compress(raw, 9)) + chunk(b"IEND", b""))
    with open(path, "wb") as f:
        f.write(blob)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    jobs = [
        ("icon-192.png", 192, 1.0, 3),
        ("icon-512.png", 512, 1.0, 2),
        ("icon-maskable-512.png", 512, 0.72, 2),
        ("apple-touch-icon.png", 180, 1.0, 3),
    ]
    for name, size, scale, ss in jobs:
        write_png(os.path.join(OUT_DIR, name), size, render(size, scale, ss))
        print("  生成 %-24s %dx%d" % (name, size, size))


if __name__ == "__main__":
    print("生成应用图标 →", OUT_DIR)
    main()
