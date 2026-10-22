#!/usr/bin/env node
/**
 * 单源构建：offer-compass.html 是唯一源文件，
 * app/index.html 由它注入 PWA 头生成，保证线上版本与仓库测试的代码一致。
 *
 * 运行：node tools/build-app.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'offer-compass.html');
const OUT = path.join(ROOT, 'app', 'index.html');

const src = fs.readFileSync(SRC, 'utf8');

/* head 注入：主题色 / manifest / 图标 / iOS 适配 */
const headTags = [
  '<meta name="theme-color" content="#12C87A">',
  '<meta name="description" content="Offer 多维对比、JD 匹配分析、离职补偿 N/N+1/2N、年终奖个税优化、面试复盘错题本。纯本地运行，数据不上传。">',
  '<link rel="manifest" href="manifest.webmanifest">',
  '<link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">',
  '<link rel="apple-touch-icon" href="apple-touch-icon.png">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-status-bar-style" content="default">',
  '<meta name="apple-mobile-web-app-title" content="决策台">'
].join('\n');

if (!src.includes('<title>')) {
  console.error('✗ 源文件缺少 <title>，无法定位注入点');
  process.exit(1);
}

/* body 末尾注入：Service Worker 注册（仅 https 或 localhost 下生效） */
const swTags = [
  '<script>',
  "if ('serviceWorker' in navigator) {",
  "  window.addEventListener('load', function () {",
  "    navigator.serviceWorker.register('sw.js').catch(function () {});",
  '  });',
  '}',
  '</script>'
].join('\n');

let out = src.replace('<title>', headTags + '\n<title>');
if (out === src) {
  console.error('✗ head 注入失败');
  process.exit(1);
}

if (out.includes('</body>')) {
  out = out.replace('</body>', swTags + '\n</body>');
} else {
  console.error('✗ 源文件缺少 </body>，SW 未注入');
  process.exit(1);
}

/* 校验：PWA 资源必须齐全，缺一个就拒绝构建（避免线上半套 PWA） */
const required = ['manifest.webmanifest', 'sw.js', 'icon-192.png', 'icon-512.png',
  'icon-maskable-512.png', 'apple-touch-icon.png'];
const missing = required.filter((f) => !fs.existsSync(path.join(ROOT, 'app', f)));
if (missing.length) {
  console.error('✗ 缺少 PWA 资源：' + missing.join(', ') + '（先运行 python tools/make_icons.py）');
  process.exit(1);
}

fs.writeFileSync(OUT, out, 'utf8');
console.log('✓ 已生成 app/index.html（' + (out.length / 1024).toFixed(1) + ' KB，含 PWA 注入）');
