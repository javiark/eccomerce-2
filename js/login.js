//1-a guardo el formulario en una variable
const loginForm=document.getElementById("loginForm");

//1 - Obtener los datos del formulario
loginForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.dir(loginForm)
    // con la destructuracoin genero dos variables, email y password
    const { email,password} = loginForm.elements;

    console.log(email.value, password.value)
    //2- Checkear datos ingresdos con los usuarios que tengo
    //2a-Obtener los usuarios almacenados
    const users=JSON.parse(localStorage.getItem("user")) || [];
    console.log(users)
    users.forEach(u=>console.log(u))
});



    //a-Email que me ingreso lo tiene algun usuario de mi arra
    //b-password deberian ser las mismas
//3- Vamos a guardar en el localStorage un registro que va a ser currentUser - user

// function logout
//1- Borramos el registro del localStorage