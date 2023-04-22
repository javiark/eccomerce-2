
function loginName(){
    const loginUser= document.getElementById("loginName")
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.dir(currentUser)
    // const nameAvatar=currentUser.name.value;
    // console.log(nameAvatar)
    loginName.innerHTML=``;

//     if (currentUser) {
//     loginUser.innerHTML = `${user.fullName}`
// } 

//     loginUser.classList.add("navbar__nav-link-login")
}

loginName()

