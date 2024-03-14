const addProduct = document.getElementById('addProduct');

const BASE_URL = 'http://localhost:8080/api/v1/product';

const url = BASE_URL+`category/${categoryId}/add`;


addProduct.addEventListener('click', async (event) => {
    event.preventDefault();
    let response = await fetch();
} );