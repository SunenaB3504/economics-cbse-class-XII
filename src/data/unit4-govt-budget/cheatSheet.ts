import { CheatSheetItem } from '../../types';

export const CHEAT_SHEET: CheatSheetItem[] = [
  {
    id: 'u4-formulas',
    title: 'Budget Deficit & Multiplier Logic',
    points: [
      '**Revenue Deficit** = Revenue Expenditure - Revenue Receipts.',
      '**Fiscal Deficit** = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts). (Signifies total borrowing requirement).',
      '**Primary Deficit** = Fiscal Deficit - Interest Payments. (Shows current year borrowing excluding past interest).',
      '**Govt Expenditure Multiplier (k_g):** $1 / (1 - c)$ (where c is MPC).',
      '**Tax Multiplier (k_t):** -c / (1 - c).',
      '**Balanced Budget Multiplier:** Always equals 1.',
      '**Total Tax Receipts (T):** T = T + tY (Lump-sum + Proportional components).'
    ]
  },
  {
    id: 'u4-cs1',
    title: 'Functional Objectives of Budget',
    points: [
      '**Allocation:** Providing Public Goods (non-rivalrous/non-excludable) like Defense.',
      '**Redistribution:** Reducing inequality via Progressive taxes and Welfare Transfers.',
      '**Stabilisation:** Managing Aggregate Demand (AD) via Fiscal Policy tools.'
    ]
  },
  {
    id: 'u4-cs2',
    title: 'Receipts & Expenditure Logic',
    points: [
      '**Revenue Receipts:** No liability, No asset reduction (Taxes, Interest/Dividends).',
      '**Capital Receipts:** Creates liability or reduces asset (Borrowings, Recovery of Loans, Disinvestment).',
      '**Revenue Exp:** No asset creation, No liability reduction (Salaries, Interest Payments).',
      '**Capital Exp:** Creates asset or reduces liability (Infrastructure construction, Repayment of Loans).'
    ]
  },
  {
    id: 'u4-cs4',
    title: 'Fiscal Policy Tools',
    points: [
      '**Direct vs. Indirect Tax:** Direct (Income tax) burden cannot be shifted; Indirect (GST) shiftable to final consumer.',
      '**Public vs. Private:** Public goods (National Defense) are for all; Private goods (Clothing) are excludable.',
      '**Curb Inflation:** Decrease Govt Spending (G) or Increase Taxes (T).',
      '**Curb Deflation:** Increase Govt Spending (G) or Decrease Taxes (T).'
    ]
  }
];
