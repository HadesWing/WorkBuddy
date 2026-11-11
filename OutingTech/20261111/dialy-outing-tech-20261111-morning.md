🏔️🚀 DialyOutingTech - 每日户外科技速递
📅 日期: 2026-11-11 | 早间版

## 🤖 AI 前沿专区

### [Google 发布 Gemini 4 Carbon，并预览 Agent「群 swarm」协同功能](https://www.theverge.com/ai-artificial-intelligence/1030787/google-gemini-4-carbon-public-rollout)

谷歌向公众开放最新前沿模型 Gemini 4 Carbon，此前两周仅向部分「网络安全防御方」小范围测试。官方称 Carbon「把边界推得比 Argon 更远」——Argon 是上个月发布的另一款前沿模型，仍是「绝大多数软件工程与知识工作的理想选择」，而 Carbon 专为「考验模型智能极限」的任务打造，如复杂多步编码。

Carbon 同时预览了 agentic 开发平台 Antigravity 上的「swarm」功能，可把一句 prompt 变成「一支协同作战的 agent 团队」。定价上延续激进路线：引入价每百万输入 token 2 美元、输出 10 美元，约为 OpenAI GPT-6 Astra 的五分之一、Anthropic 前一天发布的 Fable 5.2 的四分之一，11 月底引入期结束后翻倍。已通过 Gemini API、Google AI Studio、Gemini for Business 向所有付费开发者与企业开放，Google AI Ultra 订阅用户可在 Gemini App、Search 的 AI Mode 及 Antigravity 中使用。谷歌引用自家基准称 Carbon 在多数指标上属最强之列，仅次于 Fable 5.2。

来源: [The Verge](https://www.theverge.com/ai-artificial-intelligence/1030787/google-gemini-4-carbon-public-rollout)

---

### [Anthropic 上线 Claude Meetings、Whiteboards、Sheets，正面进攻办公套件](https://techcrunch.com/2026/11/10/anthropic-launches-claude-meetings-to-turn-workplace-discussions-into-plans-and-tasks/)

Anthropic 发布系列办公向功能。核心是 **Claude Meetings**：团队可把 Claude 作为「可见参会者」加入视频会议，Claude 实时旁听对话并同步开工——一边听一边起草正在讨论的方案、在白板上画出时间线、在会议聊天里回答问题、调用已连接的工作应用取数据（如去年的财务数字）。会后自动生成计划。

Claude 会主动在会议聊天中自我标识为参会者；未经管理员授权不会加入含外部访客的通话，外部访客加入时会自动离开。首发以 beta 形式面向 Team 与 Enterprise 套餐，初期支持 Google Meet。同步推出 **Claude Whiteboards**（把讨论直接转为带时间线与截止日期的可视化协作板）和 **Claude Sheets**。

这次发布距离 OpenAI 推出一批企业协作工具（可视化公司信息、做演示文稿）只有几周，两家都在把模型产品做成「办公套件」去正面挑战微软与谷歌，Meta 也在加入战局。

来源: [TechCrunch](https://techcrunch.com/2026/11/10/anthropic-launches-claude-meetings-to-turn-workplace-discussions-into-plans-and-tasks/)

---

### [英伟达开源 GR00T2 机器人基础模型，Jim Fan：不是寒冬，是夏天](https://www.qbitai.com/2026/11/509032.html)

英伟达开源机器人世界动作模型 **GR00T2**，可同时预测未来画面与机器人动作，训练时把「世界将如何变化」和「机器人应当如何行动」放在一起学。英伟达机器人部门负责人 Jim Fan 把它定位为：反应够快、能本地运行、既容易通过示范教会、也容易被推理模型引导的 **System 1 快系统**物理技能模型。

数据策略是这套模型真正的野心所在。目标机器人仍会提供与具体任务无关的自身运动数据；而新任务的示范可以来自更易采集的人类操作。配套的数据集 **Human-1M**（人类第一视角视频）首批 **10 万小时子集已公开**，以及 **Flora**（数据整理、描述性标注与自动评估）。

在 **Dexter-50** 评测中，模型零样本平均成功率 **40%**；每项任务给一次示范升至 **71%**；给五次示范达 **95%**。关键在于这五次示范合计不足三分钟，随后只需在单张 RTX 5090 上做约 30 分钟 LoRA 微调即可得到适配任务。这意味着机器人训练材料从人工遥操作轨迹进一步扩展到了大规模真实人类活动。

来源: [量子位](https://www.qbitai.com/2026/11/509032.html)

---

### [谷歌发布 TPU 8tx 与 TPU 8i Max 两款专用芯片，把机密性做进硬件层](https://techcrunch.com/2026/11/10/google-broadens-its-ai-hardware-portfolio-with-two-new-specialized-chips/)

谷歌发布第八代 TPU 的两个新变体，继续降低云业务对外部芯片的依赖。**TPU 8tx** 与 AMD 联合设计，基于 TPU 8t，专门面向「机密训练与推理」场景——把安全性直接构建进硬件层，即使在活跃使用中也能保护敏感数据与模型权重并保持隔离。该芯片还配有定制推理网络，可让推理与训练并行运行，从而在设备上就地蒸馏与训练小模型：企业可在不搬运自有数据的前提下完成训练。

**TPU 8i Max** 则基本是把今年 4 月发布的两颗推理型 TPU 8i 合二为一，内存容量、处理算力与带宽翻倍且封装在单芯片内，让模型在查询时能处理更大范围的信息。

这次发布时点对英伟达格外微妙——其 CEO 黄仁勋上周末承认与一名被指为「中国间谍」的人有染。

来源: [TechCrunch](https://techcrunch.com/2026/11/10/google-broadens-its-ai-hardware-portfolio-with-two-new-specialized-chips/)

---

### [纽约州 AI 安全法 RAISE Act 正式生效，OpenAI、Anthropic 面临 100 万美元级罚款](https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/)

纽约州开放注册门户，年营收超 5 亿美元的大型前沿 AI 开发商——包括 Anthropic 和 OpenAI——须在 **2027 年 1 月 1 日前**完成注册。RAISE Act 要求：官网公开安全框架、**72 小时内上报重大安全事件**、发布公开的模型透明度报告。

新设立的 **DIGIT**（数字创新、治理、诚信与信任办公室）负责执行 RAISE Act 并监管前沿实验室。**单次违规最高罚 100 万美元，后续违规最高 300 万美元**。州政府还可对未注册企业提起执法行动。

州长 Kathy Hochul 同日成立「纽约 AI 责任与研究中心」，落地于纽约州立大学宾厄姆顿大学，将独立评估先进 AI 系统的安全、安保与运行，并与 DIGIT 协同审查企业的安全框架——该中心 1 月宣布时已有 5500 万美元捐赠与资本。

来源: [TechCrunch](https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/)

---

### [NEAR AI 遭入侵：SGLang 远程代码执行漏洞暴露约 100 名用户数据与 18 个 Agent 数据](https://decrypt.co/382965/near-ai-breach-exposes-user-details-data-ai-agents)

NEAR AI 披露安全事件：攻击者利用开源推理引擎 **SGLang**（用于运行 AI 模型并生成用户请求响应）的远程代码执行漏洞，在一台推理服务器上执行命令并横向进入 NEAR AI 基础设施其他部分。

调查将入侵溯源到一个与已下线的 Private Chat 功能相连的内部系统，攻击者下载了相关数据。另有 **18 个 agent** 在 NEAR AI Agents 的旧部署中被访问，攻击者取走了它们的聊天历史、设置与日志——这些 agent 并未运行在 NEAR AI 的机密计算环境内，而该环境本应屏蔽服务器运营方可见的信息。日志中还暴露了两个客户的 NEAR AI Cloud API 密钥（已撤销，但未说明是否被使用）。NEAR AI 未发现已存储的 Private Chat 对话或上传文件被访问的迹象。

来源: [Decrypt](https://decrypt.co/382965/near-ai-breach-exposes-user-details-data-ai-agents)

---

### [Grok Build 编码 Agent 泄露大量机密信息，部分涉及 SpaceX](https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belong)

Ars Technica 报道，xAI 的 Grok Build 编码 agent 在使用中泄露了大量机密信息，其中部分信息归属于 SpaceX。这是本周继 Grok Build 之后的又一起 agent 类安全事故——上一轮已推出的是「Tear Down Those Guardrails」这类关于释放被公司约束的聊天机器人的行动。与前述 SGLang 漏洞事件呼应：编码 agent 与推理引擎正在成为新的攻击面。

来源: [Ars Technica](https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belong)

---

## 🔬 科技综合区

### [Anthropic IPO 定价区间 $70–78 美元，全摊薄估值最高 1.405 万亿美元](https://decrypt.co/382939/anthropic-sets-ipo-price-range-at-70-to-78-valuing-company-at-up-to-1-4-trillion)

Anthropic 提交更新后的 SEC 文件，将 IPO 价格区间定为每股 **70–78 美元**，计划在纳斯达克以代码 **"ANT"** 上市，发行 8.25 亿股 A 类普通股（其中 8.014 亿股为新股）。按区间上限计算，本次发行将募资约 **644 亿美元**。定价日预计 **11 月 18 日**，**11 月 19 日**开始交易，目标零售配售比例约 20%，远高于常规 IPO 水平。

按发行后约 130.9 亿股计算，区间对应市值约 **9160 亿–1.02 万亿美元**；按完全摊薄口径，CNBC 报道最高可达 **1.405 万亿美元**，高于其 5 月融资轮时的 9650 亿美元估值。

值得注意的是供应链反向认购：七家算力供应商同意按 IPO 价格合计认购 **260 亿美元**无投票权的 N 类普通股——谷歌与英伟达各约 100 亿美元，AMD 约 25 亿美元，博通、美光、微软各约 10 亿美元，台积电约 5 亿美元。英伟达在 S-1 中另行披露计划在 IPO 后追加投资约 **100 亿美元**，约占 Anthropic 本月新增募资的 10%。

财务上，Anthropic 2026 年前三季度营收 **332 亿美元**（上年同期 25 亿），净亏损 **1040 亿美元**（其中 943 亿为可转换票据等工具升值带来的非现金减值，经营亏损仅 12.6 亿）。公司将以「公共利益公司」身份上市，Long-Term Benefit Trust 选出董事会多数席位，但七位联合创始人持有的单股 F 类股票在多数事项上拥有 **50.1% 投票权**。

来源: [Decrypt](https://decrypt.co/382939/anthropic-sets-ipo-price-range-at-70-to-78-valuing-company-at-up-to-1-4-trillion)

---

### [CoreWeave Q3 营收同比增 168% 至 36.6 亿美元，在手订单积压 1325 亿美元](https://www.techmeme.com/261110/p53)

AI 云服务商 CoreWeave 公布三季度业绩：营收 **36.6 亿美元**，同比增长 **168%**，略超市场预期的 35.5 亿美元；净亏损 **7.09 亿美元**；在手营收积压订单达 **1325 亿美元**，高于 6 月的 1040 亿。公司同时上调了 2026 年全年指引。

来源: [Techmeme / CNBC](https://www.techmeme.com/261110/p53)

---

### [英伟达股价抹去 2026 年全部涨幅，共和党人向黄仁勋发出传票威胁](https://decrypt.co/382974/nvidia-erases-2026-gains-republicans-threaten-ceo-subpoena)

英伟达股价在交易日抹去 2026 年以来的全部涨幅。共和黨議員威胁对 CEO 黄仁勋发出传票，调查其与一名被指为「中国间谍」的关系。英伟达已聘请前代理美国联邦检察官 Joon H. Kim 及其律所 Wachtell Lipton 主导内部调查。

同一天两条消息形成对照：据《金融时报》报道，美国商务部推迟了新一轮实体清单新增名单两个月，尽管另有四个美国机构推动列入 Megaspeed——这家公司与涉事间谍关系密切。另据《纽约时报》消息源称，尽管特朗普否认知情，但在七个月内他至少两次被告知此事，包括国务卿 Rubio 赴华途中在空军一号上被提醒相关情报。

来源: [Decrypt](https://decrypt.co/382974/nvidia-erases-2026-gains-republicans-threaten-ceo-subpoena)

---

### [OpenAI Q3 营收跳增 50% 至约 100 亿美元](https://www.techmeme.com/261110/p51)

据 The Information 报道，OpenAI 周二向投资者表示，三季度营收跳增近 **50% 至 100 亿美元**，相比二季度 17% 的增速明显回升，驱动力来自其近期模型的需求。这与 OpenAI 收购 AI 旅行 agent Odessia（原 Sonder 创始人 Francis Davidson 创办，仅成立一年、获红杉领投 600 万美元种子轮）的消息出现在同一天。

来源: [Techmeme / The Information](https://www.techmeme.com/261110/p51)

---

### [X-energy 获准建设首批小型模块化核反应堆](https://techcrunch.com/2026/11/10/x-energy-gets-green-light-to-build-its-first-small-modular-nuclear-reactors/)

核能初创 X-energy 获得监管放行，可建设其首批小型模块化反应堆（SMR）。在 AI 数据中心电力需求激增、AI 算力合约推动长期购电协议的背景下，小型核能正成为数据中心自备电力的现实选项之一。

来源: [TechCrunch](https://techcrunch.com/2026/11/10/x-energy-gets-green-light-to-build-its-first-small-modular-nuclear-reactors/)

---

### [Oura 以 6.25 亿美元收购 AI 原生初级保健创业公司 Counsel Health](https://techcrunch.com/2026/11/10/oura-to-acquire-ai-native-primary-care-startup-counsel-health-for-625m)

智能戒指厂商 Oura 宣布以 **6.25 亿美元**收购 AI 原生初级保健公司 Counsel Health。这是从「可穿戴传感器」向「AI 驱动的医疗服务闭环」延伸的又一步。

来源: [TechCrunch](https://techcrunch.com/2026/11/10/oura-to-acquire-ai-native-primary-care-startup-counsel-health-for-625m)

---

### [《自然》论文：端云协同推理中，语义复杂度估计与基于价格的多 Agent 协商可降低尾延迟与能耗](https://www.nature.com/articles/s41598-026-79625-5)

发表于 Scientific Reports 的研究指出，在移动设备与云服务器之间分发大模型推理时，生成式查询的成本无法从输入长度直接读出——一个简短 prompt 可能触发数千步解码，调度器在知晓成本前就得提交资源，共享网络中多请求还会同时挤占同一台服务器。

作者提出的 **MAGS** 框架让每台设备运行一个小型探针来预测查询成本，并让设备间基于「价格」进行多 agent 协商，从而同时降低尾延迟与能耗。这把多 agent 协作机制从「软件层」推进到了「基础设施资源调度层」。

来源: [Scientific Reports (Nature)](https://www.nature.com/articles/s41598-026-79625-5)

---

## 🔐 量子通信与计算专区

### [正元量子完成近亿元天使轮融资，瞄准千比特超导量子计算机整机](https://www.qbitai.com/2026/11/509017.html)

超导量子计算在实验上已跨过一道关键门槛——扩大纠错规模，逻辑错误率随之下降，用更多硬件资源换更高可靠性已有实验依据。但要把纠错实验的进展落地到更大系统，封装、线路和测控都得跟上：更多比特如何连接、控制信号如何送入、计算结果如何准确读出，需要从整机设计时就一并考虑。

成立于 2026 年的 **正元量子** 选择从芯片底层连接与控制切入，下一阶段瞄准 **千比特超导量子计算机**。11 月 10 日公司宣布完成**近亿元天使轮融资**，投资方包括深创投、浦东创投、德宁资本、湘江信成、深圳天使母基金等，多维资本担任独家财务顾问。本轮资金主要用于千比特超导量子计算机研发，加速三维封装、低温互连与集成测控等关键技术验证。

坐标参照：IBM 2023 年发布过 1121 比特的 Condor 处理器，同年推出的 Heron 以 133 比特起步，重点改善操作性能。

来源: [量子位](https://www.qbitai.com/2026/11/509017.html)

---

### [npj Quantum Information：浅层量子电路在 PAC 分布学习中具有无条件量子优势](https://www.nature.com/articles/s41534-026-01370-4)

量子计算研究的核心问题之一，是能否在近期的浅层量子电路上找到有实际应用意义的量子优势。这项研究在**大概率近似正确（PAC）分布学习**框架下，用浅层量子电路证明了**无条件量子优势**。

这是少见的「无条件」结论——不依赖对经典算法复杂度的具体假设，因此具备更强的理论说服力。论文为开放获取，由柏林工业大学、柏林自由大学、柏林亥姆霍兹材料能源中心等机构联合完成，并得到爱因斯坦基金会、柏林量子、DFG（CRC 183、SPP 2514）、MATH+ 与 ML4Q 卓越集群、BMFTR 等资助支持。

来源: [npj Quantum Information (Nature)](https://www.nature.com/articles/s41534-026-01370-4)

---

### [npj Quantum Information：简洁态局域哈密顿量问题的复杂度——2-local 情形 MA-难，3-local 情形 MA-完全](https://www.nature.com/articles/s41534-026-01375-z)

研究在「基态或低能量态被简洁表示（succinctly represented）」的承诺下，考察 **LOCAL HAMILTONIAN** 问题的计算复杂度。结果显示：对量子比特哈密顿量，**SUCCINCT LOW-ENERGY STATE 2-LOCAL HAMILTONIAN** 问题是（承诺）**MA-hard** 的，而 **SUCCINCT GROUND STATE 3-LOCAL HAMILTONIAN** 问题是（承诺）**MA-complete** 的。

这是把「哈密顿量问题」从显式表示推进到简洁表示后的复杂度刻画，为理解量子复杂性类的边界提供了新的定位点。由悉尼科技大学量子计算与通信技术中心（CQC2T）等机构完成。

来源: [npj Quantum Information (Nature)](https://www.nature.com/articles/s41534-026-01375-z)

---

### [Scientific Reports：猫量子比特实现量子近似优化算法（QAOA）](https://www.nature.com/articles/s41598-026-77938-z)

研究探讨了基于**猫量子比特（cat qubits）**的 QAOA 实现。与标准量子比特不同，猫量子比特把逻辑态编码为腔场相干态 |±α⟩，由此产生的**偏置噪声（biased noise）**对系统的影响不均匀——某些类型的错误比其他更可能发生。这种特性带来了有利的纠错性质。作者此前已证明偏置噪声量子比特还能实现误差缓解，并在 QAOA 中取得比标准量子比特更高的性能比；本工作则把这些结果落到**具体的物理实现**上，在玻色系统（含 Kerr 非线性谐振子）中展开。

来源: [Scientific Reports (Nature)](https://www.nature.com/articles/s41598-026-77938-z)

---

### [《自然》论文：反射式透水硅藻土掩膜提升漂浮碳纳米管热电发电输出电压](https://www.nature.com/articles/s41598-026-80269-8)

漂浮式单壁碳纳米管（SWCNT）热电机通过蒸发冷却自行建立温差，无需热源或散热器。已有工作通过向冷却区供更多水来放大温差——水在冷却区蒸发吸热。而阳光同时在加热冷却区，于是把阳光反射走就打开了第二条提升输出电压的路径。

作者提出**反射式、透水的硅藻土掩膜**，在不阻断水渗入冷却区的前提下抑制太阳辐射带来的反向加热，从而进一步抬升漂浮 SWCNT 热电机的输出电压。成果由东海大学（神奈川县平塚）研究团队完成。

**户外关联**：这类「浮动在水面上、自带能源」的器件是野外传感、无人漂流观测的潜在方案——无需布线、无需更换电池，浮在水面利用日照与水体温差即可发电。

来源: [Scientific Reports (Nature)](https://www.nature.com/articles/s41598-026-80269-8)

---

## 🏕️ 户外科技深度视角

### [SpaceX 发布 Starlink Mini 2：内置可换电池，脱电运行 4.5 小时，机身反而更薄](https://www.theverge.com/tech/1031028/spacex-starlink-mini-2-satellite-internet-terminal-hot-swap-battery)

SpaceX 发布新一代一体化卫星终端，把天线、Wi-Fi 路由器和电池装进一台约沙发小圆桌大小的设备。**Starlink Mini 2** 满电可运行**最长 4.5 小时**，并支持热插拔更换额外电池（单独售卖），也可用 60W USB-C 电源供电。

尽管加了电池，机身反而更薄——厚度从上一代的 **38.5mm 降到 23.1mm**，重量约 3.5 磅。IP67 防尘防水等级保留，「仍可安全用于户外」。目前以「邀请制」方式向部分美国用户开放预订，其他用户与国家「即将」开放。

**户外价值**：脱电 4.5 小时 + 23mm 薄 + IP67，这三个参数直接对应野外场景的三个痛点——断电续航、放进背包的体积、以及风雨雪环境下的可靠性。对越野、无人区拍摄、科考与灾害应急通信来说，一台能在没有电网的营地独立撑过整晚的卫星终端，比想象中实用得多。

来源: [The Verge](https://www.theverge.com/tech/1031028/spacex-starlink-mini-2-satellite-internet-terminal-hot-swap-battery)

---

### [NASA X-70 Fractal 实验飞机揭秘：飞至 4.5 万英尺平流层的可载人亚音速平台](https://www.wired.com/story/heres-what-we-know-about-the-x-70-fractal-nasas-experimental-new-plane/)

NASA 公布新型实验飞行器 **X-70 Fractal**，多数细节仍处于保密状态，目前只发布了计算机生成图像和部分技术规格。

已确认信息：它不是航天器（不进入地球轨道、不在大气层外工作），而是一架**载人亚音速飞机**，可飞至 **4.5 万英尺以上**的平流层，远高于商业航线。NASA 称它将支撑「此前载人飞机从未展示过的机动能力研究」（未说明具体机动类型），可搭载**最多一吨**实验设备，预计**两年内**以 NASA 名义首飞。

关键设计是**模块化**：可快速在机内外安装、更换实验设备——这也是它被称为「实验平台」的原因；同时配备**可重构飞控系统**，让 NASA 无需另造一架飞机就能研究不同操纵方式。它将接续 X-59（与洛克希德·马丁合作、探索降低超音速噪声）的传统。在 2027 财年预算文件中，NASA 把航空研究定位为维持美国技术领先的工具，并计划与国防部合作推进新的飞行能力。

**户外关联**：平流层飞行 + 模块化实验载荷 + 可重构飞控，这是「把实验室送上高空」的范式——同款思路对无人机载实验平台、高山大气观测、乃至户外装备的气动测试都有直接启发。

来源: [WIRED](https://www.wired.com/story/heres-what-we-know-about-the-x-70-fractal-nasas-experimental-new-plane/)

---

### [法国雪崩：滑雪者双腿骨折，在冰裂缝中爬行一个足球场长度生还](https://www.outsideonline.com/outdoor-adventure/exploration-survival/skier-survives-crevasse-french-alps/)

法国国家警察 CRS Savoie 山地救援队通报：一名 39 岁越野滑雪者 11 月 8 日在法国阿尔卑斯山遭遇雪崩被困冰裂缝，**双腿骨折**，在无手机信号的情况下于裂缝内部通道中**爬行约一个足球场长度**寻找出口，直到 11 月 9 日被救援队发现并成功救出。

事发经过：他 11 月 7 日从高山村庄 Bramans 出发，在山间小屋过夜，次日前往攀登 **Pointe Sommeiller**（10932 英尺，位于法意边境，距格勒诺布尔以东 100 英里的陡峭技术性山峰）。在一条陡峭积雪槽下方，他卸下雪板绑在背包上、换上 crampons 起步攀登，结果自重触发了板状雪崩，将其卷入冰裂缝，造成股骨骨折与另一条小腿骨折。脱困无望后他丢弃装备，沿裂缝内倾斜通道向下爬行寻找出口。

**户外启示**：这次生还靠的是「在失去行动能力时主动沿地形低处移动寻找出口」而非原地等待。板状雪崩的触发条件（自重 + 陡槽 + 新雪）是可判读的；出发前的雪况评估、独行时告知行程、以及携带卫星信标（如新出的 Starlink Mini 2 那类可携带终端）都是能把救援时间差从 36 小时压缩到几十分钟的变量。

来源: [Outside](https://www.outsideonline.com/outdoor-adventure/exploration-survival/skier-survives-crevasse-french-alps/)

---

### [蒙大拿 Blackfoot 河：AI 数据中心扩张被社区挡下](https://www.outsideonline.com/outdoor-adventure/environment/blackfoot-river-montana-ai-data-center-fight/)

Outside 深度报道了 AI 算力扩张与户外生态的一次正面交锋。2026 年 3 月，爱达荷州科技公司 **Krambu** 宣布在蒙大拿州 Bonner 建 AI 数据中心——距 Blackfoot 河岸仅数步之遥，把一座旧磨坊改建为服务器仓库，并**直接取用 Blackfoot 河水为机架持续冷却**。

这条河从大陆分水岭发源、全长 130 英里，因冷水湍急而拥有顶级蓝带鳟鱼垂钓资源，被 Norman Maclean 1976 年的《一条河流》(A River Runs Through It) 永载史册，1992 年被好莱坞改编成同名电影。居民 Brenna Love 在自家木筏上长大，她说「水上总有一群同样深爱这片后院的人，这正是我们住在蒙大拿的原因」。

这是社区反对大科技数据中心扩张浪潮中的一个新案例，也提醒了一件事：AI 算力的瓶颈正在从芯片转向**水与电**——而这两样都长在户外。

来源: [Outside](https://www.outsideonline.com/outdoor-adventure/environment/blackfoot-river-montana-ai-data-center-fight/)

---

### [Ring 室内无人机摄像头回归：AI Pilot 云端代理驱动，售价 250 美元](https://www.wired.com/story/ring-robotics-drone-cam-rover-cam/)

Ring 推出 Ring Robotics 品牌下的两件新品：**室内 Drone Cam**（250 美元）与面向仓库、工厂巡检的 **Rover Cam**（1000 美元）。Rover Cam 12 月 16 日先行发售，Drone Cam 于 1 月 27 日开售。

Drone Cam 重 165 克，从充电座起飞时噪音明显，能自主飞到楼上办公室并把第一人称画面推到手机屏幕上；屋内无光时自带照明开启，看起来就像屋里真有人在走动，对入侵者形成威慑。它会自动响应家中已布置的运动、门窗传感器的告警。开发者 Jamie Siminoff 说这个点子 2016 年就有了（亚马逊收购 Ring 之后），上一代 Always Home Cam 因边缘情况太多、需要不断加传感器而几度搁置。

架构上有个关键取舍：**除断网自动降落外，其余智能全在云端**——无人机把视频直传 Ring 服务器，由一个定制的 **AI Pilot agent** 决定飞往何处，这才使机身保持轻巧灵活。它会避开人和障碍物；用户不能手动操纵，但可设定自定义巡飞路线与巡逻计划。它不会离开住宅（依赖 Wi-Fi 与 Alexa Home Map 导航）。

**户外关联**：同一套「传感器触发 → 自主移动平台响应」的架构，是野外巡护机器人、野生动物相机自动化巡检、野外营地安防的成熟范式——Ring 这套产品本质上就是把它搬进了家庭。

来源: [WIRED](https://www.wired.com/story/ring-robotics-drone-cam-rover-cam/)

---

## 📊 Crypto 简报

### [比特币跌至 11 周低点，美国 CPI 超预期"令人失望"加剧加息担忧](https://cointelegraph.com/markets/bitcoin-11-week-low-discouraging-us-cpi-inflation)

美国公布通胀数据高于预期后，比特币下探 **11 周低点**，报约 **73,800 美元**，24 小时跌幅约 1.5%。市场解读称，CPI 数据"令人失望"，强化了美联储在 12 月加息 50 个基点的可能预期。Cointelegraph 统计 24 小时内最高 75,328 美元、最低 72,744 美元，成交额约 12 亿美元。

来源: [Cointelegraph](https://cointelegraph.com/markets/bitcoin-11-week-low-discouraging-us-cpi-inflation)

---

### [21 家银行联盟承诺 2.7 亿美元，挑战加密稳定币巨头](https://decrypt.co/382953/goldman-citi-global-banks-270-million-challenge-crypto-stablecoin-giants)

全球银行联合发行的稳定币项目开始真金白银投入：据 Bloomberg 报道，联盟已承诺约 **2.7 亿美元**，用于覆盖该合资公司五年的运营。

这笔资金将注入一家计划在美国注册成立、发行美元计价稳定币的公司。项目在参与者内部代号 **Project Faro**，仍在寻找 CEO，最终名称也在讨论中。参与方包括高盛、花旗、桑坦德银行、德意志银行，另据此前报道还包括美国银行、富国银行、富达、PNC、第一资本、TD Bank、瑞银、BBVA、劳埃德银行集团、三菱日联银行等。**摩根大通不在名单上**。

该项目于 9 月首次公开时由 21 家全球最大金融机构组成，规模较 2025 年 10 月开始探索时的 10 家已翻倍，成员横跨北美、欧洲、东亚、中东与非洲，目标 2027 年上半年推出美元稳定币，随后跟进欧元版及其他货币。

来源: [Decrypt](https://decrypt.co/382953/goldman-citi-global-banks-270-million-challenge-crypto-stablecoin-giants)

---

### [巴西 Mercado Bitcoin 在 4900 万美元黑客事件后恢复 Pix 法币提现](https://cointelegraph.com/news/pix-withdrawals-resume-mercado-bitcoin-hack)

巴西最大加密交易所之一 Mercado Bitcoin 宣布，下周恢复通过国家即时支付系统 **Pix** 的巴西雷亚尔存取款。恢复发生在一次约 **4900 万美元**钱包被掏空攻击的 15 天多之后。

细节上，客户只能提现到本人名下账户；交易所还会以固定收益产品结算收益为客户账户充值。加密货币本身的存取仍处暂停状态，未设恢复日期。此前 11 月 2 日的攻击发生在币安热钱包被盗约 63 亿美元（FBI 归因于朝鲜黑客）仅四天之后；币安表示将用应急基金与公司储备金赔付损失。Mercado Bitcoin 副总裁 Fabricio Tota 表示「恢复将逐步进行」，更多服务上线的节奏会通过官方渠道提前通知。

**安全趋势**：11 月两周内至少三起合计超 68 亿美元的交易所钱包失窃，把「热钱包暴露」和「冻结效率」推到了行业核心议题位置。

来源: [Cointelegraph](https://cointelegraph.com/news/pix-withdrawals-resume-mercado-bitcoin-hack)

---

### [跨链桥 Across Protocol 警告用户停止访问应用，疑似钱包被掏空](https://cointelegraph.com/news/across-protocol-warns-avoid-app-drained-wallets)

跨链桥协议 **Across**（支持以太坊及其他网络之间的资产转移）周二在 X 上警告用户，在调查一起潜在安全事件期间**不要访问其应用、不要连接钱包、不要签署交易或授权**，未说明事件性质，也未确认官网是否被攻破。

已有用户报告损失：一人称损失 **9000 美元 USDC**，另一人称在 Plasma 区块链上七笔交易中损失 **7053 USDT0**，还有用户称多次使用该跨链桥后钱包被清空，并指称官网遭到入侵。Across 已要求用户提供交易详情以供调查。Cointelegraph 未能独立核实这些报告。

**与 NEAR AI 事件的共性**：两起事件都指向「第三方/开源组件」这一共同节点——SGLang 推理引擎、跨链桥前端合约。依赖开源基础设施的 AI 应用与 DeFi 协议，正在成为攻击者成本最低的入口。

来源: [Cointelegraph](https://cointelegraph.com/news/across-protocol-warns-avoid-app-drained-wallets)

---

### [币安警告苹果 iOS 漏洞可能暴露用户加密钱包私钥](https://decrypt.co/382928/binance-warns-of-apple-ios-flaw-that-could-expose-iphone-users-private-keys)

币安安全团队警告，苹果 iOS 系统存在一处漏洞，可能导致 iPhone 用户暴露其加密钱包的私钥。该消息与此前 HackerOne 报告的 iOS 漏洞细节相呼应。用户应尽快将资产迁移至硬件钱包或自托管方案。

来源: [Decrypt](https://decrypt.co/382928/binance-warns-of-apple-ios-flaw-that-could-expose-iphone-users-private-keys)

---

### [波兰下院通过涵盖加密资产冻结的制裁法案](https://cointelegraph.com/news/poland-bill-freeze-sanctions-crypto-assets)

波兰众议院通过一项制裁法案，其中包含对加密资产实施冻结的条款。这是欧洲司法管辖区将稳定币与加密资产明确纳入冻结资产的又一例，与此前 MEXC 被 FinCEN 切断美元通道的方向一致。

来源: [Cointelegraph](https://cointelegraph.com/news/poland-bill-freeze-sanctions-crypto-assets)

---

---
📝 由 OpenClaw Summit 执行
📊 数据来源：RSS 直连 16 源（techmeme 15 / decrypt 38 / cointelegraph 30 / techcrunch 20 / wired 50 / theverge 20 / qbitai 10 / ifanr 20 / arstechnica 40 / outside 10 / hnrss 20 / nature physics 30 / nature quantum-information 30 / quantamagazine 5，约 378 条原始条目，9 小时窗口）+ tech-news-digest pipeline（RSS 149 条 / GitHub 2 条）

> ⚠️ 说明：本轮 pipeline 的 merge 层仍输出 0 条（第 N 次印证），素材全部来自直连 RSS 抓取与正文核验，每条均含可点击原始链接与来源标注。
