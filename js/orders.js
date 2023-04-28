const order1 = { 
    userId: 1,// indice de usuario de nuestro array
    products : [
        {
            productID: 18,   // momentaneamiente sera un indice de producto de nuestro array del localStorage
            quantity: 1,
            price: 24000,
        },
        {
            productID: 8,   // momentaneamiente sera un indice de producto de nuestro array del localStorage
            quantity: 2,
            price: 3000,
        }
    ],
   createdAt:new Date(),
   total: 323240

}

const badgeHTML=document.getElementById("cart-count")
let order = { 
    userID:1,// usuario
    product: [ //array de productos
        {
        productName:"XBOX",
        cantidad: 5,
        price:1000 // el precio no se actualiza con la inflacion. Es el valor en ese momento
    },
    {
        productName:"Switch",//Preguntar si name del producto es igual a un productName
        cantidad: 1,
        price:20000
    }


    ],
    user:"email@gmail.com",
    total: 21000, // total de la compra
}

function actualizarBadge(){
    // badgeHTML.innerText=order.products.length
    // badgeHTML.innerText=order.products.reduce((acc,producto)=> {
    //     //con reduce itera. Recibe dos productos, en cuanto empieza mi acumulador. acc empieza en 0. acc es el acumulado y el valor a iterar es el producto
    //     acc = acc + producto.cantidad;
    //     return acc
    // },0)
    let count=0;
    order.product.forEach(prod => {
        count +=prod.cantidad
    })
    badgeHTML.innerText=count

}

actualizarBadge()


// ?Agregar elemento (funcion)

function addToOrder(indice){
    console.log("funciona el boton")
//Tener la posibilidad de que cuando apriete el boton comprar se añada el elemento array dentro de order.products
    //antes de hacer un push 
    //Deberia checkear con un find o findIndex deberia chequear si el producto ya se encuentra
    //Si se encuentra incremento su cantidad++
    //Sino hago un push de ese elemento.
    //Incrementar el total
    //Volver a guardar en el sessionStorage. (  Con SesionStorage se borra cada vez que reinicio la pagina)
}

// hacer un badge en el carrito con un before o un after y se pone en una posicion absoluta. Sino poner un div y cargar la cantidad de elementos q fe comprando

//? Eliminar elemento  (funcion)
    //Pintamos en el boton de mi orden el index del array order.products y lo eliminamos con un Splice
    //Guardar el precio del producto por la cantidad y restarselo al total.
    //Actualizar el sessionStorage con el nuevo valor.

//? Listar order 
    //Pintar los elementos en una nueva pagina, tachicto para eliminarlos. Crear una tabla
