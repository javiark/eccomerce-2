const params = window.location.search;

console.log(params)

const index = params.split("id=")[1].split("&")[0];

//obtener id de url. Metodo recomendado para obtener queryParams es usando URLSearchParams

const paramsUrl = new URLSearchParams(params);

const paramsEntries = Object.fromEntries(paramsUrl)

console.log(paramsEntries)

const indice= paramsEntries.id;

const products1 = JSON.parse(localStorage.getItem("products"));

const product = products1[indice];

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
            <div class="containerDetail__containerAdd"><div class="containerDetail__containerBtn1"><button class="containerDetail__containerBtn" onclick=" restcount(indice) "> -</button><div class="containerDetail__containerNumber" id="countNumber"> 0 </div><button  class="containerDetail__containerBtn"> +</button></div></div>
            <button class="containerDetail__btn-add" onclick="restcount(${index})" id=${index}>
                Añadir a carrito
            </button>
            <button class="containerDetail__btn-buy" onclick="addToOrder1(${index}) " id=${index}>Comprar Ahora</button>
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


//---------------------AGREGAR PRODUCTO COMPRADO-------------------------//
let orderFinal1 = JSON.parse(localStorage.getItem("orderArrayFinal"))
let badgeHTMLbuy2=document.getElementById("cart-count");
let badgeHTMLbuy3=document.getElementById("countNumber");
let productOrder2 = JSON.parse(sessionStorage.getItem("order"))

function restcount(index)

{
    console.log(index)

    let countNumber=0;
    // console.log(countNumber)
    // console.log(productOrder2)
    productOrder2.forEach((idx)=>{
        console.log(idx.quantity)
        // console.log(idx.productID)

        if(idx.quantity>0) {
            idx.quantity--;
            console.log(idx.quantity)
        }   
    })
    // productOrder2.forEach(productOrder2 => {
    //     countNumber += parseInt(productOrder2.quantity)
    // })
    // console.log(countNumber)

    badgeHTMLbuy.innerText=countNumber;

    // productOrder.forEach((idx)=>{
    //     if(index===idx.productID & idx.quantity>0) {
    //         idx.quantity--;

    //     }   
    // })

}
function addToOrder1(index){

    let count4 = 0;
    let orderBuy1 =orderFinal1[index]
    const existe = products.some(prod => prod.productID===index)

    if(existe){
        const prod = products.map(prod =>{
            if(prod.productID===index){
                prod.quantity++
            }
        })
    }else{
    products.push(orderBuy1)
    let arrayProducts = Object.values(products)

    }
    products.forEach(products => {
    count4 += parseInt(products.quantity)
    })

    badgeHTMLbuy2.innerText=count4;
    sessionStorage.setItem("order", JSON.stringify(products))
}


