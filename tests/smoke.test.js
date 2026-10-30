#!/usr/bin/env node
/**
 * 功能冒烟测试（零依赖）：把页面内联脚本在最小 DOM 桩上执行后，
 * 逐个调用七个模块的主流程函数（含渲染），断言「不抛运行时错误、产出非空结果」。
 *
 * calc.test.js 管「算得对」，structure.test.js 管「点得动」，本文件管「跑得通」：
 * 捕获的是调用链上的 TypeError / undefined 引用 / 拼错的元素 id 等只在执行时暴露的问题。
 *
 * 运行：node tests/smoke.test.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const HTML = path.join(__dirname, '..', 'offer-compass.html');
const src = fs.readFileSync(HTML, 'utf8');
const found = src.match(/<script>([\s\S]*?)<\/script>/);
if (!found) { console.error('✗ 未找到内联脚本'); process.exit(1); }

const noop = () => {};
const htmlStore = {};
function elStub(id) {
  return {
    id, value: '', innerHTML: '', textContent: '', style: {}, dataset: {},
    children: [], disabled: false, files: null,
    classList: { add: noop, remove: noop, contains: () => false },
    addEventListener: noop, insertAdjacentHTML: noop, appendChild: noop,
    remove: noop, querySelectorAll: () => [], select: noop, focus: noop,
    click: noop, dispatchEvent: noop, setAttribute: noop
  };
}
const elements = {};
const documentStub = {
  querySelectorAll: () => [], querySelector: () => elStub(),
  getElementById: (id) => (elements[id] = elements[id] || elStub(id)),
  createElement: (tag) => elStub('created-' + tag),
  addEventListener: noop, body: elStub('body'), head: elStub('head'),
  execCommand: noop, activeElement: null
};
const windowStub = { addEventListener: noop, pdfjsLib: undefined };

const alerts = [];
let factory;
try {
  factory = new Function(
    'document', 'window', 'navigator', 'localStorage', 'alert', 'confirm',
    'Blob', 'URL', 'setTimeout', 'clearTimeout', 'Response', 'DecompressionStream',
    found[1] + '\n;return {calcComp,calcBonus,cmpOffers,calcJD,auditResume,renderInts,openBackup,runSelfTest,exportAll,loadSample,closeDemo,addOffer,kbLookup,kbCard,kbGeneric};'
  );
} catch (e) { console.error('✗ 脚本执行失败：' + e.message); process.exit(1); }

const api = factory(
  documentStub, windowStub, {},
  { // 预置一份真实感的本地数据，让各模块走「有数据」的渲染分支
    getItem: (k) => htmlStore[k] || null,
    setItem: (k, v) => { htmlStore[k] = String(v); },
    removeItem: (k) => { delete htmlStore[k]; }
  },
  (m) => alerts.push(String(m)), () => true,
  function () {}, { createObjectURL: () => 'blob:', revokeObjectURL: noop },
  (fn) => fn(), noop,
  typeof Response !== 'undefined' ? Response : function () {},
  typeof DecompressionStream !== 'undefined' ? DecompressionStream : function () {}
);

let pass = 0;
const fails = [];
function run(name, fn, expectNonEmpty) {
  try {
    const out = fn();
    const el = typeof out === 'string' ? null : null;
    void el;
    if (expectNonEmpty) {
      // 主流程都往某个结果容器写 innerHTML；桩容器收集了写入即算有产出
      const wrote = Object.keys(elements).some((id) => elements[id].innerHTML && elements[id].innerHTML.length > 20);
      if (!wrote) { fails.push({ name, got: '无渲染产出', exp: '结果容器非空' }); return; }
    }
    pass++;
  } catch (e) {
    fails.push({ name, got: (e && (e.stack || e.message) || String(e)).split('\n')[0], exp: '不抛错' });
  }
}

htmlStore['wdc_offers_v1'] = JSON.stringify([
  { name: 'A 公司', sal: '24000', mon: '15', bon: '30000', fund: '24', eq: '100000', ot: '12', cm: '45' },
  { name: 'B 公司', sal: '22000', mon: '14', bon: '30000', fund: '24', eq: '0', ot: '2', cm: '20' }
]);
htmlStore['wdc_resume_v1'] = '5 年 Linux C++ 开发经验。负责过驱动开发与 BSP 移植，参与需求评审与运维配合。';
htmlStore['wdc_jd_v1'] = '岗位职责：基于 Kubernetes 与 Kafka 构建高并发微服务，熟悉 Go、Redis、gRPC、CI/CD。';
htmlStore['wdc_interviews_v1'] = JSON.stringify([
  { co: 'A 公司', pos: '后端', date: '2026-10-15', round: '二面', cat: '其他', q: ['Kafka 如何保证不丢'], note: '没答好', ts: 1 }
]);
htmlStore['wdc_jd_v1'] = htmlStore['wdc_jd_v1'];

/* ---------- 主流程逐个跑 ---------- */
run('Offer 对比：cmpOffers() 含 2 条 Offer 数据', () => api.cmpOffers(), true);
run('离职补偿：calcComp() 表单为空的兜底分支', () => api.calcComp(), false);
run('年终奖个税：calcBonus() 空表单兜底分支', () => api.calcBonus(), false);
run('JD 匹配：calcJD() 有简历+JD 渲染完整结果', () => api.calcJD(), true);
run('简历体检：auditResume() 五维打分+改写渲染', () => api.auditResume(), true);
run('面试复盘（代码保留）：renderInts() 渲染记录列表', () => api.renderInts(), true);
run('备份弹层：openBackup() 统计四类数据', () => api.openBackup(), true);
run('页面自检：runSelfTest() 25 项断言全部通过', () => {
  api.runSelfTest();
  const box = elements['stBox'] ? elements['stBox'].innerHTML : '';
  if (box.indexOf('全部通过') < 0) throw new Error('自检未全部通过：' + box.slice(0, 120));
}, false);
run('导出备份：exportAll() 空数据走提示分支不抛错', () => api.exportAll(), false);
run('添加 Offer 行：addOffer() 动态渲染', () => api.addOffer(), false);
run('知识卡：kbCard 抽 20 个技术词都有产出（含词库外词的兜底）', () => {
  const words = ['kubernetes', 'kafka', 'redis', 'epoll', 'docker', 'tcp', 'mysql', 'golang',
    '线程池', '分布式', '微服务', '消息队列', 'jvm', '多线程', 'linux', '缓存', '索引',
    'captcha', 'systemd', 'git'];
  words.forEach((w) => {
    const card = api.kbCard(w);
    if (!card || String(card).length < 10) throw new Error('词无卡片：' + w);
  });
}, false);
run('示例加载：loadSample() 全链路（Offer 行渲染+各模块计算+复盘写入）', () => api.loadSample(), true);

/* ---------- 输出 ---------- */
if (alerts.length) {
  // 主流程里 alert 只允许出现在「空表单兜底提示」，出现即记录（不算失败，但要可见）
  console.log('ℹ alert 弹出 ' + alerts.length + ' 次（兜底提示）：' + alerts[0].slice(0, 40) + (alerts.length > 1 ? ' …' : ''));
}
const total = pass + fails.length;
if (fails.length) {
  console.log('\n失败用例：');
  fails.forEach((f) => console.log('  ✗ ' + f.name + '\n      got=' + f.got));
  console.log('\n✗ ' + pass + ' passed, ' + fails.length + ' failed（共 ' + total + ' 项）\n');
  process.exit(1);
}
console.log('✓ ' + pass + ' passed, 0 failed（共 ' + total + ' 项主流程冒烟）');
