const BASE_URL = ''


const url = "http://localhost:8080/api/v1/product/all";

const fetchData = async ()=>{

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error while fatching the data from the given url",error)
    }
};

//Function to render data in cards
const randerData = async ()=>{
    
    const cards = document.querySelector("#cards");
    const data = await fetchData();

    if(!data){
        console.log("No data found");
        return;
    }else{
        data.forEach( (product)=>{
            console.log(product);
            
            const col = document.createElement("div");
            col.classList.add("col");

            const card = document.createElement("a");
            card.classList.add('card', 'h-100', 'text-decoration-none');
            card.href = `src/pages/user/showOneProduct.html?id=${product.id}`;
            card.style.maxWidth = "20rem";

            const image = document.createElement('img');
            image.src = product.images[0];
            image.classList.add('card-img-top', 'img-fluid');
            image.alt = product.title;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');


            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = product.name;

            const category = document.createElement('p');
            category.classList.add('card-text');
            category.textContent = product.category.name;
            
            const discountedPrice  = document.createElement('div');
            discountedPrice.classList.add('card-title','text-success');
            discountedPrice.innerHTML = `Offer Price &#8377; ${product.discountedPrice}`;
            

            const cardPrice = document.createElement('p');
            cardPrice.classList.add('text-decoration-line-through' ,'text-danger');
            cardPrice.innerHTML = `MRP &#8377; ${product.price}`;
            
            discountedPrice.appendChild(cardPrice);


            cardBody.appendChild(cardTitle);
            cardBody.appendChild(category);
            cardBody.appendChild(discountedPrice);

            card.appendChild(image);
            card.appendChild(cardBody);

            col.appendChild(card);

            cards.appendChild(col);

        });
    }
};

randerData();