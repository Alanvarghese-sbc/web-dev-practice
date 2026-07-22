# Practical — JS Tricks & Quick-Fire Interview Answers

Short, precise answers for tests — say exactly what's needed, don't over-explain.

**What is the DOM?**
A programming interface that represents an HTML document as a tree structure, allowing JS to access and modify elements dynamically.

**What is Event Bubbling?**
When an event on a child element propagates upward through its parent elements.

**What is Hoisting?**
JS moves declarations (not initializations) to the top of their scope before execution.

**What is a Closure?**
A function that remembers variables from its outer scope even after the outer function has finished executing.

**What is Local Storage?**
A browser storage mechanism that stores data permanently until manually cleared.

**`slice` vs `splice`**
`slice()` doesn't mutate the original array (returns a copy); `splice()` mutates it directly.

**`map` vs `forEach`**
`map()` returns a new array; `forEach()` returns `undefined`.

**`==` vs `===`**
`==` compares value only (with type coercion); `===` compares value and type.

**Promise vs Async/Await**
`async/await` is cleaner syntax built on top of Promises; errors are handled with `try/catch`.

**`var` vs `let` vs `const`**
`var` is function-scoped and re-declarable/re-assignable; `let`/`const` are block-scoped; `const` cannot be reassigned.

**`call` vs `apply` vs `bind`**
`call`/`apply` invoke the function immediately with a given `this` (`apply` takes args as an array); `bind` returns a new function with `this` permanently set, to be called later.

**Debounce vs Throttle**
Debounce delays execution until activity stops (e.g. search-as-you-type); throttle limits execution to at most once per interval (e.g. scroll events).

**Synchronous vs Asynchronous**
Synchronous code runs line-by-line, blocking; asynchronous code (Promises, callbacks, `setTimeout`) lets other code run while waiting.

**Null vs Undefined**
`undefined` = variable declared but not assigned a value; `null` = intentionally assigned "no value".

**Pass by value vs pass by reference**
Primitives (string, number, boolean) are passed by value (copied); objects/arrays are passed by reference (same memory reference shared).
