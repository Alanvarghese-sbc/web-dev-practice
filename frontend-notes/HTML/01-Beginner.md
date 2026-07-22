# HTML — 01. Beginner

## 1. What is HTML?
HTML (HyperText Markup Language) is the standard markup language used to structure content on the web. It is **not a programming language** — it has no logic, loops, or conditions. It describes *what* content is (a heading, a paragraph, a list) so the browser knows how to render and interpret it.

## 2. Document Structure
Every HTML page follows this skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <!-- visible content goes here -->
</body>
</html>
```

- `<!DOCTYPE html>` — tells the browser to render in standards mode (HTML5).
- `<html>` — root element, wraps everything.
- `<head>` — metadata: title, character encoding, linked CSS/JS, SEO tags. Nothing in `<head>` is directly visible on the page (except the tab title).
- `<body>` — everything the user actually sees.

## 3. Tags, Elements, Attributes
- **Tag**: the markup itself, e.g. `<p>` (opening) and `</p>` (closing).
- **Element**: the tag + its content + closing tag → `<p>Hello</p>`.
- **Attribute**: extra information added inside the opening tag → `<p id="intro" class="lead">`.
  - Attributes are always `name="value"` pairs.
  - Common global attributes: `id`, `class`, `style`, `title`, `data-*`.

Some elements are **void/self-closing** (no closing tag, no content): `<br>`, `<hr>`, `<img>`, `<input>`, `<meta>`, `<link>`.

## 4. Text & Content

**Headings** — `<h1>` to `<h6>`, in decreasing importance. Use only **one `<h1>`** per page (main title); don't skip levels just for size — use CSS for sizing, not heading level.

```html
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Sub-section</h3>
```

**Paragraph**: `<p>Some text.</p>`

**Line break vs horizontal rule**
```html
Line one<br>Line two   <!-- forces a line break -->
<hr>                    <!-- draws a horizontal divider line -->
```

**Formatting tags**
```html
<b>Bold (visual only)</b>
<strong>Bold (semantic importance)</strong>
<i>Italic (visual only)</i>
<em>Italic (semantic emphasis)</em>
<mark>Highlighted text</mark>
```
`<strong>`/`<em>` carry meaning (screen readers announce them differently); `<b>`/`<i>` are purely visual.

## 5. Lists

```html
<!-- Ordered (numbered) -->
<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>

<!-- Unordered (bulleted) -->
<ul>
  <li>Item</li>
  <li>Item</li>
</ul>

<!-- Description list -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>
```

## 6. Links & Images

```html
<a href="https://example.com">Visit Example</a>
<a href="about.html">About Page (relative link)</a>
<a href="mailto:someone@mail.com">Email us</a>
<a href="#section2">Jump to section on same page</a>

<img src="logo.png" alt="Company logo">
```
- `alt` is **required** for accessibility and shows if the image fails to load.
- **Absolute path**: full URL, e.g. `https://site.com/img.png` — works anywhere.
- **Relative path**: relative to the current file's location, e.g. `./images/img.png` or `../assets/img.png` — breaks if file structure moves.

## 7. Basic Forms

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" placeholder="Enter name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Submit</button>
</form>
```
- `<label for="x">` must match the input's `id="x"` — clicking the label then focuses the input (also required for accessibility).
- `method="GET"` puts form data in the URL; `method="POST"` sends it in the request body (used for sensitive/larger data).

---

## 📝 Practice Questions — Beginner

1. What is the difference between an element and a tag?
2. Why is `<!DOCTYPE html>` necessary?
3. What's the difference between `<b>` and `<strong>`? Between `<i>` and `<em>`?
4. Why should `alt` attributes always be added to `<img>` tags?
5. What happens if `for` on a `<label>` doesn't match any input's `id`?
6. Give one example each of an absolute path and a relative path.
7. What's the difference between `<ol>` and `<ul>`?
8. Can a page have more than one `<h1>`? Should it?
9. What's the difference between GET and POST in a form's `method` attribute?
10. Name three void (self-closing) elements.
