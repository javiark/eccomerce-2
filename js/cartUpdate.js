//----------------ACTUALIZAR CANTIDAD EN CARRITOS DE COMPRA--------------
let productOrder1 = JSON.parse(sessionStorage.getItem("order"))
let badgeHTMLbuy1=document.getElementById("cart-count");

function cartUpdate(){
    let count=0;
productOrder1.forEach(productOrder1 => {
    count += parseInt(productOrder1.quantity)
})

badgeHTMLbuy1.innerText=count;
}
cartUpdate()