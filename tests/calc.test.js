#!/usr/bin/env node
/**
 * 零依赖测试：把 offer-compass.html 的内联脚本抽出来，在最小 DOM 桩上执行，
 * 断言的就是页面实际运行的那一份代码（不另写一套算法，避免口径漂移）。
 *
 * 运行：node tests/calc.test.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const HTML = path.join(__dirname, '..', 'offer-compass.html');
const src = fs.readFileSync(HTML, 'utf8');
const found = src.match(/<script>([\s\S]*?)<\/script>/);
if (!found) {
  console.error('✗ 未在 offer-compass.html 中找到内联脚本');
  process.exit(1);
}

/* ---------- 最小 DOM 桩：只满足脚本加载期的副作用 ---------- */
const noop = () => {};
function elStub() {
  return {
    value: '', innerHTML: '', textContent: '', style: {}, dataset: {}, children: [],
    classList: { add: noop, remove: noop, contains: () => false },
    addEventListener: noop, insertAdjacentHTML: noop, appendChild: noop, remove: noop,
    querySelectorAll: () => [], select: noop, focus: noop, click: noop
  };
}
const documentStub = {
  querySelectorAll: () => [], querySelector: () => elStub(),
  getElementById: () => elStub(), createElement: () => elStub(),
  addEventListener: noop, body: elStub(), execCommand: noop
};

let api;
try {
  const factory = new Function(
    'document', 'window', 'navigator', 'localStorage', 'alert', 'confirm', 'Blob', 'URL', 'setTimeout', 'clearTimeout',
    found[1] + '\n;return {compMonths,nOfM,bonusTaxInfo,offerCalc,taxOf,kwCount,autoCat,qcat,BRK,TECH,KB};'
  );
  api = factory(documentStub, {}, {}, { getItem: () => null, setItem: noop, removeItem: noop },
    noop, () => false, function () {}, { createObjectURL: () => 'blob:', revokeObjectURL: noop }, () => 0, noop);
} catch (e) {
  console.error('✗ 脚本在桩环境执行失败：' + e.message);
  process.exit(1);
}

/* ---------- 极简断言器 ---------- */
let pass = 0;
const fails = [];
function eq(name, got, exp) {
  const ok = (typeof got === 'number' && typeof exp === 'number')
    ? Math.abs(got - exp) < 1e-6
    : JSON.stringify(got) === JSON.stringify(exp);
  if (ok) pass++; else fails.push({ name, got, exp });
}
function ok(name, cond) { if (cond) pass++; else fails.push({ name, got: cond, exp: true }); }
function near(name, got, exp, tol) { eq(name, Math.abs(got - exp) <= tol ? exp : got, exp); }

/* ---------- 1. 工龄月数 compMonths ---------- */
eq('compMonths：2020-03-10 → 2026-09-20（6 年 6 个月）', api.compMonths('2020-03-10', '2026-09-20'), 78);
eq('compMonths：2020-03-10 → 2026-03-09（差 1 天不满 6 年）', api.compMonths('2020-03-10', '2026-03-09'), 71);
eq('compMonths：2026-01-01 → 2026-06-29（5 个月）', api.compMonths('2026-01-01', '2026-06-29'), 5);
eq('compMonths：2026-01-01 → 2026-07-01（整 6 个月）', api.compMonths('2026-01-01', '2026-07-01'), 6);
eq('compMonths：同一天非法', api.compMonths('2026-01-01', '2026-01-01'), -1);
eq('compMonths：日期倒挂非法', api.compMonths('2026-05-01', '2026-01-01'), -1);
eq('compMonths：跨闰年 2024-02-29 → 2025-02-28', api.compMonths('2024-02-29', '2025-02-28'), 11);

/* ---------- 2. 补偿月数 N ---------- */
eq('N：0 个月 → 0', api.nOfM(0), 0);
eq('N：5 个月 → 0.5（不满 6 个月）', api.nOfM(5), 0.5);
eq('N：6 个月 → 1（满 6 个月按 1 年）', api.nOfM(6), 1);
eq('N：11 个月 → 1', api.nOfM(11), 1);
eq('N：12 个月 → 1', api.nOfM(12), 1);
eq('N：23 个月 → 2', api.nOfM(23), 2);
eq('N：24 个月 → 2', api.nOfM(24), 2);
eq('N：30 个月 → 3（2 年 6 个月）', api.nOfM(30), 3);
eq('N：78 个月 → 7', api.nOfM(78), 7);
eq('N：121 个月 → 10.5（10 年 1 个月）', api.nOfM(121), 10.5);

/* ---------- 3. 年终奖单独计税 ---------- */
eq('年终奖 36000：税率 3%', api.bonusTaxInfo(36000).rate, 0.03);
eq('年终奖 36000：税额 1080', api.bonusTaxInfo(36000).tax, 1080);
eq('年终奖 36001：跳档到 10%（税额 3390.1）', api.bonusTaxInfo(36001).tax, 3390.1);
eq('年终奖 96000：税额 9390（10%，速扣 210）', api.bonusTaxInfo(96000).tax, 9390);
eq('年终奖 144000：税额 14190（10%，速扣 210）', api.bonusTaxInfo(144000).tax, 14190);
eq('年终奖 144001：跳档到 20%（税额 27390.2）', api.bonusTaxInfo(144001).tax, 27390.2);
eq('年终奖 300000：税额 58590（20%，速扣 1410）', api.bonusTaxInfo(300000).tax, 58590);
ok('无效区间自洽：36000 到手 > 36001 到手',
  (36000 - api.bonusTaxInfo(36000).tax) > (36001 - api.bonusTaxInfo(36001).tax));
ok('无效区间自洽：144000 到手 > 144001 到手',
  (144000 - api.bonusTaxInfo(144000).tax) > (144001 - api.bonusTaxInfo(144001).tax));

/* ---------- 4. 综合所得年表 taxOf ---------- */
eq('年应纳税所得额 0 → 0', api.taxOf(0), 0);
eq('36000 → 1080（3%）', api.taxOf(36000), 1080);
eq('96000 → 7080（10%，速扣 2520）', api.taxOf(96000), 7080);
eq('300000 → 43080（20%，速扣 16920）', api.taxOf(300000), 43080);
eq('500000 → 97080（30%，速扣 52920）', api.taxOf(500000), 97080);
eq('1000000 → 268080（45%，速扣 181920）', api.taxOf(1000000), 268080);
ok('税率表单调递增：所得越高税越高',
  api.taxOf(100000) < api.taxOf(200000) && api.taxOf(200000) < api.taxOf(400000));

/* ---------- 5. Offer 年化 offerCalc ---------- */
const o1 = api.offerCalc({ salary: 20000, months: 14, bonus: 20000, fund: 24, equity: 0, overtime: 0, commute: 45 });
eq('Offer：现金年包 20k×14+20k = 300000', o1.cash, 300000);
eq('Offer：公积金年缴存 20k×24%×12 = 57600', o1.fundY, 57600);
eq('Offer：综合年包 357600', o1.total, 357600);
near('Offer：时薪 300000/(40×48) ≈ 156.25', o1.hourly, 156.25, 0.01);
eq('Offer：年通勤 45×2×250/60 = 375 小时', o1.commuteY, 375);

const o2 = api.offerCalc({ salary: 30000, months: 12, bonus: 0, fund: 0, equity: 100000, overtime: 10, commute: 0 });
eq('Offer：期权计入综合年包', o2.total, 460000);
near('Offer：加班拉低时薪 360000/(50×48) = 150', o2.hourly, 150, 0.01);
ok('Offer：同现金但加班更多时，时薪更低',
  api.offerCalc({ salary: 30000, months: 12, bonus: 0, fund: 0, equity: 0, overtime: 20, commute: 0 }).hourly
  < api.offerCalc({ salary: 30000, months: 12, bonus: 0, fund: 0, equity: 0, overtime: 0, commute: 0 }).hourly);

/* ---------- 6. JD 关键词词频 kwCount ---------- */
const kw = api.kwCount('熟悉 Redis 与 MySQL，有 Kafka 使用经验；负责 Redis 集群运维');
eq('kwCount：redis 出现 2 次', kw.redis, 2);
eq('kwCount：mysql 出现 1 次', kw.mysql, 1);
eq('kwCount：kafka 出现 1 次', kw.kafka, 1);
ok('kwCount：未出现的词不进结果', kw.docker === undefined);
const kw2 = api.kwCount('要求 3 年以上经验，熟悉 Spring Boot 与 Docker/K8s');
ok('kwCount：能识别 spring', (kw2.spring || 0) >= 1);
ok('kwCount：能识别 docker', kw2.docker === 1);
ok('kwCount：能识别 k8s', kw2.k8s === 1);
ok('kwCount：空文本返回空对象', Object.keys(api.kwCount('')).length === 0);

/* ---------- 7. 复盘分类 autoCat / qcat ---------- */
eq('分类：Redis 持久化 → 数据库与缓存', api.autoCat('Redis 持久化 RDB 和 AOF 的取舍'), '数据库与缓存');
eq('分类：TCP 三次握手 → 操作系统与网络', api.autoCat('TCP 三次握手为什么不是两次'), '操作系统与网络');
eq('分类：Kafka 积压 → 分布式与架构', api.autoCat('Kafka 消息积压怎么处理'), '分布式与架构');
eq('分类：手撕反转链表 → 算法手撕', api.autoCat('手撕：反转链表'), '算法手撕');
eq('分类：项目难点 → 项目深挖', api.autoCat('讲讲你最得意的项目，难点在哪'), '项目深挖');
eq('分类：最大优点 → HR 与软素质', api.autoCat('你最大的优点是什么'), 'HR 与软素质');
eq('分类：排查线上 CPU → 场景与开放题', api.autoCat('如何排查线上 CPU 飙高'), '场景与开放题');
eq('分类：JVM 内存区域 → 基础八股', api.autoCat('说说 JVM 的内存区域'), '基础八股');
eq('分类：无关内容 → 其他', api.autoCat('今天天气不错'), '其他');
eq('qcat：手动类别优先', api.qcat({ cat: '系统设计' }, 'Redis 持久化'), '系统设计');
eq('qcat：auto 走自动识别', api.qcat({ cat: 'auto' }, 'Redis 持久化'), '数据库与缓存');
eq('qcat：无 cat 字段走自动识别', api.qcat({}, 'TCP 三次握手'), '操作系统与网络');

/* ---------- 8. 知识库完整性 ---------- */
ok('知识库：速学卡片数量 ≥ 30', Object.keys(api.KB).length >= 30);
ok('知识库：每张卡片都有定义/要点/学习路径', Object.keys(api.KB).every(k => {
  const c = api.KB[k];
  return c && c.d && c.p && c.p.length && c.path;
}));
ok('知识库：别名 k8s 指向 kubernetes', api.KB.k8s === api.KB.kubernetes);
ok('知识库：别名 llm 指向大模型', api.KB.llm === api.KB['大模型']);
ok('关键词表：技术词库 ≥ 100 项', api.TECH.length >= 100);

/* ---------- 输出 ---------- */
const total = pass + fails.length;
if (fails.length) {
  console.log('\n失败用例：');
  fails.forEach(f => console.log('  ✗ ' + f.name + '\n      got=' + JSON.stringify(f.got) + '  exp=' + JSON.stringify(f.exp)));
  console.log('\n✗ ' + pass + ' passed, ' + fails.length + ' failed（共 ' + total + ' 项）\n');
  process.exit(1);
}
console.log('✓ ' + pass + ' passed, 0 failed（共 ' + total + ' 项断言）');
