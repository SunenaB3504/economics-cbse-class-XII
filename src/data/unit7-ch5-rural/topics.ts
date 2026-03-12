import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch5-intro',
        title: '5.1 Introduction',
        description: 'The real progress of India lies in its villages.',
        content: [
            {
                type: 'concept',
                title: 'Gandhi\'s Vision',
                text: 'Mahatma Gandhi said that the real progress of India meant not simply the growth of industrial urban centres but mainly the development of villages.',
                tags: ['VISION']
            },
            {
                type: 'concept',
                title: 'Current Realities',
                points: [
                    'Over two-thirds of India\'s population depends on agriculture.',
                    'One-fourth of rural India still lives in abject poverty.',
                    'Agriculture sector GVA growth rate was about 2% in 2023–24.',
                    'Decline in public investment since 1991 and increasing casualisation of employment remain major concerns.'
                ],
                tags: ['DATA']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch5-whatis',
        title: '5.2 What is Rural Development?',
        description: 'A comprehensive action plan for lagging areas.',
        content: [
            {
                type: 'concept',
                title: 'Key Areas for Initiative',
                points: [
                    '**Human Resources**: Female literacy, education, skill development, and health.',
                    '**Land Reforms**: Ensuring equitable distribution and productivity.',
                    '**Infrastructure**: Electricity, irrigation, credit, transport, and research.',
                    '**Poverty Alleviation**: Improving conditions for weaker sections through productive employment.'
                ],
                tags: ['DEFINITION']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch5-credit',
        title: '5.3 Credit and Marketing: Financial Hub',
        description: 'The lifeline of the rural economy.',
        content: [
            {
                type: 'concept',
                title: 'Rural Credit Milestones',
                points: [
                    '**1969**: Adoption of social banking and multi-agency approach.',
                    '**1982**: NABARD set up as the apex body for rural financing.',
                    '**Institutional Structure**: Commercial Banks, RRBs, Cooperatives, and SHGs.'
                ],
                tags: ['CREDIT']
            }
        ],
        visualizations: [
            {
                id: 'v5-credit-flow',
                title: 'Institutional Credit Structure',
                type: 'process',
                data: [
                    { title: 'NABARD', description: 'Apex Body (Refinancing)' },
                    { title: 'Banks', description: 'Commercial, RRBs, Cooperatives' },
                    { title: 'Local Outlets', description: 'Primary Societies & SHGs' },
                    { title: 'The Farmer', description: 'Direct Credit Access' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch5-shg-jandhan',
        title: '5.4 SHGs and Jan-Dhan Yojana',
        description: 'Micro-credit and total financial inclusion.',
        content: [
            {
                type: 'concept',
                title: 'Empowering via SHGs',
                text: 'Self-Help Groups promote thrift by pooling small savings. By May 2019, nearly 6 crore women joined 54 lakh women SHGs.',
                tags: ['SHG']
            },
            {
                type: 'concept',
                title: 'Jan-Dhan Yojana Impact',
                points: [
                    'Over 50 crore bank accounts opened.',
                    'Banks mobilised over ₹2,00,000 crore.',
                    'Benefits: Accidental insurance (₹1-2L), Overdraft (₹10,000), and direct MNREGA wage receipts.'
                ],
                tags: ['JAN-DHAN']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch5-market',
        title: '5.5 Agricultural Market System',
        description: 'Fixing the farm-to-consumer chain.',
        content: [
            {
                type: 'warning',
                title: 'Systemic Defects',
                text: 'More than 10% of farm produce is wasted due to lack of storage. Farmers historically suffered from faulty weighing and price manipulation.',
                tags: ['MARKETING']
            },
            {
                type: 'concept',
                title: 'Government Measures',
                points: [
                    '**Regulation**: Ordered marketing conditions.',
                    '**Infrastructure**: Roads, warehouses, cold storage.',
                    '**Cooperative Marketing**: Success of milk cooperatives in Gujarat.',
                    '**Policy Instruments**: MSP, Buffer Stocks (FCI), and PDS.'
                ],
                tags: ['REFORMS']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch5-alternate',
        title: '5.6 Alternate Marketing Channels',
        description: 'Direct farmer-to-consumer selling.',
        content: [
            {
                type: 'concept',
                title: 'Successful Models',
                points: [
                    '**Apni Mandi**: Punjab, Haryana, Rajasthan.',
                    '**Rythu Bazars**: Andhra Pradesh and Telangana.',
                    '**Uzhavar Sandies**: Tamil Nadu.',
                    '**Contract Farming**: Direct links with fast food chains for inputs and assured prices.'
                ],
                tags: ['CHANNELS']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch5-diversification',
        title: '5.7 Diversification & Animal Husbandry',
        description: 'Spreading the risk beyond crop farming.',
        content: [
            {
                type: 'concept',
                title: 'Need for Shift',
                text: 'Exclusively depending on farming is risky. Diversification involves changing cropping patterns and shifting workforce to allied activities.',
                tags: ['STRATEGY']
            },
            {
                type: 'concept',
                title: 'Operation Flood (White Revolution)',
                points: [
                    'Milk production increased 12x between 1951–2021.',
                    'Livestock provides income stability to 70 million small farmers.',
                    'Poultry accounts for 61% of livestock distribution.'
                ],
                tags: ['LIVESTOCK']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch5-fisheries-horticulture',
        title: '5.8 Fisheries and Horticulture',
        description: 'Harnessing water and non-food crops.',
        content: [
            {
                type: 'concept',
                title: 'Blue and Golden Revolutions',
                points: [
                    '**Fisheries**: Inland sources contribute 65% of production value.',
                    '**Horticulture**: Contributes nearly one-third of agricultural output value and 6% of GDP.',
                    'India is the world leader in mangoes, bananas, coconuts, and spices.'
                ],
                tags: ['REV']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch5-sustainable',
        title: '5.9 Sustainable Dev & Organic Farming',
        description: 'Eco-friendly agriculture for future generations.',
        content: [
            {
                type: 'concept',
                title: 'Benefits of Organic Farming',
                points: [
                    'Uses cheaper local inputs instead of costly chemicals.',
                    'Higher nutritional value and pesticide-free produce.',
                    'Generates export income and requires more labour (good for employment).'
                ],
                tags: ['ORGANIC']
            },
            {
                type: 'warning',
                title: 'Implementation Hurdles',
                text: 'Lower initial yields, shorter shelf life, and inadequate marketing infrastructure remain key challenges.',
                tags: ['CHALLENGES']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch5-conclusion',
        title: '5.10 Conclusion',
        description: 'Vibrancy through synergy.',
        content: [
            {
                type: 'concept',
                title: 'The Path Ahead',
                text: 'Rural areas need to be made more vibrant through constant dialogue between farmers and departments, IT integration, and farmer-friendly policies.',
                tags: ['FUTURE']
            }
        ],
        visualizations: []
    }
];
