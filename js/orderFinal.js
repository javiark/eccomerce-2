const badgeHTMLbuy=document.getElementById("cart-count");
const productsOrder = JSON.parse(localStorage.getItem("products"))
// console.log(productsOrder)
const productsUser = JSON.parse(localStorage.getItem("users"))
// console.log(productsUser)

const tableBodyOrder = document.querySelector('#table-body-order');

const productFormBuy=document.getElementById("add-product");
const submitBtn = document.getElementById("submit-btn");


// selecciono todos los botones
// const addShoppingBtn = document.querySelectorAll(".card__btn-buy1")
// console.log(addShoppingBtn)

// addShoppingBtn.forEach(addCartButton =>{
//     addCartButton.addEventListener("click", addToCart)
// })


addToOrder.forEach((index)=>
{
    console.log(index)
})

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


let orderProducts = [];
// console.log(orderProducts)

function addToOrder(id){
    let productsOrderBuy = JSON.parse(localStorage.getItem("products"))
    console.log (productsOrderBuy)
    console.log(id)
    const item= productsOrder.find((prod)=> prod.id ==id)
    orderProducts.push (item)
    console.dir(orderProducts)
    // console.log(productsOrder)

}























// let cart = [];

// productsOrder.forEach((producto)=>
// {console.log(producto)

// })



// // productsOrder.forEach((prod, index)=>{
// //     // console.log(prod)
// //     // const { image, name, description, price } = prod;
// //     // console.log(name)
// //     tableBodyOrder.innerHTML += `<tr class="order">
// //     <td class="order__img-cell"><img class="product__img" src="${prod.image}" alt="${prod.name}"></td>
// //     <td class="order__name" onclick="editName(${index}")>${prod.name}</td>
// //     <td class="order__desc">${prod.description}</td>
// //     <td class="order__desc">CANTIDAD</td>
// //     <td class="order__price">$ ${prod.price}</td>
// //     <td class="order__price">$ SUBTOTAL</td>
// //     <td class="order__actions">
// //         <button class="product__action-btnDetail" onclick="deleteProduct(${index})">
// //             <i class="fa-solid fa-trash"></i>
// //         </button>
// //         <button class="product__action-btn product__btn-edit"  onclick="editProduct(${index})">
// //             <i class="fa-solid fa-pencil " ></i>
// //         </button>

    
// //     </td>
// // </tr>`
// // // tableBodyOrder.innerHTML += tableRow;
// // console.log(prod.name)


// // });

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

