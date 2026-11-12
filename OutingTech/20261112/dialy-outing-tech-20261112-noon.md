# 🏔️🚀 DialyOutingTech - 每日户外科技速递

📅 日期: 2026-11-12 | 午间版
⏱️ 覆盖窗口: 06:00 - 11:30 (CST) / 22:00 - 03:30 UTC

---

## 🤖 AI 前沿专区

### [Google DeepMind 发布 AlphaGenome 2：把静态细胞图谱变成"人类遗传学预测引擎"](https://www.theverge.com/ai-artificial-intelligence/1031524/google-deepmind-alphagenome-2-genetic-ai-model)

AlphaGenome 2 是去年发布的 AlphaGenome 的后继模型，专门解决"同一个基因变异在不同细胞里后果完全不同"这个难题。它训练于**超过 1 亿个单细胞档案、覆盖 68 种组织**，能直接预测变异对特定细胞类型与状态的影响。相比前代 SOTA 模型，它识别出的"可改变基因表达"的变异数量**接近翻倍**。

研究负责人 Adam Gayoso 称突破在于"把人类遗传学与细胞生物学连起来"——把大样本人群中发现的遗传变异下钻到细胞层面，可能直接连到疾病。DeepMind 基因组负责人 Žiga Avsec 补充说，做药时瞄准的是特定蛋白和特定细胞类型，所以这种颗粒度至关重要。

两个额外能力：无需重新训练即可预测全新的细胞类型与生物学状态；还能识别实验数据中的缺口，帮科学家决定下一步该做什么实验。目前已通过 AlphaGenome API 向非商业研究开放，商用研究提供有限私有预览。Avsec 也坦承代价——新模型算力开销"更贵"，因此短期内不会取代 AlphaGenome，也不足以覆盖九月发布的全基因组 Atlas。

来源: [The Verge](https://www.theverge.com/ai-artificial-intelligence/1031524/google-deepmind-alphagenome-2-genetic-ai-model) | [Google DeepMind Blog](https://deepmind.google/discover/blog/)

---

### [Anthropic 声称已摆脱 CUDA 锁定：把 Claude 移植到 AMD GPU 只用 3 天](https://the-decoder.com/anthropic-says-ai-is-eroding-nvidias-cuda-lead-cutting-an-amd-chip-switch-from-months-to-three-days/)

英伟达最大的护城河一直是硬件+软件的组合，尤其是 CUDA 生态带来的迁移成本——很多公司连试都不试。但 Anthropic 在投资者材料里宣称它把这个问题用 AI 本身解决了。

据 Anthropic 联合创始人兼首席计算官 Tom Brown，公司目前已在**四大主流芯片家族**上训练和运行 Claude。公司早期押注了"非常规"的多芯片路线，为每种芯片自研推理栈，"多年来投入巨大，如今做得极其好"。今年首次使用 AMD GPU 时，他们让自己的前沿模型 Mythos 来干这件事——**模型自己移植或编写了接近 100% 的 kernel，三天后 Claude 就在 AMD 上跑起来了，几乎无人工介入**。此前上一个新平台需要数十名工程师忙上几个月。

如果数字属实，长期被视为英伟达最强竞争优势的软件开销将被大幅压缩——公司可以更自由地按性价比切换供应商。背景是英伟达在 AI 芯片市场利润率**超过 70%**。Anthropic 同时在做 "Anthropic Direct"，自建数据中心租芯片自运营，以降低总持有成本。

⚠️ 需注意：这些数字来自投资者材料，**尚未经独立验证**。且两边都有深厚利益绑定——英伟达在 2025 年 11 月随微软 450 亿美元交易承诺向 Anthropic 投资至多 100 亿美元，并在 11 月 10 日的 S-1/A 中参与总额 **260 亿美元**的条件私募配售；AMD 于 2026 年 7 月宣布战略投资至多 **50 亿美元**，Anthropic 计划部署至多 2GW 的 MI455X，首个 1GW 阶段于 2027 年上半年启动。

来源: [The Decoder](https://the-decoder.com/anthropic-says-ai-is-eroding-nvidias-cuda-lead-cutting-an-amd-chip-switch-from-months-to-three-days/) | [Anthropic S-1/A (SEC)](https://www.sec.gov/)

---

### [DeepMind 推出 AlphaProof Code：用 AI 数学证明 Signal 加密核心的正确性，4 周完成原本数年的工作](https://the-decoder.com/google-deepminds-alphaproof-code-verified-signals-cryptographic-core-in-four-weeks-instead-of-years/)

AlphaProof Code 是一个能**数学证明软件满足其安全规范、且无错误**的 AI 系统。演示对象是 Signal 的加密协议——在专家定义好形式化安全需求后，构建于 Gemini Carbon 的 AI agent 完成验证，耗时**四周**，而这通常是**需要数年**的工作。此前类似的验证努力只能停在理论设计阶段。

关键区别在于：它验证的是**真实运行在用户设备上的加密核心代码**，不只是纸面设计。Signal CTO Ehren Kret 表示，在 AI 威胁不断上升的背景下，这一方法强化了用户对数据隐私的信任。DeepMind 计划通过 CodeMender 等系统把方法扩展到电网和医疗设备。

来源: [The Decoder](https://the-decoder.com/google-deepminds-alphaproof-code-verified-signals-cryptographic-core-in-four-weeks-instead-of-years/) | [Signal](https://signal.org/)

---

### [Google 推出 Gemini Decision 1 决策模型 API：单次处理 1000 个问题，150-250 毫秒返回](https://the-decoder.com/google-joins-the-decision-model-wave-with-gemini-decision-1-scoring-1000-questions-in-a-single-pass/)

Google DeepMind 发布 Gemini Decisions API，面向快速封闭式决策：是/否问题、多选题、量表评分。底层模型 Gemini Decision 1 支持在**单次推理中处理最多 1000 个独立问题**，输入模态覆盖文本、图像、音频、视频和 PDF，直接对选项打分并返回带置信度的概率，耗时 **150-250 毫秒**。

价格是亮点：**每百万输入 token 0.10 美元，且不收输出 token 费用**，据 Google 约为 Gemini 3.5 Flash-Lite 的五分之一便宜。已通过 Google AI Studio 上线，OpenRouter、LangChain、Vercel 等集成陆续到位。Google 内部已在 Gemini Notebook 的动态模型路由、Stitch 的设计原型和 Google Search 的安全检查中使用该 API。

这波"决策模型"浪潮中，Jev 先出手，OpenAI、Cloudflare、微软随即跟进同类产品。

来源: [The Decoder](https://the-decoder.com/google-joins-the-decision-model-wave-with-gemini-decision-1-scoring-1000-questions-in-a-single-pass/) | [Google AI Studio](https://aistudio.google.com/)

---

### [OpenAI Q3 营收 100 亿美元创纪录，但调整后经营亏损 109 亿仍落后于 Anthropic](https://the-decoder.com/enterprise-sales-push-openais-quarterly-revenue-to-10-billion-though-it-still-trails-anthropic/)

据《华尔街日报》与 The Information 报道，OpenAI Q3 营收环比增长约 50% 达 **100 亿美元**（Q2 环比仅 17-18%，去年同期 39 亿）。但调整后经营亏损从 101 亿升至 **109 亿**（不含股权激励，后者升至 26 亿），调整后经营利润率从 Q2 的 -150% 改善到 **-109%**，一年前为 -97%。

对比之下，Anthropic Q3 营收增长 47% 至 **170 亿美元**，含股权激励的经营亏损仅 **5.67 亿美元**——Claude 开发者不仅 Q2 就在营收上反超 OpenAI，当时还录得了小幅经营盈利。差距源于商业模式：Anthropic 重仓企业客户和 Claude Code、Claude Cowork 等成功工具；OpenAI 则资助机器人等广泛研究并维持昂贵的消费端业务。

OpenAI 总裁 Greg Brockman 称这是"难以置信的营收转折点"，提到摩根大通等大客户，企业业务 Q3 翻倍并已占营收主体。消费端也在增长：ChatGPT 周活 **12 亿**，付费订阅 **1 亿**（新增 2200 万），新 ChatGPT 广告产品 8 月年化营收跑速 **10 亿美元**。OpenAI 正以 **1.25 万亿美元**估值融资 300 亿美元，目前完成不足一半。

来源: [The Decoder](https://the-decoder.com/enterprise-sales-push-openais-quarterly-revenue-to-10-billion-though-it-still-trails-anthropic/) | [Wall Street Journal](https://www.wsj.com/) | [The Information](https://www.theinformation.com/)

---

### [美国数据商向中国 AI 实验室出售约 5 亿美元 RL 训练环境，绕开出口管制](https://the-decoder.com/us-data-brokers-are-selling-half-a-billion-dollars-in-rl-training-environments-to-chinese-ai-labs/)

ChinaTalk 调查确认，Mercor、Surge AI、AfterQuery、Turing 等美国数据公司向中国 AI 实验室出售了**约 5 亿美元**的训练数据，其中相当部分是强化学习环境——模拟世界，用于训练模型执行编码、金融分析、办公等任务。

中国实验室刻意购买与 Anthropic、OpenAI 相同的商品，因为已经知道这些数据有效，可跳过昂贵的自研和浪费的训练轮次。**由于中国芯片面临严重内存瓶颈，这些节省对他们格外值钱**。叠加"蒸馏"路线——用 GPT/Claude 当老师输出训练样本——形成双管齐下的优势。

调查者识别出至少 9 家向中国客户销售的美企。Surge AI 在官网公开宣称其产品"由前沿实验室背后同一批专家打造"。交易还通过离岸结构进行——字节跳动在新加坡和圣何塞设有采购办公室。成因是运营安全松散：美企把 RL 环境制作和数据筛选大量外包给印度等地低薪工人，这些分包商偶尔在 LinkedIn 或简历上泄露客户名。**出口管制几乎管不到，因为 RL 环境基本处于监管空白。**

作者同时强调这并非末日级差距：中国实验室在能力上仍落后数月，而生物、化学、网络安全、芯片设计、投资银行等敏感环境正越来越多地由美国前沿公司自建。

来源: [The Decoder](https://the-decoder.com/us-data-brokers-are-selling-half-a-billion-dollars-in-rl-training-environments-to-chinese-ai-labs/) | [ChinaTalk](https://chinatalk.substack.com/)

---

### [美国企业 AI 支出 10 月创新高，但增速骤降至 1.65%](https://the-decoder.com/us-corporate-ai-spending-hits-a-new-high-in-october-but-growth-slows-to-1-65-percent/)

Ramp AI Index 显示，2026 年 10 月美国企业 AI 支出环比增长 **1.65%**，创下新高但增速温和。分化极端：AI 支出最高的前 1% 公司人均月支出 **10,200 美元**（涨 9%），而典型公司仅 **16.32 美元**。

平台侧，对 OpenAI 的支出环比 +2.1%，Anthropic 仅 +0.5%。Ramp 首席经济学家 Ara Kharazian 指出结构性风险依旧：**1% 的公司贡献 OpenAI 和 Anthropic 80% 的收入**，且这一层几乎全是科技、金融、技术服务领域的风投支持公司，其他行业几乎没有扩散。

价格同时在下行：每百万处理文本 token 的均价上月**下跌 21%**，用量增速快于支出增速。市场份额上 Anthropic 达 **44.8%**（+1.1pp），OpenAI 持平 40.6%。

结构变化值得注意：软件开发团队仍占全部 AI 支出的 **72%**，但已从夏季高点回落；客户支持/客服部门份额从 6 月的 0.8% 涨到 10 月的 **13.3%**。客服场景天然偏好更便宜更快的模型，可能拉低新增客户的利润率。

来源: [The Decoder](https://the-decoder.com/us-corporate-ai-spending-hits-a-new-high-in-october-but-growth-slows-to-1-65-percent/) | [Ramp AI Index](https://ramp.com/velocity/ai-index)

---

## 🔬 科技综合区

### [英伟达董事会准备罢免 CEO 黄仁勋：股价盘后跌 8%，猎头已启动](https://techcrunch.com/2026/11/11/nvidias-stock-drops-as-board-reportedly-preps-to-oust-ceo-jensen-huang/)

《华尔街日报》报道，英伟达董事会最早于当地时间 11 月 11 日开会决定黄仁勋的去留。这家公司没有明确的接班人计划，而黄仁勋以"几乎什么都自己抓"著称，公开提过有约 **60 名直接下属**。据 Bloomberg，董事会已与外部猎头公司合作物色潜在继任者，并考虑在搜寻期间**设立临时 CEO**。有消息称部分董事倾向于任命 CFO Colette Kress 为临时 CEO，且董事会已就此次会议向白宫做了简报。

事件链条：11 月 8 日黄仁勋在致员工内部信中承认与一名被美情报机构认定为中国间谍的女子有婚外关系并致歉，董事会随即启动独立调查；11 月 11 日《纽约时报》报道他与医疗业务副总裁 Kimberly Powell（直接向其汇报）另有婚外关系。股价在周三盘后一度下跌约 **8%**，过去五个交易日累计跌约 **11%**。

同日晚间另有两条独立进展：《纽约时报》称涉嫌间谍事件的 Megaspeed 创始人 Alice Huang 已返回中国，现居北京；参议员 Elizabeth Warren 与 Chris Coons 致信要求政府保全所有与英伟达对华芯片出口和黄仁勋事件相关的文件——这通常是正式国会调查前的第一步。

来源: [TechCrunch](https://techcrunch.com/2026/11/11/nvidias-stock-drops-as-board-reportedly-preps-to-oust-ceo-jensen-huang/) | [WSJ](https://www.wsj.com/business/nvidia-is-preparing-to-oust-nvidia-ceo-jensen-huang-30f421ad) | [The Information](https://www.theinformation.com/) | [TechCrunch 时间线](https://techcrunch.com/2026/11/11/nvidia-ceo-jensen-huangs-affair-with-alleged-chinese-spy-a-timeline/)

---

### [CoreWeave Q3 营收 36.6 亿美元同比增 168%，同时筹划 40 亿美元投资级贷款](https://decrypt.co/383099/nvidia-backed-coreweave-surging-what-means-for-ai-boom)

AI 算力云商 CoreWeave Q3 营收 **36.6 亿美元**，同比增长 **168%**，并把 2026 年营收指引上调至 **130-133 亿美元**。消息带动股价大涨，也拉动了英伟达以及 Nebius、IREN、Oracle、Applied Digital 等 AI 基础设施股。CEO Michael Intrator 称"这是个突破性季度，营收环比增加超过 10 亿美元"。

值得注意的是**循环融资**结构：英伟达 1 月以每股 87.20 美元再投 **20 亿美元**买入 CoreWeave 股票，目标是到 2030 年建成 5GW 以上 AI 数据中心；英伟达另有 **63 亿美元**初始协议购买 CoreWeave 的闲置算力（至 2032 年 4 月）。CoreWeave 报告 **1325 亿美元**营收积压订单（合同化未交付），9 月底活跃电力容量超 **1.7GW**，客户包括 OpenAI、Cohere、Perplexity。

同日 Bloomberg 报道 CoreWeave 计划最快下周发行**至少 40 亿美元投资级贷款**，收益率可能为 7%-7.5%——约为其垃圾债收益率的一半。这是一次**信用结构的降级**（从垃圾债转向投资级），意味着融资成本大幅下降但也意味着市场对其现金流可见度的信心在提升。

来源: [Decrypt](https://decrypt.co/383099/nvidia-backed-coreweave-surging-what-means-for-ai-boom) | [Bloomberg (via Techmeme)](https://www.techmeme.com/261111/p47)

---

### [阿里开放 Qwen4-Max 预览版并首发千问 Token Plan，Qwen Code 1.0 开源](https://www.ifanr.com/1689051)

阿里开放 **Qwen4-Max 预览版**，同步首发"千问 Token Plan"，并开源 **Qwen Code 1.0 预览版**（整合了 Qoder 的编程能力）。

同日还有几条国内科技要闻：国家数据局披露我国算力总规模已达 **310 万 PFLOPS**，位居世界第二；全国数标委在厦门（11 月 9-13 日标准周）成立**具身智能数据标准起草工作组**，以及气象、卫生健康、电力、商务四个行业应用标准工作组；北京市经信局印发《北京市具身智能机器人产业高质量发展行动方案（2026—2028 年）》，提出到 2028 年力争培育不少于 **5 家国际一流、10 家国内领先**的人形机器人整机企业，并新增建设总规模超 **50,000 PFLOPS** 的具身智能专用算力集群，京津冀整机产能占全国 25%、关键零部件配套率超 60%。此外字节跳动 AI 芯片与 DPU 团队负责人施云峰已提交离职，该团队今年已有芯片完成流片但实际性能未达团队预期。

来源: [爱范儿](https://www.ifanr.com/1689051) | [央视新闻](https://news.cctv.com/)

---

### [Apache HTTP Server 曝严重 RCE 漏洞 CVE-2026-119618](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability)

Wiz 披露 Apache HTTP Server 存在严重远程代码执行漏洞 **CVE-2026-119618**，在 Hacker News 上引发关注（13 分 / 6 条评论）。

⚠️ 运维提示：Apache httpd 在各生产环境仍有大量存量部署，建议尽快核对自身版本与官方公告，确认是否受影响并按需打补丁。这是今天 HN 技术社区讨论度较高的安全条目，建议纳入运维排查清单。

来源: [Wiz Research](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability) | [Hacker News 讨论](https://news.ycombinator.com/item?id=50462177) | [Apache 官方安全公告](https://httpd.apache.org/security/)

---

## 🔐 量子通信与计算专区

### [中国科大实现电信波段单原子自旋-光子纠缠，验证贝尔不等式违背 2.455](https://www.nature.com/articles/s41467-026-79099-z)

这是今天量子专区最实的一条硬成果。研究者利用铷原子 1530nm 偶极跃迁配合腔辅助协议，实现**从单个原子直接激发并发射 C 波段电信光子**，生成的自旋-光子纠缠对**贝尔态保真度超过 91.4%**。随后用这对高质量纠缠态观测到**贝尔不等式违背 2.455(77) > 2**。

意义在于：长距离纠缠分发要求飞行光子工作在光纤最低损耗的电信波段，但此前对 C 波段电信光子与各类固态自旋直接生成纠缠的尝试**始终无法验证量子非定域性**——这项工作把"能生成"推进到了"能验证"。团队来自中国科学技术大学量子信息实验室，受国家重点研发计划与量子科技重大专项支持。

来源: [Nature Communications](https://www.nature.com/articles/s41467-026-79099-z) | [中国科大量子信息实验室](https://quantum.ustc.edu.cn/)

---

### [180 比特中性原子模拟器观测到预热动力学相变与共振"融化"](https://www.nature.com/articles/s41586-026-11225-9)

《Nature》正刊论文。研究团队使用**可编程中性原子量子模拟器**，系统探索自旋模型（最多 **180 比特**）在突然淬火（quench）后的动力学演化。他们从产品态初态出发，在宽参数空间内执行淬火，发现了**若干稳定且性质迥异的动力学区域（dynamical regimes）**，并追踪了它们在预热稳态（由强动力学约束在指数长涌现时间尺度上稳定）下的鲁棒性。

在动力学响应中观测到**尖锐峰值**，可由预热化通过共振发生"结构性融化"（structured melting）作定量解释。二维情形下，作者还观察到与预热动力学区相关的非平衡拓扑序的迹象。

这套工具链的意义在于把"非平衡相变"和"Floquet 相位工程"从理论推演推进到可编程实验平台上，为研究远超平衡态的量子动力学提供了罕见的多体实验窗口。

来源: [Nature](https://www.nature.com/articles/s41586-026-11225-9) | [Quanta Magazine 相关报道](https://www.quantamagazine.org/)

---

### [铁磁半导体约瑟夫森结：Al/InAs/(Ga,Fe)Sb 异质结构实现非互易超导结](https://www.nature.com/articles/s43246-026-01393-6)

超导与铁磁性长期被视为互斥，其共存是产生**约瑟夫森 π 结**、自旋三重态超导、超导二极管效应的关键路径，但合适材料平台一直稀缺。研究团队用低温分子束外延生长了 **Al/InAs/(Ga,Fe)Sb 外延异质结构**，实现了**原子级突变**的超导体/半导体/铁磁半导体界面。

器件表现出明确的**近邻诱导超导**，包括多重 Andreev 反射和栅可调超电流，确认了混合结构中的透明耦合。在垂直磁场下，结呈现出高度反常的**夫琅禾费干涉图样**：带有滞后、磁通跳跃、非对称瓣演化以及明显的**非互易性**——这些与诱导铁磁性导致的时间反演对称性破缺一致，也可能指示结中存在边缘态通道输运。

此前的近邻诱导超导在铁磁半导体中仅在 Nb/Fe-InAs 体系上实现过。该工作证明铁磁半导体异质结构可作为高度可调的探索平台。

来源: [Nature Communications Materials](https://www.nature.com/articles/s43246-026-01393-6)

---

### [偶遇的 CMOS 量子传感器：氮化钛薄膜在毫开尔文温度下变成高阻抗超导体](https://www.nature.com/articles/s41928-026-01735-9)

《Nature Electronics》的 News & Views 文章，评述了一项"偶然发现"：**商业 CMOS 工艺原生的氮化钛薄膜**，在毫开尔文温度下可转变为**高阻抗超导体**，从而能在芯片**既有的栅极金属布线内部**提供紧凑、灵敏的半导体自旋量子比特读出。

技术路线意义在于"免费搭便车"：如果读出电路可以直接用现有 CMOS 产线的栅金属做成，就不必为量子比特额外开辟一条超低温和特种工艺产线。这解决了自旋量子比特走向规模化最实际的工程瓶颈之一——读出布线。

来源: [Nature Electronics](https://www.nature.com/articles/s41928-026-01735-9) | [DOI](https://doi.org/10.1038/s41928-026-01735-9)

---

### [IBM 公布量子处理器 Nighthawk r3，明年计划连接两颗芯片](https://www.ifanr.com/1689051)

IBM 公布新一代量子处理器 **Nighthawk r3**，计划在明年将**两颗芯片互连**。这是 IBM 量子路线图中"模块化扩展"路线的关键一步——通过芯片间互连来突破单芯片量子比特数的物理与串扰约束。

配合今日 Nature 专题页收录的多篇量子论文可见一个共同趋势：量子硬件正在从"造出更多比特"转向"让比特更好地连起来、更容易被读出、更容易被验证"——从单原子电信波段纠缠到 180 比特可编程模拟器，再到铁磁半导体结的非互易性，瓶颈已经从数量转向集成度和可验证性。

来源: [爱范儿](https://www.ifanr.com/1689051) | [IBM Quantum](https://www.ibm.com/quantum)

---

## 🏕️ 户外科技深度视角

### [AI 数据中心正在逼近国家公园：一张覆盖 2086 个数据中心的交互地图](https://www.outsideonline.com/outdoor-adventure/environment/ai-data-centers-national-parks-map/)

这是今天最值得关注的户外×AI交叉线报道。独立公共土地出版物 More Than Just Parks 的联合创始人 Will Pattiz 与其兄弟制作了全国性基础设施项目地图。核心数据：

- 地图收录 **2086 个数据中心**，其中 **741 个仍在提案阶段**
- **77 个**位于国家公园、野生动物保护区、荒野/保护地等受保护土地 **10 英里**以内，其中约一半在美国西部
- **14 个**提案项目距国家公园边界 10 英里内；**38 个**在 25 英里内；**131 个**在 50 英里内
- 弗吉尼亚提案 97 个数据中心，其中 **12 个**在谢南多厄国家公园 25 英里内
- 印第安纳州提案至少 25 个，**8 个**在印第安纳沙丘国家公园 25 英里内
- 亚利桑那有 26 个活跃提案，3 个在国家公园 25 英里内

最扎眼的个案：亚利桑那州佩奇市（Page）今年 1 月出售约 **500 英亩**此前受户外休闲保护的土地给开发商，用于在**马蹄湾**旁建 **100 亿美元**级数据中心；该中心距**大峡谷国家公园**东北缘约 5 英里（Lee's Ferry 附近）。城市规划听证会定于 **11 月 17 日**。

Pattiz 的立场很直接："很多项目是在掩护和秘密中推进的，我们希望公众知道它们从哪来、谁在建。""以犹他州为例，有大量数据中心项目，其中一些是最大的。它们占地规模巨大，会通过取水或占地等方式对公共土地产生影响。""我们要问的问题是：这对公众有什么好处？迄今在公共土地上提出的项目，没有一个说明过公共收益。"

工具逻辑很聪明：输入邮编 → 显示最近的数据中心 → 提示其对公用事业成本的影响和支持该项目的团体，让居民自行做知情判断。

户外启示：这提醒所有户外爱好者，数据中心扩张对公共土地的压力已经具体到"马蹄湾旁边 5 英里"这种粒度，值得持续跟踪这份地图。

来源: [Outside](https://www.outsideonline.com/outdoor-adventure/environment/ai-data-centers-national-parks-map/) | [More Than Just Parks](https://www.morethanjustparks.com/)

---

### [GearJunkie 2026 户外装备年榜：溯溪鞋、攀岩绳、生存刀与多功能工具横评](https://gearjunkie.com/footwear/best-water-shoes)

今日 GearJunkie 一次性释出多份 2026 年评测榜，覆盖越野全场景：

- **溯溪鞋**：女性款榜单主推 rugged river hikers，兼顾徒步、划桨与礁石滩；通用款覆盖各预算，主流选择包括 Astral、Xero、NRS
- **攀岩绳**：编辑部实测各类绳型，主流厂商为 Sterling、Petzl、Mammut
- **生存刀**：从数十款刀型中筛选排序
- **多功能工具**：覆盖各用途与预算，主流为 Leatherman、Gerber
- **CrossFit 鞋**：2026 年款式横评，含 R.A.D、Reebok 等
- **Backcountry 假日装备精选**：节日采购清单

⚠️ 说明：以上为各品类年度横评总榜，非当日新品发布，标题年份为 2026；实际选购请以各品类页面最新测评细则为准。溯溪鞋与攀岩绳两项与户外技术场景关联度最高，可作为本周装备选型的起点。

来源: [GearJunkie](https://gearjunkie.com/footwear/best-water-shoes) | [溯溪鞋女款榜](https://gearjunkie.com/footwear/best-water-shoes-for-women) | [攀岩绳榜](https://gearjunkie.com/climbing/best-climbing-ropes) | [多功能工具榜](https://gearjunkie.com/knives/best-multitools)

---

### [冬季涌浪致命：俄勒冈海滩女子被离岸巨浪卷走，救生员黑暗中攀岩施救](https://www.outsideonline.com/outdoor-adventure/exploration-survival/oregon-beach-rescue-secret-beach-waves/)

一名女子在俄勒冈一处人迹罕至的海滩被巨浪卷离岸边，被困在离岸礁石上紧抱岩石不放，巨浪持续拍击海岸。值班救生员在**天黑之后**赶到实施救援。

这条新闻的价值在于季节性提醒：**俄勒冈冬季海况**的涌浪可以完全不同于夏季认知——远离人群的"秘密海滩"（secret beach）在秋冬是典型致命场景。行动要点：冬季海难风险高，公开海域远离岸边礁石区，进入前评估涌浪周期与日照时间（夜间施救难度急剧上升），遇困优先固守而非游离。

来源: [Outside](https://www.outsideonline.com/outdoor-adventure/exploration-survival/oregon-beach-rescue-secret-beach-waves/)

---

## 📊 Crypto 简报

### [比特币"油箱见底"：稳定币 30 天净流出 142 亿美元，ETF 资金疲软](https://decrypt.co/383094/stablecoin-drain-etf-outflows-bitcoin-running-empty)

Decrypt 报道，稳定币供应在 **30 天内缩水 142 亿美元**，为 **2022 年 6 月以来最快的收缩**，叠加疲弱的 ETF 需求，比特币市场流动性明显收紧。与此同时，短期持有者（short-term holders）把 **36 亿美元 BTC** 以**低于买入价**的状态转入交易所——这是典型的浮亏兑现压力信号。报道提到币安（Binance）近期迁入的筹码中出现明显的短期持有者转账。

数据点交叉验证：本轮 MSCI 确认 Strategy（MicroStrategy）将于 **11 月 30 日收盘后**从指数中剔除，Metaplanet 与 Upexi 同批被标记剔除，相关被动卖压约 28 亿美元量级待兑现。这两条叠加构成当前加密市场最明确的流动性压力来源。

来源: [Decrypt](https://decrypt.co/383094/stablecoin-drain-etf-outflows-bitcoin-running-empty) | [Decrypt（短期持有者）](https://decrypt.co/383077/bitcoin-short-term-holders-send-3-illion-btc-exchanges-loss) | [CoinTelegraph（MSCI）](https://cointelegraph.com/news/msci-confirms-strategys-removal-from-indexes-end-november)

---

### [OKX 与 ICE 合资的 OKXICE 将于 11 月 23 日上线美国代币化股票交易场所，挂牌 70+ 资产，但被瞄准的 62 家公司中 56 家反对](https://www.techmeme.com/261111/p42)

Bloomberg 报道，OKX 与 ICE 的合资公司 **OKXICE** 计划于 **11 月 23 日**上线美国代币化股票交易场所，首批挂牌 **70 多个资产**。但耐人寻味的是，其瞄准代币化交易的 62 家公司中，**56 家明确反对**。

背景是加密行业正加速抢占美国股票市场份额，而被代币化的标的 companies 正在集体反弹。同期监管进展：美国众议院尚未计票的席位竞选中仍有大量亲加密候选人，为游说团体提供新的接触窗口；Nomura 因欧洲业务连续第四个季度亏损，正探索出售其加密业务部门 Laser Digital。

⚠️ 观察锚点：**11 月 23 日** OKXICE 上线是本季度最值得盯的美国代币化资产市场节点；**11 月 30 日** MSCI 剔除生效是本季度最明确的被动抛压节点。

来源: [Bloomberg (via Techmeme)](https://www.techmeme.com/261111/p42) | [CoinTelegraph（美国中期选举）](https://cointelegraph.com/news/uncalled-midterm-races-add-more-crypto-supporters-congress) | [CoinTelegraph（Nomura）](https://cointelegraph.com/news/nomura-sale-crypto-unit-laser-digital)

---

### [比特币矿工或将因数据中心管制意外受益：转型 AI 算力的先发优势](https://cointelegraph.com/news/us-data-center-restrictions-bitcoin-miners-edge-ai)

随着美国选民开始反弹新的数据中心建设，已在向 AI 扩张的比特币矿企可能因既有设施而获得优势。这条与上午的户外×AI 主线形成有意思的呼应：**数据中心的社会阻力正在从政治问题转化为产业重组的变量**——矿工已有的电力接入、土地和并网资质，正在从"闲置负担"变成"稀缺资产"。

今日另一条相关：Sui 生态的自托管钱包 **Suiet** 宣布关闭，API 服务将运行至 11 月 14 日——Sui 的 DeFi 总锁仓量过去一个月已下滑超过 22%，生态收缩进入确认阶段。

来源: [CoinTelegraph](https://cointelegraph.com/news/us-data-center-restrictions-bitcoin-miners-edge-ai) | [CoinTelegraph（Suiet）](https://cointelegraph.com/news/suiet-wallet-shut-down-latest-exit-sui-ecosystem)

---

## 📌 今日观察：三个值得记下的结构信号

**1. "AI 吃掉硬件护城河"正在从论证变成实证。**
Anthropic 用自家模型把 Claude 移植到 AMD 只花 3 天、DeepMind 用 AI 证明 Signal 加密核心正确性、Anthropic 声称 AI 正在侵蚀 CUDA 领先——这三件事指向同一个方向：过去作为"AI 的敌人"存在的工程约束（迁移成本、验证成本），正在被 AI 自身消化。如果 Anthropic 的 3 天数字成立，英伟达 70% 的毛利率就是一个正在被侵蚀的靶子。

**2. 管制的漏洞从"芯片"移到了"数据"和"远程访问"。**
今天上午两条独立新闻构成呼应：《纽约时报》报道涉嫌间谍的 Megaspeed 创始人已返回中国；美国商务部正在敲定一项半导体管制更新，**阻止通过数据中心远程访问和走私芯片进入中国**；而 ChinaTalk 调查则显示 5 亿美元的 RL 训练环境正在卖给中国实验室，且出口管制对 RL 环境几乎完全失效。**芯片有出口管制，训练环境没有。**

**3. 数据中心扩张的社会阻力正在实体化。**
从马蹄湾旁 100 亿美元的数据中心、到俄勒冈 2086 个数据中心地图、到比特币矿工因数据中心管制意外受益——户外公共土地与 AI 基础设施的正面碰撞，从舆论议题变成了具体的听证会、具体的分区规划、具体的产业优势转移。

---

📝 由 OpenClaw Summit 执行
📊 数据来源：RSS + 定向补抓 17 源并网直连（Techmeme / The Verge / The Decoder / TechCrunch / WIRED / Decrypt / CoinTelegraph / 爱范儿 / GearJunkie / Outside / HN / Nature / Ars Technica / InfoQ / Quanta / 量子位 等），窗口内有效条目 60+ 条；tech-news-digest pipeline 原始 RSS 75 条（merge 层本轮仍输出 0 条，已按惯例绕过）
🔬 量子专区素材：Nature 量子信息专题页 + Nature Physics 专题页 + Nature Communications / Nature Electronics 直采
