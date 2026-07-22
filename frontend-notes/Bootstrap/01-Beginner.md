# Bootstrap — 01. Beginner

## 1. What is Bootstrap?
A CSS/JS framework providing pre-built, responsive components and a grid system — write markup with utility classes instead of custom CSS for common patterns.

## 2. Setup
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

## 3. The Grid System
Bootstrap's grid is 12 columns wide, built with `container` → `row` → `col`.

```html
<div class="container">
  <div class="row">
    <div class="col-6">Half width</div>
    <div class="col-6">Half width</div>
  </div>
</div>
```
- `container` → fixed max-width, centered, with side padding
- `container-fluid` → always 100% width
- `row` → wraps columns, applies negative margin to offset column padding
- `col-*` → column width out of 12 (e.g. `col-4` = 1/3 width, `col-8` = 2/3 width)

**Responsive breakpoints**
```html
<div class="col-12 col-md-6 col-lg-4">
  <!-- full width on mobile, half on tablet, 1/3 on desktop -->
</div>
```
Breakpoints: `sm` (≥576px), `md` (≥768px), `lg` (≥992px), `xl` (≥1200px), `xxl` (≥1400px).

## 4. Spacing Utilities
```
m = margin, p = padding
t/b/s/e = top/bottom/start/end, x/y = horizontal/vertical, (blank) = all sides
0–5 = size scale, auto = auto margin
```
```html
<div class="mt-3">margin-top</div>
<div class="p-4">padding all sides</div>
<div class="mx-auto">horizontal auto margin (centers a fixed-width block)</div>
<div class="py-5">padding top+bottom</div>
```

## 5. Text Utilities
```html
<p class="text-center">Centered</p>
<p class="text-danger">Red text (semantic color)</p>
<p class="fw-bold">Bold</p>
<p class="fs-3">Font size level 3</p>
```

## 6. Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-secondary">Outline</button>
<button class="btn btn-danger btn-sm">Small Danger</button>
```

## 7. Basic Components
```html
<!-- Card -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Some text.</p>
  </div>
</div>

<!-- Alert -->
<div class="alert alert-success">Success message</div>

<!-- Badge -->
<span class="badge bg-primary">New</span>
```

---

## 📝 Practice Questions — Beginner

1. What's the difference between `container` and `container-fluid`?
2. How many columns does Bootstrap's grid system use?
3. What does `col-md-6` mean, and at what screen width does it take effect?
4. What's the difference between `mt-3` and `pt-3`?
5. What does `mx-auto` do, and when would you use it?
6. Name three built-in button variants.
7. What HTML structure does a Bootstrap `card` component need at minimum?
