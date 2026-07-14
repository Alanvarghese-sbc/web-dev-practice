let cart = document.querySelector(".cartItems");

let cartProducts = JSON.parse(localStorage.getItem('cart')) || [];
// let parsedSavedCart = JSON.parse(savedCart);

let subTotalAll = document.querySelector(".subTotalAll");
let shippingCharge = document.querySelector(".shippingCharge");
let taxElement = document.querySelector(".tax");
let totalElement = document.querySelector(".GrandTotal");


const displayCart = () =>{

    if (cartProducts.length === 0){
        cart.innerHTML = 
        `<div class="card mb-4">
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-md-6">
                        <h3 class="card-title">🛒 Your cart is empty.</h3>
                    </div>
                </div>
            </div>
        </div>`

        updateOrderSummary();

        return ;
    }

    cart.innerHTML = "";

    cartProducts.forEach(p =>{
    
      cart.innerHTML +=     `<div class="card mb-4">
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
    
                                        <button class="btn btn-outline-secondary btn-sm minus" type="button" data-id=${p.id}>-</button>
                                        <input style="max-width:100px"class="form-control form-control-sm text-center quantity-input" value="${p.quantity}" type="text" disabled/>
                                        <button class="btn btn-outline-secondary btn-sm plus" type="button" data-id=${p.id}>+</button>
    
                                    </div>
                                </div>
                                <div class="col-md-2 text-end">
                                    <p class="fw-bold subtotal">Price : ${p.price}</p>
                                    <p class="fw-bold subtotal">Subtotal : ${p.price*p.quantity}</p>
                                    <button class="btn btn-sm btn-outline-danger remove" data-id=${p.id}>
                                        <i class="bi bi-trash"></i>
                                    </button>
    
                                </div>
                            </div>
    
                        </div>
    
                    </div>
    `
    });
    updateOrderSummary();
};





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

displayCart();

cart.addEventListener("click", (event) =>{

    const button = event.target.closest("button"); 
    if(!button) return;    

    if(
        !button.classList.contains("plus") && 
        !button.classList.contains("minus") && 
        !button.classList.contains("remove")
    ) 
    return;

    const pid = Number(button.dataset.id)


    if(button.classList.contains("plus")){


        const index = cartProducts.findIndex(p => p.id === pid);

        if(index !== -1){
            cartProducts[index].quantity++;
        }

        // localStorage.setItem('cart',JSON.stringify(cartProducts));
    }else if(button.classList.contains("minus")){

        const index = cartProducts.findIndex(p => p.id === pid);

        if(index === -1) return;

        if (cartProducts[index].quantity > 1){

            cartProducts[index].quantity--;
        }else{
            cartProducts.splice(index,1);
        }

        // localStorage.setItem('cart',JSON.stringify(cartProducts));

    }else if(button.classList.contains("remove")){

        const index = cartProducts.findIndex(p => p.id === pid );

        if(index !== -1){
            cartProducts.splice(index, 1);
        }

    }
    
    localStorage.setItem("cart",JSON.stringify(cartProducts));
    displayCart();


})


