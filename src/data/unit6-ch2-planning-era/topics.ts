import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-ch2-systems',
        title: '2.1 Types of Economic Systems',
        description: 'Addressing the 3 central problems of an economy.',
        content: [
            {
                type: 'concept',
                title: 'The Three Basic Questions',
                text: 'Every society has to answer three questions to decide its economic system:',
                points: [
                    '**What** to produce? (Choice of goods and services)',
                    '**How** to produce? (Labour-intensive vs. Capital-intensive)',
                    '**For whom** to produce? (Distribution based on ability to pay vs. need)'
                ],
                tags: ['FUNDAMENTALS']
            },
            {
                type: 'concept',
                title: 'Market vs. Command vs. Mixed',
                text: 'In a **Market Economy** (Capitalism), only those goods are produced that can be sold profitably. In a **Socialist Economy**, the government decides production based on social needs. India opted for a **Mixed Economy**.',
                tags: ['SYSTEMS']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-systems-table',
                title: 'Comparative Systems Guide',
                type: 'table',
                data: {
                    headers: ['Feature', 'Capitalism', 'Socialism'],
                    rows: [
                        ['Ownership', 'Private Persons', 'Government'],
                        ['Objective', 'Profit Maximization', 'Social Welfare'],
                        ['Distribution', 'Purchasing Power', 'According to Need']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch2-choice',
        title: '2.2 The Indian Choice: Mixed Economy',
        description: 'Rationale for the "Socialist Pattern of Society".',
        content: [
            {
                type: 'context',
                title: 'Nehru\'s Vision',
                text: 'Jawaharlal Nehru and other leaders were attracted to the Soviet model but favoured a system that didn\'t involve state ownership of all property. They wanted a system where the government would plan for the economy but the private sector would also play a role.',
                tags: ['VISION']
            },
            {
                type: 'concept',
                title: 'The Industrial Policy Resolution 1948',
                text: 'It reflected the goal of a **Socialist Pattern of Society**, where the government would control the "commanding heights" of the economy – the industries essential for development.',
                tags: ['POLICY']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch2-planning-concept',
        title: '2.3 What is a Plan?',
        description: 'Perspective vs. Five-Year Plans.',
        content: [
            {
                type: 'concept',
                title: 'The Planning Commission',
                text: 'Set up in **1950** with the Prime Minister as Chairperson. Its job was to formulate five-year plans to ensure efficient resource allocation.',
                tags: ['COMMISSION']
            },
            {
                type: 'concept',
                title: 'Types of Plans',
                points: [
                    '**Five-Year Plans:** Short-term documents specifying objectives for a 5-year period.',
                    '**Perspective Plans:** A long-term vision document (spanning 20 years) that provides the framework for individual five-year plans.'
                ],
                tags: ['STRUCTURE']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch2-goals',
        title: '2.4 General Goals of Five Year Plans',
        description: 'The GMSE Framework for shared prosperity.',
        content: [
            {
                type: 'concept',
                title: 'Growth & Structural Change',
                text: 'Growth refers to the increase in **GDP**. A larger GDP means a larger "cake" (total output) for the people to share. It is often accompanied by **Structural Change** – a shift from agriculture to industry and services.',
                tags: ['GROWTH']
            },
            {
                type: 'concept',
                title: 'Modernisation & Social Change',
                text: 'Adoption of new technology is **Modernisation**, but it also includes social changes like the recognition that women should have the same rights as men.',
                tags: ['MODERNISATION']
            },
            {
                type: 'concept',
                title: 'Self-Reliance & Equity',
                points: [
                    '**Self-reliance:** Avoiding imports of goods that could be produced domestically to reduce foreign interference.',
                    '**Equity:** Ensuring that the benefits of economic prosperity reach even the poorest sections. Without equity, growth is meaningless.'
                ],
                tags: ['EQUITY']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch2-land-reforms',
        title: '2.5 Land Reforms: Institutional Change',
        description: 'Abolishing intermediaries and empowering tillers.',
        content: [
            {
                type: 'concept',
                title: 'Abolition of Intermediaries',
                text: 'The Zamindari system was abolished to bring about **200 lakh tenants** into direct contact with the government. Ownership gave them incentives to increase productivity.',
                tags: ['EQUITY']
            },
            {
                type: 'context',
                title: 'The Success of Kerala and West Bengal',
                text: 'Land reforms were most successful in these states because the governments were committed to the policy of "land to the tiller".'
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch2-land-ceiling',
        title: '2.6 Land Ceiling: Reducing Inequality',
        description: 'Fixing ownership limits and legal hurdles.',
        content: [
            {
                type: 'concept',
                title: 'Definition and Rationale',
                text: 'Land Ceiling means fixing the maximum size of land which could be owned by an individual. The purpose was to reduce the concentration of land ownership.',
                tags: ['REFORM']
            },
            {
                type: 'warning',
                title: 'The "Benami" Loophole',
                text: 'Many big landlords registered their lands in the name of close relatives or servants to escape the ceiling. In some states, landlords challenged the law in courts, delaying implementation until they could "manage" their holdings.',
                tags: ['HURDLES']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch2-green-rev',
        title: '2.7 The Green Revolution: Technical Change',
        description: 'HYV seeds and food self-sufficiency.',
        content: [
            {
                type: 'concept',
                title: 'The HYV Miracle',
                text: 'High Yielding Variety (HYV) seeds required reliable irrigation and fertilisers. Two phases:',
                points: [
                    '**First Phase (Mid-60s to Mid-70s):** Restricted to wheat-rich states like Punjab and Haryana.',
                    '**Second Phase (Mid-70s to Mid-80s):** Spread to more crops and regions.'
                ],
                tags: ['TECHNOLOGY']
            },
            {
                type: 'concept',
                title: 'Marketed Surplus & Buffer Stocks',
                text: '**Marketed Surplus** is the portion of agricultural produce sold by farmers in the market after their own consumption. This allowed the government to build **Buffer Stocks** using the FCI.',
                tags: ['SECURITY']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch2-ipr1956',
        title: '2.8 Industrial Policy Resolution (IPR) 1956',
        description: 'The blueprint for the Second Five Year Plan.',
        content: [
            {
                type: 'concept',
                title: 'The Mahalanobis Model',
                text: 'PRASANTA CHANDRA MAHALANOBIS is known as the architect of Indian planning. IPR 1956 formed the basis of the **Second Plan**, aiming for a socialist pattern of society.',
                tags: ['ARCHITECTURE']
            },
            {
                type: 'concept',
                title: 'The Three Schedules',
                points: [
                    '**Schedule A:** 17 industries exclusively owned by the government.',
                    '**Schedule B:** 12 industries where the state would take the lead, supplemented by the private sector.',
                    '**Schedule C:** Remaining industries left to the private sector but regulated by **Licensing**.'
                ],
                tags: ['IPR_1956']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-ipr-summary',
                title: 'Industrial Licensing System',
                type: 'grid',
                data: [
                    { label: 'Start-up', desc: 'License needed to set up any new factory.' },
                    { label: 'Expansion', desc: 'Permission required to increase production capacity.' },
                    { label: 'Diversification', desc: 'Government approval for producing new goods.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch2-ssi',
        title: '2.9 Small-Scale Industries (SSI)',
        description: 'The Karve Committee and employment generation.',
        content: [
            {
                type: 'concept',
                title: 'The Karve Committee (1955)',
                text: 'Also known as the Village and Small-Scale Industries Committee. It noted that small-scale industries are more **labour-intensive** and thus create more employment.',
                tags: ['EMPLOYMENT']
            },
            {
                type: 'concept',
                title: 'Protection of SSI',
                text: 'The government "reserved" certain products for the small-scale sector. They also received concessions like lower excise duty and bank loans at lower interest rates.',
                tags: ['PROTECTION']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch2-trade-policy',
        title: '2.10 Trade Policy & Critical Appraisal',
        description: 'Inward-looking strategy and the License Raj.',
        content: [
            {
                type: 'concept',
                title: 'Import Substitution',
                text: 'India adopted an "Inward Looking Trade Strategy". Protection from foreign competition was provided via **Tariffs** (taxes) and **Quotas** (limits).',
                tags: ['PROTECTIONISM']
            },
            {
                type: 'tip',
                title: 'Critical Appraisal (1950-1990)',
                points: [
                    '**Achievements:** Industrial diversification and food self-sufficiency.',
                    '**Failures:** "License Raj" created corruption; loss-making PSUs continued due to political pressure; lack of competition led to poor quality (outdated cars).'
                ],
                tags: ['EVALUATION']
            }
        ],
        visualizations: []
    }
];

