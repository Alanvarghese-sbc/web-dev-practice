# HTML — 02. Intermediate

## 1. Tables

```html
<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alan</td>
      <td>90</td>
    </tr>
  </tbody>
</table>
```
- `<table>` → wrapper
- `<tr>` → table row
- `<td>` → table data cell
- `<th>` → table header cell (bold + centered by default)
- `<thead>`, `<tbody>`, `<tfoot>` → semantic table sections (not required but good practice)

**Merging cells**
```html
<td rowspan="2">Spans 2 rows</td>
<td colspan="3">Spans 3 columns</td>
```

## 2. Forms — Advanced Inputs

```html
<textarea rows="4" cols="30" placeholder="Your message"></textarea>

<select name="country">
  <option value="in">India</option>
  <option value="us">USA</option>
</select>

<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>

<input type="checkbox" id="terms" name="terms">
<label for="terms">I agree to terms</label>

<input type="date">
<input type="number" min="0" max="100">
<input type="range" min="0" max="10">
<input type="file">
<input type="password">
```

**Form validation attributes** (built-in, no JS needed):
```html
<input type="text" required minlength="3" maxlength="20">
<input type="email" required>
<input type="number" min="18" max="60">
<input pattern="[A-Za-z]{3,}" title="Only letters, min 3 chars">
```

**Grouping radios**: radios with the same `name` are mutually exclusive (only one can be selected at a time). Checkboxes with the same `name` allow multiple selections.

## 3. Semantic HTML

Semantic tags describe the *meaning* of a section, not just its appearance — improves SEO and accessibility (screen readers use these to navigate).

```html
<header>Site logo, nav</header>
<nav>Navigation links</nav>
<main>
  <section>
    <article>A self-contained piece of content (blog post, card)</article>
  </section>
  <aside>Sidebar / related content</aside>
</main>
<footer>Copyright, links</footer>
```

- `<section>` — groups related content, usually with a heading
- `<article>` — independently distributable content (a blog post, a product card, a comment)
- `<aside>` — tangential content (sidebar, ads, related links)
- Using `<div>` for everything works visually, but semantic tags are what separates "beginner HTML" from "professional HTML" in code review / interviews.

## 4. Media Elements

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>

<video controls width="400">
  <source src="movie.mp4" type="video/mp4">
</video>
```

## 5. Accessibility Basics (a11y)
- Always use `alt` on images.
- Always pair `<label for>` with inputs.
- Use semantic tags instead of `<div>` soup.
- Use sufficient color contrast (this is CSS, but starts with correct HTML structure).
- `aria-label`, `aria-hidden` — used when semantic HTML alone isn't enough (e.g. icon-only buttons).
```html
<button aria-label="Close menu">✕</button>
```

## 6. iframe & Embeds
```html
<iframe src="https://maps.google.com/..." width="600" height="450"></iframe>
```
Embeds another HTML page inside the current page (maps, YouTube videos, payment widgets).

---

## 📝 Practice Questions — Intermediate

1. What's the difference between `rowspan` and `colspan`?
2. Why use `<thead>`/`<tbody>` instead of just `<tr>` rows directly in `<table>`?
3. How do you make a group of checkboxes behave independently vs radios being mutually exclusive?
4. What does the `required` attribute do, and does it need JavaScript?
5. Difference between `<section>` and `<article>`?
6. When would you use `<aside>`?
7. Why is `aria-label` needed on an icon-only button but not on a button with visible text?
8. What's the purpose of the `pattern` attribute on an input?
9. Name two benefits of using semantic HTML over `<div>` for everything.
10. What does `<iframe>` do, and what's one real-world use case?
