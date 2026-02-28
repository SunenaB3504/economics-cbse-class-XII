import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'intro-macro',
    title: 'Introduction to Macroeconomics',
    description: 'The study of the economy as a whole — its origins, scope, and major decision-makers.',
    content: [
      'Microeconomics vs Macroeconomics: Microeconomics focuses on individual economic agents like individual consumers and individual producers — studying how they make decisions about prices and quantities. Macroeconomics, by contrast, addresses the economy in its entirety — studying aggregates like total output (Gross Domestic Product / GDP), the overall price level (Inflation), and total employment (Unemployment).',
      'Macroeconomic Decision Makers: Unlike Microeconomics (where decisions are made by private individuals and firms), Macroeconomics involves the State and statutory bodies. Key examples in India: (1) Reserve Bank of India (RBI) — controls monetary policy; (2) Securities and Exchange Board of India (SEBI) — regulates capital markets; (3) Ministry of Finance — controls fiscal policy.',
      'Historical Context — Birth of Macroeconomics: Before 1936, economists believed markets would self-correct automatically (Classical view — "Say\'s Law: Supply creates its own demand"). The Great Depression of 1929 shattered this belief — millions became unemployed and markets did NOT self-correct. This crisis led John Maynard Keynes to publish "The General Theory of Employment, Interest and Money" in 1936, arguing that governments must actively intervene to manage aggregate demand. This book established Macroeconomics as a separate branch of Economics.',
      'Why Macroeconomics Matters: Macroeconomic policies affect every citizen — a rise in inflation reduces purchasing power of wages; a recession causes unemployment; a trade deficit affects the exchange rate and import costs. Understanding macroeconomics helps design policies for sustained growth, price stability, and full employment.'
    ],
    visualizations: [
      {
        id: 'v0',
        title: 'Microeconomics vs Macroeconomics',
        type: 'table',
        data: {
          headers: ['Basis', 'Microeconomics', 'Macroeconomics'],
          rows: [
            ['Unit of Study', 'Individual agents (consumer, firm)', 'Entire economy (aggregate)'],
            ['Focus', 'Price determination of individual goods', 'Income, Employment, Inflation determination'],
            ['Decision Maker', 'Private individuals and firms', 'State / Statutory bodies (RBI, SEBI)'],
            ['Key Variables', 'Individual demand, supply, price', 'Gross Domestic Product (GDP), Price Level, Unemployment'],
            ['Historical Origin', 'Adam Smith (1776) — Wealth of Nations', 'J.M. Keynes (1936) — General Theory']
          ]
        }
      }
    ]
  },
  {
    id: 'basic-concepts',
    title: 'Basic Concepts in Macroeconomics',
    description: 'The fundamental building blocks required to understand National Income accounting — goods classification, income types, stocks and flows.',
    content: [
      'Factor Income vs Transfer Income: Factor Income is income earned in return for productive factor services rendered — Rent (for Land), Wages (for Labour), Interest (for Capital), Profit (for Enterprise). Transfer Income is a unilateral receipt — money received without providing any productive service in return. Examples: old-age pensions, scholarships, gifts, donations, unemployment allowances. Transfer incomes are NOT included in National Income because no production has occurred in exchange.',
      'Final Goods vs Intermediate Goods: Final Goods are goods that have reached their last stage of production and are ready for use — either for consumption by households or for investment by firms. They are included in National Income. Intermediate Goods are goods used as raw materials or inputs in the same year for producing other goods, or purchased for resale. They are excluded from National Income to avoid double counting. KEY: The same good can be final or intermediate depending on use — e.g., milk bought by a household = final good; milk bought by a sweet shop = intermediate good.',
      'Types of Final Goods — Consumption Goods and Capital Goods: Consumption Goods satisfy human wants directly. Sub-types: (a) Durable Goods — last for many uses over time, e.g., refrigerator, car; (b) Semi-Durable Goods — last for a limited period, e.g., clothing, crockery; (c) Non-Durable Goods — used up in one use, e.g., food, petrol; (d) Services — intangible goods consumed as produced, e.g., haircut, education. Capital Goods are fixed assets used repeatedly in production over several years — e.g., plant and machinery, factory buildings. They are purchased by firms as investment.',
      'Consumer Durables — A Special Case (Stock vs Flow Nuance): Consumer durables like a television or a car are classified as Final Consumer Goods (not capital goods) because they are purchased by households, not firms. The GOOD itself (e.g., the TV) is a STOCK — measured at a point in time. But the SERVICE it provides (e.g., hours of entertainment) is a FLOW — measured over a period. This distinction is important: National Income counts the purchase of the TV (a flow occurring in the year of purchase) but NOT the stock of TVs that already exist.',
      'Stocks vs Flows — The Core Distinction: A STOCK variable is measured at a particular point of time — it has no time dimension. Examples: Capital (stock of machines), Wealth (stock of assets), Inventory (stock of unsold goods), Population. A FLOW variable is measured over a period of time — it has a time dimension. Examples: Income (earned per year), Output (produced per month), Investment (spending per year), Consumption (spending per year). KEY RULE: Change in Stock = Flow. For example, the Change in Inventory (i.e., how much inventory increased/decreased during the year) is a FLOW variable even though Inventory itself is a STOCK.',
      'Depreciation (also called Consumption of Fixed Capital — CFC): Depreciation is the fall in the value of fixed capital assets (machinery, buildings) due to (a) normal wear and tear from use, and (b) expected/foreseen obsolescence (becoming outdated). It is NOT caused by accidents or natural calamities (those are capital losses, not depreciation). Formula: Net Investment = Gross Investment − Depreciation. Depreciation is deducted from Gross value to get Net value.',
      'Imputed Value Rules — What Gets Included in National Income: National Income includes ALL production of goods and services during the year — whether sold in the market or not — AS LONG AS a monetary value can be assigned. RULE 1: Self-consumed goods ARE included — their imputed market value is counted. Example: A farmer who grows vegetables and consumes them — the value of those vegetables at market price is included in National Income. RULE 2: Self-consumed services are NOT included — because they cannot be reliably valued in monetary terms. Example: A housewife cooking food or doing laundry for her family — this is not included in National Income (a major limitation acknowledged in GDP and Welfare). RULE 3: Second-hand goods are NOT included — they were counted in National Income in the year they were produced; including them again would be double counting. RULE 4: Transfer payments (pensions, gifts, scholarships) are NOT included — as no current production is involved.',
      'Interest on National Debt — A Common Exam Trap: Interest paid by the government on its past borrowings (national debt) is TREATED AS A TRANSFER PAYMENT and is NOT included in National Income. Reason: This interest is paid out of tax revenue — it is not a payment for any productive service rendered in the current year. The government is simply redistributing income from taxpayers to bondholders. Compare with: Interest paid by firms on business loans — this IS included in National Income (as part of Operating Surplus) because it is a factor payment for the productive use of capital.'
    ],
    visualizations: [
      {
        id: 'v1',
        title: 'Final Goods vs Intermediate Goods',
        type: 'table',
        data: {
          headers: ['Basis', 'Final Goods', 'Intermediate Goods'],
          rows: [
            ['Usage', 'End use — consumption or investment', 'Used as raw material or for resale'],
            ['Value Addition', 'No further value to be added', 'Value is still to be added'],
            ['National Income Inclusion', 'Included — to measure output', 'Excluded — to avoid double counting'],
            ['Example (same item)', 'Milk bought by a household', 'Milk bought by a sweet shop for making sweets']
          ]
        }
      },
      {
        id: 'v1b',
        title: 'Stock vs Flow — Key Examples',
        type: 'table',
        data: {
          headers: ['Variable', 'Stock or Flow?', 'Why?'],
          rows: [
            ['Capital (number of machines)', 'STOCK', 'Measured at a point in time'],
            ['Investment (spending on machines per year)', 'FLOW', 'Measured over a period'],
            ['Inventory (unsold goods held)', 'STOCK', 'Measured at a point in time'],
            ['Change in Inventory (increase/decrease per year)', 'FLOW', 'Measured over a period — change in stock = flow'],
            ['Wealth (total assets)', 'STOCK', 'Measured at a point in time'],
            ['Income (earnings per month/year)', 'FLOW', 'Measured over a period'],
            ['A television set (consumer durable)', 'STOCK (the good)', 'The physical TV exists at a point in time'],
            ['Entertainment from TV (service over time)', 'FLOW (the service)', 'Used continuously over time']
          ]
        }
      },
      {
        id: 'v1c',
        title: 'National Income Inclusion — Quick Rules',
        type: 'table',
        data: {
          headers: ['Item', 'Included in National Income?', 'Reason'],
          rows: [
            ['Self-consumed goods (farmer eats own crop)', '✅ YES — at imputed market value', 'Production occurred; market value can be estimated'],
            ['Self-consumed services (housewife services)', '❌ NO', 'Cannot be reliably valued in monetary terms'],
            ['Second-hand goods (old car sold)', '❌ NO', 'Would be double counting — already included in year of production'],
            ['Transfer payments (old-age pension)', '❌ NO', 'No productive service rendered in exchange'],
            ['Interest on National Debt', '❌ NO — treated as transfer payment', 'No productive service rendered; redistribution of tax revenue'],
            ['Interest on business loans', '✅ YES — part of Operating Surplus', 'Factor payment for productive use of capital']
          ]
        }
      }
    ]
  },
  {
    id: 'circular-flow',
    title: 'Circular Flow of Income',
    description: 'The continuous and interdependent flow of production, income, and expenditure in an economy — two-sector and multi-sector models.',
    content: [
      'Three Phases of Circular Flow: The circular flow shows that income circulates continuously through an economy in three phases: (1) Production Phase — Firms use factor services (Land, Labour, Capital, Enterprise) from households to produce goods and services. (2) Income (Distribution) Phase — Firms pay factor incomes (Rent, Wages, Interest, Profit) to Households in return for factor services. (3) Expenditure (Disposition) Phase — Households spend their income on buying goods and services from Firms.',
      'Two Sectors in the Simple (Two-Sector) Model: In the simplest model, the economy has two sectors: (1) Household Sector — owns all factors of production (Land, Labour, Capital, Enterprise); supplies factor services to firms; receives factor incomes; spends on consumption goods. (2) Firm Sector — uses factor services to produce final goods and services; pays factor incomes to households; receives consumption expenditure from households. Result: The economy is in equilibrium when Total Output = Total Income = Total Expenditure (the three-way equivalence).',
      'Real Flow vs Money Flow: REAL FLOW (the inner loop) — the physical flow of factor services from Households to Firms (Labour, Land, Capital, Enterprise going to firms) AND the physical flow of finished goods and services from Firms to Households. MONEY FLOW (the outer loop) — the monetary flow of factor incomes from Firms to Households (wages, rent, interest, profit) AND the monetary flow of consumption expenditure from Households to Firms (households buying goods).',
      'Two Markets in the Circular Flow: FACTOR MARKET — the market where factor services are bought and sold. Households are sellers (supply factor services); Firms are buyers (demand factor services). PRODUCT MARKET — the market where goods and services are bought and sold. Firms are sellers (supply final goods); Households are buyers (demand final goods).',
      'Leakages and Injections — Expanding Beyond Two Sectors: In reality, not all household income is spent on consumption. Some money "leaks" out of the circular flow, and some money is "injected" back in. LEAKAGES (withdrawals from the circular flow): (1) Savings (S) — households save instead of spending; (2) Taxes (T) — government takes money from households and firms; (3) Imports (M) — spending flows out to foreign producers. INJECTIONS (additions to the circular flow): (1) Investment (I) — firms borrow and invest in capital; (2) Government Expenditure (G) — government spends tax revenue on goods, services, and salaries; (3) Exports (X) — foreign spending flows into the domestic economy. EQUILIBRIUM CONDITION: Total Leakages = Total Injections, i.e., S + T + M = I + G + X. In a two-sector model this simplifies to: Savings (S) = Investment (I).',
      'Four-Sector Circular Flow: The complete model has four sectors — Households, Firms, Government, and Rest of World (Foreign Sector). Government introduces taxes (leakage) and government expenditure (injection). The foreign sector introduces imports (leakage) and exports (injection).'
    ],
    visualizations: [
      {
        id: 'v2',
        title: 'Two-Sector Circular Flow',
        type: 'process',
        data: [
          { title: 'Household Sector', description: 'Owns factors. Supplies factor services (Labour, Land, Capital, Enterprise) to Firms. Receives factor income. Spends on consumption.' },
          { title: 'Firm Sector', description: 'Uses factor services to produce goods and services. Pays factor incomes (Wages, Rent, Interest, Profit) to Households. Sells goods to Households.' },
          { title: 'Real Flow (Inner Loop)', description: 'Factor services flow from Households → Firms. Goods and services flow from Firms → Households.' },
          { title: 'Money Flow (Outer Loop)', description: 'Factor payments (wages, rent, interest, profit) flow from Firms → Households. Consumption expenditure flows from Households → Firms.' }
        ]
      },
      {
        id: 'v2-extra',
        title: 'Two Markets in the Circular Flow',
        type: 'grid',
        data: [
          { label: 'Factor Market', desc: 'Where factor services (Labour, Land, Capital) are bought and sold. Households = sellers. Firms = buyers.' },
          { label: 'Product Market', desc: 'Where final goods and services are bought and sold. Firms = sellers. Households = buyers.' }
        ]
      },
      {
        id: 'v2-leakages',
        title: 'Leakages and Injections in Circular Flow',
        type: 'table',
        data: {
          headers: ['Type', 'Item', 'Sector', 'Effect on Flow'],
          rows: [
            ['LEAKAGE', 'Savings (S)', 'Households save instead of spending', 'Withdraws money from flow'],
            ['LEAKAGE', 'Taxes (T)', 'Government takes from households and firms', 'Withdraws money from flow'],
            ['LEAKAGE', 'Imports (M)', 'Spending goes to foreign producers', 'Withdraws money from flow'],
            ['INJECTION', 'Investment (I)', 'Firms invest borrowed funds', 'Adds money to flow'],
            ['INJECTION', 'Government Expenditure (G)', 'Government spends tax revenue', 'Adds money to flow'],
            ['INJECTION', 'Exports (X)', 'Foreign demand for domestic goods', 'Adds money to flow'],
            ['EQUILIBRIUM', 'S + T + M = I + G + X', 'Leakages = Injections', 'Circular flow in balance']
          ]
        }
      }
    ]
  },
  {
    id: 'national-income-aggregates',
    title: 'National Income and Related Aggregates',
    description: 'Understanding the web of relationships between Gross Domestic Product (GDP), Net National Product (NNP), Market Price (MP) and Factor Cost (FC) — with all formulas.',
    content: [
      'The Three Key Relationship Pairs: All national income aggregates are related through three fundamental relationships: (1) Gross vs Net — differs by Depreciation (also called Consumption of Fixed Capital or CFC); (2) Domestic vs National — differs by Net Factor Income from Abroad (NFIA); (3) Market Price vs Factor Cost — differs by Net Indirect Taxes (NIT = Indirect Taxes − Subsidies). MASTER RULE: Gross − Depreciation = Net; Domestic + NFIA = National; Market Price − NIT = Factor Cost.',
      'Gross vs Net Distinction: GROSS value includes Depreciation (Consumption of Fixed Capital / CFC). NET value excludes Depreciation. Net = Gross − Depreciation. Example: Gross Domestic Product at Market Price (GDP at MP) − Depreciation = Net Domestic Product at Market Price (NDP at MP). Why it matters: Gross measures total production without accounting for capital used up; Net measures the true addition to wealth after replacing worn-out capital.',
      'Domestic vs National Distinction: DOMESTIC product covers production within the geographical boundaries of a country — regardless of whether produced by residents or non-residents. NATIONAL product covers production by normal residents of a country — regardless of whether they are within the country or abroad. Formula: National Product = Domestic Product + Net Factor Income from Abroad (NFIA). NFIA = Factor income earned by residents from abroad − Factor income paid to non-residents working in India. NFIA can be positive (if residents earn more abroad than non-residents earn in India) or negative (if non-residents earn more in India).',
      'Normal Residents Defined: A normal resident is an individual or institution that (a) ordinarily resides in a country, (b) has been in that country for more than one year, and (c) whose centre of economic interest lies in that country. KEY INCLUSIONS: Indian workers in Middle East (sent remittances but still normal residents of India). KEY EXCLUSIONS: Tourists, foreign diplomats, international organisation staff (like United Nations employees in India) are NOT normal residents of India.',
      'Market Price vs Factor Cost Distinction: MARKET PRICE (MP) is the price actually paid by consumers — it includes indirect taxes and subtracts subsidies. FACTOR COST (FC) is the income actually received by factors of production — it excludes indirect taxes and adds back subsidies. Formula: MP = FC + Net Indirect Taxes (NIT), therefore FC = MP − NIT. Net Indirect Taxes (NIT) = Indirect Taxes − Subsidies. Why it matters: Indirect taxes inflate market prices above factor cost; subsidies reduce market prices below factor cost.',
      'National Income Definition: National Income in India is technically defined as Net National Product at Factor Cost (NNP at FC). It represents the sum total of factor incomes (Rent + Wages + Interest + Profit) earned by normal residents of India during a year — whether earned within India or abroad. It is the purest measure of the income received by residents from productive activities.',
      'Real Gross Domestic Product vs Nominal Gross Domestic Product: NOMINAL Gross Domestic Product (GDP) measures output valued at CURRENT year prices — it rises when either output increases OR prices rise. REAL Gross Domestic Product (GDP) measures output valued at BASE YEAR (constant) prices — it rises ONLY when actual physical output increases. Real GDP is the better indicator of actual economic growth because it removes the distortion of inflation. GDP Deflator measures the extent to which prices have changed: GDP Deflator = (Nominal GDP ÷ Real GDP) × 100.'
    ],
    visualizations: [
      {
        id: 'v3',
        title: 'The Three Golden Conversion Rules',
        type: 'steps',
        data: [
          'RULE 1 (Gross ↔ Net): Gross Value − Depreciation (Consumption of Fixed Capital) = Net Value',
          'RULE 2 (Domestic ↔ National): Domestic Product + Net Factor Income from Abroad (NFIA) = National Product',
          'RULE 3 (Market Price ↔ Factor Cost): Market Price − Net Indirect Taxes (NIT) = Factor Cost, where NIT = Indirect Taxes − Subsidies'
        ],
        formula: 'Combined: NNP at FC = GDP at MP − Depreciation + NFIA − NIT'
      },
      {
        id: 'v3b',
        title: 'All 8 National Income Aggregates — The Complete Map',
        type: 'table',
        data: {
          headers: ['Aggregate', 'Full Form', 'Formula'],
          rows: [
            ['GDP at MP', 'Gross Domestic Product at Market Price', 'Starting point — measured by Expenditure Method'],
            ['NDP at MP', 'Net Domestic Product at Market Price', 'GDP at MP − Depreciation'],
            ['GNP at MP', 'Gross National Product at Market Price', 'GDP at MP + NFIA'],
            ['NNP at MP', 'Net National Product at Market Price', 'GNP at MP − Depreciation = NDP at MP + NFIA'],
            ['GDP at FC', 'Gross Domestic Product at Factor Cost', 'GDP at MP − NIT'],
            ['NDP at FC', 'Net Domestic Product at Factor Cost', 'GDP at FC − Depreciation = NDP at MP − NIT'],
            ['GNP at FC', 'Gross National Product at Factor Cost', 'GDP at FC + NFIA = GNP at MP − NIT'],
            ['NNP at FC', 'Net National Product at Factor Cost = NATIONAL INCOME', 'GDP at MP − Depreciation + NFIA − NIT']
          ]
        }
      },
      {
        id: 'v3c',
        title: 'Nominal GDP vs Real GDP',
        type: 'table',
        data: {
          headers: ['Feature', 'Nominal GDP', 'Real GDP'],
          rows: [
            ['Prices Used', 'Current year prices', 'Base year (constant) prices'],
            ['Rises When', 'Output rises OR prices rise', 'ONLY when actual output rises'],
            ['Inflation Effect', 'Includes price rise effect', 'Removes price rise effect'],
            ['Better Indicator Of', 'Money value of output', 'Actual economic growth (welfare)'],
            ['GDP Deflator', '—', 'GDP Deflator = (Nominal GDP ÷ Real GDP) × 100']
          ]
        }
      }
    ]
  },
  {
    id: 'measurement-methods',
    title: 'Measurement of National Income — Three Methods',
    description: 'The three equivalent approaches to calculate National Income — Value Added (Product) Method, Income Method, and Expenditure Method.',
    content: [
      'Why Three Methods Give the Same Answer: In any economy, the value of what is PRODUCED must equal the INCOME generated in producing it, which must equal the EXPENDITURE on buying it. This is the three-way equivalence: GDP (Output) = GDP (Income) = GDP (Expenditure). Each method measures the same flow from a different angle.',
      'Method 1 — Value Added Method (also called Product Method or Output Method): This method adds up the value added at each stage of production across all producing enterprises. GROSS VALUE ADDED at Market Price (GVA at MP) = Value of Output − Intermediate Consumption. VALUE OF OUTPUT = Market value of all goods and services produced by a firm in a year = Sales + Change in Inventory (Change in Stock). INTERMEDIATE CONSUMPTION = Value of non-factor inputs used up in production (raw materials, fuel, electricity purchased from other firms). KEY PRECAUTIONS: (1) Avoid including second-hand goods — already counted in year produced; (2) Avoid including transfer payments — no production; (3) Include imputed value of self-consumed goods; (4) Do NOT include intermediate goods — only final value added.',
      'Marketed Surplus and Self-Consumption in Value Added Method: When a farmer produces wheat: total wheat produced × price per kg = Value of Output. This includes BOTH wheat sold in the market (marketed surplus) AND wheat consumed by the farmer\'s own family (self-consumed goods at imputed price). Both are counted. However, any services the farmer performs for himself (e.g., cooking his own food) are EXCLUDED as they cannot be reliably valued.',
      'Method 2 — Income Method: This method adds up all factor incomes paid out by producers in an economy. Formula: Net Domestic Product at Factor Cost (NDP at FC) = Compensation of Employees + Operating Surplus + Mixed Income of Self-Employed. COMPENSATION OF EMPLOYEES (CoE): All payments to workers — (a) Wages and Salaries in cash, (b) Wages and Salaries in kind (perks like free housing, meals, transport), (c) Employers\' contribution to Social Security schemes (Provident Fund, Employee State Insurance). OPERATING SURPLUS (OS): Income from property and entrepreneurship = Rent + Interest (on business loans) + Profit (including retained profits, dividends, and corporate tax). Note: Interest on National Debt is excluded — treated as transfer payment. MIXED INCOME OF SELF-EMPLOYED: Income of self-employed people (farmers, small traders, lawyers, doctors) where factor inputs (their own labour AND their own capital) cannot be separately distinguished. It is a mix of wages and profit. Formula for National Income: National Income (NNP at FC) = NDP at FC + Net Factor Income from Abroad (NFIA).',
      'Items EXCLUDED from Income Method: (1) Transfer payments — pensions, scholarships, gifts (no production); (2) Windfall gains — lottery wins, gambling (not factor income); (3) Income from sale of second-hand goods — already counted; (4) Interest on National Debt — treated as transfer payment; (5) Imputed rental of owner-occupied houses IS included (self-consumed service treated as production in this special case by convention).',
      'Method 3 — Expenditure Method: This method adds up all final expenditures on goods and services in the economy. Formula: Gross Domestic Product at Market Price (GDP at MP) = Private Final Consumption Expenditure (PFCE) + Government Final Consumption Expenditure (GFCE) + Gross Domestic Capital Formation (GDCF) + Net Exports (NX = Exports − Imports). PRIVATE FINAL CONSUMPTION EXPENDITURE (PFCE): Total spending by households and non-profit institutions serving households (NPISHs) on final goods and services. GOVERNMENT FINAL CONSUMPTION EXPENDITURE (GFCE): Government spending on goods and services for current use by government bodies (salaries of government employees, purchase of stationery, etc.). Excludes transfer payments (which are not expenditure on goods/services). GROSS DOMESTIC CAPITAL FORMATION (GDCF): Total investment = Gross Fixed Capital Formation (GFCF) + Change in Stock (Inventory Investment). Change in Stock = Closing Stock − Opening Stock. NET EXPORTS (NX): Exports (X) − Imports (M). If exports > imports → trade surplus; imports > exports → trade deficit. Calculating National Income from GDP at MP: National Income (NNP at FC) = GDP at MP − Depreciation − Net Indirect Taxes (NIT) + Net Factor Income from Abroad (NFIA).'
    ],
    visualizations: [
      {
        id: 'v4',
        title: 'Value Added Method — Step by Step',
        type: 'table',
        data: {
          headers: ['Component', 'Full Form / Explanation'],
          rows: [
            ['Value of Output', 'Sales Revenue + Change in Stock (Closing Stock − Opening Stock)'],
            ['Intermediate Consumption', 'Value of raw materials, fuel, electricity bought from other firms — consumed in production'],
            ['GVA at MP', 'Gross Value Added at Market Price = Value of Output − Intermediate Consumption'],
            ['Key Precautions', 'Exclude second-hand goods, transfer payments. Include imputed self-consumed goods. Sum GVA across all enterprises = GDP at MP']
          ]
        },
        formula: 'NNP at FC (National Income) = Gross Value Added at Market Price − Depreciation − Net Indirect Taxes (NIT) + Net Factor Income from Abroad (NFIA)'
      },
      {
        id: 'v4-income',
        title: 'Income Method — Step by Step',
        type: 'steps',
        data: [
          'Step 1: Compensation of Employees (CoE) = Wages & Salaries (cash) + Wages & Salaries (kind) + Employer\'s contribution to Social Security (Provident Fund).',
          'Step 2: Operating Surplus (OS) = Rent + Interest on business loans + Profit (retained + dividends + corporate tax). NOTE: Interest on National Debt is EXCLUDED — it is a transfer payment.',
          'Step 3: Mixed Income of Self-Employed = Income of farmers, self-employed professionals (inseparable mix of wages + profit).',
          'Step 4: Net Domestic Product at Factor Cost (NDP at FC) = Compensation of Employees + Operating Surplus + Mixed Income.',
          'Step 5: National Income (NNP at FC) = NDP at FC + Net Factor Income from Abroad (NFIA).'
        ],
        formula: 'NNP at FC = Compensation of Employees + Operating Surplus + Mixed Income + NFIA'
      },
      {
        id: 'v4-expenditure',
        title: 'Expenditure Method — Step by Step',
        type: 'steps',
        data: [
          'Step 1: Private Final Consumption Expenditure (PFCE) — all household and non-profit institution spending on final goods and services.',
          'Step 2: Government Final Consumption Expenditure (GFCE) — government current spending on goods and services (excludes transfer payments like pensions).',
          'Step 3: Gross Domestic Capital Formation (GDCF) = Gross Fixed Capital Formation (GFCF) + Change in Stock. Change in Stock = Closing Inventory − Opening Inventory.',
          'Step 4: Net Exports (NX) = Exports (X) − Imports (M). Can be positive (surplus) or negative (deficit).',
          'Step 5: GDP at MP = PFCE + GFCE + GDCF + NX.',
          'Step 6: National Income (NNP at FC) = GDP at MP − Depreciation − NIT + NFIA.'
        ],
        formula: 'National Income (NNP at FC) = GDP at MP − Depreciation − Net Indirect Taxes + Net Factor Income from Abroad'
      }
    ]
  },
  {
    id: 'gdp-welfare',
    title: 'Gross Domestic Product and Welfare',
    description: 'Understanding why GDP is an imperfect measure of economic welfare — its limitations and what it misses.',
    content: [
      'GDP as a Welfare Measure: Gross Domestic Product (GDP) is often used as a proxy for the standard of living and welfare of citizens. A rising GDP suggests more goods and services are being produced, which should mean citizens are better off. However, this is an oversimplification — GDP captures the SIZE of an economy, not the QUALITY of life of its citizens.',
      'Limitation 1 — Distribution of GDP: If Gross Domestic Product (GDP) grows but the growth is concentrated in the hands of a few wealthy individuals, the welfare of the majority may not improve. A country can have a high GDP but extreme inequality — where the rich are much richer but the poor remain poor. Example: India\'s top 10% hold over 70% of national wealth — high GDP does not reflect this inequality.',
      'Limitation 2 — Non-Monetary Exchanges: Many valuable activities in an economy are not evaluated in monetary terms and therefore not captured in Gross Domestic Product (GDP). Examples: (a) A housewife who cooks, cleans, and raises children contributes enormous value to society but her work is excluded from GDP (cannot be reliably valued); (b) Neighbours helping each other, volunteering for charity, subsistence agriculture consumed at home — all excluded. Result: GDP UNDERESTIMATES actual welfare.',
      'Limitation 3 — Externalities: Externalities are unintended benefits (positive externalities) or harms (negative externalities) created by production or consumption — without being compensated or penalised through market prices. NEGATIVE EXTERNALITY EXAMPLE: A factory increases production (raises GDP) but its emissions pollute a river — the pollution harms nearby residents who suffer health costs and reduced fishing income. GDP goes UP (more production) but welfare goes DOWN (pollution). POSITIVE EXTERNALITY EXAMPLE: A firm plants trees as part of their campus — these trees benefit the surrounding community through cleaner air. GDP does not increase for this benefit, but welfare does. Result: GDP OVERESTIMATES welfare when negative externalities are large (ignores environmental harm) and UNDERESTIMATES welfare when positive externalities are significant.',
      'Limitation 4 — Composition of Gross Domestic Product (GDP): An increase in GDP may be due to production of goods that do NOT increase human welfare. Examples: (a) Defence goods — a country spending heavily on weapons increases its GDP but welfare may not improve; (b) Harmful products — production of tobacco or alcohol increases GDP but may reduce health and welfare; (c) Rebuilding after natural disasters — GDP increases due to reconstruction spending but this just restores previous welfare, not adds to it.'
    ],
    visualizations: [
      {
        id: 'v5',
        title: 'Four Limitations of GDP as a Welfare Index',
        type: 'table',
        data: {
          headers: ['Limitation', 'What GDP Misses', 'Indian Example'],
          rows: [
            ['Distribution', 'Whether growth is equitably spread', 'Top 10% hold 70% of wealth — high GDP, high inequality'],
            ['Non-Monetary Exchanges', 'Unpaid domestic and volunteer work', 'Housewife services worth billions — excluded from GDP'],
            ['Negative Externalities', 'Environmental damage and health costs of pollution', 'Ganga river pollution — factories add to GDP but harm welfare'],
            ['Composition', 'Whether goods produced actually increase well-being', 'Higher defence spending raises GDP but not citizen welfare']
          ]
        }
      }
    ]
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
