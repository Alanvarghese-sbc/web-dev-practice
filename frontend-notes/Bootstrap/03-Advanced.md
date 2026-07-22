# Bootstrap — 03. Advanced

## 1. Centering & Narrowing a Section (Real Project Pattern)
A common issue: a card/section stretches full width when it should be smaller (e.g. a "Payment Method" box on checkout).

**Recommended — centered, responsive:**
```html
<div class="row mt-4 justify-content-center">
  <div class="col-lg-6 col-md-8">
    <div class="card">
      <div class="card-body">...</div>
    </div>
  </div>
</div>
```
This mirrors real e-commerce patterns (Amazon/Flipkart-style checkout) — responsive, centered, doesn't stretch full width on large screens.

**Alternative — fixed max-width:**
```html
<div class="card mx-auto" style="max-width:450px;">...</div>
```

## 2. Customizing Bootstrap with Sass Variables
Instead of overriding with custom CSS after the fact, override Bootstrap's own Sass variables before compiling:
```scss
// custom.scss
$primary: #6f42c1;
$border-radius: 0.75rem;

@import "bootstrap/scss/bootstrap";
```
This changes the actual `.btn-primary`, `.badge`, etc. everywhere, instead of fighting specificity with `!important`.

## 3. Grid + Utility API for Custom Breakpoints
Bootstrap 5's Sass utility API lets you generate custom utility classes (e.g. custom spacing scale, custom colors) beyond the defaults — useful in larger production projects instead of writing one-off custom CSS per component.

## 4. Combining Bootstrap Grid with Flexbox Utilities
```html
<div class="d-flex justify-content-between align-items-center">
  <h5 class="mb-0">Order Summary</h5>
  <span class="badge bg-secondary">3 items</span>
</div>
```
Bootstrap's `d-flex` + spacing/alignment utility classes often replace the need for custom flexbox CSS entirely for simple component layouts.

## 5. Accessibility in Bootstrap Components
- Modals: Bootstrap automatically manages `aria-hidden`, focus trapping, and `role="dialog"` — but you must still provide a proper heading and `aria-label` on close buttons if not using the default `.btn-close`.
- Always keep `<label for>` matched with input `id`s (see Intermediate) — Bootstrap styling doesn't create this relationship automatically.

## 6. Performance & Best Practices
- Only include the Bootstrap JS bundle if you actually use interactive components (modal, dropdown, collapse, carousel, toast) — otherwise CSS-only is lighter.
- Prefer utility classes (`.mt-3`, `.d-flex`) over writing custom CSS for spacing/layout — keeps the codebase consistent and reduces custom stylesheet size.
- Avoid overusing `!important` or deeply nested custom overrides — if you're fighting Bootstrap's specificity often, customize via Sass variables instead (see #2).

## 7. Building a Full Responsive Page — Pattern Recap
```html
<main class="container py-5">
  <h1 class="mb-4">Page Title</h1>

  <div class="row g-4">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body">...</div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body">...</div>
      </div>
    </div>
  </div>

  <div class="row mt-4 justify-content-center">
    <div class="col-lg-6 col-md-8">
      <div class="card">
        <div class="card-body">...</div>
      </div>
    </div>
  </div>
</main>
```

---

## 📝 Practice Questions — Advanced

1. Why is overriding Bootstrap's Sass variables preferable to writing override CSS after the compiled stylesheet?
2. What does `justify-content-center` on a `.row` achieve when combined with a `col-lg-6`?
3. What accessibility handling does Bootstrap provide automatically for modals, and what do you still need to add manually?
4. Why might you exclude `bootstrap.bundle.min.js` from a page entirely?
5. Rewrite a simple two-column flex header (title + badge) using Bootstrap utility classes instead of custom CSS.
6. Why is fighting Bootstrap's specificity with `!important` considered a bad practice, and what's the better alternative?
