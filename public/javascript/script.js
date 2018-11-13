// Registration

const registerButton = document.getElementById('register-button');

registerButton.addEventListener("click", (e) => {
    e.preventDefault();

    let data = {
        login: document.getElementById('register_login').value,
        password: document.getElementById('register_password').value,
        passwordConfirm: document.getElementById('confirm_password').value
    };


    console.log(data);

});