import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch6-t1',
        title: 'Workforce & Participation',
        description: 'NCERT 6.1-6.4: The meaning of work, labor metrics, and gender participation.',
        content: `
### 0. Introduction: The Meaning of Work
Why do we work? Work is not just for "earning" a living; it provides:
- **Self-Worth**: Employment gives us a sense of identity and relates us meaningfully to society.
- **GDP Contribution**: Every worker contributes to the National Income (GDP/GNP).
- **Inclusivity**: A "worker" includes the self-employed (farmers, shopkeepers) and even those temporarily away from work due to illness, injury, or festivals.

### 📊 Teacher's Voice: The "Job Market Seesaw"
Imagine a seesaw. On one side, you have the **Population** (everyone). On the other, you have the **Workers** (those actually producing). The balance between these two is the **Worker-Population Ratio (WPR)**.

### 1. The Trinity of Metrics
To master this chapter, distinguish between:
1.  **Labor Force**: Everyone who is **Willing + Able** to work (Employed + Unemployed).
    - **Formula (LFPR)**: $\text{LFPR} = \frac{\text{Labor Force}}{\text{Total Population}} \times 100$.
2.  **Workforce**: Only those who are **Actually Working**.
3.  **The Gap (Unemployment)**: Labor Force minus Workforce.
    - **Unemployment Rate**: $\frac{\text{Unemployed}}{\text{Labor Force}} \times 100$.

### 2. The Participation Paradox (WPR)
- **Calculation**: $\text{WPR} = \frac{\text{Total Workers}}{\text{Total Population}} \times 100$.
- **Urban vs. Rural**: Rural WPR is higher (~42%) because poverty doesn't allow the "luxury" of staying home. Urban WPR is lower (~38%).
- **Gender Gap**: Female participation is significantly lower (~25% vs ~55% for males). Reasons include domestic burdens and "invisible work" not being counted in GDP.

### 3. Employment Status: The Three Pillars
- **Self-Employed (~52%)**: The largest segment; comprises own-account workers (farmers, etc.).
- **Regular Salaried (~23%)**: Higher security and social benefits (PF, Pension).
- **Casual Wage Laborers (~25%)**: Daily wage workers with NO job security.
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
        description: 'NCERT 6.5-6.8: Trends, Jobless Growth, and the Informalisation crisis.',
        content: `
### 📊 Teacher's Voice: The "Casualisation Trap"
India has seen a shift from farms to factories. However, many workers get stuck in **Casual Labor**—moving from unstable farming to unstable daily-wage construction.

### 1. Sectoral Distribution (The Shift)
- **Primary (Agriculture)**: Still the largest employer (~45%), but its share is falling (from 74% in the 1970s).
- **Secondary (Industry)**: Slow but steady growth (around 24%).
- **Tertiary (Services)**: The fastest-growing engine of the Indian economy.

### 2. Informalisation of Workforce
- **Formal Sector**: **10 or more** hired workers + Social Security (Pension, PF). Only ~6% of India.
- **Informal Sector**: Includes farmers, street vendors, and workshops with **less than 10** workers. ~94% of workforce. 
- **The Trend**: Even formal firms (MNCs) now hire on **"one-year contracts"** to avoid social security, leading to the **Informalisation of the Formal Sector**.

### 3. Case Study: The Ahmedabad Textile Crisis
The 1980s closure of massive textile mills in Ahmedabad forced 80,000+ secure "Formal" workers into "Informal" jobs like pushcart vending, leading to widespread poverty and alcoholism.

### 4. Jobless Growth & Modern Trends
- **Jobless Growth**: GDP grows (8-9%) but employment doesn't (1%). Driven by technology and capital-intensive bias.
- **Home as Workplace**: Modern outsourcing and technology allow people to work from home, but often with the lack of stable contracts (NCERT Box 6.10).

### 5. Types of Unemployment
- **Disguised**: 5 people doing the work of 3. MP = 0. Common in agriculture.
- **Seasonal**: Only working during harvesting seasons.
- **Educated**: Graduates without relevant industry skills.
- **Open**: Willing to work but can't find even one hour of work in a half-day.
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
        title: 'Government & Employment Initiatives',
        description: 'NCERT 6.9: Direct vs. Indirect goals and key schemes.',
        content: `
### 📊 Teacher's Voice: The Stimulus Effect
When the government builds a dam, it creates jobs in two ways:
1.  **Direct**: Hiring engineers and clerks for the project.
2.  **Indirect**: Buying steel/cement from private firms, who then hire more people to meet that demand.

### 1. Direct vs. Indirect Employment
The government employs people directly in defense, railways, and banks. Indirect employment occurs when government policies and spending stimulate growth in the private sector.

### 2. MGNREGA (2005)
The **Mahatma Gandhi National Rural Employment Guarantee Act** is the backbone of rural employment generation:
- **Right to Work**: Guaranteed **100 days** of unskilled manual work to rural households.
- **Social Safety Net**: Aimed at poverty alleviation and creating durable rural assets (roads, dams).
        `,
        visualizations: [
            {
                id: 'v5-grid',
                title: 'Govt Employment Stimulus',
                type: 'grid',
                data: [
                    { label: 'Direct', desc: 'Government hiring in railways, banks, and defense.' },
                    { label: 'Indirect', desc: 'Creation of private sector jobs through govt spending.' },
                    { label: 'MGNREGA', desc: 'Right to 100 days of unskilled work.' },
                    { label: 'Reform Shift', desc: 'Movement from public to private-led growth.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch6-t4',
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
