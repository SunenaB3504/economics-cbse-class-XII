
import { Flashcard } from '../../types';

export const FLASHCARDS: Flashcard[] = [
  {
    id: 'u2-fc1',
    question: 'Define Money Supply.',
    answer: 'It refers to the total stock of money (currency and demand deposits) held by the public at a specific point in time in an economy.',
    category: 'Definition'
  },
  {
    id: 'u2-fc2',
    question: 'What are the components of the M1 measurement of Money Supply?',
    answer: 'M1 = Currency and coins with public (C) + Demand deposits of commercial banks (DD) + Other deposits with RBI (OD).',
    category: 'Technical'
  },
  {
    id: 'u2-fc3',
    question: 'What is Fiat Money?',
    answer: 'Money which is issued by the order/authority of the government (e.g., all notes and coins).',
    category: 'Classification'
  },
  {
    id: 'u2-fc4',
    question: 'Define Fiduciary Money.',
    answer: 'Money that is accepted as a medium of exchange because of the trust between the payer and the payee (e.g., Cheques).',
    category: 'Classification'
  },
  {
    id: 'u2-fc5',
    question: 'What is High Powered Money?',
    answer: 'The sum of currency held by the public and cash reserves of the banks. It is the monetary base of the economy.',
    category: 'Definition'
  },
  {
    id: 'u2-fc6',
    question: 'Distinguish between Full-Bodied Money and Credit Money.',
    answer: 'Full-bodied money has commodity value equal to money value (e.g., gold coins). Credit money has money value greater than commodity value (e.g., paper notes).',
    category: 'Theory'
  },
  {
    id: 'u2-fc7',
    question: 'What is Legal Tender Money?',
    answer: 'Money that can be legally used to make payments of debts or other obligations and cannot be refused by anyone.',
    category: 'Definition'
  },
  {
    id: 'u2-fc8',
    question: 'Name the authority that issues one-rupee notes and all coins in India.',
    answer: 'The Ministry of Finance, Government of India.',
    category: 'Technical'
  },
  {
    id: 'u2-fc9',
    question: 'List the two primary functions of Commercial Banks.',
    answer: '1. Accepting deposits from the public. 2. Advancing loans to borrowers.',
    category: 'Theory'
  },
  {
    id: 'u2-fc10',
    question: 'What is the Money Multiplier formula?',
    answer: 'Money Multiplier = $1 / \\text{Legal Reserve Ratio (LRR)}$.',
    category: 'Calculation'
  },
  {
    id: 'u2-fc11',
    question: 'How is Total Credit Creation calculated?',
    answer: 'Total Credit Creation = Initial Deposit $\\times$ $(1 / LRR)$.',
    category: 'Calculation'
  },
  {
    id: 'u2-fc12',
    question: 'What are the two components of the Legal Reserve Ratio (LRR)?',
    answer: '1. Cash Reserve Ratio (CRR). 2. Statutory Liquidity Ratio (SLR).',
    category: 'Technical'
  },
  {
    id: 'u2-fc13',
    question: 'Define Cash Reserve Ratio (CRR).',
    answer: 'The minimum percentage of net demand and time liabilities that commercial banks are required to keep as cash with the Central Bank (RBI).',
    category: 'Definition'
  },
  {
    id: 'u2-fc14',
    question: 'Define Statutory Liquidity Ratio (SLR).',
    answer: 'The minimum percentage of assets that commercial banks are required to maintain in the form of liquid assets (Cash, Gold, Unencumbered Securities) with themselves.',
    category: 'Definition'
  },
  {
    id: 'u2-fc15',
    question: 'What happens to the money supply if the RBI increases the CRR?',
    answer: 'The money supply decreases because banks have fewer funds available for lending.',
    category: 'Application'
  },
  {
    id: 'u2-fc16',
    question: 'State the "Lender of Last Resort" function of the Central Bank.',
    answer: 'It means that the Central Bank provides financial accommodation to commercial banks when they fail to get funds from any other source.',
    category: 'Theory'
  },
  {
    id: 'u2-fc17',
    question: 'Explain the "Banker to the Government" function of the RBI.',
    answer: 'The RBI manages the government\'s accounts, provides loans to the government during crises, and acts as an agent/advisor on financial matters.',
    category: 'Theory'
  },
  {
    id: 'u2-fc18',
    question: 'What is Repo Rate?',
    answer: 'The rate at which the Central Bank (RBI) lends money to commercial banks for short-term needs by purchasing their securities.',
    category: 'Definition'
  },
  {
    id: 'u2-fc19',
    question: 'Define Reverse Repo Rate.',
    answer: 'The rate at which the Central Bank (RBI) borrows money from commercial banks by parking their surplus funds with itself.',
    category: 'Definition'
  },
  {
    id: 'u2-fc20',
    question: 'How does an increase in the Repo Rate control inflation?',
    answer: 'It makes borrowing expensive for commercial banks, leading to higher interest rates for the public, which reduces demand and money supply.',
    category: 'Application'
  },
  {
    id: 'u2-fc21',
    question: 'What are Open Market Operations (OMO)?',
    answer: 'The buying and selling of government securities in the open market by the Central Bank to regulate the money supply.',
    category: 'Theory'
  },
  {
    id: 'u2-fc22',
    question: 'State one qualitative tool of credit control used by the RBI.',
    answer: 'Margin Requirement (or Moral Suasion, Selective Credit Control).',
    category: 'Technical'
  },
  {
    id: 'u2-fc23',
    question: 'Define Margin Requirement.',
    answer: 'The difference between the current market value of the security offered for a loan and the actual value of the loan granted.',
    category: 'Definition'
  },
  {
    id: 'u2-fc24',
    question: 'What is Moral Suasion?',
    answer: 'A combination of persuasion and pressure exerted by the Central Bank on commercial banks to follow its directives and policy goals.',
    category: 'Definition'
  },
  {
    id: 'u2-fc25',
    question: 'Distinguish between Central Bank and Commercial Bank.',
    answer: 'Central Bank is the apex body regulating the system (Profit is not the goal); Commercial Banks operate for profit and serve the public directly.',
    category: 'Classification'
  },
  {
    id: 'u2-fc26',
    question: 'True or False: Inter-bank deposits are included in the measure of Money Supply.',
    answer: 'False. Only deposits held by the public are included.',
    category: 'True/False'
  },
  {
    id: 'u2-fc27',
    question: 'True or False: Commercial banks have the authority to issue currency notes.',
    answer: 'False. Only the Central Bank has the sole authority for note issuance.',
    category: 'True/False'
  },
  {
    id: 'u2-fc28',
    question: 'If the LRR is 20%, what is the value of the Money Multiplier?',
    answer: 'Money Multiplier = $1 / 0.20 = 5$.',
    category: 'Calculation'
  },
  {
    id: 'u2-fc29',
    question: 'What is the impact of "Selling Government Securities" by the RBI on credit creation?',
    answer: 'It reduces the cash reserves of banks, thereby decreasing their ability to create credit (Money Supply decreases).',
    category: 'Application'
  },
  {
    id: 'u2-fc30',
    question: 'Define Demand Deposits.',
    answer: 'Deposits that can be withdrawn by the depositor by writing a cheque at any time without prior notice.',
    category: 'Definition'
  },
  {
    id: 'u2-fc31',
    question: 'Is Money Supply a Stock or Flow concept?',
    answer: 'Stock concept, as it is measured at a specific point in time.',
    category: 'Theory'
  },
  {
    id: 'u2-fc32',
    question: 'Explain the "Custodian of Foreign Exchange Reserves" function.',
    answer: 'The Central Bank maintains the country\'s gold and foreign currency reserves to stabilize the external value of the domestic currency.',
    category: 'Theory'
  },
  {
    id: 'u2-fc33',
    question: 'What is Bank Rate?',
    answer: 'The rate at which the Central Bank lends long-term funds to commercial banks without any collateral.',
    category: 'Definition'
  },
  {
    id: 'u2-fc34',
    question: 'How do you control Deflation using the Legal Reserve Ratio?',
    answer: 'Decrease the LRR to increase the credit-creating capacity of banks, leading to a rise in the money supply.',
    category: 'Application'
  },
  {
    id: 'u2-fc35',
    question: 'What is the role of RBI as a "Clearing House"?',
    answer: 'It settles inter-bank claims and transfers easily because all commercial banks maintain accounts with the RBI.',
    category: 'Theory'
  },
  {
    id: 'u2-fc36',
    question: 'State one limitation of the credit creation process.',
    answer: 'The availability of initial deposits and the value of the Legal Reserve Ratio set by the RBI.',
    category: 'Theory'
  },
  {
    id: 'u2-fc37',
    question: 'What is "Limited Legal Tender"?',
    answer: 'Money that can be used to pay debts only up to a certain maximum limit (e.g., coins in some jurisdictions).',
    category: 'Definition'
  },
  {
    id: 'u2-fc38',
    question: 'What is "Unlimited Legal Tender"?',
    answer: 'Money that can be used to make payments of any amount (e.g., paper currency notes).',
    category: 'Definition'
  },
  {
    id: 'u2-fc39',
    question: 'How does an increase in the Reverse Repo Rate affect bank lending?',
    answer: 'It encourages banks to park more funds with the RBI instead of lending to the public, thus decreasing the money supply.',
    category: 'Application'
  },
  {
    id: 'u2-fc40',
    question: 'Calculate Total Credit if Initial Deposit = ₹ 2,000 and LRR = 10%.',
    answer: 'Total Credit = ₹ 2,000 $\\times$ $(1 / 0.10) = ₹ 2,000 \\times 10 = ₹ 20,000$.',
    category: 'Calculation'
  },
  {
    id: 'u2-fc41',
    question: 'Define Money.',
    answer: 'Anything that is generally accepted as a medium of exchange, measure of value, store of value, and standard of deferred payment.',
    category: 'Definition'
  },
  {
    id: 'u2-fc42',
    question: 'What are Primary Deposits?',
    answer: 'Cash deposits made by the public with the commercial banks.',
    category: 'Classification'
  },
  {
    id: 'u2-fc43',
    question: 'What are Derivative Deposits?',
    answer: 'Deposits created by banks by way of granting loans to the public; also known as secondary deposits.',
    category: 'Classification'
  },
  {
    id: 'u2-fc44',
    question: 'True or False: Central Bank is the only source of money supply in India.',
    answer: 'False. Money supply is created by the Central Bank, Government, and Commercial Banks (through credit creation).',
    category: 'True/False'
  },
  {
    id: 'u2-fc45',
    question: 'What is a "Dear Money Policy"?',
    answer: 'A policy of the Central Bank to reduce the money supply by increasing interest rates.',
    category: 'Theory'
  },
  {
    id: 'u2-fc46',
    question: 'What is a "Cheap Money Policy"?',
    answer: 'A policy of the Central Bank to increase the money supply by reducing interest rates.',
    category: 'Theory'
  },
  {
    id: 'u2-fc47',
    question: 'State the meaning of Credit Control.',
    answer: 'The process of regulating the volume and direction of credit by the Central Bank to achieve economic stability.',
    category: 'Theory'
  },
  {
    id: 'u2-fc48',
    question: 'Identify the Quantitative tool: Margin Requirement or Repo Rate?',
    answer: 'Repo Rate.',
    category: 'Classification'
  },
  {
    id: 'u2-fc49',
    question: 'Identify the Qualitative tool: SLR or Moral Suasion?',
    answer: 'Moral Suasion.',
    category: 'Classification'
  },
  {
    id: 'u2-fc51',
    question: 'How does money act as a "Store of Value"?',
    answer: 'It acts as an asset that can be used to transfer purchasing power from the present to the future. Stability in value is a prerequisite.',
    category: 'Functions'
  },
  {
    id: 'u2-fc52',
    question: 'What is the "Liquidity Trap"?',
    answer: 'A situation where interest rates are so low that individuals expect them to rise, making money demand infinitely elastic (the curve becomes horizontal).',
    category: 'Demand for Money'
  },
  {
    id: 'u2-fc53',
    question: 'Define Speculative Demand for Money.',
    answer: 'The demand for money held as an alternative to assets like bonds, based on expectations of future interest rates.',
    category: 'Demand for Money'
  },
  {
    id: 'u2-fc54',
    question: 'What is the relationship between the Purchasing Power of Money and the Price Level?',
    answer: 'Inverse relationship ($1/P$). As prices rise, the value of money falls.',
    category: 'Equations'
  },
  {
    id: 'u2-fc55',
    question: 'State the Transaction Motive for holding money.',
    answer: 'It is the demand for money to carry out day-to-day transactions due to the time gap between receipt of income and expenses.',
    category: 'Demand for Money'
  },
  {
    id: 'u2-fc56',
    question: 'What is the "Lender of Last Resort" function?',
    answer: 'The RBI\'s commitment to provide emergency credit to commercial banks in financial distress when they have no other options.',
    category: 'RBI Functions'
  },
  {
    id: 'u2-fc57',
    question: 'Components of Broad Money (M3)?',
    answer: 'M1 + Net Time Deposits (Fixed Deposits) with Commercial Banks.',
    category: 'Money Supply'
  },
  {
    id: 'u2-fc58',
    question: 'Distinguish between Fiat Money and Legal Tender.',
    answer: 'Fiat money has no intrinsic value (govt order). Legal tender means it cannot be refused for debt settlement.',
    category: 'Classification'
  }
];
