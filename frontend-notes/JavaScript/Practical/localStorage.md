# Practical — localStorage & sessionStorage

## What is Local Storage?
A browser storage mechanism that stores data **permanently** until manually cleared (survives reloads and browser restarts).

## Local Storage vs Session Storage

| Local Storage | Session Storage |
|---|---|
| Permanent | Temporary |
| No expiry | Ends when the tab closes |

## Core API
```js
localStorage.setItem("shippingAddress", JSON.stringify(addressObj)); // save
const data = JSON.parse(localStorage.getItem("shippingAddress"));    // read
localStorage.removeItem("shippingAddress");                          // remove one
localStorage.clear();                                                // remove all
```
⚠️ Only strings can be stored — always `JSON.stringify()` before saving objects/arrays, and `JSON.parse()` after retrieving.

## Practical Pattern: Read → Select → Check → Render
The most common real-world task combining `localStorage` + DOM:

```js
const shippingAddress = JSON.parse(localStorage.getItem("shippingAddress"));
const customerAddress = document.querySelector(".customerAddress");

if (!shippingAddress) {
  customerAddress.innerHTML = `<p class="text-danger">No shipping address found.</p>`;
} else {
  customerAddress.innerHTML = `
    <h5 class="mb-3">${shippingAddress.fullName}</h5>
    <p><strong>Email:</strong> ${shippingAddress.email}</p>
    <p><strong>Phone:</strong> ${shippingAddress.phoneNumber}</p>
    <p><strong>City:</strong> ${shippingAddress.city}</p>
    <p><strong>State:</strong> ${shippingAddress.state}</p>
    <p><strong>PIN:</strong> ${shippingAddress.zipCode}</p>
  `;
}
```

## Common Real-World Uses
- Persisting a shopping cart between page reloads
- Saving a shipping/checkout address to reuse on a payment page
- Remembering theme (dark/light), login tokens (with caution — not fully secure against XSS), form drafts

## 📝 Practice Questions
1. Why must objects be stringified before saving to localStorage?
2. What happens to sessionStorage data when you open the same page in a new tab?
3. Write code to check if a key exists in localStorage before trying to parse it.
4. Why is localStorage not considered fully secure for storing auth tokens?
