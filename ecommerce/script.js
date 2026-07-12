const products = [
  {
    "id": 101,
    "productName": "Noise-Canceling Headphones",
    "category": "Electronics",
    "price": 299.99,
    "inStock": true,
    "tags": ["audio", "wireless", "premium"],
    "details": {
      "brand": "AcousticPro",
      "color": "Matte Black",
      "batteryLife": "40 hours"
    },
    "rating": 4.8
  },
  {
    "id": 102,
    "productName": "Ergonomic Office Chair",
    "category": "Furniture",
    "price": 189.50,
    "inStock": false,
    "tags": ["office", "comfort", "ergonomic"],
    "details": {
      "brand": "PostureTech",
      "color": "Steel Gray",
      "material": "Mesh"
    },
    "rating": 4.5
  },
  {
    "id": 103,
    "productName": "Organic Matcha Green Tea",
    "category": "Groceries",
    "price": 24.99,
    "inStock": true,
    "tags": ["tea", "organic", "superfood"],
    "details": {
      "brand": "ZenLeaf",
      "weight": "100g",
      "origin": "Uji, Japan"
    },
    "rating": 4.9
  },
  {
    "id": 104,
    "productName": "Smart Home Hub v2",
    "category": "Smart Home",
    "price": 79.00,
    "inStock": true,
    "tags": ["automation", "IoT", "smart"],
    "details": {
      "brand": "HomeSync",
      "compatibility": ["Alexa", "Google Assistant"],
      "connectivity": "Wi-Fi, Zigbee"
    },
    "rating": 4.2
  }
]

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartCount = document.getElementById("cartCount");
cartCount.textContent = cart.length;


const productsContainer = document.querySelector(".productsContainer")
const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("input", updateProducts)


productsContainer.addEventListener("click", (event) =>{


  if(!event.target.classList.contains("add-to-cart")) return ;

  const productId = Number(event.target.dataset.id);
  
  const product = products.find(p => p.id === productId);

  const cartPos = cart.findIndex(p => p.id === productId)

  if(!product) return;

  if(cartPos === -1){
    cart.push({
      ...product,
      quantity: 1
    });
  }else{
    cart[cartPos].quantity++;
  }

  // console.log(product);
  console.log(cart);
//convert th object ot string before storing the item so use JSON.stringify
  localStorage.setItem('cart', JSON.stringify(cart))

  console.log(productId);
  cartCount.textContent = cart.length;

})


function displayProducts(productList){
    productsContainer.innerHTML = "";

    if(productList.length === 0){

      productsContainer.innerHTML = 
       ` <div class="col-12 text-center">

          <h4>No Products Found 😒</h4>

        </div>`

        return;
     
    }
    productList.forEach(product =>{
    productsContainer.innerHTML += `

        <div class="col col-lg-3 col-md-6 col-sm-12">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title name" >${product.productName}</h5>
                        <p class="card-text price" >${product.price}</p>
                        <p class="card-text stock" >${product.inStock ? "Instock" : "Out of Stock"}</p>
                        <button class="btn btn-primary add-to-cart" data-id=${product.id}>Add to Cart</button>
                    </div>
                </div>
            </div>

    `
})}

const priceFilter = document.getElementById("priceFilter");
priceFilter.addEventListener("change", updateProducts)

const stockFilter = document.getElementById("stockFilter");
stockFilter.addEventListener("change", updateProducts)


const categories = products.map(product => product.category);
const uniqueCategories = [...new Set(categories)]
const categoryFilter = document.getElementById("categoryFilter");
categoryFilter.innerHTML += `<option value="all">All Categories</option>`
uniqueCategories.forEach(cat => {
  categoryFilter.innerHTML += 
    `<option value="${cat}">${cat}</option>`;
})

categoryFilter.addEventListener("change", updateProducts)


// const sortedProducts = [...products];

// sortedProducts.sort((a,b) =>{

//   return a.price - b.price

// })

// displayProducts();

function updateProducts(){

  let updatedProducts = [...products];
  let searchText = searchInput.value.toLowerCase();

  updatedProducts = updatedProducts.filter(product =>{

      return product.productName
              .toLowerCase()
              .includes(searchText);

    });

  updatedProducts = updatedProducts.filter(product =>{
    if(categoryFilter.value === "all"){
      return true;
    }
    
    return product.category === categoryFilter.value

  });
  // const sortedProducts = [...products]

  updatedProducts = updatedProducts.filter(product =>{

    if(stockFilter.value === "inStock"){
      return product.inStock
    }else if(stockFilter.value === "outOfStock"){
      return !product.inStock
    }else{
      return true;
    }

  });


  if(priceFilter.value === "asc"){

    updatedProducts.sort((a,b) => (a.price - b.price))

  }else if(priceFilter.value === "dsc"){

    updatedProducts.sort((a,b) => (b.price - a.price))
  }

  displayProducts(updatedProducts);
}

displayProducts(products);

