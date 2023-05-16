//1-a guardo el formulario en una variable
const loginForm=document.getElementById("loginForm");
const URL = "http://localhost:4000/api";

//1 - Obtener los datos del formulario
loginForm.addEventListener("submit",async (event)=>{
    event.preventDefault();
    // console.dir(loginForm)
    // console.log(loginForm.elements);

    try{
        const dataBody = { 
            email:loginForm.elements.email.value,
            password:loginForm.elements.password.value,
        }
        const resp  = await axios.post(`${URL}/login`, dataBody);
        console.log(resp)

        // console.log(resp.data)
        const {token, user, msg} = resp.data;
        localStorage.setItem("token",token) // no hace falta hacerle stringify pq es un string. Guardo el Token en el local storage
        localStorage.setItem("currentUser", JSON.stringify(user))

        showAlert(`Bienvenido ${user.fullName}`, "succes" )
        setTimeout(()=>{
            window.location.href="/index.html"
        }, 2000)





    } catch(error){
        console.log(error)
        showAlert("Login incorrecto", "error" )
    }
    return

    });

    function cleanOrder(){
        sessionStorage.clear("order");


    }





    //a-Email que me ingreso lo tiene algun usuario de mi array
    //b-password deberian ser las mismas
//3- Vamos a guardar en el localStorage un registro que va a ser currentUser - user

// function logout
//1- Borramos el registro del localStorage
    




    //!------------OTRA FORMA----------------

    // if(!user || user.password !== password.value ){ //sino existe usuario
    //     alert("Los datos ingresados no son correctos");
    //     return;
    // }
    //     localStorage.setItem("currentUser", JSON.stringify(user));
    //     alert("Login correcto")

        


    
    // console.log(users)
    // users.forEach(u=>console.log(u))}




