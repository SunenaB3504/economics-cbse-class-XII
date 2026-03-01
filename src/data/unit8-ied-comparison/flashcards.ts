
import { Flashcard } from '../../types';

export const FLASHCARDS: Flashcard[] = [
  // --- HISTORICAL PATHS ---
  {
    id: 'u8-f1',
    question: 'When did the People’s Republic of China (PRC) get established?',
    answer: '1949.',
    category: 'Technical'
  },
  {
    id: 'u8-f2',
    question: 'In which year did India and Pakistan launch their first Five-Year Plans?',
    answer: 'India: 1951; Pakistan: 1956.',
    category: 'Technical'
  },
  {
    id: 'u8-f3',
    question: 'When were economic reforms introduced in China, Pakistan, and India?',
    answer: 'China: 1978; Pakistan: 1988; India: 1991.',
    category: 'Technical'
  },
  {
    id: 'u8-f4',
    question: 'What was the Great Leap Forward (GLF) initiated in 1958 in China?',
    answer: 'A campaign aimed at industrialising the country by encouraging people to set up small-scale industries in their backyards.',
    category: 'Theory'
  },
  {
    id: 'u8-f5',
    question: 'What is the "Commune System" in China?',
    answer: 'A system where land was collectively owned and cultivated by households to increase agricultural output.',
    category: 'Definition'
  },
  {
    id: 'u8-f6',
    question: 'Describe the "Great Proletarian Cultural Revolution" (1966-76).',
    answer: 'A movement in China where students and professionals were sent to work and learn from people in the countryside.',
    category: 'Theory'
  },
  {
    id: 'u8-f7',
    question: 'What is the "Dual Pricing Policy" in China?',
    answer: 'A system where prices of a fixed quantity of inputs/outputs were set by the govt, and the surplus was traded at market prices.',
    category: 'Definition'
  },
  {
    id: 'u8-f8',
    question: 'What are Special Economic Zones (SEZs)?',
    answer: 'Geographical regions in China designed to attract foreign investors through tax incentives and better infrastructure.',
    category: 'Definition'
  },
  {
    id: 'u8-f9',
    question: 'Identify a similarity in the initial development strategies of India, China, and Pakistan.',
    answer: 'All three countries focused on the public sector and state-led economic planning.',
    category: 'Theory'
  },
  {
    id: 'u8-f10',
    question: 'Why did Pakistan shift its policy toward "Denationalisation" in the late 1970s?',
    answer: 'To reduce the burden on the public sector and attract foreign investment to boost growth.',
    category: 'Theory'
  },

  // --- DEMOGRAPHIC INDICATORS ---
  {
    id: 'u8-f11',
    question: 'Which country has the highest population growth rate among India, China, and Pakistan?',
    answer: 'Pakistan (~2%).',
    category: 'Theory'
  },
  {
    id: 'u8-f12',
    question: 'What was the One-Child Policy and in which country was it introduced?',
    answer: 'A population control measure introduced in China in 1979 to restrict families to a single child.',
    category: 'Technical'
  },
  {
    id: 'u8-f13',
    question: 'State one negative impact of China’s One-Child Policy.',
    answer: 'It led to an aging population and a skewed sex ratio (more males than females).',
    category: 'Theory'
  },
  {
    id: 'u8-f14',
    question: 'Which country among the three is the most urbanized?',
    answer: 'China.',
    category: 'Theory'
  },
  {
    id: 'u8-f15',
    question: 'Rank India, China, and Pakistan based on their population size.',
    answer: '1. India (recently surpassed China), 2. China, 3. Pakistan.',
    category: 'Theory'
  },
  {
    id: 'u8-f16',
    question: 'What is "Dependency Ratio"?',
    answer: 'The ratio of people (young and old) who are not in the labor force to those who are in the labor force.',
    category: 'Definition'
  },

  // --- GDP AND SECTORAL INDICATORS ---
  {
    id: 'u8-f17',
    question: 'Which sector contributes the most to the GDP of India and Pakistan?',
    answer: 'The Tertiary (Service) sector.',
    category: 'Theory'
  },
  {
    id: 'u8-f18',
    question: 'Which sector is the largest contributor to the GDP of China?',
    answer: 'The Secondary (Industrial/Manufacturing) sector.',
    category: 'Theory'
  },
  {
    id: 'u8-f19',
    question: 'Why is China often called the "World\'s Workshop"?',
    answer: 'Because of its massive manufacturing sector and export-led growth strategy.',
    category: 'Theory'
  },
  {
    id: 'u8-f20',
    question: 'What is the "Shift from Agriculture to Services" called in the context of India and Pakistan?',
    answer: 'Bypassing the manufacturing stage of development.',
    category: 'Theory'
  },
  {
    id: 'u8-f21',
    question: 'In which country did the service sector grow faster than the industrial sector initially?',
    answer: 'India.',
    category: 'Theory'
  },
  {
    id: 'u8-f22',
    question: 'Which country had the highest average GDP growth rate in the 1980s?',
    answer: 'China.',
    category: 'Technical'
  },

  // --- HUMAN DEVELOPMENT INDICATORS ---
  {
    id: 'u8-f23',
    question: 'What does HDI stand for?',
    answer: 'Human Development Index.',
    category: 'Technical'
  },
  {
    id: 'u8-f24',
    question: 'Rank India, China, and Pakistan based on their HDI values.',
    answer: '1. China (High), 2. India (Medium), 3. Pakistan (Medium-Low).',
    category: 'Theory'
  },
  {
    id: 'u8-f25',
    question: 'Define Infant Mortality Rate (IMR).',
    answer: 'The number of deaths of infants under one year of age per 1,000 live births.',
    category: 'Definition'
  },
  {
    id: 'u8-f26',
    question: 'Which country among the three has the highest Life Expectancy?',
    answer: 'China.',
    category: 'Theory'
  },
  {
    id: 'u8-f27',
    question: 'What is "Maternal Mortality Rate" (MMR)?',
    answer: 'The number of maternal deaths per 1,00,000 live births due to pregnancy-related complications.',
    category: 'Definition'
  },
  {
    id: 'u8-f28',
    question: 'Which country has the lowest percentage of population living below the international poverty line $2.15 a day?',
    answer: 'China.',
    category: 'Technical'
  },
  {
    id: 'u8-f29',
    question: 'What is the significance of the "Adult Literacy Rate" in human development?',
    answer: 'It indicates the effectiveness of the education system and the quality of the future human capital.',
    category: 'Theory'
  },

  // --- STRATEGIES AND SUCCESSES ---
  {
    id: 'u8-f30',
    question: 'Identify a major factor for China\'s rapid growth since 1978.',
    answer: 'Structural reforms focusing on openness to trade and foreign direct investment.',
    category: 'Theory'
  },
  {
    id: 'u8-f31',
    question: 'Mention a weakness in Pakistan\'s development path.',
    answer: 'Political instability and excessive dependence on foreign aid and remittances.',
    category: 'Theory'
  },
  {
    id: 'u8-f32',
    question: 'How did the Green Revolution impact Pakistan?',
    answer: 'It significantly increased food grain production in the 1960s, similar to India.',
    category: 'Theory'
  },
  {
    id: 'u8-f33',
    question: 'What are "Liberty Indicators"?',
    answer: 'Measures that track civil liberties and political participation, like freedom of speech and rule of law.',
    category: 'Definition'
  },
  {
    id: 'u8-f34',
    question: 'Give an example of a Liberty Indicator.',
    answer: 'Extent of democratic participation in social and political decision-making.',
    category: 'Theory'
  },
  {
    id: 'u8-f35',
    question: 'Why do India and Pakistan score better on liberty indicators than China theoretically?',
    answer: 'Because India and Pakistan are democratic nations, whereas China is a one-party communist state.',
    category: 'Theory'
  },
  {
    id: 'u8-f36',
    question: 'What is the "Dual Pricing" system meant to stabilize?',
    answer: 'The prices of essential inputs for both farmers and the government.',
    category: 'Theory'
  },
  {
    id: 'u8-f37',
    question: 'Has China’s One-Child Policy been fully withdrawn?',
    answer: 'Yes, it was relaxed to a Two-Child policy (2016) and then a Three-Child policy (2021).',
    category: 'Technical'
  },
  {
    id: 'u8-f38',
    question: 'Which country has shown the most consistent growth in the tertiary sector in the last two decades?',
    answer: 'India.',
    category: 'Theory'
  },
  {
    id: 'u8-f39',
    question: 'What were the "Communes" replacement in China after reforms?',
    answer: 'Individual households were granted land for cultivation, though they did not own it.',
    category: 'Theory'
  },
  {
    id: 'u8-f40',
    question: 'Define "Human Development".',
    answer: 'The process of enlarging people\'s choices and improving njihov welfare, health, and knowledge.',
    category: 'Definition'
  },
  {
    id: 'u8-f41',
    question: 'Which country has the highest literacy rate among the three?',
    answer: 'China.',
    category: 'Technical'
  },
  {
    id: 'u8-f42',
    question: 'What is "Import Substitution" and which country used it extensively?',
    answer: 'Protecting domestic industries from foreign competition (used by all three, especially India/Pak).',
    category: 'Definition'
  },
  {
    id: 'u8-f43',
    question: 'What is the role of remittances in Pakistan\'s economy?',
    answer: 'They provide a major source of foreign exchange and support domestic consumption.',
    category: 'Theory'
  },
  {
    id: 'u8-f44',
    question: 'Which country implemented land reforms most successfully in the early stages?',
    answer: 'China.',
    category: 'Theory'
  },
  {
    id: 'u8-f45',
    question: 'What is "Gross Domestic Product" (GDP)?',
    answer: 'The total market value of all final goods and services produced within a country in a year.',
    category: 'Definition'
  },
  {
    id: 'u8-f46',
    question: 'Why did China introduce reforms earlier than India?',
    answer: 'Due to the realization that the socialist model was not generating enough growth and efficiency compared to Western nations.',
    category: 'Theory'
  },
  {
    id: 'u8-f47',
    question: 'What does "Life Expectancy at Birth" indicate?',
    answer: 'The number of years a newborn child is expected to live if prevailing mortality patterns stay the same.',
    category: 'Theory'
  },
  {
    id: 'u8-f48',
    question: 'Name one similarity in the demographic profile of India and Pakistan.',
    answer: 'Both have a relatively young population compared to China.',
    category: 'Theory'
  },
  {
    id: 'u8-f49',
    question: 'What is the main challenge to China\'s growth today?',
    answer: 'An aging population and rising labor costs.',
    category: 'Theory'
  },
  {
    id: 'u8-f50',
    question: 'Which country has the best sanitation facilities among the three?',
    answer: 'China.',
    category: 'Technical'
  },
  {
    id: 'u8-fc51',
    question: 'What is the "Dual Pricing" system in China?',
    answer: 'A system where the state fixed prices for a specific quota of inputs/outputs, and anything above that was traded at market prices.',
    category: 'Theory'
  },
  {
    id: 'u8-fc52',
    question: 'Define "Liberty Indicators".',
    answer: 'Metrics that measure the extent of democratic participation, civil rights, and political freedom in a country.',
    category: 'Theory'
  },
  {
    id: 'u8-fc53',
    question: 'What was the "Great Proletarian Cultural Revolution"?',
    answer: 'A movement in China (1966-76) where students and professionals were sent to the countryside to learn from farmers and workers.',
    category: 'Theory'
  },
  {
    id: 'u8-fc54',
    question: 'How many Communes were established in China by 1958?',
    answer: 'About 26,000 communes.',
    category: 'Theory'
  },
  {
    id: 'u8-fc55',
    question: 'What is the "One-Child Policy"?',
    answer: 'A population control measures in China (1979) that restricted most families to having only one child.',
    category: 'Theory'
  },
  {
    id: 'u8-fc56',
    question: 'Which country skipped the industrialization phase and moved directly to services?',
    answer: 'India and Pakistan both showed a "bypass" of the industrial sector in favor of services.',
    category: 'Theory'
  },
  {
    id: 'u8-fc57',
    question: 'What are "Special Economic Zones" (SEZs)?',
    answer: 'Geographically delimited areas with liberal economic and tax laws designed to attract FDI and boost exports.',
    category: 'Theory'
  },
  {
    id: 'u8-fc58',
    question: 'Compare the HDI category of China and India.',
    answer: 'China is in the "High" HDI category, while India is in the "Medium" HDI category.',
    category: 'Theory'
  },
  {
    id: 'u8-fc59',
    question: 'What is the "Demographic Dividend"?',
    answer: 'The economic growth potential resulting from a shift in a population\'s age structure (more people in the productive age group).',
    category: 'Theory'
  },
  {
    id: 'u8-fc60',
    question: 'Why did China reforms in 1978 succeed faster than India\'s 1991 reforms?',
    answer: 'China focused on the agricultural sector first, which provided a stable base and surplus for industrialization.',
    category: 'Theory'
  },
  // --- GAP-FILLING CARDS ---
  {
    id: 'u8-fc61',
    question: 'What is SAARC and when was it established?',
    answer: 'SAARC (South Asian Association for Regional Cooperation) is a regional intergovernmental organisation established in 1985, with 8 member nations: India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, Maldives, and Afghanistan. Its goal is to promote economic cooperation, cultural development, and regional integration among South Asian nations. Both India and Pakistan are SAARC members despite their political tensions.',
    category: 'Technical'
  },
  {
    id: 'u8-fc62',
    question: 'What is the Household Responsibility System (HRS) introduced in China after 1978?',
    answer: 'The Household Responsibility System (HRS) was China\'s 1978 reform that dismantled the Commune System by returning land-use rights to individual farming households. Each household contracted with the collective to cultivate a specific plot, deliver a fixed output quota at government prices, and could sell any surplus at market prices. This massively incentivised production — agricultural output surged — freeing surplus labour for the new manufacturing sector.',
    category: 'Definition'
  },
  {
    id: 'u8-fc63',
    question: 'What was the Great Leap Forward Famine and what caused it?',
    answer: 'During the Great Leap Forward (1958–62), Mao Zedong diverted millions of farmers from food production to backyard steel furnaces to rapidly industrialise China. The result was a catastrophic famine estimated to have killed 15–45 million people — the deadliest famine in human history. Cause: agricultural production collapsed when farmers abandoned fields, yet the government continued exporting grain and denied the famine. This tragedy justified Deng Xiaoping\'s pragmatic reforms of 1978.',
    category: 'Theory'
  },
  {
    id: 'u8-fc64',
    question: 'Who were China\'s "Barefoot Doctors" and how do they explain China\'s very low Infant Mortality Rate (IMR)?',
    answer: 'Barefoot Doctors were specially trained rural paramedical workers deployed by China in every village commune from the 1960s–70s. They received 1–2 years of basic medical training and provided vaccinations, first aid, family planning, and health education to all rural Chinese — free of cost. This programme gave China near-universal primary healthcare BEFORE it became wealthy, which explains why China\'s IMR is only 7.4 per 1,000 — compared to India\'s 29.9 and Pakistan\'s 57.2 — despite having similar income levels in the 1970s.',
    category: 'Theory'
  },
  {
    id: 'u8-fc65',
    question: 'What is the "Service Sector Bypass" and which two countries exhibit it?',
    answer: 'The "Service Sector Bypass" is the phenomenon where India and Pakistan moved directly from an agriculture-dominated economy to a services-dominated economy WITHOUT developing a large manufacturing phase — deviating from the classical path (Agriculture → Industry → Services) that China followed. Consequence: India\'s IT boom employs only high-skilled workers; low-skill rural labour was NOT absorbed into factories, creating persistent disguised unemployment and informalisation.',
    category: 'Theory'
  },
  {
    id: 'u8-fc66',
    question: 'What is Amartya Sen\'s "Development as Freedom" argument and how does it explain Liberty Indicators?',
    answer: 'Nobel laureate Amartya Sen argued in his 1999 book "Development as Freedom" that development must include expansion of human freedoms — political freedom, economic opportunity, social protection, transparency, and security — not just GDP or HDI. Key insight: NO famine has ever occurred in a functioning democracy with a free press, because accountability prevents governments from hiding food shortages. This challenges China\'s growth model (high HDI but no political freedom) and forms the theoretical basis for Liberty Indicators.',
    category: 'Theory'
  },
  {
    id: 'u8-fc67',
    question: 'What is BRICS and which countries are its members?',
    answer: 'BRICS is a grouping of five major emerging economies: Brazil, Russia, India, China, and South Africa — established formally in 2009. BRICS nations together represent ~41% of world population and ~24% of global GDP. Notably, both India and China are BRICS members despite their border tensions, reflecting that economic cooperation transcends political rivalry.',
    category: 'Technical'
  },
  {
    id: 'u8-fc68',
    question: 'What is the Gender Development Index (GDI)?',
    answer: 'The Gender Development Index (GDI) is a UNDP measure that calculates the Human Development Index (HDI) separately for males and females to capture gender inequality. GDI = Female HDI ÷ Male HDI. A score of 1.0 means perfect gender parity. All three countries — India, China, and Pakistan — have GDI below 1, meaning women have lower human development than men. Pakistan has the widest gender gap due to low female literacy and limited female labour force participation.',
    category: 'Definition'
  },
  {
    id: 'u8-fc69',
    question: 'What is the scale of China\'s poverty reduction achievement since 1978?',
    answer: 'China achieved the most dramatic poverty reduction in human history: ~88% of China\'s population lived in extreme poverty in 1981. By 2021, China officially eliminated extreme poverty — lifting over 800 million people in four decades. In contrast, India has ~21.9% and Pakistan ~24.3% of their populations still below the poverty line. China\'s success was driven by manufacturing-led export growth, SEZs attracting FDI, rural infrastructure, and universal social programmes.',
    category: 'Technical'
  },
  {
    id: 'u8-fc70',
    question: 'Who was Deng Xiaoping and what were his key 1978 reforms?',
    answer: 'Deng Xiaoping was China\'s paramount leader who launched China\'s "Reform and Opening Up" in 1978. His philosophy: "It doesn\'t matter whether a cat is black or white, as long as it catches mice." Key reforms: (1) Household Responsibility System (HRS) — individual farm holdings replacing communes. (2) Dual Pricing System — market prices for surplus output above quota. (3) Special Economic Zones (SEZs) — Shenzhen, Zhuhai, Xiamen opened to FDI. (4) Gradual, sequenced opening — agriculture first, then industry. These transformed China into the world\'s second-largest economy.',
    category: 'Theory'
  }
];
