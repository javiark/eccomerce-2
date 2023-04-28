const tableBodyOrder = document.getElementById('table-body-order');

//----------------PINTAR TABLA--------------


function renderizarTablaOrdenes(){

    tableBodyOrder.innerHTML = '';
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
            <button class="product__action-btnDetail" onclick="deleteProductBuy(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>
            <button class="product__action-btn product__btn-edit"  onclick="editProductBuy(${index})">
                <i class="fa-solid fa-pencil " ></i>
            </button>  
        </td>
    </tr>`
    // tableBodyOrder.innerHTML += tableBodyOrder;
    // console.log(prod.name)
    
    })
    
    }
    renderizarTablaOrdenes()