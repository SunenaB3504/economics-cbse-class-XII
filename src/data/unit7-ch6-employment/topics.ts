import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch6-intro',
        title: '6.1 Introduction',
        description: 'Why do we work?',
        content: [
            {
                type: 'concept',
                title: 'The Significance of Work',
                text: 'Work enables meaningful participation in society and provides a sense of self-worth. Every working person contributes to national income and the development of the country.',
                tags: ['VISION']
            },
            {
                type: 'concept',
                title: 'Insights from Workforce Study',
                points: [
                    'Helps plan human resources.',
                    'Analyses contributions of different sectors to national income.',
                    'Addresses social issues like child labour and exploitation.'
                ],
                tags: ['ANALYSIS']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch6-definitions',
        title: '6.2 Workers and Employment',
        description: 'Key definitions and workforce facts.',
        content: [
            {
                type: 'concept',
                title: 'Essential Terminology',
                points: [
                    '**Economic activities**: Activities contributing to Gross National Product (GNP).',
                    '**Worker**: Anyone engaged in economic activities, including self-employed and those temporarily absent.',
                    '**Unemployment**: A situation where one cannot get even one hour of work in half a day.'
                ],
                tags: ['DEFINITIONS']
            },
            {
                type: 'concept',
                title: 'India\'s Workforce (2022-23)',
                points: [
                    'Total workforce: ~545 million.',
                    'Rural workforce constitutes about two-thirds of the total.',
                    'Men account for 77%; women for 1/4th (rural) and 1/5th (urban) of their respective areas.'
                ],
                tags: ['DATA']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch6-participation',
        title: '6.3 Participation in Employment',
        description: 'The Worker-Population Ratio (WPR).',
        content: [
            {
                type: 'concept',
                title: 'WPR (Worker-Population Ratio)',
                text: 'The proportion of the total population engaged in economic activities. Higher ratio = greater engagement.',
                tags: ['RATIO']
            },
            {
                type: 'concept',
                title: 'Table 6.1: WPR in India (2022-23)',
                headers: ['Sex', 'Total', 'Rural', 'Urban'],
                rows: [
                    ['Men', '54.4', '54.0', '55.6'],
                    ['Women', '27.0', '30.0', '18.7'],
                    ['Total', '41.1', '42.3', '37.7']
                ]
            },
            {
                type: 'concept',
                title: 'Regional Differences',
                text: 'Rural WPR (~42) is higher than urban (~38) because rural people cannot afford to stay unemployed and have limited resources for higher education.',
                tags: ['ANALYSIS']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch6-status',
        title: '6.4 Self-Employed and Hired Workers',
        description: 'Distribution by employment status.',
        content: [
            {
                type: 'concept',
                title: 'Employment Categories',
                points: [
                    '**Self-employed (57%)**: Major livelihood source for 54% men and 62% women.',
                    '**Casual Wage Labourers (22%)**: Most vulnerable; engaged on daily wages.',
                    '**Regular Salaried (21%)**: Engaged for regular wages; more common in urban areas (40%) vs rural (13%).'
                ],
                tags: ['STATUS']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch6-industry',
        title: '6.5 Workers in Firms and Factories',
        description: 'Sector-wise distribution of workforce.',
        content: [
            {
                type: 'concept',
                title: 'Table 6.2: Workforce by Industry (2022-23)',
                headers: ['Industrial Category', 'Rural', 'Urban', 'Men', 'Female', 'Total'],
                rows: [
                    ['Primary', '57.8', '9.0', '37.5', '64.4', '46.1'],
                    ['Secondary', '22.5', '32.7', '29.3', '19.3', '24.9'],
                    ['Tertiary', '18.0', '60.4', '32.2', '24.7', '29.0']
                ]
            },
            {
                type: 'concept',
                title: 'Primary Sector Dominance',
                text: 'Employing 46.1% of the total workforce, the primary sector remains the largest employer, specifically for women (64%).',
                tags: ['INSIGHT']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch6-growth',
        title: '6.6 Growth & Structural Change',
        description: 'Jobless growth and sectoral trends.',
        content: [
            {
                type: 'warning',
                title: 'Jobless Growth',
                text: 'A situation in the late 1990s where GDP grew faster than employment growth, producing more value without proportionally creating jobs.',
                tags: ['WARNING']
            },
            {
                type: 'concept',
                title: 'Sectoral Trends (1972-2023)',
                headers: ['Sector', '1972-73', '1983', '2011-12', '2017-18'],
                rows: [
                    ['Primary', '74.3', '68.6', '48.9', '46.1'],
                    ['Secondary', '10.9', '11.5', '24.3', '24.9'],
                    ['Services', '14.8', '16.9', '26.8', '29.0']
                ]
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch6-informalisation',
        title: '6.7 Informalisation of Workforce',
        description: 'Formal vs Informal sector challenges.',
        content: [
            {
                type: 'concept',
                title: 'Scale of Informalisation',
                points: [
                    '**94% of workers** are in the informal sector.',
                    'Only ~6% are in the formal sector (Organised), enjoying social security.',
                    'Formal sector grew from 30 million (2012) to 59 million (2022).'
                ],
                tags: ['CHALLENGE']
            },
            {
                type: 'warning',
                title: 'Ahmedabad Textile Case Study',
                text: 'Closure of textile mills in the 1980s converted 80,000 permanent workers to informal ones, leading to alcoholism and household distress.',
                tags: ['CASE STUDY']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch6-unemployment',
        title: '6.8 Unemployment Types',
        description: 'Open, Disguised, and Seasonal.',
        content: [
            {
                type: 'concept',
                title: 'The Hidden Jobless',
                points: [
                    '**Disguised**: Marginal productivity is zero; common in agriculture (1/3rd workers).',
                    '**Seasonal**: Employment only during specific harvest/sowing cycles.',
                    '**Open**: Completely without work and actively seeking.'
                ],
                tags: ['TYPES']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch6-gov-init',
        title: '6.9 Govt Employment Initiatives',
        description: 'Direct and indirect generation.',
        content: [
            {
                type: 'concept',
                title: 'MGNREGA (2005)',
                text: 'Guarantees **100 days** of unskilled manual work to rural households. A landmark direct employment method.',
                tags: ['POLICY']
            },
            {
                type: 'concept',
                title: 'Indirect Generation',
                text: 'When govt enterprises increase output, private companies receiving inputs also grow, creating additional jobs indirectly.',
                tags: ['ECONOMICS']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch6-conclusion',
        title: '6.10 Conclusion',
        description: 'The changing nature of work.',
        content: [
            {
                type: 'concept',
                title: 'Structural Shift',
                text: 'Modern growth is service-driven and outsourcing-heavy. With increasing informalisation, the home is becoming the new workplace for many.',
                tags: ['FUTURE']
            }
        ],
        visualizations: []
    }
];
