import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u8-t1',
    title: 'Development Path: India, China & Pakistan',
    description: 'Historical comparison and economic milestones since 1947.',
    content: `
# Comparative Development Journeys

### 1. Historical Timeline and Chronology
The three neighboring nations started their development journeys around the same time but chose different models:
- **Founding Years**: **India** (1947), **Pakistan** (1947), and **China** (1949).
- **First Five-Year Plans**: 
    - **India**: 1951–56 (Focus on Agriculture/Heavy Industry).
    - **China**: 1953–57 (Soviet-style heavy industry focus).
    - **Pakistan**: 1956 (Medium-term plans).
- **Economic Reforms (The Sequence)**: 
    - **China (1978)**: Early starter, phased approach (Agriculture first, then Industry).
    - **Pakistan (1988)**: "Denationalisation" and structural adjustment.
    - **India (1991)**: "New Economic Policy" (LPG) triggered by a BoP crisis.

### 2. China's Transformation: GLF and Communes
China's industrialization was driven by state-led massive campaigns:
- **Great Leap Forward (GLF) (1958)**: 
    - **Aim**: Industrializing the country by encouraging household-level steel production.
    - **Commune System**: Collective farming where 26,000 communes covered the entire rural population.
    - **Result**: Mixed. It laid the manufacturing base but caused a catastrophic famine.
- **Great Proletarian Cultural Revolution (1966-76)**: Mao introduced this to protect socialist values; it sent professionals to work in the countryside.
- **Institutional Reforms (1978)**: 
    - **Special Economic Zones (SEZs)**: Established to attract foreign investment.
    - **Dual Pricing Policy**: A unique transition mechanic where a fixed portion of output was sold at regulated prices and the surplus at market prices.

### 3. Pakistan's Economic Trajectory
- **Mixed Economy**: Initially followed India's path of public sector dominance.
- **Import Substitution**: High protectionism to foster local industries.
- **Remittance Economy**: Pakistan's growth relies heavily on remittances from workers abroad and international financial aid, leading to vulnerability.
    `,
    visualizations: [
      {
        id: 'u8-v1',
        title: 'Reform Sequence',
        type: 'table',
        data: {
          headers: ['Country', 'Reform Year', 'Primary Strategy'],
          rows: [
            ['China', '1978', 'Phased Market Socialism (SEZs)'],
            ['Pakistan', '1988', 'Denationalisation & Aid'],
            ['India', '1991', 'Liberalisation Package (LPG)']
          ]
        }
      }
    ]
  },
  {
    id: 'u8-t2',
    title: 'Demographic and Economic Indicators',
    description: 'Comparing growth rates, population density, and sectoral shifts.',
    content: `
# Comparative Indicators

### 1. Demographic Indicators (Size vs. Density)
- **Population Growth**: **Pakistan** has the highest growth rate (~2%). **China** has the lowest due to the 1979 One-Child Policy.
- **Density**: **China** has the lowest population density (per sq km) despite the largest population because of its massive land area. **India** is the most densely populated.
- **Urbanisation**: **China** leads significantly (~60%) compared to India and Pakistan (~35-37%).
- **Sex Ratio**: All three countries show a skewed sex ratio preference for males.

### 2. Sectoral Contribution: The Service Bypass
- **Structural Shift**: 
    - **China**: Followed the textbook path (Agri -> Industry -> Services). Manufacturing remains strong.
    - **India & Pakistan**: Moved directly from Agri to Services, bypassing the intensive manufacturing phase.
- **Employment vs GDP**: In India, agriculture employs ~42% but contributes <20% to GDP.

### 3. Human Development (HDI) Targets
- **China** is in the "High" HDI category, while India is "Medium" and Pakistan is "Low-Medium".
- **Health**: China has lower IMR (Infant Mortality Rate) and higher life expectancy.
    `,
    visualizations: [
      {
        id: 'u8-v2',
        title: 'Development Snapshot',
        type: 'grid',
        data: [
          { label: 'HDI Lead', desc: 'China leads in Life Expectancy and Literacy.' },
          { label: 'Manufacturing', desc: 'China is the "World\'s Workshop".' },
          { label: 'Growth', desc: 'India is currently the fastest growing major economy.' }
        ]
      }
    ]
  },
  {
    id: 'u8-t3',
    title: 'Appraisal and Liberty Indicators',
    description: 'Evaluating development beyond just GDP and math.',
    content: `
# Appraisal of Development

### 1. Successes and Failures
- **China**: Successfully moved millions out of poverty but at the cost of political transparency.
- **India**: Maintained democratic stability and leadership in services, but faces infrastructure challenges.
- **Pakistan**: Faced political instability and excessive dependency on foreign aid/remittances.

### 2. Liberty Indicators: The Missing Dimension
Unlike **Human Development Indicators** (which measure literacy, health, and income), **Liberty Indicators** measure the extent of democratic participation and civil liberties.
- **Examples**:
    - Freedom of expression and speech.
    - Independence of the judiciary.
    - Democratic/Political participation.
- **Comparison**: India and Pakistan often rank better on **Liberty Indicators** than China, despite China having much higher GDP and HDI scores.

### 3. Conclusion
- Development is not just about GDP growth; it is also about the quality of life and the freedom people enjoy.
- China's success shows the power of early reforms (1978), the **Great Leap Forward (1958)**, and the **Commune System**.
- India's path highlights the potential of technology and services.
    `,
    visualizations: [
      {
        id: 'u8-v3',
        title: 'Strategy Summary',
        type: 'table',
        data: {
          headers: ['Economy', 'Leading Sector', 'Strategy'],
          rows: [
            ['China', 'Manufacturing', 'Export-led (SEZs)'],
            ['India', 'Services', 'IT/Software Outsourcing'],
            ['Pakistan', 'Services', 'Remittance-led Growth']
          ]
        }
      }
    ]
  }
];
