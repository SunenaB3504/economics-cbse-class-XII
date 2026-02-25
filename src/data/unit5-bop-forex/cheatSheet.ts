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
      '**Depreciation:** Fall in domestic currency value (Flexible) \-> Exports \↑, Imports \↓.',
      '**Appreciation:** Rise in domestic currency value (Flexible) \-> Exports \↓, Imports \↑.',
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
    ]
  },
  {
    id: 'u5-cs-acronyms',
    title: '📚 Essential Acronyms for Quick Recall',
    points: [
      '**BoP (Balance of Payments):** Comprehensive systematic record of all economic transactions with the rest of the world.',
      '**BoT (Balance of Trade):** Monetary difference between export and import of physical, visible goods only.',
      '**FDI (Foreign Direct Investment):** Long-term foreign investment giving the investor operational control over the asset.',
      '**FPI (Foreign Portfolio Investment):** Short-term fluid investment in financial assets purely for returns (No active control).',
      '**ORT (Official Reserve Transactions):** Dedicated transactions by the central bank to settle BoP deficits or absorb surpluses.',
      '**NEER & REER:** Nominal and Real Effective Exchange Rates (trade-weighted multifaceted indices for currency valuation).'
    ]
  },
  {
    id: 'u5-cs5',
    title: '🎯 SQP Traps: BoP & Forex',
    points: [
      '**Currency Decoding (The "Apple" Rule):** Treat the Dollar like an Apple. If ₹82 = $1 becomes ₹83 = $1, you are paying *more* Rupees per Apple. The intrinsic value of the Rupee has fallen. The Rupee has **Depreciated** (or Devalued if pegged), directly promoting Indian Exports!'
    ]
  }
];
