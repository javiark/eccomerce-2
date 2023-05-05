let currentUser = JSON.parse(localStorage.getItem("currentUser"));
const button2 = document.querySelectorAll(".card__btn-buy1")
const button3 = document.querySelectorAll(".card__btn")
console.dir(button2)
console.dir(button3)
function btnBuy(){



    if (currentUser) {
        button2.forEach((parametro) => {
           pam = parametro.classList.add("enable");
            // console.log(pam)
        });
        button3.forEach((parametro) => {
            pam = parametro.classList.add("enable");
             // console.log(pam)
         });
}
}
btnBuy()


// function btnBuy(){
//     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     const boton = document.querySelector(".card__btn-buy")
//     if (currentUser) {
//     boton.classList.add("enable");
// }
// }
// btnBuy()
