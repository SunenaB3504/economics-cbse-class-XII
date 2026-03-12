import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch7-intro',
        title: '7.1 Introduction',
        description: 'The price of development.',
        content: [
            {
                type: 'concept',
                title: 'Development vs Environment',
                text: 'Economic development has come at a heavy price—environmental quality. As India globalises, it must consciously choose sustainable development to avoid the adverse consequences of past paths.',
                tags: ['CONTEXT']
            },
            {
                type: 'concept',
                title: 'Chapter Focus',
                points: [
                    'Functions and role of environment.',
                    'State of India\'s environment.',
                    'Strategies for sustainable development.'
                ]
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch7-functions',
        title: '7.2 Environment Functions & Crisis',
        description: 'Biotic/Abiotic factors and capacity limits.',
        content: [
            {
                type: 'concept',
                title: 'Definition & Elements',
                text: 'The total planetary inheritance and the totality of all resources. It includes both biotic (living) and abiotic (non-living) factors.',
                tags: ['DEFINITION']
            },
            {
                type: 'concept',
                title: 'Four Key Functions',
                points: [
                    '**Supplies Resources**: Renewable (forests, fish) and Non-renewable (fossil fuels).',
                    '**Assimilates Waste**: Absorbs and neutralises generated waste.',
                    '**Sustains Life**: Provides genetic and biodiversity.',
                    '**Aesthetic Services**: Provides scenery and natural beauty.'
                ],
                tags: ['FUNCTIONS']
            },
            {
                type: 'warning',
                title: 'Environmental Crisis',
                text: 'Occurs when demand exceeds **Carrying Capacity** (extraction > regeneration) or **Absorptive Capacity** (waste > digestive limit). Global warming and ozone depletion are modern markers of this crisis.',
                tags: ['CRISIS']
            },
            {
                type: 'comparison',
                title: 'Global Warming vs Ozone Depletion',
                headers: ['Feature', 'Global Warming', 'Ozone Depletion'],
                rows: [
                    ['Primary Cause', 'Greenhouse Gases ($CO_2$, CH$_4$)', 'CFCs and Halons'],
                    ['Protocol', 'Kyoto Protocol (1997)', 'Montreal Protocol'],
                    ['Major Impact', 'Rising Sea Levels / Melting Ice', 'Skin Cancer / UV Radiation']
                ]
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch7-india-state',
        title: "7.3 State of India's Environment",
        description: "Natural wealth and local challenges.",
        content: [
            {
                type: 'concept',
                title: 'Natural Resource Wealth',
                text: 'India is rich in soil (Black soil for Cotton), fertile plains (Indo-Gangetic), and minerals (8% of world iron-ore).',
                tags: ['WEALTH']
            },
            {
                type: 'warning',
                title: 'Priority Issues',
                points: [
                    '**Land Degradation**: 5.3 billion tonnes of soil erosion per year.',
                    '**Forest Loss**: Per capita forest land is only 0.06 hectare (need 0.47).',
                    '**Air Pollution**: Vehicles increased from 3 lakh (1951) to **35 crores (2022)**.',
                    '**CPCB (1974)**: Set up to monitor 125 rivers and set emission standards.'
                ],
                tags: ['URGENT']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch7-sustainable-def',
        title: '7.4 Sustainable Development',
        description: 'Defining future-proof growth.',
        content: [
            {
                type: 'concept',
                title: 'Brundtland Definition (UNCED)',
                text: '"Development that meets the need of the present generation without compromising the ability of the future generation to meet their own needs."',
                tags: ['DEFINITION']
            },
            {
                type: 'concept',
                title: 'Herman Daly\'s Conditions',
                points: [
                    'Limit population within carrying capacity.',
                    'Input-efficient technological progress.',
                    'Extraction rate ≤ Regeneration rate.',
                    'Depletion rate of non-renewables ≤ Creation of renewable substitutes.'
                ],
                tags: ['RULES']
            },
            {
                type: 'tip',
                title: 'Goal 2030',
                text: 'In 2015, the UN formulated **17 Sustainable Development Goals (SDGs)** to be achieved by 2030.',
                tags: ['SDGs']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch7-strategies',
        title: '7.5 Strategies for Sustainability',
        description: 'Practical paths to green development.',
        content: [
            {
                type: 'list',
                title: 'Energy & Fuel Shifts',
                points: [
                    '**Non-conventional Sources**: Wind power and Solar energy (ISA leadership).',
                    '**LPG & Gobar Gas**: Subsidised fuel for rural areas to reduce deforestation.',
                    '**CNG**: Using Compressed Natural Gas for urban transport (Delhi success).'
                ],
                tags: ['ENERGY']
            },
            {
                type: 'list',
                title: 'Local & Organic Solutions',
                points: [
                    '**Mini-Hydel Plants**: Powering remote mountainous regions via perennial streams.',
                    '**Traditional Knowledge**: Utilizing 15,000 medicinal plants; Ayurveda/Unani.',
                    '**Biocomposting**: Returning to organic fertilizers; Vermicomposting.',
                    '**Biopest Control**: Using Neem products and natural controllers (snakes, owls).'
                ],
                tags: ['TRADITION']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch7-conclusion',
        title: '7.6 Conclusion',
        description: 'A genuine paradigm shift.',
        content: [
            {
                type: 'concept',
                title: 'Lasting Development',
                text: 'Adherence to a sustainable path ensures non-declining welfare for all by balancing the reversal of the supply-demand relationship for resources.',
                tags: ['VISION']
            }
        ],
        visualizations: []
    }
];
