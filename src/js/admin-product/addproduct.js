// const addImageButton = document.getElementById('addImageButton');
// const imageInputsContainer = document.getElementById('imageInputsContainer');

// addImageButton.addEventListener('click', function() {
//   const newInput = document.createElement('input');
//   newInput.type = 'text';
//   newInput.className = 'form-control productImage';
//   newInput.name = 'images';
//   newInput.placeholder = 'Enter image link';

//   const newInputGroup = document.createElement('div');
//   newInputGroup.classList.add('mb-4');
//   newInputGroup.appendChild(newInput);

//   imageInputsContainer.appendChild(newInputGroup);
// });




const addProduct = document.getElementById('addProduct');

addProduct.addEventListener("submit", async (event) => {
    event.preventDefault();

    const selectedCategoryId = document.getElementById('categories').value;
    const BASE_URL = 'http://localhost:8080/api/v1/product';
    const producturl = `${BASE_URL}/category/${selectedCategoryId}/add`;

    const productData = {
        name: document.getElementById('name').value,
        description: document.getElementById('productDescription').value,
        details: document.getElementById('productDetail').value,
        price: parseFloat(document.getElementById('productPrice').value),
        discountedPrice: parseFloat(document.getElementById('discountPrice').value),
        images: [document.getElementById('productImage').value], // Assuming a single image link
        quantity: parseInt(document.getElementById('quantity').value)
    };

    console.log('URL for adding product:', producturl);

    let response = await fetch(producturl, {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });

    if (response.ok) {
        const result = await response.json();
        console.log(result);
    }
});

//console.log('URL for adding product:', producturl);


