const userAdmin = JSON.parse(localStorage.getItem('users'));


function adminUser(){
    if(!userAdmin){

        const newUser = {
            fullName: 'Admin',
            email: 'admin@hotmail.com',
            password: 'alfabeta',
            role: 'ADMIN_ROLE',
        }
        const adminUser = [];
        adminUser.push(newUser);
        localStorage.setItem('users',JSON.stringify(adminUser))
    }}
adminUser()
        

