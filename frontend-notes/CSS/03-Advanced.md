# CSS — 03. Advanced

## 1. CSS Grid

Two-dimensional layout system (rows AND columns simultaneously — Flexbox is one-dimensional).

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  grid-template-rows: 100px auto;
  gap: 20px;
}

.item {
  grid-column: 1 / 3;  /* spans from column line 1 to 3 */
  grid-row: 1 / 2;
}
```

`fr` unit = "fraction of remaining space" — `1fr 2fr` splits space 1:2.

**Named grid areas** (very readable for page layouts):
```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 200px 1fr;
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
```

**⭐ Flexbox vs Grid**
- Flexbox → one dimension (a row OR a column of items) — best for components (navbars, button groups, card content).
- Grid → two dimensions (rows AND columns together) — best for overall page layout.

## 2. Responsive Design & Media Queries

```css
/* Mobile-first approach (recommended) */
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container { width: 750px; }
}

@media (min-width: 1024px) {
  .container { width: 970px; }
}
```
- **Mobile-first**: write base styles for small screens, then add complexity with `min-width` queries as screens grow.
- **Desktop-first**: write for large screens, then override with `max-width` queries for smaller screens.

```css
@media (max-width: 768px) {
  .sidebar { display: none; }
}
```

## 3. CSS Custom Properties (Variables)

```css
:root {
  --primary-color: #3498db;
  --spacing: 16px;
}

.btn {
  background: var(--primary-color);
  padding: var(--spacing);
}

.btn:hover {
  background: var(--primary-color, blue); /* fallback if variable undefined */
}
```
Unlike Sass/Less variables, CSS custom properties are live in the browser — can be changed dynamically via JavaScript (`element.style.setProperty('--primary-color', 'red')`) and respect the cascade (can be overridden per-scope).

## 4. Animations (`@keyframes`)

```css
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}

.card {
  animation: slideIn 0.5s ease-out forwards;
}
```
Difference from `transition`: `transition` only animates between two states (e.g. normal → hover). `@keyframes` + `animation` can define multiple steps and run automatically/repeatedly without needing a trigger event.

## 5. Transform
```css
transform: translateX(20px);
transform: scale(1.2);
transform: rotate(45deg);
transform: translate(-50%, -50%); /* commonly used with position:absolute to perfectly center */
```

## 6. Specificity & the Cascade

Specificity determines which rule "wins" when multiple rules target the same element. Roughly, from lowest to highest:
1. Type selectors (`p`, `div`) & pseudo-elements
2. Class selectors (`.btn`), attribute selectors, pseudo-classes
3. ID selectors (`#header`)
4. Inline styles (`style="..."`)
5. `!important` (overrides everything — use sparingly, it breaks the natural cascade and is hard to override later)

```css
p { color: blue; }         /* specificity: 0-0-1 */
.text { color: red; }       /* specificity: 0-1-0 → wins over p */
#main { color: green; }      /* specificity: 1-0-0 → wins over .text */
```
If specificity is equal, the rule that comes **later in the source** wins.

## 7. Modern Layout Utilities
```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* full viewport height */
}
```
```css
.clamp-text {
  font-size: clamp(1rem, 2vw, 2rem); /* min, preferred, max — fluid responsive typography without media queries */
}
```

## 8. CSS Architecture Awareness (Interview Talking Points)
- **BEM naming convention**: `.block__element--modifier` (e.g. `.card__title--highlighted`) — keeps large codebases maintainable.
- **Utility-first CSS** (Bootstrap, Tailwind): small single-purpose classes (`.mt-4`, `.text-center`) composed together instead of writing custom CSS per component.

---

## 📝 Practice Questions — Advanced

1. When would you choose Grid over Flexbox for a layout, and why?
2. What does the `fr` unit represent in CSS Grid?
3. Explain mobile-first vs desktop-first media query strategy.
4. How are CSS custom properties (`--var`) different from Sass variables?
5. Difference between `transition` and `@keyframes` animation?
6. Rank these by specificity: `#nav`, `.nav-item`, `nav`, inline `style=""`.
7. Why should `!important` generally be avoided in production CSS?
8. What does `transform: translate(-50%, -50%)` combined with `position: absolute; top:50%; left:50%;` achieve, and why?
9. What problem does `clamp()` solve compared to writing multiple media queries for font-size?
10. What is the BEM naming convention, and what problem does it solve?
