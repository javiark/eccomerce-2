const user = JSON.parse(localStorage.getItem("currentUser"))
// console.log(user)

const boton = document.getElementById("boton1")

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
            ${fecha}
            </div>
            <div class="card__price">
            $ ${product.price}
            </div>
        </div>
    </div>
    <div class="card__footerCard">
        <button class="card__btn-buy1"  id="boton1" onclick="addToOrder(${index})" ${user ? "":'disabled'}>
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