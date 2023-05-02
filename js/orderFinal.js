const tableBodyOrder = document.getElementById('table-body-order');
const products = [];
let count=0;
badgeHTMLbuy=document.getElementById("cart-count");

let productsOrder = JSON.parse(localStorage.getItem("products"))
// console.log(productsOrder)
let productsUser = JSON.parse(localStorage.getItem("users"))
let orderUser = JSON.parse(localStorage.getItem("currentUser"))

let orderFinal = JSON.parse(localStorage.getItem("orderArrayFinal"))
console.log(orderFinal)


// console.log(productsUser)
let productOrder = JSON.parse(sessionStorage.getItem("order"))
// const productOrderFin = JSON.parse(localStorage.getItem("orderFinal"))

const productFormBuy=document.getElementById("add-product");
const submitBtn = document.getElementById("submit-btn");
const total = document.getElementById("totalPrice")

// console.log(productsOrder)
// console.log(Object.values(productOrder))


// let productsOrderBuy = JSON.parse(localStorage.getItem("order"));

//---------------------RECORRER TODO EL ARRAY DE PRODUCTOS-------------------------//

let orderArray = [];
let cart = []


// console.log(orderArray)
// console.log(productOrder)



productsOrder.forEach((prod,id)=>{
    // console.log(id)


    let quantity =parseInt(1)
    // console.log(quantity)
    let  productID = id
    let nuevaOrden={
        productID,
        quantity,
        nameOrder:prod.name,
        priceOrder:prod.price,
        imageOrder:prod.image, 
        descriptionOrder:prod.description,
    }
    orderArray.push(nuevaOrden)
    localStorage.setItem("orderArrayFinal", JSON.stringify(orderArray))

});
console.log(orderArray)   
// productOrderFinal.push(quantity)

let userName=orderUser.fullName
let userOrder=orderUser.email
let totalOrder=`$$`
let createdAt = new Date()
let ordernFinal={
    // usuarioID1,
    userName,
    userOrder,
    totalOrder,
    createdAt,
    orderArray
}
// console.log(ordernFinal)
// localStorage.setItem("orderFinal", JSON.stringify(ordernFinal))


//----------------PINTAR TABLA--------------

// actualizarBadge()

function renderizarTablaOrdenes(){

    tableBodyOrder.innerHTML = '';
    if(productOrder.length===0){
        tableBodyOrder.innerHTML="<p class='disabled'>NO SE ENCONTRARON PRODUCTOS</p>"
        return
    }
    
    productOrder.forEach((prod, index)=>{

        tableBodyOrder.innerHTML += `<tr class="order">
        <td class="order__img-cell"><img class="product__img" src="${prod.imageOrder}" alt="${prod.nameOrder}"></td>
        <td class="order__name" onclick="editName(${index}")>${prod.nameOrder}</td>
        <td class="order__desc">${prod.descriptionOrder}</td>
        <td class="order__quantity" ><div class="boton-container"><div class="boton-container__boton-div"><button class="boton-container__boton-order">-</button> ${prod.quantity} <button class="boton-container__boton-order">+</button></div></div></td>
        <td class="order__price">$ ${prod.priceOrder}</td>
        <td class="order__price">$ ${prod.priceOrder * prod.quantity }</td>
        <td class="order__actions">
            <button class="product__action-btnDetail" onclick="deleteProductBuy(${index})">
                <i class="fa-solid fa-trash"></i>
            </button> 
        </td>
    </tr>`


    })
    }



    renderizarTablaOrdenes()

//---------------------LIMPIAR TABLA SI NO HAY USUARIO-------------------------//
// let orderUser1 = JSON.parse(localStorage.getItem("currentUser"))


    function cleantable(){

        if (orderUser) {
                console.log("hay usuario")
            }else{
                tableBodyOrder.innerHTML = '';
                productOrder= [];
                sessionStorage.setItem("order", JSON.stringify(products))
                actualizarBadge();
            }
    }

cleantable()


// let orderFinal = JSON.parse(localStorage.getItem("orderArrayFinal"))

//----------------ACTUALIZAR CANTIDAD EN CARRITOS DE COMPRA--------------


productOrder.forEach(productOrder => {
    count += parseInt(productOrder.quantity)
})
console.log(count)

badgeHTMLbuy.innerText=count;



//---------------------AGREGAR PRODUCTO COMPRADO-------------------------//



// console.log(products)


function addToOrder(index){

    let count1 = 0;
    console.log(index)
    let orderBuy =orderFinal[index]
    console.log(orderBuy)
    console.log(index)
    const existe = products.some(prod => prod.productID===index)
    // console.log(existe)
    
    if(existe){
        const prod = products.map(prod =>{
            if(prod.productID===index){
                prod.quantity++
            }
        })
    }else{
    products.push(orderBuy)
    // console.log(products)
    let arrayProducts = Object.values(products)



    }
    products.forEach(products => {
    count1 += parseInt(products.quantity)
    console.log(count1)
    })


 

    badgeHTMLbuy.innerText=count1;


    // console.log(orderBuy)
    console.log(products)
    sessionStorage.setItem("order", JSON.stringify(products))
    // console.log(index)

}








//-----------------------OBTENER ID DE USUARIO---------------------
const usuarioID1 = productsUser.findIndex(id1=>id1.email === orderUser.email)
// console.log(usuarioID1)









//----------------ACTUALIZAR PRECIO--------------

let valorTotal =productOrder.reduce((acc,prod) => acc + prod.quantity * prod.priceOrder,0 )

total.innerHTML = `$ ${valorTotal}`
console.log(valorTotal)





//----------------ELIMINAR PRODUCTO--------------

console.log(productOrder)

function deleteProductBuy(indice){
    console.log("funciona")
    productOrder.splice(indice, 1);
    sessionStorage.setItem("order",JSON.stringify(productOrder));
    // localStorage.setItem("products",JSON.stringify(products));
    renderizarTablaOrdenes()
}

// deleteProductBuy(1)
// console.log(productOrder)


// console.log(products)

// function deleteProductBuy(i){
//     console.log("funciona boton")
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].productID === i) {
//             products.splice(i, 1);
//         localStorage.setItem("order", JSON.stringify(products))
//         // renderizarTablaOrdenes();
//         break;
//         }
//     }
// }

// deleteProductBuy(1)
// console.log(products)

// deleteProductBuy(2)
// console.log(productOrder)

