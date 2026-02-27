
import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u5-t1',
    title: 'Foreign Exchange Rate',
    description: 'Determination of exchange rates, demand/supply sources, and the impact of appreciation/depreciation.',
    content: `
# Foreign Exchange Rate

The Foreign Exchange Rate (also known as the Forex Rate) is the price of one currency in terms of another currency. It acts as a link between different nations' price levels.

### Systems of Exchange Rate:
1.  **Fixed Exchange Rate System:** The rate is officially set and maintained by the government or central bank. Historically, this included the **Gold Standard** (where currencies were valued in terms of gold) and the **Bretton Woods System** (pegged to the US Dollar).
2.  **Flexible Exchange Rate System:** Also called the **Floating Rate System**. The rate is determined freely by the market forces of Demand and Supply of foreign exchange. There is no official intervention.
3.  **Managed Floating System:** A hybrid system where the rate is primarily determined by market forces, but the Central Bank (Reserve Bank of India in India's case) occasionally intervenes by buying or selling foreign currency to prevent excessive volatility. This is often called **"Dirty Floating"**.

### Demand for Foreign Exchange (Why do we need it?)
We demand foreign currency (like US Dollars) for several reasons:
- **Imports:** To pay for goods and services bought from abroad.
- **Tourism:** To spend money while traveling to other countries.
- **Unilateral Transfers:** Sending gifts or money to people living abroad.
- **Investments:** Buying assets (land, shares) in foreign countries.
- **Speculation:** To profit from future changes in exchange rates.

*Note: There is an **inverse relationship** between the exchange rate and the demand for foreign exchange.*

### Supply of Foreign Exchange (Where does it come from?)
Foreign currency flows into our country through:
- **Exports:** Foreigners paying us for our goods and services.
- **Foreign Investment:** Direct investments (FDI) or Portfolio investments (FII/FPI) by foreigners.
- **Remittances:** Indians working abroad sending money back home.
- **Tourism:** Foreigners visiting our country and spending their currency.

### Currency Depreciation vs. Appreciation (Flexible System)
- **Currency Depreciation:** This happens when the value of the domestic currency falls in relation to a foreign currency. For example, if $1 rises from ₹80 to ₹83, the Rupee has depreciated.
    - **Effect on Exports:** Exports become cheaper for foreigners, leading to an **increase in exports**.
    - **Effect on Imports:** Imports become more expensive, leading to a **decrease in imports**.
- **Currency Appreciation:** This happens when the value of the domestic currency rises. For example, if $1 falls from ₹80 to ₹77, the Rupee has appreciated.
    - **Effect on Exports:** Exports become costlier, leading to a **decrease in exports**.
    - **Effect on Imports:** Imports become cheaper, leading to an **increase in imports**.

### Devaluation vs. Depreciation
- **Depreciation** is a market-driven fall in currency value under a **Flexible** system.
- **Devaluation** is a deliberate reduction in the value of the currency by the **Government** under a **Fixed** system.
    `,
    visualizations: [
      {
        id: 'u5-v1',
        title: 'Exchange Systems Comparison',
        type: 'table',
        data: {
          headers: ['Basis', 'Fixed Rate', 'Flexible Rate'],
          rows: [
            ['Determination', 'Government/Central Bank', 'Market Forces (Demand & Supply)'],
            ['Purpose', 'Stability in Foreign Trade', 'Automatic adjustment to market'],
            ['Intervention', 'Complete Control', 'Zero/Minimal Control']
          ]
        }
      },
      {
        id: 'u5-v2',
        title: 'Demand and Supply Factors',
        type: 'grid',
        data: [
          { label: 'Demand Sources', desc: 'Imports, Tourism abroad, Foreign Investment, Debt repayment.' },
          { label: 'Supply Sources', desc: 'Exports, Foreigners visiting us, FDI inflow, Remittances.' }
        ]
      }
    ]
  },
  {
    id: 'u5-t2',
    title: 'Balance of Payments (BoP)',
    description: 'Detailed structure of Current and Capital accounts, and the distinction between Autonomous and Accommodating items.',
    content: `
# Balance of Payments (BoP)

The Balance of Payments (BoP) is a systematic, double-entry record of all economic transactions between the residents of a country and the rest of the world during a specific period (usually one year).

### Components of Balance of Payments (BoP):

The BoP structure can be visualized as a two-part classification:

1. **Current Account**: Records exports/imports of goods (visible trade), services (invisible trade), and transfer payments (gifts, remittances).
2. **Capital Account**: Records all international purchases and sales of assets (money, stocks, bonds, real estate).

### Autonomous vs. Accommodating Items:
- **Autonomous Items**: These are international economic transactions that take place due to some economic motive like profit maximization. They are independent of the state of BoP and are called **'Above the Line'** items.
- **Accommodating Items**: These are transactions that are undertaken to cover the deficit or surplus in autonomous transactions (e.g., official reserve transactions). They are determined by the net consequence of autonomous items and are called **'Below the Line'** items.

### Balance of Trade (BoT) vs. Balance of Payments (BoP)
- **Balance of Trade (BoT):** Only considers the difference between exports and imports of **visible goods**.
- **Balance of Payments (BoP):** A much broader concept that includes goods, services, transfers, and capital flows.

### Autonomous vs. Accommodating Items
- **Autonomous Items:** These are transactions undertaken for individual profit motives (e.g., a trader importing goods). They are also called **"Above the Line"** items. They are independent of the state of BoP.
- **Accommodating Items:** These are transactions undertaken by the Central Bank to cover the gap (deficit or surplus) in the BoP created by autonomous items. They are called **"Below the Line"** items.

### BoP Equilibrium and Deficit
- **BoP Surplus:** When autonomous receipts > autonomous payments.
- **BoP Deficit:** When autonomous receipts < autonomous payments. (The deficit is then financed by using foreign exchange reserves or borrowing).

### Official Reserve Transactions (ORT)
Official Reserve Transactions are the "Below the line" (Accommodating) items through which the Central Bank manages the BoP balance.
- **Under Fixed Rates:** ORT is used to maintain the peg.
- **Under Managed Float:** ORT is used to curb volatility.
- **Under Pure Float:** ORT is zero as the market adjusts itself.

### NEER and REER
- **NEER (Nominal Effective Exchange Rate):** An index measuring the average value of a currency against a basket of weighted foreign currencies.
- **REER (Real Effective Exchange Rate):** The NEER adjusted for inflation differences. It indicates the "Real" international competitiveness of a country.
    `,
    visualizations: [
      {
        id: 'u5-v3',
        title: 'BoP Account Logic',
        type: 'table',
        data: {
          headers: ['Category', 'Current Account', 'Capital Account'],
          rows: [
            ['Focus', 'Flow of Income/Spending', 'Transfer of Assets/Liabilities'],
            ['Components', 'Goods, Services, Transfers', 'Investment, Loans'],
            ['Significance', 'Shows Net Profit/Loss', 'Shows Net Financial Claims']
          ]
        }
      },
      {
        id: 'u5-v4',
        title: 'Autonomous vs Accommodating',
        type: 'grid',
        data: [
          { label: 'Autonomous Items', desc: 'Profit-driven (Export/Import). Unrelated to BoP state. "Above the line".' },
          { label: 'Accommodating Items', desc: 'Correction-driven (Reserve usage). Related to BoP state. "Below the line".' }
        ]
      }
    ]
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
