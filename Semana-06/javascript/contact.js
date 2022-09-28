window.onload = function() {

    var nameInput = document.getElementById("input-name");
    var emailInput = document.getElementById("input-email");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var formSelect = document.getElementById("form-select");
    var textArea = document.getElementById("text-area");
    var submitButton = document.getElementById("submit-button");
    var inputs = document.getElementsByClassName("input");
    var letterValidation;
    var letterNumberValidation;

    var onespace = function (input) {
        var arrayCharacters = input.split('');
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
    };

    var validateLetterNumber = function(input) {
        var inputValue = (input.value.toLowerCase());
        for(var i = 0; i < inputValue.length; i++) {
            if((inputValue.charCodeAt(i) >= 97) && (inputValue.charCodeAt(i) <= 122)) {
                letterNumberValidation = true;
            }else if((inputValue.charCodeAt(i) === 241)) {
                letterNumberValidation = true;
            }else if((inputValue.charCodeAt(i) === 209)) {
                letterNumberValidation = true;
            }else if((inputValue.charCodeAt(i) >= 48) && (inputValue.charCodeAt(i) <= 57)) {
                letterNumberValidation = true;
            }
            else {
                letterNumberValidation = false;
                break;
            };
        };
    };

    var validateLetters = function(input) {
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
            }
            else {
                letterValidation = false;
                break;
            };
        };
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

    var addRedBorder = function(input) {
        input.classList.add("border-red");
        var inputError = document.createElement ("p");
        inputError.classList.add("input-" + input.name);
        inputError.innerText = 'Enter a valid ' + input.name;
        input.parentNode.insertBefore(inputError,  input.nextSibling);
    };

    var addGreenBorder = function(input) {
        input.classList.add("border-green");
    };

    var removeBorder = function(input) {
        if(input.classList.contains("border-red")){
            input.value = '';
            input.classList.remove("border-red");
            if(document.querySelector(".input-" + input.name)) {
                document.querySelector(".input-" + input.name).remove();
            };
        };
    };

    nameInput.onblur = function() {
        validateLetters(nameInput);
        if(!requiredField(nameInput)) {
            if(!letterValidation || nameInput.value.length < 3 || !onespace(nameInput.value)) {
                addRedBorder(nameInput);
            }
            else {
                addGreenBorder(nameInput);
            };
        };
    };
    nameInput.onfocus = function() {
        removeBorder(nameInput);
    };

    emailInput.onblur = function() {
        if(emailInput.value === ''){
            emailInput.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par");
            inputError.innerHTML = "Required field!!";
            emailInput.parentNode.insertBefore(inputError,  emailInput.nextSibling);
        }
        else if(!emailInput.value.match(emailExpression)) {
            emailInput.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par");
            inputError.innerHTML = "Enter a valid email!!";
            emailInput.parentNode.insertBefore(inputError,  emailInput.nextSibling);
        }
        else {
            emailInput.classList.add("border-green");
        };
    };

    emailInput.onfocus = function() {
        if(emailInput.classList.contains("border-red")){
            emailInput.value = '';
            emailInput.classList.remove("border-red");
            if(document.querySelector(".input-par")) {
                document.querySelector(".input-par").remove();
            };
        };
    };

    formSelect.onblur = function() {
            if(formSelect.value === '-Choose Contact Area-' || formSelect.value === ''){
                formSelect.classList.add("border-red");
                var inputError = document.createElement("p");
                inputError.classList.add("input-");
                inputError.innerHTML = "Required field!!";
                formSelect.parentNode.insertBefore(inputError,  formSelect.nextSibling);
            }else{
                addGreenBorder(formSelect);
            };
        };

    formSelect.onfocus = function() {
        if(formSelect.classList.contains("border-red")){
            formSelect.classList.remove("border-red");
            if(document.querySelector(".input-")) {
                document.querySelector(".input-").remove();
            };
        };
    };

    textArea.onblur = function () {
        validateLetterNumber(textArea);
        if(!requiredField(textArea)){
            if(!letterNumberValidation || textArea.value.length < 3){
                addRedBorder(textArea);
            }else {
                addGreenBorder(textArea);
            };
        };
    };

    textArea.onfocus = function () {
        removeBorder(textArea);
    };

    submitButton.onclick = function(e){
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
                validValue += '\n' + ' "' + inputs[i].name  + '"' + ' : ' + inputs[i].value + ' - ';
            };
        };
        var validationArr = validValue.split('-');
        if(validationArr.length !== 6){
            console.log(validationArr);
            alert('Error' + ' values ' + invalidValue);
        }else{
            alert('Succes' + ' ' + validValue);
        };
    };
};
