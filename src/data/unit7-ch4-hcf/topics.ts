import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch4-t1',
        title: 'Concepts & HCF Sources',
        description: 'Basic meaning of human capital and its comparison with physical capital.',
        content: `
### 1. Meaning of Human Capital
Human Capital refers to the **stock of skill, ability, expertise, education, and knowledge** embodied in the people of a country at a point in time.
- It is an **intangible asset**.
- It is **inseparable** from its owner.
- It is **imperfectly mobile** (restricted by nationality/culture).

### 2. Physical vs. Human Capital (NCERT Box 4.1)
| Basis | Physical Capital | Human Capital |
|-------|-----------------|---------------|
| **Nature** | Tangible (can be seen/touched) | Intangible (expertise/skills) |
| **Separability** | Separable from owner | Inseparable from owner |
| **Mobility** | Completely mobile between countries | Restricted mobility (needs/visas) |
| **Formation** | Economic/Technical process | Social/Policy process |
| **Depreciation** | Physical wear & tear/obsolescence | Ageing (can be reduced by health/edu) |
| **Benefits** | Private benefits (flows to owner) | Both Private and **Social (External) benefits** |

### 3. Sources of Human Capital Formation (EH-TMI)
1.  **Expenditure on Education**: Most important source. Increases future income and productivity.
2.  **Expenditure on Health**: Includes **Preventive** (vaccines), **Curative** (medicines), **Social** (literacy), and provision of clean water/sanitation.
3.  **On-the-job Training**: Enhances specialized skills; firms invest because productivity gains > training costs.
4.  **Migration**: People move in search of higher salaries. Costs involved: Transport, higher cost of living, and **psychic costs** of living in a strange setup.
5.  **Information**: Spending to find out about labor markets and educational institutions (salaries, employable skills).

### 4. Human Capital vs. Human Development
| Human Capital | Human Development |
|---------------|-------------------|
| Education and health are **means to increase productivity**. | Education and health are **ends in themselves**. |
| Investment is "unproductive" if it doesn't increase output. | Human welfare should increase even if productivity doesn't. |
| Treats humans as a means to an end. | Based on the right to be literate and healthy. |
        `,
        visualizations: [
            {
                id: 'v4-hcf-comparison',
                title: 'Physical vs. Human Capital',
                type: 'table',
                caption: 'NCERT Box 4.1: Key differences between the two forms of capital.',
                data: {
                    headers: ['Basis', 'Physical Capital', 'Human Capital'],
                    rows: [
                        ['Nature', 'Tangible (seen/touched)', 'Intangible (expertise/skills)'],
                        ['Separability', 'Separable from owner', 'Inseparable from owner'],
                        ['Mobility', 'Completely mobile', 'Restricted mobility'],
                        ['Formation', 'Economic/Technical process', 'Social/Policy process'],
                        ['Depreciation', 'Physical wear & tear', 'Ageing (reduced by health)'],
                        ['Benefits', 'Private benefits only', 'Private and Social benefits']
                    ]
                }
            },
            {
                id: 'v4-hcf-sources',
                title: '5 Sources of HCF',
                type: 'grid',
                caption: 'The primary drivers of Human Capital Formation in a nation.',
                data: [
                    { label: 'Education', desc: 'Increases future income and productivity.' },
                    { label: 'Health', desc: 'Reduces loss of labor due to illness.' },
                    { label: 'OJT', desc: 'On-the-job training enhances skills.' },
                    { label: 'Migration', desc: 'Moving to better labor markets.' },
                    { label: 'Information', desc: 'Decisions based on labor market data.' }
                ]
            },
            {
                id: 'v4-hcf-growth-cycle',
                title: 'HCF & Economic Growth Cycle',
                type: 'process',
                caption: 'The reciprocal relationship between human capital and national income.',
                data: [
                    { title: 'Higher Income', description: 'Leads to higher investment in education and health.' },
                    { title: 'Human Capital Formation', description: 'Builds a skilled and healthy workforce.' },
                    { title: 'Enhanced Productivity', description: 'Innovation and efficient use of physical capital.' },
                    { title: 'Economic Growth', description: 'Increase in Real National Income (GDP).' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch4-t2',
        title: 'Education Sector in India',
        description: 'Regulatory bodies and educational milestones in India.',
        content: `
### 1. Growth in Government Expenditure
- **Total Expenditure %**: Indicates importance in government scheme (increased from 7.9% to 16.5% during 1952-2020).
- **GDP %**: Indicates commitment of people's income (increased from 0.6% to 4.4% in the same period).
- **Education Cess**: 2% surcharge on Union taxes for elementary education.

### 2. Select Indicators of Development (1951-2021)
| Particulars | 1951 | 2018-21 |
|-------------|------|---------|
| Real Per Capita Income (Rs) | 7,651 | 94,054 |
| Crude Death Rate (per 1000) | 25.1 | 6.0 |
| Infant Mortality Rate (IMR) | 146 | 28 |
| Life Expectancy (Male) | 37.2 | 68.6 |
| Life Expectancy (Female) | 36.2 | 71.4 |
| Literacy Rate (%) | 16.67 | 74+ |

### 3. Key Regulatory Bodies & Committees
- **NCERT/UGC/AICTE/ICMR**: Facilitate institutions in their respective sectors.
- **Kothari Commission (1964-66)**: Recommended **6% of GDP** for education.
- **Tapas Majumdar Com. (1999)**: Estimated **₹1.37 lakh crore** needed over 10 years for universal school education.

### 4. Seventh Five Year Plan Perspective
> "Human resources development... has necessarily to be assigned a key role in any development strategy... Trained and educated on sound lines, a large population can itself become an asset in accelerating economic growth."

### 5. Future Prospects & Challenges
- **Education for All**: Absolute number of illiterates is still as high as India's population at independence.
- **Gender Equity**: Narrowing gaps, but women's education remains imminent for status and fertility control.
- **Indian Education Pyramid**: Very steep; few reach higher education.
- **Educated Unemployment**: Higher among rural females (~30% vs 3-6% for primary level).
        `,
        visualizations: [
            {
                id: 'v4-hcf-indicators',
                title: 'Development Indicators (1951 vs 2021)',
                type: 'table',
                caption: 'Comparative analysis of India educational and health attainment.',
                data: {
                    headers: ['Indicator', '1951', '2018-21'],
                    rows: [
                        ['Per Capita Income', '₹7,651', '₹94,054'],
                        ['IMR (per 1000)', '146', '28'],
                        ['Life Expectancy (M)', '37.2 yrs', '68.6 yrs'],
                        ['Life Expectancy (F)', '36.2 yrs', '71.4 yrs'],
                        ['Literacy Rate', '16.67%', '74%+']
                    ]
                }
            },
            {
                id: 'v4-hcf-regulatory',
                title: 'Regulatory Infrastructure',
                type: 'grid',
                caption: 'Apex bodies facilitating education and health sectors in India.',
                data: [
                    { label: 'NCERT', desc: 'School education curricula and research.' },
                    { label: 'UGC', desc: 'University standards and funding.' },
                    { label: 'AICTE', desc: 'Technical and management education.' },
                    { label: 'ICMR', desc: 'Biomedical research and health standards.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch4-master',
        title: '📊 Expert Teacher Analysis: The Whole Chapter',
        description: 'Comprehensive Terms Table and Master Chain using the Growing Orchard analogy.',
        content: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 PART 1 — COMPREHENSIVE TERMS TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| S.No. | Term | Abbr. | Brief Explanation | Formula | Interrelationship |
|-------|------|--------------|-------------------|---------|-------------------|
| **BASIC CONCEPTS** | | | | | |
| 1 | Human Resource | HR | The raw population of a country available to work. | — | HR → Education/Health → Human Capital. |
| 2 | Human Capital | HC | The stock of skills, knowledge, and expertise held by people. | — | HC → Increases productivity → Higher Income. |
| 3 | Human Capital Formation | HCF | The process of adding to the stock of human capital over time. | ΔHC / Δt | Investment in Edu/Health → HCF → Economic Growth. |
| 4 | Physical Capital | PC | Tangible assets like machines, buildings, and factories. | — | PC needs HC to operate it (e.g., a tractor needs a trained farmer). |
| 5 | Physical Capital Formation | PCF | The process of adding to the stock of physical assets. | ΔPC / Δt | Higher Savings → Investment → PCF. |
| **SOURCES OF HCF** | | | | | |
| 6 | Expenditure on Education | — | Spending on schools and colleges to build future skills. | — | Edu Spend → Skill acquisition → Higher earning capacity. |
| 7 | Expenditure on Health | — | Spending on vaccines and medicine to keep people fit for work. | — | Health Spend → Healthy workforce → Continuous labor supply. |
| 8 | Preventive Medicine | — | Medical intervention taken BEFORE illness (like vaccines). | — | Vaccines → Reduced disease spread → Steady production. |
| 9 | Curative Medicine | — | Medical intervention taken DURING illness (medicines). | — | Cure → Faster return to work → Reduced man-day loss. |
| 10 | Social Medicine | — | Spreading health literacy and hygiene awareness. | — | Literacy → Better personal hygiene → Prevents epidemics. |
| 11 | On-the-job Training | OJT | Training while working in the office/factory. | — | OJT → Better utilization of machines → Higher output. |
| 12 | Migration | — | Moving from one place to another for better jobs. | — | Extra salary must outweigh migration costs. |
| 13 | Information | — | Data about job markets, salaries, and skills. | — | Info → Better decisions on HCF → Efficient utilization. |
| **HCF & GROWTH** | | | | | |
| 14 | Economic Growth | — | Increase in the Real National Income (GDP). | %Δ Nominal GDP - %Δ Prices | HCF → Innovations → Higher Real GDP. |
| 15 | Human Development | HD | Human well-being as an end, not just for productivity. | — | Basic Edu/Health → HD → Expanded choices. |
| 16 | Knowledge Economy | — | Economy based on production/use of knowledge. | — | IT/AI/Big Data → Multi-disciplinary demand. |
| **EDUCATION SECTOR** | | | | | |
| 17 | NCERT | NCERT | Sets curricula and publishes textbooks. | — | NCERT → Quality school education → Base for HCF. |
| 18 | UGC | UGC | Regulates and funds university education. | — | UGC → Standardized degrees → Professional HC. |
| 19 | AICTE | AICTE | Regulates technical and management education. | — | AICTE → Engineering/MBA skills → Technical manpower. |
| 20 | ICMR | ICMR | Apex body for biomedical research. | — | ICMR → Medical research → Better health HCF. |
| 21 | Education Cess | — | A 2% surcharge for funding elementary education. | 0.02 × Union Tax | Cess → Elementary Edu funding → Foundation. |
| 22 | Right to Education | RTE | Legal act for free education (ages 6-14). | — | RTE → Compulsory schooling → Universal HCF. |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 PART 2 — MASTER CHAIN OF INTERRELATIONSHIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### SUB-PART A — VISUAL CHAIN DIAGRAM

\`\`\`text
    RAW HUMAN RESOURCES (Ramu the student)
          ↓
    INVESTMENT IN SOURCES (EH-TMI)
    (Edu + Health + OJT + Migration + Info)
          ↓
    HUMAN CAPITAL FORMATION (HCF)
    (The Skill stock: 🎓 + 🏥 + ⚙️)
          ↓
    INCREASED PRODUCTIVITY
    (Faster work + Fewer leaves)
          ↓
    INNOVATIONS & TECHNOLOGY ABSORPTION
    (Absorbing AI, Big Data, New tech)
          ↓
    ECONOMIC GROWTH
    (Higher Real National Income / GDP)
          ↓
    IMPROVED HUMAN DEVELOPMENT (HD)
    (Better choices + Longer life + Well-being)
\`\`\`

### SUB-PART B — SIMPLE ENGLISH EXPANSION

#### 🌳 THE ANALOGY: "THE GROWING ORCHARD"
Think of our Indian economy as a massive **Mango Orchard in Ratnagiri**.
1. **Human Resources** are the raw saplings (young plants).
2. **Human Capital Formation** is the process of watering, manuring, and protection.
3. **Economic Growth** is the harvest of delicious Alphonso mangoes we can sell!

---

#### ⚙️ STEP 1: PREPARING THE SOIL
"Why your parents pay Swiggy for food but Zomato for the delivery guy's skill"
In our orchard, before a sapling becomes a tree, we must invest in it. This is exactly what your parents do when they pay school fees for **Priya** or take **Ali** for a polio vaccine. We call this **Human Capital Formation**.

| Topic | Explanation | Example |
|-------|-------------|---------|
| **Physical Capital** | The tractor, the pump, and the fence. | Tata Steel buying a new blast furnace. |
| **Human Capital** | The gardener's skill and knowledge. | A software engineer at **Infosys** Chennai. |

> 🎯 Key Insight: Just as an orchard needs good soil and fences (Physical Capital), it absolutely fails without a skilled gardener who knows when to prune and water (Human Capital).

---

#### ⚙️ STEP 2: THE 5 FERTILIZERS (SOURCES)
"The EH-TMI Formula for a Bumper Crop"
To turn a simple sapling into a fruit-bearing tree, we use five fertilizers:
1. **Education**: Schooling at **Kendriya Vidyalaya**. It's the primary water.
2. **Health**: Preventive vaccines (like Pulse Polio) and clean water. A sick gardener can't work.
3. **On-the-job Training**: Imagine a senior gardener at **Reliance Jamnagar** teaching a junior.
4. **Migration**: A farmer moving from a dry village in Bihar to a lush farm in Punjab.
5. **Information**: Knowing which market (Zomato or Mandi) gives the best price.

> 💡 Remember: Migration is only useful if the "Extra Salary" in Delhi is bigger than the cost!

---

#### ⚙️ STEP 3: MAN vs. OUTPUT
"The Human Capital Seesaw"
Here is the twist: Human Capital is not just a tool; it's the person themselves!
- **Physical Capital** can be sold separately (you can sell your tractor).
- **Human Capital** can NEVER be sold separately (A doctor's skill stays inside the doctor!).

| Basis | Physical | Human |
|-------|----------|-------|
| Separability | Can be sold without owner. | Requires owner to be present. |
| Mobility | Can be exported easily. | Restricted by visas/languages. |

> 🎯 Key Insight: You can't send your 'coding skill' to Bengaluru while you stay in Kerala; you have to physically go there!

---

#### ⚙️ STEP 4: MEANS vs. ENDS
"Is education just for a higher Salary?"
This is the most important insight of the chapter. Economists used to think education was just a **Means** (Human Capital) to earn money. But now we realize it's the **End** (Human Development).
- **Human Capital**: "If Jaspal learns to code, he will produce ₹1 lakh more for Google."
- **Human Development**: "Jaspal should learn to read because it makes his life better and gives him dignity."

> ⚠️ Warning: Treating humans only as "Human Capital" is like looking at a tree only for its wood, but "Human Development" is enjoying its shade and beauty too.

---

#### ⚙️ STEP 5: THE INDIAN EDUCATION PYRAMID
"The Steep Climb from Primary to PhD"
In India, the education structure looks like a steep hill. Many children start at **Primary School**, but very few reach **IITs** or **IIMs**.
1. **Elementary Edu**: The focus of **Sarva Shiksha Abhiyan**.
2. **Higher Edu**: Where the **UGC** and **AICTE** make sure standards are high.
3. **The Cess**: That extra 2% tax you see on your restaurant bill? That goes straight to primary schools!

> 🎯 Key Insight: The Tapas Majumdar Committee told us in 1999 that we need to spend heavily for 10 years to get every child into school.

---

#### 🎯 GOLDEN RULES OF CHAPTER 4
> Rule 1 — Human Capital is "Intangible" — you can't touch a doctor's knowledge, but you can see its results in the patient.
> Rule 2 — Education and Health create "Social Benefits" — if you don't have a cough, I won't catch one!
> Rule 3 — The Kothari Commission target is **6% of GDP** for education. India is still catching up.
> Rule 4 — Human Development is BROADER than Human Capital because it includes welfare and rights.
> Rule 5 — Migration and Information are "Investments" because they help you utilize your skills in the best market.
        `,
        visualizations: []
    }
];
