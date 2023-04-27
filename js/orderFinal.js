const badgeHTMLbuy=document.getElementById("cart-count");
const productsOrder = JSON.parse(localStorage.getItem("products"))
// console.log(productsOrder)
const productsUser = JSON.parse(localStorage.getItem("users"))
const orderUser = JSON.parse(localStorage.getItem("currentUser"))
// console.log(productsUser)
const productOrder = JSON.parse(localStorage.getItem("order"))
const tableBodyOrder = document.querySelector('#table-body-order');
const productFormBuy=document.getElementById("add-product");
const submitBtn = document.getElementById("submit-btn");

console.log(orderUser)
console.log(productOrder)

const mailUser = [orderUser.email]
const priceBuy = [productOrder.price]

const cart = 
    [   
]


function actualizarBadge(){
    let count=0;
}







//-----------------------OBTENER ID DE USUARIO---------------------
const usuarioID1 = productsUser.findIndex(id1=>id1.email === orderUser.email)
console.log(usuarioID1)
// userID.push(`userID:${usuarioID1}`)
// console.log(userID)


// console.log(orderUser.fullName)
// console.log(productsOrder)
// console.log(cart)
// console.log(mailUser)



let productOrderFinal = [];




function addToOrder(index){
    // console.log(index)
    let item= productsOrder.find((prod)=> (prod.index) ==index)


    // console.log (item)

    let order1 =productsOrder[index]
    // console.log(order1)
    cart.push(order1)
    console.log(cart)
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

});
console.log(productOrderFinal)


let userID=orderUser.fullName
let userOrder=orderUser.email
let totalOrder=`$$`
let createdAt = new Date()

let order1 ={
    userID,
    userOrder,
    totalOrder,
    createdAt,
    productOrderFinal
    
    // cart,
    // userMail,
    // userPrice
}
console.log(order1)




productOrder.forEach((prod, index)=>{
    // console.log(prod)
    // const { image, name, description, price } = prod;
    // console.log(name)
    tableBodyOrder.innerHTML += `<tr class="order">
    <td class="order__img-cell"><img class="product__img" src="${prod.image}" alt="${prod.name}"></td>
    <td class="order__name" onclick="editName(${index}")>${prod.name}</td>
    <td class="order__desc">${prod.description}</td>
    <td class="order__desc">CANTIDAD</td>
    <td class="order__price">$ ${prod.price}</td>
    <td class="order__price">$ SUBTOTAL</td>
    <td class="order__actions">
        <button class="product__action-btnDetail" onclick="deleteProduct(${index})">
            <i class="fa-solid fa-trash"></i>
        </button>
        <button class="product__action-btn product__btn-edit"  onclick="editProduct(${index})">
            <i class="fa-solid fa-pencil " ></i>
        </button>

    
    </td>
</tr>`
// tableBodyOrder.innerHTML += tableBodyOrder;
// console.log(prod.name)
})



function actualizarBadge(){
    let order =[];
    console.log(order.productsOrder)
    let count=0;
    order.forEach(prod => {
        count +=prod.cantidad
    })
    badgeHTMLbuy.innerText=count;
    console.log(count)
}
