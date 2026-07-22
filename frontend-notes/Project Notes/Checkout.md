# Project: Checkout Page

## Purpose
Collect and save the customer's shipping address before moving to the Payment page.

## Flow
1. User fills a shipping address form (Full Name, Email, Phone, City, State, ZIP).
2. On submit, the form data is bundled into an object and saved to `localStorage`:
   ```js
   const shippingAddress = {
     fullName, email, phoneNumber, city, state, zipCode
   };
   localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
   ```
3. User is redirected to the Payment page, which reads this saved address back out (see `Payment.md`).

## Layout Notes
- Wrap the whole page in a single Bootstrap `.container` (not just individual rows) — see `Bootstrap/02-Intermediate.md`.
- Use `<h5>` for card section titles instead of plain `<p>` tags for cleaner hierarchy.
