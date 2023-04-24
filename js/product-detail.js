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

const cardContainer1=document.querySelector("#card-detail");

function renderizarDetail(){
cardContainer1.innerHTML = ` 
<main class="main1">
    <div class="mainDetail">
        <div class="containerDetail">
        <div class="containerDetail__imageContainer">
            <img src=${product.image} alt=${product.name} class="containerDetail__image">
        </div>

        <div class="containerDetail__description">
            <div class="containerDetail__container">
                <div class="card__title">
                    <p>${product.name}</p>
                </div>
                <div class="card__price">
                $ ${JSON.stringify(product.price)}
                </div>
                <div class="card__detail">
                    <p class="card__texto">${product.description}</p> 
                </div>
            </div>
            <button class="containerDetail__btn-add">
                Añadir a carrito
            </button>
            <button class="containerDetail__btn-buy">Comprar Ahora</button>
        </div>
        </div>

        <div class="containerDetail">
            <div class="containerDetail__descriptionLarge">
                <h1 class="containerDetail__title">DESCRIPCION</h1>
                    <div class="containerDetail__detail">${product.detail}</div>
            </div>
        </div>
    </div> 
</main>`

}

renderizarDetail()


// cardContainer.innerHTML =`
// {/* <main class="mainDetail">
// <section class="section-cards-detail">
//     <div class="cards-container-detail" id="card-container">
  
//         <article class="card">
//             <div class="card__header">
//                 <img src=${product.image} alt=${product.name} class="card__img">
//             </div>
//             <div class="card__body">
//                 <div class="card__title">
//                 <p>${product.name}</p>
//                 </div>
//                 <div class="card__description">
//                     <p class="card__texto">${product.detail}</p> 
                    
//                 </div>
//                 <div class="card__info">
//                     <div class="card__date">
//                     12/01/2023
//                     </div>
//                     <div class="card__price">
//                     $ ${JSON.stringify(product.price)}
//                     </div>
//                 </div>
//             </div>
//             <div class="card__footerCardDetail">
//                 <a class="card__btn-buy" href="#">
//                     Comprar
//                 </a>

//             </div>
//         </article> 
//         </main>
//     </div>
// </section>

// ` */}
