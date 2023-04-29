const tableBodyOrder = document.getElementById('table-body-order');
const productsOrderBuy = JSON.parse(localStorage.getItem("order"))
// const productsOrderBuy1 = JSON.parse(localStorage.getItem("cartFinal"))
// console.log(productsOrderBuy)
// console.log(productOrder)
// console.log(cartFinal)

//----------------PINTAR TABLA--------------



function renderizarTablaOrdenes(){

    tableBodyOrder.innerHTML = '';
    productsOrderBuy.forEach((prod, index)=>{
        // console.log(prod)
        // const { image, name, description, price } = prod;
        // console.log(name)
        tableBodyOrder.innerHTML += `<tr class="order">
        <td class="order__img-cell"><img class="product__img" src="${prod.image}" alt="${prod.name}"></td>
        <td class="order__name" onclick="editName(${index}")>${prod.name}</td>
        <td class="order__desc">${prod.description}</td>
        <td class="order__quantity">1</td>
        <td class="order__price">$ ${prod.price}</td>
        <td class="order__price">$ SUBTOTAL</td>
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
