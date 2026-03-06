import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch6-t1',
        title: 'Employment Concepts',
        description: 'Basic definitions of workers and employment status.',
        content: `
### 1. Basic Definitions
- **Worker**: An individual engaged in economic activity to earn a living. Includes self-employed and salaried.
- **Labor Force**: Persons working + Persons seeking/available for work.
- **Workforce**: Persons actually working at a given time.
- **Unemployed**: Labor Force - Workforce.

### 2. Employment Status
- **Self-Employed**: Own/operate enterprise (52% of India).
- **Regular Salaried**: Fixed employment/social security (bankers, teachers).
- **Casual Wage Laborers**: Daily wages, no security (construction workers).

### 3. Worker-Population Ratio (WPR)
(Total Workers / Total Population) × 100.
- **Rural WPR** > **Urban WPR** (rural poverty forces more people into work).
- **Male WPR** > **Female WPR** (social norms, lack of opportunities).
        `,
        visualizations: []
    },
    {
        id: 'u7-ch6-t2',
        title: 'Trends and Challenges',
        description: 'Informalisation, casualisation and unemployment types.',
        content: `
### 1. Casualisation vs. Informalisation
- **Casualisation**: Rising proportion of casual laborers in total workforce.
- **Informalisation**: Movement of workers from formal (organized) to informal (unorganized) sector without social security. ~94% of India is informal.
- **Case Study**: **Ahmedabad Textile Mills** (1980s) - loss of secure formal jobs led to distress.

### 2. Jobless Growth
GDP grows without a proportionate increase in employment opportunities. Driven by capital-intensive technology.

### 3. Types of Unemployment
- **Disguised**: Marginal productivity is zero (common in agriculture).
- **Seasonal**: Work only during sowing/harvesting.
- **Open**: Willing and able but no work found.
- **Educated**: High school/college graduates without jobs.

### 4. MGNREGA (2005)
Guarantees 100 days of wage employment to rural households. A "Right to Work" safety net.
        `,
        visualizations: []
    }
];
