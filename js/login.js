//1-a guardo el formulario en una variable
const loginForm=document.getElementById("loginForm");

//1 - Obtener los datos del formulario
loginForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.dir(loginForm)
    // con la destructuracoin genero dos variables, email y password
    //const el= loginForm.elements;
    const { email,password} = loginForm.elements;

    console.log(email.value, password.value)
    //2- Checkear datos ingresdos con los usuarios que tengo
    //2a-Obtener los usuarios almacenados
    const users=JSON.parse(localStorage.getItem("users")) || []; // las comillas verticales son por si no encuentra nada, toma un array vacio y no va a ser null. Un array vacio es null
    console.log(users)

    const user = users.find((usr)=>{
        if (usr.email ===email.value){
            return true;        
        }
        return false;
    }) //objeto { name, password, email}

    if(!user){ //sino existe usuario
        alert("El usuario ingresado es incorrecto");
        return;
    }

    if(user.password ===password.value){
        localStorage.setItem("currentUser", JSON.stringify(user));


        alert("Login correcto")
    } 
    else {
        alert("El password es incorrecto")
        return;}
    });




    //!------------OTRA FORMA----------------

    // if(!user || user.password !== password.value ){ //sino existe usuario
    //     alert("Los datos ingresados no son correctos");
    //     return;
    // }
    //     localStorage.setItem("currentUser", JSON.stringify(user));
    //     alert("Login correcto")

        


    
    // console.log(users)
    // users.forEach(u=>console.log(u))}




    //a-Email que me ingreso lo tiene algun usuario de mi arra
    //b-password deberian ser las mismas
//3- Vamos a guardar en el localStorage un registro que va a ser currentUser - user

// function logout
//1- Borramos el registro del localStorage