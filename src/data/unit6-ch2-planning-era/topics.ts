import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-ch2-goals',
        title: '2.1 The Goals of Five Year Plans',
        description: 'The four pillars of independent India\'s development strategy.',
        content: [
            {
                type: 'concept',
                title: 'The GMSE Framework',
                text: 'India’s five-year plans had four core objectives, established by the Planning Commission (1950-2015) under the leadership of P.C. Mahalanobis. In 2015, the Commission was replaced by NITI Aayog.',
                points: [
                    '**Growth:** Increasing GDP. The **First Five Year Plan (1951-56)** focused on agriculture, while the **Second Five Year Plan (1956-61)** shifted to heavy industry.',
                    '**Modernisation:** Adoption of new technology and changing social outlook (e.g. gender equality).',
                    '**Self-reliance:** Reducing dependence on imports. Assisted by the **Foreign Exchange Regulation Act (FERA)** to conserve reserves.',
                    '**Equity:** Ensuring benefits reach the poor. A goal of the **"Socialist Pattern of Society"**.'
                ],
                tags: ['STRATEGY']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-goals-summary',
                title: 'The Four Pillars of Planning',
                type: 'table',
                data: {
                    headers: ['Goal', 'Key Metric', 'Policy Tool'],
                    rows: [
                        ['Growth', 'GDP / National Income', 'Industrialization'],
                        ['Modernisation', 'Technology / Social Indices', 'Education / Tech Imports'],
                        ['Self-reliance', 'Import dependency', 'Import Substitution'],
                        ['Equity', 'Poverty / Wealth Gini', 'Land Reforms / SSI reservation']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch2-agri',
        title: '2.2 Agricultural Reforms & Green Revolution',
        description: 'Transforming a stagnant sector into a self-sufficient one.',
        content: [
            {
                type: 'concept',
                title: 'Institutional Reforms (Land)',
                text: 'The government aimed to remove the colonial legacy of exploitation through land reforms.',
                points: [
                    '**Abolition of Intermediaries:** Zamindari was abolished, benefiting ~20 million tenants.',
                    '**Land Ceiling:** Fixing the maximum land ownership. However, landlords used **"Benami Holdings"** (registering land in others\' names) to evade this.',
                    '**Tenancy Reforms:** To stop evictions and fix fair rents.'
                ],
                tags: ['LAND_REFORMS']
            },
            {
                type: 'concept',
                title: 'Technical Reforms (Green Revolution)',
                text: 'In the mid-1960s, India introduced the "New Agricultural Strategy" (Green Revolution) to achieve food self-sufficiency.',
                points: [
                    '**HYV Seeds:** Miracle seeds (Wheat/Rice) that dramatically increased yield.',
                    '**The Package:** Usage of fertilizers, pesticides, and assured irrigation.',
                    '**Marketed Surplus:** Output beyond self-consumption, sold to build national buffer stocks.'
                ],
                tags: ['GREEN_REVOLUTION']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-gr-impact',
                title: 'Green Revolution: Input-Output Logic',
                type: 'process',
                data: [
                    { title: 'The Package', description: 'HYV Seeds + Water + Fertilizers' },
                    { title: 'Result 1', description: 'Immediate spike in output per hectare' },
                    { title: 'Result 2', description: 'Self-sufficiency & Buffer Stocks (FCI)' },
                    { title: 'Side-Effect', description: 'Regional Inequality + Ecological costs' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch2-industry',
        title: '2.3 Industrial Policy & Trade',
        description: 'State-led industrialization and the License Raj.',
        content: [
            {
                type: 'concept',
                title: 'IPR 1956: The Industrial Base',
                text: 'The Industrial Policy Resolution 1956 classified industries to ensure government control over "commanding heights".',
                points: [
                    '**Schedule A:** 17 industries exclusively owned by the State (e.g. Arms, Atomic energy, Railways).',
                    '**Schedule B:** 12 industries where state leads and private supplements.',
                    '**Schedule C:** Remaining industries left for the private sector, governed by Licensing.',
                    '**SSI Protection:** Based on the Karve Committee (1955) report.'
                ],
                tags: ['IPR_1956']
            },
            {
                type: 'warning',
                title: 'Import Substitution (Inward Strategy)',
                text: 'India protected its "infant industries" from foreign competition using:',
                points: [
                    '**Tariffs:** High taxes on imports.',
                    '**Quotas:** Physical limits on import volume.'
                ],
                tags: ['TRADE_POLICY']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-ssi-logic',
                title: 'SSI: The Employment Engine',
                type: 'tree',
                data: {
                    root: 'Small Scale Industry',
                    children: [
                        { name: 'Labour Intensive (More Jobs)' },
                        { name: 'Regional Equality (Rural Units)' },
                        { name: 'Reservation (Protection from Big Firms)' }
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch2-expert',
        title: '🎓 Expert Teacher Analysis: The Planning Paradox',
        description: 'Critical assessment for high-order thinking questions.',
        content: [
            {
                type: 'concept',
                title: 'The Success Story',
                text: 'Independent India built a massive industrial base from scratch. We achieved food security and created a world-class public sector (Maharatnas).',
                tags: ['PROS']
            },
            {
                type: 'tip',
                title: 'The Failure Point: License Raj',
                text: 'The excessive "red tape" (licensing) meant that businessmen spent more time lobbying in Delhi than improving their products. This led to "Rent-seeking" and technological stagnation.',
                tags: ['CONS']
            },
            {
                type: 'list',
                title: 'Examiner Focus: Strategic Milestones',
                points: [
                    '**Karve Committee (1955):** Recommended promoting SSI to solve rural poverty.',
                    '**Plan Holiday (1966-69):** A break from 5-year plans due to war and drought.',
                    '**William Gaud:** Coined the term "Green Revolution".',
                    '**Command Economy:** An economy where production/distribution is state-controlled (India\'s pre-1991 model).'
                ],
                tags: ['KEY_FACTOR']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-pre-1991-summary',
                title: 'Pre-1991 Indian Economy Summary',
                type: 'table',
                data: {
                    headers: ['Segment', 'Policy', 'Outcome'],
                    rows: [
                        ['Agriculture', 'Green Revolution', 'Self-sufficiency / Grain Surplus'],
                        ['Industry', 'IPR 1956 / SSI', 'Diversified Base / Heavy Capital Goods'],
                        ['Trade', 'Import Substitution', 'Foreign Exchange Conservation / Weak Tech'],
                        ['Regulatory', 'License Raj', 'Corruption / Low Efficiency']
                    ]
                }
            }
        ]
    }
];
