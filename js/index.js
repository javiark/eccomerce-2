{/* <article class="card">
<div class="card__header">
    <img src="/assets/images/imagen1.webp" alt="Product Image" class="card__img">
</div>
<div class="card__body">
    <div class="card__title">
        BOX ABASCAY - NUEVA EDICIÓN
    </div>
    <div class="card__description">
        
            <p class="card__texto">1 Halloumi (300 g aprox)</p> 
            <p class="card__texto">1 Orégano (300 g aprox)</p> 
            <p class="card__texto">1 Gouda (300 g aprox)</p> 
            <p class="card__texto">1 Sardo (300 g aprox)</p> 
            <p class="card__texto">1 Sbrinz (300 g aprox) </p> 
            <p class="card__texto">1 Queso Tybo (300 g aprox)</p>
       
    </div>
    <div class="card__info">
        <div class="card__date">
        12/01/2023
        </div>
        <div class="card__price">
        $9.200,00
        </div>
    </div>
</div>
<div class="card__footerCard">
    <a class="card__btn-buy" href="#">
        Comprar
    </a>
    <div class="card__btn-container">
        <a class="card__btn" href="#">
            Detalle
        </a>
    </div>
</div>
</article>    */}

// 
const user = JSON.parse(localStorage.getItem("currentUser"))

const cardContainer=document.querySelector("#card-container");

const productsLS = JSON.parse(localStorage.getItem("products")) || [];

function renderizarProductos(products){

    cardContainer.innerHTML=``;

    products.forEach((product, index)=>{ //index la posicion

        const card= document.createElement("article");
        card.classList.add("card")

        card.innerHTML=`<div class="card__header">
        <img src="${product.image}" alt="${product.name}" class="card__img">
    </div>
    <div class="card__body">
        <div class="card__title">
        ${product.name}
        </div>
        <div class="card__description">
        ${product.description}
           
        </div>
        <div class="card__info">
            <div class="card__date">
            12/01/2023
            </div>
            <div class="card__price">
            $ ${product.price}
            </div>
        </div>
    </div>
    <div class="card__footerCard">
        <button class="card__btn-buy" href="#" onclick="addToOrder(${index}" ${user ? "": "disabled"}) >
            Comprar
        </button>
        <div class="card__btn-container">
            <a class="card__btn" href="/pages/product-detail/product-detail.html?id=${index}">
                Ver mas
            </a>
        </div>
    </div>`
    cardContainer.appendChild(card);
    })

}
renderizarProductos(productsLS);