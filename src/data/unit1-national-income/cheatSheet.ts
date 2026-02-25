
import { CheatSheetItem } from '../../types';

export const CHEAT_SHEET: CheatSheetItem[] = [
  {
    id: 'cs1',
    title: 'The Golden Rules (Identity Conversions)',
    points: [
      '**Gross to Net:** Gross Value - Depreciation = Net Value (Note: Depreciation is also called "Consumption of Fixed Capital")',
      '**National to Domestic:** National Product - NFIA = Domestic Product (Note: NFIA = Factor Income from Abroad - Factor Income to Abroad)',
      '**MP to FC:** Market Price (MP) - Net Indirect Taxes (NIT) = Factor Cost (FC)',
      '**NIT Formula:** Net Indirect Taxes = Indirect Taxes - Subsidies'
    ]
  },
  {
    id: 'cs2',
    title: 'Value Added Method (Product Method)',
    points: [
      '**GVA at MP:** Value of Output - Intermediate Consumption',
      '**Value of Output:** Sales + Change in Stock (if all output is not sold)',
      '**Change in Stock:** Closing Stock - Opening Stock',
      '**Note:** Intermediate consumption excludes purchase of fixed assets (e.g., machinery).'
    ]
  },
  {
    id: 'cs3',
    title: 'Income Method (Factor Payment Method)',
    points: [
      '**NDP at FC (Domestic Income):** Compensation of Employees (CoE) + Operating Surplus (OS) + Mixed Income of Self-Employed (MI)',
      '**CoE components:** Wages/Salaries in cash/kind + Employer\'s contribution to Social Security schemes.',
      '**Operating Surplus:** Rent + Interest + Profit.',
      '**Profit breakdown:** Corporate Tax + Dividends + Retained Earnings (Undistributed Profits).',
      '**National Income (NNP at FC):** NDP at FC + NFIA.'
    ]
  },
  {
    id: 'cs4',
    title: 'Expenditure Method',
    points: [
      '**GDP at MP:** C + I + G + (X - M)',
      '**C (PFCE):** Private Final Consumption Expenditure.',
      '**G (GFCE):** Government Final Consumption Expenditure.',
      '**I (GDCF):** Gross Domestic Capital Formation = Gross Fixed Capital Formation + Change in Stock.',
      '**(X - M):** Net Exports (Exports - Imports).'
    ]
  },
  {
    id: 'cs5',
    title: 'Real vs Nominal GDP',
    points: [
      '**Real GDP:** Measured at Constant Prices (Base Year Prices). Better index of welfare.',
      '**Nominal GDP:** Measured at Current Prices. Can increase due to inflation without any increase in output.',
      '**GDP Deflator:** (Nominal GDP / Real GDP) × 100. Measures price level changes.'
    ]
  },
  {
    id: 'cs6',
    title: 'Inclusion/Exclusion Precautions',
    points: [
      '**Excluded:** Intermediate Goods, Transfer Payments (Old age pension, scholarships), Windfall Gains (Lottery), Sale of Second-hand goods (value already counted), Capital Gains.',
      '**Included:** Self-consumption of goods (e.g., farmer keeping wheat), Brokerage on second-hand sales (new service), Imputed rent of owner-occupied houses.'
    ]
  },
  {
    id: 'cs-acronyms',
    title: '📚 Essential Acronyms for Quick Recall',
    points: [
      '**GDP (Gross Domestic Product):** Total market value of all final goods produced within the domestic territory.',
      '**NDP (Net Domestic Product):** GDP minus Depreciation (wear and tear of fixed assets).',
      '**GNP (Gross National Product):** Total value added by normal residents (GDP + NFIA).',
      '**NFIA (Net Factor Income from Abroad):** Factor income earned from abroad minus factor income paid abroad.',
      '**NIT (Net Indirect Taxes):** Indirect taxes minus subsidies. It is the bridge between Market Price and Factor Cost.',
      '**GVA (Gross Value Added):** Value of Output minus Intermediate Consumption.',
      '**CoE (Compensation of Employees):** Wages, salaries, and employer contributions to social security.',
      '**OS (Operating Surplus):** Income from property and entrepreneurship (Rent + Interest + Profit).',
      '**MI (Mixed Income):** Income of self-employed individuals where wages and profits cannot be cleanly separated.',
      '**PFCE & GFCE:** Private and Government Final Consumption Expenditures.',
      '**GDCF (Gross Domestic Capital Formation):** Total gross investment in the economy (Fixed Capital + Change in Stock).'
    ]
  },
  {
    id: 'cs7',
    title: '🎯 SQP Traps: National Income',
    points: [
      '**The Assertion-Reasoning Master Hack (T/F First Rule):** Treat Assertion (A) and Reason (R) strictly as two isolated True/False statements. If ONE is false, answer is C or D. Only if BOTH are true, mentally insert "BECAUSE" between them. If it flows logically, it\'s A; otherwise B.',
      '**Stock vs Flow Trap:** If it is measured "over a period of time" (Investment, Income, Depreciation), it is a **Flow**. If it is measured "at a specific point in time" (Capital, Wealth, Money Supply), it is a **Stock**.',
      '**Intermediate Trap (The Fixed Asset Rule):** Never include the purchase of machinery or fixed assets in intermediate consumption! Intermediate goods are single-use raw materials.',
      '**Phase Mappings:** Generation Phase = Output. Distribution Phase = Income. Disposition Phase = Expenditure.'
    ]
  }
];
