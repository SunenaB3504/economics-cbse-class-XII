import { CheatSheetItem } from '../../types';

export const CHEAT_SHEET: CheatSheetItem[] = [
  {
    id: 'u3-cs1',
    title: 'Functional Formulas',
    points: [
      '**Consumption Function:** C = C_bar + bY (where C_bar = Autonomous Consumption, b = MPC)',
      '**Saving Function:** S = -C_bar + (1-b)Y (where -C_bar = Autonomous Saving, 1-b = MPS)',
      '**MPC + MPS = 1**; **APC + APS = 1**',
      '**APC = C/Y**; **APS = S/Y**'
    ]
  },
  {
    id: 'u3-cs2',
    title: 'Investment Multiplier (k)',
    points: [
      '**k = ΔY / ΔI** (Ratio of change in income to change in investment).',
      '**k = 1 / (1 - MPC)** (Directly related to MPC).',
      '**k = 1 / MPS** (Inversely related to MPS).',
      '**Maximum value of k:** Infinity (when MPC=1).',
      '**Minimum value of k:** 1 (when MPC=0).'
    ]
  },
  {
    id: 'u3-cs3',
    title: 'Equilibrium Conditions',
    points: [
      '**AD = AS** (Aggregation Demand equals Aggregate Supply).',
      '**S = I** (Planned Saving equals Planned Investment).',
      '**Break-Even Point:** Level of income where **C = Y** and **S = 0**.',
      '**Equilibrium Y:** Calculated using Y = C_bar + bY + I (solve for Y).'
    ]
  },
  {
    id: 'u3-cs4',
    title: 'Critical Concepts (Unit 3)',
    points: [
      '**Ex-Ante:** Planned or intended values (the basis for equilibrium models).',
      '**Ex-Post:** Actual or realized values measured at end of year.',
      '**Induced vs Autonomous:** Induced depends on income (bY); Autonomous does not (C_bar, I).',
      '**Deflationary Gap:** Shortfall of AD relative to AS at full employment level.',
      '**Inflationary Gap:** Excess of AD over AS at full employment level.'
    ]
  },
  {
    id: 'u3-cs-acronyms',
    title: '📚 Essential Acronyms for Quick Recall',
    points: [
      '**AD & AS:** Aggregate Demand (total planned macroeconomic expenditure) and Aggregate Supply (total planned output).',
      '**C, I, S, Y:** Standard notations for Consumption, Investment, Savings, and National Income respectively.',
      '**MPC & MPS:** Marginal Propensity to Consume / Save (representing the change in C or S due to a given change in Y).',
      '**APC & APS:** Average Propensity to Consume / Save (the pure ratio of total C or S to total Y).'
    ]
  },
  {
    id: 'u3-cs5',
    title: '🎯 SQP Traps: Income Determination',
    points: [
      '**Investment Multiplier Trap (The "Leakage" Rule):** Higher Marginal Propensity to Save (MPS) drastically means a *Lower* Investment Multiplier (k = 1 / MPS). Always remember the inverse relationship.'
    ]
  }
];
