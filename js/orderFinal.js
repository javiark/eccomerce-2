

const badgeHTMLbuy=document.getElementById("cart-count");
const productsOrder = JSON.parse(localStorage.getItem("products"))
// console.log(productsOrder)
const productsUser = JSON.parse(localStorage.getItem("users"))
const orderUser = JSON.parse(localStorage.getItem("currentUser"))


// console.log(productsUser)
const productOrder = JSON.parse(localStorage.getItem("order"))
const productOrderFin = JSON.parse(localStorage.getItem("orderFinal"))

const productFormBuy=document.getElementById("add-product");
const submitBtn = document.getElementById("submit-btn");




// console.log(orderUser)
// console.log(productOrder)

const mailUser = [orderUser.email]
const priceBuy = [productOrder.price]



//-----------------------OBTENER ID DE USUARIO---------------------
const usuarioID1 = productsUser.findIndex(id1=>id1.email === orderUser.email)
// console.log(usuarioID1)

// console.log(userID)
// console.log(orderUser.fullName)
// console.log(productsOrder)
// console.log(cart)
// console.log(mailUser)

//-----------------------GENERAR ARRAY DE PRODUCTOS---------------------

let productOrderFinal = [];
const cart = []
const cartFinal = []

function addToOrder(index){
    // console.log(index)
    let item= productsOrder.find((prod)=> (prod.index) ==index)


    // console.log (item)

    let order1 =productsOrder[index]
    // console.log(order1)
    cart.push(order1)
    // console.log(cart)
    // cart.push(mailUser)
    localStorage.setItem("order", JSON.stringify(cart))
}


productOrder.forEach((prod,index)=>{
    const nuevaOrden={
        nameOrder:prod.name,
        priceOrder:prod.price,
        quiantity:1     
    }
    productOrderFinal.push(nuevaOrden)
    let userName=orderUser.fullName
    let userOrder=orderUser.email
    let totalOrder=`$$`
    let createdAt = new Date()

    let orderFinal ={
        usuarioID1,
        userName,
        userOrder,
        totalOrder,
        createdAt,
        productOrderFinal
    }

console.log(orderFinal)
cartFinal.push(orderFinal)
localStorage.setItem("orderFinal", JSON.stringify(cartFinal))


    

});
const name111=productOrderFin.name
console.log(productOrderFin)





//----------------ACTUALIZAR CANTIDAD EN CARRITOS DE COMPRA--------------
function actualizarBadge(){

    let count=0;
    productOrderFinal.forEach( productOrderFinal => {
        count += productOrderFinal.quiantity
    })
    badgeHTMLbuy.innerText=count;
    console.log(count)
}
actualizarBadge()


console.log(cartFinal.userName)





//----------------ELIMINAR PRODUCTO--------------

function deleteProductBuy(indice) {
            productOrder.splice(indice, 1);
            localStorage.setItem("order", JSON.stringify(cart))
            showAlert(`Elemento borrado correctamente`, 'warning' )
            renderizarTablaOrdenes(); 
    }


