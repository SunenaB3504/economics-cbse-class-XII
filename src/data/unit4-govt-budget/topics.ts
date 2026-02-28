import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u4-t1',
    title: 'Meaning, Objectives and Types of Government Budget',
    description: 'Definition of the annual budget, its primary socio-economic functions, and the three types of budget based on deficit/surplus.',
    content: [
      'Government Budget — Definition: The Government Budget is an annual financial statement showing item-wise estimates of expected REVENUE (receipts) and anticipated EXPENDITURE (spending) of the government during a fiscal year (April 1 to March 31 in India). It is presented in the Parliament (Union Budget) or State Legislature. The budget is not just an accounting document — it is the government\'s primary instrument of Fiscal Policy.',
      'Fiscal Year in India: April 1 to March 31 of the following year. Example: Fiscal Year 2024-25 runs from April 1, 2024 to March 31, 2025.',
      'Objective 1 — Reallocation of Resources (Allocation Function): The free market allocates resources based on profit motive — it provides goods/services that are profitable. But some goods (PUBLIC GOODS like national defence, streetlights, lighthouses) are NEVER provided by private firms because they are NON-EXCLUDABLE and NON-RIVALROUS. The government budget fills this gap by allocating resources to public goods through taxation and government expenditure. Additionally, the government uses subsidies to encourage socially desirable but less profitable activities (e.g., subsidised fertilisers for farmers) and heavy taxes to DISCOURAGE harmful activities (e.g., high excise on tobacco, alcohol — "sin taxes").',
      'Public Goods — Non-Rivalrous and Non-Excludable: PUBLIC GOODS have two special characteristics that make markets fail: (1) NON-RIVALROUS: One person\'s consumption does NOT reduce the amount available for others. Example: A lighthouse — one ship using its signal does not reduce its signal for other ships. (2) NON-EXCLUDABLE: Once provided, it is IMPOSSIBLE to prevent non-payers from benefiting. Example: National defence — once the military defends the nation, it defends ALL citizens, including those who pay no taxes.',
      'The Free Rider Problem: Because public goods are non-excludable, rational individuals will try to consume them WITHOUT PAYING — hoping others will fund them. This is the FREE RIDER PROBLEM. If everyone free rides, no one pays, and the good is not provided at all. This is a classic MARKET FAILURE — private markets will UNDER-PROVIDE or not provide public goods. Solution: Government provides public goods funded by compulsory taxation.',
      'Objective 2 — Redistribution of Income and Wealth: Unregulated markets tend to concentrate income in the hands of a few. The budget redistributes income through: (a) PROGRESSIVE TAXATION — higher incomes taxed at higher rates (e.g., Income Tax in India — 5% for ₹3-6 lakhs, 30% for ₹15+ lakhs) → reduces inequality. (b) SUBSIDIES AND WELFARE TRANSFERS — free/subsidised food (Public Distribution System), healthcare, education for the poor → raises real income of lower groups.',
      'Objective 3 — Stabilisation Function: The government uses its budget to stabilise the economy against booms (inflation) and busts (recession): During INFLATION (excess demand): CONTRACTIONARY FISCAL POLICY — Reduce Government Expenditure (G) + Increase Taxes (T) → Aggregate Demand falls → inflationary pressure eases. During RECESSION (deficient demand): EXPANSIONARY FISCAL POLICY — Increase Government Expenditure (G) + Reduce Taxes (T) → Aggregate Demand rises → unemployment falls. This active management of Aggregate Demand through the budget was Keynes\'s key contribution — replacing the laissez-faire view that economies self-correct.',
      'Types of Budget — Balanced, Surplus, and Deficit: BALANCED BUDGET: Total Estimated Receipts = Total Estimated Expenditure. Classical economists preferred this. Limitation: Restricts government\'s ability to respond to economic crises. SURPLUS BUDGET: Estimated Receipts > Estimated Expenditure. Appropriate during INFLATION — reduces Aggregate Demand. Rare in practice. DEFICIT BUDGET: Estimated Expenditure > Estimated Receipts. Appropriate during RECESSION — government spends more than it earns, financed by borrowing. Most common in practice in India. A deficit budget increases money supply and stimulates Aggregate Demand.'
    ],
    visualizations: [
      {
        id: 'u4-v1',
        title: 'Three Objectives of the Government Budget',
        type: 'table',
        data: {
          headers: ['Objective', 'Function', 'Mechanism', 'Indian Example'],
          rows: [
            ['Reallocation of Resources', 'Correct market failure — provide public goods', 'Tax harmful goods; subsidise social goods; fund public goods', 'MNREGA, National Defence, National Highways'],
            ['Redistribution of Income', 'Reduce inequality', 'Progressive taxation; welfare transfers and subsidies', 'Income Tax slabs; PM-KISAN, food subsidies'],
            ['Economic Stabilisation', 'Prevent boom-bust cycles', 'Expansionary budget in recession; contractionary in inflation', '2020 COVID stimulus package; 2010s fiscal consolidation']
          ]
        }
      },
      {
        id: 'u4-v1b',
        title: 'Three Types of Budget',
        type: 'table',
        data: {
          headers: ['Type', 'Condition', 'When Used', 'Effect on Economy'],
          rows: [
            ['Balanced Budget', 'Receipts = Expenditure', 'Theory only — rarely in practice', 'No stimulus or contraction; neutral'],
            ['Surplus Budget', 'Receipts > Expenditure', 'During Inflation (Excess Demand)', 'Reduces Aggregate Demand; fights inflation'],
            ['Deficit Budget', 'Expenditure > Receipts (gap filled by borrowing)', 'During Recession / Deficient Demand', 'Increases Aggregate Demand; fights unemployment']
          ]
        }
      },
      {
        id: 'u4-v1c',
        title: 'Public Goods vs Private Goods',
        type: 'table',
        data: {
          headers: ['Feature', 'Public Goods', 'Private Goods'],
          rows: [
            ['Rivalry', 'NON-RIVALROUS — one person\'s use doesn\'t reduce availability', 'RIVALROUS — if you eat the apple, others cannot'],
            ['Excludability', 'NON-EXCLUDABLE — cannot prevent non-payers from benefiting', 'EXCLUDABLE — can be withheld from those who don\'t pay'],
            ['Free Rider Problem', 'YES — people benefit without paying → underprovision', 'NO — non-payment means no access'],
            ['Provider', 'Government (funded by compulsory taxation)', 'Private firms (funded by market prices)'],
            ['Examples', 'National Defence, Streetlights, Lighthouses, Public Parks', 'Food, Clothing, Cars, Mobile phones']
          ]
        }
      }
    ]
  },
  {
    id: 'u4-t2',
    title: 'Classification of Budget — Receipts and Expenditure',
    description: 'The complete hierarchical breakdown of government receipts and expenditure into revenue and capital components, with all sub-types.',
    content: [
      'The Two Sides of the Budget: The Government Budget has two sides: (1) RECEIPTS (sources of funds — what the government earns/borrows) and (2) EXPENDITURE (uses of funds — what the government spends). Each side is further divided into REVENUE and CAPITAL. The golden test: Revenue items do NOT change long-term asset or liability positions; Capital items DO.',
      'REVENUE RECEIPTS — what they are: Revenue Receipts are those government receipts that NEITHER create a liability NOR cause a reduction in government assets. They are regular, recurring income. The government does not owe back money for revenue receipts and does not lose any asset in receiving them. Sources: (a) TAX REVENUE; (b) NON-TAX REVENUE.',
      'Tax Revenue: Tax revenue is compulsory monetary contributions received by government from taxpayers. Two broad categories: (1) DIRECT TAXES: Taxes where the burden CANNOT be shifted to others — the person who pays IS the person who bears the burden. Example: Income Tax, Corporate Tax (Corporation Tax), Wealth Tax. (2) INDIRECT TAXES: Taxes where the burden CAN BE SHIFTED from the producer/seller to the final consumer through price mechanism. Example: Goods and Services Tax (GST — replaced Excise Duty, Value Added Tax, and Service Tax in 2017), Customs Duty (on imports/exports). When a firm pays GST on a product, it adds the tax to the price — so the consumer ultimately pays.',
      'Types of Tax by Rate Structure — Progressive, Regressive, Proportional: PROGRESSIVE TAX: The tax RATE INCREASES as income increases — higher earners pay a larger percentage. Most equitable. Example: India\'s Income Tax slabs (5% up to ₹6 lakh → 20% → 30% above ₹15 lakh). REGRESSIVE TAX: The tax RATE DECREASES as income rises — lower incomes pay a higher proportion. Considered inequitable. Often indirect taxes are regressive — a poor person and rich person pay the same GST on rice, but it is a higher share of the poor person\'s income. PROPORTIONAL TAX: The SAME RATE is charged at all income levels — a flat rate. Example: A flat 20% corporate tax. Neither progressive nor regressive.',
      'Types of Tax by Levy — Specific Tax and Ad Valorem Tax: SPECIFIC TAX: Levied per unit of quantity — based on weight, size, number. Example: ₹5 per kg of sugar. Does not depend on price. AD VALOREM TAX: Levied as a percentage of the VALUE of the commodity. Example: 18% GST on electronics. Rises with price inflation automatically.',
      'Non-Tax Revenue: Revenue received by government from sources OTHER than taxes. Major sources: (a) Fees and Fines — court fees, parking fines, electricity board charges; (b) Interest receipts — interest on loans given by central government to State Governments or public sector companies; (c) Dividends and Profits — profits from Public Sector Undertakings (PSUs) like Indian Railways, ONGC, LIC; (d) Grants — unilateral transfers received by the Indian government from international organisations (like World Bank, International Monetary Fund) or foreign governments; (e) Escheat — income from property of persons who die without any legal heir (their property passes to the government).',
      'CAPITAL RECEIPTS — what they are: Capital Receipts are government receipts that EITHER create a liability (borrowings — must be repaid) OR cause a reduction in government assets (selling assets). They are non-recurring. Sources: (a) BORROWINGS — from Reserve Bank of India, public (through bonds), foreign governments, international institutions → creates a FUTURE LIABILITY (must be repaid with interest); (b) DISINVESTMENT — sale of government equity in Public Sector Undertakings (PSUs) like BPCL, Air India → reduces a government ASSET; (c) RECOVERY OF LOANS — when the government receives back loans previously given to State Governments or PSUs → reduces a financial asset (debtors). EXAM RULE: Borrowing = Capital Receipt (creates liability). Recovery of loans = Capital Receipt (reduces asset). Dividends from PSUs = Revenue Receipt (not affecting assets).',
      'REVENUE EXPENDITURE: Expenditure that NEITHER creates an asset NOR reduces a liability. It is recurrent — happens every year. Examples: Salaries and Pensions of government employees, interest payments on past borrowings (largest single item), subsidies (food, fertiliser, fuel), grants to State governments for current use, spending on day-to-day administration.',
      'CAPITAL EXPENDITURE: Expenditure that EITHER creates an asset OR reduces a liability. Non-recurrent — long-term. Examples: Construction of roads, bridges, highways, hospitals, schools (creates assets); Purchase of machinery for public sector companies; Loans given to State governments or foreign governments (creates a financial asset — debtors); Repayment of past loans (reduces a liability). EXAM RULE: Asset created = Capital Expenditure. Liability reduced = Capital Expenditure.'
    ],
    visualizations: [
      {
        id: 'u4-v2-t1',
        title: 'Complete Budget Classification — The Taxonomy',
        type: 'table',
        data: {
          headers: ['Category', 'Sub-Type', 'Items Included', 'Asset/Liability Effect'],
          rows: [
            ['REVENUE RECEIPTS', 'Tax Revenue', 'Income Tax, Corporate Tax, Goods and Services Tax (GST), Customs Duty', 'No asset/liability change'],
            ['REVENUE RECEIPTS', 'Non-Tax Revenue', 'Fees, Fines, Interest from states, PSU dividends, Grants, Escheat', 'No asset/liability change'],
            ['CAPITAL RECEIPTS', 'Borrowings', 'Borrowings from RBI, Market borrowings (bonds), External loans', 'Creates LIABILITY (must be repaid)'],
            ['CAPITAL RECEIPTS', 'Disinvestment', 'Sale of PSU equity (e.g., BPCL, Air India)', 'Reduces ASSET (government shareholding)'],
            ['CAPITAL RECEIPTS', 'Recovery of Loans', 'Loan repayments received back from States/PSUs', 'Reduces ASSET (debtors)'],
            ['REVENUE EXPENDITURE', '—', 'Salaries, Pensions, Interest payments, Subsidies, Admin expenses', 'No asset/liability change'],
            ['CAPITAL EXPENDITURE', '—', 'Building highways, hospitals; Loan repayments; Loans to states', 'Creates ASSET or Reduces LIABILITY']
          ]
        }
      },
      {
        id: 'v-tax-types',
        title: 'Types of Taxes — Complete Classification',
        type: 'table',
        data: {
          headers: ['Classification Basis', 'Type', 'Definition', 'Indian Example'],
          rows: [
            ['Burden Shifting', 'Direct Tax', 'Burden cannot be shifted to others', 'Income Tax, Corporate Tax'],
            ['Burden Shifting', 'Indirect Tax', 'Burden shifted to consumer via price', 'Goods and Services Tax (GST), Customs Duty'],
            ['Rate Structure', 'Progressive Tax', 'Higher income → higher tax rate', 'Income tax slabs (5%→20%→30%)'],
            ['Rate Structure', 'Regressive Tax', 'Higher income → lower tax rate (burden on poor)', 'Some flat indirect taxes in practice'],
            ['Rate Structure', 'Proportional Tax', 'Same rate regardless of income', 'Flat corporate tax rate'],
            ['Levy Basis', 'Specific Tax', 'Per unit (weight, size, quantity)', 'Fixed tax per tonne of coal'],
            ['Levy Basis', 'Ad Valorem Tax', 'Percentage of value of commodity', 'GST charged as % of price']
          ]
        }
      },
      {
        id: 'u4-budget-chart',
        title: 'Government Budget Structure — The Two Sides',
        type: 'process',
        data: [
          { title: 'Government Budget', description: 'Annual financial plan for April 1 to March 31 — presented to Parliament.' },
          { title: 'Revenue Account (L-T neutral)', description: 'Revenue Receipts (Tax + Non-Tax) vs Revenue Expenditure (salaries, subsidies, interest). No long-term asset/liability change.' },
          { title: 'Capital Account (L-T impact)', description: 'Capital Receipts (Borrowings, Disinvestment, Loan Recovery) vs Capital Expenditure (infrastructure, loan repayments). Changes asset/liability position.' }
        ]
      }
    ]
  },
  {
    id: 'u4-t3',
    title: 'Budget Deficits — Revenue, Fiscal and Primary',
    description: 'Formulae, implications, and relationships between the three measures of government deficit, and the concept of government debt.',
    content: [
      'Revenue Deficit (RD) — Definition and Formula: Revenue Deficit is the excess of REVENUE EXPENDITURE over REVENUE RECEIPTS. It indicates that the government\'s day-to-day income is insufficient to cover its day-to-day spending. Formula: Revenue Deficit (RD) = Revenue Expenditure (RE) − Revenue Receipts (RR). IMPLICATIONS: (1) Government DISSAVING — the government is borrowing to fund CONSUMPTION spending (not capital investment), which is unhealthy. (2) Future taxpayers pay the bill — debt accumulated now to fund current consumption must be repaid with interest. (3) Crowds out capital spending — limited borrowing capacity is used for consumption rather than investment.',
      'Fiscal Deficit (FD) — Definition and Formula: Fiscal Deficit is the excess of TOTAL EXPENDITURE (Revenue + Capital) over TOTAL RECEIPTS EXCLUDING BORROWINGS (i.e., Revenue Receipts + Non-Debt Capital Receipts). Non-Debt Capital Receipts = Recovery of Loans + Disinvestment (sources that do not create new debt). Formula: Fiscal Deficit (FD) = Total Expenditure − (Revenue Receipts + Non-Debt Capital Receipts) = Total Expenditure − Total Receipts (excluding borrowings). KEY IDENTITY: Fiscal Deficit ≡ Borrowings. The Fiscal Deficit measures the amount the government NEEDS TO BORROW in a given year. It is the most widely watched deficit measure. IMPLICATIONS: (1) Inflationary pressure — if deficit is financed by printing money (Reserve Bank of India buying government bonds), money supply rises → inflation. (2) Crowding out — government borrowing from markets pushes up interest rates → private investment is displaced. (3) Future tax burden — current borrowing = future repayment + interest.',
      'Primary Deficit (PD) — Definition and Formula: Primary Deficit is the Fiscal Deficit MINUS Interest Payments on past borrowings. Formula: Primary Deficit (PD) = Fiscal Deficit (FD) − Interest Payments. PRIMARY DEFICIT shows how much the government is borrowing for purposes OTHER THAN servicing past debt. INTERPRETATION: If Primary Deficit = 0: The government is only borrowing to pay interest on old loans (no new borrowing for spending). If Primary Deficit > 0: The government is borrowing both to pay interest AND to fund current spending (worse situation). If Primary Deficit = 0 but Fiscal Deficit > 0: The ENTIRE fiscal deficit is due to interest payments on accumulated past debt.',
      'Relationship Between the Three Deficits: Revenue Deficit ⊂ Fiscal Deficit ⊃ Primary Deficit. Revenue Deficit tells us about the current account imbalance. Fiscal Deficit tells us the total borrowing need. Primary Deficit = Fiscal Deficit − Interest = measures fresh borrowing beyond debt servicing. FORMULA CHAIN: FD = Revenue Deficit + Capital Expenditure (net of non-debt capital receipts). PD = FD − Interest Payments. FD = PD + Interest Payments.',
      'Debt vs Deficit — Stock and Flow Distinction: DEFICIT is a FLOW concept — it measures the excess of expenditure over receipts in ONE YEAR. DEBT (Government Debt / National Debt) is a STOCK concept — it is the CUMULATIVE TOTAL of all past deficits (minus any surpluses). Just as a bank balance grows by adding each year\'s savings, government debt grows by adding each year\'s deficit. If the government runs a deficit every year, debt accumulates — and rising debt means rising interest payments, which increases future revenue expenditure, potentially creating a DEBT TRAP.',
      'The Debt Trap: A vicious cycle where: Government borrows (deficit) → Debt rises → Interest payments rise → Revenue expenditure rises → Revenue deficit widens → More borrowing needed → Debt rises further. When Primary Deficit > 0 year after year, the government is borrowing to pay interest on interest — a debt spiral that can become unsustainable. India has historically had high interest payments as % of total expenditure (20-25%) — partly due to past debt accumulation.',
      'Measures to Correct Fiscal Deficit: (a) INCREASE TAXES — raises revenue receipts → reduces deficit; (b) REDUCE GOVERNMENT EXPENDITURE — reduces spending; (c) DISINVESTMENT — sell PSU equity → reduces capital receipts gap; (d) REDUCE SUBSIDIES — reduces revenue expenditure; (e) INCREASE NON-TAX REVENUE — improve PSU profits, raise fees.'
    ],
    visualizations: [
      {
        id: 'v-deficit-formulas',
        title: 'Three Deficit Measures — Formulae and Implications',
        type: 'table',
        data: {
          headers: ['Deficit', 'Full Form', 'Formula', 'What It Indicates', 'Key Implication'],
          rows: [
            ['RD', 'Revenue Deficit', 'Revenue Expenditure − Revenue Receipts', 'Govt\'s current account gap — dissaving', 'Borrowing for consumption, not investment — unhealthy'],
            ['FD', 'Fiscal Deficit', 'Total Expenditure − (Revenue Receipts + Non-Debt Capital Receipts)', 'Total borrowing requirement for the year', 'FD ≡ Borrowings; inflationary if money-financed'],
            ['PD', 'Primary Deficit', 'Fiscal Deficit − Interest Payments', 'Borrowing beyond debt servicing', 'PD = 0 means only borrowing to pay interest; PD > 0 = fresh borrowing for spending']
          ]
        }
      },
      {
        id: 'v-deficit-example',
        title: 'Worked Example — Calculating All Three Deficits',
        type: 'table',
        data: {
          headers: ['Item', 'Amount (₹ Crore)'],
          rows: [
            ['Revenue Receipts (Tax + Non-Tax)', '600'],
            ['Revenue Expenditure (Salaries, Subsidies, Interest = 150)', '800'],
            ['Revenue Deficit (RD) = RE − RR = 800 − 600', '200'],
            ['Capital Expenditure', '300'],
            ['Total Expenditure = RE + CE = 800 + 300', '1,100'],
            ['Non-Debt Capital Receipts (Disinvestment + Recovery of Loans)', '100'],
            ['Fiscal Deficit (FD) = Total Exp − (RR + Non-Debt CR) = 1,100 − (600 + 100)', '400'],
            ['Interest Payments (already included in Revenue Expenditure above)', '150'],
            ['Primary Deficit (PD) = FD − Interest = 400 − 150', '250']
          ]
        }
      },
      {
        id: 'v-debt-deficit',
        title: 'Debt vs Deficit — Stock and Flow',
        type: 'table',
        data: {
          headers: ['Concept', 'Type', 'Definition', 'Relationship'],
          rows: [
            ['Deficit', 'FLOW', 'Excess of expenditure over receipts in ONE year', 'Each year\'s deficit adds to the stock of debt'],
            ['Debt (National Debt)', 'STOCK', 'Total accumulated borrowings of government over all past years', 'Debt = Sum of all past deficits (minus surpluses)'],
            ['Interest Payment', 'FLOW', 'Annual cost of servicing accumulated debt', 'Higher debt → higher interest payment → higher revenue expenditure → higher revenue deficit']
          ]
        }
      },
      {
        id: 'v-fiscal-impact',
        title: 'Fiscal Policy Impact on Aggregate Demand',
        type: 'table',
        data: {
          headers: ['Situation', 'Policy Type', 'Tools Used', 'Effect on Aggregate Demand', 'Budget Type'],
          rows: [
            ['Inflation (Excess Demand)', 'Contractionary Fiscal Policy', 'Increase taxes (T) + Reduce Govt Expenditure (G)', 'Aggregate Demand FALLS → Inflationary gap closes', 'Surplus Budget'],
            ['Recession (Deficient Demand)', 'Expansionary Fiscal Policy', 'Reduce taxes (T) + Increase Govt Expenditure (G) + Deficit Financing', 'Aggregate Demand RISES → Deflationary gap closes', 'Deficit Budget']
          ]
        }
      }
    ]
  },
  {
    id: 'u4-t4',
    title: 'Fiscal Multipliers and Automatic Stabilisers',
    description: 'The Government Expenditure Multiplier, Tax Multiplier, Balanced Budget Multiplier, and how taxes act as automatic stabilisers.',
    content: [
      'Government Expenditure Multiplier (k_G): When the government increases its spending by ΔG, the total increase in national income is MULTIPLIED (just like the Investment Multiplier). Formula: k_G = 1 / (1 − MPC) = 1 / MPS. This is IDENTICAL to the Investment Multiplier — because government spending directly becomes someone\'s income, which they in turn spend (MPC fraction) and so on. Example: If MPC = 0.8 and Government increases spending by ₹100 crore → ΔY = ₹100 × 5 = ₹500 crore.',
      'Tax Multiplier (k_T): When the government INCREASES TAXES by ΔT, households\' disposable income falls by ΔT. But households do not reduce consumption by the full ΔT — they reduce consumption by MPC × ΔT (they also reduce saving). So the impact on Aggregate Demand is only MPC × ΔT, not the full ΔT. Formula: k_T = −MPC / (1 − MPC) = −MPC / MPS. The NEGATIVE SIGN shows that tax INCREASE reduces income. IMPORTANT: |k_T| < k_G (Tax Multiplier is SMALLER in absolute value than Govt Expenditure Multiplier). Why? Govt spending DIRECTLY adds to Aggregate Demand; a tax cut only INDIRECTLY adds to Aggregate Demand (through increased consumption by MPC fraction). Example: MPC = 0.8 → k_G = 5, but k_T = −0.8/0.2 = −4. A ₹100 crore tax cut raises income by ₹400 crore (vs ₹500 crore from direct spending).',
      'Balanced Budget Multiplier (k_BB): If the government simultaneously increases BOTH Government Expenditure (G) and Taxes (T) by the SAME AMOUNT (ΔG = ΔT), what is the net effect on national income? k_BB = k_G + k_T = 1/(1−MPC) + (−MPC)/(1−MPC) = (1 − MPC) / (1 − MPC) = 1. The Balanced Budget Multiplier is ALWAYS EQUAL TO 1, regardless of the value of MPC. INTERPRETATION: If the government raises taxes and spending by equal amounts, national income rises by exactly that amount (₹100 crore increase in G financed by ₹100 crore increase in T → ΔY = ₹100 crore). This is because the spending effect (k_G) always exceeds the tax effect (k_T) by exactly 1.',
      'Automatic Stabilisers — Taxes as Built-In Stabilisers: Automatic Stabilisers are features of the tax and transfer system that automatically offset economic fluctuations WITHOUT any deliberate government action. PROGRESSIVE INCOME TAX as a stabiliser: During a BOOM (income rises): Tax revenues automatically RISE (more people move into higher brackets) → reduces disposable income → dampens consumption → prevents overheating. During a RECESSION (income falls): Tax revenues automatically FALL → disposable income falls by less than pre-tax income → cushions the fall in consumption → reduces the depth of recession. MATHEMATICAL EFFECT: With a proportional tax rate t, the effective multiplier becomes: k_with tax = 1 / (1 − MPC(1−t)). Example: MPC = 0.8, t = 0.25 → effective MPC = 0.8 × 0.75 = 0.6 → k = 1/(1−0.6) = 2.5. Without tax: k = 5. Tax HALVES the multiplier → economy is less sensitive to shocks. Other automatic stabilisers: Unemployment benefits (transfers automatically rise when people lose jobs, cushioning income loss).'
    ],
    visualizations: [
      {
        id: 'v-multipliers',
        title: 'Three Fiscal Multipliers — Formulae and Comparison',
        type: 'table',
        data: {
          headers: ['Multiplier', 'Formula', 'MPC = 0.8 Example', 'Why Different?'],
          rows: [
            ['Government Expenditure Multiplier (k_G)', '1 / (1 − MPC) = 1 / MPS', '1 / 0.2 = 5', 'Direct addition to Aggregate Demand — full ΔG becomes income'],
            ['Tax Multiplier (k_T)', '−MPC / (1 − MPC) = −MPC / MPS', '−0.8 / 0.2 = −4', 'Indirect — consumers only spend MPC fraction of tax cut; rest saved'],
            ['Balanced Budget Multiplier (k_BB)', 'k_G + k_T = 1 (always)', '5 + (−4) = 1', 'Equal G and T changes always give net multiplier of 1']
          ]
        }
      },
      {
        id: 'v-auto-stabilisers',
        title: 'Automatic Stabilisers — How Taxes Dampen Economic Fluctuations',
        type: 'table',
        data: {
          headers: ['Phase', 'What Happens to Income?', 'Tax Revenue Effect', 'Effect on Disposable Income', 'Stabilising Impact'],
          rows: [
            ['BOOM (Inflation)', 'National income RISES', 'Tax revenue automatically RISES (progressive tax → higher brackets)', 'Disposable income rises by LESS than pre-tax income', 'Dampens consumption boom → prevents overheating'],
            ['RECESSION', 'National income FALLS', 'Tax revenue automatically FALLS', 'Disposable income falls by LESS than pre-tax income', 'Cushions consumption fall → reduces recession depth'],
            ['Mathematical Effect', 'With proportional tax t', 'Effective MPC = MPC × (1 − t)', 'Multiplier = 1 / [1 − MPC(1−t)]', 'Smaller multiplier = economy less sensitive to demand shocks']
          ]
        }
      }
    ]
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
