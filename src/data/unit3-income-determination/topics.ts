
import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u3-t1',
    title: 'Aggregate Demand, Supply and Propensities',
    description: 'Core concepts of aggregate demand, aggregate supply, and the functional relationship between consumption, saving, and income.',
    content: [
      'Aggregate Demand (AD): The total value of final goods and services planned to be bought by all sectors (Households, Firms, Govt, External) at various income levels. AD = C + I (in two-sector model).',
      'Aggregate Supply (AS): Total money value of goods available for purchase, identical to National Income (Y). AS = C + S.',
      'Consumption Function (Propensity to Consume): Relationship between consumption and income. C = C_bar + bY.',
      'Autonomous vs Induced: C_bar is autonomous (income-independent); bY is induced (income-dependent).',
      'Average Propensity to Consume (APC) = C/Y. Marginal Propensity to Consume (MPC) = ΔC/ΔY.',
      'Saving Function: Derived from consumption. S = -C_bar + (1-b)Y.',
      'Propensity Identities: APC + APS = 1; MPC + MPS = 1.'
    ],
    visualizations: [
      {
        id: 'v-cons-curve',
        title: 'The Consumption Curve',
        type: 'process',
        data: [
          { title: 'Positive Intercept', description: 'Starts from C_bar on the Y-axis (Autonomous Consumption).' },
          { title: 'Upward Slope', description: 'Positive relationship between Income and Consumption (MPC).' },
          { title: 'Break-Even Point', description: 'Where C = Y. To the left, C > Y (Dissaving); to the right, C < Y (Saving).' }
        ]
      },
      {
        id: 'u3-v1-t1',
        title: 'Table 4.1: Aggregate Demand Schedule (C + I)',
        type: 'table',
        data: {
          headers: ['Income (Y)', 'Consumption (C)', 'Investment (I)', 'AD (C+I)'],
          rows: [
            ['0', '40', '20', '60'],
            ['100', '120', '20', '140'],
            ['200', '200', '20', '220'],
            ['300', '280', '20', '300'],
            ['400', '360', '20', '380']
          ]
        }
      },
      {
        id: 'v-ad-curve',
        title: 'Figure 4.1: Aggregate Demand Curve',
        type: 'image',
        data: { src: '/assets/images/ncert/unit3_fig_4_1_ad_curve.png', alt: 'Aggregate Demand Curve' },
        aiExplanation: [
          'Step 1: The X-axis represents National Income (Y), and the Y-axis holds the Aggregate Demand (C + I).',
          'Step 2: Notice the blue AD line does not start at zero. It starts higher on the Y-axis at (C_bar + I_bar). This is the autonomous spending that happens even at zero income.',
          'Step 3: The upward slope of the AD line demonstrates the Marginal Propensity to Consume (MPC)—as income goes up, people spend a constant fraction of that new income.'
        ]
      },
      {
        id: 'v-45-line',
        title: 'Figure 4.2: The 45-Degree Line (Aggregate Supply)',
        type: 'image',
        data: { src: '/assets/images/ncert/unit3_fig_4_2_45_degree_line.png', alt: '45-Degree Output Line' },
        aiExplanation: [
          'Step 1: The 45-degree line represents Aggregate Supply (AS) or total output in the economy.',
          'Step 2: Geometrically, any point on a 45-degree line has equal X and Y coordinates. This perfectly illustrates how the value of total output (AS) strictly equals National Income (Y).',
          'Step 3: Economists use this reference line to find equilibrium. Any point where a demand curve crosses this 45-degree line is a point where planned spending exactly equals total output (AD = Y)!'
        ]
      }
    ]
  },
  {
    id: 'u3-t2',
    title: 'Equilibrium and Investment Multiplier',
    description: 'Determination of income and the mechanism of the Investment Multiplier.',
    content: [
      'Equilibrium approaches: 1. AD = AS Approach. 2. S = I (Saving-Investment) Approach.',
      'Adjustment Process: If AD > AS, inventories fall, prompting producers to increase output until equality is restored.',
      'Investment Multiplier (k): Ratio of change in income to change in investment. k = ΔY / ΔI = 1 / (1 - MPC) = 1 / MPS.',
      'Multiplier Working: Initial ΔI creates ΔY, which triggers induced ΔC, which becomes another person\'s income, continuing the cycle.'
    ],
    visualizations: [
      {
        id: 'u3-v2-t1',
        title: 'Table 4.2: Macroeconomic Equilibrium (AD = AS)',
        type: 'table',
        data: {
          headers: ['Income/AS (Y)', 'AD (C+I)', 'Trend', 'Adjustment'],
          rows: [
            ['100', '140', 'AD > AS', 'Inventories fall, Output rises'],
            ['200', '220', 'AD > AS', 'Inventories fall, Output rises'],
            ['300', '300', 'AD = AS', 'Equilibrium (No change)'],
            ['400', '380', 'AD < AS', 'Inventories rise, Output falls']
          ]
        }
      },
      {
        id: 'v-ad-as-equilibrium',
        title: 'Figure 4.6: Equilibrium Income Determination (AD = AS)',
        type: 'image',
        data: { src: '/assets/images/ncert/unit3_fig_4_6_equilibrium.png', alt: 'Macroeconomic Equilibrium Graph' },
        aiExplanation: [
          'Step 1: The solid red line is the Aggregate Demand (AD) and the dashed line is the 45-degree Aggregate Supply (AS) reference line.',
          'Step 2: Locate point \'E\'. This is the Equilibrium point where the AD curve exactly crosses the 45-degree line. At this point, everything produced in the economy is planned to be bought.',
          'Step 3: Look to the left of E (Income < Y*): AD is physically higher than the 45-degree line. People are buying faster than factories produce. Inventories fall, triggering producers to boost output.',
          'Step 4: Look to the right of E (Income > Y*): The 45-degree line is higher than AD. Output exceeds planned spending. Inventories pile up, forcing producers to cut back production until income settles back down to Y*.'
        ]
      },
      {
        id: 'v-multiplier',
        title: 'The Multiplier Chain Reaction',
        type: 'table',
        data: {
          headers: ['Round', 'Δ Investment', 'Δ Income', 'Δ Consumption (MPC=0.8)'],
          rows: [
            ['Round 1', '1000', '1000', '800'],
            ['Round 2', '-', '800', '640'],
            ['Round 3', '-', '640', '512'],
            ['Total', '1000', '5000', '4000']
          ]
        }
      }
    ]
  },
  {
    id: 'u3-t3',
    title: 'Demand Gaps and Policy Measures',
    description: 'Problems of Excess and Deficient Demand and their corrections.',
    content: [
      'Full Employment: Everyone able/willing to work finds a job. Not necessarily 0% unemployment.',
      'Excess Demand (Inflationary Gap): AD > AS at full employment level. Leads to price rise.',
      'Deficient Demand (Deflationary Gap): AD < AS at full employment level. Leads to unemployment/output fall.',
      'Fiscal Tools: Govt Spending and Taxes. Correct inflation by decreasing spending/increasing taxes.',
      'Monetary Tools: Repo Rate, CRR, OMO. Correct deflation by decreasing rates/buying securities.'
    ],
    visualizations: [
      {
        id: 'v-saving-derive',
        title: 'Derivation of Saving Curve',
        type: 'process',
        data: [
          { title: 'Negative Intercept', description: 'Saving starts at -C_bar (Dissaving at zero income).' },
          { title: 'Slope', description: 'Determined by Marginal Propensity to Save (MPS).' },
          { title: 'Break-Even', description: 'S = 0 when C = Y. Corresponds to the point where C-curve crosses 45° line.' }
        ]
      }
    ]
  }
];
