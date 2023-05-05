function showAlert(text, type = 'sucess') {
    // * VAMOS A HACER NUESTRO ALERT CUSTOM
    // Crea unm elemento HTML Node
    
    const alertDialog = document.createElement('div');
    // Añade una clase
    alertDialog.classList.add('alert-dialog');
    alertDialog.innerText = text;
    document.body.appendChild(alertDialog);
    if(type === 'succes') {
        alertDialog.style.backgroundColor = '#4370c3';
    }
    
    if(type === 'error') {
        alertDialog.style.backgroundColor = '#c04641';
    }
    if(type === 'warning') {
        alertDialog.style.backgroundColor =  '#ff9944'
    }
    // Para demorar su aparición luego de haberlo creado lineas anterior con document createElement
    setTimeout(() => alertDialog.classList.add('show'), 10)

    setTimeout(() => {
        alertDialog.classList.remove('show');

        setTimeout(() => {
            alertDialog.remove();
        }, 1000)
        // window.location.href = '/pages/login/login.html'     
    },  1500);
}