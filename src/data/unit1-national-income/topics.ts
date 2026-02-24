
import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'intro-macro',
    title: 'Introduction to Macroeconomics',
    description: 'The study of the economy as a whole and its major decision-makers.',
    content: [
      'Microeconomics vs Macroeconomics: Micro focuses on individual agents like consumers and producers; Macro addresses the economy in its entirety (Inflation, Unemployment, Total Output).',
      'Macroeconomic Decision Makers: Unlike micro, macro involves State and statutory bodies like RBI (Reserve Bank of India), SEBI (Securities and Exchange Board of India).',
      'Historical Context: The Great Depression of 1929 led to the birth of Macroeconomics as a separate branch, popularized by John Maynard Keynes in his 1936 book "The General Theory of Employment, Interest and Money".'
    ],
    visualizations: [
      {
        id: 'v0',
        title: 'Micro vs Macro Distinction',
        type: 'table',
        data: {
          headers: ['Basis', 'Microeconomics', 'Macroeconomics'],
          rows: [
            ['Unit of Study', 'Individual agents', 'Entire economy'],
            ['Focus', 'Price determination', 'Income/Employment determination'],
            ['Decision Maker', 'Private individuals', 'State/Statutory bodies (RBI, etc.)']
          ]
        }
      }
    ]
  },
  {
    id: 'basic-concepts',
    title: 'Basic Concepts in Macroeconomics',
    description: 'The fundamental building blocks required to understand National Income accounting.',
    content: [
      'Factor Income: Reward for factor services (Land, Labour, Capital, Enterprise). Example: Rent, Wages, Interest, Profit.',
      'Transfer Income: Unilateral receipts without productive service in return. Example: Old age pensions, Scholarships.',
      'Final Goods: Goods used for final consumption by households or investment by firms.',
      'Intermediate Goods: Goods used as raw materials for further production or for resale in the same year.',
      'Consumption Goods: Goods that satisfy human wants directly. Classified into Durable, Semi-durable, Non-durable, and Services.',
      'Capital Goods: Fixed assets used in the production process for several years. Example: Plant and Machinery.',
      'Consumer Durables: Goods like TVs or Cars that are for consumption but have long lives similar to capital goods.',
      'Stocks vs Flows: Stocks are defined at a point in time (e.g., Capital, Inventory, Wealth). Flows are defined over a period of time (e.g., Income, Output, Investment).',
      'Net Investment = Gross Investment - Depreciation.',
      'Depreciation: Annual allowance for normal wear and tear and foreseen obsolescence of a capital good.'
    ],
    visualizations: [
      {
        id: 'v1',
        title: 'Final vs Intermediate Goods',
        type: 'table',
        data: {
          headers: ['Basis', 'Final Goods', 'Intermediate Goods'],
          rows: [
            ['Usage', 'End use only', 'Raw material or resale'],
            ['Value Addition', 'No further value addition', 'Value is yet to be added'],
            ['NI Inclusion', 'Included in National Income', 'Excluded to avoid double counting'],
            ['Example', 'Milk bought by household', 'Milk bought by sweet shop']
          ]
        }
      }
    ]
  },
  {
    id: 'circular-flow',
    title: 'Circular Flow of Income (Two-Sector)',
    description: 'The continuous flow of production, income, and expenditure in an economy.',
    content: [
       'Phase of Production: Firms produce goods and services with help of factor services.',
       'Phase of Income (Distribution): Flow of factor income (Rent, Wages, Interest, Profit) from firms to households.',
       'Phase of Expenditure (Disposition): Households spend income on goods and services produced by firms.',
       'Real Flow: Physical flow of goods, services, and factor services between sectors.',
       'Money Flow: Monetary flow of payments and expenditures between sectors.'
    ],
    visualizations: [
      {
        id: 'v2',
        title: 'Figure 2.2: Circular Flow of Income',
        type: 'process',
        data: [
          { title: 'Household Sector', description: 'Supply factor services (Land, Labour, Capital, Enterprise) to Firms.' },
          { title: 'Firm Sector', description: 'Hire factor services to produce goods and services.' },
          { title: 'Real Flow', description: 'The inner loop: Factor services (H to F) and Goods/Services (F to H).' },
          { title: 'Money Flow', description: 'The outer loop: Factor payments (F to H) and Consumption expenditure (H to F).' }
        ]
      },
      {
        id: 'v2-extra',
        title: 'Figure 2.3: Markets in Circular Flow',
        type: 'grid',
        data: [
          { label: 'Factor Market', desc: 'Where factor services are bought/sold (Households are sellers).' },
          { label: 'Product Market', desc: 'Where final goods/services are bought/sold (Firms are sellers).' }
        ]
      }
    ]
  },
  {
    id: 'national-income-aggregates',
    title: 'National Income and Related Aggregates',
    description: 'Understanding the relationship between Gross Domestic Product (GDP), Net National Product (NNP), and the impact of Market Price (MP) vs Factor Cost (FC).',
    content: [
      'Gross vs Net Relationship: Gross Value includes Depreciation (Consumption of Fixed Capital), whereas Net Value excludes it. Formula: *Net = Gross - Depreciation*.',
      'Domestic vs National Relationship: National Product includes Net Factor Income from Abroad (NFIA) earned by residents globally, while Domestic Product is limited to production within the boundary. Formula: *National = Domestic + NFIA*.',
      'Market Price vs Factor Cost Relationship: Market Price is the price paid by consumers (includes Taxes-Subsidies), while Factor Cost is the actual reward to factors. Formula: *Market Price = Factor Cost + Net Indirect Taxes (NIT)*.',
      'National Income Definition: Technically, National Income is defined as Net National Product at Factor Cost (NNP at FC). It reflects the pure income earned by factors from productive services.',
      'Significance of Real GDP: Real Gross Domestic Product is adjusted for inflation and acts as a better indicator of economic welfare and actual physical productivity growth than Nominal GDP.'
    ],
    visualizations: [
      {
        id: 'v3',
        title: 'The Golden Conversion Rules',
        type: 'steps',
        data: [
          'Gross Value - Depreciation = Net Value',
          'Domestic Product + Net Factor Income from Abroad = National Product',
          'Market Price - Net Indirect Taxes = Factor Cost'
        ],
        formula: 'Net Indirect Taxes = Indirect Taxes - Subsidies'
      }
    ]
  },
  {
    id: 'measurement-methods',
    title: 'Measurement of National Income',
    description: 'The three alternate ways to calculate the National Income of a country.',
    content: [
      'Value Added Method (Product Method): Calculates the contribution of each producing enterprise. Value Added = Value of Output - Intermediate Consumption.',
      'Income Method: Sum of all factor incomes (Compensation of Employees + Operating Surplus + Mixed Income).',
      'Expenditure Method: Sum of final expenditures (Private Final Consumption + Government Final Consumption + Investment + Net Exports).'
    ],
    visualizations: [
      {
        id: 'v4',
        title: 'Value Added Method Components',
        type: 'table',
        data: {
          headers: ['Component', 'Description'],
          rows: [
            ['Value of Output', 'Sales + Change in Stock'],
            ['Intermediate Consumption', 'Value of non-factor inputs (Raw materials)'],
            ['Gross Value Added at MP', 'Value of Output - Intermediate Consumption'],
            ['Precaution', 'Avoid including second-hand goods or intermediate goods']
          ]
        },
        formula: 'Net National Product at Factor Cost = Gross Value Added at Market Price - Depreciation - Net Indirect Taxes + Net Factor Income from Abroad'
      }
    ]
  },
  {
    id: 'gdp-welfare',
    title: 'GDP and Welfare',
    description: 'Understanding the limitations of using GDP as an index of welfare of a country.',
    content: [
      'Distribution of GDP: If the GDP growth is concentrated in the hands of a few, it may not reflect the true welfare of the masses.',
      'Non-monetary Exchanges: Many activities in an economy are not evaluated in monetary terms (e.g., domestic services), leading to underestimation of GDP.',
      'Externalities: Unintended benefits (positive) or harms (negative) a firm or individual causes to another without paying or being penalised. E.g., pollution (negative) reduces welfare but is not deducted from GDP.',
      'Composition of GDP: Increase in GDP may be due to production of defence goods or harmful goods which does not necessarily increase welfare of people.'
    ],
    visualizations: [
      {
        id: 'v5',
        title: 'Limitations of GDP as Welfare Index',
        type: 'list',
        data: ['Distribution of Income', 'Non-monetary Exchanges', 'Externalities', 'Composition of GDP']
      }
    ]
  }
];
