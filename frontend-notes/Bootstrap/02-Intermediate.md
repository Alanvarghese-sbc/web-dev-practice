# Bootstrap — 02. Intermediate

## 1. Forms
```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email">
  </div>

  <div class="form-check mb-2">
    <input class="form-check-input" type="checkbox" id="terms">
    <label class="form-check-label" for="terms">I agree</label>
  </div>

  <select class="form-select mb-3">
    <option>Choose...</option>
  </select>

  <button type="submit" class="btn btn-primary w-100">Submit</button>
</form>
```
- `for` on the `<label>` must exactly match the input's `id` — this connects them for accessibility and click-to-focus behavior.
- `.form-control` → styles text inputs/textareas; `.form-select` → styles `<select>`; `.form-check-input`/`.form-check-label` → for checkboxes/radios.

## 2. Navbar
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
    </div>
  </div>
</nav>
```
`navbar-expand-lg` collapses into a hamburger menu below the `lg` breakpoint.

## 3. Modal
```html
<button data-bs-toggle="modal" data-bs-target="#myModal">Open</button>

<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Title</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Content here</div>
    </div>
  </div>
</div>
```
Modals (and most interactive components) work via `data-bs-*` attributes — no custom JS needed for basic open/close behavior, since `bootstrap.bundle.min.js` handles it.

## 4. Layout Patterns Learned From Practical Review

**Container should wrap the entire page section, not just one row:**
```html
<!-- ❌ Wrong -->
<main>
  <h1>Payment Page</h1>
  <div class="row g-4 container py-5">...</div>
</main>

<!-- ✅ Correct -->
<main class="container py-5">
  <h1 class="mb-4">Payment Page</h1>
  <div class="row g-4">...</div>
</main>
```

**Card padding belongs on `.card-body`, not `.card` itself:**
```html
<!-- ❌ -->
<div class="card p-4">...</div>

<!-- ✅ -->
<div class="card">
  <div class="card-body">...</div>
</div>
```

## 5. Responsive Utility Classes
```html
<div class="d-none d-md-block">Visible from md breakpoint up</div>
<div class="d-flex flex-column flex-md-row">Column on mobile, row on desktop</div>
```

---

## 📝 Practice Questions — Intermediate

1. Why must `<label for="upi">` match `<input id="upi">` exactly?
2. What does `navbar-expand-lg` control, and what happens below that breakpoint?
3. What are `data-bs-toggle` and `data-bs-target` used for on a modal trigger button?
4. Why should padding go on `.card-body` instead of `.card`?
5. What's the effect of `d-none d-md-block` together?
6. What Bootstrap class styles a `<select>` element specifically (different from `.form-control`)?
