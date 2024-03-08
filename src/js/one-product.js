// Get the query string from the URL
const queryString = window.location.search;

// Create a URLSearchParams object
const urlParams = new URLSearchParams(queryString);

// Get the value of the 'id' parameter from the URL
const productId = urlParams.get('id');


const url = `http://localhost:8080/api/v1/product/${productId}`;

const id = document.getElementById("id");
const pname = document.getElementById("name");
const description = document.getElementById("description");
const price = document.getElementById("price");
const discountedPrice = document.getElementById("discountedPrice");
const image = document.getElementById("image");
const category = document.getElementById("category");

fetch(url)
    .then(response => response.json())
    .then(data => {
        id.innerHTML = data.id;
        pname.innerHTML = data.name;
        price.innerHTML = "MRP Rs. "+data.price;
        //let discountedPrice = 
        discountedPrice.innerHTML = "Offer Price Rs. "+data.discountedPrice;
        description.innerHTML = data.description;
        image.src = data.images[0];
    })

