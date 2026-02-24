
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
        title: 'Figure 4.4: Aggregate Demand Curve',
        type: 'image',
        data: { src: '/assets/images/ncert/context_1_fig_4_4_aggregate_demand.png', alt: 'Aggregate Demand Curve' },
        aiExplanation: [
          'Step 1: The X-axis represents National Income (Y), and the Y-axis holds the Aggregate Demand (C + I).',
          'Step 2: Notice the blue AD line (C+I). It is obtained by vertically adding the Consumption (C) curve and the constant Investment (I = I_bar) line.',
          'Step 3: The upward slope of the AD line mirrors the slope of the consumption curve, which represents the Marginal Propensity to Consume (MPC).'
        ]
      },
      {
        id: 'v-45-line',
        title: 'Figure 4.5: Aggregate Supply Curve (45-Degree Line)',
        type: 'image',
        data: { src: '/assets/images/ncert/context_2_fig_4_5_aggregate_supply.png', alt: 'Aggregate Supply 45-Degree Line' },
        aiExplanation: [
          'Step 1: The 45-degree line represents Aggregate Supply (AS) or total output in the economy.',
          'Step 2: Geometrically, any point on a 45-degree line has equal X and Y coordinates. This illustrates how the value of total output (AS) strictly equals National Income (Y).',
          'Step 3: Any point where a demand curve crosses this 45-degree line is a point where planned spending exactly equals total output (AD = Y).'
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
        data: { src: '/assets/images/ncert/context_3_fig_4_6_equilibrium.png', alt: 'Macroeconomic Equilibrium Graph' },
        aiExplanation: [
          'Step 1: The solid line is the Aggregate Demand (AD) and the line originating from the origin is the 45-degree reference line.',
          'Step 2: Locate point \'E\'. This is the Equilibrium point where the AD curve exactly crosses the 45-degree line. At this point, everything produced in the economy is planned to be bought.',
          'Step 3: Look to the left of E: AD is physically higher than the 45-degree line. People are buying faster than factories produce. Inventories fall, triggering producers to boost output.',
          'Step 4: Look to the right of E: The 45-degree line is higher than AD. Output exceeds planned spending. Inventories pile up, forcing producers to cut back production.'
        ]
      },
      {
        id: 'v-fixed-price-model',
        title: 'Figure 4.7: Equilibrium Output in Fixed Price Model',
        type: 'image',
        data: { src: '/assets/images/ncert/context_4_fig_4_7_equilibrium_fixed.png', alt: 'Changes in Equilibrium with shift in AD' },
        aiExplanation: [
          'Step 1: An initial equilibrium exists at E1, where AD1 intersects the 45-degree line at income level Y1*.',
          'Step 2: Suppose there is an autonomous increase in investment (ΔI). The entire AD curve shifts upwards parallel to itself, from AD1 to AD2.',
          'Step 3: The new equilibrium is established at E2, yielding a much higher national income Y2*.',
          'Step 4: This perfectly illustrates the Investment Multiplier effect—the final increase in income (from Y1* to Y2*) is far greater than the initial vertical jump in investment (ΔI).'
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
      },
      {
        id: 'v-paradox-thrift',
        title: 'Figure 4.8: Paradox of Thrift',
        type: 'image',
        data: { src: '/assets/images/ncert/context_5_fig_4_8_paradox_thrift.png', alt: 'Paradox of Thrift Graph' },
        aiExplanation: [
          'Step 1: The economy is initially in equilibrium at E1 where the AD1 line crosses the 45-degree line at income level Y1.',
          'Step 2: People suddenly decide to be thrifty and save more. This means they consume less, causing the slope of the AD curve (the MPC) to become flatter. The curve swings downwards from AD1 to AD2.',
          'Step 3: This downward shift creates a new equilibrium at E2, which corresponds to a lower national income Y2.',
          'Step 4: The Paradox: By trying to save *more*, people reduce total demand. Factories produce less, incomes fall, until total absolute savings actually end up dropping or staying identical at a much poorer income level!'
        ]
      }
    ]
  }
];
