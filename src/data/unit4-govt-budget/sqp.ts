
import { SQPQuestion } from '../../types';

export const SQP_QUESTIONS: SQPQuestion[] = [
  {
    id: 'u4-q1-sqp-2025',
    year: '2025-26',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: 'Q15.',
    question: 'Compare and contrast "Government Deficit" and "Government Debt". How are they related?',
    markingScheme: '1. **Deficit**: A flow variable representing the excess of expenditure over receipts in a specific financial year.\n2. **Debt**: A stock variable representing the total accumulation of past deficits (total amount owed by the government).\n3. **Relationship**: Deficit adds to the debt. Higher deficits today lead to higher interest payments and debt burdens for future generations.',
    aiExplanation: 'Teacher\'s Voice: Think of Deficit as the amount you overspent this month, and Debt as your total Credit Card balance. One is for the timing, the other is the total hole you are in.'
  },
  {
    id: 'u4-q2-sqp-2025',
    year: '2025-26',
    paperType: 'SQP',
    marks: 3,
    type: 'SA',
    questionNumber: 'Q6.',
    question: 'Classify "Grants given to State Governments" as Revenue or Capital Expenditure. Support your answer with valid reasons.',
    markingScheme: '1. **Classification**: Revenue Expenditure.\n2. **Reason**: It does not lead to the creation of any physical or financial assets for the Central Government, nor does it reduce its liabilities.\n3. **Note**: Even if the State uses it for asset creation, for the Central Budget, it remains a Revenue transfer.',
    aiExplanation: 'Teacher\'s Voice: This is a classic trap! Don\'t worry about what the State does with the money. For the Center, it\'s an outgoing transfer without getting an asset back.'
  },
  {
    id: 'u4-q3-board-2024',
    year: '2023-24',
    paperType: 'BOARD',
    marks: 6,
    type: 'LA',
    questionNumber: 'Q21.',
    question: 'Explain the implication of a "Zero Primary Deficit". What does it tell us about the government\'s current fiscal health?',
    markingScheme: '1. **Definition**: Primary Deficit = Fiscal Deficit - Interest Payments.\n2. **Implication**: If Primary Deficit is Zero, it means Fiscal Deficit = Interest Payments.\n3. **Conclusion**: The government is borrowing only to clear past interest obligations. Current year expenditure is perfectly managed within current year receipts.',
    aiExplanation: 'Teacher\'s Voice: This is the "Treading Water" scenario. Formula: $$\text{Primary Deficit} = \text{Fiscal Deficit} - \text{Interest Payments}$$. If it is zero, it means every rupee borrowed this year is going exactly towards paying off interest on old loans. You aren\'t digging a "new" hole for current spending, but you are still stuck in the "old" one.'
  },
  {
    id: 'u4-q4-board-2024',
    year: '2024-25',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: 'Q18.',
    question: 'Why are "Public Goods" considered a case of market failure? Mention the two key properties.',
    markingScheme: '1. **Non-Rivalrous**: Consumption by one doesn\'t reduce availability for others (e.g., street light).\n2. **Non-Excludable**: Impossible to prevent non-payers from using it (Free-rider problem).\n3. **Market Failure**: Private firms won\'t produce them because they can\'t charge a price effectively.',
    aiExplanation: 'Teacher\'s Voice: Street lights and National Defence are classic examples. Since you can\'t stop "Free-riders" (people who don\'t pay) from using them, private companies can\'t make a profit and won\'t produce them. Thus, the Government must step in!'
  },
  {
    id: 'u4-q5-sqp-2024',
    year: '2024-25',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '22.',
    question: 'What are the implications of a high "Fiscal Deficit"?',
    markingScheme: '1. Inflationary Spiral: Borrowing from RBI increases money supply.\n2. National Debt: High interest payments in the future.\n3. Crowding Out: Less funds available for private investment.\n4. Dependence on Foreigners: If borrowing from abroad.',
    aiExplanation: 'Teacher\'s Voice: High Fiscal Deficit is like a heavy credit card bill. It might solve today\'s hunger (current spending), but will be a nightmare tomorrow (National Debt) when interest starts piling up and inflation rises.'
  },
  {
    id: 'u4-q6-board-2023',
    year: '2022-23',
    paperType: 'BOARD',
    marks: 6,
    type: 'LA',
    questionNumber: '26.',
    question: "Define \"Primary Deficit\". What does a zero primary deficit indicate?",
    markingScheme: 'Definition: Primary Deficit = Fiscal Deficit - Interest Payments.\nSignificance: It measures how much the government needs to borrow to meet expenses other than interest payments.\nZero Primary Deficit: It means the government needs to borrow *only* to pay off interest on previous loans. No new borrowings are needed for current year expenditure.',
    aiExplanation: 'Teacher\'s Voice: Think of Primary Deficit as "Today\'s Overspending". Formula: $$\\text{Primary Deficit} = \\text{Fiscal Deficit} - \\text{Interest Payments}$$. If it is zero, you are only borrowing to pay for yesterday\'s mistakes (past loans), while your current year bills are otherwise balanced.'
  },
  {
    id: 'u4-q7-board-2024',
    year: '2023-24',
    paperType: 'BOARD',
    marks: 3,
    type: 'SA',
    questionNumber: '20.',
    question: 'Differentiate between "Revenue Expenditure" and "Capital Expenditure" with one example each.',
    markingScheme: '| Revenue Expenditure | Capital Expenditure |\n|---|---|\n| Does not create assets or reduce liabilities. | Either creates assets or reduces liabilities. |\n| Recurring in nature. | Non-recurring in nature. |\n| Example: Interest payments, Salaries. | Example: Construction of dams, repayment of loans. |',
    aiExplanation: 'A good way to remember: Revenue expenditure is "Maintenance" (keeping thing running), whereas Capital expenditure is "Investment" (building new things or clearing debts).'
  },
  {
    id: 'u4-q8-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '6.',
    question: 'As per the data presented in the Union Budget 2023-24, the total receipts of the government other than borrowings and the total expenditure are estimated at ₹ 27.2 lakh crore and ₹ 45 lakh crore respectively. The value of the ________ deficit would be ₹ 17.8 lakh crore.',
    optionA: 'Revenue',
    optionB: 'Fiscal',
    optionC: 'Budgetary',
    optionD: 'Primary',
    answer: 'B',
    aiExplanation: 'Teacher\'s Voice: Fiscal Deficit = Total Expenditure - Total Receipts excluding borrowings. Here, $$45 - 27.2 = 17.8$$. This represents the total borrowing requirement of the government!'
  }
];
