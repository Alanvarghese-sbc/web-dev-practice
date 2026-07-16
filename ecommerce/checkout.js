const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];
const checkoutItems = document.querySelector(".CheckOutItems");
const orderSum = document.querySelector(".orderSummary")
let subTotalAll = document.querySelector(".subTotalAll");
let shippingCharge = document.querySelector(".shippingCharge");
let taxElement = document.querySelector(".tax");
let totalElement = document.querySelector(".GrandTotal");

const savedAddress = JSON.parse(localStorage.getItem("shippingAddress"));

function displayCheckOutProducts() {
    checkoutItems.innerHTML = ""
    cartProducts.forEach(p => {
        checkoutItems.innerHTML += `<div class="card mb-4">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <img src="" alt="" />
                                </div>
                                <div class="col-md-5">
                                    <h5 class="card-title">${p.productName}</h5>
                                    <p class="text-muted">Category : ${p.category}</p>
                                </div>
                                <div class="col-md-2">
                                    <div class="input-group">
                                        <input style="max-width:100px" class="form-control form-control-sm text-center quantity-input" value="x${p.quantity}" type="text" disabled/>
                                    </div>
                                </div>
                                <div class="col-md-2 text-end">
                                    <p class="fw-bold subtotal">Price : ${p.price}</p>
                                    <p class="fw-bold subtotal">Subtotal : ${p.price * p.quantity}</p>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
    `
    })

    updateOrderSummary()
}

const updateOrderSummary = () => {

    let subTotal = 0;
    let shipping = 0;
    let tax = 0;
    let total = 0;
    

    cartProducts.forEach(p => {

        subTotal += p.price * p.quantity;
    });
    
    if(subTotal>499){
        shippingCharge.innerHTML =` 
        <del class="text-danger">₹49</del> 
        <span class="text-success ms-2">Free</span>
        `
        shipping = 0;
    }else{
        if(!subTotal>0) return;
        shippingCharge.textContent = "₹49"
        shipping = 49;
    }

    tax = subTotal*0.05;
    total = subTotal+shipping+tax

    subTotalAll.textContent = `₹${subTotal.toFixed(2)}`;
    taxElement.textContent = `₹${tax.toFixed(2)}`;
    totalElement.textContent =` ₹${total.toFixed(2)}`;
}


const checkoutForm = document.getElementById("checkoutForm");
const terms = document.getElementById("terms");
const saveBtn = document.getElementById("saveBtn");
const paymentBtn = document.getElementById("paymentBtn");

terms.addEventListener("change",enableSaveAddress);

function enableSaveAddress(){
    saveBtn.disabled = !terms.checked
}

checkoutForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const zipCode = document.getElementById("zipCode").value.trim();
    const terms = document.getElementById("terms").checked;



    if (
        !fullName || !email || !phoneNumber || !city || !state || !zipCode
    ){
        alert("Please fill all the Fields");
        return;
    }

    if(!terms){
        alert("Please accept the Terms and Conditions.");
        return;
    }

    const address = {
        fullName,
        email,
        phoneNumber,
        city,
        state,
        zipCode
    };

    localStorage.setItem("shippingAddress",JSON.stringify(address));

    let addressSaved = true;
    saveBtn.textContent = "✓ Address Saved";
    saveBtn.classList.replace("btn-primary","btn-success");

   

    paymentBtn.disabled = false;

})

paymentBtn.addEventListener("click",() =>{
    window.location.href = "payment.html";
})

function loadSavedAddress(){

    if(savedAddress){
        document.getElementById("fullName").value = savedAddress.fullName;
        document.getElementById("email").value = savedAddress.email;
        document.getElementById("phoneNumber").value = savedAddress.phoneNumber;
        document.getElementById("city").value = savedAddress.city;
        document.getElementById("state").value = savedAddress.state;
        document.getElementById("zipCode").value = savedAddress.zipCode;
        terms.checked = true;
        saveBtn.disabled = false;
        saveBtn.textContent = "✓ Address Saved"
        saveBtn.classList.replace("btn-primary", "btn-success");
    
        paymentBtn.disabled = false;
    }
}



displayCheckOutProducts();
loadSavedAddress();