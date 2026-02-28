import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-t1',
        title: 'Indian Economy on the Eve of Independence',
        description: 'The state of the Indian economy in 1947, focusing on colonial exploitation across agriculture, industry, trade, demographics, and infrastructure.',
        content: `
# Indian Economy on the Eve of Independence

Before two centuries of British colonialism, India was a prosperous and highly skilled economy — renowned worldwide for fine textiles like **Dacca Muslin** (a gossamer-thin cotton fabric woven in Bengal), silk, indigo, and iron-work. By 1947, systematic colonial policies had dismantled this prosperity.

---

### 1. State of Agriculture

Agriculture employed **70–75% of India's workforce** but remained chronically backward due to colonial land settlement systems, primitive technology, and deliberate policy.

#### Three Land Settlement (Revenue) Systems

| System | Region Operated | Who Paid Revenue? | Fixed or Flexible? | Effect on Farmers |
|--------|----------------|-------------------|--------------------|-------------------|
| **Zamindari System** | Bengal Presidency (Bengal, Bihar, Orissa) | Zamindars (landlords) — NOT actual farmers | FIXED regardless of harvest | Most exploitative — Zamindars extracted maximum rent; farmers had zero security |
| **Mahalwari System** | Punjab, Agra, Oudh | Village headman on behalf of the whole Mahal (village unit) | Periodically revised | Village collectively assessed; slightly less exploitative |
| **Ryotwari System** | Bombay and Madras Presidencies | Individual Ryots (farmers) deal directly with government; no intermediary | Periodically revised | No middleman — but revenue was still very high; periodic revision caused insecurity |

> **Why Zamindari was the worst:** Zamindars paid a fixed sum to the British REGARDLESS of whether the rains came or the harvest failed. They then extracted maximum possible rent from farmers to protect themselves — leaving farmers perpetually in debt and insecurity with zero incentive to invest in land improvement.

#### Commercialisation of Agriculture
British cotton and textile mills needed raw materials. Their solution: force Indian farmers to grow **cash crops** (cotton, indigo, jute) instead of food crops.
- Less food grown → periodic **food shortages and famines** (the Bengal Famine of 1943 killed an estimated 3 million people)
- Farmers lost subsistence security; became wholly dependent on market prices controlled by traders

---

### 2. State of the Industrial Sector

#### Systematic De-industrialisation
Britain's two-fold industrial policy deliberately destroyed India's manufacturing:
1. Make India a **net exporter of raw materials** (cotton, jute, iron ore) to feed British factories.
2. Make India a **net importer of finished British goods** — the world's largest captive market.

Tools used:
- **Discriminatory Tariff Policy:** Heavy duties on Indian handicraft exports; duty-free import of British machine-made goods.
- Result: Weavers, artisans, and craftsmen lost their livelihoods and were forced back into an already overcrowded agriculture sector — causing **de-industrialisation**.

#### Lack of Capital Goods Industry
A **capital goods industry** produces machines, tools, and equipment needed to make other goods. Britain deliberately prevented India from building one — because if India could make its own machines, it would not need British machines.
- Contribution of the industrial sector to Gross Value Added (GVA) was extremely small at independence.

#### Limited Public Sector
The public sector under the British was confined to railways, power generation, communications, ports, and a few departmental undertakings — all serving colonial extraction, not Indian welfare.

---

### 3. Foreign Trade

- **British Monopoly:** Britain controlled the direction, composition, and terms of India's foreign trade — from ports to pricing.
- **Suez Canal (1869):** The opening of the Suez Canal cut the shipping route between Britain and India dramatically, making colonial trade cheaper and faster — intensifying British dominance.
- **Export Surplus and Drain of Wealth:** India consistently exported MORE than it imported. But this surplus DID NOT remain in India. It was used to:
  - Pay the expenses of the British colonial office in London.
  - Finance wars fought by the British government (many outside India).
  - Pay for "invisible" items — shipping costs, insurance, and banking charges paid to British companies.
  - This systematic outflow is called the **"Drain of Wealth"** — theorised first by **Dadabhai Naoroji**.

---

### 4. Demographic Profile

| Indicator | Colonial India (~1947) | Modern India (Approx.) |
|-----------|----------------------|------------------------|
| Birth Rate | 48 per 1,000 | ~20 per 1,000 |
| Death Rate | 40 per 1,000 | ~6 per 1,000 |
| Infant Mortality Rate (IMR) | 218 per 1,000 live births | ~28 per 1,000 |
| Life Expectancy | ~32 years | ~69 years |
| Literacy Rate | Less than 16% | ~78% |
| Female Literacy | As low as 7% | ~66% |

- **1921 — "Year of Great Divide":** Demographic transition point where India moved from an unstable (high and fluctuating) death rate to a high but more stable population phase.

---

### 5. Occupational Structure

| Sector | Colonial India | Significance |
|--------|---------------|--------------|
| Agriculture | 70–75% of workforce | Economy overwhelmingly agrarian — classic sign of underdevelopment |
| Manufacturing | ~10% of workforce | Deliberately kept low through de-industrialisation |
| Services | 15–20% of workforce | Colonial administration, trade — not productive development |

**No structural transformation occurred** during the colonial period — the share of agriculture in employment barely changed over 150 years.

---

### 6. Infrastructure

Roads, railways, ports, water transport, and telegraph networks did develop. However, the **real motive was colonial extraction**, not Indian welfare:
- Railways: Built to move raw materials FROM the interior TO ports, and to move British finished goods FROM ports TO Indian markets. Also essential for troop movement.
- The Suez Canal (1869) intensified this system by making the journey to Britain much cheaper.
        `,
        visualizations: [
            {
                id: 'u6-v1',
                title: 'Three Land Revenue Systems at a Glance',
                type: 'table',
                data: {
                    headers: ['System', 'Region', 'Who Paid', 'Fixed/Flexible', 'Impact'],
                    rows: [
                        ['Zamindari', 'Bengal, Bihar, Orissa', 'Zamindars (landlords)', 'Fixed — always', 'Most exploitative; farmers insecure'],
                        ['Mahalwari', 'Punjab, Agra, Oudh', 'Village headman (Mahal)', 'Periodically revised', 'Village-based — moderately exploitative'],
                        ['Ryotwari', 'Bombay, Madras', 'Individual farmers (Ryots)', 'Periodically revised', 'Direct — no middleman, but burden still high']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-t2',
        title: 'Indian Economy (1950–1990): Planning Era',
        description: 'The era of Five Year Plans, Green Revolution, the Industrial Policy Resolution 1956 (IPR 1956), and import substitution — India building its own economic foundation.',
        content: `
# Indian Economy (1950–1990): The Planning Era

After independence in 1947, India adopted a **Mixed Economic System** — both the public (government) and private sectors co-exist, with the government holding the "commanding heights" (key strategic industries). The primary tool was **Five Year Plans** formulated by the **Planning Commission (1950)** with the Prime Minister as its Chairman.

> **Note:** The Planning Commission was dissolved and replaced by **NITI Aayog (National Institution for Transforming India)** in 2015 by the Modi government, which acts as a policy think-tank rather than a plan-making body.

---

### 1. Goals of Five Year Plans (Mnemonic: GMSE)

| Goal | Full Meaning | Key Mechanism Used |
|------|-------------|-------------------|
| **Growth** | Increase in Gross Domestic Product (GDP) — economy's productive capacity expands | Heavy industry investment, Green Revolution |
| **Modernisation** | Adoption of new technology AND changes in backward social attitudes (e.g., gender equality, not just machines) | Education expansion, HYV seeds, industrial technology |
| **Self-Reliance** | Reduce dependence on imports — especially for food, technology, and capital goods — to protect sovereignty | Import substitution policy, domestic production priority |
| **Equity** | Ensure the benefits of growth reach the poor; reduce inequality in income and wealth | Land reforms, Small Scale Industry (SSI) promotion, poverty programmes |

> **Tension:** Growth and Equity can conflict — rapid growth may initially increase inequality ("trickle-down" question). Indian planning attempted both simultaneously.

#### First Three Plans (Summary)
| Plan | Period | Main Focus |
|------|--------|------------|
| First Five Year Plan | 1951–56 | Agriculture, irrigation, rehabilitation of refugees from partition |
| Second Five Year Plan | 1956–61 | Heavy industry — based on the **Mahalanobis Model** (Prasanta Chandra Mahalanobis); Industrial Policy Resolution 1956 (IPR 1956) |
| Third Five Year Plan | 1961–66 | Both agriculture AND industry — "Gadgil Yojana" |

---

### 2. Agriculture: Three Pillars of Reform

#### Pillar 1 — Abolition of Exploitative Land Systems (Zamindari Abolition)
- Removed intermediaries (Zamindars) between the government and actual tillers.
- About **20 million tenant farmers became land owners** of approximately 17 million acres.
- Weakness: Implementation was weak in many states; big landlords used legal loopholes and registered land in relatives' names.

#### Pillar 2 — Tenancy Reforms
- Provided **security of tenure** to tenant farmers (could not be arbitrarily evicted).
- Fixed **fair rent**: Maximum rent restricted to 1/4 to 1/5 of gross produce.
- Gave tenants the **right to purchase** the land they cultivated over time.

#### Pillar 3 — Land Ceiling
- Set a **maximum legal limit** on the amount of land any individual/family could own.
- Surplus land above the ceiling was to be redistributed to landless labourers.
- Weakness: Very poorly implemented — large landowners split land among relatives and challenged laws in courts; only a tiny fraction of surplus land was actually redistributed.
- Exception: **Kerala and West Bengal** implemented land reforms most successfully due to strong political commitment.

---

### 3. The Green Revolution (Mid-1960s onwards)

By the mid-1960s, India faced dangerous food shortages and imported food from the USA under the PL-480 (Public Law 480) programme — called "importing with begging bowl." The Green Revolution transformed this:

**The Package:**
- **High Yielding Variety (HYV) seeds** — especially Norman Borlaug's Mexican wheat varieties and IR-8 rice from IRRI (International Rice Research Institute, Philippines)
- Intensive chemical fertilisers
- Pesticides and insecticides
- Assured irrigation (not dependent on monsoon)
- Government credit and Minimum Support Price (MSP) guarantees

**What is MSP (Minimum Support Price)?**
The government announces a minimum price before sowing season at which it will buy the farmer's produce through the **Food Corporation of India (FCI)** — preventing distress sales to exploitative middlemen. MSP protects farmers from price crashes.

**The FCI (Food Corporation of India):**
- Government agency that procures food grains (wheat, rice) from farmers at MSP.
- Stores them in warehouses as **buffer stocks** to be released during famines or price spikes.
- Also distributes food through the **Public Distribution System (PDS)** — subsidised rations to the poor.

**Results of Green Revolution:**
| Aspect | Outcome |
|--------|---------|
| Food Production | India achieved SELF-SUFFICIENCY — from "begging bowl" to "bread basket" |
| States Benefited | Punjab, Haryana, Western Uttar Pradesh (wheat); Tamil Nadu (rice) |
| Buffer Stocks | India could now build strategic grain reserves |
| Income Effect | Income of HYV-adopting farmers rose significantly |
| Inequality | Rich farmers with irrigation benefited MORE than small/marginal farmers |
| Environment | Excessive chemical fertiliser → soil degradation; pesticides → ecological damage |

---

### 4. Industry and Trade Policy

#### Industrial Policy Resolution 1956 (IPR 1956)
IPR 1956 became the blueprint of the Second Five Year Plan. It classified all industries into three Schedules:

| Schedule | Type | Industries Included | Control |
|----------|------|---------------------|---------|
| **Schedule A** (17 industries) | Government monopoly | Defence, railways, atomic energy, iron and steel, aircraft, shipbuilding | Only government could own and operate |
| **Schedule B** (12 industries) | Joint / Mixed | Chemicals, fertilisers, non-ferrous metals | Government started new units; private could supplement existing ones |
| **Schedule C** (Remaining industries) | Private sector | Consumer goods, textiles, most manufacturing | Private sector — but subject to licensing |

#### The Licence Raj (Industrial Licensing System)
Every private company wanting to:
- Start a new factory
- Expand production capacity
- Relocate a plant
- Change the product line
- Diversify production

...had to obtain a **government licence**. This system was designed to:
- Prevent monopolies forming in the private sector.
- Ensure industries were set up in backward/underdeveloped regions.
- Maintain government control over the direction of industrial growth.

**Criticism of Licence Raj:**
- Created massive bureaucratic delays and corruption ("Inspector Raj").
- Industrialists used licences to prevent competitors from entering the market.
- Businesses spent more time getting approvals than producing goods.
- Consumers suffered from poor-quality, overpriced domestic goods with no competition.

#### Small Scale Industries (SSI) and the Karve Committee (1955)
- The **Village and Small-scale Industries Committee (Karve Committee, 1955)** recommended promoting Small Scale Industries (SSIs) as the engine of rural India.
- Government reserved hundreds of products (textiles, toys, processed food, footwear) exclusively for SSI production.
- Objective: Generate employment, particularly in rural areas; reduce regional economic disparities; prevent monopolisation of consumer goods by large firms.

#### Trade Policy: Import Substitution (Inward-Looking Strategy)
India's trade strategy (1950–1991) was deliberately **inward-looking**:
- **Aim:** Replace foreign imports with domestically produced goods.
- **Tools:** High tariffs on imports; import quotas (quantity limits); industrial licensing to build domestic capacity.
- **Rationale:** The **Infant Industry Argument** — new domestic industries cannot compete with established foreign ones; they need temporary protection to learn, grow, and eventually stand on their own.
- **Criticism:** Protection became permanent, not temporary — protected industries never became efficient; consumers paid high prices for low-quality goods; **the "Hindu Rate of Growth"** resulted.

#### The "Hindu Rate of Growth"
- Phrase coined mockingly by economist **Raj Krishna** to describe India's sluggish ~3.5% annual GDP growth from the 1950s to the 1980s.
- This was barely above India's population growth rate — meaning per capita income grew negligibly.
- It reflected the inefficiency of the licence raj, import substitution, and public sector dominance.
- Post-1991 LPG reforms broke out of this trap, with GDP growth accelerating to 6–8%.
        `,
        visualizations: [
            {
                id: 'u6-v2',
                title: 'Planning Goals (GMSE Framework)',
                type: 'grid',
                data: [
                    { label: 'Growth', desc: 'Higher Gross Domestic Product (GDP) and expanded productive capacity.' },
                    { label: 'Modernisation', desc: 'New technology AND progressive social change (e.g., gender equality).' },
                    { label: 'Self-reliance', desc: 'Import substitution — produce domestically, avoid foreign dependence.' },
                    { label: 'Equity', desc: 'Social justice, poverty reduction, fair distribution of growth benefits.' }
                ]
            },
            {
                id: 'u6-v3',
                title: 'Green Revolution Package',
                type: 'steps',
                data: ['High Yielding Variety (HYV) Seeds', 'Assured Irrigation', 'Chemical Fertilisers + Pesticides', 'Minimum Support Price (MSP) via Food Corporation of India (FCI)', 'Self-sufficiency in Food Grains']
            },
            {
                id: 'u6-v2b',
                title: 'IPR 1956 — Three Schedules',
                type: 'table',
                data: {
                    headers: ['Schedule', 'Industries', 'Government Role'],
                    rows: [
                        ['Schedule A (17)', 'Defence, Railways, Atomic Energy, Iron & Steel', 'Exclusive government monopoly'],
                        ['Schedule B (12)', 'Chemicals, Fertilisers, Non-ferrous Metals', 'Government starts new units; private supplements'],
                        ['Schedule C (All others)', 'Consumer Goods, Textiles, most Manufacturing', 'Private sector — via licensing system']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-t3',
        title: 'New Economic Policy 1991 (LPG Reforms)',
        description: 'The paradigm shift from a controlled, planned economy to Liberalisation, Privatisation, and Globalisation — causes, components, and critical appraisal.',
        content: `
# New Economic Policy 1991 (LPG Reforms)

## The 1991 Crisis — Why India Changed

By 1990–91, India faced a **"perfect storm" of three simultaneous crises:**

| Crisis | Details |
|--------|---------|
| **Fiscal Deficit** (government spending >> revenue) | Government spending was massively greater than revenue — financed by borrowing, leading to debt accumulation |
| **Balance of Payments (BoP) Crisis** | India's foreign exchange (forex) reserves fell to just **2 weeks' worth of imports** — near default on international obligations |
| **Inflation** | Prices of essential goods were rising rapidly, hurting the poor |

**Additional trigger — the Gulf War (1990–91):**
- The Gulf War caused a spike in global oil prices.
- India's oil import bill exploded overnight.
- Additionally, Indian workers in Gulf countries sent home less money (remittances fell) during the war, further straining the BoP.

**India's emergency response:**
- Pledged **67 tonnes of gold to the Bank of England and Union Bank of Switzerland** as collateral to avoid defaulting on international debt obligations.
- Approached the **IMF (International Monetary Fund)** and the **World Bank (technically the IBRD — International Bank for Reconstruction and Development)** for emergency loans totalling approximately **USD 7 billion**.

**The Condition — Structural Adjustment Programme (SAP):**
The IMF and World Bank imposed conditions on their loans. India had to carry out fundamental structural changes to its economy — ending the old model of government control, import substitution, and public sector dominance. These conditions became the **New Economic Policy 1991**, comprising three pillars: **L**iberalisation, **P**rivatisation, and **G**lobalisation.

---

## The Three Pillars of New Economic Policy (NEP) 1991

### 🔓 L — Liberalisation (Removing Government Controls)

**Industrial Sector:**
- Abolished industrial licensing for most industries — ended the "Licence Raj."
- Only 6 industries retained compulsory licensing (alcohol, cigarettes, hazardous chemicals, industrial explosives, electronics, aerospace, drugs and pharmaceuticals) — for health, safety, or strategic reasons.
- Only 2 industries reserved exclusively for the public sector: **atomic energy** and core railway transport.

**Financial Sector:**
- RBI's (Reserve Bank of India's) role changed from **"Regulator"** to **"Facilitator"** — banks were given more autonomy.
- Private banks allowed — HDFC (Housing Development Finance Corporation), ICICI (Industrial Credit and Investment Corporation of India), and Axis Bank emerged post-1991.
- Foreign banks allowed to expand operations in India.
- Interest rates deregulated — set by market forces, not government diktat.

**Foreign Exchange Reforms:**
- Rupee **devalued** by approximately 18–19% in two steps (July 1991) — making Indian exports cheaper and more competitive internationally.
- **LERMS (Liberalised Exchange Rate Management System)** introduced in 1992: A dual exchange rate system — 40% of foreign exchange earnings could be converted at the official rate, 60% at the market rate. This was a transition step.
- By 1993, India moved to a **unified, market-determined exchange rate**.
- Rupee made **convertible on the Current Account** (for trade transactions).

**Tax Reforms:**
- Reduced direct tax rates (Income Tax, Corporate Tax) to discourage evasion.
- Simplified tax procedures — beginnings of what eventually became the **GST (Goods and Services Tax)** after the 2016 constitutional amendment.
- GST operates on the principle of "**one nation, one tax, one market**" — replacing a maze of central and state indirect taxes.

---

### 🏭 P — Privatisation (Moving from Public to Private)

**Disinvestment:**
- The government sold portions of its equity (ownership shares) in Public Sector Undertakings (PSUs / Public Sector Enterprises — PSEs) to private investors or the general public.
- **Partial disinvestment:** Government sells a minority stake (less than 49%) but retains majority control (above 51%).
- **Strategic sale:** Government sells a majority stake (above 51%) to a private buyer — transferring management control. This is "full privatisation."

**Why disinvest?**
- Raise revenue for the government (helps reduce fiscal deficit).
- Improve efficiency — private ownership brings market discipline.
- Reduce the burden of loss-making PSUs on government finances.

**PSU Autonomy Classifications (instead of full privatisation):**

| Category | Autonomy Level | Investment Authority | Examples |
|----------|---------------|---------------------|---------|
| **Maharatnas** ("Nine Jewels" — top tier) | Highest | Can invest up to ₹5,000 crore in a single project | ONGC, SBI, NTPC, Coal India |
| **Navratnas** ("Nine Gems") | Significant | Can invest up to ₹1,000 crore | HPCL, MTNL, BSNL |
| **Miniratnas** ("Small Gems") | Limited | Smaller investment autonomy | Airport Authority of India, IRCTC |

---

### 🌍 G — Globalisation (Opening India to the World)

**Trade Liberalisation:**
- Drastically reduced import duties (tariffs) — from over 300% in some cases to around 35% average.
- Removed Quantitative Restrictions (QRs — quotas) on imports — phased out by 2001 under India's WTO (World Trade Organisation) obligations.

**Foreign Direct Investment (FDI):**
- Allowed in many previously restricted sectors.
- Automatic approval route introduced for most sectors — no government permission needed.
- Foreign companies could now invest in and operate Indian businesses.

**Foreign Institutional Investors (FIIs):**
- Foreign entities — merchant banks, mutual funds, pension funds — allowed to invest in India's **financial markets** (not companies directly, but stock markets).

**Outsourcing / BPO (Business Process Outsourcing):**
- Companies closed internal departments (legal, IT, customer service) and hired specialist Indian firms.
- India's advantages: large English-speaking workforce, low wages, strong technical talent pool, time-zone advantage.
- Companies like Infosys, Wipro, TCS (Tata Consultancy Services), and HCL became global giants.

**WTO (World Trade Organisation) Membership:**
- WTO established in January 1995 — successor to **GATT (General Agreement on Tariffs and Trade, 1948, 23 original members)**.
- India is a **founding member** of WTO — committed to progressive reduction of trade barriers.
- **MFN (Most Favoured Nation) Principle:** WTO requires that any tariff rate given to one member country must be given to ALL member countries equally — no trade discrimination.

---

## Critical Appraisal of LPG Reforms

| Area | Pre-1991 | Post-1991 | Assessment |
|------|---------|-----------|------------|
| GDP Growth Rate | ~3.5% ("Hindu Rate of Growth") | 6–8%+ consistently | ✅ Major success |
| Forex Reserves | Near zero — 2 weeks | USD 600+ billion (2024) | ✅ Dramatic turnaround |
| Consumer Choice | Limited, expensive, poor quality | Wide variety, competitive prices | ✅ Consumer gains |
| Agriculture | Already declining support | Further neglected — public investment fell | ❌ Major criticism |
| Manufacturing Employment | Growing slowly | "Jobless growth" in manufacturing | ❌ Structural problem |
| Poverty | High but declining | Faster decline post-1991 | ✅ Poverty reduced |
| Inequality | Moderate | Increased — urban-rural and rich-poor gap widened | ❌ Worsening |
| Small Producers | Protected by tariffs/quotas | Exposed to foreign competition abruptly | ❌ Some losses |
        `,
        visualizations: [
            {
                id: 'u6-v4',
                title: 'LPG Reform Pillars',
                type: 'table',
                data: {
                    headers: ['Reform Pillar', 'Key Actions Taken', 'Objective'],
                    rows: [
                        ['Liberalisation', 'End Licence Raj; RBI as Facilitator; Rupee devaluation; LERMS; private banks; tax simplification', 'Remove government controls; increase efficiency'],
                        ['Privatisation', 'Disinvestment of PSUs; Maharatna/Navratna/Miniratna autonomy', 'Improve PSU efficiency; raise government revenues'],
                        ['Globalisation', 'Tariff cuts; remove QRs (Quantitative Restrictions); FDI liberalisation; WTO founding member; BPO growth', 'Integrate with world economy; attract investment']
                    ]
                }
            },
            {
                id: 'u6-v5',
                title: 'GDP Growth by Sector Before and After 1991 Reforms (% per annum)',
                type: 'table',
                data: {
                    headers: ['Sector', '1980–91', '1992–2001', '2007–12'],
                    rows: [
                        ['Agriculture', '3.6', '3.3', '3.2'],
                        ['Industry', '7.1', '6.5', '7.4'],
                        ['Services', '6.7', '8.2', '10.0'],
                        ['Total GDP (Gross Domestic Product)', '5.6', '6.4', '8.2']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-t4',
        title: 'Industrial Sector and Foreign Trade (Eve of Independence)',
        description: 'Detailed conditions of Indian industry and foreign trade under British rule — de-industrialisation, drain of wealth, and colonial trade monopoly.',
        content: `
# Industrial Sector and Foreign Trade (Colonial Era)

## 1. Systematic De-industrialisation

The British adopted a **deliberate two-fold policy** to destroy Indian manufacturing:

1. **Make India a raw material exporter:** Forced India to supply cotton, jute, and iron ore to British factories at low prices.
2. **Make India a finished goods importer:** Flooded India with cheap, machine-made British textiles, destroying the market for Indian handloom weavers.

**Tools of de-industrialisation:**
- **Discriminatory Tariff Policy:** Heavy export duties on Indian handicrafts; duty-free import of British goods.
- **Result:** Indian weavers, artisans, and craftsmen were rendered uncompetitive — millions were pushed back into an already overcrowded agriculture sector.
- **Famous example:** The weavers of Dacca Muslin — once famous worldwide — lost their markets entirely.

## 2. Lack of Capital Goods Industry

A **capital goods industry** manufactures the machines, tools, and equipment used to produce other goods. Without one, India could not industrialise on its own.

- **British motive:** If India built its own machines, it would not need to import British machinery — so no capital goods industry was promoted.
- **Result:** India's contribution of the industrial sector to Gross Value Added (GVA) at independence was tiny.
- **Only exception:** The **Tata Iron and Steel Company (TISCO, incorporated 1907)** — the only major private industrial enterprise India built under British rule.

## 3. Limited Role of the Public (Government) Sector

The colonial public sector was confined to:
- Railways (for moving goods to ports and troops)
- Power generation (limited)
- Communications (telegraph, postal)
- Ports
- A few departmental undertakings

None of these were aimed at Indian industrial development or welfare.

## 4. Discriminatory Tariff Policy (Trade Weapon)

| Item | British Policy | Effect |
|------|---------------|--------|
| Indian handicraft exports | Heavy duties imposed | Made Indian goods expensive abroad — no export market |
| British manufactured imports | No duties (duty-free) | Made British goods cheap in India — destroyed domestic industry |
| Indian raw material exports | Free export encouraged | Britain got cheap inputs for its factories |

## 5. The Drain of Wealth — Explained

India ran a consistent **export surplus** (exported more than it imported). In a normal economy, this would attract foreign exchange (gold/silver) into India. But under colonialism:

**India's export surplus went to pay for:**
- **Administrative expenses:** The cost of running the colonial government from London (the "India Office" in London).
- **War expenses:** British military campaigns — some fought entirely outside India — were charged to India's account.
- **Invisible payments:** Shipping charges (British ships), insurance (British companies), and banking fees (British banks) — all paid to British entities.
- **Interest on debt:** Loans that Britain had forced on India for building railways and infrastructure — interest paid to British banks.

**Result:** India's economic surplus was permanently extracted — not a single pound was reinvested into Indian education, healthcare, or industry. This is the **Drain of Wealth** — first highlighted by **Dadabhai Naoroji** in his 1901 book "Poverty and Un-British Rule in India."

**Per capita income estimators during colonial period:**
Notable economists who tried to estimate India's per capita income included: **Dadabhai Naoroji, William Digby, Findlay Shirras, V.K.R.V. Rao,** and **R.C. Desai**. Their estimates varied widely due to poor data, but all confirmed extremely low and stagnant per capita income. V.K.R.V. Rao's estimates are considered the most significant methodologically.

**Growth rates during colonial rule:**
- Aggregate real output grew at less than **2% per year** in the first half of the 20th century.
- Per capita real output grew at a meagre **0.5% per year** — barely above zero when adjusted for population growth.
        `,
        visualizations: []
    },
    {
        id: 'u6-t5',
        title: 'Demographic Condition and Occupational Structure',
        description: 'Key demographic indicators, workforce distribution, and infrastructure during British rule — why India in 1947 was impoverished across every human development dimension.',
        content: `
# Demographic Condition and Occupational Structure (Colonial India)

## 1. Demographic Indicators — All Signs of Underdevelopment

| Indicator | Colonial India (1947) | Modern India | Change |
|-----------|----------------------|--------------|--------|
| Birth Rate | 48 per 1,000 | ~20 per 1,000 | Dramatically fell |
| Death Rate | 40 per 1,000 | ~6 per 1,000 | Dramatically fell |
| Infant Mortality Rate (IMR) | 218 per 1,000 live births | ~28 per 1,000 | Major improvement |
| Life Expectancy | ~32 years (some sources say 44 years) | ~69 years | Doubled+ |
| Overall Literacy Rate | Less than 16% | ~78% | Transformed |
| Female Literacy Rate | As low as 7% | ~66% | Transformed |

**What these figures mean:**
- A **high birth AND death rate** together signals not prosperity (people having many children by choice) but extreme poverty — children are born but die young due to disease, malnutrition, and lack of medical care.
- A life expectancy of just 32 years means most people died before reaching what we consider prime working age today.
- **Poor public health facilities** were either unavailable to large sections of the population or, when available, highly inadequate — no vaccines, no hospitals for rural poor, rampant cholera, malaria, and plague.

### "Year of Great Divide" — 1921
Demographers call **1921 the "Year of Great Divide"** in Indian population history. Before 1921, the death rate was so high and erratic (due to famines and epidemics) that population barely grew. After 1921, death rates began their gradual decline, beginning sustained population growth — a transition from Stage 1 to Stage 2 of the **Demographic Transition Model**.

## 2. Occupational Structure — Frozen in the Colonial Period

| Sector | Share of Workforce | Reason for Stagnation |
|--------|-------------------|----------------------|
| **Agriculture** | 70–75% | No alternative employment created; de-industrialisation pushed workers back to farms |
| **Manufacturing** | ~10% | Deliberately suppressed by discriminatory tariff policy; no capital goods industry built |
| **Services** | 15–20% | Colonial administration, trade, and transport — not developmental services |

**Key insight:** In a developing economy, structural transformation happens as workers move from agriculture to industry and then services. Under colonial rule, NO structural transformation occurred over 150+ years — the share of agriculture in employment remained frozen.

## 3. Occupational Structure's Link to Stagnant Economy

**Why the frozen occupational structure mattered:**
- Agriculture's productivity was low due to the Zamindari system, lack of technology, monsoon dependence.
- No manufacturing meant no factories, no skilled workers, no industrial wages.
- The workforce trapped in low-productivity agriculture meant:
  - Low wages
  - Low savings
  - Low investment
  - Low growth — a vicious cycle of underdevelopment.

## 4. Infrastructure — Built for Britain, Not India

Roads, railways, ports, water transport, posts, and telegraphs did develop under British rule. However, the motive was colonial extraction:

| Infrastructure | British Purpose | Indian Impact |
|----------------|----------------|---------------|
| Railways (1850–) | Move raw materials to ports; move troops; move British goods inward | Opened internal market — but benefits went to Britain |
| Roads | Administrative control; troop movement | Some connectivity but not welfare-oriented |
| Ports (Bombay, Madras, Calcutta) | Export raw materials; import British goods | Served British trade, not Indian development |
| Telegraph | Colonial administration and command | Some modernisation benefit |

> **1853:** First train ran in India between Mumbai (Bombay) and Thane.
> **1869:** Suez Canal opened — drastically reduced the distance between Britain and India, intensifying colonial trade exploitation.
        `,
        visualizations: []
    },
    {
        id: 'u6-t6',
        title: 'Industry and Trade Policy: Import Substitution (1950–1990)',
        description: "India's inward-looking trade strategy, industrial licensing, Small Scale Industry policy, and how the planning approach created the 'Hindu Rate of Growth.'",
        content: `
# Industry and Trade Policy (1950–1990)

## 1. Industrial Development Strategy — Public Sector Dominance

The policy emphasised the role of the **public sector** — the government would directly build and own the key industries of the country. The rationale:
- Private capital was scarce in India — no Indian private firm had the resources to build a steel plant.
- The domestic market was too small to attract foreign private investment in heavy industries.
- India's socialism-influenced philosophy required state ownership of "commanding heights" of the economy.

The **Industrial Policy Resolution 1956 (IPR 1956)** formed the basis of the **Second Five Year Plan** — the roadmap for the state to control the commanding heights.

### IPR 1956 — Three Schedules in Detail

**Schedule A (17 Industries — Government Monopoly):**
Exclusively owned and operated by the government:
- Atomic energy, defence, railways, aircraft, shipbuilding, iron and steel, coal, oil, mining of specified minerals, air transport, electricity (generation and distribution), broadcasting

**Schedule B (12 Industries — Joint/Mixed):**
Government took responsibility for starting NEW units; private sector could supplement:
- Chemicals, fertilisers, non-ferrous metals, machine tools, fertilisers, synthetic rubber, road transport, sea transport

**Schedule C (All Remaining):**
Left to the private sector — but subject to the industrial licensing system.

## 2. The Industrial Licensing System ("Licence Raj")

Every entrepreneur or existing company that wanted to:
- **Start** a new factory
- **Expand** production capacity
- **Relocate** a plant to a different region
- **Manufacture** a new product (diversify production)
- **Close** a factory (yes, even closing required permission)

...had to apply to the government for a **licence** and wait — often years — for approval.

**Intended rationale:**
- Prevent concentration of economic power in a few private hands (monopolies).
- Direct industrial location to backward/underdeveloped regions.
- Control what gets produced — ensure essentials are made, not just profitable luxury goods.

**Actual results:**
- Rampant bureaucratic delay and corruption — the "Inspector Raj."
- Industrialists used licences as **barriers to entry** — existing firms lobbied to deny licences to potential competitors.
- No competitive pressure → low quality, high prices, inefficiency.
- The "**Hindu Rate of Growth**" (≈3.5% GDP growth per year) — barely above population growth.

## 3. Small Scale Industries (SSI) Policy

The **Village and Small-scale Industries Committee (Karve Committee, 1955)** was the first major committee to recommend promoting Small Scale Industries (SSIs) as a cornerstone of rural and employment-focused development.

**Government actions based on Karve Committee:**
- Reserved approximately **873 items** (like textiles, footwear, toys, processed food, furniture) exclusively for SSI production — large firms could not make these items.
- Provided subsidised credit through **Small Industries Development Bank of India (SIDBI)**.
- Tax concessions and priority in government procurement.

**Objectives:**
- Generate mass employment — SSIs are more labour-intensive than large firms.
- Distribute industrial activity geographically — reduce urban concentration.
- Prevent monopolisation of consumer markets by large corporates.

**Post-1991:** Reservation list was gradually shrunk as import competition replaced the need for protection and large-scale SSI reservation.

## 4. Trade Policy: Import Substitution (Inward-Looking Strategy)

**Core idea:** Rather than buying foreign goods, produce them domestically. This is called an **"inward-looking" trade strategy**.

**Tools:**
| Tool | How It Worked |
|------|--------------|
| **Tariffs** | Taxes on imported goods — made foreign goods more expensive than domestic alternatives |
| **Quotas** (Quantitative Restrictions) | Set a maximum physical quantity of specific goods that could be imported per year |
| **Industrial Licensing** | New capacity required licences — directed investment toward import-substituting industries |

**Rationale — The "Infant Industry Argument":**
A new (infant) domestic industry cannot be expected to compete immediately with established foreign firms that have decades of cost efficiency and technology advantages. Temporary protection allows the infant to grow, learn, and eventually compete. Once it matures, protection should be withdrawn.

**What went wrong in India:**
- Protection became **permanent** — infant industries never grew up; they had no incentive to become efficient.
- High tariffs meant consumers paid high prices for poor-quality domestic goods.
- India's trade as a share of GDP remained very low — isolation from global technology and competition.
- Resulted in the **"Hindu Rate of Growth"** — see below.

## 5. The "Hindu Rate of Growth" — India's Economic Stagnation (1950–1990)

The phrase **"Hindu Rate of Growth"** was coined (mockingly) by economist **Raj Krishna** to describe India's painfully slow GDP growth of approximately **3.5–4% annually** from the 1950s to the late 1980s.

- Since India's population grew at about **2.2% annually**, real per capita GDP growth was only about **1.2–1.5%** — almost imperceptible improvement in living standards year to year.
- This was the cost of the Licence Raj, Import Substitution, inefficient PSUs, and lack of competition.
- Post-1991 LPG reforms broke this trap — GDP growth accelerated to **6–8%** consistently.

## 6. Agricultural Cooperatives — The Role of Collective Action

**Cooperatives** are voluntary associations of farmers or producers who pool resources for mutual benefit — in production, marketing, or credit.

**AMUL (Anand Milk Union Limited) — The Success Story:**
- A dairy cooperative based in Anand, Gujarat, founded in 1946.
- Farmers pool their milk → processed and marketed centrally → fair price guaranteed to each member.
- Model so successful it powered **"Operation Flood"** (India's White Revolution) — India became the world's largest milk producer.
- Cooperatives solved three problems simultaneously: fair price to farmers, no exploitation by middlemen, and markets for surplus.

**Role of Cooperatives in Planning:**
Cooperatives were promoted alongside Land Reforms and Green Revolution as part of the Equity goal — ensuring collective benefit rather than domination by large landowners or private traders.
        `,
        visualizations: []
    },
    MASTER_INTERRELATIONSHIPS_TOPIC
];
