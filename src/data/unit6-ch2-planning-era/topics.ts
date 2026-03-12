import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-ch2-intro',
        title: '2.0 Introduction: Choice of Economic Systems',
        description: 'Why India chose the Mixed Economy model post-independence.',
        content: [
            {
                type: 'concept',
                title: 'Types of Economic Systems',
                text: 'Every nation must answer three basic questions: What to produce? How to produce? and For whom to produce? The answers define the economic system:',
                points: [
                    '**Capitalist Economy:** Market forces of supply and demand decide production. Goods are distributed based on purchasing power (Who can buy?), not need. Examples: USA.',
                    '**Socialist Economy:** The government decides production based on the needs of society. Distribution is based on what people need. Examples: Former Soviet Union.',
                    '**Mixed Economy:** A middle path where both the public and private sectors coexist. The government provides essential goods and services while the market handles the rest.'
                ],
                tags: ['FUNDAMENTALS']
            },
            {
                type: 'context',
                title: 'The Indian Choice',
                text: 'Jawaharlal Nehru and many other leaders were attracted to socialism but didn\'t want the total state control seen in the USSR. India opted for a **"Socialist Pattern of Society"** within a Mixed Economy framework, where the public sector would control the "commanding heights" of the economy.'
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-eco-systems',
                title: 'Comparison of Economic Systems',
                type: 'table',
                data: {
                    headers: ['Feature', 'Capitalism', 'Socialism', 'Mixed'],
                    rows: [
                        ['Ownership', 'Private', 'State/Public', 'Both'],
                        ['Driving Force', 'Profit Motive', 'Social Welfare', 'Both'],
                        ['Price Mechanism', 'Market Prices', 'Administered Prices', 'Guided Market'],
                        ['Resource Allocation', 'Market', 'Central Planning', 'Dual focus']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch2-goals',
        title: '2.1 The Goals of Five Year Plans',
        description: 'The four fundamental objectives of Indian planning (1950–1990).',
        content: [
            {
                type: 'concept',
                title: 'The GMSE Framework',
                text: 'The Planning Commission (headed by the PM) formulated five-year plans to achieve four long-term goals:',
                points: [
                    '**Growth:** Increase in the capacity to produce (GDP). Real GDP is a good indicator of economic growth.',
                    '**Modernisation:** Adoption of new technology (Technical) and changes in social outlook like gender equality (Social).',
                    '**Self-reliance:** Avoiding imports of goods that could be produced domestically to reduce foreign dependence and interference.',
                    '**Equity:** Ensuring the benefits of growth reach the poor. Without equity, growth and modernisation are meaningless for the masses.'
                ],
                tags: ['STRATEGY']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-goals-summary',
                title: 'Objectives of Planning: In-depth',
                type: 'grid',
                data: [
                    { label: 'Growth', desc: 'Larger GDP to provide more goods and services.' },
                    { label: 'Modernisation', desc: 'Not just new machines, but new mindsets (Equality).' },
                    { label: 'Self-reliance', desc: 'First seven plans emphasized non-dependence on foreign aid.' },
                    { label: 'Equity', desc: 'Reducing the gap between rich and poor.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch2-agri',
        title: '2.2 Agricultural Reforms',
        description: 'Institutional and technical changes to solve food scarcity.',
        content: [
            {
                type: 'concept',
                title: 'Institutional Reforms (Land Reforms)',
                text: 'Aimed at equity and increasing productivity by changing the ownership structure.',
                points: [
                    '**Abolition of Intermediaries:** Zamindari was abolished, bringing 200 lakh tenants into direct contact with the government.',
                    '**Land Ceiling:** Fixing the maximum size of land one could own. Surplus land was redistributed to landless laborers.',
                    '**Loopholes:** Landlords used "Benami Holdings" (registering land in the names of relatives/servants) to evade the law.',
                    '**Success Stories:** Highly successful in **Kerala** and **West Bengal** due to strong political will.'
                ],
                tags: ['LAND_REFORMS']
            },
            {
                type: 'concept',
                title: 'The Green Revolution (Technical Reforms)',
                text: 'The introduction of HYV (High Yielding Variety) seeds transformed India from a food-deficient to a food-surplus nation.',
                points: [
                    '**Phase 1 (Mid-60s to Mid-70s):** Restricted to wheat-growing regions like Punjab, Haryana, and Western UP.',
                    '**Phase 2 (Mid-70s to Mid-80s):** Spread to a larger number of states and a variety of crops (Rice, etc.).',
                    '**Marketed Surplus:** The portion of agricultural produce sold in the market after meeting self-consumption. It allowed the government to build **Buffer Stocks** for food security.'
                ],
                tags: ['GREEN_REVOLUTION']
            },
            {
                type: 'warning',
                title: 'The Subsidy Debate',
                text: 'Economists are divided on agricultural subsidies. Proponents say they are essential for poor farmers to adopt new technology. Critics argue they benefit big farmers more and huge subsidies put a burden on the government treasury.'
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-gr-logic',
                title: 'Stages of the Green Revolution',
                type: 'steps',
                data: [
                    'Import of HYV Seeds (Wheat/Rice)',
                    'Application of Chemical Fertilizers & Pesticides',
                    'Expansion of Assured Irrigation Facilities',
                    'Achievement of Self-sufficiency & Marketed Surplus',
                    'Creation of National Buffer Stocks by FCI'
                ]
            }
        ]
    },
    {
        id: 'u6-ch2-industry',
        title: '2.3 Industrial Policy & Trade (1950–1990)',
        description: 'State-led growth, protectionism, and the Karve Committee.',
        content: [
            {
                type: 'concept',
                title: 'Industrial Policy Resolution (IPR) 1956',
                text: 'This resolution formed the basis of the Second Five Year Plan and categorized industries into three schedules:',
                points: [
                    '**Schedule A:** 17 industries exclusively owned by the state (Railways, Atomic Energy, etc.).',
                    '**Schedule B:** 12 industries where the state would lead and the private sector could supplement.',
                    '**Schedule C:** All remaining industries, which were left to the private sector but governed by a system of **Licensing**.'
                ],
                tags: ['IPR_1956']
            },
            {
                type: 'concept',
                title: 'Small-Scale Industries (SSI)',
                text: 'In 1955, the **Karve Committee** (Village and Small-Scale Industries Committee) recognized the potential of small industries for rural development.',
                points: [
                    '**Labour Intensive:** They use more labour than large-scale industries and create more jobs.',
                    '**Protection:** Products were "Reserved" for SSI, and they received incentives like tax benefits and lower interest rates.'
                ],
                tags: ['SSI']
            },
            {
                type: 'warning',
                title: 'Trade Policy: Import Substitution',
                text: 'India adopted an "Inward Looking Trade Strategy" to protect infant industries from foreign competition.',
                points: [
                    '**Tariffs:** High taxes on imported goods to make them expensive.',
                    '**Quotas:** Physical limits on the quantity of goods that can be imported.'
                ],
                tags: ['TRADE']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-industry-schedules',
                title: 'Classification of Industries (IPR 1956)',
                type: 'table',
                data: {
                    headers: ['Schedule', 'Count', 'Ownership / Control'],
                    rows: [
                        ['Schedule A', '17 Industries', 'Exclusive State Monopoly'],
                        ['Schedule B', '12 Industries', 'State-led, Private Supplement'],
                        ['Schedule C', 'Remainder', 'Private Sector + Compulsory Licensing']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch2-evaluation',
        title: '2.4 Critical Evaluation (1950-1990)',
        description: 'Analyzing the achievements and failures of the planning era.',
        content: [
            {
                type: 'concept',
                title: 'The Successes',
                text: 'India achieved a diverse industrial base and became self-sufficient in food.',
                points: [
                    'Industrial share of GDP increased from 11.8% to 24.6%.',
                    'Public sector provided infrastructure where private sector couldn\'t.',
                    'Green Revolution eliminated the threat of famines.'
                ],
                tags: ['ACHIEVEMENTS']
            },
            {
                type: 'tip',
                title: 'The Failures & Bottlenecks',
                text: 'The excessive regulation led to "License Raj" and inefficiencies.',
                points: [
                    '**Inefficient PSUs:** Public sector units continued to run despite huge losses (Soft Budget Constraints).',
                    '**License Raj:** Misused by big industrialists to prevent new competitors from entering.',
                    '**Poor Quality:** Lack of competition meant consumers had to buy low-quality domestic goods (e.g., outdated cars).'
                ],
                tags: ['LIMITATIONS']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-planning-legacy',
                title: 'Historical Legacy (1950-1990)',
                type: 'table',
                data: {
                    headers: ['Component', 'Positive Outcome', 'Negative Outcome'],
                    rows: [
                        ['Agriculture', 'Self-sufficiency', 'Subsidy burden'],
                        ['Industry', 'Diversified base', 'Inefficient PSUs'],
                        ['Trade', 'Conserved Forex', 'Lack of Global Competition'],
                        ['Regulatory', 'Prevention of Monopoly', 'Corruption / Red Tape']
                    ]
                }
            }
        ]
    }
];
