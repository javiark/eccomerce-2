
function loginName(){
    const loginUser= document.getElementById("loginName")
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
    loginUser.innerHTML = `${user.fullName}`

}
    loginUser.classList.add("navbar__nav-link-login")

}

loginName()

