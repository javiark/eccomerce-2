

let users =JSON.parse(localStorage.getItem('users')) || [];
let usersC =JSON.parse(localStorage.getItem('currentUser')) || [];
console.log(usersC)
// console.log(users)
let favorites = [];




const userForm=document.getElementById("add-user");
const submitBtn = document.getElementById("submit-btn-user");


//1- Obtener el body de la tabla para poder modificarlo desde JS
const tableBody = document.querySelector('#table-body-Users');

let editIndex;


//2- Definir una función para iterar el array
function renderizarTablaUser() {
    tableBody.innerHTML = '';
    if(users.length===0){
        tableBody.innerHTML="<p class='disabled'>NO SE ENCONTRARON PRODUCTOS</p>"
        return
    }
    //3- Iterar el array para acceder a cada producto
    users.forEach((usuario, index) => {

        //4- Introducir dentro del tbody una fila por producto con sus respectivas celdas
        const tableRow = `<tr class="user">
                            <td class="user__name" onclick="editName(${index}")>${usuario.fullName}</td>
                            <td class="user__name" onclick="editName(${index}")>${usuario.surname}</td>
                            <td class="user__desc">${usuario.email}</td>
                            <td class="user__name"> ${usuario.role}</td>
                            <td class="user__desc"> ${fecha}</td>
                            <td class="user__actions">
                                <button class="product__action-btnDetail" onclick="deleteUser(${index})">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                           
                                <button class="product__action-btn product__btn-edit"  onclick="editUser(${index})">
                                    <i class="fa-solid fa-pencil " ></i>
                                </button>
                                <button class="product__action-btn btn-favorite ${usuario.favorite===true ? 'active':''}" onclick="setFavoriteProduct(${index})">
                                    <i class="fa-regular fa-star"></i>
                                </button>
                            
                            </td>
                        </tr>`
        tableBody.innerHTML += tableRow;

    });

}

renderizarTablaUser();

// //****ADD EDIT PRODUCT*** */

function addUser(evt) {
    evt.preventDefault();
    // console.dir(evt.target);
    const elements = evt.target.elements;

    let newUser = editIndex ? users[editIndex] : {};

    // const newUser = {
        newUser.fullName =  elements.fullName.value;
        newUser.surname = elements.surname.value;
        newUser.email =  elements.mail.value;
        newUser.role =  elements.rol.value;



    if (editIndex >= 0) { //el indice 0 sino lo toma falso, el 0 es undifaned (falso)
        users[editIndex]=newUser
        swal ({
            title:"el usuario se edito correctamente",
            icon:"info"
        })

    }
  

    //Guardarlo en el localStorage
    localStorage.setItem('users', JSON.stringify(users))
    editIndex=undefined; // para que se vacie
    // submitBtn.classList.remove("edit-btn-order");
 
    // submitBtn.innerText = "Cargar Usuario"

    renderizarTablaUser();

    evt.target.reset();
    // elements.name.focus();

    }



function deleteUser(indice) {
    swal({
        title: "Borrar usuario",
        text: `Esta seguro que desea borrar el usuario ${users[indice].fullName}`,
        icon: `warning`,
        buttons: {
            cancel:"Cancelar",
            delete:"Borrar",
        }
    }).then(value => {
        if (value==="delete"){
            users.splice(indice, 1);
            localStorage.setItem("users",JSON.stringify(users))
            swal({
                title:"El usuario se ha borrado correctamente",
                icon:"error"
        
            });
            renderizarTablaUser(); 

        }else {
            return ; //return null
        }
    })
}

function editUser(idx){
    submitBtn.classList.add("edit-btn");
    submitBtn.innerText = "Modificar Usuario"
    let user = users[idx];
    console.log("indice:",idx)
    console.log("usuario:",user)
    submitBtn.classList.add("visible")
    
    // console.table(product);
    const el=userForm.elements;
    el.fullName.value=user.fullName;
    el.surname.value=user.surname;
    el.mail.value=user.email;
    el.rol.value=user.role;
    // console.log("indice", idx)
    // console.log("product:", product)
    editIndex=idx;
}




