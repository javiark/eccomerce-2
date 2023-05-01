const badgeHTMLbuy=document.getElementById("cart-count");
let productsOrder = JSON.parse(localStorage.getItem("products"))
// console.log(productsOrder)
let productsUser = JSON.parse(localStorage.getItem("users"))
let orderUser = JSON.parse(localStorage.getItem("currentUser"))


// console.log(productsUser)
let productOrder = JSON.parse(localStorage.getItem("order"))
// const productOrderFin = JSON.parse(localStorage.getItem("orderFinal"))

const productFormBuy=document.getElementById("add-product");
const submitBtn = document.getElementById("submit-btn");
const total = document.getElementById("totalPrice")

// console.log(productsOrder)
// console.log(Object.values(productOrder))




//---------------------AGREGAR PRODUCTO COMPRADO-------------------------//
const products = [];

// console.log(products)


function addToOrder(index){

    // console.log(index)
    let orderBuy =orderArray[index]
    // console.log(orderBuy)
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
    // console.log(arrayProducts)
    }

    // console.log(orderBuy)
    localStorage.setItem("order", JSON.stringify(products))
    // console.log(index)
}




//-----------------------OBTENER ID DE USUARIO---------------------
const usuarioID1 = productsUser.findIndex(id1=>id1.email === orderUser.email)
// console.log(usuarioID1)





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
    // console.log(orderArray)    
});
// productOrderFinal.push(quantity)






let userName=orderUser.fullName
let userOrder=orderUser.email
let totalOrder=`$$`
let createdAt = new Date()
let ordernFinal={
    usuarioID1,
    userName,
    userOrder,
    totalOrder,
    createdAt,
    orderArray
}
// console.log(ordernFinal)
// localStorage.setItem("orderFinal", JSON.stringify(ordernFinal))









//----------------ACTUALIZAR CANTIDAD EN CARRITOS DE COMPRA--------------

function actualizarBadge(){

    let count=0;
    productOrder.forEach(productOrder => {
        count += parseInt(productOrder.quantity)
    })
    badgeHTMLbuy.innerText=count;
    // console.log(count)


}
actualizarBadge()



//----------------ACTUALIZAR PRECIO--------------

let valorTotal =productOrder.reduce((acc,prod) => acc + prod.quantity * prod.priceOrder,0 )

total.innerHTML = `$ ${valorTotal}`
console.log(valorTotal)





//----------------ELIMINAR PRODUCTO--------------

console.log(productOrder)

function deleteProductBuy(indice){
    console.log("funciona")
    productOrder.splice(indice, 1);
    localStorage.setItem("order",JSON.stringify(productOrder));
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
