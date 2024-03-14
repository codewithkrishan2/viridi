
const addProduct = document.getElementById('addToCart');
const productId = document.getElementById('id');
const url = `localhost:8080/api/v1/cart/add`
// Add new Product to the list  
// Get the JWT token from local storage
const token = localStorage.getItem('jwtToken');

// If the token exists, parse it to get the user ID
if (token) {
  const user = JSON.parse(atob(token.split('.')[1]));
  const userId = user.id;

  // Now you can use the userId to make the API request
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      productId: productId.value,
      userId: userId
    })
  });

  // Handle the response
  const data = await response.json();
  console.log(data);
}

   