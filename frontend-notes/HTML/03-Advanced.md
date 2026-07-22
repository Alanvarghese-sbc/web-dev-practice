# HTML — 03. Advanced

## 1. HTML5 vs HTML — What Changed
HTML5 introduced:
- Semantic tags (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- Native audio/video support (no Flash needed)
- `<canvas>` for drawing graphics via JS
- `localStorage` / `sessionStorage` (client-side storage, replacing cookies for many use cases)
- New form input types (`email`, `date`, `range`, `color`, etc.) and built-in validation
- APIs: Geolocation, Drag and Drop, Web Workers, WebSockets support at the browser level

## 2. Web Storage APIs

```js
// localStorage — persists until manually cleared
localStorage.setItem("theme", "dark");
localStorage.getItem("theme");
localStorage.removeItem("theme");
localStorage.clear();

// sessionStorage — cleared when the tab closes
sessionStorage.setItem("draftForm", JSON.stringify(formData));
```
Only strings can be stored — objects/arrays must be `JSON.stringify()`-ed before saving and `JSON.parse()`-ed after reading.

## 3. `<canvas>` — Drawing with JavaScript

```html
<canvas id="myCanvas" width="300" height="150"></canvas>
<script>
  const ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, 100, 80);
</script>
```
Used for graphs, games, image manipulation, signature pads — pixel-level drawing controlled entirely by JS.

## 4. Drag and Drop API

```html
<div draggable="true" ondragstart="drag(event)">Drag me</div>
<div ondrop="drop(event)" ondragover="event.preventDefault()">Drop here</div>
```

## 5. `data-*` Custom Attributes
Store custom data directly on elements, accessible via JS `dataset`:
```html
<li data-user-id="42" data-role="admin">Alan</li>
```
```js
const li = document.querySelector("li");
li.dataset.userId; // "42"
li.dataset.role;   // "admin"
```
Common in interactive UI components (tabs, modals, sortable lists) instead of parsing text content.

## 6. SEO & Meta Tags

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Short page description for search engines">
  <title>Page Title | Site Name</title>

  <!-- Open Graph (social share previews) -->
  <meta property="og:title" content="Page Title">
  <meta property="og:image" content="preview.jpg">
</head>
```
- `viewport` meta tag is **essential** for responsive design — without it, mobile browsers render the page at desktop width and zoom out.

## 7. Forms — File Upload & FormData
```html
<form id="uploadForm">
  <input type="file" name="avatar" id="avatarInput">
</form>
```
```js
const formData = new FormData(document.getElementById("uploadForm"));
fetch("/upload", { method: "POST", body: formData });
```

## 8. Web Components (Intro Concept)
A modern browser-native way to build reusable custom HTML elements, without a framework:
```js
class MyBadge extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<span style="color:red">${this.getAttribute("text")}</span>`;
  }
}
customElements.define("my-badge", MyBadge);
```
```html
<my-badge text="New"></my-badge>
```
Interview-level awareness is usually enough here — frameworks like React/Vue solve the same problem differently, but it's good to know the native browser mechanism exists.

## 9. Accessibility (Advanced)
- **Focus management**: ensure interactive elements are reachable via `Tab` key in a logical order (use `tabindex` sparingly).
- **ARIA roles**: `role="dialog"`, `role="alert"` when building custom components (modals, toasts) that don't have a native HTML equivalent.
- **Landmark regions**: `<nav>`, `<main>`, `<header>` act as ARIA landmarks automatically — screen reader users can jump between them.

---

## 📝 Practice Questions — Advanced

1. What key browser storage differences justify choosing `localStorage` over cookies for saving a UI theme preference?
2. Why must objects be `JSON.stringify()`-ed before storing in `localStorage`?
3. What is `<canvas>` used for, and how is it different from an `<img>`?
4. How would you read a custom `data-user-id="42"` attribute in JavaScript?
5. Why is the `viewport` meta tag critical for responsive design?
6. What problem does `FormData` solve when uploading files via `fetch()`?
7. What are Web Components, and why might a team choose them over a framework component?
8. When would you need to manually add an `aria-*` attribute if you're already using semantic HTML?
9. Explain the real-world difference between `localStorage` and `sessionStorage` with a use case for each.
10. What does `og:title`/`og:image` control, and where would you see the effect?
