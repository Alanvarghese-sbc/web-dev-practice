# CSS — 02. Intermediate

## 1. `box-sizing`
```css
* {
  box-sizing: border-box;
}
```
By default (`content-box`), `width`/`height` apply only to content — padding & border add extra size on top. `border-box` makes `width`/`height` include padding and border, so the box stays exactly the size you set. **Best practice: apply this globally at the start of every project.**

## 2. Positioning

```css
position: static;    /* default — normal document flow */
position: relative;  /* moves relative to its OWN original position */
position: absolute;  /* moves relative to nearest positioned ANCESTOR */
position: fixed;     /* stays fixed relative to the viewport (ignores scroll) */
position: sticky;    /* relative until a scroll threshold, then sticks like fixed */
```

```css
.parent {
  position: relative; /* becomes the "positioning context" */
}
.child {
  position: absolute;
  top: 0;
  right: 0;            /* now positioned relative to .parent, not the page */
}
```

**⭐ Interview favorite: Relative vs Absolute**
- `relative` → offsets the element from where it *would have been*.
- `absolute` → removes it from normal flow entirely and positions it relative to the nearest ancestor that has `position` set to anything other than `static` (if none, relative to `<html>`).

## 3. Flexbox (Must Master)

```css
.container {
  display: flex;
  flex-direction: row;       /* row | row-reverse | column | column-reverse */
  justify-content: center;   /* main-axis alignment */
  align-items: center;       /* cross-axis alignment */
  flex-wrap: wrap;           /* allow items to wrap to new lines */
  gap: 16px;                 /* spacing between items */
}
```

Key `justify-content` values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

Per-item properties:
```css
.item {
  flex-grow: 1;    /* how much it grows to fill space */
  flex-shrink: 1;   /* how much it shrinks if needed */
  flex-basis: 200px; /* starting size before growing/shrinking */
  align-self: flex-end; /* overrides align-items for this one item */
}
```

## 4. Pseudo-classes & Pseudo-elements

**Pseudo-classes** — style an element based on *state*:
```css
a:hover { color: red; }
input:focus { border-color: blue; }
li:first-child { font-weight: bold; }
li:last-child { }
li:nth-child(2) { }
button:disabled { opacity: 0.5; }
```

**Pseudo-elements** — style a *part* of an element:
```css
p::first-letter { font-size: 2em; }
p::before { content: "→ "; }
p::after { content: " ✔"; }
```

## 5. Transitions
```css
.btn {
  background: blue;
  transition: background 0.3s ease;
}
.btn:hover {
  background: darkblue;
}
```
`transition` smoothly animates a property change over time instead of it snapping instantly.

## 6. CSS Units — Deeper Dive

**⭐ Frequently Asked: `em` vs `rem`**
- `em` → relative to the **parent's** font size (compounds if nested)
- `rem` → relative to the **root** (`<html>`) font size only (predictable, preferred for consistent scaling)

```css
html { font-size: 16px; }
.text { font-size: 1.5rem; } /* always 24px, regardless of nesting */
```

## 7. Shorthand Properties
```css
margin: 10px 20px 10px 20px;  /* top right bottom left (clockwise) */
margin: 10px 20px;             /* top/bottom = 10px, left/right = 20px */
padding: 10px;                  /* all sides = 10px */

border: 1px solid black;        /* width style color */
font: italic bold 16px/1.5 Arial; /* style weight size/line-height family */
```

## 8. Z-index & Stacking Context
```css
.modal {
  position: fixed;
  z-index: 1000; /* higher value = closer to viewer, on top of lower z-index elements */
}
```
`z-index` only works on positioned elements (`relative`, `absolute`, `fixed`, `sticky`) — has no effect on `static` elements.

---

## 📝 Practice Questions — Intermediate

1. Why is `box-sizing: border-box` almost always applied globally in real projects?
2. If `.child` has `position: absolute` but no ancestor has a non-static position, what is it positioned relative to?
3. Difference between `justify-content` and `align-items` in Flexbox?
4. What does `flex-wrap: wrap` do, and what's the default if omitted?
5. Difference between a pseudo-class and a pseudo-element? Give one example each.
6. What CSS property would you use to smoothly animate a hover color change?
7. Why is `rem` generally preferred over `em` for consistent, scalable spacing across a large project?
8. What does `z-index` require to actually take effect?
9. Write the shorthand for `margin-top: 10px; margin-right: 5px; margin-bottom: 10px; margin-left: 5px;`
10. What's the difference between `:first-child` and `:nth-child(1)`?
