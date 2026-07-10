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

const productsContainer = document.querySelector(".productsContainer")

const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("input", () =>{

    let searchText = searchInput.value;

    const filteredProducts = products.filter(product =>{


      let stext = searchText.toLowerCase();

      return product.productName
              .toLowerCase()
              .includes(stext);


    })
    console.log(filteredProducts);

    
    displayProducts(filteredProducts);
    
})


function displayProducts(productList){
    productsContainer.innerHTML = "";
    productList.forEach(product =>{
    productsContainer.innerHTML += `

        <div class="col col-lg-3 col-md-6 col-sm-12">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title name" >${product.productName}</h5>
                        <p class="card-text price" >${product.price}</p>
                        <p class="card-text stock" >${product.inStock ? "Instock" : "Out of Stock"}</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>

    `
})}

const priceFilter = document.getElementById("priceFilter");

priceFilter.addEventListener("change", () =>{

  const sortedProducts = [...products]

  if(priceFilter.value == "asc"){

    sortedProducts.sort((a,b) => (a.price - b.price))

  }else{

    sortedProducts.sort((a,b) => (b.price - a.price))
  }

  displayProducts(sortedProducts);

})

const stockFilter = document.getElementById("stockFilter");

stockFilter.addEventListener("change", () =>{

  const filteredProducts = products.filter(product => {

    if(stockFilter.value === "inStock"){
      return product.inStock
    }else if(stockFilter.value === "outOfStock"){
      return !product.inStock
    }else{
      return true;
    }
  })
   displayProducts(filteredProducts)
})


const categories = products.map(product => product.category);
const uniqueCategories = [...new Set(categories)]
const categoryFilter = document.getElementById("categoryFilter");
categoryFilter.innerHTML += `<option value="all">All Categories</option>`
uniqueCategories.forEach(cat => {
  categoryFilter.innerHTML += 
    `<option value="${cat}">${cat}</option>`;
})

categoryFilter.addEventListener("change", () => {

  // if(categoryFilter.value === "all"){
  //   return products
  // }

  // const seletedCategory = products.filter(product => product.category === categoryFilter.value)

  const selectedCategory = products.filter(product =>{
    if(categoryFilter.value === "all"){
      return true;
    }
    
    return product.category === categoryFilter.value

  })

  displayProducts(selectedCategory);
  
})


// const sortedProducts = [...products];

// sortedProducts.sort((a,b) =>{

//   return a.price - b.price

// })

// displayProducts();
displayProducts(products);

function updateProducts(){

  let updatedProducts = [...products];

}