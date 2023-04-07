const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

const checkRequired = (inputArr) => {
    inputArr.forEach(input => {
        if(input.value === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    });
}

const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
const checkEmail = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}

form.addEventListener('submit', function (e) {
    e.preventDefault();


    checkRequired([username, email, password, password2])

    // if (username.value === '') {
    //     showError(username, 'Username is required')
    // } else {
    //     showSuccess(username);
    // }

    // if (email.value === '') {
    //     showError(email, 'Email is required')
    // } else if (!checkEmail(email.value)) {
    //     showError(email, 'Input a valid email')
    // } else {
    //     showSuccess(email);
    // }

    // if (password.value === '') {
    //     showError(password, 'Password is required')
    // } else {
    //     showSuccess(password);
    // }

    // if (password2.value === '') {
    //     showError(password2, 'Password 2 is required')
    // } else {
    //     showSuccess(password2);
    // }
})