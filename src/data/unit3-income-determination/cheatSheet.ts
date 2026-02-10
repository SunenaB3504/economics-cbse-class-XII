import { CheatSheetItem } from '../../types';

export const CHEAT_SHEET: CheatSheetItem[] = [
  {
    id: 'u3-cs1',
    title: 'Functional Formulas',
    points: [
      '**Consumption Function:** $C = \bar{C} + bY$ (where $\bar{C} = \text{Autonomous Consumption}$, $b = \text{MPC}$)',
      '**Saving Function:** $S = -\bar{C} + (1-b)Y$ (where $-\bar{C} = \text{Autonomous Saving}$, $1-b = \text{MPS}$)',
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
      '**Equilibrium Y:** Calculated using $Y = \bar{C} + bY + I$ (solve for Y).'
    ]
  },
  {
    id: 'u3-cs4',
    title: 'Critical Concepts (Unit 3)',
    points: [
      '**Ex-Ante:** Planned or intended values (the basis for equilibrium models).',
      '**Ex-Post:** Actual or realized values measured at end of year.',
      '**Induced vs Autonomous:** Induced depends on income (bY); Autonomous does not ($\bar{C}, I$).',
      '**Deflationary Gap:** Shortfall of AD relative to AS at full employment level.',
      '**Inflationary Gap:** Excess of AD over AS at full employment level.'
    ]
  }
];
