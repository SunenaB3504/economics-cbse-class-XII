import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u7-t1',
    title: 'Human Capital Formation in India',
    description: 'The process of developing human resources through education, health, and training.',
    content: [
      {
        type: 'concept',
        title: 'What is Human Capital?',
        text: 'Human Capital refers to the stock of skills, expertise, education, and knowledge embodied in the people of a nation. It is a key driver of economic growth.',
        points: [
          '**Productive Asset**: Just as a machine increases production, a skilled human increases the "productive capacity" of an economy.',
          '**Return on Investment**: Spending on education and health pays off in the form of higher future incomes.'
        ],
        tags: ['DEFINITION']
      },
      {
        type: 'concept',
        title: 'Five Sources of Human Capital',
        text: 'Human capital is built through strategic investments in several key areas:',
        subPoints: [
          { label: 'Education', text: 'The most significant source. Raises standard of living, stimulates innovations, and enables adoption of new tech.' },
          { label: 'Health', text: 'Includes preventive (vaccines), curative (treatment), and social medicine (health literacy). A healthy worker saves on medical costs and is more productive.' },
          { label: 'On-the-job Training', text: 'Workers learn while earning. The return (enhanced productivity) far outweighs the cost borne by the firm.' },
          { label: 'Migration', text: 'People move in search of better salaries. The "human capital gain" happens when earnings > transport/living costs.' },
          { label: 'Information', text: 'Spending on labor market data helps people make informed decisions about their productive potential.' }
        ],
        tags: ['SOURCES']
      },
      {
        type: 'comparison',
        title: 'Human Capital vs. Human Development',
        text: 'While often used interchangeably, they represent two different philosophical approaches.',
        headers: ['Feature', 'Human Capital', 'Human Development'],
        rows: [
          ['View of Education/Health', 'Means to an end (Productivity)', 'End in itself (Well-being/Right)'],
          ['Core Focus', 'Economic Growth', 'Human Rights & Welfare'],
          ['Investment Goal', 'Increasing GDP', 'Increasing human choices/freedoms']
        ],
        tags: ['DISTINCTION']
      },
      {
        type: 'warning',
        title: 'Why State Intervention is Mandatory',
        text: 'The government must regulate and fund education/health because these markets are not perfect.',
        points: [
          '**Long-term Impact**: Mistakes in your school years cannot be easily fixed when you are 40.',
          '**Information Asymmetry**: Patients/Students might be exploited by private providers due to lack of knowledge.',
          '**Positive Externalities**: An educated population benefits everyone, not just the individual.'
        ],
        tags: ['REGULATION']
      },
      {
        type: 'tip',
        title: 'India\'s Education Milestones',
        text: 'Historically, India has been a leader in knowledge, but modern targets remain a challenge.',
        subPoints: [
          { label: '1966 Target', text: 'Kothari Commission recommended spending 6% of GDP on education.' },
          { label: 'Actual Status', text: 'India currently spends around 4-4.5% of GDP — still below the target.' },
          { label: 'NEP 2020', text: 'Introduction of the 5+3+3+4 structure to modernize the learning experience.' }
        ],
        tags: ['MILESTONES']
      }
    ],
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
    content: [
      {
        type: 'concept',
        title: 'What is Rural Development?',
        text: 'A comprehensive process focusing on the social and economic improvement of rural lives. It is more than just agricultural growth.',
        points: [
          '**Infrastructure**: Electrification, roads, and irrigation.',
          '**Social Justice**: Land reforms and equity for the marginalized.',
          '**Human Capital**: Education and health in villages.'
        ],
        tags: ['OVERVIEW']
      },
      {
        type: 'concept',
        title: 'The Rural Credit Chain',
        text: 'Credit is the lifeline of rural growth. India moved from moneylender dependence to institutional credit.',
        subPoints: [
          { label: 'NABARD (1982)', text: 'The apex body that coordinates all rural credit institutions.' },
          { label: 'Institutional Sources', text: 'Commercial Banks, Regional Rural Banks (RRBs), and Cooperatives.' },
          { label: 'Self-Help Groups (SHGs)', text: 'Focus on micro-credit for women, building a culture of saving.' }
        ],
        tags: ['CREDIT']
      },
      {
        type: 'warning',
        title: 'Obstacles in Marketing',
        text: 'Farmers often lose out due to poor infrastructure and market manipulation.',
        points: [
          '**Distress Sale**: Selling at low prices due to lack of storage.',
          '**Middlemen**: Taking a large share of the consumer\'s rupee.',
          '**Faulty Weighing**: Lack of transparent standards in local markets.'
        ],
        tags: ['BOTTLENECKS']
      },
      {
        type: 'tip',
        title: 'The Success of Amul',
        text: 'The **Milk Cooperative movement** in Gujarat transformed India into the world\'s largest milk producer through collective bargaining power.',
        tags: ['COOPERATIVES']
      },
      {
        type: 'concept',
        title: 'Organic Farming',
        text: 'A sustainable alternative to chemical-intensive farming that restores soil health and commands premium global prices.',
        tags: ['SUSTAINABILITY']
      }
    ],
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
    content: [
      {
        type: 'concept',
        title: 'Labour Force vs. Workforce',
        text: 'Understanding who is actually available and working in the economy.',
        points: [
          '**Labour Force**: People working + People seeking/available for work.',
          '**Workforce**: The actual number of people currently employed.',
          '**Unemployed**: Labour Force minus Workforce.'
        ],
        tags: ['BASIC CONCEPTS']
      },
      {
        type: 'warning',
        title: 'The Informalisation Trend',
        text: 'Since the **1990s**, more workers have moved to the informal sector, which lacks security and social benefits.',
        points: [
          '**Insecurity**: No permanent contracts or social security.',
          '**Low Productivity**: Informal units often lack tech and capital.',
          '**Casualisation**: Large-scale hiring of daily-wage laborers who can be fired easily.'
        ],
        tags: ['CHALLENGES']
      },
      {
        type: 'concept',
        title: 'Types of Unemployment',
        text: 'India faces specific structural unemployment patterns:',
        subPoints: [
          { label: 'Disguised', text: 'Where more people work than needed; marginal productivity is zero (common in agriculture).' },
          { label: 'Seasonal', text: 'Work available only during harvest/sowing cycles.' },
          { label: 'Open', text: 'Willing and able workers who find no work at all.' }
        ],
        tags: ['TYPES']
      },
      {
        type: 'tip',
        title: 'MGNREGA 2005',
        text: 'A landmark act guaranteeing **100 days of unskilled wage employment** to rural households. It serves as a safety net during lean agricultural seasons.',
        tags: ['GOVT INITIATIVE']
      }
    ],
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
    content: [
      {
        type: 'concept',
        title: 'Functions of the Environment',
        text: 'The environment is not just a backdrop; it performs four vital economic functions.',
        subPoints: [
          { label: 'Resource Supply', text: 'Provides renewable (forests) and non-renewable (minerals) inputs.' },
          { label: 'Waste Assimilation', text: 'Absorbs the byproducts of production and consumption.' },
          { label: 'Life Sustenance', text: 'Provides the genetic and biological diversity needed for survival.' },
          { label: 'Aesthetic Services', text: 'The intrinsic beauty of nature (mountains, lakes).' }
        ],
        tags: ['FUNCTIONS']
      },
      {
        type: 'warning',
        title: 'The Absorptive Capacity Crisis',
        text: 'An environmental crisis occurs when the rate of waste generation exceeds the environment\'s ability to neutralize it.',
        points: [
          '**Global Warming**: The gradual rise in Earth\'s temperature due to GHGs.',
          '**Ozone Depletion**: The thinning of the protective ozone layer by CFCs.',
          '**Resource Depletion**: Using resources faster than they can regenerate.'
        ],
        tags: ['CRISIS']
      },
      {
        type: 'concept',
        title: 'Sustainable Development',
        text: 'Defined by the **Brundtland Commission (1987)** as "meeting present needs without compromising future generations."',
        points: [
          '**Equity**: Ensuring resources are shared fairly between the rich and the poor.',
          '**Conservation**: Avoiding the "environmental debt" for the next generation.'
        ],
        tags: ['SUSTAINABILITY']
      }
    ],
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
    title: 'State of the Education Sector in India',
    description: 'Detailed analysis of India\'s education spending, gender equity, and future challenges.',
    content: [
      {
        type: 'concept',
        title: 'Education Expenditure Trends',
        text: 'How much the government spends indicates its commitment to human capital formation.',
        points: [
          '**% of Govt Expenditure**: Shows the priority of education in the budget.',
          '**% of GDP**: Shows the scale compared to the whole economy (India is at ~4%).',
          '**Disparity**: Expenditure per capita varies greatly (e.g., high in HP/Delhi vs lower in Bihar).'
        ],
        tags: ['EXPENDITURE']
      },
      {
        type: 'tip',
        title: 'Critical Success: Female Literacy',
        text: 'Gender equity is improving, but the gap between male and female literacy still needs closing.',
        tags: ['EQUITY']
      },
      {
        type: 'warning',
        title: 'The Challenge of Higher Education',
        text: 'While primary schooling is expanding, higher education still has limited takers, leading to a "skilled talent shortage".',
        tags: ['CHALLENGES']
      }
    ],
    visualizations: []
  },
  {
    id: 'u7-t6',
    title: 'Agricultural Market System & Diversification',
    description: 'Government interventions in marketing and the push towards non-farm employment.',
    content: [
      {
        type: 'concept',
        title: 'Diversification Areas',
        text: 'To reduce risk and increase income, farmers must move beyond food grains.',
        subPoints: [
          { label: 'Livestock', text: 'White Revolution; provides a stable off-season income.' },
          { label: 'Fisheries', text: 'The Blue Revolution; India is the 3rd largest producer.' },
          { label: 'Horticulture', text: 'Golden Revolution; high-value fruits, veggies, and spices.' }
        ],
        tags: ['DIVERSIFICATION']
      },
      {
        type: 'warning',
        title: 'The Problem of Rural Debt',
        text: 'Despite the banking boom, high default rates and a lack of "deposit culture" remain systemic issues.',
        tags: ['BANKING']
      },
      {
        type: 'concept',
        title: 'Policy Instruments',
        text: 'The government uses various tools to stabilize agriculture markets:',
        points: [
          '**MSP**: Minimum Support Price as a safety net.',
          '**Buffer Stocks**: Managed by Food Corporation of India (FCI).',
          '**PDS**: Public Distribution System for food security.'
        ],
        tags: ['GOVT POLICY']
      }
    ],
    visualizations: []
  },
  {
    id: 'u7-t7',
    title: 'Workforce Structure & Sectoral Trends',
    description: 'Breakdown of employment across Primary, Secondary, and Tertiary sectors.',
    content: [
      {
        type: 'concept',
        title: 'Occupational Structure',
        text: 'The distribution of workers as India transforms from an agrarian to a service economy.',
        subPoints: [
          { label: 'Primary Sector', text: 'Still the largest employer, especially for the rural workforce.' },
          { label: 'Secondary Sector', text: 'Manufacturing and Construction; employs about 24% of the nation.' },
          { label: 'Tertiary Sector', text: 'Services; the fastest-growing sector in terms of output contribution.' }
        ],
        tags: ['SECTORS']
      },
      {
        type: 'concept',
        title: 'Govt Employment Generation',
        text: 'The government creates jobs through two routes:',
        points: [
          '**Direct**: Hiring in departments like Railways, Defence, and Administration.',
          '**Indirect**: Public spending on projects creates demand for private materials and labor (e.g., road construction).'
        ],
        tags: ['STRATEGY']
      }
    ],
    visualizations: [
      {
        id: 'u7-v7-t1',
        title: 'Table 6.1/6.2: Workforce Distribution (Approx %)',
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
    title: "India's Environmental Challenges",
    description: 'The dichotomy of poverty-induced vs. affluence-induced degradation.',
    content: [
      {
        type: 'warning',
        title: 'Primary Concerns in India',
        text: 'India faces a unique double burden: the environmental damage from poverty and from rapid industrial growth.',
        points: [
          '**Land Degradation**: Soil erosion and deforestation affect 147 million hectares.',
          '**Biodiversity Loss**: Habitat destruction threatens India\'s "mega-diverse" status.',
          '**Air Pollution**: Urban centers often exceed safe PM2.5 levels significantly.'
        ],
        tags: ['INDIA SPECIFIC']
      },
      {
        type: 'concept',
        title: 'Sustainable Strategies',
        text: 'Moving from "Exploitation" to "Stewardship" using modern and traditional tools.',
        subPoints: [
          { label: 'Renewable Energy', text: 'Shifting to Solar and Wind to reduce the carbon footprint.' },
          { label: 'Traditional Knowledge', text: 'Ancient water harvesting and biopest control methods.' },
          { label: 'Biogas & LPG', text: 'Reducing the "firewood burden" on forests and households.' },
          { label: 'Biocomposting', text: 'Recycling organic waste back into the soil.' }
        ],
        tags: ['SOLUTIONS']
      }
    ],
    visualizations: []
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
