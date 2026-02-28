import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u5-t1',
    title: 'Foreign Exchange Rate — Systems, Demand and Supply',
    description: 'The price of one currency in terms of another, how exchange rates are determined, and the three systems of exchange rate management.',
    content: [
      'Foreign Exchange Rate — Definition: The Foreign Exchange Rate (also called the Forex Rate) is the rate at which one country\'s currency is exchanged for another country\'s currency. It represents the PRICE of one currency in terms of another. Example: If ₹83 = $1, then ₹83 is the price of one US Dollar in Indian Rupees. The foreign exchange rate acts as a bridge between different nations\' price levels — connecting the Indian price of a good to its equivalent price in dollars, euros or pounds.',
      'System 1 — Fixed Exchange Rate System: The exchange rate is OFFICIALLY SET and maintained by the government or central bank at a predetermined level — it does not change with market forces. To maintain the fixed rate, the central bank must buyand sell foreign exchange whenever market pressure pushes the rate away from the fixed level. HISTORICAL CONTEXT: (a) GOLD STANDARD (before 1930s): Each currency was defined in terms of a fixed weight of gold — if $1 = 1/20 oz gold and £1 = 1/4 oz gold, then exchange rate was fixed at $5 = £1. The Great Depression (1929) broke the global Gold Standard. (b) BRETTON WOODS SYSTEM (1944–1971): Major currencies were pegged to the US Dollar ($), and the US Dollar was pegged to gold ($35 = 1 troy oz of gold). The International Monetary Fund (IMF) was created to manage this system. Collapsed in 1971 when the US suspended dollar-gold convertibility. ADVANTAGES: Stable exchange rates reduce uncertainty for exporters/importers. DISADVANTAGES: Requires large foreign exchange reserves; limits monetary policy flexibility.',
      'System 2 — Flexible Exchange Rate System (Floating): The exchange rate is determined freely by MARKET FORCES of Demand and Supply of foreign exchange — with NO government or central bank intervention. Also called the FLOATING EXCHANGE RATE SYSTEM. The rate moves up and down based on market conditions — if demand for dollars rises, the rupee depreciates; if supply of dollars rises, the rupee appreciates. ADVANTAGES: Automatic adjustment — no need to hold large reserves; monetary policy freedom. DISADVANTAGES: Exchange rate volatility → uncertainty for trade and investment; speculation can cause wild swings.',
      'System 3 — Managed Floating System (Dirty Floating): A HYBRID system — the exchange rate is primarily determined by market forces, but the Central Bank (Reserve Bank of India in India\'s case) INTERVENES OCCASIONALLY to prevent excessive volatility and keep the rate within a desired range. Also called DIRTY FLOATING (because it is not pure market-based). India currently uses this system. For example: If the rupee depreciates sharply (dollar rises to ₹90), Reserve Bank of India sells dollars from its reserves → increases supply of dollars → rupee stabilises. If the rupee appreciates too much (dollar falls to ₹78), Reserve Bank of India buys dollars → drains rupees from market → prevents excessive appreciation (which would hurt exports).',
      'Demand for Foreign Exchange — Why do we need it? We demand foreign currency (like US Dollars) for several reasons: (1) IMPORTS: Paying for goods and services bought from abroad (the largest source of demand). (2) TOURISM ABROAD: An Indian travelling to France needs euros — exchanges rupees for euros. (3) UNILATERAL TRANSFERS: Sending gifts or remittances to family living abroad. (4) FOREIGN INVESTMENT: Indian firms buying assets, shares, or factories abroad (Indian companies investing in companies overseas). (5) DEBT REPAYMENT: Repaying loans taken from foreign banks or institutions in their currency. (6) SPECULATION: Buying foreign currency expecting it to appreciate — to profit from favorable exchange rate movements. KEY RELATIONSHIP: The Demand Curve for foreign exchange SLOPES DOWNWARD — as the exchange rate (price of foreign currency) rises, imports become expensive → demand for foreign goods/services falls → demand for foreign currency falls. Inverse relationship between exchange rate and demand for foreign exchange.',
      'Supply of Foreign Exchange — Where does it come from? Foreign currency flows INTO a country from: (1) EXPORTS: Foreigners paying for our goods and services — the largest source of forex supply. (2) FOREIGN DIRECT INVESTMENT (FDI) INFLOW: Foreign companies establishing factories or businesses in India → bring their capital in foreign currency. (3) FOREIGN PORTFOLIO INVESTMENT (FPI): Foreign investors buying Indian stocks/bonds → convert their foreign currency to rupees → supply of forex rises. (4) REMITTANCES: Overseas Indians (NRIs — Non-Resident Indians) sending money home → convert foreign currency to rupees. (5) FOREIGN TOURISTS: Visitors to India spending their foreign currency here. (6) EXTERNAL COMMERCIAL BORROWING (ECB): Indian companies borrowing from foreign banks → receive foreign currency. KEY RELATIONSHIP: The Supply Curve for foreign exchange SLOPES UPWARD — as the exchange rate rises (rupee weakens), Indian exports become cheaper for foreigners → they buy more from India → more foreign currency flows in. Direct relationship between exchange rate and supply of foreign exchange.',
      'Currency Depreciation vs Appreciation (Flexible System): CURRENCY DEPRECIATION: A FALL in the value of the domestic currency relative to a foreign currency due to market forces — under a FLEXIBLE exchange rate system. Example: $1 rises from ₹80 to ₹85 → rupee has DEPRECIATED (you need MORE rupees to buy one dollar). EFFECTS: Exports become CHEAPER for foreigners → exports INCREASE. Imports become MORE EXPENSIVE → imports DECREASE. Net effect: Usually IMPROVES balance of trade (helps exporters, hurts importers). CURRENCY APPRECIATION: A RISE in the value of the domestic currency due to market forces. Example: $1 falls from ₹80 to ₹75 → rupee has APPRECIATED. EFFECTS: Exports become COSTLIER → exports FALL. Imports become CHEAPER → imports RISE.',
      'Devaluation vs Depreciation, and Revaluation vs Appreciation: DEVALUATION: A deliberate, policy-driven REDUCTION in the official exchange rate by the GOVERNMENT or central bank under a FIXED exchange rate system. Example: India devalued the rupee in 1966 and 1991. Different from depreciation — devaluation is a government DECISION; depreciation is a market OUTCOME. REVALUATION: A deliberate, policy-driven INCREASE in the official exchange rate by the government under a fixed exchange rate system — opposite of devaluation. Both devaluation and depreciation make domestic goods cheaper for foreigners (exports rise). Both revaluation and appreciation make domestic goods costlier for foreigners (exports fall).',
      'Spot Rate and Forward Rate: SPOT RATE: The exchange rate prevailing in the market for IMMEDIATE delivery/settlement of foreign exchange. "What is the dollar worth right now?" Used for immediate transactions. FORWARD RATE: The exchange rate agreed upon TODAY for a transaction that will occur at a SPECIFIED FUTURE DATE (e.g., 3 months from now). Used to lock in a price for future currency needs. The forward rate may differ from the spot rate — if the forward rate is higher than spot rate, the foreign currency is at a FORWARD PREMIUM (expected to appreciate). HEDGING using Forward Rate: A business expecting to pay $100,000 in 3 months can enter a forward contract TODAY at today\'s agreed forward rate — protecting against rupee depreciation. This is using the forex market as INSURANCE against exchange rate risk.',
      'NEER and REER — Measuring Currency Competitiveness: NEER (Nominal Effective Exchange Rate): A WEIGHTED AVERAGE of bilateral exchange rates of the domestic currency against a BASKET of foreign currencies of major trading partners (weighted by trade shares). Unlike a simple bilateral rate (₹ vs $), NEER captures the exchange rate against ALL trading partners together. REER (Real Effective Exchange Rate): NEER ADJUSTED for INFLATION DIFFERENCES between India and its trading partners. Formula: REER = NEER × (Price Level Abroad / Price Level at Home). REER is the true indicator of India\'s INTERNATIONAL COMPETITIVENESS. If India\'s inflation is higher than competitors, even a stable NEER means the rupee is effectively OVERVALUED (Indian goods are relatively more expensive) — REER rises, meaning India has become less competitive.'
    ],
    visualizations: [
      {
        id: 'u5-v1',
        title: 'Three Exchange Rate Systems — Complete Comparison',
        type: 'table',
        data: {
          headers: ['Feature', 'Fixed Rate', 'Flexible (Floating) Rate', 'Managed Floating (Dirty Float)'],
          rows: [
            ['Rate Determination', 'Government/Central Bank sets official rate', 'Pure market forces (Demand & Supply)', 'Market forces primary; RBI intervenes selectively'],
            ['Government Intervention', 'Continuous — must defend the rate', 'Zero', 'Occasional — to prevent excess volatility'],
            ['Foreign Reserve Need', 'LARGE reserves to maintain peg', 'Minimal — market clears itself', 'Moderate reserves to intervene selectively'],
            ['Key Advantage', 'Stability for trade/investment', 'Automatic adjustment; monetary policy free', 'Balance: stability without full reserve commitment'],
            ['Key Disadvantage', 'Limits monetary policy; reserve drain risk', 'Volatility; speculation risk', 'Lacks transparency; discretionary'],
            ['Historical Example', 'Gold Standard; Bretton Woods (1944–71)', 'US, UK, Eurozone today', 'India, China today']
          ]
        }
      },
      {
        id: 'u5-v2',
        title: 'Demand vs Supply of Foreign Exchange',
        type: 'table',
        data: {
          headers: ['Feature', 'Demand for Foreign Exchange', 'Supply of Foreign Exchange'],
          rows: [
            ['Sources', 'Imports, Tourism abroad, Foreign Investment, Debt repayment, Speculation', 'Exports, Foreign Direct Investment inflow, Foreign Portfolio Investment, Remittances (NRI), Foreign tourists'],
            ['Curve Direction', 'DOWNWARD SLOPING', 'UPWARD SLOPING'],
            ['Relationship with Rate', 'INVERSE — rate rises → demand falls', 'DIRECT — rate rises → supply rises'],
            ['Logic', 'Higher rate → imports costlier → less demand for forex', 'Higher rate → exports cheaper for foreigners → more forex inflow']
          ]
        }
      },
      {
        id: 'v-dep-dev',
        title: 'Depreciation vs Devaluation vs Appreciation vs Revaluation',
        type: 'table',
        data: {
          headers: ['Term', 'Direction of Change', 'System', 'Cause', 'Effect on Exports'],
          rows: [
            ['Depreciation', 'Domestic currency FALLS in value', 'Flexible/Floating', 'Market forces (supply/demand)', 'Exports RISE (cheaper for foreigners)'],
            ['Devaluation', 'Domestic currency FALLS in value', 'Fixed', 'Government policy decision', 'Exports RISE (cheaper for foreigners)'],
            ['Appreciation', 'Domestic currency RISES in value', 'Flexible/Floating', 'Market forces', 'Exports FALL (costlier for foreigners)'],
            ['Revaluation', 'Domestic currency RISES in value', 'Fixed', 'Government policy decision', 'Exports FALL (costlier for foreigners)']
          ]
        }
      }
    ]
  },
  {
    id: 'u5-t2',
    title: 'Balance of Payments (BoP) — Structure and Components',
    description: 'The complete structure of the Balance of Payments account — Current Account, Capital Account, Autonomous vs Accommodating items, and what deficits/surpluses mean.',
    content: [
      'Balance of Payments (BoP) — Definition: The Balance of Payments is a systematic, double-entry record of ALL ECONOMIC TRANSACTIONS between the residents of a country and the rest of the world during a specific accounting period (usually one year). KEY FEATURES: (1) DOUBLE-ENTRY: Every transaction creates a CREDIT entry (receipt of foreign exchange — money coming in) and a DEBIT entry (payment of foreign exchange — money going out). By the accounting identity, total credits = total debits — the BoP ALWAYS BALANCES IN AN ACCOUNTING SENSE. (2) COMPREHENSIVE: Covers goods, services, income flows, capital flows, and financial transfers. (3) PERIOD-BASED: A FLOW concept — recorded over a specific time period (unlike foreign exchange reserves, which are a stock).',
      'Structure of BoP — Two Main Accounts: The BoP is divided into: (1) CURRENT ACCOUNT: Records all transactions related to CURRENT income/expenditure (goods, services, transfers) — does not change asset/liability position permanently. (2) CAPITAL ACCOUNT: Records all transactions that CHANGE ASSET OR LIABILITY positions — investments, loans, borrowings, foreign exchange reserve changes.',
      'Current Account — Sub-components: The Current Account has three parts: (A) VISIBLE TRADE (Balance of Trade / Merchandise Trade): Exports and imports of PHYSICAL GOODS that can be seen and tracked at customs — oil, machinery, electronics, wheat, cars. Visible exports = Credit (money in). Visible imports = Debit (money out). BALANCE OF TRADE (BoT) = Visible Exports − Visible Imports. If imports > exports → TRADE DEFICIT. (B) INVISIBLE TRADE (Services): Transactions involving SERVICES — which have no physical existence and cannot be seen crossing borders. Examples: Banking, insurance, shipping, tourism, Information Technology services, education, royalties. An Indian software company earning from a US client → Credit in services. An Indian student paying fees to a UK university → Debit in services. (C) UNILATERAL TRANSFERS (Transfer Payments): One-sided transfers for which NO PRODUCTIVE SERVICE is rendered in return — no quid pro quo (nothing in exchange). Examples: Remittances from Non-Resident Indians (NRIs) living abroad sending money home, foreign aid/grants received, gifts, donations to/from foreign organisations. CURRENT ACCOUNT BALANCE = Visible Trade + Invisible Trade + Unilateral Transfers.',
      'Current Account Deficit (CAD) — Significance: CURRENT ACCOUNT DEFICIT (CAD) occurs when the value of imports of goods + services + transfers EXCEEDS exports. It means the country is SPENDING MORE abroad than it is earning abroad — it is living beyond its means internationally. To finance the CAD, a country must BORROW from abroad or deplete its foreign exchange reserves. A sustainable CAD (financed by productive Foreign Direct Investment) can be healthy — it finances growth. An unsustainable CAD (financed by short-term debt or "hot money" outflows) is dangerous — India\'s 2013 "Taper Tantrum" crisis was triggered by a high CAD. India chronically runs a CAD because it imports far more oil, electronics, and gold than it exports — partially offset by a large services surplus (Information Technology) and high Non-Resident Indian remittances.',
      'Capital Account — Sub-components: The Capital Account records all transactions that CHANGE ASSETS OR LIABILITIES. Its main components: (A) FOREIGN DIRECT INVESTMENT (FDI): Investment by a foreign entity in India with MANAGERIAL CONTROL — typically building factories, buying majority stakes in companies. Long-term, stable investment. Brings technology, jobs, management expertise. Credit in Capital Account when FDI flows IN. (B) FOREIGN PORTFOLIO INVESTMENT (FPI) — also called Foreign Institutional Investment (FII): Investment by foreign entities in Indian financial markets (stocks, bonds, mutual funds) WITHOUT managerial control. Called "HOT MONEY" because it can leave the country rapidly during uncertainty. Volatile — can cause sharp currency movements when FPIs exit. (C) EXTERNAL COMMERCIAL BORROWING (ECB): Loans taken by Indian companies from foreign banks or financial institutions at commercial (market) rates. Creates a future liability (principal + interest must be repaid in foreign currency). Credit when received; Debit when repaid. (D) OFFICIAL RESERVE TRANSACTIONS: Changes in the Reserve Bank of India\'s foreign exchange holdings — gold, US Dollars, Special Drawing Rights (SDRs with International Monetary Fund). This is an ACCOMMODATING item — the Reserve Bank of India uses its reserves to fill gaps in the BoP.',
      'Autonomous vs Accommodating Items: AUTONOMOUS ITEMS — "Above the Line": Transactions undertaken for their OWN ECONOMIC MERITS (profit motive, need for goods, desire to transfer funds) — INDEPENDENT of the BoP position. Examples: Exports/imports of goods, Foreign Direct Investment flows, External Commercial Borrowings, remittances, tourist spending. ACCOMMODATING ITEMS — "Below the Line": Transactions undertaken SPECIFICALLY to cover the surplus or deficit created by autonomous items. Primarily the Reserve Bank of India\'s Official Reserve Transactions (buying/selling foreign exchange reserves). The BoP balance/deficit/surplus is measured using only AUTONOMOUS items. BoP Surplus = Autonomous Credits > Autonomous Debits (reserves RISE). BoP Deficit = Autonomous Credits < Autonomous Debits (reserves FALL — Reserve Bank of India sells reserves to fill gap). BoP Equilibrium = Autonomous Credits = Autonomous Debits (no change in reserves needed).',
      'Balance of Trade vs Balance of Payments: BALANCE OF TRADE (BoT): Only the difference between VISIBLE EXPORTS and VISIBLE IMPORTS (physical goods only). A NARROW concept. Formula: BoT = Value of Exports of Goods − Value of Imports of Goods. BALANCE OF PAYMENTS (BoP): The COMPREHENSIVE record including visible trade + invisible trade (services) + unilateral transfers + capital flows. A MUCH BROADER concept than BoT. KEY: A country can have a TRADE DEFICIT but a BoP SURPLUS — if the services account or capital account surplus exceeds the trade deficit. Example: India often runs a trade deficit (imports > exports) but is partially offset by a large services surplus (IT exports) and capital account inflows (Foreign Direct Investment + remittances).',
      'Errors and Omissions: In practice, tracking EVERY international economic transaction is impossible — some data is missed, misrecorded, or comes from inconsistent sources. "Errors and Omissions" is a balancing item that ensures the BoP accounts sum to zero. It captures statistical discrepancies. A large Errors and Omissions figure is a warning signal that significant unrecorded transactions are occurring (possibly capital flight or unrecorded trade).',
      'The BoP Always Balances (Accounting vs Economic): ACCOUNTING BALANCE: By the double-entry system, total credits = total debits always. Including the accommodating items (Official Reserve Transactions) and Errors and Omissions, the BoP ALWAYS BALANCES to zero in accounting terms. ECONOMIC EQUILIBRIUM is different: The BoP is in ECONOMIC SURPLUS or DEFICIT based on AUTONOMOUS items only. A BoP deficit means reserves are being depleted to bridge the gap — this cannot continue indefinitely. Eventually the country must adjust through: depreciation/devaluation (makes exports cheaper), deflation (reduces import demand), or borrowing more from international institutions (International Monetary Fund).'
    ],
    visualizations: [
      {
        id: 'u5-v3',
        title: 'Balance of Payments — Complete Structure',
        type: 'table',
        data: {
          headers: ['Account', 'Sub-Component', 'Items Included', 'Credit (Inflow)', 'Debit (Outflow)'],
          rows: [
            ['CURRENT ACCOUNT', 'Visible Trade (Balance of Trade)', 'Physical goods — merchandise', 'Exports of goods', 'Imports of goods'],
            ['CURRENT ACCOUNT', 'Invisible Trade (Services)', 'Banking, IT, tourism, shipping, insurance', 'Service exports (e.g., IT earnings)', 'Service imports (e.g., Indian student fees abroad)'],
            ['CURRENT ACCOUNT', 'Unilateral Transfers', 'Remittances, gifts, foreign aid, grants', 'NRI remittances in, grants received', 'Gifts sent abroad, aid given'],
            ['CAPITAL ACCOUNT', 'Foreign Direct Investment (FDI)', 'Foreign firms building factories/buying control in India', 'FDI coming INTO India', 'Indian firms investing abroad'],
            ['CAPITAL ACCOUNT', 'Foreign Portfolio Investment (FPI/FII)', 'Foreign buying of Indian stocks/bonds (Hot Money)', 'FPI flowing into India', 'FPI flowing out of India'],
            ['CAPITAL ACCOUNT', 'External Commercial Borrowing (ECB)', 'Loans to/from foreign banks at market rates', 'ECB received by Indian firms', 'ECB repayment principal + interest'],
            ['CAPITAL ACCOUNT', 'Official Reserve Transactions (ORT)', 'RBI\'s foreign exchange reserve changes (Accommodating)', 'Decrease in reserves (selling forex)', 'Increase in reserves (buying forex)'],
            ['BALANCING', 'Errors and Omissions', 'Statistical discrepancies', 'Balancing credit', 'Balancing debit']
          ]
        }
      },
      {
        id: 'u5-v4',
        title: 'Autonomous vs Accommodating Items',
        type: 'table',
        data: {
          headers: ['Feature', 'Autonomous Items ("Above the Line")', 'Accommodating Items ("Below the Line")'],
          rows: [
            ['Motive', 'Own economic merit — profit, need, preference', 'To fill BoP gap — bridge surplus/deficit'],
            ['Independence', 'INDEPENDENT of BoP position', 'DEPENDENT on BoP position (response to gap)'],
            ['Who Undertakes', 'Private firms, households, individuals', 'Central Bank (RBI) — Official Reserve Transactions'],
            ['Examples', 'Exports, imports, FDI, FPI, remittances, ECB', 'RBI buying/selling forex reserves, SDR transactions'],
            ['Determines BoP', 'YES — BoP deficit/surplus calculated from these', 'NO — these are the correction mechanism'],
            ['Position', '"Above the Line" — primary transactions', '"Below the Line" — residual balancing entries']
          ]
        }
      },
      {
        id: 'u5-v5',
        title: 'FDI vs FPI (Foreign Portfolio Investment) — Key Differences',
        type: 'table',
        data: {
          headers: ['Feature', 'Foreign Direct Investment (FDI)', 'Foreign Portfolio Investment (FPI/FII)'],
          rows: [
            ['Nature', 'Investment with MANAGERIAL CONTROL', 'Financial investment WITHOUT control'],
            ['Form', 'Building factories, acquiring companies (majority stake)', 'Buying shares, bonds, mutual funds'],
            ['Stability', 'LONG-TERM and stable — hard to reverse quickly', 'SHORT-TERM / volatile — "Hot Money" (can exit rapidly)'],
            ['Risk', 'Low risk to host country', 'High risk — sudden outflows can crash currency/stock market'],
            ['Technology', 'Brings technology, management expertise, jobs', 'No technology transfer — purely financial'],
            ['Example', 'Apple building a factory in India', 'Foreign fund buying shares of Reliance Industries on NSE']
          ]
        }
      },
      {
        id: 'u5-v6',
        title: 'BoT vs BoP — Scope Comparison',
        type: 'table',
        data: {
          headers: ['Feature', 'Balance of Trade (BoT)', 'Balance of Payments (BoP)'],
          rows: [
            ['Scope', 'NARROW — only visible (physical) goods', 'BROAD — visible + invisible + transfers + capital'],
            ['Formula', 'BoT = Export of Goods − Import of Goods', 'BoP = Current Account + Capital Account + Errors & Omissions'],
            ['Relationship', 'Subset of Current Account', 'Complete international accounts picture'],
            ['Can They Diverge?', 'YES — BoT deficit + BoP surplus possible', 'BoP deficit covered by reserve drawdown'],
            ['Indian Context', 'India has chronic trade deficit (imports oil/gold)', 'Partially offset by IT services surplus and NRI remittances']
          ]
        }
      }
    ]
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
