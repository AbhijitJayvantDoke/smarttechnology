import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-js',
  imports: [FooterComponent, CommonModule],
  templateUrl: './js.component.html',
  styleUrl: './js.component.css'
})
export class JsComponent {
 topicKeys: string[] = [
    'What is JS?',
    'Data Types',
    'Operators',
    'Conditional Statements',
    'Ternary Operator',
    'Loops',
    'Strings and Methods',
    'Arrays and Methods',
    'Functions with Types',
    'DOM and DOM Manipulation',
    'Primitive Data',
    'Non-Primitive Data',
    'Alert, Prompt, Confirm',
    'Console Methods',
    'Accessing Children Elements',
    'Accessing Parents and Siblings',
    'Table Navigation',
    'Searching the DOM',
    'innerHTML & outerHTML',
    'HTML Attributes and Methods',
    'DOM Nodes Types',
    'Modify DOM Content',
    'DOM Insertion Methods',
    'insertAdjacentHTML/Text/Element',
    'className & classList',
    'setInterval and setTimeout',
    'Browser Events',
    'Mouse Events',
    'Handling Browser Events',
    'Callback and Promises',
    'Async/Await',
    'Promise States',
    'Promise API and Methods',
    'Error Handling',
    'Error Object and Custom Errors',
    'Fetch API',
    'Cookies',
    'Local Storage and Methods',
    'OOP',
    'Prototype and __proto__',
    'Classes and Objects',
    'Constructor',
    'Method Overriding',
    'super Keyword',
    'Static Method',
    'IIFE',
    'Destructuring Assignment',
    'Spread and Rest Operator',
    'Closures'
  ];

  notes: { [key: string]: { summary: string; details: string } } = {
    'What is JS?': {
      summary: 'JavaScript is a versatile programming language used mainly for web development to make pages interactive.',
      details: `JavaScript (JS) is a lightweight, interpreted programming language with first-class functions, primarily used for client-side web development but increasingly used on the server side as well.`
    },
    'Data Types': {
      summary: 'JS has several data types: Number, String, Boolean, Null, Undefined, Symbol, BigInt, Object.',
      details: `JavaScript data types include:
- Primitive types: Number, String, Boolean, Null, Undefined, Symbol, BigInt
- Object types: Arrays, Functions, Objects`
    },
    'Operators': {
      summary: 'JS supports arithmetic, assignment, comparison, logical, bitwise, and more operators.',
      details: `Examples of JS operators:
- Arithmetic: +, -, *, /, %
- Assignment: =, +=, -=
- Comparison: ==, ===, !=, !==, >, <
- Logical: &&, ||, !
- Ternary: condition ? expr1 : expr2`
    },
    'Conditional Statements': {
      summary: 'Use if, else if, else, and switch to control flow based on conditions.',
      details: `Example:
if (condition) {
  // code if true
} else if (anotherCondition) {
  // another code
} else {
  // fallback
}`
    },
    'Ternary Operator': {
      summary: 'A short syntax for conditionals: condition ? exprIfTrue : exprIfFalse',
      details: `Example:
let result = (age >= 18) ? 'Adult' : 'Minor';`
    },
    'Loops': {
      summary: 'JS has for, while, do-while loops to repeat actions.',
      details: `Examples:
for(let i=0; i<5; i++) { ... }
while(condition) { ... }
do { ... } while(condition);`
    },
    'Strings and Methods': {
      summary: 'Strings are text data; methods help manipulate them.',
      details: `Common string methods:
- length, toUpperCase(), toLowerCase()
- indexOf(), includes(), slice(), substring()
- trim(), split(), replace()`
    },
    'Arrays and Methods': {
      summary: 'Arrays hold multiple values; methods manipulate arrays.',
      details: `Common array methods:
- push(), pop(), shift(), unshift()
- slice(), splice()
- forEach(), map(), filter(), reduce()`
    },
    'Functions with Types': {
      summary: 'Functions define reusable code blocks.',
      details: `Example:
function greet(name) {
  return 'Hello ' + name;
}`
    },
    'DOM and DOM Manipulation': {
      summary: 'Document Object Model represents the HTML structure, manipulable by JS.',
      details: `You can select, add, remove, or modify elements:
document.getElementById('id')
document.querySelector('.class')
element.innerHTML = 'new content'
element.style.color = 'red'`
    },
    'Primitive Data': {
      summary: 'Basic data types not objects: number, string, boolean, null, undefined, symbol, bigint.',
      details: `Primitive values are immutable and compared by value.`
    },
    'Non-Primitive Data': {
      summary: 'Objects, arrays, and functions are non-primitive data types.',
      details: `They are mutable and compared by reference.`
    },
    'Alert, Prompt, Confirm': {
      summary: 'Browser dialog methods for interaction.',
      details: `alert('Message')
prompt('Enter your name:')
confirm('Are you sure?')`
    },
    'Console Methods': {
      summary: 'Console allows debugging and logging.',
      details: `console.log('message')
console.error('error')
console.warn('warning')
console.table(array)`
    },
    'Accessing Children Elements': {
      summary: 'Use children, childNodes properties to access child elements.',
      details: `element.children // HTMLCollection of element children
element.childNodes // all child nodes including text`
    },
    'Accessing Parents and Siblings': {
      summary: 'Use parentNode, previousElementSibling, nextElementSibling.',
      details: `element.parentNode
element.previousElementSibling
element.nextElementSibling`
    },
    'Table Navigation': {
      summary: 'Traverse table rows, cells using DOM properties.',
      details: `table.rows, row.cells to access rows and cells`
    },
    'Searching the DOM': {
      summary: 'Find elements using querySelector, getElementById, getElementsByClassName.',
      details: `document.querySelector('#id')
document.getElementsByClassName('class')`
    },
    'innerHTML & outerHTML': {
      summary: 'innerHTML sets or gets content inside an element; outerHTML includes the element itself.',
      details: `element.innerHTML = '<p>Text</p>';
console.log(element.outerHTML);`
    },
    'HTML Attributes and Methods': {
      summary: 'Get/set attributes with getAttribute, setAttribute.',
      details: `element.getAttribute('href')
element.setAttribute('class', 'newClass')`
    },
    'DOM Nodes Types': {
      summary: 'Types include element nodes, text nodes, comment nodes, etc.',
      details: `Node.ELEMENT_NODE, Node.TEXT_NODE`
    },
    'Modify DOM Content': {
      summary: 'Change element content or attributes dynamically.',
      details: `element.textContent = 'New text';
element.style.color = 'blue';`
    },
    'DOM Insertion Methods': {
      summary: 'Insert elements using appendChild, insertBefore, replaceChild.',
      details: `parent.appendChild(child)
parent.insertBefore(newNode, referenceNode)`
    },
    'insertAdjacentHTML/Text/Element': {
      summary: 'Insert HTML/text/element relative to existing nodes.',
      details: `element.insertAdjacentHTML('beforeend', '<p>Text</p>');
element.insertAdjacentText('afterbegin', 'Hello');
element.insertAdjacentElement('beforebegin', newNode);`
    },
    'className & classList': {
      summary: 'Manipulate element classes.',
      details: `element.className = 'class1 class2';
element.classList.add('newClass');
element.classList.remove('oldClass');`
    },
    'setInterval and setTimeout': {
      summary: 'Schedule code execution after delay or repeatedly.',
      details: `setTimeout(() => console.log('Hello'), 1000);
let id = setInterval(() => console.log('Hi'), 1000);
clearInterval(id);`
    },
    'Browser Events': {
      summary: 'Events triggered by user or browser actions.',
      details: `click, load, resize, keypress are common events.`
    },
    'Mouse Events': {
      summary: 'Events related to mouse interactions.',
      details: `click, dblclick, mouseover, mouseout, mousedown, mouseup`
    },
    'Handling Browser Events': {
      summary: 'Use addEventListener to handle events.',
      details: `element.addEventListener('click', () => { ... });`
    },
    'Callback and Promises': {
      summary: 'Callbacks for async code; Promises for better async management.',
      details: `new Promise((resolve, reject) => { ... });`
    },
    'Async/Await': {
      summary: 'Syntax sugar to write async code more clearly.',
      details: `async function fetchData() {
  let response = await fetch(url);
}`
    },
    'Promise States': {
      summary: 'Promises can be pending, fulfilled, or rejected.',
      details: `States: pending → fulfilled or rejected`
    },
    'Promise API and Methods': {
      summary: 'Methods like then, catch, finally for Promises.',
      details: `promise.then(...).catch(...).finally(...);`
    },
    'Error Handling': {
      summary: 'Use try/catch to handle errors.',
      details: `try {
  // code
} catch(error) {
  console.error(error);
}`
    },
    'Error Object and Custom Errors': {
      summary: 'Error object contains error info; you can create custom errors.',
      details: `throw new Error('Something went wrong');
class CustomError extends Error { ... }`
    },
    'Fetch API': {
      summary: 'API to make HTTP requests.',
      details: `fetch('url')
  .then(response => response.json())
  .then(data => console.log(data));`
    },
    'Cookies': {
      summary: 'Small data stored in browser for sessions.',
      details: `document.cookie = 'username=John';`
    },
    'Local Storage and Methods': {
      summary: 'Store data persistently in browser.',
      details: `localStorage.setItem('key', 'value');
localStorage.getItem('key');`
    },
    'OOP': {
      summary: 'Object-Oriented Programming concepts.',
      details: `Classes, Objects, Inheritance, Encapsulation.`
    },
    'Prototype and __proto__': {
      summary: 'JS uses prototypes for inheritance.',
      details: `object.__proto__ points to prototype object.`
    },
    'Classes and Objects': {
      summary: 'ES6 introduced classes as syntactic sugar for prototypes.',
      details: `class Person {
  constructor(name) { this.name = name; }
  greet() { return 'Hello ' + this.name; }
}`
    },
    'Constructor': {
      summary: 'Special method to initialize new objects.',
      details: `constructor() { ... }`
    },
    'Method Overriding': {
      summary: 'Subclass can override methods from parent class.',
      details: `class Child extends Parent {
  method() { ... } // overrides parent method
}`
    },
    'super Keyword': {
      summary: 'Call parent class constructor or methods.',
      details: `super(); // calls parent constructor`
    },
    'Static Method': {
      summary: 'Methods called on class, not instances.',
      details: `class MyClass {
  static method() { ... }
}`
    },
    'IIFE': {
      summary: 'Immediately Invoked Function Expression runs as soon as defined.',
      details: `(function() { console.log('IIFE'); })();`
    },
    'Destructuring Assignment': {
      summary: 'Extract values from arrays or objects.',
      details: `const [a, b] = [1, 2];
const {name, age} = person;`
    },
    'Spread and Rest Operator': {
      summary: '... expands or collects items.',
      details: `let arr = [1, 2];
let newArr = [...arr, 3];
function f(...args) { }`
    },
    'Closures': {
      summary: 'Functions that remember their lexical scope.',
      details: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}`
    }
  };

  selectedTopic = this.topicKeys[0];

  selectTopic(topic: string) {
    this.selectedTopic = topic;

    setTimeout(() => {
    const activeEl = document.querySelector('.sidebar li.active');
    activeEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  }


  
}




