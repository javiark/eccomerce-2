const signIn= document.getElementById("sign-in");





function renderHeaderLinks(){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser) { // si el local storage (currentUser) existe
        signIn.innerHTML = `<div onclick="logout()" href="/pages/login/login.html" class="navbar__nav-link" target="_blank">Logout</div>`

        const adminLink=createLinkElement("admin-product", "Admin Prodcut", "li");
        const adminUserLink=createLinkElement("admin-user", "admin User", "li");
        const productListItem=document.createElement("li")
        const userListItem=document.createElement("li");
        productListItem.appendChild(adminProductLink)
    } else{ //sino existe un current User

        const link = createLinkElement("login", "Login")
        signIn.replaceChildren(link); //agarro el elemento padre y le reemplazo los hijos con el link. los hijos q tenga los reemplace por este nuevo elemento
        // signIn.innerHTML = `<a href="/pages/login/login.html" class="navbar__nav-link" target="_blank">Login</a>`
    }
}

function createListItem(path, text, type = null){
    const listItem=document.createElement("li");
    listItem.classList.add("navbar_nav-link")
    //le asigno un atributo id
    listItem.setAttribute("id", path)
    link=createLinkElement(path, text);
    list

}

function createLinkElement(path, text, type = null){
    const link=document.createElement("a"); //
    link.classList.add("navbar__nav-link"); //le agrego una clasecreo un elemento a
    link.href =`/pages/${path}/${path}.html`;
    link.innerText =text; //le inserto un texto
    // if (type){
    //     li = document.createElement(type)
    //     li.appendChild(link)
    // }
    // return type ? li : link;
    return link;
}

function logout(){
    const currentUser=JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser.role ==="ADMIN_ROLE"){
    document.getElementById("admin-product").remove();
    document.getElementById("admin-user").remove();
}
localStorage.removeItem("currentUser");
    renderHeaderLinks();
}

renderHeaderLinks();

