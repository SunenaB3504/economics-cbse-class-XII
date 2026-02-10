
import { SQPQuestion } from '../../types';

export const SQP_QUESTIONS: SQPQuestion[] = [
  {
    id: 'u2-q1-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '3.',
    question: 'Name the financial institution that accepts deposits from the public for lending purposes.',
    optionA: 'Central Bank',
    optionB: 'Commercial Bank',
    optionC: 'Life Insurance Corporation',
    optionD: 'Mutual Fund',
    answer: 'B',
    aiExplanation: 'Teacher\'s Voice: While LIC or MFs handle money, only Commercial Banks are defined by the twin functions of accepting deposits and advancing loans for production.'
  },
  {
    id: 'u2-q2-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '7.',
    question: 'Which of the following will increase the money supply in the economy?',
    optionA: 'RBI purchasing government securities',
    optionB: 'Commercial banks expanding credit to customers',
    optionC: 'Decrease in the Cash Reserve Ratio',
    optionD: 'All of the above',
    answer: 'D',
    aiExplanation: 'Teacher\'s Voice: OMO purchase and CRR decrease both inject liquidity, which banks then use to expand credit further.'
  },
  {
    id: 'u2-q3-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '5.',
    question: '“The value of all goods and services are expressed in monetary units.” This statement highlights which function of money?',
    optionA: 'Medium of Exchange',
    optionB: 'Unit of Account',
    optionC: 'Store of Value',
    optionD: 'Standard of Deferred Payment',
    answer: 'B',
    aiExplanation: 'Teacher\'s Voice: Unit of Account means everything has a price tag in "Rupees", allowing us to compare the value of a car vs a pen.'
  },
  {
    id: 'u2-q4-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 6,
    type: 'Calculation',
    questionNumber: '6.',
    question: 'If the Initial Deposit is ₹1,000 and the Reserve Ratio is 20%, calculate the total credit created and show the credit creation table for three rounds.',
    markingScheme: '1. Money Multiplier = 1/0.2 = 5.\n2. Total Credit = 1000 * 5 = 5000.\n3. Table: R1: 1000 Dep / 200 Res / 800 Loan. R2: 800 Dep / 160 Res / 640 Loan. R3: 640 Dep / 128 Res / 512 Loan.',
    aiExplanation: 'Teacher\'s Voice: In each round, the loan from the previous round becomes a new deposit. This is the heart of banking logic!'
  },
  {
    id: 'u2-q5-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '15.',
    question: 'Discuss the "Banker\'s Bank and Supervisor" function of the Central Bank.',
    markingScheme: '1. Custodian of Cash Reserves: Commercial banks keep part of deposits with RBI.\n2. Clearing House: Settles inter-bank claims.\n3. Supervision: Regulates licensing, expansions, and compliance.',
    aiExplanation: 'Teacher\'s Voice: RBI acts as the "Top Cop" and "Head Accountant" for all other banks in India.'
  },
  {
    id: 'u1-q25-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '1.',
    question: 'The government can reduce the deflationary gap by ________ government securities in the open market.',
    optionA: 'Selling',
    optionB: 'Purchasing',
    optionC: 'Printing',
    optionD: 'Holding',
    answer: 'B',
    aiExplanation: 'Teacher\'s Voice: Purchasing securities puts cash into the hands of the public, stimulating spending to fight deflation.'
  },
  {
    id: 'u2-q6-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 6,
    type: 'LA',
    questionNumber: '16.',
    question: '“Over the centuries, money has evolved in various forms, from commodity money to fiat money.” Discuss the statement highlighting the evolution.',
    markingScheme: '1. Barter: Exchange of goods for goods.\n2. Commodity: Gold/Silver coins.\n3. Fiat: Paper currency backed by govt decree.\n4. Modern: E-money and digital transfers.',
    aiExplanation: 'Teacher\'s Voice: We moved from things with intrinsic value (gold) to things with "Trust value" (Fiat) to facilitate faster global trade.'
  },
  {
    id: 'u2-q7-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '3.',
    question: 'Which characteristic of money makes it a "Store of Value"?',
    optionA: 'Dividability',
    optionB: 'Portability',
    optionC: 'Non-perishable and universally acceptable',
    optionD: 'High intrinsic value',
    answer: 'C',
    aiExplanation: 'Teacher\'s Voice: Unlike milk or tomatoes, money doesn\'t rot, allowing you to save it for the future.'
  },
  {
    id: 'u2-q8-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 3,
    type: 'SA',
    questionNumber: '12.',
    question: '“Reserve Ratio acts as a limit to credit creation.” Justify the statement.',
    markingScheme: '1. Banks must keep RR portion from deposits.\n2. Lending is limited to (1 - RR) * Deposit.\n3. Higher RR = Lower Money Multiplier (1/RR).',
    aiExplanation: 'Teacher\'s Voice: If RR is 100%, banks can create 0 credit. If it is 0%, credit could be infinite. Thus, RR is the "brake" of the banking system.'
  }
];
