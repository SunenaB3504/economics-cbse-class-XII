import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-ch3-crisis',
        title: '3.1 The 1991 Economic Crisis',
        description: 'The triggers that forced India into the New Economic Policy.',
        content: [
            {
                type: 'concept',
                title: 'The Perfect Storm (July 1991)',
                text: 'By 1991, under PM P.V. Narasimha Rao and FM Dr. Manmohan Singh, India launched the NEP to combat a severe crisis.',
                points: [
                    '**Foreign Exchange Crisis:** $7 Billion loan from IMF/World Bank was sought as reserves fell to 2 weeks.',
                    '**Fiscal Deficit:** Government borrowing was unsustainable, leading to a **Vicious Circle of Debt**.',
                    '**Inflation:** Soaring double-digit prices (13-17%).',
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
                    '**Compulsory Licensing:** Retained for only 6 industries (Alcohol, Cigarettes, Hazardous Chemicals, Drugs, Explosives, Aerospace).',
                    '**Public Sector Role:** Strategic disinvestment to end **Soft Budget Constraints**. PSUs given status like **Maharatna** (NTPC, ONGC) and **Navratna** (SAIL).',
                    '**Price Deregulation:** Ended **Dual Pricing** (where govt and market both set prices).'
                ],
                tags: ['LIBERALISATION']
            },
            {
                type: 'concept',
                title: 'Financial & External Sector',
                points: [
                    '**Fiscal Consolidation:** Policies to reduce the fiscal deficit.',
                    '**RBI Role:** Shift from **Regulator** to **Facilitator** (Banks can decide rates).',
                    '**Rupee Devaluation:** Done to boost exports and attract forex.',
                    '**Trade Policy:** Removal of Quotas (QRs) finished by **2001**.'
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
                title: 'Outsourcing & WTO',
                text: 'India became a global hub for BPO and **KPO** (Knowledge Process Outsourcing) due to skilled manpower. The World Trade Organisation (WTO), established in 1995 as successor to **GATT (1948)**, further integrated India into global trade.',
                tags: ['GLOBALISATION', 'WTO']
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
