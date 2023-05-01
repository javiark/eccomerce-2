
const tableBodyOrder = document.getElementById('table-body-order');
let productsOrderBuy = JSON.parse(localStorage.getItem("order"));
//----------------PINTAR TABLA--------------



function renderizarTablaOrdenes(){

    tableBodyOrder.innerHTML = '';
    if(productsOrderBuy.length===0){
        tableBodyOrder.innerHTML="<p class='disabled'>NO SE ENCONTRARON PRODUCTOS</p>"
        return
    }
    
    productsOrderBuy.forEach((prod, index)=>{

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