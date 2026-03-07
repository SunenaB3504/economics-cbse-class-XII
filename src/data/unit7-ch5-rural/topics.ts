import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch5-t1',
        title: 'Rural Credit: The Financial Heartbeat',
        description: 'Analyzing the lifeline of the rural economy, from NABARD to Micro-credit.',
        content: `
### 1. The Anatomy of Rural Credit
Agriculture is a game of patience. Between **sowing** (investment) and **harvesting** (income), there is a long gestation period. This "wait time" makes credit the lifeblood of rural India.

#### A. The Multi-Agency Approach (The Specialized Team)
Since 1969 (Bank Nationalization), India moved from exploitation by moneylenders to "Social Banking."
1.  **NABARD (The Apex Body - July 1982)**: Think of NABARD as the **Reserve Bank of the Villages**. It doesn't give loans directly to you; it coordinates all rural financing.
2.  **Commercial Banks**: Major lenders providing large-scale credit.
3.  **Regional Rural Banks (RRBs)**: Specialized banks for remote areas.
4.  **Cooperative Credit**: Based on the principle of mutual help (e.g., Primary Agricultural Credit Societies).

#### B. The SHG-Bank Linkage (Power in Numbers)
When banks asked for "collateral" (security), the poor had nothing. **Self-Help Groups (SHGs)** solved this!
- **How it works**: 10-20 members pool small savings. The group then takes a single loan from the bank. 
- **SHGs as "Micro-Credit"**: High repayment rates and women's empowerment.
- **Iconic Example**: **Kudumbashree** in Kerala — the world's largest informal bank for women.

#### C. Critical Appraisal: The High-Yield Summary
| Successes | Failures/Gaps |
| :--- | :--- |
| **Food Security**: Famines are history; we have massive buffer stocks. | **Recovery Crisis**: High default rates (farmers not paying back). |
| **Jan-Dhan Yojana**: 50cr+ accounts; direct benefit transfers (DBT). | **Shrinking Institutional Credit**: Post-reforms, banks are slightly hesitant. |
| **Jan-Dhan Milestones**: Accidental insurance (1-2L) & Overdraft (10k). | **Informal Grip**: Moneylenders still exist where banks are slow. |
| **Community Support**: **CISF (Community Investment Support Fund)** provides revolving funds to SHGs. | **Intentional Default**: Some farmers refuse to pay despite ability. |

#### D. Saansad Adarsh Gram Yojana (SAGY)
Under this scheme (est. 2014), Members of Parliament (MPs) identify and develop one village in their constituency as a **Model Village**, focusing on social, cultural, and economic infrastructure.

> [!TIP]
> **The NABARD Trap**: In exams, don't say NABARD gives loans to farmers. It gives loans to **banks** (Refinancing), which then lend to farmers.
        `,
        visualizations: [
            {
                id: 'u7-ch5-v1-hero',
                type: 'process',
                title: 'The Rural Credit Flow',
                caption: 'Structural hierarchy of institutional credit flow in rural India.',
                data: [
                    { title: 'NABARD (Apex)', description: 'Coordinates all rural financing and provides refinance facility.' },
                    { title: 'Financial Institutions', description: 'Commercial Banks, RRBs, and Cooperative Banks receive funds.' },
                    { title: 'Local Branches', description: 'Banking networks at the district and village level.' },
                    { title: 'The Farmer', description: 'Direct credit access for seeds, equipment, and personal needs.' }
                ]
            },
            {
                id: 'u7-ch5-v2-grid',
                type: 'grid',
                title: 'Financial Institutions',
                caption: 'Types of Rural Financial Institutions: A structural view of the rural banking network.',
                data: [
                    { label: 'Commercial Banks', desc: '48% of total credit' },
                    { label: 'Cooperative Banks', desc: '32% of total credit' },
                    { label: 'RRBs', desc: '15% of total credit' },
                    { label: 'Others (SHGs)', desc: '5% of total credit' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch5-t2',
        title: 'The Marketing Maze & Diversification',
        description: 'Solving the puzzle of the "Farm-to-Fork" chain and finding alternative livelihoods.',
        content: `
### 1. Agricultural Marketing: Fixing the Defects
Marketing isn't just selling; it's a chain: **Assembling → Processing → Grading → Storage → Distribution**.

#### The 4-Pillar Support System
1.  **Regulated Markets**: Creating "Yards" where weights are fair and prices are transparent. (e.g., APMC Mandis).
2.  **Infrastructure**: Building the "links" — cold storages, railways, and rural roads. This is critical because **more than 10%** of farm produce is wasted due to lack of storage, often forcing farmers into **Distress Sales** (selling at very low prices due to urgent need for cash).
3.  **Cooperative Marketing**: Strength in unity. **Operation Flood (Amul)** is the legend here.
4.  **Grading & Standardization**: Sorting produce based on quality or size to fetch better prices in the market.
5.  **Policy Instruments**: 
    - **MSP (Minimum Support Price)**: The safety net for farmers.
    - **Buffer Stocks (FCI)**: Ensuring we don't starve during droughts.
    - **PDS (Public Distribution System)**: Grains for the poor at ₹2-3/kg.

#### Alternate Marketing Channels (Direct Marketing)
To bypass middlemen (traders/brokers), farmers increasingly use direct channels:
- **Apni Mandi** (Punjab, Haryana, Rajasthan).
- **Hadaspar Mandi** (Pune).
- **Rythu Bazars** (Andhra Pradesh, Telangana).
- **Uzhavar Sandies** (Tamil Nadu).
- **Contract Farming**: Multinational companies (like PepsiCo) provide seeds/inputs and guarantee a pre-decided price to farmers.

### 2. Diversification: Don't Put All Eggs in One Basket
Why diversify? Because crop farming is risky and seasonal (overcrowded).

#### Allied Activities (The 3 Revolutions)
1.  **Animal Husbandry (Livestock)**: Operation Flood transformed India into a milk-surplus nation. 70 million small farmers depend on it. **Poultry** accounts for the largest share (~61% of total livestock).
2.  **Fisheries (Blue Revolution)**: Inland sources (rivers/lakes) contribute **65%**, while Marine (sea) contributes **35%**. Kerala and Andhra are leaders. The fishing community regards water bodies as **"Mother" or "Provider"**.
3.  **Horticulture (Golden Revolution)**: Focused on fruits, vegetables, and honey (1991-2003). India is the 2nd largest producer globally. Horticulture contributes around **6% to India's GDP**.

### 3. IT: The Digital Harvester
IT isn't just for software companies; it's for the village!
- **Information Tool**: Apps for weather, market prices, and pest control.
- **Employment**: Rural BPOs and digitally enabled services.

> [!IMPORTANT]
> **Diversification of Workforce vs. Cropping Pattern**: Workforce shift means moving from land to livestock/IT. Cropping pattern shift means moving from Wheat to Grapes/Flowers.
        `,
        visualizations: [
            {
                id: 'u7-ch5-v3-flow',
                type: 'flow',
                title: 'Marketing Chain',
                caption: 'The Modern Marketing Chain: From Harvesting to the Consumer Thali.',
                data: {
                    nodes: [
                        { id: 'n1', label: 'Harvesting' },
                        { id: 'n2', label: 'Grading' },
                        { id: 'n3', label: 'Storage' },
                        { id: 'n4', label: 'Mandi/MSP' },
                        { id: 'n5', label: 'Consumer' }
                    ],
                    edges: [
                        { from: 'n1', to: 'n2' },
                        { from: 'n2', to: 'n3' },
                        { from: 'n3', to: 'n4' },
                        { from: 'n4', to: 'n5' }
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch5-t3',
        title: 'Organic Farming: Back to the Roots',
        description: 'Is it a luxury or a necessity? Analyzing the sustainable shift.',
        content: `
### The Organic Shift
Organic farming replaces chemical poisons (pesticides/fertilisers) with life-giving organic inputs (compost/manure).

#### Why go Organic? (The Benefits)
- **Sustainability**: Restores soil health and ecological balance.
- **Healthy Food**: Pesticide-free and nutritionally superior.
- **Lower Input Costs**: No need to buy expensive HYV seeds or global fertilisers.
- **Labour Intensive**: Creates more jobs for the large Indian workforce.

#### The Reality Check (Limitations)
- **Low Initial Yield**: Output drops in the first 2-3 years as the soil "detoxes."
- **Shelf Life**: Organic fruits rot faster (no chemical wax/preservatives).
- **Inadequate Labs**: Lack of certification and infrastructure for small farmers.

#### Inspiring Cases
1.  **TANWA (Tamil Nadu)**: Training women in vermicompost and sustainable tech.
2.  **Sikkim**: The first **100% Organic State** in the world!

| Feature | Conventional | Organic |
| :--- | :--- | :--- |
| **Seeds** | HYV (Engineered) | Natural/Desi |
| **Fertilizer** | Urea/DAP (Chemical) | Compost/Manure |
| **Market** | Large Scale/Mandis | Specialized/Niche |
| **Cost** | High (Buying inputs) | Low (Self-produced) |
        `,
        visualizations: [
            {
                id: 'u7-ch5-v4-table',
                type: 'table',
                title: 'Conventional vs Organic',
                caption: 'Conventional vs Organic Farming: A side-by-side comparison for the exam.',
                data: {
                    headers: ['Feature', 'Conventional', 'Organic'],
                    rows: [
                        ['Input Costs', 'High (External)', 'Low (Self-made)'],
                        ['Yield', 'High (Initial)', 'Low (Initial)'],
                        ['Nutritional Value', 'Standard', 'Superior'],
                        ['Environment', 'Polluting', 'Sustainable']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch5-master',
        title: '📊 Expert Teacher Analysis: The Whole Chapter',
        description: 'Comprehensive Terms Table and Master Chain using the Rural Pulse analogy.',
        content: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 PART 1 — COMPREHENSIVE TERMS TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| S.No. | Term | Abbr. | Brief Explanation | Interrelationship |
|-------|------|--------------|-------------------|-------------------|
| **RURAL CREDIT** | | | | |
| 1 | Rural Development | — | Action plan for social and economic growth of rural areas. | Base for all rural improvements. |
| 2 | Institutional Credit | — | Loans from banks/cooperatives rather than moneylenders. | Reduces farmer exploitation. |
| 3 | NABARD | NABARD | Apex bank for rural financing (est. 1982). | Refinances banks, not farmers directly. |
| 4 | RRBs | RRBs | Banks specifically for remote rural areas. | Bridges the "Remote-Banking" gap. |
| 5 | Land Development Banks| LDBs | Banks providing long-term credit for land improvement. | Essential for capital investment. |
| 6 | SHGs | SHGs | 10-20 members pooling savings to take bank loans. | Micro-credit; Women empowerment. |
| 7 | Kudumbashree | — | Kerala's massive SHG-based women's network. | Model for micro-credit success. |
| 8 | Multi-Agency Approach| — | System involving Comm. Banks, RRBs, and Cooperatives. | Ensures wider credit reach. |
| **MARKETING** | | | | |
| 9 | Agricultural Marketing| — | Chain from harvest to consumer (storage, grading, etc.). | Crucial for "Marketed Surplus" value. |
| 10 | Marketed Surplus | — | Portion of produce sold in market after self-consumption. | Key indicator of farm commercialization. |
| 11 | APMC / Mandi | — | Regulated market yards for transparent pricing. | Protects from middlemen. |
| 10 | MSP | MSP | Minimum Support Price guaranteed by Govt. | Acts as a "Safety Net" for farmers. |
| 11 | Buffer Stock | — | Grains stored by FCI for emergencies (famines). | Ensures National Food Security. |
| 12 | PDS | PDS | Distribution of grain to poor via Fair Price Shops. | Social welfare via subsidization. |
| 13 | Cooperative Marketing| — | Farmers joining together to sell output (Amul model). | Bargaining power against traders. |
| **DIVERSIFICATION** | | | | |
| 14 | Crop Diversification | — | Shifting from one crop (Wheat) to multiple/high-value. | Reduces "Single-Crop" failure risk. |
| 15 | Diversification of Workforce | — | Shifting from land to allied sectors (Livestock/IT). | Solves Disguised Unemployment. |
| 16 | Animal Husbandry | — | Livestock farming (Cattle, Poultry, Sheep). | Provides year-round income. |
| 17 | White Revolution | — | Operation Flood; India's milk surplus miracle. | Milk production ➔ Dairy wealth. |
| 18 | Blue Revolution | — | Massive growth in fisheries (Inland + Marine). | Water-based livelihood growth. |
| 19 | Golden Revolution | — | Period of growth in Horticulture (Fruits, Honey). | Fruits/Veggies ➔ Export/Nutrient value. |
| 20 | Knowledge Economy | — | Using IT and info for rural growth. | IT ➔ Predicts weather/prices. |
| **SUSTAINABILITY** | | | | |
| 21 | Organic Farming | — | Farming using manure/compost, zero chemicals. | Restores soil health; Healthy food. |
| 22 | Sustainable Development| — | Meeting today's needs without compromising future. | Core goal of Organic Farming. |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 PART 2 — MASTER CHAIN OF INTERRELATIONSHIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### SUB-PART A — THE RURAL PULSE (PROCESS FLOW)

\`\`\`text
    VIBRANT RURAL ECONOMY (The Goal)
          ↑
    SUSTAINABLE LIVELIHOOD (Organic Farming)
          ↑
    DIVERSIFICATION (Horticulture/IT/Livestock)
          ↑
    MARKETING LINKS (Mandis/MSP/Storage)
          ↑
    FINANCIAL HEARTBEAT (Credit/NABARD/SHGs)
          ↑
    RURAL INFRASTRUCTURE (Roads/Electricity)
\`\`\`

### SUB-PART B — SIMPLE ENGLISH EXPANSION

#### 🌾 THE ANALOGY: "THE RURAL BICYCLE"
Think of the Rural Economy as a **Bicycle** trying to reach the "Village of Prosperity".
1.  **Rural Credit** is the **Chain**. If it snaps, the bike doesn't move.
2.  **Marketing** is the **Front Wheel**. It gives direction and ensures you reach the market.
3.  **Diversification** is the **Back Wheel**. It provides the push (income) so you don't stall.
4.  **Organic Farming** is the **Maintenance**. It ensures the bike (land) lasts for years to come.

---

#### 🚜 STEP 1: OIL THE CHAIN (CREDIT)
"Why NABARD is the Grandpa of Rural Banks"
Imagine a farmer, **Sompal**, who needs seeds. If he goes to a moneylender, he gets trapped in debt. If he goes to an **SHG (Self-Help Group)**, he joins 15 friends, pools ₹100 each, and gets a bank loan easily. This is **Micro-credit**.

> 🎯 **Master Tip**: **NABARD** is like the reservoir. It fills the water tanks (**Banks**), which then provide water to the plants (**Farmers**).

---

#### 🏪 STEP 2: FIX THE DIRECTION (MARKETING)
"From Farm-to-Fork: The 4 Pillars"
Selling a crop is a maze. Farmers used to get lost. Now, we have:
1.  **Regulated Markets (Mandis)**: No "cheating" with weights.
2.  **Infrastructure**: Cold storage so tomatoes don't rot.
3.  **Cooperatives**: Like **Amul**. One farmer is weak; 10,000 farmers are a superpower.
4.  **The Safety Net (MSP)**: The Govt says, "If no one buys your wheat, we will buy it at this price."

---

#### 🥚 STEP 3: THE PUSH (DIVERSIFICATION)
"Why a farmer shouldn't just be a farmer"
Land is crowded. There are too many people doing "Disguised Unemployment".
- ** वर्कफोर्स Diversification**: Moving from the field to the **Poultry Farm** (Livestock) or the **Rural BPO** (IT).
- ** क्रॉप Diversification**: Moving from "Only Rice" to "Rice + Flowers + Grapes". It's the **Golden Revolution**.

---

#### 🍃 STEP 4: CLEAN THE BIKE (ORGANIC)
"Sikkim: The First 100% Organic State"
Chemical farming is like a "Fast Food Diet" for soil — it looks good initially but kills health. Organic farming is "Home-cooked food".
- **Benefit**: It's **Labor Intensive** (Good for India's population).
- **Risk**: Yield might be low for 2 years while the soil "detoxes".

---

#### 🎯 GOLDEN RULES OF CHAPTER 5
> **Rule 1** — **NABARD** (1982) is for refinancing, not direct lending.
> **Rule 2** — **SHGs** are for those who have no collateral (security) for loans.
> **Rule 3** — **Diversification** is the only cure for overcrowded agriculture.
> **Rule 4** — **Marketed Surplus** is what you sell *after* eating what you need.
> **Rule 5** — **Organic Farming** is the only way to save the soil for our grandchildren.
        `,
        visualizations: [
            {
                id: 'u7-ch5-v5-analogy',
                type: 'process',
                title: 'The Rural Bicycle Chain',
                caption: 'The logical flow of rural development components.',
                data: [
                    { title: 'Credit (The Chain)', description: 'Providing initial finance and liquidity.' },
                    { title: 'Marketing (Direction)', description: 'Ensuring fair price and distribution.' },
                    { title: 'Diversification (The Push)', description: 'Creating multiple income streams beyond crops.' },
                    { title: 'Sustainability (Maintenance)', description: 'Preserving land health via Organic methods.' }
                ]
            }
        ]
    }
];
