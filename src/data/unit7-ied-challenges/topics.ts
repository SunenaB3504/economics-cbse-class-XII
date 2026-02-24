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
      },
      {
        id: 'u7-v1-t1',
        title: 'Table 4.1: Govt. Expenditure on Education (1952 vs 2014)',
        type: 'table',
        data: {
          headers: ['Metric', '1952-53', '2014-15'],
          rows: [
            ['As % of Total Govt Expenditure', '7.92%', '15.7%'],
            ['As % of GDP', '0.64%', '4.13%']
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
      },
      {
        id: 'u7-v2-c1',
        title: 'Chart 5.1: Distribution of Poultry & Livestock',
        type: 'table',
        data: {
          headers: ['Category', 'Share (Approx %)'],
          rows: [
            ['Poultry', '61%'],
            ['Cattle & Buffaloes', '22%'],
            ['Sheep & Goats', '16%'],
            ['Pigs & Others', '1%']
          ]
        }
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
  },
  {
    id: 'u7-t5',
    title: 'Sources of Human Capital and Education Sector in India',
    description: 'Detailed analysis of education, health, and on-the-job training as sources of human capital.',
    content: `
# Sources of Human Capital and Education Sector

### 1. Sources of Human Capital Formation
- **Expenditure on Education:** The most significant source as education raises the standard of living, earns higher income, and stimulates innovations.
- **Expenditure on Health:** Includes preventive medicine (vaccines), curative medicine (medical intervention), social medicine (health literacy), and provision of clean drinking water and sanitation.
- **On-the-job Training:** Firms spend on workers' training either on the campus or off the campus. It is a source of human capital formation as the return on such expenditure in the form of enhanced labor productivity is more than the cost of it.
- **Migration:** People migrate in search of jobs that fetch them higher salaries. Though it involves cost of transport and living, the enhanced earnings far outweigh the costs.
- **Expenditure on Information:** Information relating to the labor market and other markets enables people to make better decisions regarding their productive potential.

### 2. State of the Education Sector in India
- **Growth in Govt. Expenditure:** Expressed both as a percentage of total government expenditure and as a percentage of GDP, it has increased over the decades but remains inadequate compared to the recommended 6% of GDP.
- **Disparities:** Significant differences exist between states (e.g., Himachal Pradesh vs Bihar) in per capita education expenditure.
- **Future Prospects:**
  - Need for education for all, still a distant dream.
  - Gender equity is improving but female literacy is still lower, necessitating special focus on women's education.
  - Higher education has limited takers, leading to a shortage of skilled professionals globally.
    `,
    visualizations: []
  },
  {
    id: 'u7-t6',
    title: 'Credit and Marketing in Rural Areas',
    description: 'In-depth look into rural banking and the agricultural market system.',
    content: `
# Credit and Marketing in Rural Areas

### 1. Rural Banking - A Critical Appraisal
Rapid expansion of the banking system had a positive effect on rural farm and non-farm output, income, and employment.
- **Issues:** Except commercial banks, other formal institutions failed to develop a culture of deposit mobilization. Default rates have been chronically high.
- **Reforms Needed:** Banks need to change their approach from just being lenders to building relationships with borrowers.

### 2. Agricultural Market System
Agricultural marketing is a process that involves assembling, storage, processing, transportation, packaging, grading, and distribution of agricultural commodities.
- **Obstacles:** Farmers suffered from faulty weighing, manipulation of accounts, and lacked proper storage facilities (leading to distress sale).
- **Government Intervention:**
  - **Regulated Markets:** Created to establish orderly, transparent, and regulated conditions for trade.
  - **Infrastructure:** Provision of physical infrastructure facilities like roads, railways, warehouses, godowns, and cold storages.
  - **Cooperative Marketing:** E.g., The success of milk cooperatives in Gujarat (Amul).
  - **Policy Instruments:** 
    - Minimum Support Price (MSP)
    - Maintenance of buffer stocks of wheat and rice by Food Corporation of India (FCI)
    - Public Distribution System (PDS)
    `,
    visualizations: []
  },
  {
    id: 'u7-t7',
    title: 'Employment: Sectoral Breakdown and Government Initiatives',
    description: 'Sectoral participation rates and state policies to generate employment.',
    content: `
# Employment: Details and Initiatives

### 1. Sectoral Participation of the Workforce
The occupational structure signifies the distribution of the workforce across different sectors (Primary, Secondary, Tertiary):
- **Primary Sector (Agriculture):** Still the main source of employment, absorbing most of the rural workforce in India.
- **Secondary Sector (Manufacturing & Construction):** Provides employment to around a quarter of the workforce.
- **Tertiary Sector (Services):** Has taken a leading role in absorbing the growing workforce, especially in urban areas.
*Self-employment is a major source of livelihood for both men and women, but casual wage work has emerged as the second major source.*

### 2. Government and Employment Generation
The Union and State governments play a direct and indirect role in generating employment:
- **Direct Employment:** Government employs people in various departments for administrative purposes or runs its own industries/hotels/transport companies.
- **Indirect Employment:** When output of government enterprises increases, private enterprises supplying materials to them also increase output and employment.
- **Poverty Alleviation Programmes:** Many programs focus on employment generation. For instance, the **Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) 2005**, which guarantees 100 days of wage employment to every rural household whose adult members volunteer to do unskilled manual work.
    `,
    visualizations: [
      {
        id: 'u7-v7-t1',
        title: 'Table 6.1/6.2: Workforce Distribution by Region & Gender (Approx %)',
        type: 'table',
        data: {
          headers: ['Sector', 'Rural Male', 'Rural Female', 'Urban Male', 'Urban Female'],
          rows: [
            ['Primary (Agri)', '60%', '75%', '6%', '10%'],
            ['Secondary (Ind)', '20%', '13%', '34%', '30%'],
            ['Tertiary (Serv)', '20%', '12%', '60%', '60%']
          ]
        }
      }
    ]
  },
  {
    id: 'u7-t8',
    title: "State of India's Environment",
    description: 'Specific environmental challenges and land degradation issues in India.',
    content: `
# State of India's Environment

India has abundant natural resources (rich soil quality, hundreds of rivers, lush forests, mineral deposits). However, developmental activities have resulted in pressure on its finite natural resources.

### 1. Major Environmental Concerns in India
- **Land Degradation:** Key factors include soil erosion (due to wind and water), deforestation, overgrazing, shifting cultivation, mismanagement of forest resources, extraction of groundwater, and non-adoption of adequate soil conservation measures.
- **Biodiversity Loss:** Due to habitat destruction.
- **Air Pollution:** Especially severe in urban areas due to vehicular emissions and industrial smoke (e.g., problems managed by Central Pollution Control Board).
- **Management of Fresh Water:** Depletion of groundwater tables due to over-extraction.
- **Solid Waste Management:** Growing urbanisation has led to severe waste disposal challenges.

### 2. The Dichotomy of India's Environment Problem
Poverty induces environmental degradation (e.g., cutting trees for firewood), while at the same time, affluent lifestyles and high rapid industrialisation cause pollution and resource depletion. Both ends of the economic spectrum contribute to the strain on the environment.
    `,
    visualizations: []
  }
];
