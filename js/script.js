const formulario = document.querySelector('.formulario');

const name_entry = document.querySelector('#campo_nombre');
const mail_entry = document.querySelector('#campo_correo');
const message_entry = document.querySelector('#campo_mensaje');

const datos = {
    campo_nombre: '',
    campo_correo: '',
    campo_mensaje: ''
};

name_entry.addEventListener('input', leer_datos);
mail_entry.addEventListener('input', leer_datos);
message_entry.addEventListener('input', leer_datos);

function leer_datos(e){
    datos[e.target.id] = e.target.value;
    if(document.querySelector('.error') != null){
        document.querySelector('.error').remove();
    }
}

formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const {campo_nombre, campo_correo, campo_mensaje} = datos;

    if (campo_nombre==='' || campo_correo==='' || campo_mensaje===''){
        const error = document.createElement('P');
        error.textContent = 'Todos los campos son obligatorios';
        error.classList.add('error');
        formulario.insertBefore(error, formulario.firstChild);
    }else{
        const sended = document.createElement('P');
        sended.textContent = 'Mensaje enviado!';
        sended.classList.add('mensaje_enviado');
        formulario.insertBefore(sended, formulario.firstChild);
        setTimeout(() => {
            sended.remove();
        }, 3000);
    }
})
