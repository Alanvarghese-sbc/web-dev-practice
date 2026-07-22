# Project: Payment Page

## Final Structure (Reviewed & Corrected)

```html
<main class="container py-5">
  <h1 class="mb-4">Payment Page</h1>

  <div class="row g-4">
    <div class="col-lg-6">
      <div class="card mb-4">
        <div class="card-body customerAddress">
          <h5 class="mb-3">Shipping Address</h5>
          <!-- populated via JS from localStorage -->
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card">
        <div class="card-body">
          <h5 class="mb-3">Order Summary</h5>
          <!-- subtotal / shipping / tax / total -->
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-4 justify-content-center">
    <div class="col-lg-6 col-md-8">
      <div class="card">
        <div class="card-body">
          <h5 class="mb-3">Payment Method</h5>

          <div class="form-check mb-2">
            <input class="form-check-input" type="radio" name="payment" id="upi">
            <label class="form-check-label" for="upi">UPI</label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="radio" name="payment" id="card">
            <label class="form-check-label" for="card">Cards</label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="radio" name="payment" id="cod">
            <label class="form-check-label" for="cod">Cash On Delivery</label>
          </div>

          <button id="paymentBtn" type="submit" class="btn btn-primary w-100" disabled>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  </div>
</main>
```

## Key Fixes Made During Review (9/10 rated build)
1. `<main class="container py-5">` wraps the **entire** page, not just one row.
2. The Payment Method card lives **inside** `<main>` (was previously stretching full width outside the container).
3. Every `<label for="...">` matches its input's `id` exactly (`upi`, `card`, `cod`).
4. Submit button has explicit `type="submit"`.
5. Card section titles use `<h5>` instead of `<p>`.
6. Padding lives on `.card-body`, not on `.card` itself.
7. `.form-check` items get `mb-2` for spacing between radio options.
8. Payment Method card is narrowed + centered using `row justify-content-center` + `col-lg-6 col-md-8`.

## Displaying the Saved Shipping Address
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

## Next Improvement (Planned / To-Do)
Make payment options **dynamic** based on selection:
- If **UPI** selected → show a UPI ID input field
- If **Card** selected → show card number, expiry, and CVV fields
- If **Cash on Delivery** selected → hide those extra fields and enable "Pay Now" immediately

This would make the page feel closer to a production-grade checkout flow.
