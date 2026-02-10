
import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u6-t1',
    title: 'Indian Economy on the Eve of Independence',
    description: 'The state of the Indian economy in 1947, focusing on colonial exploitation across sectors.',
    content: `
# Indian Economy on the Eve of Independence

Before the British rule, India was a prosperous economy known for its high-quality handicrafts (especially textiles like Dacca Muslin). 

### 1. State of Agriculture
- **Stagnation:** Primarily due to Land Settlement systems (Zamindari system), low levels of technology, and lack of irrigation.
- **Land Settlement:** The **Zamindari System** in the Bengal Presidency was particularly exploitative. Zamindars were required to pay a fixed sum to the government, regardless of the harvest.

### 2. State of Industrial Sector
- **De-industrialisation:** Systematic decline of indigenous handicraft industries and slow growth of modern industry.
- **Lack of Capital Goods Industry:** There were very few industries to produce machines or tools.

### 3. Foreign Trade
- **Monopoly:** Britain maintained a monopoly over India's foreign trade.
- **Suez Canal (1869):** The opening of the Suez Canal intensified colonial trade by providing a direct route.
- **Drain of Wealth:** Export surplus used to meet administrative and war expenses of the British government.

### Global Context:
- **1776:** Publication of Adam Smith's "The Wealth of Nations".
- **1929:** Start of the Great Depression.

### 4. Demographic Profile
- **High Birth and Death Rates:** Indicating a state of extreme poverty and poor health facilities.
- **Infant Mortality Rate (IMR):** Was very high (218 per 1,000 live births).
- **Literacy Rate:** Less than 16%, with female literacy as low as 7%.

### 5. Occupational Structure
- **Stagnation:** Over 70-75% of the workforce was engaged in agriculture, with very little growth in the manufacturing or service sectors.
    `,
    visualizations: [
      {
        id: 'u6-v1',
        title: 'Agricultural Exploitation',
        type: 'table',
        data: {
          headers: ['Feature', 'Description', 'Result'],
          rows: [
            ['Zamindari System', 'Fixed rent collected by landlords', 'Poverty of Tillers'],
            ['Commercialisation', 'Shift from food crops to cash crops', 'Food shortages/Famines'],
            ['Technology', 'Dependence on monsoon/primitive tools', 'Low yield per hectare']
          ]
        }
      }
    ]
  },
  {
    id: 'u6-t2',
    title: 'Indian Economy (1950-1990)',
    description: 'The era of Five Year Plans, the Green Revolution, and Industrial Policy Resolution 1956.',
    content: `
# Indian Economy (1950-1990)

After independence, India adopted a **Mixed Economic System** where both the public and private sectors co-existed, but the government held the 'commanding heights' of the economy.

### 1. Goals of Five Year Plans
- **Growth:** Increase in the country's capacity to produce goods and services (measured by Gross Domestic Product (GDP)).
- **Modernization:** Adoption of new technology and changes in social outlook (like gender equality).
- **Self-reliance:** Reducing dependence on imports, especially for food and technology.
- **Equity:** Ensuring that the benefits of economic growth reach the poor.

### 2. Agriculture: Land Reforms and Green Revolution
- **Land Reforms:** Abolition of intermediaries (Zamindars) and **Land Ceiling** (setting a limit on the maximum land an individual could own).
- **Green Revolution:** Introduced in the mid-1960s, it involved the use of **High Yielding Variety (HYV) seeds**, especially for wheat and rice, along with fertilizers and irrigation.
    - **Impact:** India achieved self-sufficiency in food grains and created a 'marketed surplus'.
    - **Risks:** Increased income inequality and pest risks if not managed.

### 3. Industry: IPR 1956 and SSI
- **Industrial Policy Resolution (IPR) 1956:** Classified industries into three categories, with the government having complete control over critical industries (Schedule A).
- **Small Scale Industries (SSI):** Promoted to generate employment and ensure equity. The Karve Committee (1955) highlighted their importance for rural development.
- **Trade Policy:** India followed **Import Substitution** (replacing imports with domestic production) using Tariffs and Quotas to protect infant domestic industries.
    `,
    visualizations: [
      {
        id: 'u6-v2',
        title: 'Planning Goals',
        type: 'grid',
        data: [
          { label: 'Growth', desc: 'Higher Gross Domestic Product (GDP) and production.' },
          { label: 'Modernization', desc: 'New technology & social change.' },
          { label: 'Self-reliance', desc: 'Import substitution.' },
          { label: 'Equity', desc: 'Social justice & poverty reduction.' }
        ]
      },
      {
        id: 'u6-v3',
        title: 'Green Revolution Process',
        type: 'steps',
        data: ['Introduction of HYV Seeds', 'Intensive Irrigation', 'Chemical Fertilizers', 'Self-sufficiency in Food']
      }
    ]
  },
  {
    id: 'u6-t3',
    title: 'New Economic Policy 1991 (LPG Reforms)',
    description: 'The paradigm shift from a controlled economy to Liberalization, Privatization, and Globalization.',
    content: `
# New Economic Policy 1991 (Reforms)

In 1991, India faced a severe economic crisis: high fiscal deficit, soaring inflation, and a Balance of Payments (BoP) crisis (reserves were only enough for 2 weeks of imports). India approached the World Bank and International Monetary Fund (IMF) and agreed to structural reforms.

### 1. Liberalization (Removal of Controls)
- **Industrial Sector:** Abolished 'License Raj' (except for dangerous/environmental items).
- **Financial Sector:** Changed RBI's role from "Regulator" to "Facilitator." Allowed private and foreign banks.
- **Tax Reforms:** Reduction in direct taxes and simplification of procedures.
- **Foreign Exchange Reforms:** Devaluation of the Rupee to increase exports and adoption of a market-determined exchange rate.

### 2. Privatization (Role of Market)
- **Disinvestment:** Selling a part of the equity of Public Sector Enterprises (PSEs) to the private sector to improve efficiency.
- **Maharatnas, Navratnas, Miniratnas:** Granting autonomy to high-performing PSUs to make them globally competitive.

### 3. Globalization (Integration)
- **Trade Liberalization:** Removal of quantitative restrictions (quotas) on imports and reduction in tariff rates.
- **Outsourcing:** India became a global hub for Business Process Outsourcing (BPO) due to low wage rates and skilled English-speaking workforce.
- **World Trade Organization (WTO):** India became a founding member, committing to free and fair global trade.

### Critical Appraisal of Reforms
- **Positives:** Higher growth rate of GDP, rise in foreign exchange reserves, control on inflation.
- **Negatives:** Neglect of agriculture, 'jobless growth', and unfair competition for small domestic producers.
    `,
    visualizations: [
      {
        id: 'u6-v4',
        title: 'LPG Breakdown',
        type: 'table',
        data: {
          headers: ['Reform Area', 'Main Action Taken'],
          rows: [
            ['Liberalization', 'Ending Licensing and Quotas'],
            ['Privatization', 'Disinvestment of PSUs'],
            ['Globalization', 'Tariff reduction & WTO alignment']
          ]
        }
      }
    ]
  }
];
