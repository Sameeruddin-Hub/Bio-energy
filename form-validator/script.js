const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

console.log(username)
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const isRequiredValid = checkRequired([username, email, password, confirmPassword]);

    let isFormValid = isRequiredValid;

    if (isRequiredValid) {
        const isUsernameValid = checkLength(username, 3, 15)
        const isEmailValid = checkEmail(email);
        const isPasswordValid = checkLength(password, 6, 25);
        const isPasswordsMatch = checkPasswordsMatch(password, confirmPassword);
        isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isPasswordsMatch;
    }
    if (isFormValid) {
        alert("Registration successfull!")
        form.reset();
        document.querySelectorAll('.form-group').forEach((group) => {
            group.className = 'form-group'
        })
    }
})
function checkRequired(inputArray) {
    let isValid = true

    inputArray.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${formatFieldName(input)} is Required`);
            isValid = false;
        } else {
            showSuccess(input)
        }
    })
    return isValid;

}
function formatFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const small = formGroup.querySelector('small')
    small.innerText = message;
}
function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success"
}

function checkEmail(email) {
    // Email regex that covers most common email formats
    const eamilRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (eamilRegex.test(email.value.trim())) {
        showSuccess(email)
        return true
    } else {
        showError(email, "Email is not valid")
        return false
    }
}
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "password is not matching");
        return false
    }
    return true;
}
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${formatFieldName(input)}must be at least ${min} characters `)
        return false
    } else if (input.value.length > max) {
        showError(input, `${formatFieldName(input)}must be at least ${max} characters `)
        return false
    } else {
        showSuccess(input);
        return true
    }
}