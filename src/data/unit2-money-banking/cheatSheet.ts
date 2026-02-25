import { CheatSheetItem } from '../../types';

export const CHEAT_SHEET: CheatSheetItem[] = [
  {
    id: 'u2-cs-formulas',
    title: 'Money & Banking Numerical Logic',
    points: [
      '**Purchasing Power of Money:** V_m = 1/P (where P is the price level).',
      '**Velocity of Circulation (V):** V = PY / M (Relation between Money Supply and Total Spending).',
      '**Transaction Demand (M^T_d):** M^T_d = k \cdot PY or v \cdot M = P \cdot Y.',
      '**Money Multiplier:** 1 / LRR (or 1 / (CRR + SLR)).',
      '**Total Credit Creation:** Initial Deposit × (1 / LRR).',
      '**Present Value of a Bond (P):** P = Coupon / i (Shows inverse relation between P and interest rate).'
    ]
  },
  {
    id: 'u2-cs1',
    title: 'Money Supply Measures (RBI)',
    points: [
      '**M1 (Narrow):** Currency with public + Demand Deposits + Other deposits with RBI.',
      '**M2:** M1 + Post Office Savings Bank deposits.',
      '**M3 (Broad):** M1 + Net Time Deposits with Banks (used as standard broad money).',
      '**M4:** M3 + Total Post Office Deposits (Excluding NSC).'
    ]
  },
  {
    id: 'u2-cs2',
    title: 'Quantitative Tools (Volume Control)',
    points: [
      '**Bank Rate/Repo Rate:** Increase -> Expensive borrowing -> Decrease Money Supply.',
      '**CRR/SLR:** Increase -> Lower loanable funds -> Decrease Money Supply.',
      '**OMO (Sale):** RBI sells bonds -> Absorbs cash -> Decrease Money Supply.',
      '**OMO (Purchase):** RBI buys bonds -> Injects cash -> Increase Money Supply.'
    ]
  },
  {
    id: 'u2-cs3',
    title: 'Qualitative Tools (Directional Control)',
    points: [
      '**Margin Requirement:** Difference between collateral value and loan amount. Increase -> Lower credit.',
      '**Moral Suasion:** Persuasion/Directive by RBI to banks to restrict/expand credit.',
      '**Selective Credit Control:** Directing credit to productive sectors and away from speculative ones.'
    ]
  },
  {
    id: 'u2-cs-acronyms',
    title: '📚 Essential Acronyms for Quick Recall',
    points: [
      '**RBI (Reserve Bank of India):** The central bank responsible for monetary policy and currency issuance.',
      '**LRR (Legal Reserve Ratio):** The minimum fraction of total deposits legally required to be kept as reserves.',
      '**CRR (Cash Reserve Ratio):** Fraction of deposits commercial banks must strictly keep as cash balance *with the RBI*.',
      '**SLR (Statutory Liquidity Ratio):** Fraction of deposits banks must maintain *with themselves* in designated liquid assets.',
      '**OMO (Open Market Operations):** Buying and selling of government securities by the central bank to control liquidity.'
    ]
  },
  {
    id: 'u2-cs4',
    title: '🎯 SQP Traps: Money & Banking',
    points: [
      '**Inverse Relation Trap (The "Leakage" Rule):** Savings (MPS) and Reserves (LRR) are leakages. Higher Legal Reserve Ratio (LRR) logically means *Lower* Credit Creation, simply because Multiplier = 1 / LRR. Don\'t fall for tricky phrasing in MCQs!'
    ]
  }
];
