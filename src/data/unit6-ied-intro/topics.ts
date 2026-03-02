import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-t1',
        title: 'Indian Economy on the Eve of Independence',
        description: 'The state of the Indian economy in 1947, focusing on colonial exploitation across agriculture, industry, trade, demographics, and infrastructure.',
        content: [
            {
                type: 'concept',
                title: 'Indian Economy (1947)',
                text: 'By 1947, systematic colonial policies had dismantled a once-prosperous economy renowned for fine textiles like **Dacca Muslin**.',
                tags: ['HISTORICAL CONTEXT']
            },
            {
                type: 'concept',
                title: 'State of Agriculture',
                text: 'Employed 70–75% of the workforce but remained backward due to exploitative systems.',
                points: [
                    '**Land Settlement**: Zamindari, Mahalwari, and Ryotwari systems extracted maximum rent.',
                    '**Commercialisation**: Forced cultivation of cash crops (Indigo, Cotton) led to food shortages.'
                ],
                tags: ['STAGNATION']
            },
            {
                type: 'warning',
                title: 'The Zamindari System',
                text: 'The most exploitative system where Zamindars paid fixed land revenue to the British regardless of harvest, squeezing farmers into perpetual debt.',
                tags: ['EXPLOITATION']
            },
            {
                type: 'concept',
                title: 'Industrial & Trade Decline',
                text: 'Britain used India as a supplier of raw materials and a market for finished goods.',
                points: [
                    '**De-industrialisation**: Handloom weavers were destroyed by duty-free British machine-made imports.',
                    '**Drain of Wealth**: Export surplus was used to pay British administrative and war expenses (Theorised by Dadabhai Naoroji).',
                    '**Suez Canal (1869)**: Intensified colonial trade by reducing transport costs to Britain.'
                ],
                tags: ['COLONIAL POLICY']
            },
            {
                type: 'tip',
                title: '1921: Year of Great Divide',
                text: 'The year when India transitioned from a phase of unstable population to sustained growth.',
                tags: ['DEMOGRAPHY']
            }
        ],
        visualizations: [
            {
                id: 'u6-v1',
                title: 'Three Land Revenue Systems at a Glance',
                type: 'table',
                data: {
                    headers: ['System', 'Region', 'Who Paid', 'Fixed/Flexible', 'Impact'],
                    rows: [
                        ['Zamindari', 'Bengal, Bihar, Orissa', 'Zamindars (landlords)', 'Fixed — always', 'Most exploitative; farmers insecure'],
                        ['Mahalwari', 'Punjab, Agra, Oudh', 'Village headman (Mahal)', 'Periodically revised', 'Village-based — moderately exploitative'],
                        ['Ryotwari', 'Bombay, Madras', 'Individual farmers (Ryots)', 'Periodically revised', 'Direct — no middleman, but burden still high']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-t2',
        title: 'Indian Economy (1950–1990): Planning Era',
        description: 'The era of Five Year Plans, Green Revolution, the Industrial Policy Resolution 1956 (IPR 1956), and import substitution — India building its own economic foundation.',
        content: [
            {
                type: 'concept',
                title: 'The Planning Era (1950–1990)',
                text: 'India adopted a **Mixed Economy** with the government holding the "commanding heights," guided by Five Year Plans.',
                points: [
                    '**Planning Commission (1950)**: Formulated 5-year plans (replaced by **NITI Aayog** in 2015).',
                    '**Goal Mnemonic (GMSE)**: Growth, Modernisation, Self-reliance, and Equity.'
                ],
                tags: ['STRATEGY']
            },
            {
                type: 'concept',
                title: 'Agricultural Reforms',
                text: 'Three pillars to transform a stagnated farm sector.',
                points: [
                    '**Land Reforms**: Abolished Zamindari (20M tenants became owners) and set Land Ceilings.',
                    '**Tenancy Laws**: Fixed fair rents and provided security of tenure.',
                    '**PDS & MSP**: Public Distribution System and Minimum Support Price ensured food security for both farmers and the poor.'
                ],
                tags: ['EQUITY']
            },
            {
                type: 'tip',
                title: 'Green Revolution Package',
                text: 'Introduced HYV seeds, chemical fertilizers, and assured irrigation to achieve food self-sufficiency.',
                tags: ['MODERNISATION']
            },
            {
                type: 'concept',
                title: 'Industry & Trade Policy',
                text: 'Inward-looking strategy focused on self-reliance.',
                points: [
                    '**IPR 1956**: Classified industries into 3 schedules; established public sector dominance.',
                    '**Licence Raj**: Private sector required govt permits to start, expand, or diversify.',
                    '**Import Substitution**: Protecting "infant industries" via high tariffs and quotas.'
                ],
                tags: ['SELF-RELIANCE']
            },
            {
                type: 'warning',
                title: 'The Hindu Rate of Growth',
                text: 'A term for the sluggish ~3.5% GDP growth from 1950–1990, caused by the inefficiencies of the Licence Raj and isolation from global trade.',
                tags: ['STAGNATION']
            }
        ],
        visualizations: [
            {
                id: 'u6-v2',
                title: 'Planning Goals (GMSE Framework)',
                type: 'grid',
                data: [
                    { label: 'Growth', desc: 'Higher Gross Domestic Product (GDP) and expanded productive capacity.' },
                    { label: 'Modernisation', desc: 'New technology AND progressive social change (e.g., gender equality).' },
                    { label: 'Self-reliance', desc: 'Import substitution — produce domestically, avoid foreign dependence.' },
                    { label: 'Equity', desc: 'Social justice, poverty reduction, fair distribution of growth benefits.' }
                ]
            },
            {
                id: 'u6-v3',
                title: 'Green Revolution Package',
                type: 'steps',
                data: ['High Yielding Variety (HYV) Seeds', 'Assured Irrigation', 'Chemical Fertilisers + Pesticides', 'Minimum Support Price (MSP) via Food Corporation of India (FCI)', 'Self-sufficiency in Food Grains']
            },
            {
                id: 'u6-v2b',
                title: 'IPR 1956 — Three Schedules',
                type: 'table',
                data: {
                    headers: ['Schedule', 'Industries', 'Government Role'],
                    rows: [
                        ['Schedule A (17)', 'Defence, Railways, Atomic Energy, Iron & Steel', 'Exclusive government monopoly'],
                        ['Schedule B (12)', 'Chemicals, Fertilisers, Non-ferrous Metals', 'Government starts new units; private supplements'],
                        ['Schedule C (All others)', 'Consumer Goods, Textiles, most Manufacturing', 'Private sector — via licensing system']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-t3',
        title: 'New Economic Policy 1991 (LPG Reforms)',
        description: 'The paradigm shift from a controlled, planned economy to Liberalisation, Privatisation, and Globalisation — causes, components, and critical appraisal.',
        content: [
            {
                type: 'concept',
                title: 'The 1991 Crisis',
                text: 'India faced a "perfect storm" of economic crises that forced a paradigm shift.',
                points: [
                    '**Fiscal Deficit**: Gov spending massively exceeded revenue.',
                    '**BoP Crisis**: Forex reserves fell to just **2 weeks** of imports.',
                    '**Gulf War (1990)**: Spiked oil prices and reduced remittances from workers abroad.',
                    '**Gold Pledging**: India pledged 67 tonnes of gold to the Bank of England to avoid default.'
                ],
                tags: ['CRISIS']
            },
            {
                type: 'concept',
                title: 'Liberalisation (L)',
                text: 'Removing government barriers to entry and growth.',
                points: [
                    '**Industrial**: Abolished licensing for most sectors (except 6 like Alcohol, Drugs).',
                    '**Financial**: RBI moved from "Regulator" to "Facilitator"; private/foreign banks allowed.',
                    '**Forex**: Devaluation of Rupee and move to market-determined exchange rates.'
                ],
                tags: ['REFORMS']
            },
            {
                type: 'concept',
                title: 'Privatisation (P)',
                text: 'Moving control from the public to the private sector.',
                points: [
                    '**Disinvestment**: Selling govt equity in PSUs to raise funds and improve efficiency.',
                    '**Autonomy**: Classifying top PSUs as **Maharatnas**, **Navratnas**, or **Miniratnas** to give them investment freedom.'
                ],
                tags: ['EFFICIENCY']
            },
            {
                type: 'concept',
                title: 'Globalisation (G)',
                text: 'Integrating the Indian economy with the world.',
                points: [
                    '**Trade**: Dramatic cuts in import duties and removal of quotas.',
                    '**FDI/FII**: Allowed foreign investment in previously restricted sectors.',
                    '**Outsourcing**: Exploiting India\'s talent pool for global BPO services.',
                    '**WTO (1995)**: India became a founding member of the World Trade Organisation.'
                ],
                tags: ['INTEGRATION']
            }
        ],
        visualizations: [
            {
                id: 'u6-v4',
                title: 'LPG Reform Pillars',
                type: 'table',
                data: {
                    headers: ['Reform Pillar', 'Key Actions Taken', 'Objective'],
                    rows: [
                        ['Liberalisation', 'End Licence Raj; RBI as Facilitator; Rupee devaluation; LERMS; private banks; tax simplification', 'Remove government controls; increase efficiency'],
                        ['Privatisation', 'Disinvestment of PSUs; Maharatna/Navratna/Miniratna autonomy', 'Improve PSU efficiency; raise government revenues'],
                        ['Globalisation', 'Tariff cuts; remove QRs (Quantitative Restrictions); FDI liberalisation; WTO founding member; BPO growth', 'Integrate with world economy; attract investment']
                    ]
                }
            },
            {
                id: 'u6-v5',
                title: 'GDP Growth by Sector Before and After 1991 Reforms (% per annum)',
                type: 'table',
                data: {
                    headers: ['Sector', '1980–91', '1992–2001', '2007–12'],
                    rows: [
                        ['Agriculture', '3.6', '3.3', '3.2'],
                        ['Industry', '7.1', '6.5', '7.4'],
                        ['Services', '6.7', '8.2', '10.0'],
                        ['Total GDP (Gross Domestic Product)', '5.6', '6.4', '8.2']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-t4',
        title: 'Industrial Sector and Foreign Trade (Eve of Independence)',
        description: 'Detailed conditions of Indian industry and foreign trade under British rule — de-industrialisation, drain of wealth, and colonial trade monopoly.',
        content: [
            {
                type: 'concept',
                title: 'Colonial De-industrialisation',
                text: 'A deliberate two-fold policy to dismantle Indian manufacturing.',
                points: [
                    '**Raw Material Exporter**: Feed British factories with cheap Indian cotton and jute.',
                    '**Finished Goods Importer**: Make India a captive market for machine-made British textiles.',
                    '**Discriminatory Tariffs**: Heavy duties on Indian exports while British imports entered duty-free.'
                ],
                tags: ['DE-INDUSTRIALISATION']
            },
            {
                type: 'warning',
                title: 'The Drain of Wealth',
                text: 'The systematic outflow of India\'s economic surplus to Britain, first highlighted by **Dadabhai Naoroji**.',
                points: [
                    '**Administrative Costs**: Running the India Office in London.',
                    '**War Expenses**: Financing British military campaigns with Indian revenue.',
                    '**Invisible Payments**: Interest on debt, shipping and banking charges paid to British firms.'
                ],
                tags: ['EXPLOITATION']
            },
            {
                type: 'concept',
                title: 'Industrial Stagnation',
                text: 'Lack of a capital goods industry and limited public sector role.',
                points: [
                    '**Capital Goods Industry**: Britain prevented India from building machines to ensure dependence.',
                    '**TISCO (1907)**: The rare private exception in a landscape of industrial underdevelopment.',
                    '**Limited Public Sector**: Confined to railways and ports that aided colonial extraction.'
                ],
                tags: ['STAGNATION']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-t5',
        title: 'Demographic Condition and Occupational Structure',
        description: 'Key demographic indicators, workforce distribution, and infrastructure during British rule — why India in 1947 was impoverished across every human development dimension.',
        content: [
            {
                type: 'comparison',
                title: 'Demographic Indicators (Colonial vs Modern)',
                headers: ['Indicator', '1947', 'Modern India', 'Status'],
                rows: [
                    ['Birth Rate', '48/1000', '~20/1000', 'Improved'],
                    ['Death Rate', '40/1000', '~6/1000', 'Improved'],
                    ['Infant Mortality', '218/1000', '~28/1000', 'Major Success'],
                    ['Life Expectancy', '32 Years', '69 Years', 'Doubled'],
                    ['Literacy Rate', '< 16%', '78%', 'Transformed']
                ],
                tags: ['HUMAN DEVELOPMENT']
            },
            {
                type: 'tip',
                title: '1921: Demographic Transition',
                text: 'Known as the **"Year of Great Divide"**. After 1921, India entered a phase of sustained population growth as death rates began to fall.',
                tags: ['POPULATION']
            },
            {
                type: 'concept',
                title: 'Occupational Structure',
                text: 'The workforce remained "trapped" in low-productivity agriculture without structural transformation.',
                points: [
                    '**Agriculture**: 70–75% of workforce (sign of underdevelopment).',
                    '**Industry**: Merely 10% (systematically suppressed).',
                    '**Infrastructure**: Railways (1853) and Suez Canal (1869) served colonial trade, not Indian welfare.'
                ],
                tags: ['STAGNATION']
            }
        ],
        visualizations: []
    },
    {
        id: 'u6-t6',
        title: 'Industry and Trade Policy: Import Substitution (1950–1990)',
        description: "India's inward-looking trade strategy, industrial licensing, Small Scale Industry policy, and how the planning approach created the 'Hindu Rate of Growth.'",
        content: [
            {
                type: 'concept',
                title: 'State-Led Industrialisation',
                text: 'The government took control of "commanding heights" because private capital was scarce and the market was small.',
                points: [
                    '**IPR 1956**: Blueprint for state control; divided industries into 3 Schedules (A, B, C).',
                    '**Public Sector**: Directly owned key industries like Defence, Railways, and Steel.'
                ],
                tags: ['STRATEGY']
            },
            {
                type: 'warning',
                title: 'The Licence Raj',
                text: 'A system where private firms needed govt permission for every action — starting, expansion, or even closing.',
                points: [
                    '**Bureaucracy**: Caused massive delays and corruption.',
                    '**Inefficiency**: Lack of competition led to poor quality and high prices.',
                    '**Hindu Rate of Growth**: Sluggish 3.5% growth resulted from these bottlenecks.'
                ],
                tags: ['BOTTLENECKS']
            },
            {
                type: 'tip',
                title: 'Small Scale Industries (SSI)',
                text: 'The **Karve Committee (1955)** recommended promoting SSIs for rural employment and equity.',
                tags: ['EQUITY']
            },
            {
                type: 'concept',
                title: 'Import Substitution',
                text: 'An "inward-looking" trade strategy protecting domestic "infant industries".',
                points: [
                    '**Tools**: High tariffs and physical quotas (Quantitative Restrictions).',
                    '**Rationale**: Give new domestic firms time to grow without foreign competition.',
                    '**Outcome**: While it built a base, it also made domestic firms inefficient and non-competitive globally.'
                ],
                tags: ['TRADE POLICY']
            },
            {
                type: 'tip',
                title: 'Operation Flood (Amul)',
                text: 'The success of dairy cooperatives transformed India into the world\'s largest milk producer through collective action.',
                tags: ['COOPERATIVES']
            }
        ],
        visualizations: []
    },
    MASTER_INTERRELATIONSHIPS_TOPIC
];
