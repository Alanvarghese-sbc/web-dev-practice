# Project: Shopping Cart

Part of a mini e-commerce practice project: **Product Listing → Cart → Checkout → Payment**.

## Purpose
Practice DOM manipulation, `localStorage` persistence, and Bootstrap layout by building a working cart flow.

## Core Concepts Used
- Rendering product/cart items dynamically with `map()` + template literals
- Persisting cart state in `localStorage` (`JSON.stringify` on save, `JSON.parse` on load) so the cart survives page reloads
- Updating totals (subtotal, tax, shipping, total) reactively as cart items change
- Bootstrap grid/cards for the layout

## Typical Data Shape
```js
// Example cart item stored in localStorage under "cart"
{
  id: 1,
  name: "Product Name",
  price: 499,
  quantity: 2
}
```

## Flow into Checkout
Cart data (and later, shipping address) is saved to `localStorage` so it can be read back on the **Checkout** and **Payment** pages without needing a backend — see `Checkout.md` and `Payment.md`.

> See `JavaScript/02-Intermediate.md` (DOM section) and `JavaScript/Practical/localStorage.md` for the underlying read/write/render patterns used throughout this project.
