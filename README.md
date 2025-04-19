# Javascript for web app Development 

## What is JavaScript?

✅ High-level programming language.

✅ Interpreted language – runs directly in browsers or via engines like Node.js.

✅ Dynamically typed – no need to declare variable types.

✅ Multi-paradigm – supports functional, object-oriented, and imperative styles.

✅ Primarily used for web development to make pages interactive.

✅ Runs on the client-side (browser), but also on the server-side using Node.js.

✅ Can manipulate the DOM (Document Object Model) to dynamically change HTML and CSS.

✅ Asynchronous capabilities using callbacks, promises, and async/await.

✅ Supported by all modern web browsers.

✅ Core technologies of the web: HTML, CSS, and JavaScript.

## Features

- Demonstrates JavaScript data types
- Console logging and debugging basics
- Simple structure with easy-to-follow code


## Data types in js

### Primitive (7)
- Number
- String
- Boolean
- Bigint
- Null
- undefined
- symbol

### Non-Primitive (Reference)

- Array
- functions
- objects

## Difference Between slice and splice in JS

### slice()

- Does NOT modify the original array
- Returns a new array
- Used to extract a portion of an array


### splice()
- Modifies the original array
- Returns removed elements
- Used to add, remove, or replace elements

## Difference Between regular function and arrow function in JS

 ###  Regular Function
✅ Has its own this context

✅ Can be used as a constructor with new

✅ Supports arguments object

✅ Function hoisting works (can be called before declaration if declared with function)

❌ More verbose syntax

### Arrow Function

❌ Does not have its own this (inherits from surrounding lexical scope)

❌ Cannot be used as a constructor (will throw error with new)

❌ No arguments object (use rest parameters instead)

❌ Not hoisted (must be declared before use)

✅ Shorter, cleaner syntax — great for callbacks, array methods, etc.

## Why do we use an IIFE?

1. Avoid polluting the global scope
In older JavaScript (before modules), everything defined in the top level went into the global scope.

With IIFE, you can define variables inside a function that don't leak outside.

2. Run code immediately
Sometimes, you just want to run some setup logic once:
- DB connections
- Config setup
- One-time calculations

3. Create private variables / closures
IIFE can help simulate private variables (before we had modules and classes).

4. Used in libraries and frameworks
Before import/export, libraries like jQuery used IIFEs to:

- Encapsulate logic
- Avoid conflicts
- Expose only selected APIs

## JS Execution context

- Global Execution Context
- Function Execution Context
- Eval Execution Context