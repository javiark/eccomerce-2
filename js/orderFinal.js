

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


console.log(orderArray)
console.log(productOrder)



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
const products = [];

console.log(products)


function addToOrder(index){

    console.log(index)
    let orderBuy =orderArray[index]
    // console.log(orderBuy)
    const existe = products.some(prod => prod.productID===index)
    console.log(existe)
    
    if(existe){
        const prod = products.map(prod =>{
            if(prod.productID===index){
                prod.quantity++
            }
        })
    }else{
    products.push(orderBuy)
    console.log(products)
    }

    // console.log(orderBuy)
    localStorage.setItem("order", JSON.stringify(products))
    console.log(index)
}



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
console.log(ordernFinal)
// localStorage.setItem("orderFinal", JSON.stringify(ordernFinal))









//----------------ACTUALIZAR CANTIDAD EN CARRITOS DE COMPRA--------------
console.log(productOrder)
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
console.log(productOrder)
function deleteProductBuy(index) {
    console.log(index)
            console.log("boton funciona")
            productOrder.splice(index, 1);
            sessionStorage.setItem("order", JSON.stringify(products))
            showAlert(`Elemento borrado correctamente`, 'warning' )
            renderizarTablaOrdenes(); 
    }

    const cities = ["chicago", "valencia","madrid"]
    console.log(cities.splice(0,1))


