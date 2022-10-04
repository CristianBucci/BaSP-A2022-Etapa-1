window.onload = function() {

    var firstName = document.getElementById("name");
    var lastName = document.getElementById("last-name");
    var dni = document.getElementById("dni");
    var date = document.getElementById("date");
    var phone = document.getElementById("phone");
    var address = document.getElementById("address");
    var location = document.getElementById("location");
    var postalCode = document.getElementById("postal-code");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var button = document.getElementById("signup-button");
    var repeatPassword = document.getElementById("repeat-password");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputs = document.getElementsByTagName("input")
    var modal = document.getElementById("background");
    var modalTitle = document.getElementById("modal-title");
    var modalButton = document.getElementById("modal-button");
    var closeModal = document.getElementsByClassName("close")[0];
    var letterValidation;
    var numberValidation;
    var letterSpaceNumberValidation;
    var convertedDate;

    var convertDate = function(input) {
        var year = input.value.substring(0 , input.value.indexOf('-'));
        var month = input.value.substring(input.value.indexOf('-') + 1, input.value.indexOf('-') + 3);
        var day = input.value.substring(input.value.indexOf('-')+ 4 , input.value.indexOf('-') + input.value.length);
        var dateArr = [year, month , day];
        convertedDate = dateArr.join('-');
    };

    var onespace = function (input) {
        var arrayCharacters = input.split('');
        for (var i=0; i < arrayCharacters.length; i++) {
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

    var onlyOneSpace = function (input) {
        var arrayCharacters = input.split('');
        for (var i=0; i < arrayCharacters.length; i++) {
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
            }
            else if (!arrayCharacters.includes(' ')){
                return false
            };
        };
        return true;
    };

    var validateLetters = function(input) {
        var inputValue = input.value.toLowerCase();
        for (var i = 0; i < inputValue.length; i++) {
            if (inputValue.charCodeAt(i) >= 97 && inputValue.charCodeAt(i) <= 122) {
                letterValidation = true;
            }
            else {
                letterValidation = false;
                break;
            };
        };
    };

    var validateNumber = function(input) {
        var inputValue = input.value;
        for (var i = 0; i < inputValue.length; i++) {
            if (inputValue.charCodeAt(i) >= 48 && inputValue.charCodeAt(i) <= 57) {
                numberValidation = true;
            }
            else {
                numberValidation = false;
                break;
            };
        };
    };

    var validateLetterSpaceNumber = function(input) {
        var inputValue = (input.value.toLowerCase());
        for (var i = 0; i < inputValue.length; i++) {
            if (inputValue.charCodeAt(i) >= 97 && inputValue.charCodeAt(i) <= 122) {
                letterSpaceNumberValidation = true;
            }
            else if (inputValue.charCodeAt(i) === 32) {
                letterSpaceNumberValidation = true;
            }
            else if (inputValue.charCodeAt(i) >= 48 && inputValue.charCodeAt(i) <= 57) {
                letterSpaceNumberValidation = true;
            }
            else {
                letterSpaceNumberValidation = false;
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
        if (input.value === '') {
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
        if (input.classList.contains("border-red")) {
            input.value = '';
            input.classList.remove("border-red");
            if (document.querySelector(".input-" + input.name)) {
                document.querySelector(".input-" + input.name).remove();
            };
        };
    };

    firstName.onblur = function() {
        validateLetters(firstName);
        if (!requiredField(firstName)) {
            if (!letterValidation || firstName.value.length < 3) {
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
        if (!requiredField(lastName)) {
            if (!letterValidation || lastName.value.length < 3) {
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
        if (!requiredField(dni)) {
            if (!numberValidation || dni.value.length < 7) {
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
        if (!requiredField(phone)) {
            if (!numberValidation || phone.value.length !== 10) {
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

    address.onblur = function() {
        validateLetters(address);
        validateNumber(address);

        if (!requiredField(address)) {
            if (letterValidation || numberValidation || !onlyOneSpace(address.value)) {
                addRedBorder(address);
            }
            else {
                addGreenBorder(address);
            };
        };
    };

    address.onfocus = function() {
        removeBorder(address);
    };

    location.onblur = function() {
        validateLetterSpaceNumber(location);
        if (!requiredField(location)) {
            if (!letterSpaceNumberValidation || location.value.length < 3 || !onespace(location.value)) {
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

    postalCode.onblur = function() {
        validateNumber(postalCode);
        if (!requiredField(postalCode)) {
            if (!numberValidation || postalCode.value.length < 4 || postalCode.value.length > 5) {
                addRedBorder(postalCode);
            }
            else {
                addGreenBorder(postalCode);
            };
        };
    };

    postalCode.onfocus = function() {
        removeBorder(postalCode);
    };


    email.onblur = function() {
        if (!requiredField(email)) {
            if (!email.value.match(emailExpression)) {
                addRedBorder(email);
            }
            else {
            addGreenBorder(email);
            };
        };
    };

    email.onfocus = function() {
        removeBorder(email);
    };

    password.onblur = function() {
        validateLetters(password);
        validateNumber(password);
        if (!requiredField(password)) {
            if (letterValidation || numberValidation || password.value.length < 8) {
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
        if (!requiredField(repeatPassword)){
            if (repeatPassword.value !== password.value) {
            addRedBorder(repeatPassword);
            }
            else {
                addGreenBorder(repeatPassword);
            };
        };
    };

    repeatPassword.onfocus = function() {
        removeBorder(repeatPassword);
    };

    button.onclick = function(e) {
        e.preventDefault();

        var year = date.value.substring(0 , date.value.indexOf('-'));
        var month = date.value.substring(date.value.indexOf('-') + 1, date.value.indexOf('-') + 3);
        var day = date.value.substring(date.value.indexOf('-')+ 4 , date.value.indexOf('-') + date.value.length);
        var dateArr = [ month, day , year];
        var finalDate = dateArr.join('/');

        removeBorder(repeatPassword);

        var signUp = "https://basp-m2022-api-rest-server.herokuapp.com/signup?name="
        +firstName.value
        +"&lastName="+lastName.value
        +"&dni="+dni.value
        +"&dob="+finalDate
        +"&phone="+phone.value
        +"&address="+address.value
        +"&city="+location.value
        +"&zip="+postalCode.value
        +"&email="+email.value
        +"&password="+password.value;

        if (repeatPassword.value === password.value) {
            fetch(signUp)
            .then(function(pro) {
                return pro.json();
            })
            .then(function(data) {
                if (data.success) {
                    var success = [];
                    var inputField = [];
                    for (var key in data.data) {
                        success += ('\n' + '-' + key + ': ' + data.data[key] + '\n');
                        inputField += data.data[key] + ',';
                    };

                    var values = inputField.split(',');
                    for (var i = 0; i < values.length - 1; i++) {
                        localStorage.setItem(inputs[i + 1].name , values[i + 1])
                    };

                    convertDate(date);
                    localStorage.setItem('dob', date.value = convertedDate);
                    localStorage.setItem('Repeat-Password', repeatPassword.value);

                    modal.style.display = "flex";
                    modalTitle.innerText = "Succesfully Registration";
                    var pSuccess = document.createElement("p");
                    pSuccess.innerText ='Success: ' + data.success +'\n' + data.msg + '\n' + success;
                    modalButton.parentNode.insertBefore(pSuccess, modalButton.nextSibling);

                    closeModal.onclick = function() {
                        modal.style.display = "none";
                        pSuccess.innerText = '';
                    };0
                }
                else {
                    var fetchErrors = data.errors;
                    var errors= [];
                    for (var i = 0 ; i < fetchErrors.length; i++) {
                        errors += '\n' + '-' +fetchErrors[i].msg;
                    }
                    throw new Error (errors);
                    };
                })
            .catch(function(error) {
                modal.style.display = "flex";
                modalTitle.innerText = "ERROR!!"
                modalTitle.style.color = ("red")
                var pError = document.createElement("p");
                pError.style.color = ("red")
                pError.innerText = error;
                modalButton.parentNode.insertBefore(pError, modalButton.nextSibling);

                closeModal.onclick = function() {
                    modal.style.display = "none";
                    pError.innerText = '';
                };
            });
        }
        else {
            repeatPassword.classList.add("border-red");
            var inputError = document.createElement ("p");
            inputError.classList.add("input-" + repeatPassword.name);
            inputError.innerText = 'Passwords don`t match';
            repeatPassword.parentNode.insertBefore(inputError, repeatPassword.nextSibling);
        };
    };

    for (var i = 0; i < inputs.length -1; i++) {
        inputs[i + 1].value = localStorage.getItem(inputs[i + 1].name);
    };
};