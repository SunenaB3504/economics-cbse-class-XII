import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

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
          '**What:** The Aggregate Demand (AD) curve shows the total planned spending on domestic goods and services at different levels of national income.',
          '**Why:** To understand how much households (Consumption) and firms (Investment) intend to spend in the economy, which ultimately determines the production output.',
          '**How to understand:** Look at the X-axis (National Income, Y) and the Y-axis (Aggregate Demand, C + I). Notice the blue AD line doesn\'t start at zero; it starts higher on the Y-axis at autonomous spending (C_bar + I_bar). The upward slope shows that as income increases, people spend more based on their Marginal Propensity to Consume (MPC).',
          '**Importance in daily life:** It reflects collective consumer behavior. When we feel confident and spend more (buying cars, houses, appliances), AD increases, signaling businesses to produce more and hire more people, driving economic growth.'
        ]
      },
      {
        id: 'v-45-line',
        title: 'Figure 4.5: Aggregate Supply Curve (45-Degree Line)',
        type: 'image',
        data: { src: '/assets/images/ncert/context_2_fig_4_5_aggregate_supply.png', alt: 'Aggregate Supply 45-Degree Line' },
        aiExplanation: [
          '**What:** The 45-degree line represents Aggregate Supply (AS)—the total output produced in the economy.',
          '**Why:** It serves as a visual reference tool. By geometric rules, any point on a 45-degree line from the origin has equal X and Y coordinates. Therefore, on this line, Aggregate Supply exactly equals National Income (Y).',
          '**How to understand:** Imagine any point along that line and draw lines down to the X-axis and across to the Y-axis. The distances will be identical. This line visually plots the macroeconomic identity: whatever is produced (output) becomes someone\'s income.',
          '**Importance in daily life:** It\'s the "break-even" baseline of the economy. It helps economists gauge exactly where the economy is in balance. Without it, visualizing equilibrium would be practically impossible.'
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
          '**What:** This graph displays the point of Macroeconomic Equilibrium (Point E).',
          '**Why:** To find the optimal level of national income where there is neither excess production nor shortages. It\'s where the economy wants to settle.',
          '**How to understand:** Find the intersection (E) of the AD curve and the 45-degree AS line. At this exact point, total planned spending exactly matches total production. To the left of E (Income < Y*), demand is higher than supply (inventories drop, stimulating production). To the right of E, supply exceeds demand (inventories pile up, halting production).',
          '**Importance in daily life:** This is the underlying mechanism that causes economic booms and busts. If factories overproduce (right of E), they will eventually lay off workers until demand catches up, leading to a recession.'
        ]
      },
      {
        id: 'v-fixed-price-model',
        title: 'Figure 4.7: Equilibrium Output in Fixed Price Model',
        type: 'image',
        data: { src: '/assets/images/ncert/context_4_fig_4_7_equilibrium_fixed.png', alt: 'Changes in Equilibrium with shift in AD' },
        aiExplanation: [
          '**What:** The Fixed Price Model illustrates the Investment Multiplier effect when demand increases.',
          '**Why:** To demonstrate how a small initial injection of investment (ΔI) leads to a much larger final increase in national income (from Y1* to Y2*).',
          '**How to understand:** Look at the initial equilibrium E1. Now imagine firms decide to invest more (ΔI), shifting the AD1 curve straight up to AD2. The new intersection is now way out at E2. Notice that the horizontal distance between Y1* and Y2* is much longer than the vertical jump (ΔI) between the AD curves.',
          '**Importance in daily life:** This explains why governments spend billions on infrastructure during a recession. That initial spending creates jobs, those workers spend their new wages at local businesses, those business owners spend their profits, and the economy grows by a multiple of the initial investment.'
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
          '**What:** A downward shift of the AD curve, demonstrating the Paradox of Thrift.',
          '**Why:** It exposes a counter-intuitive economic reality: when *everyone* tries to save exactly at the same time, the economy shrinks and total savings might not actually increase at all.',
          '**How to understand:** Start at E1. Suddenly, the public becomes fearful of the future and saves more (consuming less). The Marginal Propensity to Consume drops, making the AD curve flatter (AD1 swings down to AD2). The new equilibrium (E2) is established at a much lower national income (Y2*).',
          '**Importance in daily life:** It teaches us that what makes sense for an individual (saving money during tough times) can be disastrous if society as a whole does it simultaneously. If nobody spends, businesses close, people lose their jobs, and overall incomes fall so far that absolute savings decline.'
        ]
      }
    ]
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
