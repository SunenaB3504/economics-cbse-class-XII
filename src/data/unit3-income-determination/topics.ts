
import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u3-t1',
    title: 'Aggregate Demand, Supply and Propensities',
    description: 'Core concepts of aggregate demand, aggregate supply, and the functional relationship between consumption, saving, and income.',
    content: [
      'Aggregate Demand (AD): The total value of final goods and services planned to be bought by all sectors (Households, Firms, Govt, External) at various income levels. AD = C + I (in two-sector model).',
      'Aggregate Supply (AS): Total money value of goods available for purchase, identical to National Income (Y). AS = C + S.',
      'Consumption Function (Propensity to Consume): Relationship between consumption and income. $C = \bar{C} + bY$.',
      'Autonomous vs Induced: $\bar{C}$ is autonomous (income-independent); $bY$ is induced (income-dependent).',
      'Average Propensity to Consume (APC) = C/Y. Marginal Propensity to Consume (MPC) = ΔC/ΔY.',
      'Saving Function: Derived from consumption. $S = -\bar{C} + (1-b)Y$.',
      'Propensity Identities: APC + APS = 1; MPC + MPS = 1.'
    ],
    visualizations: [
      {
        id: 'v-cons-curve',
        title: 'The Consumption Curve',
        type: 'process',
        data: [
          { title: 'Positive Intercept', description: 'Starts from $\bar{C}$ on the Y-axis (Autonomous Consumption).' },
          { title: 'Upward Slope', description: 'Positive relationship between Income and Consumption (MPC).' },
          { title: 'Break-Even Point', description: 'Where C = Y. To the left, C > Y (Dissaving); to the right, C < Y (Saving).' }
        ]
      },
      {
        id: 'v-ad-as',
        title: 'Aggregate Demand & 45° Line',
        type: 'grid',
        data: [
          { label: 'AD Curve', desc: 'Parallel to C-curve, shifted up by I (Autonomous Investment).' },
          { label: '45° Reference Line', desc: 'Line passing through origin where Y = AD (represents Aggregate Supply).' },
          { label: 'Ex-Ante AD', desc: 'Planned spending vs actual realized spending (Ex-Post).' }
        ]
      }
    ]
  },
  {
    id: 'u3-t2',
    title: 'Equilibrium and Investment Multiplier',
    description: 'Determination of income and the mechanism of the Investment Multiplier.',
    content: [
      'Equilibrium approaches: 1. $AD = AS$ Approach. 2. $S = I$ (Saving-Investment) Approach.',
      'Adjustment Process: If $AD > AS$, inventories fall, prompting producers to increase output until equality is restored.',
      'Investment Multiplier (k): Ratio of change in income to change in investment. $k = \Delta Y / \Delta I = 1 / (1 - MPC) = 1 / MPS$.',
      'Multiplier Working: Initial $\Delta I$ creates $\Delta Y$, which triggers induced $\Delta C$, which becomes another person\'s income, continuing the cycle.'
    ],
    visualizations: [
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
      'Excess Demand (Inflationary Gap): $AD > AS$ at full employment level. Leads to price rise.',
      'Deficient Demand (Deflationary Gap): $AD < AS$ at full employment level. Leads to unemployment/output fall.',
      'Fiscal Tools: Govt Spending and Taxes. Correct inflation by decreasing spending/increasing taxes.',
      'Monetary Tools: Repo Rate, CRR, OMO. Correct deflation by decreasing rates/buying securities.'
    ],
    visualizations: [
      {
        id: 'v-saving-derive',
        title: 'Derivation of Saving Curve',
        type: 'process',
        data: [
          { title: 'Negative Intercept', description: 'Saving starts at $-\bar{C}$ (Dissaving at zero income).' },
          { title: 'Slope', description: 'Determined by Marginal Propensity to Save (MPS).' },
          { title: 'Break-Even', description: 'S = 0 when C = Y. Corresponds to the point where C-curve crosses 45° line.' }
        ]
      }
    ]
  }
];
