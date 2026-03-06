import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u8-t1',
    title: 'Development Path: India, China & Pakistan',
    description: 'Historical comparison and economic milestones since 1947.',
    content: [
      {
        type: 'context',
        title: 'Comparative Development Journeys',
        text: 'India, China, and Pakistan started their development journeys around the same time but chose different models. Think of them as three neighbors who left for their careers in the same decade.',
        points: [
          '**Founding Years**: India (1947), Pakistan (1947), and China (1949).',
          '**Five-Year Plans**: India (1951), China (1953), Pakistan (1956).',
          '**Reform Sequence**: China (1978), Pakistan (1988), India (1991).'
        ],
        tags: ['HISTORY', 'CHRONOLOGY']
      },
      {
        type: 'concept',
        title: "China's Transformation: GLF and Communes",
        text: "Before the 1978 reforms, China followed a strict state-led socialist model characterized by mass mobilization.",
        subPoints: [
          { label: 'Great Leap Forward (GLF) (1958)', text: 'Aim: Rapid industrialization through household-level steel production (backyard furnaces).' },
          { label: 'Commune System', text: 'Collective farming where 26,000 communes covered the entire rural population.' },
          { label: 'Cultural Revolution (1966-76)', text: 'Introduced by Mao to protect socialist values; sent professionals to work in the countryside.' }
        ],
        tags: ['CHINA', 'MAO-ERA']
      },
      {
        type: 'concept',
        title: "China's Institutional Reforms (1978)",
        text: "The Deng Xiaoping era introduced pragmatic shifts that made China the 'Factory of the World'.",
        subPoints: [
          { label: 'Agriculture', text: 'Household Responsibility System (HRS) gave land-use rights to families.' },
          { label: 'Dual Pricing Policy', text: 'Fixed portion of output sold at regulated prices; surplus sold at market prices.' },
          { label: 'Special Economic Zones (SEZs)', text: 'Tax incentives and infrastructure to attract Foreign Direct Investment (FDI).' }
        ],
        tags: ['CHINA', 'MODERN']
      },
      {
        type: 'concept',
        title: "Pakistan's Economic Trajectory",
        text: "Pakistan initially grew faster than India in the 1960s but faced structural vulnerabilities later.",
        points: [
          'Followed a **Mixed Economy** model with public sector dominance.',
          'Adopted **Import Substitution** to protect local industries.',
          'Developed a **Remittance Economy** where growth relies heavily on workers abroad and foreign aid.'
        ],
        tags: ['PAKISTAN']
      }
    ],
    visualizations: [
      {
        id: 'u8-v1',
        title: 'Reform Sequence',
        type: 'table',
        data: {
          headers: ['Country', 'Reform Year', 'Primary Strategy'],
          rows: [
            ['China', '1978', 'Phased Market Socialism (SEZs)'],
            ['Pakistan', '1988', 'Denationalisation & Aid'],
            ['India', '1991', 'Liberalisation Package (LPG)']
          ]
        }
      }
    ]
  },
  {
    id: 'u8-t2',
    title: 'Demographic and Economic Indicators',
    description: 'Comparing growth rates, population density, and sectoral shifts.',
    content: [
      {
        type: 'comparison',
        title: 'Demographic Indicators (Size vs. Density)',
        text: 'Comparing population growth, density, and urbanisation across the three nations.',
        subPoints: [
          { label: 'Growth', text: 'Pakistan has the highest growth rate (~2%). China has the lowest due to the 1979 One-Child Policy.' },
          { label: 'Density', text: 'China has the lowest density (148/sq km) due to large land area. India is most dense (455/sq km).' },
          { label: 'Urbanisation', text: 'China leads (~60%) compared to India and Pakistan (~35-37%).' }
        ],
        tags: ['DEMOGRAPHICS']
      },
      {
        type: 'concept',
        title: 'The Service Sector Bypass',
        text: 'While China followed the typical Agri -> Industry -> Services path, India and Pakistan moved directly from Agriculture to Services.',
        points: [
          '**China**: Manufacturing remains the backbone of the economy.',
          '**India & Pakistan**: Bypassed the intensive manufacturing phase.',
          '**Employment Paradox**: In India, agriculture employs 43% but contributes <20% to GDP, indicating low productivity.'
        ],
        tags: ['ECONOMY', 'STRUCTURAL']
      },
      {
        type: 'comparison',
        title: 'Human Development (HDI) Targets',
        text: 'China outperforms its neighbors on most human development metrics.',
        subPoints: [
          { label: 'HDI Category', text: 'China (High), India (Medium), Pakistan (Low-Medium).' },
          { label: 'Health', text: 'China has lower IMR (7.4) and higher life expectancy (77 years) than India and Pakistan.' },
          { label: 'Education', text: 'Mean years of schooling are highest in China (8.1 years).' }
        ],
        tags: ['HDI', 'WELFARE']
      }
    ],
    visualizations: [
      {
        id: 'u8-v2-t1',
        title: 'Table 8.1: Demographic Indicators (approx. 2017-18)',
        type: 'table',
        data: {
          headers: ['Indicator', 'India', 'China', 'Pakistan'],
          rows: [
            ['Population (in millions)', '1352', '1393', '212'],
            ['Annual Growth of Population (%)', '1.03', '0.46', '2.05'],
            ['Density (per sq. km)', '455', '148', '275'],
            ['Sex/1000 Males', '924', '949', '943'],
            ['Fertility Rate', '2.2', '1.7', '3.6'],
            ['Urbanisation (%)', '34', '59', '37']
          ]
        }
      },
      {
        id: 'u8-v2-t2',
        title: 'Table 8.2 / 8.3: GDP Growth & Sectoral Share (GVA)',
        type: 'table',
        data: {
          headers: ['Sector', 'India (GVA %)', 'China (GVA %)', 'Pak (GVA %)'],
          rows: [
            ['Agriculture', '16', '7', '24'],
            ['Industry', '30', '41', '19'],
            ['Services', '54', '52', '57']
          ]
        }
      },
      {
        id: 'u8-v2-t3',
        title: 'Table 8.4: Sectoral Share of Employment (%)',
        type: 'table',
        data: {
          headers: ['Sector', 'India', 'China', 'Pakistan'],
          rows: [
            ['Agriculture', '43', '26', '41'],
            ['Industry', '25', '28', '24'],
            ['Services', '32', '46', '35']
          ]
        }
      }
    ]
  },
  {
    id: 'u8-t3',
    title: 'Appraisal and Liberty Indicators',
    description: 'Evaluating development beyond just GDP and math.',
    content: [
      {
        type: 'concept',
        title: 'Appraisal: Successes & Failures',
        text: 'Evaluating the performance of the three economies over seven decades.',
        points: [
          '**China**: Successfully eliminated extreme poverty but lacks political transparency.',
          '**India**: Maintained democratic stability and leadership in services, but lags in manufacturing and infrastructure.',
          '**Pakistan**: Faced political instability and excessive dependency on foreign aid and remittances.'
        ],
        tags: ['APPRAISAL']
      },
      {
        type: 'tip',
        title: 'Liberty Indicators: The Missing Dimension',
        text: 'Development is not just about GDP; it is also about the freedom people enjoy. Liberty indicators measure democratic participation.',
        points: [
          'Freedom of expression and speech.',
          'Independence of the judiciary.',
          'Democratic and political participation.'
        ],
        tags: ['LIBERTY', 'GOVERNANCE']
      },
      {
        type: 'context',
        title: 'The Democracy-Development Debate',
        text: 'India and Pakistan often rank better on Liberty Indicators than China, despite China having higher GDP and HDI scores. This raises the question: Is economic growth more important than individual freedom?',
        tags: ['DEBATE']
      }
    ],
    visualizations: [
      {
        id: 'u8-v3-t1',
        title: 'Table 8.5: Selected Indicators of Human Development',
        type: 'table',
        data: {
          headers: ['Indicator', 'India', 'China', 'Pakistan'],
          rows: [
            ['HDI Value', '0.645', '0.761', '0.557'],
            ['Rank', '130', '87', '154'],
            ['Life Expectancy at Birth (years)', '69.4', '76.9', '67.3'],
            ['Mean years of Schooling', '6.5', '8.1', '5.2'],
            ['Infant Mortality Rate (per 1000)', '29.9', '7.4', '57.2'],
            ['Maternal Mortality Rate (per 1 Lakh)', '133', '29', '140'],
            ['Pop. below poverty line (%)', '21.9', '0.0', '24.3']
          ]
        }
      },
      {
        id: 'u8-v3',
        title: 'Strategy Summary',
        type: 'table',
        data: {
          headers: ['Economy', 'Leading Sector', 'Strategy'],
          rows: [
            ['China', 'Manufacturing', 'Export-led (SEZs)'],
            ['India', 'Services', 'IT/Software Outsourcing'],
            ['Pakistan', 'Services', 'Remittance-led Growth']
          ]
        }
      }
    ]
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
