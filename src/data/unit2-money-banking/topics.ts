import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'money-functions',
    title: 'Money — Definition, Functions and Classification',
    description: 'What money is, the roles it plays in a modern economy, and how different types of money are classified.',
    content: [
      'Definition of Money: Money is anything that is generally accepted as a medium of exchange, a measure of value (Unit of Account), a store of value, and a standard of deferred payment. The key word is "generally accepted" — money works only because everyone trusts and accepts it. In modern economies, money is primarily Currency (notes and coins) and Bank Deposits.',
      'Function 1 — Medium of Exchange (Primary Function): Money solves the fundamental problem of barter — the "double coincidence of wants" (finding someone who has what you want AND wants what you have). With money, buying and selling are separated — you sell your goods for money; later you use money to buy what you want. Example: A wheat farmer under barter needs to find a tailor who wants wheat and has a shirt. With money, the farmer sells wheat for ₹500, then uses ₹500 to buy a shirt from any tailor.',
      'Function 2 — Unit of Account (Primary Function): Money acts as a common measuring rod or standard of value. All goods and services are priced in a common monetary unit (Rupees in India), making comparison easy. Example: Without a unit of account, you would compare a laptop to a car in terms of how many apples they are worth — money simplifies this by expressing both in Rupees.',
      'Function 3 — Store of Value (Secondary Function): Money acts as an asset that can be held over time to carry purchasing power from the present to the future. A shop owner can store today\'s revenue in money form and use it months later. KEY CONDITION: Stability in value is essential — if prices rise rapidly (inflation), money loses its store of value function because ₹1000 today buys less next year. This makes inflation an enemy of money\'s store of value function.',
      'Function 4 — Standard of Deferred Payment (Secondary Function): Money serves as a yardstick for debts and future payments — loans, EMIs (Equated Monthly Instalments), rents, and salary contracts are all denominated in money. Both the borrower and lender agree that repayment will be in the same money unit, even though the exchange of value happens at different points in time.',
      'Purchasing Power of Money: The purchasing power of money is the quantity of goods and services that one unit of money (₹1) can buy. It has an inverse relationship with the price level: Purchasing Power = 1/P (where P = Price Level). If the price level doubles → purchasing power of money is halved. Rising inflation = falling purchasing power. This is why the Reserve Bank of India (RBI) targets low inflation through monetary policy.',
      'Classification 1 — Full-Bodied Money vs Credit Money: FULL-BODIED MONEY: The commodity value (intrinsic value — what the metal is worth) equals the face value (money value). Example: A gold coin worth ₹100 contained gold worth ₹100. CREDIT MONEY: The face value (printed money value) is greater than the commodity value (what the material is worth). Example: A ₹500 paper note contains paper and ink worth perhaps a few paise — but is accepted as ₹500 because the government guarantees it. All modern paper currency is credit money.',
      'Classification 2 — Fiat Money vs Fiduciary Money: FIAT MONEY: Money issued by an order ("fiat" = decree/order) of the government — it has no intrinsic value but is legally enforced. Example: All currency notes and coins in India are fiat money — they have value because the government declares them valuable, not because of any gold backing. FIDUCIARY MONEY: Money that is accepted as a medium of exchange based on trust (Latin: "fiducia" = trust) between two parties — not because the government ordered it. Example: Cheques — a cheque from a trusted person is accepted in payment; if the trust breaks (cheque bounces), the money fails. Cheques are not legal tender — they can be refused.',
      'Classification 3 — Legal Tender: Money and Limited vs Unlimited Legal Tender: LEGAL TENDER MONEY: Money that cannot be legally refused for settlement of any debt or transaction — creditors MUST accept it. All currency notes in India are legal tender. UNLIMITED LEGAL TENDER: Money that can be used to pay debts of any amount without limit. Example: All paper currency notes in India (₹10, ₹50, ₹100, ₹500, ₹2000 etc.) — you can use them to pay any amount. LIMITED LEGAL TENDER: Money that can be used to pay debts only up to a certain maximum limit. Example: Coins in India — a person can be refused payment if you try to pay a large debt entirely in ₹1 coins. Non-legal tender: Cheques and demand drafts — these can be refused (they are fiduciary money, not legal tender).'
    ],
    visualizations: [
      {
        id: 'v-money-funcs',
        title: 'Four Functions of Money',
        type: 'table',
        data: {
          headers: ['Function', 'Category', 'What It Does', 'Barter Problem Solved'],
          rows: [
            ['Medium of Exchange', 'Primary', 'Facilitates buying and selling separately', 'Solves double coincidence of wants'],
            ['Unit of Account', 'Primary', 'Common measuring rod for all goods/services', 'Makes comparison easy — all prices in one unit'],
            ['Store of Value', 'Secondary', 'Holds wealth over time', 'Allows saving for future spending'],
            ['Standard of Deferred Payment', 'Secondary', 'Denominator for future debt obligations', 'Enables credit and lending contracts']
          ]
        }
      },
      {
        id: 'v-money-types',
        title: 'Classification of Money — Types and Examples',
        type: 'table',
        data: {
          headers: ['Classification Basis', 'Type 1', 'Type 2', 'Indian Example'],
          rows: [
            ['Intrinsic Value', 'Full-Bodied (commodity value = face value)', 'Credit Money (face value > commodity value)', 'Old gold coins vs ₹500 paper note'],
            ['Basis of Acceptance', 'Fiat Money (government decree)', 'Fiduciary Money (based on trust)', '₹100 note vs a personal cheque'],
            ['Legal Status', 'Legal Tender (cannot be refused)', 'Non-Legal Tender (can be refused)', 'Currency notes vs cheques'],
            ['Extent of Legal Tender', 'Unlimited Legal Tender (any amount)', 'Limited Legal Tender (up to a limit only)', 'Paper notes vs coins']
          ]
        }
      }
    ]
  },
  {
    id: 'money-demand',
    title: 'Demand for Money — Motives and Liquidity Preference',
    description: 'Why individuals and firms choose to hold liquid cash instead of interest-earning assets — the three motives for money demand.',
    content: [
      'Why Do People Hold Money? Money earns no interest (unlike a fixed deposit), yet people choose to hold it because of liquidity — money can be used immediately for any purpose. The desire to hold money rather than bonds or other assets is called "liquidity preference." The total demand for money (Md) = Transaction demand + Speculative demand.',
      'Motive 1 — Transaction Motive (for Medium of Exchange function): People hold money to bridge the time gap between receipt of income and day-to-day expenditures. There is always a gap — salaries come at the end of the month, but purchases happen daily. Formula: Transaction Demand (M^T_d) = k × P × Y, where k = proportion of income held as cash, P = Price Level, Y = Real Income. Transaction demand is POSITIVELY related to income (M^T_d rises as income rises) and is INDEPENDENT of the interest rate.',
      'Motive 2 — Precautionary Motive: People hold extra money beyond day-to-day needs to guard against unexpected emergencies — sudden illness, job loss, unexpected repairs. The assumption in the standard textbook model is that precautionary demand behaves similarly to transaction demand — it is positively related to income and relatively interest-inelastic.',
      'Motive 3 — Speculative Motive (for Store of Value function): People hold money as an alternative to buying financial assets like government bonds — based on their EXPECTATIONS of future interest rate movements. KEY LOGIC: When the market interest rate is HIGH → bond prices are LOW (inverse relationship) → people EXPECT rates to fall → bond prices will RISE → people prefer to BUY bonds now → speculative demand for money is LOW. When the market interest rate is LOW → bond prices are HIGH → people EXPECT rates to rise → bond prices will FALL → people prefer to hold CASH → speculative demand for money is HIGH. Therefore: Speculative demand (M^S_d) is INVERSELY related to the interest rate.',
      'Inverse Relationship: Bond Prices and Interest Rates: Bond price and interest rate are inversely related. If a bond pays ₹100 per year permanently and the interest rate is 10%, the bond price = ₹100/0.10 = ₹1,000. If the interest rate rises to 20%, the bond price = ₹100/0.20 = ₹500. Higher rate = lower bond price. This relationship drives speculative money demand.',
      'Liquidity Trap: A situation where the interest rate falls to its historically minimum floor level (r_min). At this floor rate, everyone expects the interest rate to rise (meaning bond prices will fall). Therefore, NO ONE wants to hold bonds — everyone prefers to hold money (maximum liquidity trap). Result: Speculative demand for money becomes INFINITELY ELASTIC — the demand curve for money becomes horizontal at r_min. This is the Liquidity Trap identified by Keynes — at this point, monetary policy becomes ineffective because any new money injected is simply hoarded rather than invested.'
    ],
    visualizations: [
      {
        id: 'v-motives-table',
        title: 'Three Motives for Holding Money',
        type: 'table',
        data: {
          headers: ['Motive', 'Purpose', 'Related To', 'Interest Rate Sensitivity'],
          rows: [
            ['Transaction Motive', 'Day-to-day purchases (income-expenditure gap)', 'Income (Y) — positive relation', 'NOT sensitive — interest rate does not affect daily spending needs'],
            ['Precautionary Motive', 'Emergency reserves against unexpected needs', 'Income (Y) — positive relation', 'Mostly NOT sensitive to interest rate'],
            ['Speculative Motive', 'Alternative to bonds — based on interest rate expectations', 'Interest Rate (r) — inverse relation', 'HIGHLY sensitive — inverse: high rate = low speculative demand']
          ]
        }
      },
      {
        id: 'v-spec-demand',
        title: 'Speculative Money Demand Curve — Key Points',
        type: 'process',
        data: [
          { title: 'Downward Slope', description: 'As Interest Rate (r) falls → Speculative Demand for Money (M^S_d) increases. People prefer money over falling bond prices.' },
          { title: 'Floor Rate (r_min)', description: 'The minimum rate below which the interest rate cannot fall — the historical floor.' },
          { title: 'Liquidity Trap Zone', description: 'At r_min, the curve becomes horizontal. Speculative demand for money is INFINITE — everyone holds only cash, no bonds.' },
          { title: 'Policy Implication', description: 'In a liquidity trap, monetary policy (printing more money) is ineffective — money just gets hoarded. Fiscal policy is more effective at this point.' }
        ]
      }
    ]
  },
  {
    id: 'u2-t1',
    title: 'Money Supply — Measures, High Powered Money, and Sources',
    description: 'How the total money supply in an economy is measured, categorised, and where it originates.',
    content: [
      'Definition of Money Supply: Money Supply refers to the total stock of money (currency in circulation + bank deposits held by the public) available in an economy at a given point of time. It is a STOCK concept (measured at a point in time, not over a period). IMPORTANT: Money supply excludes money held by government and inter-bank deposits — only money held by the general public counts.',
      'Sources of Money Supply: Money supply is created by THREE sources — (1) Reserve Bank of India (RBI) — the sole authority to print currency notes; (2) Government of India — issues one-rupee notes and all coins through the Ministry of Finance; (3) Commercial Banks — create credit money through the process of deposit multiplication (credit creation). The last point is crucial: Commercial banks do NOT print money but CREATE it through lending.',
      'M1 — Narrow Money (Most Liquid): M1 = Currency and Coins with Public (C) + Demand Deposits with Commercial Banks (DD) + Other Deposits with Reserve Bank of India (OD). CURRENCY WITH PUBLIC: Notes and coins circulating outside banks (i.e., not in bank vaults). DEMAND DEPOSITS (DD): Bank deposits withdrawable on demand by cheque at any time — current accounts and savings accounts. OTHER DEPOSITS (OD): Deposits of international organisations like International Monetary Fund (IMF), World Bank, etc. held with the Reserve Bank of India.',
      'M2: M2 = M1 + Savings Deposits with Post Office Savings Banks. These are less liquid than demand deposits because they have some withdrawal restrictions.',
      'M3 — Broad Money (Most Commonly Used): M3 = M1 + Net Time Deposits with Commercial Banks. TIME DEPOSITS (Fixed Deposits): Money deposited for a fixed period (3 months, 1 year, 5 years) — cannot be withdrawn before maturity without penalty. Less liquid than demand deposits but earn interest. M3 is the measure most commonly used by the Reserve Bank of India for monetary policy purposes.',
      'M4: M4 = M3 + Total Deposits with Post Office Savings Organisations (excluding National Savings Certificate). Least liquid of all measures. Rarely used in practice.',
      'High Powered Money (Monetary Base): H = Currency held by the Public (C) + Cash Reserves of Banks (CR, held with Reserve Bank of India). High Powered Money is called the "Monetary Base" because it is the base upon which the entire money supply is built through the credit creation multiplier process. The Reserve Bank of India directly creates and controls High Powered Money (H) — hence the name. Any increase in H leads to a multiplied increase in M3 through the money multiplier.',
      'Money Multiplier: Money Multiplier = 1 / Legal Reserve Ratio (LRR). If LRR = 20% → Money Multiplier = 1/0.20 = 5 → every ₹1 of High Powered Money supports ₹5 of total money supply. Total Money Created = Initial Deposit × Money Multiplier = Initial Deposit × (1/LRR).'
    ],
    visualizations: [
      {
        id: 'u2-v1',
        title: 'Hierarchy of Money Supply Measures (Reserve Bank of India)',
        type: 'table',
        data: {
          headers: ['Measure', 'Full Components', 'Liquidity', 'Common Name'],
          rows: [
            ['M1', 'Currency with Public (C) + Demand Deposits (DD) + Other Deposits with RBI (OD)', 'HIGHEST', 'Narrow Money'],
            ['M2', 'M1 + Post Office Savings Deposits', 'High', 'Narrow Money (broader)'],
            ['M3', 'M1 + Net Time Deposits (Fixed Deposits) with Commercial Banks', 'Lower', 'Broad Money — most used by RBI'],
            ['M4', 'M3 + Total Post Office Deposits (excluding National Savings Certificates)', 'LOWEST', 'Broadest Money']
          ]
        }
      },
      {
        id: 'u2-v1b',
        title: 'High Powered Money vs Money Supply',
        type: 'table',
        data: {
          headers: ['Concept', 'Formula', 'Controlled By', 'Key Feature'],
          rows: [
            ['High Powered Money (H)', 'Currency with Public (C) + Cash Reserves of Banks (CR)', 'Reserve Bank of India directly', 'The base upon which money supply is built'],
            ['Money Multiplier', '1 / Legal Reserve Ratio (LRR)', 'Indirectly by RBI (sets LRR)', 'Multiplies High Powered Money into total supply'],
            ['Total Money Supply (M)', 'H × Money Multiplier = H × (1/LRR)', 'Both RBI and Commercial Banks', 'Full money in circulation in the economy']
          ]
        }
      }
    ]
  },
  {
    id: 'u2-t2',
    title: 'Commercial Banks — Functions, Deposits and Credit Creation',
    description: 'How commercial banks accept deposits, create credit, and multiply money through the banking system.',
    content: [
      'Commercial Banks — Definition and Role: Commercial banks are profit-seeking financial institutions that accept deposits from the public and advance loans to borrowers. They are the backbone of the payment system — holding the bulk of money in the economy (as demand and time deposits) and channelling savings into productive investment through lending.',
      'Primary Deposits vs Derivative Deposits: PRIMARY DEPOSITS: Cash deposits made by the general public directly with a commercial bank — the initial injection of funds into the banking system. Example: A person deposits ₹10,000 cash — this is a primary deposit. DERIVATIVE DEPOSITS (Secondary Deposits): Deposits created by the bank itself through the loan-making process — when a bank grants a loan, it does not give cash; instead it CREDITS the borrower\'s account — creating a new deposit. Example: Bank A lends ₹8,000 to Ravi — Ravi\'s account is credited with ₹8,000 (a derivative deposit). These derivative deposits circulate through the economy and become primary deposits in other banks, enabling the credit creation chain.',
      'Two Primary Functions of Commercial Banks: (1) Accepting Deposits — banks accept money from the public in various forms (Savings Accounts, Current Accounts, Fixed Deposits) and pay interest on them. (2) Advancing Loans — banks lend a portion of deposited funds (keeping back a mandatory Legal Reserve Ratio as reserve) to borrowers at a higher interest rate. The difference between the lending rate and deposit rate is the bank\'s profit margin.',
      'Types of Deposits: DEMAND DEPOSITS: Deposits repayable on demand at any time by the depositor by writing a cheque or using ATM — no prior notice required. Example: Savings Account, Current Account. These form part of M1 (Narrow Money). TIME DEPOSITS (Fixed Deposits): Deposits made for a fixed term (3 months, 1 year, 5 years etc.) — cannot be withdrawn before maturity without penalty; carry higher interest than demand deposits. These form part of M3 (Broad Money).',
      'Credit Creation — The Money Multiplier in Action: Banks keep only a fraction of deposits as reserve (the Legal Reserve Ratio — LRR) and lend out the rest. This creates a chain of re-deposits and re-lending that MULTIPLIES the initial deposit into a far larger total money supply. STEP-BY-STEP EXAMPLE (LRR = 20%): Bank A receives ₹10,000 (primary deposit) → keeps ₹2,000 (20% LRR) → lends ₹8,000. Borrower spends ₹8,000 → Bank B receives ₹8,000 (deposit) → keeps ₹1,600 → lends ₹6,400. And so on... Total money created = ₹10,000 × 1/0.20 = ₹10,000 × 5 = ₹50,000.',
      'Legal Reserve Ratio (LRR) — Two Components: The Legal Reserve Ratio (LRR) is the minimum fraction of deposits that commercial banks are legally required to keep as reserves. It has two parts: (1) Cash Reserve Ratio (CRR): Minimum percentage of Net Demand and Time Liabilities (total deposits) that commercial banks MUST keep as CASH with the Reserve Bank of India (not with themselves). The Reserve Bank of India earns no interest on CRR. If the Reserve Bank of India raises CRR → banks have less money to lend → money supply falls. (2) Statutory Liquidity Ratio (SLR): Minimum percentage of total deposits that banks must maintain as liquid assets WITH THEMSELVES in the form of Cash, Gold, or Unencumbered Approved Securities (government bonds). SLR is maintained by the bank itself (not deposited with RBI). Together: LRR = CRR + SLR.',
      'Limitations of Credit Creation: The credit creation process is limited by: (1) The size of the initial deposit; (2) The value of the Legal Reserve Ratio set by the Reserve Bank of India; (3) The willingness of banks to lend and borrowers to borrow; (4) The willingness of the public to keep money in banks (if people hoard cash, the cycle breaks).'
    ],
    visualizations: [
      {
        id: 'v-banking-flow',
        title: 'Credit Creation Chain — Step by Step',
        type: 'process',
        data: [
          { title: 'Step 1: Primary Deposit', description: 'Public deposits ₹10,000 cash in Bank A — this is the primary deposit that starts the chain.' },
          { title: 'Step 2: Reserve Deduction (LRR = 20%)', description: 'Bank A keeps ₹2,000 as Cash Reserve Ratio (CRR) + Statutory Liquidity Ratio (SLR) — mandatory Legal Reserve Ratio.' },
          { title: 'Step 3: Credit Advance', description: 'Bank A lends the excess ₹8,000 to a borrower (e.g., a business). The borrower\'s account is credited — this is a derivative deposit.' },
          { title: 'Step 4: Re-deposit in Bank B', description: 'The borrower spends ₹8,000 which flows into Bank B as a new primary deposit. Bank B keeps 20% (₹1,600) and lends ₹6,400.' },
          { title: 'Chain Continues...', description: 'The process repeats through the entire banking system until the total deposits created = ₹10,000 × (1/0.20) = ₹50,000.' }
        ]
      },
      {
        id: 'v-deposits',
        title: 'Primary Deposits vs Derivative Deposits',
        type: 'table',
        data: {
          headers: ['Feature', 'Primary Deposits', 'Derivative Deposits (Secondary)'],
          rows: [
            ['Source', 'Cash deposited by public directly', 'Created by bank when granting loans'],
            ['Nature', 'Initial injection of funds', 'Account credit (not physical cash)'],
            ['Effect on Money Supply', 'Direct — increases bank\'s reserves', 'Multiplied — each loan creates new deposit'],
            ['Example', 'You deposit ₹10,000 salary in your bank', 'Bank credits Ravi\'s account with ₹8,000 loan']
          ]
        }
      }
    ]
  },
  {
    id: 'rbi-policy',
    title: 'Reserve Bank of India — Functions and Credit Control Tools',
    description: 'All functions of the Central Bank and the full range of quantitative and qualitative tools for monetary policy.',
    content: [
      'Reserve Bank of India — The Central Bank of India: The Reserve Bank of India (RBI) was established in 1935 and nationalised in 1949. It is the apex monetary institution of India — responsible for monetary stability, credit regulation, currency management, and government banking. Unlike commercial banks (which aim for profit), the Reserve Bank of India\'s primary goal is economic stability and development.',
      'Function 1 — Currency Authority (Note Issue): The Reserve Bank of India has the SOLE AUTHORITY to issue currency notes in India (except Re 1 notes and all coins which are issued by the Ministry of Finance, Government of India). The Reserve Bank of India uses the Minimum Reserve System — must maintain a minimum gold and foreign exchange reserve of ₹200 crore (including at least ₹115 crore in gold) regardless of how many notes are issued. This ensures every rupee note is backed by assets.',
      'Function 2 — Banker to the Government: The Reserve Bank of India acts as banker, agent, and financial advisor to both the Central Government and State Governments. It: (a) manages public debt (raising loans for government); (b) provides overdraft facilities during temporary cash shortfalls; (c) receives and makes payments on behalf of government; (d) advises government on economic and monetary policy matters.',
      'Function 3 — Banker to Banks (Banker\'s Bank) and Lender of Last Resort: Every commercial bank in India maintains a compulsory account with the Reserve Bank of India (for CRR deposits). The Reserve Bank of India provides short-term funds to commercial banks through the Repo window. LENDER OF LAST RESORT: When commercial banks face liquidity crises and cannot get funds from any other source, the Reserve Bank of India steps in as the "lender of last resort" — providing emergency credit to prevent bank failures. This maintains public confidence in the banking system.',
      'Function 4 — Clearing House: Since all commercial banks maintain accounts with the Reserve Bank of India, inter-bank settlements are made simple. When Bank A\'s customer gives a cheque to Bank B\'s customer, the Reserve Bank of India simply debits Bank A\'s account and credits Bank B\'s account — without any physical transfer of cash. This clearing function makes the payment system efficient and seamless.',
      'Function 5 — Custodian of Foreign Exchange Reserves: The Reserve Bank of India manages India\'s foreign exchange reserves — gold, foreign currencies (US Dollar, Euro, etc.), and Special Drawing Rights (SDRs) with the International Monetary Fund (IMF). These reserves are used to: (a) stabilise the external value of the Indian Rupee; (b) intervene in the foreign exchange market when the rupee depreciates too sharply; (c) meet international payment obligations; (d) inspire confidence in India\'s creditworthiness globally. India\'s forex reserves as of 2024 are approximately $600+ billion.',
      'Function 6 — Controller of Credit (Monetary Policy): This is one of the most important functions — regulating the volume, cost, and direction of credit to promote economic stability. Credit control tools are divided into QUANTITATIVE tools (affect TOTAL volume of credit) and QUALITATIVE tools (affect DIRECTION or purpose of credit).',
      'Quantitative Tool 1 — Bank Rate (Long-Term Lending Rate): The rate at which the Reserve Bank of India lends long-term funds to commercial banks WITHOUT any collateral security. If the Reserve Bank of India raises the Bank Rate → borrowing becomes expensive for banks → banks raise their lending rates → public borrows less → money supply falls. Bank Rate is a signalling tool — a change in Bank Rate signals the Reserve Bank of India\'s monetary policy stance.',
      'Quantitative Tool 2 — Repo Rate and Reverse Repo Rate: REPO RATE: The rate at which the Reserve Bank of India lends SHORT-TERM funds to commercial banks by PURCHASING their government securities (with an agreement to sell back later). If Repo Rate rises → borrowing cost for banks rises → banks raise lending rates → less credit to public → money supply falls → inflation controlled. REVERSE REPO RATE: The rate at which the Reserve Bank of India BORROWS funds from commercial banks (or commercial banks park surplus funds with the Reserve Bank of India) by selling them government securities. If Reverse Repo Rate rises → banks prefer to park funds with Reserve Bank of India (safe, interest-earning) instead of lending to public → money supply falls. KEY: Dear Money Policy (contractionary) = Raise Repo/Reverse Repo Rate. Cheap Money Policy (expansionary) = Lower Repo/Reverse Repo Rate.',
      'Quantitative Tool 3 — Cash Reserve Ratio (CRR) and Statutory Liquidity Ratio (SLR): CRR — Raising CRR reduces funds available for lending → money supply falls. SLR — Raising SLR forces banks to hold more liquid assets → less available for loans → money supply falls.',
      'Quantitative Tool 4 — Open Market Operations (OMO): The Reserve Bank of India buys or sells government securities in the open market to regulate money supply. SELL SECURITIES (to control inflation): Reserve Bank of India sells securities → banks pay for them → bank reserves fall → less money for lending → money supply falls → inflation controlled. BUY SECURITIES (to fight deflation): Reserve Bank of India buys securities from banks → banks receive cash → more money for lending → money supply rises → deflation fought.',
      'Qualitative Tool 1 — Margin Requirements: The margin is the difference between the market value of a security offered as collateral for a loan and the actual loan amount granted. Margin Requirement = Market Value of Security − Loan Amount. If the Reserve Bank of India RAISES the margin → banks lend LESS against the same collateral → credit to specific sectors falls. Example: If a property worth ₹10 lakh has a 40% margin requirement → maximum loan = ₹6 lakh. If margin rises to 60% → maximum loan = ₹4 lakh.',
      'Qualitative Tool 2 — Moral Suasion: A combination of persuasion and pressure exerted by the Reserve Bank of India on commercial banks to follow its policy directives — through direct instructions, circulars, meetings, and informal pressure. Example: The Reserve Bank of India may "persuade" banks to reduce lending to real estate to cool a property bubble. Moral Suasion is informal — it relies on the Reserve Bank of India\'s authority rather than legal powers.',
      'Qualitative Tool 3 — Selective Credit Control (SCC): The Reserve Bank of India can direct banks to restrict or expand credit to SPECIFIC SECTORS of the economy (selective, not overall). Example: Restrict credit to commodity speculators hoarding essential goods → reduces inflationary pressure in that specific market without affecting overall money supply. This is more targeted than quantitative tools.'
    ],
    visualizations: [
      {
        id: 'v-rbi-functions',
        title: 'Six Functions of the Reserve Bank of India',
        type: 'table',
        data: {
          headers: ['Function', 'What Reserve Bank of India Does', 'Key Fact'],
          rows: [
            ['Currency Authority', 'Sole authority to issue currency notes', 'Re. 1 notes and coins issued by Ministry of Finance'],
            ['Banker to Government', 'Manages government accounts, provides overdraft, raises public debt', 'Both Central and State governments'],
            ['Banker\'s Bank / Lender of Last Resort', 'Holds banks\' CRR deposits; provides emergency credit', 'All commercial banks maintain account with RBI'],
            ['Clearing House', 'Settles inter-bank claims by debiting/crediting bank accounts', 'No physical cash movement needed'],
            ['Custodian of Forex Reserves', 'Manages gold + foreign exchange + SDR reserves', 'India\'s forex reserves ≈ $600+ billion (2024)'],
            ['Controller of Credit', 'Regulates volume, cost, and direction of credit', 'Via Quantitative + Qualitative tools']
          ]
        }
      },
      {
        id: 'v-credit-tools',
        title: 'Credit Control Tools at a Glance',
        type: 'table',
        data: {
          headers: ['Tool', 'Type', 'To Control Inflation (Dear Money)', 'To Fight Deflation (Cheap Money)'],
          rows: [
            ['Bank Rate', 'Quantitative', 'INCREASE Bank Rate → banks\' borrowing costs rise → less credit', 'DECREASE Bank Rate → cheaper borrowing → more credit'],
            ['Repo Rate', 'Quantitative', 'INCREASE Repo Rate → banks pay more to borrow from RBI', 'DECREASE Repo Rate → cheaper for banks to borrow'],
            ['Reverse Repo Rate', 'Quantitative', 'INCREASE → banks park funds with RBI → less public lending', 'DECREASE → banks prefer lending to public over parking with RBI'],
            ['Cash Reserve Ratio (CRR)', 'Quantitative', 'INCREASE CRR → less available for lending → money supply falls', 'DECREASE CRR → more available for lending → money supply rises'],
            ['Statutory Liquidity Ratio (SLR)', 'Quantitative', 'INCREASE SLR → more locked in liquid assets → less for loans', 'DECREASE SLR → less locked → more for loans'],
            ['Open Market Operations (OMO)', 'Quantitative', 'SELL government securities → bank reserves fall → money supply falls', 'BUY government securities → cash injected → money supply rises'],
            ['Margin Requirements', 'Qualitative', 'INCREASE margin → less loan per unit of collateral → less credit', 'DECREASE margin → more loan per collateral → more credit'],
            ['Moral Suasion', 'Qualitative', 'Persuade banks to lend less / to specific sectors only', 'Persuade banks to lend more / to priority sectors'],
            ['Selective Credit Control (SCC)', 'Qualitative', 'Restrict credit to specific inflationary sectors', 'Expand credit to specific depressed sectors']
          ]
        }
      },
      {
        id: 'v-dear-cheap',
        title: 'Dear Money Policy vs Cheap Money Policy',
        type: 'table',
        data: {
          headers: ['Feature', 'Dear Money Policy (Contractionary)', 'Cheap Money Policy (Expansionary)'],
          rows: [
            ['Also Called', 'Tight Money Policy / Anti-Inflationary', 'Easy Money Policy / Expansionary'],
            ['Goal', 'REDUCE money supply to control inflation', 'INCREASE money supply to fight recession/deflation'],
            ['Repo Rate', 'INCREASED', 'DECREASED'],
            ['CRR/SLR', 'INCREASED', 'DECREASED'],
            ['Open Market Operations', 'RBI SELLS securities (absorbs liquidity)', 'RBI BUYS securities (injects liquidity)'],
            ['Margin Requirements', 'INCREASED', 'DECREASED'],
            ['Effect', 'Interest rates rise → less borrowing → spending falls', 'Interest rates fall → more borrowing → spending rises']
          ]
        }
      }
    ]
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
