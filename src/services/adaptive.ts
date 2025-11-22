export interface AdaptiveQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  level: number;
  endTest?: boolean;
}

const questionBank: Record<string, AdaptiveQuestion[]> = {
  Python: [
    {
      id: 'py_adv1',
      question: 'What is a decorator in Python?',
      options: ['A design pattern', 'A function modifier', 'A class type', 'A variable type'],
      correctAnswer: 1,
      level: 2,
    },
    {
      id: 'py_adv2',
      question: 'What does the yield keyword do?',
      options: ['Returns a value', 'Creates a generator', 'Pauses execution', 'Throws error'],
      correctAnswer: 1,
      level: 3,
    },
  ],
  JavaScript: [
    {
      id: 'js_adv1',
      question: 'What is closure in JavaScript?',
      options: ['A loop construct', 'Function scope preservation', 'A class method', 'An array method'],
      correctAnswer: 1,
      level: 2,
    },
    {
      id: 'js_adv2',
      question: 'What is the event loop?',
      options: ['A for loop', 'Asynchronous execution manager', 'A promise', 'A callback'],
      correctAnswer: 1,
      level: 3,
    },
  ],
  HTML: [
    {
      id: 'html_adv1',
      question: 'What is the purpose of data-* attributes?',
      options: ['Store custom data', 'Define styles', 'Create links', 'Add classes'],
      correctAnswer: 0,
      level: 2,
    },
  ],
  CSS: [
    {
      id: 'css_adv1',
      question: 'What is the difference between relative and absolute positioning?',
      options: ['No difference', 'Relative to parent vs document', 'Only for mobile', 'Deprecated'],
      correctAnswer: 1,
      level: 2,
    },
  ],
  Java: [
    {
      id: 'java_adv1',
      question: 'What is polymorphism?',
      options: ['Multiple classes', 'Many forms of methods', 'Data hiding', 'Inheritance'],
      correctAnswer: 1,
      level: 2,
    },
  ],
};

let currentQuestionIndex: Record<string, number> = {};

export const getAdaptiveQuestion = (skill: string, level: number): AdaptiveQuestion | null => {
  const questions = questionBank[skill] || [];
  
  if (!currentQuestionIndex[skill]) {
    currentQuestionIndex[skill] = 0;
  }

  if (currentQuestionIndex[skill] >= questions.length) {
    return { 
      id: 'end', 
      question: '', 
      options: [], 
      correctAnswer: 0, 
      level: 0, 
      endTest: true 
    };
  }

  const question = questions[currentQuestionIndex[skill]];
  return question;
};

export const submitAdaptiveAnswer = (
  skill: string, 
  questionId: string, 
  isCorrect: boolean
): { endTest: boolean; message: string } => {
  if (!currentQuestionIndex[skill]) {
    currentQuestionIndex[skill] = 0;
  }

  currentQuestionIndex[skill]++;

  const questions = questionBank[skill] || [];
  
  if (currentQuestionIndex[skill] >= questions.length) {
    currentQuestionIndex[skill] = 0; // Reset for next time
    return { endTest: true, message: 'Test completed!' };
  }

  return { endTest: false, message: isCorrect ? 'Correct!' : 'Incorrect, try the next one.' };
};
