import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-ch3-crisis',
        title: '3.1 The 1991 Economic Crisis',
        description: 'The triggers that forced India into the New Economic Policy.',
        content: [
            {
                type: 'concept',
                title: 'The Perfect Storm',
                text: 'By 1991, India’s economic situation had become unsustainable. The government was unable to make repayments on its borrowings from abroad.',
                points: [
                    '**Foreign Exchange Crisis:** Reserves fell to a level that was not sufficient even to pay for two weeks of imports.',
                    '**Fiscal Deficit:** Government expenditure rose much faster than revenue.',
                    '**Inflation:** Prices of essential goods were rising sharply (double digits).',
                    '**Gulf War (1990-91):** Spiked oil prices and reduced remittances.'
                ],
                tags: ['CRISIS']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-emergency-loan',
                title: 'The IMF Bailout Logic',
                type: 'flow',
                data: {
                    nodes: [
                        { id: 'crisis', label: '1991 Crisis (BoP/FD)' },
                        { id: 'loan', label: 'IMF/World Bank ($7 Billion)' },
                        { id: 'cond', label: 'Conditions (NEP 1991)' },
                        { id: 'lpg', label: 'LPG Framework' }
                    ],
                    edges: [
                        { from: 'crisis', to: 'loan', label: 'Applied for' },
                        { from: 'loan', to: 'cond', label: 'Granted with' },
                        { from: 'cond', to: 'lpg', label: 'Led to' }
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch3-liberalisation',
        title: '3.2 Liberalisation (The 1991 Focus)',
        description: 'Opening the economy by removing government controls.',
        content: [
            {
                type: 'concept',
                title: 'Industrial Sector Reforms',
                points: [
                    '**Abolition of Licensing:** Ended for almost all except alcohol, cigarettes, drugs, hazardous chemicals, electronics/aerospace, explosives.',
                    '**De-reservation:** Many goods reserved for SSI were opened to large firms.',
                    '**Price Deregulation:** Market forces allowed to determine prices of many goods.'
                ],
                tags: ['LIBERALISATION']
            },
            {
                type: 'concept',
                title: 'Financial & External Sector',
                points: [
                    '**RBI Role:** Shift from **Regulator** to **Facilitator** (Banks can decide rates).',
                    '**Rupee Devaluation:** Done to boost exports and attract forex.',
                    '**Trade Policy:** Removal of Quotas (QRs) and sharp reduction in Import Tariffs.'
                ],
                tags: ['REFORMS']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-lpg-pillars',
                title: 'LPG: The Three Pillars',
                type: 'grid',
                data: [
                    { label: 'Liberalisation', desc: 'Removal of the License Raj and trade barriers. Competitive markets.' },
                    { label: 'Privatisation', desc: 'Disinvestment of PSUs. Navratna/Maharatna autonomy.' },
                    { label: 'Globalisation', desc: 'Integrating with world trade (WTO). Outsourcing hub.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch3-globalisation',
        title: '3.3 Globalisation & WTO',
        description: 'Integrating India with the global marketplace.',
        content: [
            {
                type: 'concept',
                title: 'Outsourcing: India’s Global Edge',
                text: 'Because of low wage rates and availability of skilled English-speaking manpower, India became a major destination for Business Process Outsourcing (BPO).',
                tags: ['GLOBALISATION']
            },
            {
                type: 'concept',
                title: 'World Trade Organisation (WTO)',
                text: 'Successor to GATT, established in 1995. India is a founding member. WTO promotes free trade and non-discriminatory MFN (Most Favoured Nation) principles.',
                tags: ['WTO']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-outsourcing',
                title: 'Why India for Outsourcing?',
                type: 'tree',
                data: {
                    root: 'Outsourcing Determinants',
                    children: [
                        { name: 'Low Wage Rates' },
                        { name: 'Skilled English-Speaking Experts' },
                        { name: 'Favorable Time Zone' },
                        { name: 'Advanced Communication (IT)' }
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch3-expert',
        title: '🎓 Expert Teacher Analysis: The LPG Scorecard',
        description: 'Master assessment of the post-reform era.',
        content: [
            {
                type: 'concept',
                title: 'The Success Indicators',
                text: 'GDP growth rose from 3.5% (Hindu Rate) to 6-8%. Forex reserves and FDI inflows exploded. Consumers gained access to world-class goods.',
                tags: ['PROS']
            },
            {
                type: 'warning',
                title: 'The "Lopsided" Growth',
                points: [
                    '**Jobless Growth:** The secondary and tertiary sectors grew, but failed to absorb surplus labour from agriculture effectively.',
                    '**Agricultural Slowdown:** Shift in focus away from rural infrastructure led to stagnation in farm incomes.',
                    '**Inequality:** The benefits of globalization were skewed toward urban/skilled population.'
                ],
                tags: ['CONS']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-summary',
                title: 'LPG Critical Appraisal Summary',
                type: 'table',
                data: {
                    headers: ['Parameter', 'Success / Positive', 'Failure / Negative'],
                    rows: [
                        ['GDP Growth', 'Reached 7-8%', 'Uneven across sectors'],
                        ['Forex / FDI', 'Record highs (> $600bn)', 'High volatility of FPI'],
                        ['Employment', 'New service sector jobs', 'Jobless growth trend'],
                        ['Agriculture', 'Commercialisation', 'Public investment decay']
                    ]
                }
            }
        ]
    }
];
