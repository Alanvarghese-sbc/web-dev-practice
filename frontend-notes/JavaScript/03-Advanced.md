# JavaScript — 03. Advanced

## 1. Hoisting
JavaScript moves **declarations** (not initializations) to the top of their scope before execution.

```js
console.log(x); // undefined (not an error — declaration hoisted, value not yet assigned)
var x = 5;

console.log(y); // ReferenceError — let/const are hoisted but stay in a "temporal dead zone"
let y = 5;
```
Function declarations are fully hoisted (can be called before their definition in code); function expressions/arrow functions are not.

## 2. Closures
A closure is a function that remembers variables from its outer (enclosing) scope even after the outer function has finished executing.

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const increment = counter();
increment(); // 1
increment(); // 2 — "count" persisted between calls, private to this closure
```
Real use: data privacy (module pattern), maintaining state in callbacks, memoization, `setTimeout` loops.

## 3. `this`, `call`, `apply`, `bind`

`this` refers to the object that is currently "calling" the function — its value depends on **how** a function is invoked, not where it's defined.

```js
const obj = {
  name: "Alan",
  greet() {
    console.log(this.name); // "this" = obj, because obj.greet() was called
  }
};

const greetFn = obj.greet;
greetFn(); // undefined — "this" lost, called standalone

greetFn.call(obj);   // "Alan" — explicitly sets "this"
greetFn.apply(obj);  // same as call, but arguments passed as an array
const bound = greetFn.bind(obj); // returns a NEW function with "this" permanently set
bound(); // "Alan"
```
Arrow functions **do not** have their own `this` — they inherit `this` from the enclosing lexical scope (useful inside callbacks to avoid losing context).

## 4. Promises

A Promise represents a value that may not be available yet (pending → fulfilled/rejected).

```js
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Data loaded");
  else reject("Error occurred");
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Done"));
```

**Chaining & combining**
```js
Promise.all([p1, p2, p3])   // resolves when ALL succeed, rejects if ANY fails
Promise.race([p1, p2])       // resolves/rejects as soon as the FIRST settles
Promise.allSettled([p1, p2]) // waits for all, returns status of each (no early rejection)
```

## 5. Async/Await

```js
async function getUser() {
  try {
    const response = await fetch("/api/user");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
```
- `async` functions always return a Promise.
- `await` pauses execution until the Promise settles — makes async code read like synchronous code.

**⭐ Most Asked: Promise vs Async/Await**
`async/await` is syntactic sugar over Promises — cleaner, more readable than chained `.then()` calls, but functionally built on the same Promise mechanism. Error handling uses standard `try/catch` instead of `.catch()`.

## 6. The Fetch API

```js
fetch("https://api.example.com/data")
  .then(res => {
    if (!res.ok) throw new Error("Network error");
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));

// POST request
fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Alan" })
});
```

## 7. The Event Loop (Conceptual — Common Interview Topic)
JavaScript is single-threaded but handles async operations via:
- **Call stack** — executes synchronous code, one frame at a time.
- **Web APIs** (browser) — handle things like `setTimeout`, `fetch`, DOM events in the background.
- **Callback queue / Microtask queue** — completed async callbacks wait here.
- **Event loop** — continuously checks: is the call stack empty? If yes, push the next queued callback onto it. **Microtasks (Promises) run before macrotasks (`setTimeout`).**

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// Output: 1, 4, 3, 2
// (sync code first, then microtasks/Promises, then macrotasks/setTimeout)
```

## 8. Higher-Order Functions & Currying
```js
function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplyBy(2);
double(5); // 10
```
A higher-order function takes a function as an argument and/or returns a function — the foundation of `map`, `filter`, `reduce`, and currying patterns.

## 9. Debouncing & Throttling (Common Practical Interview Task)
```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
// Use: search input that only fires the API call after user stops typing for 300ms
searchInput.addEventListener("input", debounce(handleSearch, 300));
```

---

## 📝 Practice Questions — Advanced

1. What's the difference between how `var` and `let` behave with hoisting?
2. Write a closure-based counter function and explain why `count` persists between calls.
3. What does `.bind()` return, compared to `.call()` and `.apply()`?
4. Why do arrow functions not need `.bind(this)` when used as callbacks inside methods?
5. What's the output order of: `console.log("A"); setTimeout(() => console.log("B"), 0); Promise.resolve().then(() => console.log("C")); console.log("D");` — and why?
6. What does `Promise.all()` do differently from `Promise.allSettled()`?
7. Why is `try/catch` used with `async/await` instead of `.catch()`?
8. What problem does debouncing solve for a live search input?
9. Explain what a "higher-order function" is with an example beyond `map`/`filter`.
10. What is the "temporal dead zone" in relation to `let`/`const`?
