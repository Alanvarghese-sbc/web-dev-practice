# CSS — 01. Beginner

## 1. What is CSS?
CSS (Cascading Style Sheets) controls the *presentation* of HTML — colors, spacing, fonts, layout. HTML = structure, CSS = appearance.

## 2. Three Ways to Add CSS

**Inline** (on the element itself — highest priority, avoid overusing)
```html
<p style="color:red;">Text</p>
```

**Internal** (inside `<style>` in the `<head>`)
```html
<style>
  p { color: red; }
</style>
```

**External** (separate `.css` file — best practice, reusable, cacheable)
```html
<link rel="stylesheet" href="style.css">
```

## 3. Basic Syntax
```css
selector {
  property: value;
}
```
```css
p {
  color: blue;
  font-size: 16px;
}
```

## 4. Selectors

```css
p { }             /* tag selector — all <p> */
#header { }        /* id selector — one unique element, id="header" */
.btn { }            /* class selector — any element with class="btn" */
* { }                 /* universal selector — everything */
div p { }              /* descendant selector — any <p> inside a <div> */
div > p { }              /* direct child selector — <p> that is a DIRECT child of <div> */
h1, h2, h3 { }             /* grouped selector — applies to all listed */
```

## 5. Colors & Units
```css
color: red;                 /* named color */
color: #ff0000;             /* hex */
color: rgb(255, 0, 0);      /* rgb */
color: rgba(255, 0, 0, 0.5);/* rgb + alpha (transparency) */
```
Common units: `px` (fixed pixels), `%` (relative to parent), `em`/`rem` (font-relative), `vh`/`vw` (viewport-relative).

## 6. The Box Model (Extremely Important)
Every element is a box made of four layers, from the inside out:

```
┌───────────────── margin ─────────────────┐
│ ┌────────────── border ─────────────────┐ │
│ │ ┌───────────── padding ─────────────┐ │ │
│ │ │           content                 │ │ │
│ │ └────────────────────────────────────┘ │ │
│ └──────────────────────────────────────┘ │
└────────────────────────────────────────────┘
```
```css
div {
  width: 200px;
  padding: 20px;   /* space inside the border, around content */
  border: 2px solid black;
  margin: 10px;     /* space outside the border, between elements */
}
```
By default, `width`/`height` apply only to content — padding/border add on top (unless `box-sizing: border-box` is used, see Intermediate).

## 7. Text & Font Styling
```css
font-family: Arial, sans-serif;
font-size: 18px;
font-weight: bold;
text-align: center;
text-decoration: underline;
line-height: 1.5;
```

## 8. Background
```css
background-color: lightblue;
background-image: url("bg.png");
background-size: cover;
```

## 9. Display Basics
```css
display: block;    /* takes full width, starts on new line (div, p, h1) */
display: inline;    /* takes only needed width, stays in line (span, a) */
display: inline-block; /* inline flow but can have width/height/margin */
display: none;       /* removed from layout entirely */
```

---

## 📝 Practice Questions — Beginner

1. What's the difference between inline, internal, and external CSS? Which is best practice?
2. Order the box model layers from innermost to outermost.
3. What's the difference between `padding` and `margin`?
4. What does `div > p` select vs `div p`?
5. Difference between `rgb()` and `rgba()`?
6. What happens visually when you set `display: none` vs `visibility: hidden`?
7. Difference between `block`, `inline`, and `inline-block`?
8. Which selector has higher priority: `.class` or `#id`? Why?
9. What does `line-height: 1.5` control?
10. If a `<div>` has `width: 200px`, `padding: 20px`, and `border: 5px`, what's its actual rendered width by default?
