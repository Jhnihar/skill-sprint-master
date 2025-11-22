export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const pretestData: Record<string, Question[]> = {
  Python: [
    {
      id: 'py1',
      question: 'What is the correct way to create a function in Python?',
      options: ['function myFunc():', 'def myFunc():', 'create myFunc():', 'func myFunc():'],
      correctAnswer: 1,
    },
    {
      id: 'py2',
      question: 'Which of these is a valid Python data type?',
      options: ['str', 'number', 'character', 'bool[]'],
      correctAnswer: 0,
    },
    {
      id: 'py3',
      question: 'How do you create a list in Python?',
      options: ['list = ()', 'list = []', 'list = {}', 'list = <>'],
      correctAnswer: 1,
    },
  ],
  JavaScript: [
    {
      id: 'js1',
      question: 'What does "let" do in JavaScript?',
      options: ['Creates a constant', 'Declares a variable', 'Defines a function', 'Creates an object'],
      correctAnswer: 1,
    },
    {
      id: 'js2',
      question: 'Which method adds an element to the end of an array?',
      options: ['add()', 'push()', 'append()', 'insert()'],
      correctAnswer: 1,
    },
    {
      id: 'js3',
      question: 'What is the result of 2 + "2" in JavaScript?',
      options: ['4', '22', 'Error', 'NaN'],
      correctAnswer: 1,
    },
  ],
  HTML: [
    {
      id: 'html1',
      question: 'Which tag is used for a paragraph?',
      options: ['<p>', '<para>', '<text>', '<paragraph>'],
      correctAnswer: 0,
    },
    {
      id: 'html2',
      question: 'What does the <a> tag define?',
      options: ['An image', 'A hyperlink', 'A paragraph', 'A list'],
      correctAnswer: 1,
    },
    {
      id: 'html3',
      question: 'Which attribute specifies a unique identifier for an HTML element?',
      options: ['class', 'name', 'id', 'key'],
      correctAnswer: 2,
    },
  ],
  CSS: [
    {
      id: 'css1',
      question: 'Which property is used to change background color?',
      options: ['color', 'background-color', 'bgcolor', 'bg'],
      correctAnswer: 1,
    },
    {
      id: 'css2',
      question: 'How do you select an element with id "header"?',
      options: ['.header', '#header', '*header', 'header'],
      correctAnswer: 1,
    },
    {
      id: 'css3',
      question: 'Which property controls text size?',
      options: ['text-size', 'font-size', 'text-style', 'font-weight'],
      correctAnswer: 1,
    },
  ],
  Java: [
    {
      id: 'java1',
      question: 'Which keyword is used to define a class in Java?',
      options: ['class', 'Class', 'define', 'type'],
      correctAnswer: 0,
    },
    {
      id: 'java2',
      question: 'What is the extension of Java source files?',
      options: ['.java', '.class', '.jar', '.jv'],
      correctAnswer: 0,
    },
    {
      id: 'java3',
      question: 'Which method is the entry point of a Java program?',
      options: ['start()', 'main()', 'run()', 'execute()'],
      correctAnswer: 1,
    },
  ],
};

export const getPreTest = (skill: string): Question[] => {
  return pretestData[skill] || [];
};
