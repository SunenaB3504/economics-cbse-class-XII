import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-ch3-background',
        title: '3.1 Background: The Economy in 1991',
        description: 'The state of the Indian economy leading to reforms.',
        content: [
            {
                type: 'concept',
                title: 'Stagnation and Inefficiency',
                text: 'By the late 1980s, the Indian economy was facing severe problems due to the "License Raj" and inefficient public sector units. Government expenditure exceeded its revenue by such a large margin that even meeting the interest payments became difficult.',
                tags: ['CONTEXT']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch3-triggers',
        title: '3.2 Triggers of the 1991 Crisis',
        description: 'Direct causes of the economic emergency.',
        content: [
            {
                type: 'concept',
                title: 'BoP and Fiscal Crisis',
                points: [
                    '**Foreign Exchange Crisis:** Reserves fell to a level only sufficient to pay for Two Weeks of imports.',
                    '**Fiscal Deficit:** Huge government borrowing led to a massive internal debt.',
                    '**High Inflation:** Prices of essential goods rose sharply (13-17%).',
                    '**Gulf War (1990-91):** Led to a spike in oil prices and a drop in remittances from Indian workers abroad.'
                ],
                tags: ['CRISIS']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch3-nep',
        title: '3.3 The New Economic Policy (NEP)',
        description: 'Stabilisation vs. Structural reforms.',
        content: [
            {
                type: 'concept',
                title: 'IMF/World Bank Intervention',
                text: 'India approached the IBRD (World Bank) and IMF for a **$7 Billion** loan. They agreed on the condition that India liberalise and open up its economy.',
                tags: ['BAILOUT']
            },
            {
                type: 'concept',
                title: 'Two Prongs of NEP',
                points: [
                    '**Stabilisation Measures:** Short-term measures intended to correct the Balance of Payments (BoP) and control inflation.',
                    '**Structural Reform Policies:** Long-term measures aimed at improving efficiency and increasing international competitiveness.'
                ],
                tags: ['STRATEGY']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch3-liberalisation-ind',
        title: '3.4 Liberalisation: Industrial Sector',
        description: 'Deregulation and the end of License Raj.',
        content: [
            {
                type: 'concept',
                title: 'Deregulation Measures',
                points: [
                    '**Abolition of Licensing:** Industrial licensing was abolished for almost all but five industriy groups: (1) Alcohol, (2) Cigarettes, (3) Hazardous Chemicals, (4) Industrial Explosives, (5) Electronics, Aerospace and Drugs.',
                    '**Public Sector Contraction:** Reserved industries for the public sector were reduced initially from 17 to 8, and now even fewer (Railways, Atomic Energy).',
                    '**SSI De-reservation:** Small-scale industries lost their "reserved" status for many products.'
                ],
                tags: ['DEREGULATION']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch3-financial',
        title: '3.5 Financial Sector Reforms',
        description: 'RBI\'s new role and private banking.',
        content: [
            {
                type: 'concept',
                title: 'RBI: From Regulator to Facilitator',
                text: 'The major aim was to reduce the role of RBI from being a **Regulator** to a **Facilitator**. This meant the financial sector could take decisions without consulting the RBI on every step.',
                tags: ['FINANCE']
            },
            {
                type: 'concept',
                title: 'Private and Foreign Banks',
                text: 'Reforms allowed the establishment of private sector banks (both Indian and foreign), increasing competition and efficiency.',
                tags: ['BANKING']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch3-tax-forex',
        title: '3.6 Tax and Foreign Exchange Reforms',
        description: 'Fiscal policy and Rupee stability.',
        content: [
            {
                type: 'concept',
                title: 'Fiscal Policy (Tax Reforms)',
                text: 'Aimed at reducing tax rates and simplifying the system to encourage compliance. Direct tax rates (Income and Corporate tax) were significantly lowered.',
                tags: ['FISCAL']
            },
            {
                type: 'concept',
                title: 'Rupee Devaluation',
                text: 'In 1991, the Rupee was **Devalued** against foreign currencies to increase exports and attract foreign exchange inflows.',
                tags: ['FOREX']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch3-privatisation',
        title: '3.7 Privatisation: Disinvestment & Autonomy',
        description: 'Transfer of ownership and "Ratna" status.',
        content: [
            {
                type: 'concept',
                title: 'Disinvestment',
                text: 'Privatisation of the public sector enterprises by selling off part of the equity of PSUs to the public (Disinvestment). Aim: Improve financial discipline and facilitate modernisation.',
                tags: ['DISINVESTMENT']
            },
            {
                type: 'concept',
                title: 'Navratnas and Maharatnas',
                text: 'To improve efficiency, the government identified profitable PSUs and gave them greater managerial and financial autonomy. Status includes **Maharatnas** (e.g., Indian Oil), **Navratnas** (e.g., HPCL), and **Miniratnas**.',
                tags: ['AUTONOMY']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch3-globalisation',
        title: '3.8 Globalisation: Integrating the World',
        description: 'Outsourcing and boundary-less trade.',
        content: [
            {
                type: 'concept',
                title: 'The Outsourcing Hub',
                text: 'India became a destination for **Outsourcing** (BPO/KPO) due to low wage rates and a high proficiency in English. A "Time-Zone" difference with the West also helped in round-the-clock service.',
                tags: ['OUTSOURCING']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-outsourcing-tree',
                title: 'Drivers of Indian Outsourcing',
                type: 'tree',
                data: {
                    root: 'India as Outsourcing Hub',
                    children: [
                        { name: 'Low Wage Cost' },
                        { name: 'Skilled Manpower' },
                        { name: 'English Proficiency' },
                        { name: 'IT Infrastructure' }
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch3-wto',
        title: '3.9 WTO and Trade Policy',
        description: 'Transition from GATT to WTO.',
        content: [
            {
                type: 'concept',
                title: 'Successor to GATT',
                text: 'The **World Trade Organisation (WTO)** was established in **1995** as the successor to the General Agreement on Tariffs and Trade (GATT,est. 1948).',
                tags: ['WTO']
            },
            {
                type: 'concept',
                title: 'WTO Objectives',
                points: [
                    'Ensuring free trade through the removal of tariffs and non-tariff barriers.',
                    'Enlarging production and trade of services.',
                    'Ensuring optimum utilisation of world resources.'
                ],
                tags: ['TRADE_POLICY']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-ch3-appraisal',
        title: '3.10 Critical Appraisal of LPG',
        description: 'Growth performance and lopsided development.',
        content: [
            {
                type: 'concept',
                title: 'The Success Indicators',
                points: [
                    'GDP growth rate rose significantly (Service sector focus).',
                    'Forex reserves and FDI/FPI inflows saw a massive jump.',
                    'India emerged as an exporter of auto parts, engineering goods, and IT.',
                    'Inflation was brought under control.'
                ],
                tags: ['SUCCESS']
            },
            {
                type: 'warning',
                title: 'The Failures',
                points: [
                    '**Neglect of Agriculture:** Public investment in agricultural infrastructure declined.',
                    '**Jobless Growth:** Growth in GDP did not translate into proportional job creation.',
                    '**Lopsided Industrial Growth:** Demand for industrial products decreased due to cheap imports.',
                    '**Inequality:** Deepened the divide between urban and rural population.'
                ],
                tags: ['FAILURES']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-appraisal-table',
                title: 'Post-1991 Performance Metrics',
                type: 'table',
                data: {
                    headers: ['Macro Parameter', 'Positive Trend', 'Negative Trend'],
                    rows: [
                        ['GDP Growth', '6-8% Average', 'Agri stagnation'],
                        ['Forex Reserves', 'Record Levels', 'Volatility of FPI'],
                        ['Industry', 'Diversified Export', 'Global competition hit'],
                        ['Social', 'Global integration', 'Jobless growth']
                    ]
                }
            }
        ]
    }
];
