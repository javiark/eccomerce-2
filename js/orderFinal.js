const tableBodyOrder = document.getElementById('table-body-order');
const products = [];
let count=0;
badgeHTMLbuy=document.getElementById("cart-count");

let productsOrder = JSON.parse(localStorage.getItem("products"))
let productsUser = JSON.parse(localStorage.getItem("users"))
let orderUser = JSON.parse(localStorage.getItem("currentUser"))
let orderFinal = JSON.parse(localStorage.getItem("orderArrayFinal"))
let productOrder = JSON.parse(sessionStorage.getItem("order"))


const productFormBuy=document.getElementById("add-product");
const submitBtn = document.getElementById("submit-btn");
const total = document.getElementById("totalPrice")


//---------------------RECORRER TODO EL ARRAY DE PRODUCTOS-------------------------//

let orderArray = [];
let cart = []

productsOrder.forEach((prod,id)=>{


    let quantity =parseInt(1)
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


//----------------PINTAR TABLA--------------

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

    function cleantable(){

        if (orderUser) {
                // console.log("hay usuario")
            }else{
                tableBodyOrder.innerHTML = '';
                productOrder= [];
                sessionStorage.setItem("order", JSON.stringify(products))
                actualizarBadge();
            }
    }

cleantable()


//----------------ACTUALIZAR CANTIDAD EN CARRITOS DE COMPRA--------------

productOrder.forEach(productOrder => {
    count += parseInt(productOrder.quantity)
})

badgeHTMLbuy.innerText=count;


//---------------------AGREGAR PRODUCTO COMPRADO-------------------------//

function addToOrder(index){

    let count1 = 0;
    let orderBuy =orderFinal[index]
    const existe = products.some(prod => prod.productID===index)

    if(existe){
        const prod = products.map(prod =>{
            if(prod.productID===index){
                prod.quantity++
            }
        })
    }else{
    products.push(orderBuy)
    let arrayProducts = Object.values(products)

    }
    products.forEach(products => {
    count1 += parseInt(products.quantity)
    })

    badgeHTMLbuy.innerText=count1;
    sessionStorage.setItem("order", JSON.stringify(products))
}


//-----------------------OBTENER ID DE USUARIO---------------------
const usuarioID1 = productsUser.findIndex(id1=>id1.email === orderUser.email)
// console.log(usuarioID1)




//----------------ACTUALIZAR PRECIO--------------

let valorTotal =productOrder.reduce((acc,prod) => acc + prod.quantity * prod.priceOrder,0 )
total.innerHTML = `$ ${valorTotal}`



//----------------ELIMINAR PRODUCTO--------------

function deleteProductBuy(indice){
    let count2=0;
    productOrder.splice(indice, 1);
    sessionStorage.setItem("order",JSON.stringify(productOrder));

    productOrder.forEach(productOrder => {
        count2 += parseInt(productOrder.quantity)
        })
        badgeHTMLbuy.innerText=count2;
    console.log(productOrder)
    renderizarTablaOrdenes()
}

