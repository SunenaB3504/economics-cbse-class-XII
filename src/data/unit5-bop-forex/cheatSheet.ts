import { CheatSheetItem } from '../../types';

export const CHEAT_SHEET: CheatSheetItem[] = [
  {
    id: 'u5-cs1',
    title: 'Core BoP Formulas',
    points: [
      '**Balance of Trade (BoT)** = Exports of Goods - Imports of Goods.',
      '**Current Account Balance** = Trade Balance + Invisible Balance + Net Transfers.',
      '**Capital Account Balance** = Net FDI + Net Portfolio Investment + Net External Borrowings.',
      '**BoP Identity**: Current Account + Capital Account + Errors & Omissions = 0 (accounting for reserve changes).',
      '**BoP Surplus**: Autonomous Receipts > Autonomous Payments.',
      '**BoP Deficit**: Autonomous Payments > Autonomous Receipts.'
    ]
  },
  {
    id: 'u5-cs2',
    title: 'Exchange Rate Dynamics',
    points: [
      '**Depreciation:** Fall in domestic currency value (Flexible) $\\rightarrow$ Exports $\\uparrow$, Imports $\\downarrow$.',
      '**Appreciation:** Rise in domestic currency value (Flexible) $\\rightarrow$ Exports $\\downarrow$, Imports $\\uparrow$.',
      '**Devaluation:** Deliberate reduction in currency value by Govt (Fixed).',
      '**Managed Floating:** "Dirty Float" - market determined with RBI intervention.',
      '**NEER vs REER:** NEER is trade-weighted nominal; REER is price/inflation adjusted.'
    ]
  },
  {
    id: 'u5-cs3',
    title: 'Acronyms & Definitions',
    points: [
      '**FDI (Foreign Direct Investment):** Control-oriented long-term investment in physical assets.',
      '**FPI/Portfolio:** Asset-oriented short-term investment in financial papers (No control).',
      '**Invisible Items:** Non-factor services (Shipping, Banking) + Factor Income (Interest, Dividends) + Transfers.',
      '**Official Reserve Transactions (ORT):** Accommodating items used to settle the final BoP balance.'
    ]
  },
  {
    id: 'u5-cs4',
    title: 'Transaction Categories',
    points: [
      '**Autonomous Items:** "Above the line" - done for profit, independent of BoP state.',
      '**Accommodating Items:** "Below the line" - done to cover BoP gap (e.g., ORT, IMF loans).',
      '**Visible Trade:** Only merchandise (physical goods).',
      '**Unilateral Transfers:** One-way flows like gifts and remittances.'
