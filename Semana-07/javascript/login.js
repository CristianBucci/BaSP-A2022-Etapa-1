window.onload = function() {

    var formInputEmail = document.getElementById("form-input-email");
    var formInputPassword = document.getElementById("form-input-password");
    var buttonLogin = document.getElementById("login-button");
    var modal = document.getElementById("background");
    var modalTitle = document.getElementById("modal-title");
    var modalButton = document.getElementById("modal-button");
    var closeModal = document.getElementsByClassName("close")[0];
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

        var validEmail = 'Email:';
        var validPassword = 'Password:';

            validEmail += formInputEmail.value;
            validPassword += formInputPassword.value;

            var login = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email='+ formInputEmail.value +
            '&password=' + formInputPassword.value;

            fetch(login)
            .then(function(pro) {
                return pro.json();
            })
            .then(function(data) {
                if(!data.success && formInputEmail.classList.contains("border-green") &&
                formInputPassword.classList.contains("border-green")){
                    throw new Error (data.msg)
                }
                else if (!data.success) {
                    var fetchErrors = data.errors;
                    var errors =[];
                    for(var i = 0 ; i < fetchErrors.length; i++) {
                        errors += '\n' + fetchErrors[i].msg;
                    }
                    throw new Error (errors);
                }
                else {

                    modal.style.display = "flex";
                    modalTitle.innerText = "Succesfully Registration";
                    var pSuccess = document.createElement("p");
                    pSuccess.innerText = 'Succes ' + data.success + '\n' + validEmail + '\n' + validPassword + '\n' +
                    data.msg;
                    modalButton.parentNode.insertBefore(pSuccess, modalButton.nextSibling);

                    closeModal.onclick = function() {
                        modal.style.display = "none";
                        pSuccess.remove();
                    };
                };
            })
            .catch(function(error) {
                modal.style.display = "flex";

                modalTitle.innerText = "ERROR";
                var pError = document.createElement("p");
                pError.style.color = ("red")
                pError.innerText = error;
                modalButton.parentNode.insertBefore(pError, modalButton.nextSibling);

                closeModal.onclick = function() {
                    modal.style.display = "none";
                    pError.remove();
                };
            });
        };
    };
