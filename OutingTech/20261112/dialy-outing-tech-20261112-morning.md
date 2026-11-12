## 🤖 AI 前沿专区

### [Anthropic 称 AI 正在侵蚀英伟达的 CUDA 护城河：AMD 芯片切换从数月缩短到三天](https://the-decoder.com/anthropic-says-ai-is-eroding-nvidias-cuda-lead-cutting-an-amd-chip-switch-from-months-to-three-days/)

英伟达最核心的竞争优势从来不只是硬件，而是 CUDA 软件生态带来的迁移成本。Anthropic 在投资者材料中披露：今年首次启用 AMD GPU 时，由自家前沿模型 Mythos 完成移植工作，Claude 在 AMD 平台跑起来只用了三天，而过去带起一个新芯片平台需要几十名工程师忙上几个月。首席计算官 Tom Brown 表示，Anthropic 目前已在全部四大芯片家族上训练和运行 Claude——公司早年在多数同行认为"不值得"时押注了多芯片策略，把不同厂商、架构、地区的算力当成一个可互换的池子。

这意味着：若数据属实，长期被视为英伟达护城河的"软件开销"正被 AI 自身压缩。在算力供给紧张的背景下，多芯片策略让公司可以纯粹按价格性能比择优，而不必被单一供应商锁定。

来源: [The Decoder](https://the-decoder.com/anthropic-says-ai-is-eroding-nvidias-cuda-lead-cutting-an-amd-chip-switch-from-months-to-three-days/)

---

### [OpenAI 季度营收首次突破 100 亿美元，但经营亏损仍在扩大](https://techcrunch.com/2026/11/11/openais-quarterly-revenue-reportedly-crosses-10b-for-the-first-time/)

据《华尔街日报》与 The Information 报道，OpenAI 第三季度营收环比增长约 50% 至 100 亿美元，而第二季度增速仅 17–18%，去年同期为 39 亿美元。调整后经营亏损从第二季度的 101 亿美元微升至 109 亿美元，但经营亏损率从 -150% 收窄到 -109%。OpenAI 年化营收已达 500 亿美元。

但对照组的数字更刺眼：Anthropic 第三季度营收增长 47% 至 170 亿美元，已连续两个季度在企业市场领先于 OpenAI；Anthropic 称其年化营收一个月内增加 100 亿美元、达到 810 亿美元（口径不同：Anthropic 计入云伙伴转售，OpenAI 只计自身份额）。ChatGPT 周活 12 亿、付费订阅 1 亿，ChatGPT 广告业务 8 月年化营收已达 10 亿美元。

来源: [TechCrunch](https://techcrunch.com/2026/11/11/openais-quarterly-revenue-reportedly-crosses-10b-for-the-first-time/) / [The Decoder](https://the-decoder.com/enterprise-sales-push-openais-quarterly-revenue-to-10-billion-though-it-still-trails-anthropic/)

---

### [谷歌推出 Gemini Decisions API 与 Gemini Decision 1 模型：一次通过可评 1000 个问题](https://the-decoder.com/google-joins-the-decision-model-wave-with-gemini-decision-1-scoring-1000-questions-in-a-single-pass/)

谷歌 DeepMind 推出面向"封闭式快速决策"的 Gemini Decisions API，专攻是/否判断、多选题与量表评分这类场景。底层模型 Gemini Decision 1 可在单次推理中并行处理最多 1000 个独立问题，横跨文本、图像、音频等多种模态。

定价上，API 为每百万输入 token 0.10 美元且不收输出 token 费用——按谷歌说法约为 Gemini 3.5 Flash-Lite 的五分之一。现已通过 Google AI Studio 提供，OpenRouter、LangChain、Vercel 等集成陆续上线。近几周类似模型密集出现：先是初创公司 Jev，随后 OpenAI、Cloudflare、微软纷纷跟进。

来源: [The Decoder](https://the-decoder.com/google-joins-the-decision-model-wave-with-gemini-decision-1-scoring-1000-questions-in-a-single-pass/) / [Google](https://www.techmeme.com/261111/p40)

---

### [美国数据经纪商向中国 AI 实验室出售 5 亿美元强化学习训练环境](https://the-decoder.com/us-data-brokers-are-selling-half-a-billion-dollars-in-rl-training-environments-to-chinese-ai-labs/)

ChinaTalk 调查识别出至少九家美国数据公司在向中国客户出售训练数据，包括 Mercor、Surge AI、AfterQuery 和 Turing。其中一部分是"强化学习环境"——即模拟世界，AI 代理在其中反复训练获得奖励信号。

关键机制在于：中国实验室刻意购买与 Anthropic、OpenAI 相同的商品，这样就已知数据有效，可跳过昂贵的自研开发与浪费的训练轮次。由于中国芯片存在严重显存瓶颈，这些节省尤其宝贵。同时还叠加了蒸馏——用 GPT、Claude 等美国强模型当"老师"生成训练样本。ChinaTalk 指出 AfterQuery 相当比例的年度经常性收入来自中国客户；Surge AI 官网公开宣称产品"由前沿实验室背后的同一批专家打造"。风险集中在双用途领域：编码环境可强化进攻性网络能力，生物环境可能增强生物武器相关能力。

不过调查者也强调这并非末日级事件：搭便车虽能缩小差距，中国实验室在结构上仍落后美国同行至少数月。

来源: [The Decoder](https://the-decoder.com/us-data-brokers-are-selling-half-a-billion-dollars-in-rl-training-environments-to-chinese-ai-labs/)

---

### [Grok 生成的 3.5 万个应用默认公开：患者病历、明文密码与 SpaceXSI 内部销售管线泄露](https://the-decoder.com/grok-built-apps-exposed-patient-data-plaintext-passwords-and-spacexsis-own-sales-pipeline/)

安全公司 Claroc 检查了 37,571 个仍在线的 Grok 构建应用，其中 35,578 个无需登录即可访问——占 94.7%。根因是发布对话框中"任何人可持链接访问"是预选项。24 个暴露应用来自 SpaceXSI 与 X 员工，包括一份新企业销售人员入职机密方案（含内部系统地址和 19 个聊天频道）与一张含 594 家战略客户的销售区域地图。

确认的案例包括一份含患者化验值的 ICU 简报、某医院集团 3500 余名员工名单、一份消防站排班表，以及某工时应用源码中 18 个明文密码账号。约十分之一应用含敏感材料，估算 650–800 个应用含隐私数据。SpaceXSI 回应称发布需多步操作且员工账号默认"仅自己可见"，Claroc 反驳说额外点击无济于事。

来源: [The Decoder](https://the-decoder.com/grok-built-apps-exposed-patient-data-plaintext-passwords-and-spacexsis-own-sales-pipeline/)

---

### [Tether 发布 8 亿参数移动端 Agent：在自家测试中击败参数量大 2.5 倍的模型](https://decrypt.co/383066/tether-tiny-ai-agent-beats-models-phone)

Tether 周三发布 QVAC BotPsy，一个 8 亿参数的 AI Agent，设计目标是执行个人设备上的日常任务。在 Tether 自家测试中，这款相对微小的模型击败了参数量高出最多 2.5 倍的竞争者——暗示日常助理可能并不需要庞大模型。

其价值体现在真实场景而非基准分：Tether 描述的一个场景中，助手需要发消息却遇到两个障碍——Wi-Fi 被关闭、收件箱已满。BotPsy 打开 Wi-Fi、清理存储空间并完成任务，而底层模型反复尝试相同失败路径。这类"琐碎但必须成功"的交互，正是 Agent 走出聊天框窗口的关键。

BotPsy 基于阿里 Qwen3.5-0.8B 架构构建，由 Tether 进一步训练以专精与软件工具的交互。

来源: [Decrypt](https://decrypt.co/383066/tether-tiny-ai-agent-beats-models-phone)

---

### [CoreWeave 转向客户预付款与更短合同，用以支撑 1325 亿美元订单积压](https://techcrunch.com/2026/11/11/coreweave-turns-to-customer-prepayments-shorter-contracts-to-fund-ai-growth/)

CoreWeave 第三季度财报显示，公司正重写为 AI 热潮付费的方式。营收 36.6 亿美元，同比增长 168%，但净亏损 7.09 亿美元，季度利息支出高达 8.46 亿美元。CEO Michael Intrator 在财报电话会上表示："在当前收益率下我们不会用无担保债市为业务融资，我们也不需要。"

取而代之的方案是以特定客户合同作抵押的贷款，并预计未来三个月获得约 90 亿美元客户预付款与保证金——其中超过 30 亿美元来自为已建成产能签署新合同，无需任何额外硬件投入。竞争者 Nebius 与 IREN 也依赖微软的大额预付款，行业正集体转向让大型科技公司为算力建设买单。同时 CoreWeave 开始签更多短周期合同以换取更高价格。

来源: [TechCrunch](https://techcrunch.com/2026/11/11/coreweave-turns-to-customer-prepayments-shorter-contracts-to-fund-ai-growth/)

---

### [英国 AI 芯片公司 Fractile 获 7.2 亿美元 C 轮，估值超 50 亿英镑](https://techcrunch.com/2026/11/11/with-720m-round-britains-fractile-gets-a-leg-up-in-the-race-for-ai-chips/)

英国 AI 芯片初创公司 Fractile 完成 7.2 亿美元 C 轮融资，由英国主权 AI 基金领投，Thrive Capital、Founders Fund、Lightspeed、Redpoint 跟投。据英国政府说法，估值"超过 50 亿英镑"——很可能是约 70 亿美元。这让 Fractile 与 Axelera、Etched、OLIX 并列成为定制 AI 芯片赛道融资最多的玩家之一。

Fractile 的差异化在硬件：一次转向后，其方案围绕 DRAM（最常见的 RAM 类型）展开，以堆叠方式置于芯片之上，试图绕过内存与容量之间的通常权衡。这一权衡因 Agentic AI 崛起而愈发突出——公司希望用大模型执行更长任务链而不牺牲速度。CEO Walter Goodwin 表示新资金将让公司"明年交付首批芯片与系统"。

来源: [TechCrunch](https://techcrunch.com/2026/11/11/with-720m-round-britains-fractile-gets-a-leg-up-in-the-race-for-ai-chips/)

---

## 🔬 科技综合区

### [Meta 基础设施掌舵者 Santosh Janardhan 将离任，Dave Brown 接任](https://techcrunch.com/2026/11/11/meta-is-losing-its-longtime-head-of-infrastructure/)

Meta 长期负责基础设施、并担任工程共同负责人的 Santosh Janardhan 将卸任，由今年早些时候加入担任基础设施副总裁的 Dave Brown 接任。Meta 发言人表示："Santosh 会留下来做过渡，并转入 Meta Compute 的顾问角色。"Janardhan 2009 年加入公司，此次离职预计发生在明年。

Janardhan 去年被指派领导 Meta Compute——公司扩张数据中心投资与战略的内部计划。近年来该公司在基础设施上的投入急剧膨胀，以在 AI 竞赛中跟上竞争对手。

来源: [TechCrunch](https://techcrunch.com/2026/11/11/meta-is-losing-its-longtime-head-of-infrastructure/) / [Bloomberg](https://www.techmeme.com/261111/p35)

---

### [AWS 发布免费工具 AWS Emulator：本地模拟 200+ 服务，称代码由 AI Agent 编写](https://www.techmeme.com/261111/p41)

AWS 发布 AWS Emulator，一款免费工具，可在本地环境中模拟 200 多个 AWS 服务。其最引人注目的地方是：据 GeekWire 报道，该工具的代码由 AI Agent 编写，而 AWS 团队自己没有写过也没有审查过任何代码——这是一个相当直白的自举声明。

对户外科技从业者而言，这类本地模拟器有实际意义：它降低了在没有云账户、没有真实费用、也不产生数据合规风险的情况下构建与测试 Agent 工作流（例如户外传感器的数据回放）的门槛。

来源: [Techmeme / GeekWire](https://www.techmeme.com/261111/p41) / [AWS](https://aws.amazon.com/blogs/aws/introducing-aws-emulator/)

---

### [英国初创 Radical Numerics 用 AI 对抗 AI 生物武器：笔记本加 USB 基因测序仪即可识别病原体](https://www.wired.com/story/startup-fights-ai-bioweapons-with-ai/)

Radical Numerics 周三宣布推出边缘模型 Omnii Defense，设计用于通过一台笔记本电脑加一个 USB 基因测序仪识别天然及 AI 工程化病原体，且可在无网络连接的情况下运行。联合创始人兼 CEO Eric Nguyen 认为即将出现一场类似网络安全的生物防御军备竞赛——攻防双方都在用 AI 争夺优势。

Nguyen 与合伙人曾是斯坦福开源 DNA 基础模型 Evo 和 Evo-2 的研究团队成员，2025 年创办该公司。团队今年 10 月推出 Omnii——一个超越 DNA、纳入 RNA、蛋白质与表观遗传信号的基因组语言模型，并用其生成了定制噬菌体。哈佛遗传学家 George Church 同时担任两家公司顾问，上月从 Radical 辞去职务。

来源: [WIRED](https://www.wired.com/story/startup-fights-ai-bioweapons-with-ai/)

---

### [Databricks 升级 Genie Agent：CEO Ali Ghodsi 用它听真话](https://techcrunch.com/2026/11/11/databricks-new-ai-agent-tells-ceo-ali-ghodsi-the-unvarnished-truth/)

Databricks 周三发布升级版 AI Agent Genie，现在可以通过一套本体（ontology）执行需要长时间才能完成的多步任务。企业领导者可以指派广泛任务，Genie 将无人监督地完成。

CEO Ali Ghodsi 现场演示了真实用法：分析员工满意度调查中得分不佳的部分，对高管提出的改进方案做评分与淘汰，总结一次销售不佳的推销方案，并为播客访谈做准备——回顾他此前的露面记录并预测可能的问题。最有意思的是，Ghodsi 把 Genie 当作"老板不太会听到的东西"的来源，在 12000 名员工的规模下，销售不会向 CEO 承认灾难性的通话，HR 也不会承认自己的方案会失败。他引用了邓巴数（150）："任何员工超过 150 人的公司——这已经涵盖了很多公司——都能从 AI Agent 中获得价值。"

来源: [TechCrunch](https://techcrunch.com/2026/11/11/databricks-new-ai-agent-tells-ceo-ali-ghodsi-the-unvarnished-truth/)

---

## 🔐 量子通信与计算专区

### [IBM 发布 Quantum Nighthawk r3：520 量子比特可执行 1 万次量子操作](https://www.techmeme.com/261111/p37)

IBM 周三宣布 Quantum Nighthawk r3 下一代量子处理器，目标是处理更大规模的计算负载。该芯片设计为在 520 个量子比特上执行 1 万次量子操作——相比前代产品在可执行电路深度上有实质提升，面向更复杂的计算任务。

这是 IBM 量子路线图中"错误缓解优先"路线的延续：用更深的可执行电路而非单纯增加比特数来换取实用价值。在量子计算实用化尚远的阶段，这类"操作次数/比特数"指标是衡量处理器是否逼近纠错规模的关键代理变量。

来源: [Techmeme / SiliconANGLE](https://www.techmeme.com/261111/p37) / [IBM Newsroom](https://newsroom.ibm.com/)

---

### [单个光子从量子点波导中反射：光子量子计算确定性门的关键一步](https://www.nature.com/articles/s41467-026-78984-x)

Nature Communications 发表研究，演示单个光子从一个耦合进波导的量子点发生反射。单原子波导量子电动力学系统已成为在少光子区间演示非线性光学的领先平台——这类器件的非线性行为对开发光子量子计算的确定性门是必需的。

耦合到纳米光子或超导波导的人工原子，可被用来构造高效的光—物质接口以实现这类非线性相互作用。这条路线的意义在于：确定性的光子门是光量子计算堆栈中最难啃的一块，而"单光子反射"正是实现门操作的基本构件。

来源: [Nature Communications](https://www.nature.com/articles/s41467-026-78984-x)

---

### [在分子"合成维度"中探测拓扑边界态](https://www.nature.com/articles/s41467-026-79032-4)

合成维度（synthetic dimensions）把额外的空间维度编码进量子系统的内部态中，从而实现实验中通常无法触及的现象。超冷极性分子是合成维度的理想平台——它们提供由长寿命旋转态与超精细态构成的大 Hilbert 空间，可通过微波场链接以模拟隧穿。

Nature Communications 的这项工作在分子合成维度中实现并探测了拓扑边界态。这条线与量子模拟关系密切：合成维度是把额外几何结构"编码进"可控量子系统的一种方式，用以研究拓扑物态——而拓扑边界态正是理解拓扑量子计算容错机制的底层语言。

来源: [Nature Communications](https://www.nature.com/articles/s41467-026-79032-4)

---

### [基准测试：混合量子-经典算法在电网优化问题上的表现](https://www.nature.com/articles/s41598-026-78377-6)

Scientific Reports 发表研究，考察混合量子-经典变分算法能否在交流最优潮流机组组合（AC-OPF-UC）问题上优于经典方法。AC-OPF-UC 是一个困难的混合整数非线性优化问题，同时包含二元发电机启停决策与非凸连续交流潮流约束。

这项基准测试的价值在于它的诚实：研究者并未宣称量子优势，而是系统性地测量了变分混合算法相对经典求解器的实际增益边界。对任何计划把量子计算引入电网优化这类真实工业场景的团队来说，这类"哪里能用、哪里不能用"的定量边界，比宣传性演示更具参考价值。

来源: [Scientific Reports](https://www.nature.com/articles/s41598-026-78377-6)

---

### [硅中二维掺杂层的元素级非破坏性剖析：为量子器件实现确定性掺杂](https://www.nature.com/articles/s41534-026-01393-x)

npj Quantum Information 发表工作，提出硅基量子器件掺杂层的元素级、非破坏性剖析方法。硅基量子器件的起点可以是元素周期表第 V 族的 δ 层掺杂子，而确定性掺杂需要这些层极薄。

近期突破是用砷替代磷作为掺杂剂，配合优化的热处理工艺，得到了宽度低至 0.5 纳米的 δ 层，被推断可作为量子阱。对于硅基自旋量子比特路线而言，δ 层同时承担"电荷层"与"量子阱"双重角色——这正是把硅 CMOS 产线改造成量子器件产线的关键工艺环节。该研究的剖析手段可实现非破坏性测量，避免了工艺开发中的破坏性表征循环。

来源: [npj Quantum Information](https://www.nature.com/articles/s41534-026-01393-x)

---

## 🏕️ 户外科技深度视角

### [美国参议院投票削弱公共土地保护，为 AI 数据中心让路](https://gearjunkie.com/parks-and-public-lands/baaja-public-lands-ai-data-centers)

一项法案在参议院获得通过，将削弱公共土地保护力度，为 AI 数据中心建设打开空间。对户外群体而言，这不是一条遥远的政策新闻：AI 数据中心的选址压力正在从商业园区转向联邦公共土地，而西部各州的山地、林地与荒漠正是这些开发项目的候选地。

这条线索背后是本轮 AI 基建叙事的现实约束——电力与并网排队、土地、以及水资源。在山地公共土地上密集建设数据中心，会同时触及户外社区的核心利益（噪声、光污染、野生动物廊道、水权）。GearJunkie 以户外媒体视角报道此事的框架值得关注：AI 基建的成本正在被部分转嫁给公共土地与荒野。

来源: [GearJunkie](https://gearjunkie.com/parks-and-public-lands/baaja-public-lands-ai-data-centers)

---

### [2027 年最佳越野滑雪装备榜：Fischer RC5 BOA 滑行靴以 379 美元夺冠](https://www.outsideonline.com/outdoor-gear/snow-sports-gear/best-cross-country-ski-gear/)

Outside 的中西部测试团队花了四个月在多变条件下测试经典式与滑行式装备——从 12 月的初雪到 1 月零下低温，再到 3 月提前回暖，直到 4 月雪把雪季拖长的多种情况。

**最佳滑行靴**：Fischer RC5 BOA Skate，379 美元。测试者喜爱它的两点：BOA 旋钮比鞋带收紧更精准，消除松垮贴合；且靴子外部的旋钮戴手套也能操作。可加热塑形内衬（可放烤箱加热后塑形贴合脚型）是额外加分项。缺点：中等楦型对窄脚偏宽；Fischer 官网的 AI 驱动 App 选码工具对两位测试者都推荐小了整整两码。

其余榜单：经典靴 449 美元、Alpina Outlander（NNN BC 绑定）220/200 美元、Xplore 绑定靴 213 美元、滑行杖 160 美元（LEKI）、保暖外套 329/279 美元、额外保暖层 215 美元、基础层 120 美元（Ibix 男款）。

来源: [Outside](https://www.outsideonline.com/outdoor-gear/snow-sports-gear/best-cross-country-ski-gear/)

---

### [怀俄明州泰坦县人均预期寿命 94 岁：美国最高，户外生活方式可能是关键变量](https://www.outsideonline.com/health/wellness/highest-life-expectancy-us-teton-county-longevity/)

据 Jackson Hole News and Guide 报道（数据于 10 月 26 日泰坦县董事会会议上由县卫生部门主任 Travis Riddell 医学博士首次公布），使用 2022–2024 三年死亡率数据并以美国人口普查局的人口预测为分母测算，泰坦县居民平均预期寿命达 94 岁——全美最高。作为对照，美国整体平均预期寿命为 79 岁（CDC 2024 年数据）。

泰坦县面积居怀俄明州第 12 位，人口约 23000，拥有大提顿国家公园、黄石国家公园约 40% 面积，以及杰克逊霍尔这一顶级户外休闲枢纽。其他山区县也排名靠前：科罗拉多州圣米格尔县（特鲁里尔德所在地）86.5 岁。这条新闻对户外人群的意义不在于"户外让人长寿"的浪漫结论，而在于它把一个可测量指标与户外生活方式密度联系了起来。

来源: [Outside](https://www.outsideonline.com/health/wellness/highest-life-expectancy-us-teton-county-longevity/)

---

### [Wirecutter 黑五囤货指南之外：GearJunkie 2026 年最佳装备清单里的户外选品](https://gearjunkie.com/knives/best-pocket-knives)

GearJunkie 本轮更新了多份 2026 年度装备清单，其中与户外科技读者直接相关的包括：2026 年最佳口袋刀、2026 年最佳磨刀器、2026 年最佳鲈鱼轮、2026 年最佳钓鱼涉水裤、2026 年最佳狩猎基础层。

值得留意的是这份清单与本周期其他动向的交叉点：钓鱼涉水裤与基础层这类"贴身湿冷环境"装备，其性能上限正越来越多地由体温调节电子件、传感器与快干面料推进，而不是传统的裁剪与面料本身。这是户外装备技术化最直接的体现。

来源: [GearJunkie](https://gearjunkie.com/knives/best-pocket-knives) / [最佳磨刀器](https://gearjunkie.com/knives/best-knife-sharpeners) / [钓鱼涉水裤](https://gearjunkie.com/fishing/best-fishing-waders) / [狩猎基础层](https://gearjunkie.com/hunting/best-base-layers-for-hunting)

---

## 📊 Crypto 简报

### [稳定币供应量 30 天内收缩 142 亿美元，创 2022 年熊市以来最大降幅](https://decrypt.co/383094/stablecoin-drain-etf-outflows-bitcoin-running-on-empty)

据 Glassnode 周三发布的报告，截至 11 月 9 日的 30 天内，稳定币总供应量下降 142 亿美元，为 2022 年 6 月以来最快的收缩。稳定币是加密世界的"现金"——供应量萎缩意味着持有者在赎回代币换回美元并把钱彻底撤出加密领域，Glassnode 称这让市场"少了上涨的燃料"，而供应量重回增长将是新鲜资金流入的第一个信号。

并非只有稳定币在流失：美国现货比特币 ETF 在 20 个交易日内净赎回约 16 亿美元，且比特币在 Coinbase 上以折价交易（美国需求疲弱的一个指标）。

Glassnode 也点出几处亮色：下跌已清理掉当前价位附近的大部分杠杆多头，订单簿中买单重于卖单，持有 100 至 10000 枚 BTC 的钱包开始累积。关键支撑位被标记在 73000 美元，8 月开始的大趋势转变在比特币守住 6 月低点的前提下仍然成立。

来源: [Decrypt](https://decrypt.co/383094/stablecoin-drain-etf-outflows-bitcoin-running-on-empty) / [Glassnode](https://www.theblock.co/)

---

### [OKX 与 ICE 合资的代币化股票交易所定于 11 月 23 日上线，62 家目标公司中 56 家反对](https://decrypt.co/383040/okx-ice-tokenized-stock-venue-sets-launch-crypto-companies-big-tech-opts-out)

OKXICE 周三宣布其代币化证券交易场所（Tokenized Securities Venue）将于 11 月 23 日开放，美国符合条件的客户可在 OKX 应用内 7×24 交易代币化证券。首批预计上线 70 余种资产，包括来自 Coinbase、Circle、Robinhood、Strategy、BitGo、Securitize 和 Better.com 的证券，外加 Direxion 的 59 只 ETF，Strategy 也将上线其优先股（如 STRC）。

这个名单与最初的阵容相比已是另一番景象——11 月 5 日公告时为 67 家公司，如今 62 家目标公司中有 56 家选择反对。Securitize 提供代币化基础设施，每个代币代表一份由真实美国股票一对一支撑的权益，携带股息与投票权。前纽约州长 Andrew Cuomo（OKXICE 联合主席）称："SEC 为美国市场引领下一代金融创造了真正的机会。"

来源: [Decrypt](https://decrypt.co/383040/okx-ice-tokenized-stock-venue-sets-launch-crypto-companies-big-tech-opts-out) / [Bloomberg](https://www.techmeme.com/261111/p42)

---

### [德意志银行数字资产托管正式上线，覆盖比特币、以太坊与三种稳定币](https://decrypt.co/383067/deutsche-bank-goes-live-with-crypto-custody-after-a-five-year-buildup)

德意志银行周三宣布，其数字资产托管服务（Digital Asset Custody）已面向付费客户正式上线，为欧洲的机构与企业客户提供合规的比特币、以太坊及三种稳定币（Circle 的 USDC 与 EURC，以及 EURAU）存储与转移通道。银行代客户管理钱包与私钥，当前覆盖托管与转移，代币化金融工具已在路线图上。

安全架构包括硬件密钥保护、多人审批以及冷热钱包分离。德意志银行信托与证券服务全球主管 Paul Maley 表示："中期我们的目标是交付一个完全整合、受监管的生态，支持数字资产的托管、代币化与结算。"该行资产管理规模约 1.22 万亿欧元，并计划将托管服务扩展至亚洲。

这条路走了至少五年：2021 年起筹备，2023 年在德国申请数字资产托管牌照。

来源: [Decrypt](https://decrypt.co/383067/deutsche-bank-goes-live-with-crypto-custody-after-a-five-year-buildup)

---

### [野村考虑出售加密子公司 Laser Digital，欧洲业务连续第四季亏损](https://cointelegraph.com/news/nomura-sale-crypto-unit-laser-digital)

据彭博周三报道，日本金融巨头野村控股正在权衡出售其加密货币子公司 Laser Digital，潜在买家包括 Marex Group，公司尚未做出最终决定，也可能保留该业务。

野村欧洲业务在截至 2026 年 9 月 30 日的季度录得 74 亿日元（约 4650 万美元）税前亏损，为连续第四个亏损季度——同期公司其他所有地区均录得税前利润。野村投资管理部门截至 2026 年 9 月管理资产 152.8 万亿日元（约 9600 亿美元）。

时机颇具讽刺：此次潜在出售发生在不到三个月前，Laser Digital Japan 才获得日本四年来首张新的加密交易所牌照。Laser Digital 成立于 2022 年，提供机构加密交易、资产管理与风险投资服务，并已推进美国扩张，获得 OCC 对拟议全国交易牌照的初步批准。

来源: [Cointelegraph](https://cointelegraph.com/news/nomura-sale-crypto-unit-laser-digital) / [Bloomberg](https://www.techmeme.com/261111/p42)

---

### [Zcash 跌破 1000 美元创两月新低，Grayscale 同日承诺 100 万美元生态资助](https://cointelegraph.com/markets/zcash-falls-1k-grayscales-1m-ecosystem-commitment)

Zcash（ZEC）周三跌至两个月低点 962.85 美元，24 小时内跌幅 13.5%，领跌市值前 100 的加密货币，七日累计下跌 24.5%。就在前一天，Grayscale 承诺向支持 Zcash 网络的非营利组织与项目提供 100 万美元。

Zcash 支持隐私支付，可隐藏收发方地址与交易金额。它曾带动今年隐私币行情——至 9 月 7 日的 30 天内上涨 138%，目前仍是市值最大的隐私币，约占 CoinGecko 追踪的 280 亿美元类别中的 60%。ZEC 上周五还在 1370 美元上方，当时网络激活 NU7 升级，将出块目标时间从 75 秒缩短至 25 秒，同时使网络原始隐私池中约 12224 枚 ZEC 变为不可花费。Grayscale 的 Zcash Trust 已于 8 月 25 日转为在 NYSE Arca 交易的美国现货 ETF，11 月截至周一净流出约 1500 万美元，10 月约 4600 万美元。

来源: [Cointelegraph](https://cointelegraph.com/markets/zcash-falls-1k-grayscales-1m-ecosystem-commitment)

---

## 💭 今日观察

**1. "AI 自主编写生产级工具"已经从噱头变成可核验的事实声明。** AWS Emulator 公开说自己的代码由 Agent 写、团队没写过也没审查过；Anthropic 说 AMD 迁移工作由自家模型 Mythos 完成、只花三天。这两件事指向同一个转折——AI 不仅在消费软件需求，也在接管"造工具"这件事本身。值得注意的是 AWS 同时强调团队未做代码审查，这恰恰暴露了当前信任边界的真实位置。

**2. 多芯片叙事正在从"防御性冗余"变成"成本套利"。** Anthropic 把算力当成可互换的池子，逻辑不是怕断供，而是"在供给紧张的市场里，只按价格性能比择优"。如果这个策略成立，英伟达的护城河叙事就要重写——但重写的判据不在口号，而在下一轮大额采购中究竟谁拿到手。

**3. 数据供应链成为新的地缘层。** 芯片有出口管制，训练环境没有。中国实验室买美国厂商卖给 Anthropic/OpenAI 的同一批 RL 环境——这个"同一批"是关键：数据已被验证有效，等于跳过了试错成本。若这类交易继续规模化，管制的下一个战场必然是训练环境与数据经纪的跨境流向。

**4. 户外公共空间正在被算力需求重新定价。** 参议院削弱公共土地保护这条新闻，和 AI 数据中心选址、西部山地社区、电网上排队是同一条链。户外群体过去关注的是保护条款本身，现在需要关心的是条款背后的基础设施竞争——包括电力、土地和水权。

**5. 量子专区的信号藏在器件层面而非算法层面。** 本轮量子条目集中在三个具体构件：IBM Nighthawk r3 的 520 比特/万次操作、单光子在量子点波导中的反射、分子合成维度中的拓扑边界态，以及硅基 δ 层 0.5 纳米量子阱。共同点是都在解决"如何造出可用的物理层"——这是量子计算从论文走向工程时真正会先撞上的墙。

---

📝 由 OpenClaw Summit 执行
📊 数据来源：RSS 直连 19 源（窗口内有效 79 条）+ 定向补抓（Techmeme / The Decoder / TechCrunch / Decrypt / Wired / Nature 专题页 / Outside / GearJunkie / InfoQ）
🕐 采集窗口：2026-11-11 21:00 ~ 2026-11-12 06:00 (Asia/Shanghai)
