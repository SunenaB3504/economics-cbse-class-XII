
import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u7-t1',
    title: 'Human Capital Formation in India',
    description: 'The process of developing human resources through education, health, and training.',
    content: `
# Human Capital Formation in India

Human Capital refers to the stock of skills, expertise, education, and knowledge embodied in the people of a nation. It is a key driver of economic growth.

### 1. Sources of Human Capital Formation
- **Expenditure on Education:** The most significant source. India still spends significantly less than the 6% GDP target recommended by the **Education Commission in 1966**.
- **Expenditure on Health:** A healthy worker is more productive. Includes preventive, curative, and social medicine. India promotes traditional systems through **AYUSH** (Ayurveda, Yoga, Unani, Siddha, Homoeopathy).
- **On-the-job Training:** Improves efficiency as workers learn while earning.
- **Expenditure on Migration:** Moving to areas with better job prospects.
- **Information:** Spending on labor market data to make informed career choices.

### 2. Human Capital vs. Human Development
- **Human Capital** views education and health as a means to increase productivity.
- **Human Development** views education and health as integral to human well-being and a basic human right.

### 3. State Intervention
The government must regulate education and health due to:
- **Long-term impact:** Mistakes in these sectors cannot be easily corrected.
- **Information Asymmetry:** Private providers may exploit lack of information.
- **Equity:** Ensuring quality services for the poor.

### 4. Important Milestones
- **1966:** Recommendation to spend 6% of GDP on education.
- **2020:** Introduction of the **National Education Policy (NEP)**.

### 5. Education Regulatory Bodies
- **UGC** (University Grants Commission), **NCERT**, and **AICTE**.
    `,
    visualizations: [
      {
        id: 'u7-v1',
        title: 'Capital vs Development',
        type: 'table',
        data: {
          headers: ['Basis', 'Human Capital', 'Human Development'],
          rows: [
            ['Core View', 'Means to an end (Productivity)', 'End in itself (Well-being)'],
            ['Focus', 'Economic Growth', 'Human Rights & Welfare'],
            ['Role of Education', 'Factor of production', 'Integral part of existence']
          ]
        }
      }
    ]
  },
  {
    id: 'u7-t2',
    title: 'Rural Development',
    description: 'Challenges of credit, marketing, and the need for diversification in rural India.',
    content: `
# Rural Development

Rural development is a comprehensive process focusing on the social and economic improvement of rural lives.

### 1. Rural Credit (The Lifeline)
- **Institutional Sources:** Commercial Banks, **RRBs**, and Cooperatives.
- **Nationalisation (1969):** 14 major commercial banks were nationalised to boost rural credit and reduce dependence on moneylenders.
- **NABARD (1982):** National Bank for Agriculture and Rural Development. The apex body for rural credit.
- **Self-Help Groups (SHGs):** Focus on micro-credit for women and the marginalized.

### 2. Diversification
Shifting from crop farming to:
- **Livestock:** Cattle, goats, poultry.
- **Fisheries:** Blue Revolution.
- **Horticulture:** Golden Revolution.
- **IT-enabled Services:** Information as a tool for crop management.

### 3. Organic Farming
A sustainable alternative to chemical-based farming. Maintains long-term soil health and produces chemical-free food.

### 4. Agricultural Marketing
Assembling, storage, processing, and distribution of farm products. Measures include regulated markets, infrastructure, and buffer stocks (FCI).
    `,
    visualizations: [
      {
        id: 'u7-v2',
        title: 'Diversification Areas',
        type: 'grid',
        data: [
          { label: 'Animal Husbandry', desc: 'Livestock farming for milk, meat, and eggs.' },
          { label: 'Fisheries', desc: 'The Blue Revolution focus.' },
          { label: 'Horticulture', desc: 'Fruits, vegetables, and medicinal plants.' },
          { label: 'Organic Farming', desc: 'Sustainable, non-chemical agriculture.' }
        ]
      }
    ]
  },
  {
    id: 'u7-t3',
    title: 'Employment: Growth, Informalisation and Challenges',
    description: 'Understanding the structure of the labor force and the problem of unemployment.',
    content: `
# Employment: Growth and Informalisation

### 1. Basic Concepts
- **Worker:** Anyone engaged in economic activity.
- **Labour Force:** Persons working + Persons seeking/available for work.
- **Workforce:** Persons actually working.
- **Participation Rate:** Higher for men than women; higher in rural areas than urban (due to poverty-induced work).

### 2. Trends
- **Informalisation:** Trend of moving from secure formal sector jobs to insecure informal sector work without social security.intensified since the **1990s**.
- **Self-Employed:** Major segment of the Indian workforce (~52%).

### 3. Unemployment Types
- **Disguised:** Productivity is zero (e.g., in agriculture).
- **Seasonal:** Work during specific cycles.
- **Open:** Willing and able but no work.

### 4. MGNREGA (2005)
Enacted to provide a 100-day wage employment guarantee to rural households.
    `,
    visualizations: [
      {
        id: 'u7-v3',
        title: 'Workforce Categorization',
        type: 'table',
        data: {
          headers: ['Category', 'Social Security', 'Examples'],
          rows: [
            ['Formal Sector', 'Available (Pension, PF)', 'Govt employees, Private Bank staff'],
            ['Informal Sector', 'Not Available', 'Ragpickers, Construction workers, Small shop staff']
          ]
        }
      }
    ]
  },
  {
    id: 'u7-t4',
    title: 'Environment and Sustainable Development',
    description: 'The impact of economic growth on the environment and the concept of sustainability.',
    content: `
# Environment and Sustainable Development

### 1. Functions of Environment
- Supplies resources (Renewable and Non-renewable).
- Assimilates waste.
- Sustains life (Biodiversity).
- Provides aesthetic services.

### 2. Environmental Challenges
- **Absorptive Capacity:** Ability to handle waste. Crisis occurs when waste > absorptive capacity.
- **Global Warming:** Temperature Rise.
- **Ozone Depletion:** CFCs impact.
- **India Specific:** Land degradation. India supports ~17% of world population on ~2.4% world land.

### 3. Sustainable Development
Meeting present needs without compromising future generations.

### 4. Strategies
- Use of Solar/Wind energy.
- Traditional knowledge.
- Biocomposting and Biopest control.
- Biogas usage in rural areas.
    `,
    visualizations: [
      {
        id: 'u7-v4',
        title: 'SDG Strategies',
        type: 'list',
        data: ['Solar Power', 'Wind Energy', 'CNG usage', 'Organic Farming', 'Biocomposting']
      }
    ]
  }
];
