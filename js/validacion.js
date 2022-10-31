export function validar(input) {
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = '';
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
    
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "customError",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo correo no puede estar vacío",
        customError: 'El campo nombre no puede estar en blanco o vacío',
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
        customError: "Debe tener el formato siguiente ejemplo@texto.com",
    },
    asunto: {
        valueMissing: "El campo correo no puede estar vacío",
        customError: 'El campo nombre no puede estar en blanco o vacío',
    },
    mensaje: {
        valueMissing: "El campo correo no puede estar vacío",
        customError: 'El campo nombre no puede estar en blanco o vacío',
    },
}

const validadores = {
    nombre: (input) => validarNombre(input),
    email: (input) => validarEmail(input),
    asunto: (input) => validarAsunto(input),
    mensaje: (input) => validarMensaje(input),
};

function mostrarMensajeDeError(tipoDeInput,input) {
    let mensaje = '';
    tipoDeErrores.forEach( error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })

    return mensaje
}

function validarNombre(input) {
    const nombre = input.value.trim();
    let mensaje = '';
    if (nombre == '') {
        mensaje = "El campo nombre no puede estar en blanco o vacío";
    }
    
    input.setCustomValidity(mensaje);
}

function validarAsunto(input) {
    const asunto = input.value.trim();
    let mensaje = '';
    if (asunto == '') {
        mensaje = "El campo nombre no puede estar en blanco o vacío";
    }
    
    input.setCustomValidity(mensaje);
}

function validarMensaje(input) {
    const textMensaje = input.value.trim();
    let mensaje = '';
    if (textMensaje == '') {
        mensaje = "El campo nombre no puede estar en blanco o vacío";
    }
    
    input.setCustomValidity(mensaje);
}

function validarEmail(input) {
    const email = input.value;
    const emailVector = email.split('');
    let position1 = false;
    let position2 = false;
    let mensaje = '';

    emailVector.forEach(element => {
        if (element == '@') {
            position1 = true;
        } else if (element == '.' && position1) {
            position2 = true;
        }
    });
    
    if (position1 && !position2) {
        mensaje = "Debe tener el formato siguiente ejemplo@texto.com";
    }
    
    input.setCustomValidity(mensaje);
}