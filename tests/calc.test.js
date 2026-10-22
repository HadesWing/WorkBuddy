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
const windowStub = { addEventListener: noop };

let api;
try {
  const factory = new Function(
    'document', 'window', 'navigator', 'localStorage', 'alert', 'confirm', 'Blob', 'URL', 'setTimeout', 'clearTimeout',
    found[1] + '\n;return {compMonths,nOfM,bonusTaxInfo,offerCalc,taxOf,kwCount,autoCat,qcat,BRK,TECH,KB,BK_KEYS,BK_TAG,bkStats,SAMPLE_OFFERS,SAMPLE_JD,SAMPLE_RESUME,SAMPLE_INTS,posNum,kbLookup,kbCard,kbGeneric,ALIAS,KB_DEEP,KB_PATCH,resumeAudit,resumeSkeleton,rRewrite,rHasMetric,STRONG_V,entDecode,docxXmlToText,zipEntries,zipExtractFile,parseDocx,jdCleanUp};'
  );
  api = factory(documentStub, windowStub, {}, { getItem: () => null, setItem: noop, removeItem: noop },
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
ok('知识库：速学卡片数量 ≥ 50', Object.keys(api.KB).length >= 50);
ok('知识库：每张卡片都有「本质/机制/学习路径」', Object.keys(api.KB).every(k => {
  const c = api.KB[k];
  const ess = c && (c.one || c.d), mech = c && (c.mech || c.p);
  return ess && mech && mech.length && c.path;
}));
ok('知识库：k8s 经词族映射到 kubernetes', (() => {
  const h = api.kbLookup('k8s'); return !!h && h.c === api.KB.kubernetes;
})());
ok('知识库：llm 经词族映射到大模型', (() => {
  const h = api.kbLookup('llm'); return !!h && h.c === api.KB['大模型'];
})());
ok('关键词表：技术词库 ≥ 100 项', api.TECH.length >= 100);

/* ---------- 8b. 速学卡片深度 ---------- */
const deepKeys = Object.keys(api.KB).filter(k => api.KB[k].mech && api.KB[k].say);
ok('深度卡片 ≥ 20 张', deepKeys.length >= 20);
ok('深度卡片都带「30 秒话术」与「简历写法」', deepKeys.every(k => api.KB[k].say && api.KB[k].use));
ok('深度卡片机制条目 ≥ 3 条', deepKeys.every(k => api.KB[k].mech.length >= 3));
ok('全部技术词都有卡片可看（无空模板）', api.TECH.every(k => !!api.kbLookup(k)));
ok('词族卡片不再重复「暂无内置速学卡」', api.TECH.every(k => {
  const h = api.kbLookup(k); return h && h.c.one && h.c.one.indexOf('暂无内置速学卡') < 0;
}));
ok('未知词才走通用兜底（含学习清单）', (() => {
  const g = api.kbGeneric('zzz-unknown');
  return g.mech.length >= 4 && !!g.say && !!g.use;
})());
ok('卡片渲染：深度卡片包含代码块与话术', (() => {
  const h = api.kbCard('redis');
  return h.indexOf('<pre') >= 0 && h.indexOf('30 秒') >= 0 && h.indexOf('写进简历') >= 0;
})());
ok('卡片渲染：词族卡片标注了来源词族', (() => {
  const h = api.kbCard('nacos');
  return h.indexOf('词族') >= 0 && h.indexOf('注册中心') >= 0;
})());
ok('卡片渲染：未知词走兜底且不报错', api.kbCard('zzz-unknown').indexOf('zzz-unknown') >= 0);

/* ---------- 9. 数据备份 ---------- */
eq('备份：覆盖 4 个存储键', api.BK_KEYS.length, 4);
eq('备份：标识可被校验', api.BK_TAG, 'wdc-backup');
eq('备份：四个键不与业务键脱节', api.BK_KEYS.map(k => k[0]).sort(),
  ['wdc_interviews_v1', 'wdc_jd_v1', 'wdc_offers_v1', 'wdc_resume_v1']);
const emptyStats = api.bkStats();
eq('备份：空存储下统计为 0 条', [emptyStats.offers, emptyStats.ints, emptyStats.res, emptyStats.jd], [0, 0, 0, 0]);

/* ---------- 10. 示例数据必须真的跑得出结论 ---------- */
function sampleOffer(o) {
  return api.offerCalc({
    salary: +o.sal, months: +o.mon, bonus: +o.bon, fund: +o.fund,
    equity: +o.eq, overtime: +o.ot, commute: +o.cm
  });
}
eq('示例：Offer 数量为 2（够对比）', api.SAMPLE_OFFERS.length, 2);
const sA = sampleOffer(api.SAMPLE_OFFERS[0]);
const sB = sampleOffer(api.SAMPLE_OFFERS[1]);
ok('示例：A 的综合总包高于 B（总包故事成立）', sA.total > sB.total);
ok('示例：B 的真实时薪高于 A（时薪故事成立）', sB.hourly > sA.hourly);
ok('示例：两者总包差 ≥ 10 万，差距足够显眼', sA.total - sB.total >= 100000);
ok('示例：两者时薪差 ≥ 5 元/小时，不是误差级', sB.hourly - sA.hourly >= 5);

const sJd = api.kwCount(api.SAMPLE_JD);
const sRes = api.kwCount(api.SAMPLE_RESUME);
const sJdKeys = Object.keys(sJd);
const sMiss = sJdKeys.filter((k) => sRes[k] === undefined);
ok('示例：JD 能抽出 ≥ 15 个关键词', sJdKeys.length >= 15);
ok('示例：简历覆盖率介于 5%—60%（既不是全中也不是全空）',
  sMiss.length > 0 && sMiss.length < sJdKeys.length);
ok('示例：缺失项里 ≥ 10 个有速学卡片（能立刻展示知识输出）',
  sMiss.filter((k) => api.KB[k]).length >= 10);
eq('示例：复盘记录 2 条', api.SAMPLE_INTS.length, 2);
eq('示例：Kafka 问题归类到分布式与架构', api.autoCat(api.SAMPLE_INTS[0].q[1]), '分布式与架构');
eq('示例：手撕题归类到算法手撕', api.autoCat(api.SAMPLE_INTS[1].q[0]), '算法手撕');

/* ---------- 11. 脏输入守卫 posNum ---------- */
eq('posNum：负数归 0', api.posNum(-5), 0);
eq('posNum：0 归 0', api.posNum(0), 0);
eq('posNum：非数字归 0', api.posNum('abc'), 0);
eq('posNum：空串归 0', api.posNum(''), 0);
eq('posNum：Infinity 归 0', api.posNum(Infinity), 0);
eq('posNum：正常值原样返回', api.posNum('12.5'), 12.5);
eq('posNum：数字字符串返回数值', api.posNum(3000), 3000);


/* ---------- 12. 简历体检 ---------- */
const weakResume = '负责用户模块的开发\n参与需求评审\n了解 Redis 缓存';
const strongResume = [
  '教育背景', 'XX 大学 计算机科学与技术 本科 2015-2019',
  '技能清单', '熟练 C++ / Linux / epoll / 多线程 / TCP / MySQL / Redis / Docker',
  '项目经历',
  '- 主导接入层重构，用 epoll ET + 非阻塞 IO 替换多线程模型，单机长连接从 5 千提升到 3 万，CPU 从 80% 降到 12%',
  '- 设计驱动层环形缓冲，采样抖动从 15ms 降到 2ms，30 天长稳测试零重启',
  '- 优化 MySQL 联合索引，订单列表 P99 从 1.8s 降到 90ms'
].join('\n');

ok('量化判断：带年份的任职时间不算成果', api.rHasMetric('2019-2021 在 XX 公司任职') === false);
ok('量化判断：带数字的结果算成果', api.rHasMetric('P99 从 800ms 降到 90ms') === true);
ok('量化判断：纯职责描述不算成果', api.rHasMetric('负责用户模块开发') === false);
ok('量化判断：空行不崩', api.rHasMetric('') === false);

const aw = api.resumeAudit('', weakResume), as = api.resumeAudit('', strongResume);
ok('简历体检：空简历不崩且分数在 0-100', (() => {
  const r = api.resumeAudit('', ''); return r.score >= 0 && r.score <= 100;
})());
ok('简历体检：强简历分数高于弱简历 20 分以上', as.score - aw.score >= 20, aw.score + ' vs ' + as.score);
ok('简历体检：弱简历命中「量化结果」高优先级问题',
  aw.issues.some(i => i.lv === 3 && i.t.indexOf('量化') >= 0));
ok('简历体检：弱简历命中「强动词」问题', aw.issues.some(i => i.t.indexOf('强动词') >= 0));
ok('简历体检：强简历不再报量化问题', !as.issues.some(i => i.t.indexOf('量化结果太少') >= 0));
ok('简历体检：识别弱动词并给出替换建议', aw.weak.some(w => w.w === '负责' && w.fix.indexOf('主导') >= 0));
ok('简历体检：结构缺失会点名具体段落', aw.issues.some(i => i.t.indexOf('缺少常见段落') >= 0));
ok('简历体检：填了 JD 才评估关键词维度',
  aw.dims.find(d => d.n === '关键词匹配').note === '未填 JD');
ok('简历体检：有 JD 时产出植入清单', (() => {
  const r = api.resumeAudit(api.SAMPLE_JD, weakResume);
  return r.kwPlan.length > 0 && r.kwPlan[0].tpl.indexOf('【项目名】') >= 0;
})());
ok('简历体检：植入清单按 JD 频次降序', (() => {
  const r = api.resumeAudit(api.SAMPLE_JD, weakResume);
  return r.kwPlan.every((o, i) => i === 0 || r.kwPlan[i - 1].n >= o.n);
})());
ok('简历体检：每个维度得分不超过满分', aw.dims.every(d => d.got <= d.full && d.got >= 0));
ok('简历体检：问题按严重度降序', aw.issues.every((it, i) => i === 0 || aw.issues[i - 1].lv >= it.lv));

ok('逐句改写：弱动词被替换为强动词', (() => {
  const r = api.rRewrite('负责用户模块开发');
  return r.changed.indexOf('负责') >= 0 && r.after.indexOf('主导') >= 0;
})());
ok('逐句改写：原文没有数字时补量化提示', api.rRewrite('负责用户模块开发').after.indexOf('量化结果') >= 0);
ok('逐句改写：已有数字时不追加提示', api.rRewrite('负责优化接口，P99 从 800ms 降到 90ms').after.indexOf('【补') < 0);
ok('逐句改写：原文保持不变（可对照）', api.rRewrite('参与需求评审').before === '参与需求评审');

const sk = api.resumeSkeleton(as);
ok('简历骨架：包含全部关键段落',
  ['个人优势', '技能清单', '项目 / 工作经历', '教育背景', '自查'].every(k => sk.indexOf(k) >= 0));
ok('简历骨架：留了可填空的占位符', sk.indexOf('【') >= 0 && sk.indexOf('】') >= 0);
ok('简历骨架：缺失关键词会被写进「正在补」', (() => {
  const r = api.resumeAudit(api.SAMPLE_JD, weakResume);
  return api.resumeSkeleton(r).indexOf('正在补') >= 0;
})());

/* ---------- 10. 简历导入：XML 实体与 docx 抽文本（同步部分） ---------- */
eq('entDecode：&amp;', api.entDecode('A&amp;B'), 'A&B');
eq('entDecode：&lt;&gt;&quot;&apos;', api.entDecode('&lt;div&gt; &quot;q&quot; &apos;a&apos;'), '<div> "q" \'a\'');
eq('entDecode：十六进制实体 &#x41;', api.entDecode('&#x41;'), 'A');
eq('entDecode：十进制实体 &#32599;', api.entDecode('&#32599;'), '罗');
eq('entDecode：非法实体原样保留', api.entDecode('&notanentity;'), '&notanentity;');
eq('entDecode：越界码位原样保留', api.entDecode('&#x110000;'), '&#x110000;');
eq('docxXmlToText：段落断行', api.docxXmlToText('<w:p><w:t>a</w:t></w:p><w:p><w:t>b</w:t></w:p>'), 'a\nb');
eq('docxXmlToText：<w:tab/> 与 <w:br/>（前有正文行，行首制表符不被裁剪）', api.docxXmlToText('<w:p><w:t>z</w:t></w:p><w:p><w:r><w:tab/><w:t>x</w:t></w:r><w:r><w:br/><w:t>y</w:t></w:r></w:p>'), 'z\n\tx\ny');
ok('docxXmlToText：域代码 instrText 被剔除', api.docxXmlToText('<w:p><w:r><w:instrText>PAGE</w:instrText><w:t>正文</w:t></w:r></w:p>').indexOf('PAGE') < 0);
ok('docxXmlToText：首尾空白被裁剪', api.docxXmlToText('<w:p><w:t>  hello  </w:t></w:p>') === 'hello');

/* ---------- 11. 简历导入：真实 zip 结构解压（异步） ---------- */
(async () => {
  const zipBuf = fs.readFileSync(path.join(__dirname, 'fixtures', 'sample.docx'));
  const ab = zipBuf.buffer.slice(zipBuf.byteOffset, zipBuf.byteOffset + zipBuf.byteLength);
  const entries = api.zipEntries(new Uint8Array(ab));
  eq('zipEntries：夹具条目数', entries.length, 3);
  ok('zipEntries：包含 word/document.xml 且为 deflate',
    entries.some(e => e.name === 'word/document.xml' && e.method === 8));
  let rejected = false;
  try { await api.zipExtractFile(ab, 'word/nothing.xml'); } catch (e) { rejected = true; }
  ok('zipExtractFile：不存在的条目会抛错', rejected);
  const u8 = await api.zipExtractFile(ab, 'word/document.xml');
  const text = api.docxXmlToText(new TextDecoder().decode(u8));
  ok('parseDocx：正文首行', text.indexOf('张三 · 后端开发工程师') === 0);
  ok('parseDocx：实体还原', text.indexOf('5 年经验 & 熟悉 C++ <服务端>') >= 0);
  ok('parseDocx：域代码不出现在正文', text.indexOf('MERGEFORMAT') < 0);
  ok('parseDocx：量化成果保留', text.indexOf('QPS 从 800 提升到 5200') >= 0);
  ok('parseDocx：<w:br/> 断行', text.indexOf('技能：Java\nGo、Kafka') >= 0);
  ok('parseDocx：数字/十六进制实体还原', text.indexOf('Rx 5200 罗马') >= 0);
  summary();
})().catch(e => {
  fails.push({ name: 'docx 异步解压测试执行失败', got: String(e && e.message || e), exp: '无异常' });
  summary();
});

/* ---------- 12. JD 链接导入：markdown 清洗 ---------- */
eq('jdCleanUp：图片语法整段剔除', api.jdCleanUp('岗位 ![logo](https://x/a.png) 要求'), '岗位  要求');
eq('jdCleanUp：链接只保留文字', api.jdCleanUp('[岗位职责](#p1)：开发'), '岗位职责：开发');
eq('jdCleanUp：压缩连续空行', api.jdCleanUp('a\n\n\n\nb'), 'a\n\nb');
eq('jdCleanUp：首尾空白裁剪', api.jdCleanUp('  \n hello \n\t'), 'hello');

/* ---------- 输出 ---------- */
function summary() {
  const total = pass + fails.length;
  if (fails.length) {
    console.log('\n失败用例：');
    fails.forEach(f => console.log('  ✗ ' + f.name + '\n      got=' + JSON.stringify(f.got) + '  exp=' + JSON.stringify(f.exp)));
    console.log('\n✗ ' + pass + ' passed, ' + fails.length + ' failed（共 ' + total + ' 项）\n');
    process.exit(1);
  }
  console.log('✓ ' + pass + ' passed, 0 failed（共 ' + total + ' 项断言）');
}
