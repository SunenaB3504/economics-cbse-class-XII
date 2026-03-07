import { Flashcard } from '../../types';

export const FLASHCARDS: Flashcard[] = [
    // --- SECTION 1: CORE DEFINITIONS ---
    {
        id: 'u7-emp-f1',
        question: 'Define the "Workforce" in an economy.',
        answer: 'The number of persons who are actually engaged in economic activities and contributing to the GDP.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f2',
        question: 'What is the "Labor Force"?',
        answer: 'All persons who are willing and able to work (Workforce + Unemployed searching for jobs).',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f3',
        question: 'What is the formula for the Worker-Population Ratio (WPR)?',
        answer: '(Total Workers / Total Population) × 100.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f4',
        question: 'Identify the largest segment of the Indian workforce by status.',
        answer: 'Self-Employed (~52%).',
        category: 'Classification'
    },

    // --- SECTION 2: RURAL vs URBAN LOGIC ---
    {
        id: 'u7-emp-f5',
        question: 'Why is the Worker-Population Ratio (WPR) higher in rural areas than urban areas?',
        answer: 'Due to rural poverty, people cannot afford to stay at home (no "luxury" of unemployment); they enter the workforce early in low-end jobs.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f6',
        question: 'Why do urban areas have lower female participation rates?',
        answer: 'Greater focus on education/years of schooling and higher family income leads to fewer women entering "manual" wage work.',
        category: 'Theory'
    },

    // --- SECTION 3: TRENDS (INFORMAL & CASUAL) ---
    {
        id: 'u7-emp-f7',
        question: 'Define "Informalisation of Workforce".',
        answer: 'A movement where workers shift from the formal sector (secure) to the informal sector (no social security).',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f8',
        question: 'What is "Casualisation of Workforce"?',
        answer: 'A trend where the proportion of casual wage laborers increases relative to self-employed and regular salaried workers.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f9',
        question: 'Distinguish Formal vs. Informal sector based on worker count.',
        answer: 'Formal: Enterprises with 10 or more hired workers. Informal: Less than 10 workers.',
        category: 'Classification'
    },
    {
        id: 'u7-emp-f10',
        question: 'What social security benefit is missing in the Informal Sector?',
        answer: 'Pension, Provident Fund (PF), and paid leaves.',
        category: 'Theory'
    },

    // --- SECTION 4: UNEMPLOYMENT & PARADOXES ---
    {
        id: 'u7-emp-f11',
        question: 'What is "Jobless Growth"?',
        answer: 'A situation where GDP grow significantly due to technology, but employment creation remains very low or stagnant.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f12',
        question: 'Define "Disguised Unemployment".',
        answer: 'A situation where more people are engaged in an activity than required; removing them wouldn\'t change total output (Marginal Productivity = 0).',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f13',
        question: 'What is "Seasonal Unemployment"?',
        answer: 'Common in agriculture; people are unemployed for particular months when there is no sowing or harvesting.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f14',
        question: 'Which sector carries the highest burden of Disguised Unemployment in India?',
        answer: 'The Agricultural (Primary) Sector.',
        category: 'Theory'
    },

    // --- SECTION 5: EXPERT ANALYST (Premium Logic) ---
    {
        id: 'u7-emp-f15',
        question: 'In the "Job Market Seesaw" analogy, what corresponds to the balance between producers and consumers?',
        answer: 'The Worker-Population Ratio (WPR). High ratio = Balanced; Low ratio = High dependency.',
        category: 'Analogy'
    },
    {
        id: 'u7-emp-f16',
        question: 'How did the "Ahmedabad Textile Mills" closure in the 1980s illustrate Informalisation?',
        answer: 'Thousands of secure formal workers were forced into low-end informal jobs like pushcart vending or construction.',
        category: 'Application'
    },
    {
        id: 'u7-emp-f17',
        question: 'TRUE/FALSE: A regular salaried worker in an MNC on a 1-year "contract" is part of the Formal Sector.',
        answer: 'FALSE. Since they lack long-term social security and protection, they are part of the Informalised workforce.',
        category: 'True/False'
    },
    {
        id: 'u7-emp-f18',
        question: 'Explain the "Casualisation Trap".',
        answer: 'Workers move out of agriculture (Primary) but instead of landing secure industrial jobs, they get stuck in daily-wage construction or services with no security.',
        category: 'Analogy'
    },
    {
        id: 'u7-emp-f19',
        question: 'What is the "Invisible Work" trap for females?',
        answer: 'Household chores and caregiving are not counted as "Economic Activity", lead to an underestimation of female participation in GDP.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f20',
        question: 'What is the "Master Chain" reason for Jobless Growth?',
        answer: 'Technology Bias: Using machines (capital) to grow output instead of hiring human labor.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f21',
        question: 'What is "Educated Unemployment"?',
        answer: 'A situation where people with high school or university degrees are unable to find jobs that match their skills.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f22',
        question: 'Identify the sector that remains the largest employer in India and its approximate share.',
        answer: 'The Primary (Agricultural) Sector, employing ~45% of the workforce.',
        category: 'Classification'
    },
    {
        id: 'u7-emp-f23',
        question: 'In the "Employment Engine" Master Chain, what do the "Fuel" and "Filter" represent?',
        answer: 'Fuel = Population Growth (Raw resource); Filter = Education & Skill (Creating employable workers).',
        category: 'Theory'
    }
];
