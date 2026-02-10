
import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'money-functions',
    title: 'Functions of Money',
    description: 'The core roles that money plays in a modern economy to facilitate trade and store value.',
    content: [
      'Medium of Exchange: Money is used to facilitate transactions, solving the problem of "double coincidence of wants" found in barter systems. It allows for the separation of buying and selling.',
      'Unit of Account: A common measuring rod or standard of value. All goods and services are expressed in monetary units, making comparison and calculation easy.',
      'Store of Value: The ability to carry forward wealth to the future. Money acts as an asset that can be held over time, provided its value remains relatively stable.',
      'Standard of Deferred Payments: Money serves as a yardstick for payments to be made in the future (loans, salaries, etc.).'
    ],
    visualizations: [
      {
        id: 'v-money-funcs',
        title: 'Core Functions categorized',
        type: 'grid',
        data: [
          { label: 'Primary', desc: 'Medium of Exchange, Unit of Account.' },
          { label: 'Secondary', desc: 'Store of Value, Standard of Deferred Payments.' }
        ]
      }
    ]
  },
  {
    id: 'money-demand',
    title: 'Demand for Money',
    description: 'Why individuals and firms choose to hold liquid cash instead of interest-earning assets.',
    content: [
      'Transaction Motive: People hold money to bridge the gap between receipt of income and daily expenditures. It is positively related to the level of income ($M^T_d = k.PY$).',
      'Speculative Motive: Holding money as an alternative to assets like bonds. This demand depends on expectations of future interest rates. When interest rates are high, speculative demand is low (as people buy bonds).',
      'Inverse Relationship: There is an inverse relationship between the market rate of interest and the speculative demand for money.',
      'Liquidity Trap: A situation where the interest rate is at its historical minimum (floor rate). At this point, everyone expects interest rates to rise, making money demand infinitely elastic (the curve becomes horizontal).'
    ],
    visualizations: [
      {
        id: 'v-spec-demand',
        title: 'Speculative Money Demand Curve',
        type: 'process',
        data: [
          { title: 'Downward Slope', description: 'As Interest Rate (r) falls, Speculative Demand (Mds) increases.' },
          { title: 'Floor Rate (rmin)', description: 'The minimum rate below which interest rate cannot fall.' },
          { title: 'Liquidity Trap', description: 'At rmin, the curve becomes horizontal; people hold only cash.' }
        ]
      }
    ]
  },
  {
    id: 'u2-t1',
    title: 'Money Supply and Classification',
    description: 'Measures of money supply and the distinction between fiat and legal tender.',
    content: [
      'Fiat Money: Money that has no intrinsic value and is issued by the order/authority of the government (e.g., all currency notes and coins).',
      'Legal Tender: Money that cannot be refused for any legal settlement of transactions. All fiat money is legal tender.',
      'Narrow vs Broad Money: M1 and M2 are narrow money (highly liquid). M3 and M4 are broad money (lower liquidity as they include time deposits).',
      'Money Supply (M1): Currency with public + Demand deposits + Other deposits with RBI.',
      'Purchasing Power: The value of money is inversely related to the price level ($1/P$). If prices double, the purchasing power of money is halved.'
    ],
    visualizations: [
      {
        id: 'u2-v1',
        title: 'Hierarchy of Money Supply (RBI)',
        type: 'table',
        data: {
          headers: ['Measure', 'Components', 'Liquidity'],
          rows: [
            ['M1', 'C + DD + OD', 'Highest'],
            ['M2', 'M1 + Post Office Savings', 'High'],
            ['M3', 'M1 + Time Deposits', 'Low (Broad)'],
            ['M4', 'M3 + Total Post Office Deposits', 'Lowest']
          ]
        }
      }
    ]
  },
  {
    id: 'u2-t2',
    title: 'Banking and Credit Creation',
    description: 'The logic of the balance sheet and how commercial banks multiply money.',
    content: [
      'Commercial Banks: Profit-seeking institutions that accept deposits and create credit by lending out a portion of those deposits.',
      'Balance Sheet Logic: For a bank, Assets = Reserves (Cash + RBI deposits) + Loans. Liabilities = Deposits + Net Worth. In equilibrium, Assets must equal Liabilities + Net Worth.',
      'Credit Creation: Banks do not lend their own capital; they lend the deposits of the public, keeping a fraction (LRR) as mandated by the RBI.',
      'Formula: Total Money Supply = Initial Deposit × (1/LRR).',
      'Circular Flow (Banking): Deposits flow from the public to banks -> Reserves are deducted -> Balance flows back to the public as Loans -> Loans are spent and redeposited.'
    ],
    visualizations: [
      {
        id: 'v-banking-flow',
        title: 'Circular Flow of Money (Banking)',
        type: 'process',
        data: [
          { title: 'Public Deposits', description: 'Surplus funds from households/firms enter the bank.' },
          { title: 'Reserve Deduction', description: 'Bank keeps CRR (with RBI) and SLR (with self).' },
          { title: 'Credit Advance', description: 'The "Excess Reserves" are given as loans to borrowers.' },
          { title: 'Secondary Deposit', description: 'Borrowers spend money, which is redeposited into the banking system.' }
        ]
      }
    ]
  },
  {
    id: 'rbi-policy',
    title: 'Policy Tools of the RBI',
    description: 'Quantitative and Qualitative instruments used to regulate the economy.',
    content: [
      'Central Bank Functions: Issuing currency, Banker to Government, Banker\'s Bank, and Supervisor.',
      'Lender of Last Resort: RBI\'s commitment to provide emergency funds to commercial banks facing liquidity crises.',
      'Quantitative Tools: Instruments affecting the total volume of credit (CRR, SLR, Bank Rate, Repo Rate, OMO).',
      'Qualitative Tools: selective tools affecting the direction of credit (Margin Requirements, Moral Suasion).',
      'Open Market Operations (OMO): The purchase or sale of government securities. During deflation, RBI buys securities to inject liquidity.'
    ],
    visualizations: []
  }
];
