window.onload = function(e){

    var firstName = document.getElementById("name");
    var lastName = document.getElementById("last-name");
    var dni = document.getElementById("dni");
    var date = document.getElementById("date");
    var phone = document.getElementById("phone");
    var adress = document.getElementById("adress");
    var location = document.getElementById("location");
    var postalCode = document.getElementById("postal-code");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var repeatPassword = document.getElementById("repeat-password");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var nameValidate;
// Nombre: Solo letras y debe tener más de 3 letras.
// Apellido: Solo letras y debe tener más de 3 letras.
// DNI: Solo número y debe tener más de 7 números.
// Fecha de Nacimiento: Con formato dd/mm/aaaa.
// Teléfono: Solo número y debe tener 10 números.
// Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
// Localidad: Texto alfanumérico y debe tener más de 3 letras.
// Código Postal: Solo número y debe tener entre 4 y 5 números.
// Email: Debe tener un formato de email válido.
// Contraseña: Al menos 8 caracteres, formados por letras y números.
// Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.

// for(var i = 0; i < inputValue.length;i++) {
//     if((inputValue.charCodeAt(i) >= 97) && (inputValue.charCodeAt(i) <= 122)) {
//         inputValidation = true;
//     }
//     else if((inputValue.charCodeAt(i) >= 48) && ((inputValue.charCodeAt(i) <= 57))) {
//         inputValidation = true;
//     }
//     else {
//         inputValidation = false;
//         break
//     };
// };

    firstName.onblur = function(e) {
        e.preventDefault();
    nameValue = (firstName.value).toLowerCase();
    for(var i = 0; i < nameValue.length;i++) {
    if((nameValue.charCodeAt(i) >= 97) && (nameValue.charCodeAt(i) <= 122)) {
        nameValidate = true;
    }
    else {
        nameValidate = false;
        break
    };
};
        if(!nameValidate || firstName.value.length < 3) {
            firstName.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par");
            inputError.innerHTML = "Ingrese un last name valido!!";
            firstName.parentNode.insertBefore(inputError,  firstName.nextSibling);
        }
        else {
                firstName.classList.add("border-green");
            };
        };

    firstName.onfocus = function() {
        if(firstName.value);
        firstName.value = '';
        firstName.classList.remove("border-red");
        if(document.querySelector(".input-par")) {
            document.querySelector(".input-par").remove();
        };
    };

    lastName.onblur = function() {
        if(lastName.value.length < 3) {
            lastName.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-last");
            inputError.innerHTML = "Ingrese un last name valido!!";
            lastName.parentNode.insertBefore(inputError,  lastName.nextSibling);
            }else {
                lastName.classList.add("border-green");
            };
        };

    lastName.onfocus = function(e) {
        if(lastName.value);
        lastName.value = '';
        lastName.classList.remove("border-red");
        if(document.querySelector(".input-par-last")) {
            document.querySelector(".input-par-last").remove();
        };
    }

    dni.onblur = function() {
        if(dni.value.length < 7) {
            dni.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-dni");
            inputError.innerHTML = "Ingrese un dni valido!!";
            dni.parentNode.insertBefore(inputError,  dni.nextSibling);
            }else {
                dni.classList.add("border-green");
            };
        };

    dni.onfocus = function() {
        if(dni.value);
        dni.value = '';
        dni.classList.remove("border-red");
        if(document.querySelector(".input-par-dni")) {
            document.querySelector(".input-par-dni").remove();
        };
    }

    phone.onblur = function() {
        if(phone.value.length != 10) {
            phone.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-phone");
            inputError.innerHTML = "Ingrese un phone valido!!";
            phone.parentNode.insertBefore(inputError,  phone.nextSibling);
            }else {
                phone.classList.add("border-green");
            };
        };

    phone.onfocus = function() {
        if(phone.value);
        phone.value = '';
        phone.classList.remove("border-red");
        if(document.querySelector(".input-par-phone")) {
            document.querySelector(".input-par-phone").remove();
        };
    }

    adress.onblur = function() {
        if(adress.value.length < 5 ) {
            adress.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-adress");
            inputError.innerHTML = "Ingrese un adress valido!!";
            adress.parentNode.insertBefore(inputError,  adress.nextSibling);
            }else {
                adress.classList.add("border-green");
            };
        };

    adress.onfocus = function() {
        if(adress.value);
        adress.value = '';
        adress.classList.remove("border-red");
        if(document.querySelector(".input-par-adress")) {
            document.querySelector(".input-par-adress").remove();
        };
    }

    location.onblur = function() {
        if(location.value.length < 3 ) {
            location.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-location");
            inputError.innerHTML = "Ingrese un location valido!!";
            location.parentNode.insertBefore(inputError,  location.nextSibling);
            }else {
                location.classList.add("border-green");
            };
        };

    location.onfocus = function() {
        if(location.value);
        location.value = '';
        location.classList.remove("border-red");
        if(document.querySelector(".input-par-location")) {
            document.querySelector(".input-par-location").remove();
        };
    }
    postalCode.onblur = function() {
        if(postalCode.value.length < 4 || postalCode.value.length > 5) {
            postalCode.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-postalCode");
            inputError.innerHTML = "Ingrese un postalCode valido!!";
            postalCode.parentNode.insertBefore(inputError,  postalCode.nextSibling);
            }else {
                postalCode.classList.add("border-green");
            };
        };

    postalCode.onfocus = function() {
        if(postalCode.value);
        postalCode.value = '';
        postalCode.classList.remove("border-red");
        if(document.querySelector(".input-par-postalCode")) {
            document.querySelector(".input-par-postalCode").remove();
        };
    }

    email.onblur = function(e){
        e.preventDefault();
        if(!email.value.match(emailExpression)) {
            email.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par");
            inputError.innerHTML = "Ingrese un email valido!!";
            email.parentNode.insertBefore(inputError,  email.nextSibling);
        }else {
            email.classList.add("border-green");
        };
    };

    email.onfocus = function(e) {
        e.preventDefault();
        if(email.value);
        email.value = '';
        email.classList.remove("border-red");
        if(document.querySelector(".input-par")) {
            document.querySelector(".input-par").remove();
        };
    };

    password.onblur = function() {
        if(password.value.length < 8) {
            password.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-password");
            inputError.innerHTML = "Ingrese un password valido!!";
            password.parentNode.insertBefore(inputError,  password.nextSibling);
            }else {
                password.classList.add("border-green");
            };
        };

    password.onfocus = function() {
        if(password.value);
        password.value = '';
        password.classList.remove("border-red");
        if(document.querySelector(".input-par-password")) {
            document.querySelector(".input-par-password").remove();
        };
    }
    repeatPassword.onblur = function() {
        if(repeatPassword.value.length < 8) {
            repeatPassword.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-repeatPassword");
            inputError.innerHTML = "Ingrese un repeatPassword valido!!";
            repeatPassword.parentNode.insertBefore(inputError,  repeatPassword.nextSibling);
            }else {
                repeatPassword.classList.add("border-green");
            };
        };

    repeatPassword.onfocus = function() {
        if(repeatPassword.value);
        repeatPassword.value = '';
        repeatPassword.classList.remove("border-red");
        if(document.querySelector(".input-par-repeatPassword")) {
            document.querySelector(".input-par-repeatPassword").remove();
        };
    }
}