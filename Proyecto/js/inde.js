// Inicializacion del nav header
$(document).ready(function () {
    $('.sidenav').sidenav();

    // Llama a la función para guardar los valores en localStorage
    guardarInputsContacto();
});

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function () {
        procesarFormularioContacto();
    });
});
// Validaciones 
function validarCedula() {
    const elementoCedula = document.getElementById('icon_prefix');
    const cedula = elementoCedula.value.trim();
    const expReg = /^[0-9]{6,10}$/;

    if (!expReg.test(cedula)) {
        alert('Por favor, ingresa una cédula válida (solo números, entre 6 y 10 dígitos).');
        elementoCedula.classList.add('error');
        return false;
    }

    elementoCedula.classList.remove('error');
    return true;
}

function validarNombre() {
    const elementoNombre = document.getElementById('icon_nombre'); // Selecciona el input de nombre
    const nombre = elementoNombre.value.trim(); // Obtiene el valor del input
    const expReg = /^[a-zA-Z\s]+$/; // Expresión regular: solo letras y espacios

    if (nombre.length === 0 || !expReg.test(nombre)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
        elementoNombre.classList.add('error'); // Añade la clase 'error' al input
        return false;
    }

    elementoNombre.classList.remove('error'); // Elimina la clase 'error' si el nombre es válido
    return true;
}

function validarApellido() {
    const elementoApellido = document.getElementById('perm_identity'); // Selecciona el input de apellido
    const apellido = elementoApellido.value.trim(); // Obtiene el valor del input
    const expReg = /^[a-zA-Z0-9\s]+$/; // Expresión regular: permite letras, números y espacios

    if (apellido.length === 0 || !expReg.test(apellido)) {
        alert('Por favor, ingresa un apellido válido (solo letras, números y espacios).');
        elementoApellido.classList.add('error'); // Añade la clase 'error' al input
        return false;
    }

    elementoApellido.classList.remove('error'); // Elimina la clase 'error' si el apellido es válido
    return true;
}

function validarEmail() {
    const elementoEmail = document.getElementById('email'); // Selecciona el input de email
    const email = elementoEmail.value.trim(); // Obtiene el valor del input
    const expReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Expresión regular para validar correos

    if (email.length === 0 || !expReg.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        elementoEmail.classList.add('error'); // Añade la clase 'error' al input
        return false;
    }

    elementoEmail.classList.remove('error'); // Elimina la clase 'error' si el correo es válido
    return true;
}

function validarClave() {
    const elementoClave = document.getElementById('phonelink_lock'); // Selecciona el input de clave
    const clave = elementoClave.value.trim(); // Obtiene el valor del input
    const expReg = /^[0-9]{8,}$/; // Expresión regular: solo números, mínimo 8 caracteres

    if (!expReg.test(clave)) {
        alert('Por favor, ingresa una clave válida (solo números, mínimo 8 caracteres).');
        elementoClave.classList.add('error'); // Añade la clase 'error' al input
        return false;
    }

    elementoClave.classList.remove('error'); // Elimina la clase 'error' si la clave es válida
    return true;
}
// Función para guardar los valores de los inputs del card #contacto en localStorage
function guardarInputsContacto() {
  $('#contacto input, #contacto textarea').on('blur', function () {
      var inputId = $(this).attr('id'); // Obtiene el ID del input
      var label = $(`label[for="${inputId}"]`).text(); // Obtiene el texto del label asociado
      var value = $(this).val(); // Obtiene el valor del input

      if (value.trim() !== '') {
          localStorage.setItem(label, value); // Guarda en localStorage con el label como clave
      }
  });
}

function procesarFormularioContacto() {
    // Obtén los valores de los inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validar el nombre
    if (name.length === 0) {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    // Validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Validar el mensaje
    if (message.length === 0) {
        alert('Por favor, ingresa un mensaje.');
        return;
    }

    // Guardar los datos en localStorage
    localStorage.setItem('Nombre', name);
    localStorage.setItem('Correo Electrónico', email);
    localStorage.setItem('Mensaje', message);

    // Limpiar los inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Confirmación
    alert('Formulario enviado correctamente.');
}

function guardarYLimpiarFormulario() {
    // Selecciona todos los inputs y textareas del formulario
    const inputs = document.querySelectorAll('.form input, .form textarea');

    // Recorre cada input/textarea
    inputs.forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`).textContent; // Obtiene el texto del label asociado
        const value = input.value.trim(); // Obtiene el valor del input

        if (value !== '') {
            localStorage.setItem(label, value); // Guarda en localStorage con el label como clave
        }

        input.value = ''; // Limpia el valor del input
    });

    // Confirmación
    alert('Formulario enviado y datos guardados correctamente.');
}