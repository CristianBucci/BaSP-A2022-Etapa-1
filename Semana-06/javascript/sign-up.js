window.onload = function() {

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
    var letterValidation;
    var numberValidation;

    var onespace = function (txt) {
        var arrayCharacters = txt.split('');
        for(var i=0; i<arrayCharacters.length; i++) {
            if (arrayCharacters[i] == " ") {
                if (arrayCharacters[0] == " ") {
                    return false;
                };
                if (arrayCharacters[i+1] == " ") {
                    return false;
                };
                if (arrayCharacters[arrayCharacters.length - 1] == " ") {
                    return false;
                };
            };
        };
        return true;
    };

    var validateLetters = function(input) {
        var inputValue = (input.value.toLowerCase());
        for(var i = 0; i < inputValue.length; i++) {
            if((inputValue.charCodeAt(i) >= 97) && (inputValue.charCodeAt(i) <= 122)) {
                letterValidation = true;
            }
            else if((inputValue.charCodeAt(i) === 241)) {
                adressValidate = true;
            }
            else if((inputValue.charCodeAt(i) === 209)) {
                letterValidation = true;
            }
            else {
                letterValidation = false;
                break;
            };
        };
    };

    var validateLettersAndSpace = function(input) {
        var inputValue = (input.value.toLowerCase());
        for(var i = 0; i < inputValue.length; i++) {
            if((inputValue.charCodeAt(i) >= 97) && (inputValue.charCodeAt(i) <= 122)) {
                letterValidation = true;
            }else if((inputValue.charCodeAt(i) === 241)) {
                letterValidation = true;
            }else if((inputValue.charCodeAt(i) === 209)) {
                letterValidation = true;
            }else if((inputValue.charCodeAt(i) === 32)) {
                letterValidation = true;
            }else {
                letterValidation = false;
                break;
            };
        };
    };

    var validateNumber = function(input) {
        var inputValue = (input.value.toLowerCase());
        for(var i = 0; i < inputValue.length; i++) {
            if((inputValue.charCodeAt(i) >= 48) && (inputValue.charCodeAt(i) <= 57)) {
                numberValidation = true;
            }else {
                numberValidation = false;
                break;
            };
        };
    };

    var addRedBorder = function(input) {
        input.classList.add("border-red");
        var inputError = document.createElement ("p");
        inputError.classList.add("input-" + input.name);
        inputError.innerText = 'Enter a valid ' + input.name;
        input.parentNode.insertBefore(inputError,  input.nextSibling);
    };

    var requiredField = function (input) {
        if(input.value === '') {
            input.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-"+input.name);
            inputError.innerHTML = "Required field!!";
            input.parentNode.insertBefore(inputError,  input.nextSibling);
            return true;
        };
    };

    var addGreenBorder = function(input) {
        input.classList.add("border-green");
    };

    var removeBorder = function(input){
        input.value = '';
        input.classList.remove("border-red");
        if(document.querySelector(".input-" + input.name)) {
            document.querySelector(".input-" + input.name).remove();
        };
    };

    firstName.onblur = function() {
        validateLetters(firstName);
        if(!requiredField(firstName)) {
            if(!letterValidation || firstName.value.length < 3) {
                addRedBorder(firstName);
            }
            else {
                addGreenBorder(firstName);
            };
        };
    };

    firstName.onfocus = function() {
        removeBorder(firstName);
    };

    lastName.onblur = function() {
        validateLetters(lastName);
        if(!requiredField(lastName)) {
            if(!letterValidation || lastName.value.length < 3) {
                addRedBorder(lastName);
            }
            else {
                addGreenBorder(lastName);
            };
        };
    };

    lastName.onfocus = function() {
        removeBorder(lastName);
    };

    dni.onblur = function() {
        validateNumber(dni);
        if(!requiredField(dni)) {
            if(!numberValidation || dni.value.length < 7) {
                addRedBorder(dni);
            }
            else {
                addGreenBorder(dni);
            };
        };
    };

    dni.onfocus = function() {
        removeBorder(dni);
    };

    date.onblur = function() {
        if (requiredField(date)) {
        }else {
            addGreenBorder(date);
        };
    };

    date.onfocus = function() {
        removeBorder(date);
        };

    phone.onblur = function() {
        validateNumber(phone);
        if(!requiredField(phone)) {
            if(!numberValidation || phone.value.length !== 10) {
                addRedBorder(phone);
            }
            else {
                addGreenBorder(phone);
            };
        };
    };

    phone.onfocus = function() {
        removeBorder(phone);
    };

    adress.onblur = function() {
        validateLettersAndSpace(adress);
        if(!requiredField(adress)) {
            if(!letterValidation || adress.value.length < 5 || !onespace(adress.value)) {
                addRedBorder(adress);
            }
            else {
                addGreenBorder(adress);
            };
        };
    };

    adress.onfocus = function() {
        removeBorder(adress);
    };

    location.onblur = function() {
        validateLettersAndSpace(location);
        if(!requiredField(location)) {
            if(!letterValidation || location.value.length < 3 || !onespace(location.value)) {
                addRedBorder(location);
            }
            else {
                addGreenBorder(location);
            };
        };
    };

    location.onfocus = function() {
        removeBorder(location);
    };

    email.onblur = function(e) {
        e.preventDefault();
        if(!email.value.match(emailExpression)) {
            email.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par");
            inputError.innerHTML = "Enter a valid email!!";
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
        validateNumber(password);
        if(!requiredField(password)) {
            if(!numberValidation || password.value.length < 8) {
                addRedBorder(password);
            }
            else {
                addGreenBorder(password);
            };
        };
    };

    password.onfocus = function() {
        removeBorder(password);
    };

    repeatPassword.onblur = function() {
        if (repeatPassword.value === '') {
            repeatPassword.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-repeatPassword");
            inputError.innerHTML = "Required Field";
            repeatPassword.parentNode.insertBefore(inputError,  repeatPassword.nextSibling);
        }else if(repeatPassword.value !== password.value) {
            repeatPassword.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-repeatPassword");
            inputError.innerHTML = "Passwords don`t match";
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
    };

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
                };
            }else {
                validValue += '\n' + ' "' + inputs[i].value  + '"' + ' in ' + inputs[i].name + ' - ';
            };
        };
        var validationArr = validValue.split('-');
        if(validationArr.length !== 14){
            return alert('Error' + ' values ' + invalidValue);
        }else{
            return alert('Succes' + ' ' + validValue);
        };
    };
};