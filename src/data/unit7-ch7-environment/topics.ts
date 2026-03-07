import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch7-t1',
        title: 'Environment: Functions & Crisis',
        description: 'NCERT 7.1-7.2: Defining the environment and the supply-demand reversal.',
        content: `
### 📊 Teacher's Voice: The "Earth's Exhaust Pipe"
Think of the environment as a high-performance engine. It provides the **Fuel** (Resources), but it also has an **Exhaust Pipe** (Absorptive Capacity). If we run the engine too fast, the exhaust can't keep up, and the engine (life sustenance) breaks down.

### 1. The Four Vital Functions
NCERT identifies four major roles of the environment:
1.  **Supplies Resources**: Includes both **Renewable** (trees, fish) and **Non-renewable** (fossil fuels).
2.  **Assimilates Waste**: The environment's "Garbage Disposal" system.
3.  **Sustains Life**: Provides the genetic and biological diversity needed for survival.
4.  **Aesthetic Services**: The "Mental Peace" provided by scenery (mountains, oceans).

### 2. The Great Reversal (Supply-Demand)
In the past, the supply of resources was vast, and demand was low. Today, we face a **reversal**:
- **High Demand**: Driven by population explosion and affluent consumption.
- **Limited Supply**: Due to overuse and misuse.
- **Result**: An **Environmental Crisis** where wastes exceed the environment's "Absorptive Capacity." Rivers and aquifers have dried up, making water an **Economic Good** (a commodity that now has a price).

### 3. Carrying vs. Absorptive Capacity
- **Carrying Capacity**: The environment is healthy ONLY if:
    - $\text{Rate of Extraction} < \text{Rate of Regeneration}$
    - $\text{Waste Generated} < \text{Assimilating Capacity}$
- **Absorptive Capacity**: The maximum amount of degradation the environment can handle without breaking down.
        `,
        visualizations: [
            {
                id: 'v1-flow',
                title: 'The Environmental Crisis Flow',
                type: 'process',
                data: [
                    { title: 'Affluence', description: 'Rising consumption & population' },
                    { title: 'Over-extraction', description: 'Extraction > Regeneration' },
                    { title: 'Waste Load', description: 'Waste > Absorptive Capacity' },
                    { title: 'Sustainability Failure', description: 'Breakdown of life-support functions' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch7-t2',
        title: "India's Environmental State",
        description: "NCERT 7.3: Land degradation, pollution, and the CPCB's role.",
        content: `
### 📊 Teacher's Voice: The "Dichotomy of Threat"
India faces a unique double-threat:
1.  **Threat of Poverty**: Land degradation due to desperation (deforestation for fuel).
2.  **Threat of Affluence**: Pollution from rapid industrialization and urban luxury.

### 1. Land Degradation: The Finite Resource
India supports **17% of the world's population** on just **2.5% of the land area**.
- **Factors**: Deforestation, overgrazing, shifting cultivation, and indiscriminate use of agro-chemicals.
- **The Soil Theft**: Soil is eroded at **5.3 billion tonnes per year** in India!

### 2. Pollution Control: The CPCB (1974)
To tackle this, the **Central Pollution Control Board (CPCB)** was setup in **1974**.
- **Functions**: Investigating water/air pollution, laying down standards for emissions, and technical assistance to the government.

### 3. Opportunity Cost of Neglect
Correction for environmental damages involves **High Opportunity Costs**. Governments must spend huge amounts on technology and medical care (for pollution-related diseases) instead of traditional development like education.

### 4. Global Challenges
- **Global Warming**: Increase in average earth temperature due to Greenhouse Gases ($CO_2$, Methane). Result: Melting polar ice, rising sea levels.
- **Ozone Depletion**: Reduction of ozone in the stratosphere due to **CFCs** (Montreal Protocol, 1987). Result: High UV radiation causing skin cancer.
        `,
        visualizations: [
            {
                id: 'v2-table',
                title: 'Global Warming vs. Ozone Depletion',
                type: 'table',
                data: {
                    headers: ['Feature', 'Global Warming', 'Ozone Depletion'],
                    rows: [
                        ['Main Cause', 'Greenhouse Gases ($CO_2$)', 'Chlorofluorocarbons (CFCs)'],
                        ['Atmosphere Layer', 'Lower Atmosphere', 'Stratosphere (Upper)'],
                        ['Key Impact', 'Rising Sea Levels', 'UV Radiation / Skin Cancer'],
                        ['Solution', 'Kyoto Protocol / Renewables', 'Montreal Protocol']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch7-t3',
        title: 'Sustainable Development Toolbox',
        description: 'NCERT 7.4-7.5: Definitions and green strategies.',
        content: `
### 📊 Teacher's Voice: The "Resource Loan"
"The Earth is not a gift from our parents, it is a loan from our children." This is the core of **Sustainable Development**.

### 1. The Definitions
- **UNCED/Brundtland**: Meeting needs of the present without compromising the future.
- **Edward Barbier**: Specifically focuses on increasing the material standard of living of the **Poor** at the grassroot level.
- **Herman Daly's Rules**: 
    1. Limit population.
    2. Input-efficient technology.
    3. Regeneration rate = Extraction rate.
    4. Correcting pollution inefficiencies.

### 2. Strategies for a Green India
- **Solar Energy**: Photovoltaic cells and the **International Solar Alliance (ISA)**.
- **Wind Power**: High initial cost but zero pollution.
- **Rural Areas**: LPG and **Gobar Gas** (biogas) to prevent firewood use.
- **Urban Areas**: **CNG** in public transport (Delhi's success story).
- **Traditional Knowledge**: Returning to **Medicinal Plants** (Ayurveda) and **Organic Farming** (Biocomposting).
- **Biopest Control**: Using **Neem** and birds (owls/peacocks) instead of chemicals.
- **Mission LiFE**: "Lifestyle for Environment" — a movement for mindful consumption and reducing individual carbon footprints.
- **Net Zero 2070**: India's commitment to achieving zero net carbon emissions by 2070.
        `,
        visualizations: [
            {
                id: 'v3-grid',
                title: 'The Sustainable Strategy Grid',
                type: 'grid',
                data: [
                    { label: 'Energy', desc: 'Solar, Wind, Mini-hydel' },
                    { label: 'Rural', desc: 'LPG, Gobar Gas' },
                    { label: 'Urban', desc: 'CNG, Solar Lighting' },
                    { label: 'Agri', desc: 'Organic, Biopest, Biocomposting' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch7-t4',
        title: '📊 Expert Teacher Analysis',
        description: 'Premium insights, terms table, and the Master Chain for Chapter 7.',
        content: `
### PART 1 — COMPREHENSIVE TERMS TABLE
| Term | Examiner's Lens (Key Logic) | The "Simple English" Logic | Score Trap 🪤 |
| :--- | :--- | :--- | :--- |
| **Absorptive Cap.** | Waste processing limit | The Earth's "Digestive System". | Confused with "Carrying Capacity". |
| **Carrying Capacity** | Resource-Waste health | The "Plimsoll Line" (load limit) of a ship. | Extraction must be < Regeneration! |
| **Sustainable Dev.** | Intergenerational Equity | Not spending your grandkids' inheritance. | Barbier vs Brundtland definitions. |
| **Mission LiFE** | Mindful Consumption | "Lifestyle for Environment" — Individual action. | To be linked with Sustainable Dev. |
| **Net Zero 2070** | Carbon Neutrality | Balancing emissions and absorption by 2070. | India's global climate commitment. |
| **Appiko Movement** | Sirsi, Karnataka (1983) | "Hug the trees" (Similar to Chipko). | Location: South India (Karnataka). |
| **Biocomposting** | Earthworms / Organic | Using "Nature's Recyclers" for soil. | Alternative to Chemical Fertilizers. |

### PART 2 — THE MASTER CHAIN: The "Sustainability Loop"
1.  **Input**: Environment resources (The Capital).
2.  **Usage**: Economic Development (The Engine).
3.  **Conflict**: Waste > Absorptive Capacity (The Crisis).
4.  **Solution**: Sustainable Strategies (The Repair).
5.  **Ultimate Goal**: Intergenerational Equity (The Legacy).

### 💡 Golden Rules for Answer Writing
1.  **The Formula**: When defining sustainability, always mention **Intergenerational Equity**.
2.  **The Barbier Quote**: Use Barbier's focus on the "Poor" to score higher in 6-mark questions.
3.  **Dichotomy of Threat**: Explain that India suffers from both poverty-based and affluence-based pollution.
        `,
        visualizations: []
    }
];
