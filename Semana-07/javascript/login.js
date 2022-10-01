window.onload = function() {

    var formInputEmail = document.getElementById("form-input-email");
    var formInputPassword = document.getElementById("form-input-password");
    var buttonLogin = document.getElementById("login-button");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputValidation;

    formInputEmail.onblur = function() {

        if(formInputEmail.value === '') {
            formInputEmail.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par");
            inputError.innerHTML = "Required field!!";
            formInputEmail.parentNode.insertBefore(inputError,  formInputEmail.nextSibling);
        }
        else if(!formInputEmail.value.match(emailExpression)) {
            formInputEmail.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par");
            inputError.innerHTML = "Invalid email!!";
            formInputEmail.parentNode.insertBefore(inputError,  formInputEmail.nextSibling);
        }
        else {
            formInputEmail.classList.add("border-green");
        };
    };

    formInputEmail.onfocus = function() {

        formInputEmail.value = '';
        formInputEmail.classList.remove("border-red");

        if(document.querySelector(".input-par")) {
            document.querySelector(".input-par").remove();
        };
    };

    formInputPassword.onblur = function() {

        var inputValue = (formInputPassword.value).toLowerCase();

        for(var i = 0; i < inputValue.length;i++) {
            if((inputValue.charCodeAt(i) >= 97) && (inputValue.charCodeAt(i) <= 122)) {
                inputValidation = true;
            }
            else if((inputValue.charCodeAt(i) >= 48) && ((inputValue.charCodeAt(i) <= 57))) {
                inputValidation = true;
            }
            else {
                inputValidation = false;
                break
            };
        };

        if(formInputPassword.value === '') {
            formInputPassword.classList.add("border-red");
            var inputError = document.createElement("p");
            inputError.classList.add("input-par-pass");
            inputError.innerHTML = "Required field!!";
            formInputPassword.parentNode.insertBefore(inputError,  formInputPassword.nextSibling);
        }
        else if(!inputValidation || formInputPassword.value === "" || formInputPassword.value.length < 8) {
            formInputPassword.classList.add("border-red");
            var inputErrorPassword = document.createElement("p");
            inputErrorPassword.classList.add("input-par-pass");
            inputErrorPassword.innerHTML = "Enter a valid password!!";
            formInputPassword.parentNode.insertBefore(inputErrorPassword, formInputPassword.nextSibling);
        }
        else {
            formInputPassword.classList.add("border-green");
        };
    };

    formInputPassword.onfocus = function() {

        formInputPassword.value = '';
        formInputPassword.classList.remove("border-red");
        if(document.querySelector(".input-par-pass")) {
            document.querySelector(".input-par-pass").remove();
        };
    };

    buttonLogin.onclick = function (e) {

        e.preventDefault();

        var invalidEmail = 'Invalid email:';
        var invalidPassword = 'invalid password:';
        var validEmail = 'Email:';
        var validPassword = 'Password:';

        if(formInputEmail.classList.contains("border-red") && formInputPassword.classList.contains("border-red")) {
            invalidEmail += formInputEmail.value;
            invalidPassword += formInputPassword.value;
            alert(invalidEmail + '\n' + invalidPassword);
        }
        else if(formInputEmail.classList.contains("border-red")) {
            invalidEmail += formInputEmail.value;
            alert(invalidEmail);
        }else if(formInputPassword.classList.contains("border-red")) {
            invalidPassword += formInputPassword.value;
            alert(invalidPassword);
        }else {
            if(formInputEmail.value == '' || formInputPassword.value == '') {
                formInputEmail.classList.add("border-red");
                formInputPassword.classList.add("border-red");
                alert('Required fields');
            }else {
            validEmail += formInputEmail.value;
            validPassword += formInputPassword.value;
            alert('Succes ' + '\n' + validEmail + '\n' + validPassword);
            };
        };
    };
};