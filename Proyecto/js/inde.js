// Inicializacion del nav header
$(document).ready(function () {
    $('.sidenav').sidenav();

    // Llama a la función para guardar los valores en localStorage
    guardarInputsContacto();
});
$(document).ready(function(){
    $('.datepicker').datepicker({
      format: 'yyyy-mm-dd',
      autoClose: true
    });
  });
  $(document).ready(function(){
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.tap-target').tapTarget();
    $('.datepicker').datepicker();
  });
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit_Button');

    submitButton.addEventListener('click', function () {
        procesarFormularioContacto();
    });

    const submit_Button = document.getElementById('button');
    submitButton.addEventListener('click', function () {
        guardarYLimpiarFormulario();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('button');
    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault(); // Evita el envío del formulario por defecto
            guardarYLimpiarFormulario(); // Llama a la función
        });
    }
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

function validarFecha() {
    const elementoFecha = document.getElementById('date'); // Selecciona el input de fecha
    const fechaIngresada = new Date(elementoFecha.value); // Convierte el valor del input a un objeto Date
    const fechaActual = new Date(); // Obtiene la fecha actual

    // Calcula la fecha límite para ser mayor de 18 años
    const fechaLimite = new Date(
        fechaActual.getFullYear() - 18,
        fechaActual.getMonth(),
        fechaActual.getDate()
    );

    if (fechaIngresada > fechaLimite) {
        alert('Debes ser mayor de 18 años para continuar.'); // Alerta para el usuario
        elementoFecha.classList.add('error'); // Añade la clase 'error' al input
        return false;
    }

    elementoFecha.classList.remove('error'); // Elimina la clase 'error' si la fecha es válida
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

let formularioEnviado = false; // Variable para rastrear si el formulario fue enviado

function guardarYLimpiarFormulario() {
    const inputs = document.querySelectorAll('.form input');
    let isValid = true;

    inputs.forEach(input => {
        const value = input.value.trim();
        if (value === '') {
            input.classList.add('input-error');
            isValid = false;
        } else {
            input.classList.remove('input-error');
        }
    });

    if (!isValid) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    inputs.forEach(input => {
        input.value = ''; // Limpia los campos
    });

    formularioEnviado = true; // Marca el formulario como enviado
    alert('Formulario enviado correctamente.');
}

document.addEventListener('DOMContentLoaded', function () {
    const crucigramaLink = document.querySelector('a[href="../HTML/crucigrama.html"]'); // Selecciona el enlace del Crucigrama

    if (crucigramaLink) {
        crucigramaLink.addEventListener('click', function (event) {
            if (!formularioEnviado) {
                event.preventDefault(); // Evita la redirección
                alert("Por favor, completa y envía el formulario antes de continuar.");
            }
        });
    }
});