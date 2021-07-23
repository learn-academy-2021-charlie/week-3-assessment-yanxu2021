# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: The key word 'this' is used as a reference to the current object or parameter.//I first learned 'this' in C#, which refers to the current instance of the class and is also used as a modifier of the first parameter of an extension method. In javaScript I didn't pay attention to details. Yes, 'this' confused me now and I know we should use 'this' in the content but actually sometimes I don't know why. 

  Researched answer: The JavaScript 'this' keyword refers to the object it belongs to. It has different values depending on where it is used:
  - In a method, 'this' refers to the owner object.
  - Alone, 'this' refers to the global object.
  - In a function, 'this' refers to the global object.
  - In a function, in strict mode, 'this' is 'undefined'.
  - In an event, 'this' refers to the element that received the event.
  - Methods like call(), and apply() can refer 'this' to any object.


2. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: 'yarn' is package manager and it helps us to use exist/premade code/package to develop. 

  Researched answer:Yarn is a package manager for JavaScript, which aims to be speedy, deterministic, secure and allows the user to use and share code with other develpers.  


3. What are props in React?

  Your answer: 'props' short for properties. In React, it is used to pass data/information to different components. 

  Researched answer:'props' is a special keyword in React, which stands for properties and is being used for passing data from one component to another. Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.


4. What is JSX?

  Your answer: JSX, means JavaScript (React) language that is used to develop web API(implemented in browser).---->Not React.....XML, Extensible Markup Language and application programming interface.

  Researched answer: 
  - JSX stands for JavaScript XML. It is simply a **syntax extension** of JavaScript. - It allows us to directly write HTML in React (within JavaScript code). 
  - It is easy to create a template using JSX in React, but it is not a simple template language instead it comes with the full power of JavaScript.
  - By using XML, Web agents and robots (programs that automate Web searches or other tasks) are more efficient and produce more useful results. General applications: XML provides a standard method to access information, making it easier for applications and devices of all kinds to use, store, transmit, and display data.


5. What is a DOM event?

  Your answer: DOM event,for example, when a user clicks the mouse or type in with keyboard, the web API will be loaded or response to this kind of triggers. 'event' is class and the triggers are object instances. Once get a new object, there will be handlers to deal with it.

  Researched answer:
  - The HTML DOM (The Document Object Model) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. 
  - The DOM represents a document with a logical tree.
  - DOM Events are a signal that something has occurred, or is occurring, and can be triggered by user interactions or by the browser.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer:'anonymous'function --->the function has no name initialized but has functionalities.  

  Researched answer:
  - Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.
  - The following shows an anonymous function that displays a message:

  ```JavaScript
  let show = function () {
      console.log('Anonymous function');
  };
  show();
  ```
  - In this example, the anonymous function has no name between the function keyword and parentheses ().
  - Assign the function to the show variable so that later the anonymous function can be called.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: 
- Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. 
- In React, it allows us to render different elements or components based on a condition. 
- This concept is applied often in the following scenarios: Rendering external data from an API.

2. Ruby:
- Ruby is an interpreted, high-level, general-purpose programming language. 
- It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. 
- Ruby is dynamically typed and uses garbage collection and just-in-time compilation.

3. Object oriented programming:
- Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields, and code, in the form of procedures. 
- A feature of objects is that an object's own procedures can access and often modify the data fields of itself.

4. Ruby hash:
- A Ruby Hash is a dictionary-like collection of unique keys and their values. 
- Also called associative arrays, they are similar to Arrays, but where an Array uses integers as its index, a Hash allows you to use any object type.
- Hashes enumerate their values in the order that the corresponding keys were inserted.

5. Ruby blocks:
- A Ruby block is a way of grouping statements, and may appear only in the source adjacent to a method call; the block is written starting on the same line as the method call's last parameter (or the closing parenthesis of the parameter list). 
- The code in the block is not executed at the time it is encountered.