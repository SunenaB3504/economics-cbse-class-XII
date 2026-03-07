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

> [!TIP]
> **The NABARD Trap**: In exams, don't say NABARD gives loans to farmers. It gives loans to **banks** (Refinancing), which then lend to farmers.
        `,
        visualizations: [
            {
                id: 'u7-ch5-v1-hero',
                type: 'image',
                title: 'Rural Credit Lifecycle',
                caption: 'The Rural Credit Lifecycle: Visualizing the flow from NABARD to the Grassroots.',
                data: {
                    src: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=1000',
                    alt: 'Rural Credit Lifecycle'
                }
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
2.  **Infrastructure**: Building the "links" — cold storages, railways, and rural roads.
3.  **Cooperative Marketing**: Strength in unity. **Operation Flood (Amul)** is the legend here.
4.  **Policy Instruments**: 
    - **MSP (Minimum Support Price)**: The safety net for farmers.
    - **Buffer Stocks (FCI)**: Ensuring we don't starve during droughts.
    - **PDS (Public Distribution System)**: Grains for the poor at ₹2-3/kg.

### 2. Diversification: Don't Put All Eggs in One Basket
Why diversify? Because crop farming is risky and seasonal (overcrowded).

#### Allied Activities (The 3 Revolutions)
1.  **Animal Husbandry (Livestock)**: Operation Flood transformed India into a milk-surplus nation. 70 million small farmers depend on it.
2.  **Fisheries (Blue Revolution)**: Inland sources (rivers/lakes) contribute **65%**, while Marine (sea) contributes **35%**. Kerala and Andhra are leaders.
3.  **Horticulture (Golden Revolution)**: Focused on fruits, vegetables, and honey. India is the 2nd largest producer globally (leaders in Mangoes/Bananas).

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
    }
];
