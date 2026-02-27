
import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u4-t1',
    title: 'Meaning and Objectives of the Government Budget',
    description: 'Definition of the annual budget and its primary socio-economic functions.',
    content: [
      'Government Budget: An annual financial statement showing item-wise estimates of expected revenue and anticipated expenditure during a fiscal year (April 1 to March 31).',
      'Allocation Function: Providing "Public Goods" (like street lights, national defense) which cannot be provided through the market mechanism because they are non-rivalrous and non-excludable.',
      'Redistribution Function: Using taxes (Progressive) and transfers (Subsidies/Welfare) to reduce income and wealth inequalities in the society.',
      'Stabilisation Function: Managing aggregate demand through fiscal policy to prevent fluctuations like inflation (excess demand) or unemployment/deflation (deficient demand).'
    ],
    visualizations: [
      {
        id: 'u4-v1',
        title: 'Core Objectives of Fiscal Policy',
        type: 'grid',
        data: [
          { label: 'Allocation', desc: 'Providing public goods vs private goods.' },
          { label: 'Redistribution', desc: 'Progressive taxation and welfare transfers.' },
          { label: 'Stabilisation', desc: 'Controlling inflation and building demand.' }
        ]
      }
    ]
  },
  {
    id: 'u4-t2',
    title: 'Classification of the Government Budget',
    description: 'The hierarchical breakdown into Revenue and Capital components.',
    content: [
      'Revenue Budget: Consists of Revenue Receipts (Tax like GST, Non-tax like interest) and Revenue Expenditure (salaries, interest payments) which do not change asset/liability status.',
      'Capital Budget: Consists of Capital Receipts (Borrowing, Disinvestment) and Capital Expenditure (Infrastructure, Loan Repayment) which directly impact asset/liability status.',
      'Direct vs Indirect Tax: Direct taxes (Income Tax) cannot be shifted to others; Indirect taxes (GST) can be shifted to the final consumer.',
      'Recovery of Loans: This is a Capital Receipt because it reduces the financial assets (debtors) of the government.'
    ],
    visualizations: [
      {
        id: 'u4-v2-t1',
        title: 'Table 5.1: Components of Government Budget',
        type: 'table',
        data: {
          headers: ['Budget Component', 'Items Included'],
          rows: [
            ['Revenue Receipts', 'Tax Revenue (Net), Non-Tax Revenue'],
            ['Capital Receipts', 'Recoveries of Loans, Disinvestments, Borrowings'],
            ['Total Receipts', 'Revenue Receipts + Capital Receipts'],
            ['Revenue Expenditure', 'Interest Payments, Subsidies, Grants'],
            ['Capital Expenditure', 'Creation of structural assets, Loans given'],
            ['Total Expenditure', 'Revenue Expenditure + Capital Expenditure']
          ]
        }
      },
      {
        id: 'u4-budget-chart',
        title: 'The Government Budget Structure',
        type: 'process',
        data: [
          { title: 'Government Budget', description: 'Total estimates for the fiscal year.' },
          { title: 'Revenue Account', description: 'Receipts (Tax/Non-tax) and Expenditure (Revenue).' },
          { title: 'Capital Account', description: 'Receipts (Borrowings/Disinvestment) and Expenditure (Assets/Debt Repay).' }
        ]
      }
    ]
  },
  {
    id: 'u4-t3',
    title: 'Deficit Measures and Fiscal Logic',
    description: 'Formulae and implications of Revenue, Fiscal, and Primary deficits.',
    content: [
      'Revenue Deficit (RD): Revenue Expenditure - Revenue Receipts. Indicates lack of current savings.',
      'Fiscal Deficit (FD): Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts). It shows total borrowing requirements.',
      'Primary Deficit (PD): Fiscal Deficit - Interest Payments. Shows borrowings for purposes other than servicing past debt.',
      'Fiscal Policy Tools: To curb Inflation, decrease Govt Spending (G) or increase Taxes (T). To curb Deflation, increase G or decrease T.',
      'Debt and Deficit: Frequent fiscal deficits lead to accumulation of debt. Interest on this debt then increases future revenue expenditure.'
    ],
    visualizations: [
      {
        id: 'v-fiscal-impact',
        title: 'Impact of Policy on AD',
        type: 'steps',
        data: [
          'Expansionary: Increase G or Decrease T -> AD shifts UP.',
          'Contractionary: Decrease G or Increase T -> AD shifts DOWN.'
        ]
      }
    ]
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
