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

// const order1 = { 
//     userId: 1,// indice de usuario de nuestro array
//     products : [
//         {
//             productID: 18,   // momentaneamiente sera un indice de producto de nuestro array del localStorage
//             quantity: 1,
//             price: 24000,
//         },
//         {
//             productID: 8,   // momentaneamiente sera un indice de producto de nuestro array del localStorage
//             quantity: 2,
//             price: 3000,
//         }
//     ],
//    createdAt:new Date()
//    total: 323240

// }

// const newProduct = {
        
//     name: elements.name.value,
//     description: elements.description.value,
//     price: elements.price.valueAsNumber,
//     image: elements.image.value,
//     detail:elements.detail.value,
//     stock: elements.stock.checked,
// };
const mailUser = {mailOrder : orderUser.email}
// console.log(mailUser)
const cart = 
    [
    
]


console.log(orderUser.fullName)


// console.log(productsOrder)

function addToOrder(index){
    // console.log(index)
    let item= productsOrder.find((prod)=> (prod.index) ==index)


    // console.log (item)

    let order1 =productsOrder[index]
    // console.log(order1)
    cart.push(order1)
    console.log(cart)
    cart.push(mailUser)
    localStorage.setItem("order", JSON.stringify(cart))
}
console.log(productsUser)

productsUser.forEach((usuario, index) => {
    let nombreNN=`${usuario.email}`
    console.log(nombreNN)

    let mailUser=orderUser.email;
    console.log(mailUser)

    
});



console.log(orderUser)
let nombreUser=orderUser.email;
console.log(nombreUser)
console.log(productsUser)
let nombreUserOrder=productsUser.fullName;
console.log(nombreUserOrder)

let res1=productsUser.findIndex(findUser)

function findUser(value){
    return value ===orderUser
}

// console.log(res1)

// const numbers = [1,2,3,4,5]
// const res = numbers.findIndex(findThree);
// function findThree(value){
//     return value ===3
// }

// console.log(res)

// function findUser(index){
//     let user= productsUser.find((us)=> (us.index) ==index)
//     console.log(user)
// }
console.log(orderUser)

console.log(productsUser)
let userId = productsUser.findIndex((p)=>p===orderUser)
console.log (userId)





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
// });

// selecciono todos los botones
// const addShoppingBtn = document.querySelectorAll(".card__btn-buy1")
// console.log(addShoppingBtn)

// addShoppingBtn.forEach(addCartButton =>{
//     addCartButton.addEventListener("click", addToCart)
// })


// addToOrder.forEach((index)=>
// {
//     console.log(index)
// })

// function addToCart(evt){
//     const buttonBuy1 = evt.target;
//     // console.log(buttonBuy1)
//     const item = buttonBuy1.closest(".card__btn-buy1")
//     console.log(item)
// }

// productsOrder.forEach((producto)=>
// {console.log(producto)

// })





// console.log(productsOrder)


// let orderProducts = [];
// console.log(orderProducts)

// function pintarID(arrayPintarID){
//     arrayPintarID.forEach((prodID, indice)=>{
//     // console.log(`${indice+1}`)
//     idObj=indice+1
//     // console.log("console"+newObj)
// // console.log(idObj)
//     //id=indice+1
//    // console.log(id)
//     // id.push 
//     const arrayObjeto = [ {id:idObj}]
//     // console.log(arrayObjeto)
//     orderProducts.push(arrayObjeto)

// })
// }
// pintarID(productsOrder)
// // console.log(orderProducts)





























// let cart = [];

// productsOrder.forEach((producto)=>
// {console.log(producto)

// })





// const agregarCarrito = (prodName) => {
//     const item = productsOrder.find((prod)=>prod.name===prodName)
//     cart.push(item)
// }



// function actualizarBadge(){
//     let order =[];
//     // badgeHTML.innerText=order.products.length
//     // badgeHTML.innerText=order.products.reduce((acc,producto)=> {
//     //     //con reduce itera. Recibe dos productos, en cuanto empieza mi acumulador. acc empieza en 0. acc es el acumulado y el valor a iterar es el producto
//     //     acc = acc + producto.cantidad;
//     //     return acc
//     // },0)
//     console.log(order.productsOrder)
//     let count=0;
//     order.forEach(prod => {
//         count +=prod.cantidad
//     })
//     badgeHTMLbuy.innerText=count;
//     console.log(count)
// }





// //const { image, name, description, price  }


// // function actualizarBadge(){
// //     // badgeHTML.innerText=order.products.length
// //     // badgeHTML.innerText=order.products.reduce((acc,producto)=> {
// //     //     //con reduce itera. Recibe dos productos, en cuanto empieza mi acumulador. acc empieza en 0. acc es el acumulado y el valor a iterar es el producto
// //     //     acc = acc + producto.cantidad;
// //     //     return acc
// //     // },0)
// //     let count=0;
// //     order.product.forEach(prod => {
// //         count +=prod.cantidad
// //     })
// //     badgeHTML.innerText=count

// // }

// // actualizarBadge()


// //Tener la posibilidad de que cuando apriete el boton comprar se añada el elemento array dentro de order.products
//     //antes de hacer un push 
//     //Deberia checkear con un find o findIndex deberia chequear si el producto ya se encuentra
//     //Si se encuentra incremento su cantidad++
//     //Sino hago un push de ese elemento.
//     //Incrementar el total
//     //Volver a guardar en el sessionStorage. (  Con SesionStorage se borra cada vez que reinicio la pagina)


// // hacer un badge en el carrito con un before o un after y se pone en una posicion absoluta. Sino poner un div y cargar la cantidad de elementos q fe comprando

// //? Eliminar elemento  (funcion)
//     //Pintamos en el boton de mi orden el index del array order.products y lo eliminamos con un Splice
//     //Guardar el precio del producto por la cantidad y restarselo al total.
//     //Actualizar el sessionStorage con el nuevo valor.

// //? Listar order 
//     //Pintar los elementos en una nueva pagina, tachicto para eliminarlos. Crear una tabla

