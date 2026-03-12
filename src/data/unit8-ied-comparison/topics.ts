import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u8-intro',
        title: '8.1 Introduction: Regional Groupings',
        description: 'Why countries compare development.',
        content: [
            {
                type: 'concept',
                title: 'The Need for Groupings',
                text: 'In the era of globalisation, nations seek to strengthen their domestic economies by forming regional and global economic groupings.',
                points: [
                    '**Examples**: SAARC, European Union (EU), ASEAN, G-8, G-20, BRICS.',
                    '**China\'s Lead**: China is often seen as a benchmark for India and Pakistan due to its rapid advancement.'
                ],
                tags: ['CONTEXT']
            }
        ],
        visualizations: []
    },
    {
        id: 'u8-paths',
        title: '8.2 Developmental Paths: A Chronology',
        description: 'Independence to Reforms.',
        content: [
            {
                type: 'comparison',
                title: 'Key Milestones',
                headers: ['Event', 'India', 'China', 'Pakistan'],
                rows: [
                    ['Independence', '1947', '1949 (PRC)', '1947'],
                    ['First Five-Year Plan', '1951-56', '1953-57', '1956-61'],
                    ['Economic Reforms', '1991', '1978', '1988']
                ]
            }
        ],
        visualizations: []
    },
    {
        id: 'u8-china-model',
        title: '8.3 The China Model: Structural Shifts',
        description: 'From GLF to SEZs.',
        content: [
            {
                type: 'concept',
                title: 'Great Leap Forward (GLF) - 1958',
                text: 'A campaign aimed at industrialising the country on a massive scale.',
                points: [
                    '**Backyard Furnaces**: Households were encouraged to set up steel furnaces in backyards.',
                    '**Commune System**: By 1958, there were **26,000 communes** covering almost the entire rural population.'
                ],
                tags: ['GLF']
            },
            {
                type: 'concept',
                title: 'Great Proletarian Cultural Revolution (1966-76)',
                text: 'Introduced by Mao Zedong, where students and professionals were sent to work and learn from the countryside.',
                tags: ['HISTORY']
            },
            {
                type: 'concept',
                title: 'A Pragmatic Shift (1978)',
                text: 'Reforms were first introduced in agriculture, then industry. Dual pricing and **Special Economic Zones (SEZs)** were used to attract foreign investment.',
                tags: ['REFORMS']
            }
        ],
        visualizations: []
    },
    {
        id: 'u8-demographics',
        title: '8.4 Demographic Indicators',
        description: 'Population, Density, and Urbanization.',
        content: [
            {
                type: 'comparison',
                title: 'Demographic Comparison (2017-18)',
                headers: ['Indicator', 'India', 'China', 'Pakistan'],
                rows: [
                    ['Population Growth (%)', '1.03', '0.46', '2.05'],
                    ['Density (per sq. km)', '455', '148', '275'],
                    ['Urbanisation (%)', '34', '59', '37'],
                    ['Sex Ratio (per 1000)', '924', '949', '943']
                ]
            },
            {
                type: 'warning',
                title: 'The One-Child Norm',
                text: 'Introduced by China in 1979 to control population. It successfully lowered growth but led to a skewed sex ratio and an aging population.',
                tags: ['CRITICAL']
            }
        ],
        visualizations: []
    },
    {
        id: 'u8-sectoral',
        title: '8.5 Sectoral Analysis: The Bypass',
        description: 'GVA vs Employment.',
        content: [
            {
                type: 'concept',
                title: 'The Manufacturing vs Services Debate',
                points: [
                    '**China**: Direct transition from Agriculture to Manufacturing ("Factory of the World").',
                    '**India & Pakistan**: "Bypassed" manufacturing, shifting directly from Agriculture to Services.',
                    '**Agriculture Paradox**: Employs ~43% in India but contributes only ~16% to GVA.'
                ],
                tags: ['STRUCTURE']
            }
        ],
        visualizations: []
    },
    {
        id: 'u8-hdi',
        title: '8.6 Human Development Indicators (HDI)',
        description: 'Life Expectancy and Poverty.',
        content: [
            {
                type: 'comparison',
                title: 'HDI Snapshot',
                headers: ['Indicator', 'India', 'China', 'Pakistan'],
                rows: [
                    ['HDI Value', '0.645', '0.761', '0.557'],
                    ['Infant Mortality Rate', '29.9', '7.4', '57.2'],
                    ['Maternal Mortality Rate', '133', '29', '140'],
                    ['Mean Years of Schooling', '6.5', '8.1', '5.2']
                ]
            },
            {
                type: 'tip',
                title: 'Poverty Reduction',
                text: 'China has remarkably reduced poverty (approaching 0%), while India (21.9%) and Pakistan (24.3%) still face significant challenges.',
                tags: ['ECONOMY']
            }
        ],
        visualizations: []
    },
    {
        id: 'u8-conclusion',
        title: '8.7 Appraisal & Liberty Indicators',
        description: 'Evaluating beyond GDP.',
        content: [
            {
                type: 'concept',
                title: 'Liberty Indicators',
                text: 'Measures the extent of democratic participation and individual freedom.',
                points: [
                    'Freedom of expression.',
                    'Independence of the judiciary.',
                    'Fair elections and political participation.'
                ],
                tags: ['GOVERNANCE']
            }
        ],
        visualizations: []
    }
];
