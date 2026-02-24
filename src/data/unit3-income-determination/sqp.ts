
import { SQPQuestion } from '../../types';

export const SQP_QUESTIONS: SQPQuestion[] = [
  {
    id: 'u3-q1-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '1.',
    question: 'The Aggregate Demand curve and the Consumption curve are parallel to each other because:',
    optionA: 'MPC is constant',
    optionB: 'Autonomous investment is constant',
    optionC: 'APC is constant',
    optionD: 'MPS is constant',
    answer: 'B',
    aiExplanation: 'Teacher\'s Voice: Since AD = C + I and I is autonomous (constant), the AD curve is just the C curve shifted upwards by a fixed amount (I), making them parallel.'
  },
  {
    id: 'u3-q2-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 4,
    type: 'Calculation',
    questionNumber: '6.',
    question: 'In an economy, the Marginal Propensity to Consume (MPC) is 75%. Calculate the required increase in investment if the final income is to increase by ₹ 2,000 Crore.',
    markingScheme: '1. k = 1 / (1 - MPC) = 1 / (1 - 0.75) = 4.\n2. k = ΔY / ΔI -> 4 = 2000 / ΔI.\n3. ΔI = 2000 / 4 = ₹ 500 Crore.',
    aiExplanation: 'Teacher\'s Voice: We use the Investment Multiplier (k) concept here. Formula: k = (1) / (1-MPC). Since MPC is 0.75, k = (1) / (1-0.75) = 4. Now use the second formula: k = (Δ Y) / (Δ I). To get an income increase (Δ Y) of 2,000, we need Δ I = (2000) / (4) = 500 Crores. One injection leads to four times more income!'
  },
  {
    id: 'u3-q3-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '3.',
    question: 'The value of Average Propensity to Consume (APC) can be greater than one when:',
    optionA: 'Consumption > Income',
    optionB: 'Consumption < Income',
    optionC: 'Saving is positive',
    optionD: 'MPC > 1',
    answer: 'A',
    aiExplanation: 'Teacher\'s Voice: This happens at low income levels (before the break-even point) where people spend more than they earn by using past savings or borrowing. Formula: APC = (C) / (Y). If C > Y, then APC > 1.'
  },
  {
    id: 'u3-q4-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 6,
    type: 'Calculation',
    questionNumber: '9.',
    question: 'Calculate the Equilibrium level of Income (Y) if C = 100 + 0.8Y and I = ₹ 500.',
    markingScheme: '1. Y = C + I -> Y = 100 + 0.8Y + 500.\n2. Y - 0.8Y = 600.\n3. 0.2Y = 600 -> Y = 3,000.',
    aiExplanation: 'Teacher\'s Voice: In equilibrium, total output (Y) must match planned spending (AD). Since AD = C + I, we set: Y = 100 + 0.8Y + 500. Solving for Y: Y - 0.8Y = 600 => 0.2Y = 600, so Y = (600) / (0.2) = 3,000. This is the level where everything produced is exactly bought.'
  },
  {
    id: 'u3-q5-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '14.',
    question: 'Discuss the impact on income, output, and employment when ex-ante AD > AS.',
    markingScheme: '1. Inventories fall below desired levels.\n2. Producers increase production (Output rises).\n3. Demand for labor rises (Employment/Income rises).\n4. Process continues until AD = AS.',
    aiExplanation: 'Teacher\'s Voice: If people want to buy more than what\'s available, firms see their stocks disappearing and hire more workers to produce more.'
  },
  {
    id: 'u3-q6-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '5.',
    question: 'The 45° line passing through the origin represents ________ in the Keynesian model.',
    optionA: 'Aggregate Demand',
    optionB: 'Aggregate Supply',
    optionC: 'Consumption',
    optionD: 'Investment',
    answer: 'B',
    aiExplanation: 'Teacher\'s Voice: On this line, Y = Income = Expenditure. Since AS is equal to National Income, this line represents AS.'
  },
  {
    id: 'u3-q7-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '14.',
    question: 'Show the diagrammatic derivation of the Saving Curve from the Consumption Curve.',
    markingScheme: '1. Plot C-curve and 45° line.\n2. Identify Break-even point (C=Y).\n3. Project S=0 at same income level.\n4. Project -C autonomous consumption as -S autonomous saving.',
    aiExplanation: 'Teacher\'s Voice: Dissaving in the C-graph (gap above the line) is exactly equal to the negative saving in the S-graph below the axis.'
  },
  {
    id: 'u3-q8-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '1.',
    question: 'At the break-even point in the Consumption-Income diagram:',
    optionA: 'C < Y and S is negative',
    optionB: 'C = Y and S = 0',
    optionC: 'C > Y and S is positive',
    optionD: 'C = 0 and S = Y',
    answer: 'B',
    aiExplanation: 'Teacher\'s Voice: Break-even means you are consuming exactly what you earn—no extra, no debt.'
  },
  {
    id: 'u3-q9-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 6,
    type: 'Calculation',
    questionNumber: '15.',
    question: 'Assuming MPS as 20%, explain the working process of an increase in investment (ΔI) of ₹ 1,000 crore on National Income using a numerical illustration.',
    markingScheme: '1. Assumption: One’s expenditure is another’s income.\n2. MPC = 1 - MPS = 1 - 0.2 = 0.8.\n3. Table:\n   - R1: ΔI=1000 -> ΔY=1000 -> ΔC=800 -> ΔS=200\n   - R2: ΔY=800 -> ΔC=640 -> ΔS=160\n   - Totals: ΔY = 5000, ΔC = 4000, ΔS = 1000.\n4. Calculation: k = 1/MPS = 1/0.2 = 5. Total ΔY = k * ΔI = 5 * 1000 = ₹ 5,000 crore.',
    aiExplanation: 'Teacher\'s Voice: This is the Investment Multiplier concept. Since people spend 80% (MPC=0.8) of their new income, every round of spending creates new income for someone else. This cycle continues until the total new savings (leaks) match the initial investment (injection). Formula: k = (1) / (MPS) = (1) / (0.2) = 5. So, total increase in income = 5 × 1,000 = 5,000.'
  },
  {
    id: 'u3-q12-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 4,
    type: 'Calculation',
    questionNumber: '14. (B)',
    question: 'For two hypothetical economies A and B, MPC is 0.6 and 0.8 respectively. For both, Autonomous Consumption (c̅) = ₹ 40 cr and Investment (I) = ₹ 100 cr. Calculate:\n(I) Break-even income for Economy A\n(II) Equilibrium income for Economy B',
    markingScheme: '1. **Economy A (Break-even)**: Y = C -> Y = 40 + 0.6Y -> 0.4Y = 40 -> Y = ₹ 100 crore.\n2. **Economy B (Equilibrium)**: Y = C + I -> Y = 40 + 0.8Y + 100 -> 0.2Y = 140 -> Y = ₹ 700 crore.',
    aiExplanation: 'Teacher\'s Voice: At "Break-even", you spend exactly what you earn (Y=C). For Economy A: Y = 40 + 0.6Y => 0.4Y = 40 => Y = 100. At "Equilibrium", total output matches total spending (Y=C+I). For Economy B: Y = 40 + 0.8Y + 100 => 0.2Y = 140 => Y = 700.'
  },
  {
    id: 'u3-q10-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 3,
    type: 'SA',
    questionNumber: '25.',
    question: 'Distinguish between "Ex-ante Investment" and "Ex-post Investment". Which one is used in the determination of equilibrium income?',
    markingScheme: '1. **Ex-ante**: Planned or intended investment by producers during the year.\n2. **Ex-post**: Actual or realized investment that takes place during the year.\n3. **Equilibrium**: National Income is determined using **Ex-ante** variables (C and I).',
    aiExplanation: 'Teacher\'s Voice: "Ex-ante" is the plan (looking forward); "Ex-post" is the reality (looking back). In economics, we build models based on what people *plan* to do!'
  },
  {
    id: 'u3-q11-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '28.',
    question: 'Define "Involuntary Unemployment". Is it possible for an economy to have equilibrium at a level of involuntary unemployment?',
    markingScheme: '1. **Definition**: Situation where able and willing workers cannot find work at existing wage rates.\n2. **Under-employment Equilibrium**: Yes, Keynesian theory suggests that AD might equal AS at a level lower than full employment (Deficient Demand).',
    aiExplanation: 'Teacher\'s Voice: Involuntary unemployment is that "forced" holiday you didn\'t want. And yes, an economy can get "stuck" in a recession where AD=AS even if many people are jobless.'
  }
];
