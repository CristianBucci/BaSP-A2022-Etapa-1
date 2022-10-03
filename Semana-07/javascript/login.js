window.onload = function() {

    var formInputEmail = document.getElementById("form-input-email");
    var formInputPassword = document.getElementById("form-input-password");
    var buttonLogin = document.getElementById("login-button");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputValidation;

    var borderRedRequired = function(input) {
        var inputError = document.createElement("p");
        input.classList.add("border-red");
        inputError.classList.add("input-" + input.name);
        inputError.innerHTML = "Required " + input.name;
        input.parentNode.insertBefore(inputError, input.nextSibling);
    };

    var borderRed = function(input) {
        input.classList.add("border-red");
        var inputError = document.createElement("p");
        inputError.classList.add("input-" + input.name);
        inputError.innerHTML = "Invalid " + input.name;
        input.parentNode.insertBefore(inputError, input.nextSibling);
    };

    var borderGreen = function(input) {
        input.classList.add("border-green");
    };

    var removeBorder = function(input) {
        input.classList.remove("border-red");
        input.classList.remove("border-green");
        if (document.querySelector(".input-" + input.name)) {
            document.querySelector(".input-" + input.name).remove();
        };
    };

    formInputEmail.onblur = function() {
        if (formInputEmail.value === '') {
            borderRedRequired(formInputEmail);
        }
        else if (!formInputEmail.value.match(emailExpression)) {
            borderRed(formInputEmail);
        }
        else {
            borderGreen(formInputEmail);
        };
    };

    formInputEmail.onfocus = function() {
        removeBorder(formInputEmail);
    };

    formInputPassword.onblur = function() {
        var inputValue = (formInputPassword.value).toLowerCase();
        for (var i = 0; i < inputValue.length;i++) {
            if (inputValue.charCodeAt(i) >= 97 && inputValue.charCodeAt(i) <= 122) {
                inputValidation = true;
            }
            else if (inputValue.charCodeAt(i) >= 48 && inputValue.charCodeAt(i) <= 57) {
                inputValidation = true;
            }
            else {
                inputValidation = false;
                break
            };
        };
        if (formInputPassword.value === '') {
            borderRedRequired(formInputPassword);
        }
        else if (!inputValidation || formInputPassword.value === "" || formInputPassword.value.length < 8) {
            borderRed(formInputPassword);
        }
        else {
            borderGreen(formInputPassword);
        };
    };

    formInputPassword.onfocus = function() {
        removeBorder(formInputPassword);
    };


    buttonLogin.onclick = function (e) {
        e.preventDefault();

        var invalidEmail = 'Invalid email:';
        var invalidPassword = 'invalid password:';
        var validEmail = 'Email:';
        var validPassword = 'Password:';

        if (formInputEmail.classList.contains("border-red") && formInputPassword.classList.contains("border-red")) {
            invalidEmail += formInputEmail.value;
            invalidPassword += formInputPassword.value;
            alert(invalidEmail + '\n' + invalidPassword);
        }
        else if (formInputEmail.classList.contains("border-red")) {
            invalidEmail += formInputEmail.value;
            alert(invalidEmail);
        }
        else if (formInputPassword.classList.contains("border-red")) {
            invalidPassword += formInputPassword.value;
            alert(invalidPassword);
        }
        else if (formInputEmail.value == '' || formInputPassword.value == '') {
            formInputEmail.classList.add("border-red");
            formInputPassword.classList.add("border-red");
            alert('Required fields');
        }
        else {

            validEmail += formInputEmail.value;
            validPassword += formInputPassword.value;

            var login = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email='+ formInputEmail.value +
            '&password=' + formInputPassword.value;

            fetch(login)
            .then(function(pro){
                return pro.json();
            })
            .then(function(data){
                if (!data.success){
                    throw new Error (data.msg + '\n' + 'Success: ' + data.success);
                }
                else {
                alert('\n' + 'Succes ' + data.success + '\n' + validEmail + '\n' + validPassword + '\n' +
                'Request: ' + data.msg);
                }
            })
            .catch(function(error){
                alert(error);
            })
        };
    };
};