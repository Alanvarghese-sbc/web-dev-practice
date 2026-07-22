# JavaScript — 01. Beginner

## 1. What is JavaScript?
A programming language that runs in the browser (and beyond, via Node.js) to add interactivity and logic to a web page — HTML gives structure, CSS gives style, JS gives *behavior*.

## 2. Variables

```js
var a = 10;    // function-scoped, can be redeclared and reassigned (avoid using in modern code)
let b = 20;    // block-scoped, can be reassigned, cannot be redeclared in same scope
const c = 30;  // block-scoped, cannot be reassigned or redeclared
```

| | var | let | const |
|---|---|---|---|
| Reassign | Yes | Yes | No |
| Redeclare | Yes | No | No |
| Scope | Function | Block | Block |

**⭐ Interview Q: Difference between var, let, const?** → see table above. Rule of thumb: use `const` by default, `let` if the value needs to change, avoid `var`.

## 3. Data Types

```js
"hello"        // String
42             // Number
true / false   // Boolean
null           // intentional "nothing"
undefined      // variable declared but not assigned
{ name: "A" }  // Object
[1, 2, 3]      // Array
```
Check type: `typeof "hello"` → `"string"`.

## 4. Operators

```js
+  -  *  /  %      // arithmetic (% = remainder)
==  ===             // equality (loose vs strict)
!=  !==              // inequality
>  <  >=  <=          // comparison
&&  ||  !               // logical AND, OR, NOT
```

**⭐ Most Asked: `==` vs `===`**
```js
5 == "5"   // true  → converts types before comparing (loose)
5 === "5"  // false → checks value AND type, no conversion (strict)
```
Always prefer `===` in real code to avoid unexpected type coercion bugs.

## 5. Functions

```js
function add(a, b) {
  return a + b;
}

// Function expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow function
const subtract = (a, b) => a - b;

// Single-expression arrow function (implicit return)
const square = x => x * x;
```

## 6. Conditionals

```js
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teen");
} else {
  console.log("Child");
}

// Ternary operator (shorthand if-else)
const status = age >= 18 ? "Adult" : "Minor";

// Switch
switch (day) {
  case "Mon":
    console.log("Start of week");
    break;
  default:
    console.log("Another day");
}
```

## 7. Loops

```js
for (let i = 0; i < 5; i++) { console.log(i); }

let i = 0;
while (i < 5) { console.log(i); i++; }

do {
  console.log(i);
} while (i < 5);
```

## 8. Arrays — Basics

```js
const fruits = ["apple", "banana", "mango"];
fruits[0];          // "apple"
fruits.length;       // 3
fruits.push("kiwi");  // adds to end
fruits.pop();          // removes from end
fruits.indexOf("mango"); // 1
```

## 9. Objects — Basics

```js
const student = {
  name: "Alan",
  age: 22,
  isEnrolled: true
};

student.name;       // dot notation
student["age"];      // bracket notation (needed if key is dynamic or has spaces)
student.course = "MCA"; // add new property
```

---

## 📝 Practice Questions — Beginner

1. What's the output of `5 == "5"` vs `5 === "5"`, and why?
2. Why is `var` generally avoided in modern JavaScript?
3. What's the difference between `null` and `undefined`?
4. Write an arrow function that squares a number.
5. What does `array.push()` return? What does `array.pop()` return?
6. What's the difference between dot notation and bracket notation for accessing object properties, and when is bracket notation *required*?
7. What is the difference between `let` and `const` scoping compared to `var`?
8. Rewrite an `if/else if/else` block for a grading system using a ternary operator (if only two outcomes) or switch (if applicable).
9. What does `typeof` return for an array?
10. What's the difference between a function declaration and a function expression?
