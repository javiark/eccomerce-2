let users = []
const URL = `http://localhost:4000/api`

async function obtenerUsuarios(){
    try{

        const token = localStorage.getItem("token")
        const response = await axios.get(`${URL}/users`,{
            headers: {
                Authorization: token
            },
        })
        users=response.data.users;
        console.log(users)
        console.log(response)
    } catch(error){
        console.log(error)
    }

}

obtenerUsuarios()


// // let users =JSON.parse(localStorage.getItem('users')) || [];
// // console.log(users)
// let favorites = [];




// const userForm=document.getElementById("add-user");
// const submitBtn = document.getElementById("submit-btn-user");


// //1- Obtener el body de la tabla para poder modificarlo desde JS
// const tableBody = document.querySelector('#table-body-Users');

// let editIndex;


// //2- Definir una función para iterar el array
// function renderizarTablaUser() {
//     tableBody.innerHTML = '';
//     if(users.length===0){
//         tableBody.innerHTML="<p class='disabled'>NO SE ENCONTRARON USUARIOS</p>"
//         return
//     }
//     //3- Iterar el array para acceder a cada producto
//     users.forEach((usuario, index) => {

//         //4- Introducir dentro del tbody una fila por producto con sus respectivas celdas
//         const tableRow = `<tr class="user">
//                             <td class="user__name" onclick="editName(${index}")>${usuario.fullName}</td>
//                             <td class="user__name" onclick="editName(${index}")>${usuario.surname}</td>
//                             <td class="user__desc">${usuario.email}</td>
//                             <td class="user__name"> ${usuario.role}</td>
//                             <td class="user__desc"> ${fecha}</td>
//                             <td class="user__actions">
//                                 <button class="product__action-btnDetail" onclick="deleteUser(${index})">
//                                     <i class="fa-solid fa-trash"></i>
//                                 </button>
                           
//                                 <button class="product__action-btn product__btn-edit"  onclick="editUser(${index})">
//                                     <i class="fa-solid fa-pencil " ></i>
//                                 </button>
//                                 <button class="product__action-btn btn-favorite ${usuario.favorite===true ? 'active':''}" onclick="setFavoriteProduct(${index})">
//                                     <i class="fa-regular fa-star"></i>
//                                 </button>
                            
//                             </td>
//                         </tr>`
//         tableBody.innerHTML += tableRow;

//     });

// }

// renderizarTablaUser();

// // //****ADD EDIT PRODUCT*** */

// function addUser(evt) {
//     evt.preventDefault();

//     const elements = evt.target.elements;

//     // let newUser = editIndex ? users[editIndex] : {};
//     let newUser=users[editIndex]
//     if(editIndex >= 0){

//         newUser.fullName =  elements.fullName.value;
//         newUser.surname = elements.surname.value;
//         newUser.email =  elements.mail.value;
//         newUser.role =  elements.rol.value;
//     }else{
//         users[editIndex] = {};
//     }
    






//     if (editIndex >= 0) { //el indice 0 sino lo toma falso, el 0 es undifaned (falso)
//         users[editIndex]=newUser

       

//     }
//     console.log(newUser)
//     console.log(users)
//     //Guardarlo en el localStorage
//     localStorage.setItem('users', JSON.stringify(users))
//     editIndex=undefined; // para que se vacie
//     submitBtn.classList.remove("edit-btn-order");
 
//     // submitBtn.innerText = "Cargar Usuario"

//     renderizarTablaUser();
//     // submitBtn.classList.add("invisible");
//     showAlert("El usuario se edito correctamente", "succes")
        

//     evt.target.reset();
//     elements.fullName.focus();


//     }









// function deleteUser(indice) {
//     users.splice(indice, 1);
//     localStorage.setItem("users",JSON.stringify(users))
//     renderizarTablaUser(); 
//     showAlert("El producto se borro correctamente", "succes")

//     }


//     // const user = {
//     //     fullName:el.fullName.value,
//     //     surname:el.surname.value,
//     //     email: el.email.value,
//     //     password: el.password.value,
//     //     age: el.age.value,
//     //     bornDate: el.bornDate.value,
//     //     country:el.country.value,
//     //     gender: el.gender.value,
//     //     role:"USER_ROLE",
//     // }

// function editUser(idx){
//     submitBtn.classList.add("edit-btn-order");
//     submitBtn.innerText = "Modificar Usuario"
//     let user = users[idx];
//     console.log("indice:",idx)
//     console.log("usuario:",user)
//     submitBtn.classList.add("visible")
    


//     // console.table(product);
//     const el=userForm.elements;

//     el.fullName.value=user.fullName;
//     el.surname.value=user.surname;
//     el.mail.value=user.email;
//     el.rol.value=user.role;
//     // console.log("indice", idx)
//     // console.log("product:", product)
//     editIndex=idx;

// }

