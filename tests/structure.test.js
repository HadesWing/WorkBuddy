#!/usr/bin/env node
/**
 * 结构完整性冒烟测试（零依赖，纯静态分析，不需要浏览器）
 *
 * 计算测试保证「算得对」，这个文件保证「点得动」：
 * 按钮绑定的函数是否存在、引用的元素 id 是否存在、标签与面板是否一一对应、
 * id 有没有写重复。改动界面时这类错误不会报语法错，只会在用户点下去时静默失效。
 *
 * 运行：node tests/structure.test.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const HTML = path.join(__dirname, '..', 'offer-compass.html');
const src = fs.readFileSync(HTML, 'utf8');

let pass = 0;
const fails = [];
function ok(name, cond, detail) {
  if (cond) pass++;
  else fails.push({ name, detail });
}

/* 只在浏览器运行时才创建、HTML 里查不到的 id（必须写明为什么） */
const RUNTIME_IDS = {
  bkFile: '数据备份弹层由 JS 渲染 innerHTML 后才存在'
};

/* ---------- 1. 收集静态 id ---------- */
const staticIds = [];
const idRe = /\bid="([^"]+)"/g;
let m;
while ((m = idRe.exec(src))) {
  // 模板拼接出来的 id（如 id="oc'+i+'"）含单引号，视为动态 id 前缀
  if (m[1].includes("'")) continue;
  staticIds.push(m[1]);
}
const idSet = new Set(staticIds);

const dup = staticIds.filter((v, i) => staticIds.indexOf(v) !== i);
ok('id 无重复', dup.length === 0, dup.join(', '));
ok('静态 id 数量 ≥ 40', staticIds.length >= 40, '当前 ' + staticIds.length);

/* ---------- 2. onclick 绑定的函数必须存在 ---------- */
const handlerRe = /onclick="([A-Za-z_$][\w$]*)\s*\(/g;
const handlers = new Set();
while ((m = handlerRe.exec(src))) handlers.add(m[1]);

const defined = new Set();
const defRe = /(?:^|\n)\s*(?:function\s+([A-Za-z_$][\w$]*)\s*\(|var\s+([A-Za-z_$][\w$]*)\s*=\s*function)/g;
while ((m = defRe.exec(src))) defined.add(m[1] || m[2]);

ok('onclick 绑定的函数数 ≥ 15', handlers.size >= 15, '当前 ' + handlers.size);
const missingFns = [...handlers].filter((fn) => !defined.has(fn));
ok('onclick 绑定的函数全部已定义', missingFns.length === 0, missingFns.join(', '));

/* ---------- 3. getElementById 的字面量 id 必须存在 ---------- */
const getRe = /getElementById\('([^']+)'\)/g;
const usedIds = new Set();
while ((m = getRe.exec(src))) usedIds.add(m[1]);

const missingIds = [...usedIds].filter((id) => !idSet.has(id) && !RUNTIME_IDS[id]);
ok('getElementById 引用的 id 全部存在', missingIds.length === 0, missingIds.join(', '));

/* 运行时 id 也必须真的出现在某处模板里，避免白名单变成永久豁免 */
Object.keys(RUNTIME_IDS).forEach((id) => {
  ok('运行时 id 确实由 JS 生成：' + id,
    src.includes('id="' + id + '"') || src.includes("id=\\'" + id + "\\'"));
});

/* ---------- 4. 标签页与面板一一对应 ---------- */
const tabTargets = [...src.matchAll(/data-t="([^"]+)"/g)]
  .map((x) => x[1])
  .filter((t) => !t.includes("'")); // 排除 JS 里拼出来的选择器（如 data-t="'+id+'"）
const panes = [...src.matchAll(/class="pane[^"]*" id="([^"]+)"/g)].map((x) => x[1]);

ok('标签数量 = 面板数量', tabTargets.length === panes.length,
  tabTargets.length + ' vs ' + panes.length);
ok('标签 target 都能找到对应面板', tabTargets.every((t) => panes.includes(t)),
  tabTargets.filter((t) => !panes.includes(t)).join(', '));
ok('没有孤立面板（面板都有标签入口）', panes.every((p) => tabTargets.includes(p)),
  panes.filter((p) => !tabTargets.includes(p)).join(', '));
ok('标签 + 面板数量为 7（七大模块）', tabTargets.length === 7, '当前 ' + tabTargets.length);

/* ---------- 5. 每个面板内至少有一个可执行动作 ---------- */
panes.forEach((p) => {
  const start = src.indexOf('id="' + p + '"');
  const nextPane = src.indexOf('class="pane', start + 10);
  const seg = src.slice(start, nextPane > 0 ? nextPane : src.length);
  const hasAction = /onclick="[A-Za-z_$][\w$]*\s*\(/.test(seg) || /<textarea|<select/.test(seg);
  ok('面板 ' + p + ' 内有可执行动作或输入控件', hasAction);
});

/* ---------- 6. 关键能力不能悄悄消失 ---------- */
const features = [
  ['从备份恢复', 'importFile'],
  ['导出备份', 'exportAll'],
  ['数据自检', 'runSelfTest'],
  ['载入示例', 'loadSample'],
  ['清空示例', 'clearSample'],
  ['安装到桌面', 'installApp'],
  ['Offer 对比', 'cmpOffers'],
  ['离职补偿', 'calcComp'],
  ['年终奖个税', 'calcBonus'],
  ['JD 匹配', 'calcJD'],
  ['简历体检', 'auditResume'],
  ['简历/JD 跨页同步', 'reloadSavedViews'],
  ['复盘导出', 'exportInterviews']
];
features.forEach(([label, fn]) => {
  ok('能力入口存在：' + label + '（' + fn + '）', defined.has(fn));
});

/* ---------- 7. 交互文案与安全兜底 ---------- */
ok('存在免责声明', /不构成法律或税务意见/.test(src));
ok('存在隐私说明（数据只存本机）', /只存在这台设备|不上传/.test(src));
ok('清空数据需二次确认', (src.match(/confirm\(/g) || []).length >= 3);
ok('单文件不含外链脚本', !/<script[^>]+src=/.test(src));
ok('单文件不含外链样式', !/<link[^>]+rel="stylesheet"/.test(src));

/* ---------- 输出 ---------- */
const total = pass + fails.length;
if (fails.length) {
  console.log('\n失败用例：');
  fails.forEach((f) => console.log('  ✗ ' + f.name + (f.detail ? '\n      → ' + f.detail : '')));
  console.log('\n✗ ' + pass + ' passed, ' + fails.length + ' failed（共 ' + total + ' 项）\n');
  process.exit(1);
}
console.log('✓ ' + pass + ' passed, 0 failed（共 ' + total + ' 项结构断言）');
