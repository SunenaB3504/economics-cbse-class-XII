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
            },
            {
                id: 'u6-v5',
                title: 'Table 3.1: Growth of GDP and Sectors (% p.a.)',
                type: 'table',
                data: {
                    headers: ['Sector', '1980-91', '1992-2001', '2007-12'],
                    rows: [
                        ['Agriculture', '3.6', '3.3', '3.2'],
                        ['Industry', '7.1', '6.5', '7.4'],
                        ['Services', '6.7', '8.2', '10.0'],
                        ['Total GDP', '5.6', '6.4', '8.2']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-t4',
        title: 'Industrial Sector and Foreign Trade (Eve of Independence)',
        description: 'Detailed conditions of Indian industry and foreign trade under British rule.',
        content: `
# Industrial Sector and Foreign Trade

### 1. Systematic De-industrialisation
The British adopted a two-fold policy:
- Make India a net exporter of raw materials to British industries.
- Make India a net importer of finished British goods.
This led to the collapse of the indigenous handicraft industry, causing massive unemployment and increasing the burden on agriculture.

### 2. Lack of Capital Goods Industry
Hardly any capital goods industries to promote further industrialisation in India. Contribution of industrial sector to Gross Value Added was very small.

### 3. Limited Role of Public Sector
The public sector was confined to railways, power generation, communications, ports, and some departmental undertakings.

### 4. Discriminatory Tariff Policy
Free export of raw materials from India and free import of British final products. However, heavy duties were placed on the export of Indian handicrafts.

### 5. Drain of Indian Wealth
India's substantial export surplus was not used for the development of the Indian economy. Instead, it was used to:
- Make payments for the expenses incurred by an office set up by the colonial government in Britain.
- Meet expenses on war fought by the British government.
- Pay for invisible items.
    `,
        visualizations: []
    },
    {
        id: 'u6-t5',
        title: 'Demographic Condition and Occupational Structure',
        description: 'Key demographic indicators and workforce distribution during British rule.',
        content: `
# Demographic Condition and Occupational Structure

### 1. Demographic Indicators
- **High Birth Rate and Death Rate:** Reflected extreme poverty. Birth rate was 48 and Death rate was 40 per thousand.
- **Low Literacy Rate:** Overall less than 16%, and female literacy was at a dismal 7%.
- **Poor Health Facilities:** Public health facilities were either unavailable to large mass of population or, when available, were highly inadequate.
- **High Infant Mortality Rate:** Stood at 218 per thousand live births (compared to 32 per thousand mostly today).
- **Life Expectancy:** Was exceptionally low at 44 years.

### 2. Occupational Structure
The distribution of working persons across different industries and sectors showed no sign of change:
- **Agriculture Sector:** Accounted for the largest share of workforce, which usually remained at a high of 70-75 per cent.
- **Manufacturing Sector:** Accounted for 10 per cent.
- **Service Sector:** Accounted for 15-20 per cent.

### 3. Infrastructure
Roads, railways, ports, water transport, posts and telegraphs did develop. However, the real motive behind this development wasn't to provide basic amenities to the people but to subserve various colonial interests.
    `,
        visualizations: []
    },
    {
        id: 'u6-t6',
        title: 'Industry and Trade Policy: Import Substitution (1950-1990)',
        description: "Detailed analysis of India's inward-looking trade strategy and industrial development.",
        content: `
# Industry and Trade Policy (1950-1990)

### 1. Industrial Development
The policy emphasised the role of the public sector. The Industrial Policy Resolution 1956 formed the basis of the Second Five Year Plan, the roadmap for the state to control the commanding heights of the economy.

**IPR 1956 Categories:**
- **Schedule A:** Industries exclusively owned by the state.
- **Schedule B:** State taking the sole responsibility for starting new units, with the private sector supplementing.
- **Schedule C:** Remaining industries which were to be in the private sector (but kept under state control via licenses).

### 2. Trade Policy: Import Substitution
In the first seven plans, trade was characterised by an inward-looking trade strategy called Import Substitution.
- **Aim:** Replacing or substituting imports with domestic production. Thus, saving foreign exchange.
- **Protectionism:** The government protected domestic industries from foreign competition through:
  - **Tariffs:** Taxes on imported goods that make them more expensive.
  - **Quotas:** Specifying the quantity of goods which can be imported.
- **Rationale:** Permitting imports would only waste foreign exchange, and infant domestic industries needed protection to survive.
    `,
        visualizations: []
    }
];
