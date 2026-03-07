import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch6-t1',
        title: 'Workforce & Participation',
        description: 'Deep dive into the Indian labor market metrics and gender gaps.',
        content: `
### 📊 Teacher's Voice: The "Job Market Seesaw"
Imagine a seesaw. On one side, you have the **Population** (everyone). On the other, you have the **Workers** (those actually producing). The balance between these two is what we call the **Worker-Population Ratio (WPR)**.

### 1. The Trinity of Metrics
To master this chapter, you must distinguish between these three concepts:
1.  **Labor Force**: Everyone who is **Willing + Able** to work. This includes both the employed and those looking for jobs.
2.  **Workforce**: Only those who are **Actually Working**.
3.  **The Gap (Unemployment)**: Labor Force minus Workforce.

### 2. The Participation Paradox (WPR)
- **Calculation**: $\text{WPR} = \frac{\text{Total Workers}}{\text{Total Population}} \times 100$.
- **Urban vs. Rural**: Rural WPR is higher. **Why?** Because rural poverty doesn't allow the "luxury" of staying at home; people are forced into low-productivity work.
- **Gender Gap**: Female participation is significantly lower (~25% vs ~55% for males). Reasons include domestic burdens, social norms, and the "invisible work" (housework) not being counted in GDP.

### 3. Employment Status: The Three Pillars
- **Self-Employed (~52%)**: Farmers, shopkeepers. The largest segment in India.
- **Regular Salaried (~23%)**: Teachers, bankers. High social security but hard to get.
- **Casual Wage Laborers (~25%)**: Construction workers. No security, daily wages.
        `,
        visualizations: [
            {
                id: 'v1-hero',
                title: 'The Indian Job Market Seesaw',
                type: 'process',
                data: [
                    { title: 'Population', description: 'The entire human resource pool' },
                    { title: 'Labor Force', description: 'Those willing & able (Employed + Searching)' },
                    { title: 'Workforce', description: 'The actual producers (Contribution to GDP)' },
                    { title: 'The Gap', description: 'Unemployment (Labor Force - Workforce)' }
                ]
            },
            {
                id: 'v2-grid',
                title: 'Workforce Participation (WPR) Traps',
                type: 'grid',
                data: [
                    { label: 'Rural Area', desc: 'Higher WPR: Poverty forces participation' },
                    { label: 'Urban Area', desc: 'Lower WPR: More educational years taken' },
                    { label: 'Females', desc: 'Low Participation: Social norms & invisible work' },
                    { label: 'Males', desc: 'High Participation: Primary breadwinners' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch6-t2',
        title: 'Sectoral Shifts & Informalisation',
        description: 'Analyzing the movement from farms to factories and the rise of informal work.',
        content: `
### 📊 Teacher's Voice: The "Casualisation Trap"
Over the decades, India has seen a shift. While we want workers to move from farms to factories (Formal Sector), they are often getting stuck in **Casual Labor**. This is like moving from a shaky boat (unstable farming) to a slippery slope (unstable construction work).

### 1. Sectoral Distribution (The Shift)
- **Primary (Agriculture)**: Still the largest employer (~45%), but its share is falling.
- **Secondary (Industry)**: Slow growth.
- **Tertiary (Services)**: Rapid growth, becoming the engine of the economy.

### 2. Informalisation of Workforce
- **Formal Sector**: **10 or more** hired workers + Social Security (Pension, PF). Only ~6% of India.
- **Informal Sector**: Includes farmers, street vendors, and small workshops. **Less than 10** workers. ~94% of workforce. 
- **The Trend**: Even formal firms (MNCs) are now hiring workers on short-term **"one-year contracts"**. Since these workers lack long-term security, this leads to the **Informalisation of the Formal Sector**.

### 3. Case Study: The Ahmedabad Textile Crisis
In the 1980s, the closure of massive textile mills in Ahmedabad illustrated the pain of Informalisation. Thousands of workers with secure "Formal" jobs were suddenly forced into "Informal" work like pushcart vending or construction to survive.

### 3. Jobless Growth: The Paradox
When GDP grows at a record 8-9% but employment grows at only 1%, we call it **Jobless Growth**. 
- **The Cause**: Heavy reliance on technology/AI and capital-intensive methods rather than labor-intensive ones.
- **The Result**: A "Rich but Unemployed" economy.

### 4. Types of Unemployment
- **Disguised**: 5 people doing the work of 3. MP (Marginal Productivity) = 0.
- **Seasonal**: Working only during harvest/sowing.
- **Educated**: Graduates without relevant skills (The "Degree without Skill" gap).
        `,
        visualizations: [
            {
                id: 'v3-table',
                title: 'Formal vs. Informal: The Safety Net Gap',
                type: 'table',
                data: {
                    headers: ['Feature', 'Formal Sector', 'Informal Sector'],
                    rows: [
                        ['Workers', 'More than 10', 'Less than 10'],
                        ['Social Security', 'Yes (PF, Pension)', 'No (Daily Wage)'],
                        ['Labor Laws', 'Strict Protection', 'Non-existent/Weak'],
                        ['Economic Share', 'High Value Addition', 'Subsistence Living']
                    ]
                }
            },
            {
                id: 'v4-flow',
                title: 'The Process of Casualisation',
                type: 'process',
                data: [
                    { title: 'Skill Gap', description: 'Lack of vocational training' },
                    { title: 'Farm Exit', description: 'Distress migration from rural areas' },
                    { title: 'Entry', description: 'Admission into low-end Service/Construction' },
                    { title: 'Status', description: 'Casual Daily Wage (No Security)' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch6-t3',
        title: '📊 Expert Teacher Analysis',
        description: 'Premium insights, terms table, and the Master Chain for Chapter 6.',
        content: `
### PART 1 — COMPREHENSIVE TERMS TABLE
| Term | Examiner's Lens (Key Logic) | The "Simple English" Logic | Score Trap 🪤 |
| :--- | :--- | :--- | :--- |
| **Labor Force** | WPR + Unemployed | Everyone standing in the "Job Queue". | Does NOT include children/elderly. |
| **Jobless Growth** | Output $\\uparrow$, Jobs $\\leftrightarrow$ | Growing the cake without hiring more bakers. | Confused with "Negative Growth". |
| **Informalisation** | Loss of Social Security | Moving from an Office Desk to a Tea Stall. | Includes contract workers in MNCs! |
| **Casualisation** | Status shift to Daily Wage | Moving from Monthly Salary to Daily Cash. | Don't confuse with Informalisation. |
| **Disguised Unemp.** | MP = 0 | 10 people lifting a stone that 2 can lift. | Occurs mostly in Agriculture. |
| **Self-Employed** | Own account workers | Being your own "Boss" (e.g. Farmer). | Largest employment category (52%). |

### PART 2 — THE MASTER CHAIN: The "Employment Engine"
This chain connects the dots of the entire chapter:
1.  **Fuel**: Population Growth (The raw human resource).
2.  **Filter**: Education & Skill (Creating "Employable" people).
3.  **The Engine**: Economic Growth (GDP rising).
4.  **The Exhaust (Problem)**: Technology Bias (Capital-intensive growth = No new jobs).
5.  **The Breakdown**: Informalisation & Casualisation (Jobs exist, but they have no "Safety Net").

### 💡 Golden Rules for Answer Writing
1.  **The WPR Logic**: Always mention that a lower WPR indicates higher dependency (more people eating, fewer producing).
2.  **The Casual vs Informal**: Use the "Safety Net" keyword to explain the difference. If there's no PF/Pension, it's Informal.
3.  **Jobless Growth**: Never say "No Jobs." Say "Growth is independent of employment generation."
        `,
        visualizations: []
    }
];
