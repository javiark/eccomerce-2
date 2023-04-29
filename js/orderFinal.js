

const badgeHTMLbuy=document.getElementById("cart-count");
const productsOrder = JSON.parse(localStorage.getItem("products"))
// console.log(productsOrder)
const productsUser = JSON.parse(localStorage.getItem("users"))
const orderUser = JSON.parse(localStorage.getItem("currentUser"))


// console.log(productsUser)
const productOrder = JSON.parse(localStorage.getItem("order"))
// const productOrderFin = JSON.parse(localStorage.getItem("orderFinal"))

const productFormBuy=document.getElementById("add-product");
const submitBtn = document.getElementById("submit-btn");
const total = document.getElementById("totalPrice")

console.log(productsOrder)






// console.log(orderUser)
// console.log(productOrder)

// const mailUser = [orderUser.email]
// const priceBuy = [productOrder.price]
// console.log(priceBuy)



//-----------------------OBTENER ID DE USUARIO---------------------
const usuarioID1 = productsUser.findIndex(id1=>id1.email === orderUser.email)
console.log(usuarioID1)





//---------------------RECORRER TODO EL ARRAY DE PRODUCTOS-------------------------//

let orderArray = [];
let cart = []

console.log(productsOrder)


productsOrder.forEach((prod,id)=>{
    console.log(id)


    let quantity =parseInt(1)
    console.log(quantity)
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
    console.log(orderArray)    
});
// productOrderFinal.push(quantity)



//---------------------AGREGAR PRODUCTO COMPRADO-------------------------//

function addToOrder(index){
    
    // console.log(index)
    // let item= productsOrder.find((prod)=> (prod.index) ==index)


    // console.log (item)


    let orderBuy =orderArray[index]
    // console.log(order1)
    console.log(cart)
    cart.push(orderBuy)
    localStorage.setItem("order", JSON.stringify(cart))
}

//Tener la posibilidad de que cuando apriete el boton comprar se añada el elemento array dentro de order.products
    //antes de hacer un push 
    //Deberia checkear con un find o findIndex deberia chequear si el producto ya se encuentra
    //Si se encuentra incremento su cantidad++
    //Sino hago un push de ese elemento.
    //Incrementar el total
    //Volver a guardar en el sessionStorage. (  Con SesionStorage se borra cada vez que reinicio la pagina)


// productOrder.forEach((prod,index)=>{

//     const nuevaOrden={
//         nameOrder:prod.name,
//         priceOrder:prod.price,
//         quiantity:1,  
//         imageOrder:prod.image, 
//         descriptionOrder:prod.description,
//     }
//     productOrderFinal.push(nuevaOrden)
// // console.log(nuevaOrden)
//     cart.push(nuevaOrden)
// // console.log(cartFinal)    

// });

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
    cart
}
// console.log(ordernFinal)
// localStorage.setItem("orderFinal", JSON.stringify(ordernFinal))









//----------------ACTUALIZAR CANTIDAD EN CARRITOS DE COMPRA--------------
// console.log(productOrder)
function actualizarBadge(){

    let count=0;
    productOrder.forEach(productOrder => {
        count += parseInt(productOrder.quantity)
    })
    badgeHTMLbuy.innerText=count;
    console.log(count)


}
actualizarBadge()



//----------------ACTUALIZAR PRECIO--------------

let valorTotal =productOrder.reduce((acc,prod) => acc + prod.quantity * prod.priceOrder,0 )

total.innerHTML = `$ ${valorTotal}`
console.log(valorTotal)






//----------------ELIMINAR PRODUCTO--------------

// function deleteProductBuy(indice) {
//             productOrder.splice(indice, 1);
//             localStorage.setItem("orderFinal", JSON.stringify(orderFinal))
//             showAlert(`Elemento borrado correctamente`, 'warning' )
//             renderizarTablaOrdenes(); 
//     }


