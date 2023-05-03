const tableBodyOrder1 = document.getElementById('table-body-order');
let productOrderDetail = JSON.parse(sessionStorage.getItem("order")) || [];
console.log(productOrderDetail)

const params = window.location.search;

// console.log(params)

const index = params.split("id=")[1].split("&")[0];

//obtener id de url. Metodo recomendado para obtener queryParams es usando URLSearchParams

const paramsUrl = new URLSearchParams(params);

const paramsEntries = Object.fromEntries(paramsUrl)

// console.log(paramsEntries)

const indice= paramsEntries.id;

const products1 = JSON.parse(localStorage.getItem("products"));

const product = products1[indice];
let orderFinal1 = JSON.parse(localStorage.getItem("orderArrayFinal"))
let badgeHTMLbuy2=document.getElementById("cart-count");

let productOrder2 = JSON.parse(sessionStorage.getItem("order")) || [];
// let product3=productOrder2[indice];
// console.log(product3)
// const product1 = products1[indice];

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
            <div class="containerDetail__containerAdd"><div class="containerDetail__containerBtn1"><button class="containerDetail__containerBtn" onclick=" restCount(indice) ">-</button><div class="containerDetail__containerNumber" id="countNumber"> 1</div><button  class="containerDetail__containerBtn" onclick=" addCount(indice) "> +</button></div></div>

            <a href="/pages/order/order.html" class="containerDetail__btn-buy" >  <button class="containerDetail__btn-buy">Comprar Ahora</button><a/>
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

let badgeHTMLbuy3=document.getElementById("countNumber");


    


//---------------------AGREGAR PRODUCTO COMPRADO-------------------------//

let productsDetail =[]


function restCount(index)
{
    let orderDetail1=[orderFinal1[index]]

    console.log(index)
    let countNumber=0;
    orderFinal1.forEach((idx)=>{
        let countNumb = idx.quantity
        if(idx.quantity>0) {
            idx.quantity--;        }   

        badgeHTMLbuy3.innerText=idx.quantity;
        badgeHTMLbuy2.innerText=idx.quantity;

    })

    console.log(orderDetail1)
    sessionStorage.setItem("order", JSON.stringify(orderDetail1))

}



function addCount(index)
{
    let orderDetail1=[orderFinal1[index]]

    console.log(index)
    let countNumber=1;
    orderFinal1.forEach((idx)=>{
        let countNumb = idx.quantity;
            idx.quantity++;

        badgeHTMLbuy3.innerText=idx.quantity;
        badgeHTMLbuy2.innerText=idx.quantity;

    })

    console.log(orderDetail1)
    sessionStorage.setItem("order", JSON.stringify(orderDetail1))



}







