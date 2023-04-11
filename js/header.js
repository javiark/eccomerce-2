const signIn= document.getElementById("sign-in");




function renderHeaderLinks(){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser) { // si el local storage (currentUser) existe
        signIn.innerHTML = `<div onclick="logout()" href="/pages/login/login.html" class="navbar__nav-link" target="_blank">Logout</div>`
    } else{ //sino existe un current User

        const link=document.createElement("a"); //creo un elemento a

        link.classList.add("navbar__nav-link"); //le agrego una clase

        link.href ="/pages/login/login.html";

        link.setAttribute("target", "_blank") //le agrego un atributo especificio

        link.innerText ="Login" //le inserto un texto

        signIn.replaceChildren(link) //agarro el elemento padre y le reemplazo los hijos con el link. los hijos q tenga los reemplace por este nuevo elemento

        // signIn.innerHTML = `<a href="/pages/login/login.html" class="navbar__nav-link" target="_blank">Login</a>`
    }
}

function logout(){
    localStorage.removeItem("currentUser");
    renderHeaderLinks();
}

renderHeaderLinks();

