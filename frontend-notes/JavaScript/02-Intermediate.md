# JavaScript — 02. Intermediate

## 1. The DOM (Document Object Model) — Extremely Important
The DOM is a programming interface that represents an HTML document as a tree structure, allowing JavaScript to access and modify elements dynamically.

```js
document.getElementById("id")
document.querySelector(".class")       // first match
document.querySelectorAll(".class")     // NodeList of ALL matches
```

**Manipulating elements**
```js
const el = document.querySelector(".title");
el.textContent = "New Text";       // plain text only, safer
el.innerHTML = "<b>Bold Text</b>"; // parses HTML, can inject markup
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("open");
el.style.color = "red";
el.setAttribute("data-id", "5");
```

**Creating & inserting elements**
```js
const li = document.createElement("li");
li.textContent = "New item";
document.querySelector("ul").appendChild(li);
```

## 2. Event Handling

```js
button.addEventListener("click", () => {
  alert("Clicked");
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stops the default form submission/page reload
});

input.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
```
Common events: `click`, `submit`, `change`, `input`, `keyup`, `keydown`, `mouseover`, `focus`, `blur`.

**Event Bubbling**
When an event occurs on a child element, it propagates upward through its parent elements. This allows **event delegation** — attaching one listener to a parent to catch events from many children (efficient for dynamic lists):

```js
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

## 3. Array Methods (Very Important for Interviews)

```js
const nums = [1, 2, 3, 4, 5];

nums.map(n => n * 2);          // [2,4,6,8,10] — transforms, returns NEW array
nums.filter(n => n % 2 === 0); // [2,4]        — keeps items passing a test
nums.reduce((acc, n) => acc + n, 0); // 15     — reduces to single value
nums.forEach(n => console.log(n));    // just iterates, returns undefined
nums.find(n => n > 3);          // 4 — first match
nums.some(n => n > 4);           // true — at least one matches
nums.every(n => n > 0);           // true — ALL match
```

**⭐ Most Asked**
- **`slice` vs `splice`**: `slice(start, end)` returns a shallow copy — original array untouched. `splice(start, deleteCount, ...items)` mutates the original array directly (removes/inserts in place).
```js
const arr = [1,2,3,4,5];
arr.slice(1,3);   // [2,3] — arr unchanged
arr.splice(1,2);  // removes [2,3] from arr — arr is now [1,4,5]
```
- **`map` vs `forEach`**: `map()` returns a new array (use when you need the transformed result); `forEach()` returns `undefined` (use only for side effects, like logging).

## 4. Objects — Deeper

```js
const student = { name: "Alan", age: 22 };

Object.keys(student);    // ["name","age"]
Object.values(student);   // ["Alan",22]
Object.entries(student);   // [["name","Alan"],["age",22]]

// Copying (shallow)
const copy = { ...student };
const merged = { ...student, course: "MCA" };
```

## 5. ES6 Essentials

**Template literals**
```js
const name = "Alan";
console.log(`Hello, ${name}! You are ${22} years old.`);
```

**Destructuring**
```js
const { name, age } = student;
const [first, second] = ["a", "b"];
```

**Spread operator** — expands an array/object
```js
const arr2 = [...arr1, 6, 7];
const obj2 = { ...obj1, extra: true };
```

**Rest operator** — collects remaining args into an array
```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
```

## 6. Loops for Objects/Iterables

```js
for (let key in student) { console.log(key); }       // iterates keys (objects)
for (let value of [1,2,3]) { console.log(value); }    // iterates values (arrays/iterables)
```

---

## 📝 Practice Questions — Intermediate

1. Difference between `textContent` and `innerHTML` — which is safer and why?
2. What does `e.preventDefault()` do inside a form submit handler?
3. Explain event delegation and why it's useful for dynamically added elements.
4. Difference between `slice()` and `splice()`, with an example of each.
5. Why does `forEach()` return `undefined` while `map()` returns an array?
6. What's the difference between `for...in` and `for...of`?
7. Write a one-liner using `filter()` and `map()` together to double all even numbers in an array.
8. What does the spread operator do differently from the rest operator, given they use the same `...` syntax?
9. How would you merge two objects, with the second one's properties overriding the first?
10. What does `Object.entries()` return, and when would it be useful (e.g. with a loop)?
