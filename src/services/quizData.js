export const quizCategories = [
  {
    id: 'react',
    name: 'React.js',
    description: 'Test your React.js knowledge',
    questions: [
      {
        id: 1,
        question: "What is React?",
        options: [
          "A programming language",
          "A JavaScript library for building user interfaces",
          "A database management system",
          "An operating system"
        ],
        correctAnswer: "A JavaScript library for building user interfaces",
        explanation: "React is a popular JavaScript library developed by Facebook for building user interfaces."
      },
      {
        id: 2,
        question: "What are React Hooks?",
        options: [
          "Fishing equipment",
          "A way to use state and other React features in functional components",
          "A method to catch errors",
          "A type of CSS selector"
        ],
        correctAnswer: "A way to use state and other React features in functional components",
        explanation: "React Hooks allow you to use state and other React features without writing a class component."
      },
      {
        id: 3,
        question: "What is JSX?",
        options: [
          "A new programming language",
          "A syntax extension for JavaScript",
          "A database query language",
          "A styling framework"
        ],
        correctAnswer: "A syntax extension for JavaScript",
        explanation: "JSX allows you to write HTML-like code in your JavaScript files."
      },
      {
        id: 4,
        question: "What is the purpose of useState Hook?",
        options: [
          "To fetch data from an API",
          "To add state to functional components",
          "To handle routing",
          "To create class components"
        ],
        correctAnswer: "To add state to functional components",
        explanation: "useState allows functional components to have state without converting to class components."
      },
      {
        id: 5,
        question: "What is the virtual DOM in React?",
        options: [
          "A physical representation of the DOM",
          "A lightweight copy of the actual DOM",
          "A method to delete DOM elements",
          "A way to style components"
        ],
        correctAnswer: "A lightweight copy of the actual DOM",
        explanation: "The virtual DOM is a lightweight representation of the actual DOM, which helps React optimize rendering."
      },
      {
        id: 6,
        question: "What does useEffect Hook do?",
        options: [
          "Manage component state",
          "Perform side effects in functional components",
          "Create new components",
          "Handle event listeners"
        ],
        correctAnswer: "Perform side effects in functional components",
        explanation: "useEffect allows you to perform side effects in functional components, similar to lifecycle methods in class components."
      },
      {
        id: 7,
        question: "What is prop drilling?",
        options: [
          "A method to create props",
          "Passing props through multiple levels of components",
          "A React performance optimization technique",
          "A way to validate props"
        ],
        correctAnswer: "Passing props through multiple levels of components",
        explanation: "Prop drilling occurs when props are passed through multiple nested components."
      },
      {
        id: 8,
        question: "What is the purpose of React.memo()?",
        options: [
          "To create memoized functions",
          "To optimize functional components by preventing unnecessary re-renders",
          "To manage component state",
          "To create higher-order components"
        ],
        correctAnswer: "To optimize functional components by preventing unnecessary re-renders",
        explanation: "React.memo() is a higher-order component that memoizes a component to prevent re-rendering if props haven't changed."
      },
      {
        id: 9,
        question: "What is the difference between controlled and uncontrolled components?",
        options: [
          "Controlled components are always faster",
          "Controlled components have their state managed by React, uncontrolled by the DOM",
          "Uncontrolled components are more secure",
          "There is no difference"
        ],
        correctAnswer: "Controlled components have their state managed by React, uncontrolled by the DOM",
        explanation: "In controlled components, React manages the form data, while in uncontrolled components, the DOM handles the form data."
      },
      {
        id: 10,
        question: "What is the purpose of the key prop in React lists?",
        options: [
          "To style list items",
          "To help React identify which items have changed",
          "To create unique IDs",
          "To sort list items"
        ],
        correctAnswer: "To help React identify which items have changed",
        explanation: "The key prop helps React efficiently update lists by providing a unique identifier for each list item."
      }
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Test your JavaScript fundamentals',
    questions: [
      {
        id: 1,
        question: "What is the difference between let, const, and var?",
        options: [
          "They are exactly the same",
          "let and const have block scope, var has function scope",
          "var is the most modern declaration",
          "const can be reassigned"
        ],
        correctAnswer: "let and const have block scope, var has function scope",
        explanation: "let and const provide block-scoping, while var is function-scoped."
      },
      {
        id: 2,
        question: "What does the '===' operator do?",
        options: [
          "Assigns a value",
          "Compares only value",
          "Compares value and type",
          "Checks for inequality"
        ],
        correctAnswer: "Compares value and type",
        explanation: "=== is a strict equality operator that checks both value and type."
      },
      {
        id: 3,
        question: "What is a closure in JavaScript?",
        options: [
          "A way to close a browser window",
          "A function that has access to variables in its outer lexical scope",
          "A method to encrypt data",
          "A type of loop"
        ],
        correctAnswer: "A function that has access to variables in its outer lexical scope",
        explanation: "A closure allows a function to access variables from its outer (enclosing) scope even after the outer function has returned."
      },
      {
        id: 4,
        question: "What is the difference between map() and forEach()?",
        options: [
          "They are exactly the same",
          "map() returns a new array, forEach() does not",
          "forEach() returns a new array, map() does not",
          "Neither returns anything"
        ],
        correctAnswer: "map() returns a new array, forEach() does not",
        explanation: "map() creates a new array with the results of calling a function for every array element, while forEach() just executes a function for each array element."
      },
      {
        id: 5,
        question: "What does the spread operator (...) do?",
        options: [
          "Multiplies numbers",
          "Spreads elements of an array or object",
          "Creates a new array",
          "Removes duplicate elements"
        ],
        correctAnswer: "Spreads elements of an array or object",
        explanation: "The spread operator allows an iterable to expand in places where 0+ arguments are expected."
      },
      {
        id: 6,
        question: "What is a Promise in JavaScript?",
        options: [
          "A way to make a contract",
          "An object representing the eventual completion or failure of an asynchronous operation",
          "A method to create variables",
          "A type of function"
        ],
        correctAnswer: "An object representing the eventual completion or failure of an asynchronous operation",
        explanation: "Promises provide a way to handle asynchronous operations more elegantly."
      },
      {
        id: 7,
        question: "What does the 'this' keyword refer to?",
        options: [
          "Always refers to the global object",
          "Refers to the object that is executing the current function",
          "Always refers to the parent function",
          "Cannot be used in arrow functions"
        ],
        correctAnswer: "Refers to the object that is executing the current function",
        explanation: "The 'this' keyword refers to the object that is currently executing the function, which can change based on how the function is called."
      },
      {
        id: 8,
        question: "What is destructuring in JavaScript?",
        options: [
          "A way to break code",
          "A convenient way of extracting multiple values from data stored in objects and arrays",
          "A method to delete variables",
          "A type of loop"
        ],
        correctAnswer: "A convenient way of extracting multiple values from data stored in objects and arrays",
        explanation: "Destructuring allows you to unpack values from arrays or properties from objects into distinct variables."
      },
      {
        id: 9,
        question: "What is the purpose of the 'async/await' syntax?",
        options: [
          "To create asynchronous functions",
          "To make asynchronous code look and behave more like synchronous code",
          "To stop code execution",
          "To create loops"
        ],
        correctAnswer: "To make asynchronous code look and behave more like synchronous code",
        explanation: "async/await provides a more readable and manageable way to work with promises and asynchronous operations."
      },
      {
        id: 10,
        question: "What is a callback function?",
        options: [
          "A function that calls another function",
          "A function passed as an argument to another function",
          "A function that returns another function",
          "A method to create objects"
        ],
        correctAnswer: "A function passed as an argument to another function",
        explanation: "A callback is a function that is passed as an argument to another function and is executed after some operation has been completed."
      }
    ]
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Test your Web Development knowledge',
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyper Transfer Markup Language",
          "Home Tool Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language",
        explanation: "HTML is the standard markup language for creating web pages."
      },
      {
        id: 2,
        question: "What is the purpose of CSS?",
        options: [
          "To add interactivity to websites",
          "To store website data",
          "To style and layout web pages",
          "To create server-side logic"
        ],
        correctAnswer: "To style and layout web pages",
        explanation: "CSS is used to control the presentation and layout of web pages."
      },
      {
        id: 3,
        question: "What is responsive web design?",
        options: [
          "A design that responds to user actions",
          "A method to create websites that look good on all devices",
          "A way to make websites load faster",
          "A type of animation"
        ],
        correctAnswer: "A method to create websites that look good on all devices",
        explanation: "Responsive web design ensures that web pages render well on a variety of devices and window or screen sizes."
      },
      {
        id: 4,
        question: "What is the difference between HTTP and HTTPS?",
        options: [
          "They are the same",
          "HTTPS is a secure version of HTTP with encryption",
          "HTTP is faster than HTTPS",
          "HTTPS is only used for payment pages"
        ],
        correctAnswer: "HTTPS is a secure version of HTTP with encryption",
        explanation: "HTTPS (Hypertext Transfer Protocol Secure) is an extension of HTTP that uses encryption for secure communication."
      },
      {
        id: 5,
        question: "What is a CSS flexbox?",
        options: [
          "A way to create animations",
          "A layout model that allows responsive element alignment",
          "A method to create 3D effects",
          "A type of CSS selector"
        ],
        correctAnswer: "A layout model that allows responsive element alignment",
        explanation: "Flexbox is a CSS layout model designed for one-dimensional layouts, providing an efficient way to distribute space and align content."
      },
      {
        id: 6,
        question: "What is the DOM?",
        options: [
          "A programming language",
          "Document Object Model - a programming interface for HTML and XML documents",
          "A type of database",
          "A web browser"
        ],
        correctAnswer: "Document Object Model - a programming interface for HTML and XML documents",
        explanation: "The DOM represents the structure of a document as a tree of objects, allowing programs to dynamically access and update content."
      },
      {
        id: 7,
        question: "What is a CDN?",
        options: [
          "A type of programming language",
          "Content Delivery Network - a geographically distributed group of servers",
          "A method to create databases",
          "A web hosting service"
        ],
        correctAnswer: "Content Delivery Network - a geographically distributed group of servers",
        explanation: "A CDN is a network of distributed servers that deliver web content to users based on their geographic location."
      },
      {
        id: 8,
        question: "What is the purpose of a meta tag?",
        options: [
          "To create visual styles",
          "To provide metadata about an HTML document",
          "To add JavaScript functionality",
          "To create links between pages"
        ],
        correctAnswer: "To provide metadata about an HTML document",
        explanation: "Meta tags provide metadata about an HTML document, such as character encoding, page description, and keywords."
      },
      {
        id: 9,
        question: "What is a CSS grid?",
        options: [
          "A way to create tables",
          "A two-dimensional layout system for CSS",
          "A method to create animations",
          "A type of responsive design"
        ],
        correctAnswer: "A two-dimensional layout system for CSS",
        explanation: "CSS Grid Layout is a two-dimensional layout system that allows you to lay out items in rows and columns."
      },
      {
        id: 10,
        question: "What is web accessibility?",
        options: [
          "A way to make websites look better",
          "Designing websites that can be used by people with disabilities",
          "A method to increase website speed",
          "A type of web security"
        ],
        correctAnswer: "Designing websites that can be used by people with disabilities",
        explanation: "Web accessibility ensures that websites, tools, and technologies are designed and developed so that people with disabilities can use them."
      }
    ]
  }
];

export const getCategoryName = (categoryId) => {
  const category = quizCategories.find(cat => cat.id === categoryId);
  return category ? category.name : 'Unknown Category';
};