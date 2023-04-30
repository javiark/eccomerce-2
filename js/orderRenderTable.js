const tableBodyOrder = document.getElementById('table-body-order');
let productsOrderBuy = JSON.parse(localStorage.getItem("order"));

// const productsOrderBuy1 = JSON.parse(localStorage.getItem("cartFinal"))
// console.log(productsOrderBuy)
// console.log(productOrder)
// console.log(cartFinal)

//----------------PINTAR TABLA--------------



function renderizarTablaOrdenes(){

    tableBodyOrder.innerHTML = '';
    
    // productsOrderBuy.forEach(productOrder => {
    //     let cant = productOrder.quantity
    //     let precio = productOrder.priceOrder
    //     console.log(cant)
    //     console.log(precio)
    //     let subtotal = cant * precio
    //     console.log(subtotal)
    // })



    productsOrderBuy.forEach((prod, index)=>{
        // console.log(prod)

        // const { image, name, description, price } = prod;
        // console.log(name)
        tableBodyOrder.innerHTML += `<tr class="order">
        <td class="order__img-cell"><img class="product__img" src="${prod.imageOrder}" alt="${prod.nameOrder}"></td>
        <td class="order__name" onclick="editName(${index}")>${prod.nameOrder}</td>
        <td class="order__desc">${prod.descriptionOrder}</td>
        <td class="order__quantity">${prod.quantity}</td>
        <td class="order__price">$ ${prod.priceOrder}</td>
        <td class="order__price">$ ${prod.priceOrder * prod.quantity }</td>
        <td class="order__actions">
            <button class="product__action-btnDetail" onclick="deleteProductBuy(${index})">
                <i class="fa-solid fa-trash"></i>
            </button> 
        </td>
    </tr>`
    // tableBodyOrder.innerHTML += tableBodyOrder;
    // console.log(prod.name)
    
    })
    
    }

    renderizarTablaOrdenes()

    let orderUser1 = JSON.parse(localStorage.getItem("currentUser"))


    function cleantable(){

        if (orderUser1) {
                console.log("hay usuario")
            }else{
                tableBodyOrder.innerHTML = '';
            }
    }

cleantable()

    