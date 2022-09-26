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
    var button = document.getElementById("signup-button");
    var inputs = document.getElementsByTagName("input");
    var repeatPassword = document.getElementById("repeat-password");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var nameValidate;
    var lastNameValidate;
    var dniValidate;
    var phoneValidate;
    var adressValidate;
    var locationValidate;
    var postalCodeValidate;
    var passwordValidate;

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

    function onespace(txt){
        var arrayCharacters = txt.split('');
        for(var i=0; i<arrayCharacters.length; i++)
        {
        if (arrayCharacters[i] == " ")
        {
            if (arrayCharacters[0] == " ")
            {
                return false;
            }
            if (arrayCharacters[i+1] == " ")
            {
                return false;
            }
            if (arrayCharacters[arrayCharacters.length - 1] == " ")
            {
                return false;
            }
        }
        }
        return true;
    }

    firstName.onblur = function(e) {
    e.preventDefault();
    var nameValue = (firstName.value).toLowerCase();
    for(var i = 0; i < nameValue.length ;i++) {
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

    lastName.onblur = function(e) {
        e.preventDefault();
        var lastNameValue = (lastName.value).toLowerCase();
        for(var i = 0; i < lastNameValue.length;i++) {
        if((lastNameValue.charCodeAt(i) >= 97) && (lastNameValue.charCodeAt(i) <= 122)) {
            lastNameValidate = true;
        }
        else {
            lastNameValidate = false;
            break
        };
    };
        if(!lastNameValidate || lastName.value.length < 3) {
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

    dni.onblur = function(e) {
        e.preventDefault();
        var dniValue = dni.value;
        for(var i = 0; i < dniValue.length;i++) {
        if((dniValue.charCodeAt(i) >= 48) && ((dniValue.charCodeAt(i) <= 57))) {
            dniValidate = true;
        }
        else {
            dniValidate = false;
            break
        };
    };

        if(!dniValidate || dni.value.length < 7) {
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

    date.onblur = function() {
        if(date.value ===''){
                date.classList.add("border-red");
                var inputError = document.createElement("p");
                inputError.classList.add("input-par-date");
                inputError.innerHTML = "Ingrese un date valido!!";
                date.parentNode.insertBefore(inputError,  date.nextSibling);
                }else {
                    date.classList.add("border-green");
                };
        }
        date.onfocus = function() {
            if(date.value);
            date.value = '';
            date.classList.remove("border-red");
            if(document.querySelector(".input-par-date")) {
                document.querySelector(".input-par-date").remove();
            };
        }


    phone.onblur = function(e) {
        e.preventDefault();
        var phoneValue = phone.value;
        for(var i = 0; i < phoneValue.length;i++) {
        if((phoneValue.charCodeAt(i) >= 48) && ((phoneValue.charCodeAt(i) <= 57))) {
            phoneValidate = true;
        }
        else {
            phoneValidate = false;
            break
        };
    };
        if(!phoneValidate || phone.value.length != 10) {
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

    adress.onblur = function(e) {
        e.preventDefault();

        var adressValue = (adress.value).toLowerCase();
        for(var i = 0; i < adressValue.length;i++) {
            if((adressValue.charCodeAt(i) >= 97) && (adressValue.charCodeAt(i) <= 122)) {
                adressValidate = true;
            }
            else if((adressValue.charCodeAt(i) >= 48) && ((adressValue.charCodeAt(i) <= 57))) {
                adressValidate = true;
            }
            else if((adressValue.charCodeAt(i) === 32)) {
                adressValidate = true;
            }
            else {
                adressValidate = false;
                break
            };
        };
        if(!adressValidate || !onespace(adress.value) || adress.value.length < 5 ) {
            adress.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-adress");
            inputError.innerHTML = "Ingrese un adress valido! Solo un espacio";
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

        var locationValue = (location.value).toLowerCase();
        for(var i = 0; i < locationValue.length;i++) {
            if((locationValue.charCodeAt(i) >= 97) && (locationValue.charCodeAt(i) <= 122)) {
                locationValidate = true;
            }
            else if((locationValue.charCodeAt(i) >= 48) && ((locationValue.charCodeAt(i) <= 57))) {
                locationValidate = true;
            }
            else {
                locationValidate = false;
                break
            };
        };
        if(!locationValidate || location.value.length < 3 ) {
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

        var postalCodeValue = postalCode.value;
        for(var i = 0; i < postalCodeValue.length;i++) {
        if((postalCodeValue.charCodeAt(i) >= 48) && ((postalCodeValue.charCodeAt(i) <= 57))) {
            postalCodeValidate = true;
        }
        else {
            postalCodeValidate = false;
            break
        };
    };

        if(!postalCodeValidate || postalCode.value.length < 4 || postalCode.value.length > 5) {
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
        var passwordValue = (password.value).toLowerCase();
        for(var i = 0; i < passwordValue.length;i++) {
            if((passwordValue.charCodeAt(i) >= 97) && (passwordValue.charCodeAt(i) <= 122)) {
                passwordValidate = true;
            }
            else if((passwordValue.charCodeAt(i) >= 48) && ((passwordValue.charCodeAt(i) <= 57))) {
                passwordValidate = true;
            }
            else {
                passwordValidate = false;
                break
            };
        };
        if(!passwordValidate || password.value.length < 8) {
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
        if(repeatPassword.value !== password.value || repeatPassword.value.length < 8) {
            repeatPassword.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-repeatPassword");
            if (repeatPassword.value === ''){
                inputError.innerHTML = "Invalid Field";
            }else{
                inputError.innerHTML = "Paswword don`t match";
            }
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

    button.onclick = function(e){
        e.preventDefault();
        var invalidValue = '' ;
        var validValue = '';
        for(var i = 0; i < inputs.length ; i++){
            if(inputs[i].classList.contains("border-red") || inputs[i].value === ''){
                if(inputs[i].value === ''){
                    inputs[i].classList.add("border-red");
                    invalidValue += '\n' + 'Required value ' + inputs[i].name + ' - ';
                }else{
                    inputs[i].classList.add("border-red");
                    invalidValue += '\n' + 'Invalid value ' + inputs[i].value  + ' in ' + inputs[i].name + ' - ';
                }
            }else {
                validValue += '\n' + ' "' + inputs[i].value  + '"' + ' in ' + inputs[i].name + ' - ';
            }
        }

    var validationArr = validValue.split('-');

    console.log(validationArr.length);
    if(validationArr.length !== 14){
        return alert('error' + ' invalid value ' + invalidValue)
    }else{
        return alert('Succes' + ' ' + validValue)
    }
}
}