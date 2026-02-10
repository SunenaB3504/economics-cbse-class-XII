
import { Flashcard } from '../../types';

export const FLASHCARDS: Flashcard[] = [
  // --- EXISTING ---
  {
    id: 'u1-fc1',
    question: 'Define National Income (NNP at FC).',
    answer: 'It is the sum total of factor incomes (rent, wages, interest, profit) earned by normal residents of a country during a year.',
    category: 'Basic Concepts'
  },
  {
    id: 'u1-fc2',
    question: 'Difference between Gross and Net investment?',
    answer: 'Gross Investment includes depreciation, while Net Investment excludes it ($Net = Gross - Depreciation$).',
    category: 'Basic Concepts'
  },
  {
    id: 'u1-fc3',
    question: 'What is a "Stock" variable?',
    answer: 'A variable measured at a particular point of time (e.g., Wealth, Capital).',
    category: 'Basic Concepts'
  },
  {
    id: 'u1-fc4',
    question: 'What is a "Flow" variable?',
    answer: 'A variable measured over a period of time (e.g., Income, Expenditure).',
    category: 'Basic Concepts'
  },
  {
    id: 'u1-fc5',
    question: 'Name the two sectors in a simple circular flow model.',
    answer: 'Households (owners of factors) and Firms (producers of goods).',
    category: 'Circular Flow'
  },
  {
    id: 'u1-fc6',
    question: 'Define Normal Residents.',
    answer: 'Individuals/Institutions who ordinarily reside in a country for more than a year and whose center of economic interest lies in that country.',
    category: 'Basic Concepts'
  },
  {
    id: 'u1-fc7',
    question: 'Formula for GDP at MP to NNP at FC?',
    answer: 'GDP at MP (-) Depreciation (+) NFIA (-) NIT = NNP at FC.',
    category: 'Aggregates'
  },
  {
    id: 'u1-fc8',
    question: 'What are Intermediate Goods?',
    answer: 'Goods used for resale or as raw material in the same year. Not included in National Income.',
    category: 'Basic Concepts'
  },
  {
    id: 'u1-fc9',
    question: 'What are Transfer Payments?',
    answer: 'Unilateral payments received without any productive service (e.g., Old age pension, scholarships).',
    category: 'Basic Concepts'
  },
  {
    id: 'u1-fc10',
    question: 'What is Real GDP?',
    answer: 'GDP valued at constant prices (base year prices). It measures physical output change.',
    category: 'Aggregates'
  },
  // --- NEW SEEDING (Expanding to 50+) ---
  {
    id: 'u1-fc11',
    question: 'Distinguish between Factor Income and Transfer Income.',
    answer: 'Factor Income is earned (e.g., Rent), Transfer Income is unearned (e.g., Gifts).',
    category: 'Classification'
  },
  {
    id: 'u1-fc12',
    question: 'What is NFIA?',
    answer: 'Net Factor Income from Abroad = Factor income from abroad - Factor income to abroad.',
    category: 'Calculation'
  },
  {
    id: 'u1-fc13',
    question: 'Is "Change in Stock" a flow unit?',
    answer: 'Yes, it is a flow variable because it is measured over the accounting year.',
    category: 'Classification'
  },
  {
    id: 'u1-fc14',
    question: 'Define Operating Surplus.',
    answer: 'Income from property and entrepreneurship (Rent + Interest + Profit).',
    category: 'Calculation'
  },
  {
    id: 'u1-fc15',
    question: 'What is Mixed Income?',
    answer: 'Income of self-employed people where factor inputs cannot be distinguished.',
    category: 'Definition'
  },
  {
    id: 'u1-fc16',
    question: 'Components of Compensation of Employees?',
    answer: 'Wages and salaries (cash/kind) + Social security contribution by employers.',
    category: 'Theory'
  },
  {
    id: 'u1-fc17',
    question: 'What is GVA at Market Price?',
    answer: 'Value of Output - Intermediate Consumption.',
    category: 'Calculation'
  },
  {
    id: 'u1-fc18',
    question: 'Define Private Final Consumption Expenditure.',
    answer: 'Total spending by households and non-profit institutions on final goods.',
    category: 'Application'
  },
  {
    id: 'u1-fc19',
    question: 'True/False: Second-hand goods are included in GDP.',
    answer: 'False. They were already included in the year produced; inclusion would be double counting.',
    category: 'True/False'
  },
  {
    id: 'u1-fc20',
    question: 'What is the "Marketed Surplus"?',
    answer: 'The portion of agricultural harvest sold in market by farmers after self-consumption.',
    category: 'Theory'
  },
  {
    id: 'u1-fc21',
    question: 'Define Capital Formation.',
    answer: 'Addition to the capital stock of an economy (investment).',
    category: 'Definition'
  },
  {
    id: 'u1-fc22',
    question: 'What is Net Indirect Tax (NIT)?',
    answer: 'Indirect Taxes - Subsidies.',
    category: 'Calculation'
  },
  {
    id: 'u1-fc23',
    question: 'Formula for GDP Deflator?',
    answer: '(Nominal GDP / Real GDP) * 100.',
    category: 'Calculation'
  },
  {
    id: 'u1-fc24',
    question: 'Define Money Flow.',
    answer: 'Flow of money across different sectors (e.g., payments for goods).',
    category: 'Circular Flow'
  },
  {
    id: 'u1-fc25',
    question: 'Define Real Flow.',
    answer: 'Flow of factor services and goods/services across sectors without money involvement.',
    category: 'Circular Flow'
  },
  {
    id: 'u1-fc26',
    question: 'What are Leakages in circular flow?',
    answer: 'Withdrawals of money from circular flow (e.g., Savings, Imports, Taxes).',
    category: 'Theory'
  },
  {
    id: 'u1-fc27',
    question: 'What are Injections in circular flow?',
    answer: 'Additions of money into circular flow (e.g., Investment, Exports, Govt spending).',
    category: 'Theory'
  },
  {
    id: 'u1-fc28',
    question: 'Difference between Domestic and National product?',
    answer: 'National Product = Domestic Product + NFIA.',
    category: 'Basic Concepts'
  },
  {
    id: 'u1-fc29',
    question: 'Can NFIA be negative?',
    answer: 'Yes, if factor income to abroad is greater than factor income from abroad.',
    category: 'True/False'
  },
  {
    id: 'u1-fc30',
    question: 'Define Nominal GDP.',
    answer: 'GDP valued at current market prices.',
    category: 'Aggregates'
  },
  {
    id: 'u1-fc31',
    question: 'Which GDP measures actual growth?',
    answer: 'Real GDP, as it eliminates price fluctuation effects.',
    category: 'Technical'
  },
  {
    id: 'u1-fc32',
    question: 'What is a Consumption Good?',
    answer: 'Goods used by households for direct satisfaction of wants.',
    category: 'Classification'
  },
  {
    id: 'u1-fc33',
    question: 'Are consumer durables "flow" or "stock"?',
    answer: 'The goods themselves are stocks; the service they provide over time is a flow.',
    category: 'Technical'
  },
  {
    id: 'u1-fc34',
    question: 'Define Depreciation.',
    answer: 'Fall in value of fixed assets due to normal wear/tear or expected obsolescence.',
    category: 'Definition'
  },
  {
    id: 'u1-fc35',
    question: 'Alternative name for Depreciation?',
    answer: 'Consumption of Fixed Capital.',
    category: 'Technical'
  },
  {
    id: 'u1-fc36',
    question: 'Define Value of Output.',
    answer: 'Market value of all goods and services produced by an enterprise in a year.',
    category: 'Calculation'
  },
  {
    id: 'u1-fc37',
    question: 'Does GDP indicate social welfare?',
    answer: 'Not completely, as it ignores distribution of income, pollution, and non-monetary exchanges.',
    category: 'Theory'
  },
  {
    id: 'u1-fc38',
    question: 'True/False: Self-consumed services are part of NI.',
    answer: 'False. They cannot be reliably valued (e.g., housewife services).',
    category: 'True/False'
  },
  {
    id: 'u1-fc39',
    question: 'True/False: Self-consumed goods are part of NI.',
    answer: 'True. They have an imputed market value.',
    category: 'True/False'
  },
  {
    id: 'u1-fc40',
    question: 'What is Net Domestic Product at Market Price (NDP at MP)?',
    answer: 'GDP at MP - Depreciation.',
    category: 'Calculation'
  },
  {
    id: 'u1-fc41',
    question: 'What is Net National Product at Market Price (NNP at MP)?',
    answer: 'NNP at FC + Net Indirect Taxes.',
    category: 'Aggregates'
  },
  {
    id: 'u1-fc42',
    question: 'Define Inventory.',
    answer: 'Stock of unsold finished goods, semi-finished goods, and raw materials.',
    category: 'Definition'
  },
  {
    id: 'u1-fc43',
    question: 'Is "Inventory Investment" a flow?',
    answer: 'Yes, it is the change in inventory over a period.',
    category: 'Classification'
  },
  {
    id: 'u1-fc44',
    question: 'Define Net Exports.',
    answer: 'Value of Exports - Value of Imports.',
    category: 'Definition'
  },
  {
    id: 'u1-fc45',
    question: 'What is "Propensity to Consume"?',
    answer: 'The ratio of consumption to income ($C/Y$).',
    category: 'Theory'
  },
  {
    id: 'u1-fc46',
    question: 'Define Private Income.',
    answer: 'Income from all sources earned/unearned by private sector (not in CBSE current CORE syllabus but helpful for logic).',
    category: 'Technical'
  },
  {
    id: 'u1-fc47',
    question: 'Is "Interest on National Debt" part of National Income?',
    answer: 'No, it is considered a transfer payment.',
    category: 'True/False'
  },
  {
    id: 'u1-fc48',
    question: 'Define Final Consumer Goods.',
    answer: 'Goods purchased by households for consumption.',
    category: 'Classification'
  },
  {
    id: 'u1-fc49',
    question: 'Difference between National and International income?',
    answer: 'NI is for residents; International involves globally tracked aggregates.',
    category: 'Theory'
  },
  {
    id: 'u1-fc50',
    question: 'What is the sum of GVA of all firms?',
    answer: 'Gross Domestic Product at Market Price ($GDP_{MP}$).',
    category: 'Calculation'
  },
  {
    id: 'u1-fc51',
    question: 'In which year did the Great Depression start?',
    answer: '1929. It led to high unemployment and fall in GDP in Europe and North America.',
    category: 'History'
  },
  {
    id: 'u1-fc52',
    question: 'Who is the author of "The General Theory of Employment, Interest and Money"?',
    answer: 'John Maynard Keynes. Published in 1936, it laid the foundation of modern Macroeconomics.',
    category: 'History'
  },
  {
    id: 'u1-fc53',
    question: 'Name two major macroeconomic decision makers in India.',
    answer: 'The Reserve Bank of India (RBI) and the Securities and Exchange Board of India (SEBI).',
    category: 'Basic Concepts'
  },
  {
    id: 'u1-fc54',
    question: 'Is machinery in a factory a Final Good or Intermediate Good?',
    answer: 'Final Good (specifically a Capital Good) because it is used for investment and not for resale or as raw material in the same year.',
    category: 'Classification'
  },
  {
    id: 'u1-fc55',
    question: 'Formula for GDP Deflator?',
    answer: '$\\text{GDP Deflator} = \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100$.',
    category: 'Calculation'
  }
];
