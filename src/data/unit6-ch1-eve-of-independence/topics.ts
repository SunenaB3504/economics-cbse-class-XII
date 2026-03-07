import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-ch1-intro',
        title: '1.1 State of Indian Economy on the Eve of Independence',
        description: 'Overview of the colonial legacy and the low level of economic development.',
        content: [
            {
                type: 'context',
                title: 'The Colonial Objective',
                text: 'The main purpose of the British colonial rule in India was to reduce the country to being a raw material supplier for Great Britain’s own rapidly expanding modern industrial base. They never made any sincere attempt to estimate India’s national and per capita income.',
                tags: ['OVERVIEW']
            },
            {
                type: 'concept',
                title: 'Notable Researchers',
                text: 'Among the notable estimators — Dadabhai Naoroji, William Digby, Findlay Shirras, V.K.R.V. Rao and R.C. Desai — it was the estimates of Dr. Rao, which were considered very scientific and significant. He estimated that while aggregate real output grew at less than 2%, per capita output growth was a pathetic 0.5% per year.',
                tags: ['DATA']
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-indicators',
                title: 'Key Indicators at Independence',
                type: 'table',
                data: {
                    headers: ['Indicator', 'Status in 1947', 'Expert Remark'],
                    rows: [
                        ['GDP Growth', 'Less than 2%', 'Virtually stagnant'],
                        ['Per Capita Growth', '0.5%', 'Pathetic improvement'],
                        ['Literacy Rate', 'Below 16%', 'Social backwardness'],
                        ['Life Expectancy', '44 years', 'Extreme lack of health']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch1-agri',
        title: '1.2 Agricultural Sector',
        description: 'Analysis of land settlement systems and commercialisation.',
        content: [
            {
                type: 'concept',
                title: 'Stagnation and its Causes',
                text: 'India’s economy under the British colonial rule remained fundamentally agrarian — about 85 per cent of the country’s population lived mostly in villages and derived livelihood directly or indirectly from agriculture. However, the agricultural sector continued to experience stagnation.',
                points: [
                    '**Land Settlement Systems:** Specifically the Zamindari system introduced in the Bengal Presidency where the profit accruing out of the agriculture sector went to the zamindars instead of the cultivators.',
                    '**Commercialisation:** Production for the market (cash crops like Indigo) instead of self-consumption.',
                    '**Low levels of technology:** Lack of irrigation facilities and negligible use of fertilisers.'
                ],
                tags: ['AGRICULTURE']
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-systems',
                title: 'Colonial Land Revenue Systems',
                type: 'grid',
                data: [
                    { label: 'Zamindari', desc: 'Bengal/East India. Fixed rent. Most exploitative.' },
                    { label: 'Mahalwari', desc: 'Punjab/North-West. Village-based collection.' },
                    { label: 'Ryotwari', desc: 'South/West India. Direct dealing with farmers.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch1-industry',
        title: '1.3 Industrial & Foreign Trade Sector',
        description: 'De-industrialisation and the Drain of Wealth.',
        content: [
            {
                type: 'warning',
                title: 'Two-fold De-industrialisation',
                text: 'The primary motive of the colonial government behind this policy was two-fold: (1) To reduce India to an exporter of raw materials (Cotton, Silk, Wool, Indigo, Jute) and (2) To turn India into a market for British finished goods. They destroyed the "Sovereignty" of the Indian producer.',
                points: [
                    '**Handicraft Decay:** World-famous Muslin was replaced by cheap mill-made British cloth.',
                    '**TISCO (1907):** The Tata Iron and Steel Company was incorporated in 1907 (began production in 1912), standing as a rare exception in a backward industrial base.',
                    '**Modern Industry:** Remained confined to cotton/jute textiles and a few sugar/paper mills with no capital goods sector.'
                ],
                tags: ['INDUSTRY']
            },
            {
                type: 'concept',
                title: 'Drain of Wealth',
                text: 'India was a net exporter. The export surplus was used to pay for "Invisible Items" (shipping/banking/insurance), administrative expenses in London, and British war costs.',
                tags: ['TRADE']
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-trade-flow',
                title: 'Colonial Trade Mechanism',
                type: 'flow',
                data: {
                    nodes: [
                        { id: 'in', label: 'INDIA (Raw Materials)' },
                        { id: 'uk', label: 'BRITAIN (Factories)' },
                        { id: 'surplus', label: 'Export Surplus' },
                        { id: 'drain', label: 'Admin/War Costs (London)' }
                    ],
                    edges: [
                        { from: 'in', to: 'uk', label: 'Cotton/Silk' },
                        { from: 'uk', to: 'in', label: 'Finished Cloth' },
                        { from: 'in', to: 'surplus', label: 'Cash Inflow' },
                        { from: 'surplus', to: 'drain', label: 'The Drain' }
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch1-expert',
        title: '🎓 Expert Teacher Analysis: The Colonial Trap',
        description: 'Master analysis of interrelationships and examiner focus areas.',
        content: [
            {
                type: 'concept',
                title: 'The "Golden Bird" to "Colonial Tool"',
                text: 'India was world-famous for its Dacca Muslin and crafts. The British didn\'t just tax us; they systematically dismantled our manufacturing capability to ensure we could never compete with Manchester and Lancashire.',
                tags: ['EXPERT']
            },
            {
                type: 'tip',
                title: 'Examiner Trap: "Positive" vs "Motive"',
                text: 'If a question asks about the INTENT of railways or telegraphs, NEVER say "for Indian welfare". The intent was always colonial control. The positive effects (integration, faster travel) were accidental side effects.',
                tags: ['EXAM_TRAP']
            },
            {
                type: 'list',
                title: 'Demographic & Infrastructure Milestones',
                points: [
                    '**Census 1881:** The first official census revealed high birth/death rates and massive illiteracy.',
                    '**1921:** The "Year of Great Divide" marking the transition to stable population growth.',
                    '**Railways (1850):** First train ran from Mumbai to Thane in 1853, primarily for raw material transport and troop movement.',
                    '**Occupational Structure:** Agriculture (70–75%), Manufacturing (10%), and Services (15–20%).'
                ],
                tags: ['CHRONOLOGY', 'INFRASTRUCTURE']
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-summary-table',
                title: 'Summary Table: Colonial Exploitation',
                type: 'table',
                data: {
                    headers: ['Sector', 'Core Problem', 'Specific Mechanism'],
                    rows: [
                        ['Agriculture', 'Stagnation', 'Zamindari System + Commercialisation'],
                        ['Industry', 'Decay of Handicrafts', 'Discriminatory Tariff Policy'],
                        ['Trade', 'Drain of Wealth', 'Export Surplus used for British Admin/Wars'],
                        ['Demography', 'Low Vitality', 'High IMR (218) + Low Literacy (16%)'],
                        ['Infrastructure', 'Self-Serving', 'Railways (1850) for Military/Trade']
                    ]
                }
            }
        ]
    }
];
