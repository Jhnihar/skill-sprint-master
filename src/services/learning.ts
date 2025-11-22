export interface LearningData {
  weakTopics: string[];
  resources: { title: string; url: string }[];
}

const learningData: Record<string, LearningData> = {
  Python: {
    weakTopics: ['Functions', 'Data Types', 'Lists'],
    resources: [
      { title: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/' },
      { title: 'Real Python - Beginner Guide', url: 'https://realpython.com/' },
      { title: 'Python for Everybody', url: 'https://www.py4e.com/' },
    ],
  },
  JavaScript: {
    weakTopics: ['Variables', 'Array Methods', 'Type Coercion'],
    resources: [
      { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
      { title: 'JavaScript.info', url: 'https://javascript.info/' },
      { title: 'FreeCodeCamp JS Course', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' },
    ],
  },
  HTML: {
    weakTopics: ['Semantic Tags', 'Links', 'Attributes'],
    resources: [
      { title: 'MDN HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' },
      { title: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/' },
      { title: 'HTML5 Doctor', url: 'http://html5doctor.com/' },
    ],
  },
  CSS: {
    weakTopics: ['Selectors', 'Box Model', 'Flexbox'],
    resources: [
      { title: 'CSS Tricks', url: 'https://css-tricks.com/' },
      { title: 'MDN CSS Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { title: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/' },
    ],
  },
  Java: {
    weakTopics: ['Classes', 'File Extensions', 'Main Method'],
    resources: [
      { title: 'Oracle Java Tutorials', url: 'https://docs.oracle.com/javase/tutorial/' },
      { title: 'Java Programming MOOC', url: 'https://java-programming.mooc.fi/' },
      { title: 'Baeldung Java Guides', url: 'https://www.baeldung.com/' },
    ],
  },
};

export const getLearning = (skill: string, userId: string): LearningData => {
  return learningData[skill] || { weakTopics: [], resources: [] };
};
