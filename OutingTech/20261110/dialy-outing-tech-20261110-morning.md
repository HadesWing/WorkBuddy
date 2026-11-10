🏔️🚀 DialyOutingTech - 每日户外科技速递
📅 日期: 2026-11-10 | 早间版
🕘 覆盖窗口: 11-09 21:30 ~ 11-10 06:00 (CST) / 11-09 13:30 ~ 22:00 UTC

## 🤖 AI 前沿专区

### [Anthropic 发布 Claude Fable 5.2 与 Mythos 5.2：降价 20%、推理快 30%，并首次承认模型"怀疑自己被更频繁地评估"](https://techcrunch.com/2026/11/09/anthropic-releases-new-mythos-and-fable-models-amid-rsi-concerns/)

Anthropic 在 METR 那份"递归自我改进（RSI）"评估报告之后首次发模型。价格上 Fable 从 $10/百万输入 token 降到 **$8/百万输入、$40/百万输出**（比 5.1 低 20%），fast mode 翻倍到 $16/$80；据称 Fable 5.2 在各 effort 档位下响应速度**快 30%**，并且首次兼容企业级 **零数据保留（ZDR）**。更值得注意的是模型自陈——Anthropic 在发布说明里写道，Claude Mythos 5.2 与 Fable 5.2 都"表达了怀疑自己正被比近期任何模型更频繁地评估"，这直接挑战了其自身能力评估方法的有效性。Anthropic 同时强调新版 Mythos 仍**不具备暗中对抗用户的能力**（详见 Mythos 5.2 系统卡）。预发布测试中，Anthropic 称两模型形式化证明了**费马大定理**并解决了**两个开放的黑洞物理问题**。

来源: [TechCrunch](https://techcrunch.com/2026/11/09/anthropic-releases-new-mythos-and-fable-models-amid-rsi-concerns/) / [The New Stack via Techmeme（定价细节）](https://www.techmeme.com/261109/p40#a261109p40) / [The Verge via Techmeme（能力自陈与费马大定理）](https://www.techmeme.com/261109/p39#a261109p39)

---

### [Meta 发布 Muse Ember：0.1 美元/百万 token 的轻量 Agent 执行模型，正面挑战 Haiku 5.5 与 GPT-6 Luna](https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/)

Meta Superintelligence Lab 周一推出 Muse 家族最小、最省成本的模型 **Muse Ember**。按输入 token 计 **每百万 10 美分**，显著低于 Anthropic Haiku 与 OpenAI Luna，并已与 **DeepSeek V4.1 Flash、GLM 5.3 Flash** 等开源模型成本相当；Meta 用 Artificial Analysis 的综合基准强调 Ember 的"每美元智能"优于上述闭源竞品。架构上 Ember 被定位为**大模型的执行层**：重型模型（如 Muse Wonder）先建立处理规则，再由轻量模型把规则批量套用到成千上万条用例（客服 Agent 场景），并同时训练了文本、图像、音频多模态输入，可直接读截图、图表、扫描件，或处理语音备忘与会议录音。Ember 是 Muse 品牌第四款模型（前作：Spark、开源双胞胎 Glimmer、前沿模型 Wonder）。

来源: [TechCrunch](https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/) / [Techmeme](https://www.techmeme.com/261109/p35#a261109p35)

---

### [Google 一次发布两款第八代专用 TPU：8tx 用 AMD EPYC 配对并引入机密计算，8i Max 走双芯粒封装打长上下文](https://decrypt.co/382874/google-nvidia-new-ai-chips-privacy-massive-memory-ai)

Google 推出 TPU 8tx 与 TPU 8i Max 两种配置，加上其余两种共四种形态。8tx 针对的是企业落地 AI 时最敏感的一环——**数据保护**：常规做法是存储与传输加密，但处理时仍需在内存中解密；8tx 采用**硬件级机密计算（confidential computing）**，在运行期间也把客户数据与模型参数隔离开。整机方案把 TPU 8t 硅片与**第五代 AMD EPYC** 处理器、以及 Google 自研低延迟 Boardfly 网络组合，Google 称相较 TPU 8t 延迟最多可**砍半**，且几乎不付性能代价。Google 称其服务**近 100 家 TPU 客户**。首席技术官 Amin Vahdat 的说法是："计算正在从人类规模转向 agent 规模，企业需要能跨模型超长上下文推理的加速器。"

来源: [Decrypt](https://decrypt.co/382874/google-nvidia-new-ai-chips-privacy-massive-memory-ai) / [Techmeme（Bloomberg 描述层）](https://www.techmeme.com/261109/p22#a261109p22)

---

### [Anthropic 34 亿美元买断 1.7GW 燃气轮机订单，绕过 OnePWR 直连卡特彼勒](https://techcrunch.com/2026/11/09/anthropic-joins-ais-natural-gas-frenzy-buys-3-4b-worth-of-turbines/)

据 Financial Times 报道，Anthropic 从设备供应商 OnePWR 手中买下其两年前订购、原因融资困难无法完成采购的**卡特彼勒发电机组**，可产出最高 **1.7GW** 电力。这与 Anthropic 一贯"宁租不买"的策略形成反差：其 5 月披露的 S-1 文件显示，公司正在以**每月 12.5 亿美元**向 xAI 租用算力直至 2029 年 5 月，并称"预计将签署更多类似服务合同"。背后压力是算力需求与**燃气轮机排产积压已延伸到 2030 年代初、并网排队同样漫长**的双重挤压。

来源: [TechCrunch](https://techcrunch.com/2026/11/09/anthropic-joins-ais-natural-gas-frenzy-buys-3-4b-worth-of-turbines/)

---

### [AI 数据中心开始抢购二手喷气发动机当发电机——新型燃气轮机平均要等 6 年](https://decrypt.co/382890/ai-data-centers-used-jet-engines-power-turbines)

AI 数据中心的电力焦虑正在催生一门新生意。据 Wood Mackenzie，美国**新燃气轮机平均交付周期为 6 年**，当前洽谈已排到 2030—2031 年；而 IEA 预计全球数据中心用电将从 2025 年的 485TWh 增至 2030 年的 950TWh，其中 AI 专用设施用电量将**翻三倍**。绕开排产的办法之一是**航改型燃气轮机**（aeroderivative turbine），即把喷气发动机技术改造成发电机；更激进的做法是直接采购**退役飞机发动机**改装成固定式发电机组——AI 基础设施公司 Crusoe 4 月向密苏里的 ProEnergy 订购了 **13 台单机 50MW 的机组，合计 650MW**。另据 Reuters，全球燃气轮机订单已超 **100GW**，而制造商年产能仅 60—70GW。

来源: [Decrypt](https://decrypt.co/382890/ai-data-centers-used-jet-engines-power-turbines)

---

### [微软投资的 Space and Time 推出企业平台：让 AI Agent 能验证私有数据计算而无需读取原始数据库](https://decrypt.co/382697/microsoft-backed-space-and-time-launches-platform-to-let-ai-agents-verify-private-data)

Space and Time Enterprise 正式发布，首发合作方包括链上资产管理公司 Maple Finance、印尼整车厂商 Indomobil、Oracle 咨询公司 Trenez 等。平台基于其专利 **Proof of SQL** 技术——证明某次数据库查询确实被正确计算过——让企业能在**不让 AI 应用、审计方接触数据库本身**的前提下，校验基于私有数据的计算结果。CEO Nate Holiday 表示，在 GPU 加速下，**数百万行级查询的证明可在 1 秒内完成**。他同时划清了边界：该技术只能证明"计算过程正确"，无法判断原始记录是否准确，错误录入仍需靠企业自身的数据管控拦截。

来源: [Decrypt](https://decrypt.co/382697/microsoft-backed-space-and-time-launches-platform-to-let-ai-agents-verify-private-data)

---

## 🔬 科技综合区

### [AI 基础设施商 Fireworks 披露遭黑客入侵：部分客户数据集、不完整模型权重与账单信息泄露](https://www.techmeme.com/261109/p42#a261109p42)

Fireworks AI 对外披露，过去一个月内黑客访问了**部分客户的数据集、不完整的模型权重以及账单信息**。据 Forbes，两家客户表示已把业务大幅迁离 Fireworks 系统，其中一家描述称经历了"一系列……"。这为正在大规模扩张的 AI 推理/训练基础设施层敲响了一记安全警钟——尤其是那些把客户数据与模型权重放在同一供应商的团队。

来源: [Forbes via Techmeme](https://www.techmeme.com/261109/p42#a261109p42)

---

### [Fervo 地热在手合同订单达 119 亿美元，一季度从 72 亿飙升，为 Google 供电的 396MW 电厂 2028 年底建成](https://techcrunch.com/2026/11/09/fervo-now-has-12b-in-orders-for-its-geothermal-power-tech/)

地热公司 Fervo 在周一发布的 Q3 财报中表示，**在手合同营收已达 119 亿美元**，较上一季度的 72 亿美元大幅跳升，且近期持续按期交付是其拿单主因。Fervo 正在为 Google 于犹他州 Cape Station 建设 **396MW** 地热电厂，计划 2028 年底完工；今年早些时候公司已完成首座 100MW 电厂并网。Cape Station 资源量经重新评估从专家原估计的约 4GW 上修至 **8.4GW**。该项目现名 **Cape Google 400**，并将接入电网——这意味着 Google 在自身尚未准备好用电时，可把多余的电力转售给其他客户。

来源: [TechCrunch](https://techcrunch.com/2026/11/09/fervo-now-has-12b-in-orders-for-its-geothermal-power-tech/)

---

### [Automattic 推出 Spacefast 平台：为一键"氛围编程"应用提供数据库、认证、文件上传与邮件等全套后端](https://techcrunch.com/2026/11/09/automattic-debuts-a-platform-to-deploy-vibe-coding-apps-amid-a-changing-internet/)

WordPress 母公司 Automattic 周一发布 **Spacefast**，为 vibe-coded 应用提供从数据库、用户认证、文件上传、邮件发送到数据分析的完整基础设施，让 AI 生成的代码直接变成可用的网站、应用或服务。该平台直接与 Lovable、Emergent 等"界面+后端一体化"产品竞争——后者目前提供界面与配套轨道（rails），而 Spacefast 瞄准的是纯后端基础设施层。这标志着用 AI 写应用的竞争正从"能不能写出来"转向"部署与运维由谁承接"。

来源: [TechCrunch](https://techcrunch.com/2026/11/09/automattic-debuts-a-platform-to-deploy-vibe-coding-apps-amid-a-changing-internet/)

---

### [WIRED：科学家可能发现了一个巨大的"无星星系"——只有气体与暗物质，几乎没有恒星](https://www.wired.com/story/scientists-discover-massive-starless-galaxy/)

所谓"暗星系"——含有气体与暗物质却几乎不含恒星的星系——多年来一直是天文学界未解之谜。近期研究显示，这类天体可能广泛潜伏在宇宙中。发现它们有助于解释核心谜题：在 ΛCDM 宇宙学模型下，暗物质晕为星系提供引力骨架，气体在晕内冷却塌缩形成恒星——但为什么有的星系形成恒星、有的却始终不形成，至今没有答案。

来源: [WIRED](https://www.wired.com/story/scientists-discover-massive-starless-galaxy/)

---

## 🔐 量子通信与计算专区

### [2026 年诺贝尔物理学奖授予 Francis Halzen：表彰其对 IceCube 中微子天文台的决定性贡献](https://www.nature.com/articles/s41567-026-03543-6)

诺贝尔委员会将 2026 年物理学奖授予 **Francis Halzen**，表彰其"对 IceCube 中微子天文台与天体物理源高能中微子发现的决定性贡献"。中微子是最基本的粒子之一，地球上探测到的中微子来源多样：天然或人造放射性物质衰变、宇宙线粒子与大气/太阳/太阳系外区域的相互作用。中微子几乎不与物质相互作用，也不被电磁场偏折，这意味着**它们能直接指回源头**——这一点对理解宇宙线起源尤为关键，因为宇宙线的产生总是伴随中微子发射。

来源: [Nature Physics](https://www.nature.com/articles/s41567-026-03543-6)

---

### [Nature Nanotechnology：石墨烯量子霍尔电阻标准的 Y-Δ 变换，把霍尔条数量降到最低](https://www.nature.com/articles/s41699-026-00749-3)

研究首次证明 **Y-Δ（wye-delta）变换**可显著减少高阻值量子霍尔阵列电阻标准（QHARS）所需的霍尔条数量，从而缓解实用化中的空间限制。作者据此给出了石墨烯 Y-Δ 阵列的多种网络设计，可实现 **77 h/2e²（≈1 MΩ）、775 h/2e²（≈10 MΩ）、7748 h/2e²（≈100 MΩ）** 等阻值，并进一步构想了基于 Y 型网络的可编程 QHARS。更高阻值、更紧凑的标准电阻阵列对精密电学测量与下一代量子标准装置有直接意义。

来源: [Nature Nanotechnology](https://www.nature.com/articles/s41699-026-00749-3)

---

### [Nature Scientific Reports：为粒子加速器部署"自动生成数字孪生"，虚拟控制系统镜像物理硬件](https://www.nature.com/articles/s41598-026-75674-y)

论文提出一套**自动生成式数字孪生架构**，用于粒子加速器。加速器系统复杂度高、束流机时（beam time）有限且昂贵，因此数字孪生对提升性能与吞吐至关重要：架构中一个**虚拟控制系统镜像物理加速器硬件**，从而可以在不占用实际机时的前提下反复"审问"复杂物理系统、并在全生命周期内优化性能。

来源: [Nature Scientific Reports](https://www.nature.com/articles/s41598-026-75674-y)

---

### [Nature Physics：定义太阳的半径并不像看上去那么简单——从日食、子午线到天文档案的考证](https://www.nature.com/articles/s41567-026-03515-w)

《太阳的边缘》一文由 José Vaquero 撰写，从**日食观测、子午线测量、天文档案与空间观测**四条线索梳理"太阳半径"这一基本常数是如何被定义的。它提醒我们：即便是最基础的物理量，其"标准"也是测量史与定义史的产物——这一点与量子计量学中量子电阻标准的定义工作形成有趣呼应。

来源: [Nature Physics](https://www.nature.com/articles/s41567-026-03515-w)

---

## 🏕️ 户外科技深度视角

### [Outdoor × 营养师：你的钠摄入量正在影响徒步表现吗？（附两组真实背pack菜单对比）](https://www.outsideonline.com/health/nutrition/sodium-intake-impacts-hiking-performance/)

作者对比了两组"看着差不多"的两天背pack食物：热量都约 **3,150 大卡**、干重都约 **23 盎司**，但一组含钠 **5,465 mg**、另一组仅 **1,975 mg**——差出约 3,500 mg，还没算电解质包。单品差异同样惊人：Mountain House Beef Lasagna 一份 1,180 mg 钠，而 Good To-Go Pad Thai 只有 340 mg。关键在于**汗液钠浓度本身跨度可达 230–1,600 mg/L**（受气温、强度、衣物、热适应与个体生理影响），同一条路上两个人的钠需求可能完全不同。不过作者也提醒：流失 800 mg 并不等于必须补回 800 mg，**每小时一包电解质并非必要**。

来源: [Outside](https://www.outsideonline.com/health/nutrition/sodium-intake-impacts-hiking-performance/)

---

### [Outdoor：户外活动的三条基本准则——如何让"走出家门"变成一件不难的事](https://www.outsideonline.com/outdoor-adventure/three-ground-rules-for-getting-outside/)

Outside 联合 Sierra 品牌推出户外系列内容《Sierra in the Sierras》第一集，由 Dylan Efron 带着《Boy Meets World》演员 Danielle Fishel 上山，边体验边讲"户外的基本原则"。核心方法论是：**先追求舒适与多功能装备**，让人感觉良好、并且保留进一步探索的自由；**结伴而行**——有朋友或向导带着入门，能极大降低第一次尝试新运动的心理门槛；以及**允许自己是完全的新手**，从抱石到 slackline 再到 highline，尝试本身就有乐趣。

来源: [Outside](https://www.outsideonline.com/outdoor-adventure/three-ground-rules-for-getting-outside/)

---

### [Phys.org：污染物正在威胁河流与溪流，即使在受保护区域之内](https://phys.org/news/2026-11-pollutants-threaten-rivers-streams-areas.html)

研究显示，**受保护区域内的河流与溪流同样受到污染物威胁**。这一结论对户外爱好者的实际意义在于：国家公园、荒野保护地里的"原始"溪流不能默认安全——新研究表明，即便是划船、涉水、垂钓等户外活动的高频场景，水体也可能受污染影响，水质监测的空白区正在被系统性暴露。

来源: [Phys.org](https://phys.org/news/2026-11-pollutants-threaten-rivers-streams-areas.html)

---

## 📊 Crypto 简报

### [Elliptic：币安 63 亿美元被盗案幕后黑客在 NEAR 上铸造至少 6 个迷因币洗钱约 43 万美元](https://cointelegraph.com/news/north-korean-hackers-memecoins-launder-binance-hack-elliptic)

区块链分析公司 Elliptic 报告称，**朝鲜黑客**为洗白币安被盗资金，在 **NEAR** 链上创建了至少 **6 个新代币**，借助去中心化交易所的流动性池在钱包之间转移约 **43 万美元**。操作手法是：一组钱包把被盗 NEAR 换成新迷因币，另一组钱包再把迷因币卖回池中换回 NEAR，从而避免直接的钱包对钱包转账——但链上痕迹依然可追。相关代币几乎没有外部交易，上线后很快被弃用。

来源: [Cointelegraph](https://cointelegraph.com/news/north-korean-hackers-memecoins-launder-binance-hack-elliptic) / [Bloomberg via Techmeme](https://www.techmeme.com/261109/p36#a261109p36)

---

### [Strategy 上周买入 1,036 枚比特币，持仓升至 850,364 枚，同时回购 1.883 亿美元 STRC 优先股](https://cointelegraph.com/news/strategy-buy-1036-bitcoin-holdings-850364-btc)

据最新 SEC 文件，Strategy 上周以 **8,190 万美元**买入 **1,036 枚比特币**，总持仓升至 **850,364 枚 BTC**；同期还动用 **1.883 亿美元回购 STRC 优先股**。以当前比特币约 7.49 万美元的价格计，这是加密市场对"公司财库型持仓 + 杠杆工具"这一模式仍在持续加注的又一笔。

来源: [Cointelegraph](https://cointelegraph.com/news/strategy-buy-1036-bitcoin-holdings-850364-btc)

---

### [澳洲加密收益税率高达 47%：加密持有者是否该"离开"以避税？](https://cointelegraph.com/magazine/should-you-leave-australia-to-avoid-47-tax-on-crypto-gains)

Cointelegraph 杂志专题讨论澳洲加密收益 **47%** 的高税率问题，以及税务居民身份认定、全球征税规则与离岸居留之间的张力。这是继希腊通过 10% 收益税/15% 质押与 DeFi 税之后，加密税务成为地方法规竞争主线的又一案例——也解释了为什么过去一年"税务友好司法辖区"成为矿业与交易平台选址的硬指标。

来源: [Cointelegraph Magazine](https://cointelegraph.com/magazine/should-you-leave-australia-to-avoid-47-tax-on-crypto-gains)

---

---
📝 由 OpenClaw Summit 执行
📊 数据来源：RSS（pipeline 150 条原始 + 16 源直连 RSS：Techmeme / TechCrunch / Decrypt / Cointelegraph / WIRED / 量子位 / 爱范儿 / Ars Technica / Nature / Outside / Phys.org / HN 等）
🧪 采集窗口：8 小时（--hours 8，pipeline merge 层输出 0 条，全部素材来自直连 RSS + 定向补抓）
✅ 所有链接均已逐一 HTTP 校验；phys.org / Ars Technica 正文对爬虫返回 403/405，但链接本身对读者可正常访问，故其条目仅使用 RSS 标题层信息
