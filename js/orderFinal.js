const badgeHTMLbuy=document.getElementById("cart-count");
const productsOrder = JSON.parse(localStorage.getItem("products"))
// console.log(productsOrder)
const productsUser = JSON.parse(localStorage.getItem("users"))
// console.log(productsUser)

const tableBodyOrder = document.querySelector('#table-body-order');

const productFormBuy=document.getElementById("add-product");
const submitBtn = document.getElementById("submit-btn");



let cart = [];



// productsOrder.forEach((prod, index)=>{
//     // console.log(prod)
//     // const { image, name, description, price } = prod;
//     // console.log(name)
//     tableBodyOrder.innerHTML += `<tr class="order">
//     <td class="order__img-cell"><img class="product__img" src="${prod.image}" alt="${prod.name}"></td>
//     <td class="order__name" onclick="editName(${index}")>${prod.name}</td>
//     <td class="order__desc">${prod.description}</td>
//     <td class="order__desc">CANTIDAD</td>
//     <td class="order__price">$ ${prod.price}</td>
//     <td class="order__price">$ SUBTOTAL</td>
//     <td class="order__actions">
//         <button class="product__action-btnDetail" onclick="deleteProduct(${index})">
//             <i class="fa-solid fa-trash"></i>
//         </button>
//         <button class="product__action-btn product__btn-edit"  onclick="editProduct(${index})">
//             <i class="fa-solid fa-pencil " ></i>
//         </button>

    
//     </td>
// </tr>`
// // tableBodyOrder.innerHTML += tableRow;
// console.log(prod.name)


// });


function actualizarBadge(){
    let order =[];
    // badgeHTML.innerText=order.products.length
    // badgeHTML.innerText=order.products.reduce((acc,producto)=> {
    //     //con reduce itera. Recibe dos productos, en cuanto empieza mi acumulador. acc empieza en 0. acc es el acumulado y el valor a iterar es el producto
    //     acc = acc + producto.cantidad;
    //     return acc
    // },0)
    console.log(order.productsOrder)
    let count=0;
    order.forEach(prod => {
        count +=prod.cantidad
    })
    badgeHTMLbuy.innerText=count;
    console.log(count)
}

function addToOrder(index){
    // console.log(index)
    const item= productsOrder.find((prod)=> prod.index ===index)
    cart.push (item)
    // console.log(cart)
    // console.log(productsOrder)

}



//const { image, name, description, price  }


// function actualizarBadge(){
//     // badgeHTML.innerText=order.products.length
//     // badgeHTML.innerText=order.products.reduce((acc,producto)=> {
//     //     //con reduce itera. Recibe dos productos, en cuanto empieza mi acumulador. acc empieza en 0. acc es el acumulado y el valor a iterar es el producto
//     //     acc = acc + producto.cantidad;
//     //     return acc
//     // },0)
//     let count=0;
//     order.product.forEach(prod => {
//         count +=prod.cantidad
//     })
//     badgeHTML.innerText=count

// }

// actualizarBadge()
