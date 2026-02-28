import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u3-t1',
    title: 'Aggregate Demand, Aggregate Supply and Propensities',
    description: 'Core concepts of aggregate demand, aggregate supply, and the functional relationship between consumption, saving, and income.',
    content: [
      'Aggregate Demand (AD) — Definition: Aggregate Demand refers to the total value of final goods and services that all sectors of an economy are PLANNING to buy at a given level of income during an accounting year. The key word is "planned" — it is an ex-ante (intended), not ex-post (realised) concept. In a two-sector model: AD = C + I. In a four-sector (open) economy: AD = C + I + G + (X − M), where C = Private Final Consumption Expenditure, I = Investment Expenditure, G = Government Final Consumption Expenditure, X = Exports, M = Imports.',
      'Aggregate Supply (AS) — Definition: Aggregate Supply refers to the total money value of all final goods and services that all producers in an economy are willing and able to supply during an accounting year. Since everything that is produced generates income (wages, profits, rent, interest for the factors of production), Aggregate Supply is IDENTICAL to National Income (Y). Identity: AS = C + S (income is either consumed or saved). In equilibrium: AS = AD, which gives C + S = C + I, therefore S = I.',
      'Ex-Ante vs Ex-Post Distinction — A Crucial Difference: EX-ANTE values are PLANNED (intended) values — what economic agents EXPECT or PLAN to do at the START of the accounting period. Example: Ex-ante Saving = planned saving; Ex-ante Investment = planned investment. EX-POST values are ACTUAL (realised) values — what actually happened at the END of the accounting period. KEY RULE: Ex-ante Saving need NOT equal Ex-ante Investment (the economy moves toward equilibrium). But Ex-post Saving ALWAYS equals Ex-post Investment (by accounting identity — what is not consumed is either saved or invested). Exam trap: "Saving is always equal to Investment" — TRUE only for ex-post; FALSE for ex-ante.',
      'Consumption Function — The Core Equation: The Consumption Function describes the functional relationship between consumption (C) and income (Y). Linear Consumption Function: C = C̄ + bY, where C̄ = Autonomous Consumption (the intercept — consumption at zero income, financed by past savings/borrowing), b = Marginal Propensity to Consume (MPC — the slope), Y = National Income. AUTONOMOUS CONSUMPTION (C̄): Consumption that does NOT depend on income — even at zero income, people must eat, pay rent, etc. — they dis-save (draw from past savings or borrow). INDUCED CONSUMPTION (bY): Consumption that changes WITH income — as income rises, induced consumption rises proportionally at rate b (MPC).',
      'Dissaving — Below the Break-Even Point: When national income (Y) is BELOW the break-even point, consumption (C) exceeds income (C > Y). This means saving is NEGATIVE — called DISSAVING. People finance this excess consumption by: (a) drawing on past savings (depleting wealth), or (b) borrowing from others.',
      'Average Propensity to Consume (APC): APC = C/Y (ratio of total consumption to total income). Properties: (1) APC > 1 when C > Y (below break-even — dissaving occurs); (2) APC = 1 at the break-even point (C = Y, S = 0); (3) APC < 1 when C < Y (above break-even — saving is positive); (4) APC FALLS as income rises (because the autonomous component C̄ gets diluted over larger Y). APC cannot remain constant or rise indefinitely — it always falls as income rises.',
      'Marginal Propensity to Consume (MPC): MPC = ΔC/ΔY (ratio of CHANGE in consumption to CHANGE in income). Properties: (1) MPC is always between 0 and 1 (0 ≤ MPC ≤ 1). It CANNOT be greater than 1 because you cannot consume more than you additionally earn. It CANNOT be negative because people always consume some fraction of extra income. (2) MPC is constant along a linear consumption function (it equals the slope \'b\'). (3) Higher MPC → steeper consumption curve → LARGER MULTIPLIER.',
      'Saving Function — Derived from Consumption: Since Y = C + S → S = Y − C = Y − (C̄ + bY) = −C̄ + (1−b)Y. Saving Function: S = −C̄ + (1−b)Y = −C̄ + (MPS)Y, where −C̄ = autonomous saving (saving at zero income — negative, meaning dissaving), (1−b) = MPS = Marginal Propensity to Save (slope of saving function), Y = National Income. BREAK-EVEN POINT: Where S = 0 → −C̄ + MPS × Y = 0 → Y* = C̄/MPS.',
      'Average Propensity to Save (APS): APS = S/Y. Properties: (1) APS can be NEGATIVE (when C > Y, saving is negative — dissaving); (2) APS = 0 at break-even point (C = Y); (3) APS > 0 above break-even; (4) APS RISES as income rises.',
      'Marginal Propensity to Save (MPS): MPS = ΔS/ΔY. The slope of the saving function. Properties: (1) MPS = 1 − MPC; (2) MPS is always between 0 and 1; (3) Higher MPS → flatter consumption curve → SMALLER MULTIPLIER. IDENTITY: MPC + MPS = 1 (always — any additional income is either consumed or saved). Similarly: APC + APS = 1 (always).'
    ],
    visualizations: [
      {
        id: 'v-propensity-table',
        title: 'APC, MPC, APS, MPS — Formulas and Properties at a Glance',
        type: 'table',
        data: {
          headers: ['Propensity', 'Full Form', 'Formula', 'Range', 'Key Property'],
          rows: [
            ['APC', 'Average Propensity to Consume', 'C / Y', '>1, =1, or <1', 'FALLS as income rises; >1 at dissaving levels'],
            ['MPC', 'Marginal Propensity to Consume', 'ΔC / ΔY', '0 to 1', 'CANNOT exceed 1; constant on linear function; = slope b'],
            ['APS', 'Average Propensity to Save', 'S / Y', 'Can be negative', 'RISES as income rises; negative below break-even'],
            ['MPS', 'Marginal Propensity to Save', 'ΔS / ΔY', '0 to 1', 'MPS = 1 − MPC; slope of saving function'],
            ['—', 'IDENTITY 1', 'MPC + MPS = 1', 'Always', 'Every extra ₹1 of income is consumed or saved'],
            ['—', 'IDENTITY 2', 'APC + APS = 1', 'Always', 'All income is either consumed or saved']
          ]
        }
      },
      {
        id: 'v-cons-curve',
        title: 'The Consumption Curve — Key Points',
        type: 'process',
        data: [
          { title: 'Positive Y-Intercept (C̄)', description: 'Curve starts ABOVE origin at autonomous consumption C̄ — minimum consumption at zero income (financed by dissaving).' },
          { title: 'Upward Slope (MPC = b)', description: 'Positive relationship: as income rises, consumption rises. The slope equals MPC.' },
          { title: 'Break-Even Point (C = Y)', description: 'Where the C-curve crosses the 45° AS line. S = 0 here. Left of this: C > Y (Dissaving). Right: C < Y (Saving).' },
          { title: 'AD Curve = C + Ī', description: 'AD curve is parallel to C-curve, shifted UP by autonomous investment (Ī). The vertical gap between AD and C equals Ī (constant).' }
        ]
      },
      {
        id: 'u3-v1-t1',
        title: 'Aggregate Demand Schedule (Two-Sector: C + I)',
        type: 'table',
        data: {
          headers: ['Income/AS (Y)', 'Consumption (C)', 'Investment (I)', 'AD (C + I)', 'Saving (S = Y − C)', 'AD vs AS'],
          rows: [
            ['0', '40', '20', '60', '−40', 'AD > AS (output rises)'],
            ['100', '120', '20', '140', '−20', 'AD > AS (output rises)'],
            ['200', '200', '20', '220', '0', 'AD > AS (output rises)'],
            ['300', '280', '20', '300', '20', 'AD = AS → EQUILIBRIUM'],
            ['400', '360', '20', '380', '40', 'AD < AS (output falls)']
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
          '**How to understand:** Look at the X-axis (National Income, Y) and the Y-axis (Aggregate Demand, C + I). The AD line starts above origin at autonomous spending (C̄ + Ī). The upward slope reflects MPC — as income rises, consumption (and therefore AD) rises.',
          '**Importance in daily life:** It reflects collective consumer behavior. When households feel confident and spend more, AD increases, signaling businesses to produce more and hire more people, driving economic growth.'
        ]
      },
      {
        id: 'v-45-line',
        title: 'Figure 4.5: Aggregate Supply Curve (45-Degree Line)',
        type: 'image',
        data: { src: '/assets/images/ncert/context_2_fig_4_5_aggregate_supply.png', alt: 'Aggregate Supply 45-Degree Line' },
        aiExplanation: [
          '**What:** The 45-degree line represents Aggregate Supply (AS) — the total output = total income identity.',
          '**Why:** At any point on a 45° line, the Y-axis value equals the X-axis value. So AS (Y-axis) = National Income (X-axis) — illustrating that all output becomes income.',
          '**How to understand:** Any point on this line satisfies AS = Y. The equilibrium must lie on this line AND on the AD curve — the intersection is the equilibrium income.',
          '**Importance in daily life:** This line is the benchmark — the economy gravitates toward the point where actual spending matches actual output.'
        ]
      }
    ]
  },
  {
    id: 'u3-t2',
    title: 'Equilibrium Income Determination and Investment Multiplier',
    description: 'How national income is determined, two approaches to equilibrium, and the mechanism and working of the Investment Multiplier.',
    content: [
      'Equilibrium Income — The Concept: The equilibrium level of national income is the level at which the economy tends to settle — where there is no automatic tendency to change. At equilibrium, planned (ex-ante) spending equals planned output — so there is no accumulation or depletion of unintended inventories.',
      'Approach 1 — AD = AS Approach: Equilibrium is reached where Aggregate Demand (AD) = Aggregate Supply (AS), i.e., C + I = C + S → I = S. At this point, what firms plan to produce equals what all sectors plan to spend — no involuntary inventory changes occur.',
      'Approach 2 — Saving-Investment (S = I) Approach: Equilibrium is also determined where planned saving (ex-ante S) = planned investment (ex-ante I). If Ex-ante S > Ex-ante I: Aggregate Demand < Aggregate Supply → unsold goods pile up as UNINTENDED INVENTORIES → firms reduce production next period → income FALLS → saving falls → equilibrium restored when S = I. If Ex-ante S < Ex-ante I: Aggregate Demand > Aggregate Supply → inventories are depleted → firms increase production → income RISES → saving rises → equilibrium restored when S = I.',
      'Effective Demand — Keynes\'s Key Concept: Effective Demand is the level of Aggregate Demand (AD) that actually becomes effective — because it is exactly matched by Aggregate Supply (AS). It is the equilibrium point. Keynes argued that the economy reaches equilibrium at the level of Effective Demand — which may be BELOW the full employment level. This is the key Keynesian insight: the economy can be trapped in equilibrium below full employment.',
      'Autonomous Investment vs Induced Investment: AUTONOMOUS INVESTMENT: Investment that is INDEPENDENT of the level of national income — it does not change as income changes. It is made primarily for social welfare and public goods — by governments (schools, roads, hospitals). Autonomous investment is assumed CONSTANT in the basic model → shown as a horizontal line in the investment function. INDUCED INVESTMENT: Investment that VARIES WITH income — as income rises, firms invest more (expecting higher future demand). In the basic two-sector model, we assume all private investment is autonomous (horizontal line) for simplicity.',
      'The Investment Multiplier (k) — Definition: The Investment Multiplier (k) measures the ratio of the change in equilibrium national income (ΔY) to the initial change in autonomous investment (ΔI) that caused it. Formula: k = ΔY / ΔI = 1 / (1 − MPC) = 1 / MPS. The multiplier tells us: for every ₹1 increase in autonomous investment, national income increases by ₹k. If MPC = 0.8 → k = 1/(1−0.8) = 1/0.2 = 5 → ₹100 crore investment → ₹500 crore income increase.',
      'The Multiplier — Working through Rounds: The chain reaction by which a ₹1 investment becomes ₹k of income: Round 1: Government spends ₹100 crore → roads are built → workers and firms receive ₹100 crore as income → of this, MPC (0.8) fraction spent → ΔC = ₹80 crore. Round 2: The ₹80 crore becomes income for shop owners, cement sellers → they spend 0.8 × ₹80 = ₹64 crore. Round 3: ₹64 crore → ₹51.2 crore spent. … This is a geometric series: Total ΔY = ΔI × (1 + MPC + MPC² + MPC³ + …) = ΔI × 1/(1−MPC) = ΔI × k. The chain continues infinitely, with each round being smaller, until the total adds up to ΔI × k.',
      'Multiplier Range: Minimum value of multiplier = 1 (when MPC = 0 — no induced spending — income does not propagate). Maximum value = ∞ (when MPC = 1 — all income is spent, none saved — chain never ends). In reality: 1 < k < ∞. Higher MPC → Higher multiplier → More powerful government spending effect. Direct relationship: Multiplier ↑ as MPC ↑. Inverse relationship: Multiplier ↑ as MPS ↓.'
    ],
    visualizations: [
      {
        id: 'u3-v2-t1',
        title: 'Macroeconomic Equilibrium Schedule — AD = AS and S = I',
        type: 'table',
        data: {
          headers: ['Income/AS (Y)', 'AD (C + I)', 'AD vs AS', 'Saving (S)', 'Investment (I)', 'S vs I'],
          rows: [
            ['100', '140', 'AD > AS → Output rises', '−20', '20', 'S < I → Output rises'],
            ['200', '220', 'AD > AS → Output rises', '0', '20', 'S < I → Output rises'],
            ['300', '300', 'AD = AS → EQUILIBRIUM ✅', '20', '20', 'S = I → EQUILIBRIUM ✅'],
            ['400', '380', 'AD < AS → Output falls', '40', '20', 'S > I → Output falls']
          ]
        }
      },
      {
        id: 'v-multiplier',
        title: 'Investment Multiplier Chain Reaction (MPC = 0.8, ΔI = ₹1,000)',
        type: 'table',
        data: {
          headers: ['Round', 'Change in Investment (ΔI)', 'Change in Income (ΔY)', 'Change in Consumption (ΔC = 0.8 × ΔY)', 'Change in Saving (ΔS = 0.2 × ΔY)'],
          rows: [
            ['Round 1', '1,000', '1,000', '800', '200'],
            ['Round 2', '0', '800', '640', '160'],
            ['Round 3', '0', '640', '512', '128'],
            ['Round 4', '0', '512', '409.6', '102.4'],
            ['… continuing', '…', '…', '…', '…'],
            ['TOTAL', '1,000', '5,000 (= 1,000 × 1/0.2)', '4,000', '1,000']
          ]
        }
      },
      {
        id: 'v-multiplier-range',
        title: 'Multiplier Range — MPC, MPS and k',
        type: 'table',
        data: {
          headers: ['MPC', 'MPS (= 1 − MPC)', 'Multiplier k (= 1/MPS)', 'Interpretation'],
          rows: [
            ['0', '1', '1 (Minimum)', 'No induced spending — ₹100 investment = ₹100 income only'],
            ['0.5', '0.5', '2', '₹100 investment → ₹200 income'],
            ['0.8', '0.2', '5', '₹100 investment → ₹500 income'],
            ['0.9', '0.1', '10', '₹100 investment → ₹1,000 income'],
            ['1', '0', '∞ (Maximum)', 'All income spent — chain never ends (theoretical)']
          ]
        }
      },
      {
        id: 'v-ad-as-equilibrium',
        title: 'Figure 4.6: Equilibrium Income Determination (AD = AS)',
        type: 'image',
        data: { src: '/assets/images/ncert/context_3_fig_4_6_equilibrium.png', alt: 'Macroeconomic Equilibrium Graph' },
        aiExplanation: [
          '**What:** This graph shows Point E — the equilibrium where the AD curve crosses the 45° AS line.',
          '**Why:** At E, total planned spending equals total production — no tendency to change. To left of E: AD > AS, inventories fall → output rises. To right: AS > AD, inventories pile up → output falls.',
          '**How to understand:** The economy automatically moves toward E via inventory adjustment.',
          '**Importance:** This mechanism causes economic cycles — when consumer confidence falls (AD falls), the economy moves left, causing unemployment. Policy must shift AD back up.'
        ]
      },
      {
        id: 'v-fixed-price-model',
        title: 'Figure 4.7: Multiplier Effect — Shift in Equilibrium',
        type: 'image',
        data: { src: '/assets/images/ncert/context_4_fig_4_7_equilibrium_fixed.png', alt: 'Changes in Equilibrium with shift in AD' },
        aiExplanation: [
          '**What:** Shows how ΔI shifts AD1 → AD2, moving equilibrium from E1 (Y1*) to E2 (Y2*).',
          '**Why:** Demonstrates the multiplier — the income increase (Y2* − Y1*) is LARGER than the investment increase (gap between AD curves).',
          '**How to understand:** The horizontal distance ΔY is much longer than the vertical shift ΔI. The ratio ΔY/ΔI = multiplier k.',
          '**Real-life example:** Government spends ₹100 crore on highways → construction workers earn income → they spend at shops → shopkeepers earn → total income rises by ₹500 crore (if k = 5).'
        ]
      }
    ]
  },
  {
    id: 'u3-t3',
    title: 'Employment, Demand Gaps and Policy Corrections',
    description: 'Full employment, types of unemployment, excess and deficient demand, and the fiscal and monetary tools to correct demand gaps.',
    content: [
      'Full Employment — Keynesian Definition: Full Employment is a situation where ALL individuals who are able and willing to work at the prevailing wage rate can find employment without undue difficulty. KEY NUANCE: Full employment does NOT mean zero unemployment — even at full employment, some STRUCTURAL unemployment (people between jobs due to skill mismatches) and FRICTIONAL unemployment (people temporarily between jobs) can exist. What full employment ELIMINATES is INVOLUNTARY unemployment.',
      'Involuntary Unemployment: A situation where workers are ABLE and WILLING to work at the prevailing wage rate but are UNABLE to find jobs — purely because there is insufficient Aggregate Demand in the economy. This is the type of unemployment Keynes explained — it arises from deficient demand, not from workers being lazy or unskilled. It is the main policy target of Keynesian economics.',
      'Voluntary Unemployment: A situation where workers are NOT willing to work at the prevailing wage rate even though jobs are available — they prefer leisure or expect higher wages. Not a policy concern — it is a personal choice.',
      'Excess Demand (Inflationary Gap): Excess Demand occurs when AD > AS at the FULL EMPLOYMENT level of output. Since the economy is already at full capacity (cannot produce more), the excess demand does NOT increase real output — instead it pushes UP the general PRICE LEVEL (Inflation). INFLATIONARY GAP = the amount by which actual AD exceeds the AD required to maintain full employment equilibrium. Causes: (1) Rise in government expenditure; (2) Rise in exports; (3) Reduction in taxes → more disposable income; (4) Rise in money supply → more spending.',
      'Deficient Demand (Deflationary Gap): Deficient Demand occurs when AD < AS at the full employment level. There is insufficient demand to buy all the goods being produced → UNINTENDED INVENTORIES pile up → producers cut production → unemployment rises → income falls. DEFLATIONARY GAP = the amount by which actual AD is BELOW the AD needed for full employment. Causes: (1) Fall in private consumption; (2) Rise in taxes; (3) Fall in government spending; (4) Rise in saving (Paradox of Thrift); (5) Fall in exports.',
      'Paradox of Thrift: If ALL households simultaneously decide to save MORE (spend less), the Aggregate Demand in the economy FALLS. This leads to: lower production → lower employment → lower income → LOWER total savings (despite each individual saving a higher fraction). The paradox: what is rational for an individual (saving more) is irrational for society as a whole (collective saving MORE reduces total income, and thus total savings may not rise). This was Keynes\'s argument for why government intervention is needed in a recession — if everyone is saving (not spending), the government must spend to fill the gap.',
      'Measures to Correct Excess Demand (Over-heating/Inflation): FISCAL POLICY measures: (a) INCREASE TAXES — reduces household disposable income → reduces private consumption (C falls) → AD falls; (b) DECREASE GOVERNMENT EXPENDITURE (G) — directly reduces one component of AD; (c) REDUCE GOVERNMENT TRANSFER PAYMENTS (pensions, subsidies) — less income for households → less consumption. MONETARY POLICY measures: (d) INCREASE REPO RATE — banks borrow less from the Reserve Bank of India → bank lending rates rise → households and firms borrow less → investment (I) and consumption on credit (C) falls → AD falls; (e) INCREASE CASH RESERVE RATIO (CRR) / STATUTORY LIQUIDITY RATIO (SLR) — banks have less to lend → credit contracts → less spending; (f) OPEN MARKET OPERATIONS — Reserve Bank of India SELLS government securities → bank reserves fall → less lending → AD falls.',
      'Measures to Correct Deficient Demand (Recession/Deflation): FISCAL POLICY measures: (a) DECREASE TAXES — more disposable income → higher consumption → AD rises; (b) INCREASE GOVERNMENT EXPENDITURE (G) — direct injection into AD with multiplier effect; (c) DEFICIT FINANCING — government borrows (or prints money) to fund spending beyond tax revenue; this is especially powerful in recession as it injects new purchasing power. MONETARY POLICY measures: (d) DECREASE REPO RATE — cheaper for banks to borrow → banks lower lending rates → more investment and consumption → AD rises; (e) DECREASE CASH RESERVE RATIO (CRR) / STATUTORY LIQUIDITY RATIO (SLR) — banks have more to lend → credit expands → more spending; (f) OPEN MARKET OPERATIONS — Reserve Bank of India BUYS government securities from banks → banks receive cash → more funds available for lending → credit expands → AD rises.',
      'Deficit Financing — A Specific Fiscal Tool: Deficit Financing refers to the government financing its budget deficit by either (a) borrowing from the public (issuing government bonds — does not directly create new money but may crowd out private investment), or (b) printing new currency / borrowing from the Reserve Bank of India (creates new money directly — more inflationary but powerful in deep recessions). Deficit financing increases the money supply and injects purchasing power into the economy when private sector spending is inadequate. Used carefully during recessions; excess deficit financing causes inflation.',
      'Fiscal Policy — Definition: Fiscal Policy is the government\'s deliberate use of its TAXATION, PUBLIC EXPENDITURE (government spending), and PUBLIC BORROWING to achieve macroeconomic objectives — stable prices, full employment, and economic growth. CONTRACTIONARY FISCAL POLICY (to fight inflation): Raise taxes + Reduce government spending (Budget Surplus). EXPANSIONARY FISCAL POLICY (to fight recession): Cut taxes + Raise government spending (Budget Deficit).'
    ],
    visualizations: [
      {
        id: 'v-employment-types',
        title: 'Types of Unemployment',
        type: 'table',
        data: {
          headers: ['Type', 'Definition', 'Cause', 'Policy Solution'],
          rows: [
            ['Involuntary Unemployment', 'Willing and able to work at prevailing wage but no job found', 'Insufficient Aggregate Demand in economy', 'Expand AD via fiscal (↑G, ↓T) and monetary (↓Repo Rate) policy'],
            ['Voluntary Unemployment', 'Unwilling to work at prevailing wage even though jobs available', 'Personal choice — expect higher wages or prefer leisure', 'Not a macroeconomic policy concern'],
            ['Structural Unemployment', 'Skills don\'t match available jobs', 'Technological change, structural shifts in economy', 'Skill training, education, retraining programmes'],
            ['Frictional Unemployment', 'Between jobs — searching for new employment', 'Normal job market transitions', 'Better job-matching services; not eliminated by AD policy']
          ]
        }
      },
      {
        id: 'v-demand-gaps',
        title: 'Excess Demand vs Deficient Demand — Complete Comparison',
        type: 'table',
        data: {
          headers: ['Feature', 'Excess Demand (Inflationary Gap)', 'Deficient Demand (Deflationary Gap)'],
          rows: [
            ['Situation', 'AD > AS at full employment level', 'AD < AS at full employment level'],
            ['Effect on Output', 'No rise in output (already at full capacity)', 'Output falls (producers cut back due to unsold goods)'],
            ['Effect on Prices', 'Prices RISE — Inflation', 'Prices FALL — Deflation'],
            ['Effect on Employment', 'Already at full employment', 'Employment FALLS — recession'],
            ['Effect on Inventories', 'Unintended DEPLETION of inventories', 'Unintended ACCUMULATION of inventories'],
            ['Fiscal Correction', '↑ Taxes + ↓ Government Expenditure (Budget Surplus)', '↓ Taxes + ↑ Government Expenditure + Deficit Financing'],
            ['Monetary Correction', '↑ Repo Rate + ↑ CRR + RBI sells securities (Open Market Operations)', '↓ Repo Rate + ↓ CRR + RBI buys securities (Open Market Operations)']
          ]
        }
      },
      {
        id: 'v-saving-derive',
        title: 'Saving Function — Key Points',
        type: 'process',
        data: [
          { title: 'Negative Y-Intercept (−C̄)', description: 'Saving starts at −C̄ on Y-axis — at zero income, saving is negative (dissaving equal to autonomous consumption C̄).' },
          { title: 'Upward Slope (MPS)', description: 'Slope of saving curve = Marginal Propensity to Save (MPS) = 1 − MPC. As income rises, saving rises.' },
          { title: 'Break-Even Point (S = 0)', description: 'S = 0 corresponds to the break-even on the consumption curve (where C = Y). Y* = C̄/MPS at this point.' },
          { title: 'Positive Saving Zone', description: 'To the right of break-even: S > 0 (income exceeds consumption). APS rises.' }
        ]
      },
      {
        id: 'v-paradox-thrift',
        title: 'Figure 4.8: Paradox of Thrift',
        type: 'image',
        data: { src: '/assets/images/ncert/context_5_fig_4_8_paradox_thrift.png', alt: 'Paradox of Thrift Graph' },
        aiExplanation: [
          '**What:** Shows that when all households save MORE (spend less), equilibrium income falls from Y1* to Y2* — and total actual savings may not increase.',
          '**Why:** Demonstrates that individual rationality ≠ collective rationality. If everyone saves instead of spends, businesses lose revenue → cut production → lay off workers → incomes fall → people save even less in absolute terms.',
          '**How to understand:** AD1 shifts down to AD2 (everyone consumes less). New equilibrium E2 is at lower income Y2*. The Saving curve shifts up, but the new equilibrium saving at E2 equals investment (= same as before). Total savings unchanged — but income is lower.',
          '**Real-life example:** COVID-19 recession — fear caused everyone to cut spending → shops shut → workers unemployed → incomes fell → total economic activity collapsed. Government stimulus (AD injection) was needed to break the cycle.'
        ]
      }
    ]
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
