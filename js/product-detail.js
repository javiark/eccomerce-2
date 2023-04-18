const params = window.location.search;

console.log(params)

const index = params.split("id=")[1].split("&")[0];

//obtener id de url. Metodo recomendado para obtener queryParams es usando URLSearchParams

const paramsUrl = new URLSearchParams(params);

const paramsEntries = Object.fromEntries(paramsUrl)

console.log(paramsEntries)

const indice= paramsEntries.id;

const products = JSON.parse(localStorage.getItem("products"));

const product = products[indice];

// document.body.innerHTML = `<p>${JSON.stringify(product)}</p>`
//     <img src = ${product.image}>`

const cardContainer=document.querySelector("#card-detail");

function renderizarDetail(){
cardContainer.innerHTML = ` 

<main class="mainDetail">
<section class="section-cards-detail">
    <div class="cards-container-detail" id="card-container">
  
        <article class="card">
            <div class="card__header">
                <img src=${product.image} alt=${product.name} class="card__img">
            </div>
            <div class="card__body">
                <div class="card__title">
                <p>${product.name}</p>
                </div>
                <div class="card__description">
                    <p class="card__texto">${product.detail}</p> 
                    
                </div>
                <div class="card__info">
                    <div class="card__date">
                    12/01/2023
                    </div>
                    <div class="card__price">
                    $ ${JSON.stringify(product.price)}
                    </div>
                </div>
            </div>
            <div class="card__footerCardDetail">
                <a class="card__btn-buy" href="#">
                    Comprar
                </a>

            </div>
        </article> 
        </main>
    </div>
</section>

`}

renderizarDetail()
