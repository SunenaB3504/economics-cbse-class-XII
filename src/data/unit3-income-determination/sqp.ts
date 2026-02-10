
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
    aiExplanation: 'Teacher\'s Voice: First find the multiplier ($k$) using MPC, then use it to find the needed investment injection.'
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
    aiExplanation: 'Teacher\'s Voice: This happens at low income levels where people spend more than they earn by using past savings or borrowing (Dissaving).'
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
    aiExplanation: 'Teacher\'s Voice: The fundamental equilibrium condition is Total Output (Y) must equal Total Planned Expenditure (C+I).'
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
    questionNumber: '16.',
    question: 'Explain the multiplier working process when initial investment is ₹ 1,000 Crore and MPC is 0.8. Estimate total ΔY and ΔC.',
    markingScheme: '1. Round 1: ΔI=1000 -> ΔY=1000 -> ΔC=800.\n2. Round 2: ΔY=800 -> ΔC=640.\n3. Final: k = 1/0.2 = 5. Total ΔY = 5 * 1000 = 5000. Total ΔC = 0.8 * 5000 = 4000.',
    aiExplanation: 'Teacher\'s Voice: The multiplier is a chain reaction of spending. One person\'s expense is always another person\'s bread.'
  }
];
