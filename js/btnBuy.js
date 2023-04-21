function btnBuy(){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const boton = document.querySelector(".card__btn-buy")
    if (currentUser) {
    boton.classList.add("enable");
}
}
btnBuy()
