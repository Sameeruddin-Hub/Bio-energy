const userForm = document.getElementById('userForm');
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const address = document.getElementById('address')
const pincode = document.getElementById('pincode')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const submit = document.querySelector('.btn')
const successBlock = document.querySelector('.submit-success-container')
const formBlock = document.querySelector('.form-container')





userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // first check the inputs are filled or not
    let isRequired = checkInput([firstName, lastName, email, address, pincode, password, confirmPassword]);
    let isFormValid = isRequired;
    if (isRequired) {

        let isvalidEmail = checkEmail(email);
        let isvalidPincode = checkPincode(pincode);
        let isvalidPassword = checkPassword(password, confirmPassword,);
        // let isvalidEmail= checkEmail(email);
        isFormValid = isvalidEmail && isvalidPincode && isvalidPassword;


    }
    if (isFormValid) {
        formBlock.classList.add('hidden')
        successBlock.classList.remove('hidden')
        userForm.reset();
        document.querySelectorAll('.input-feedback').forEach(i => {
            i.classList.remove('show')
        })

        setTimeout(() => {
            formBlock.classList.remove('hidden')
            successBlock.classList.add('hidden')
        }, 4000)
    }
})

function checkInput(formFields) {
    // console.log(formFields)
    let isValid = true;

    formFields.forEach(input => {
        // console.log(msg);
        // console.log(input)
        if (input.value == "") {
            showError(input, `Please give valid ${input.id}`)
            // console.log(input.id)
            isValid = false;

        } else {
            showSuccess(input)
        }
    })
    return isValid;
}

function showError(input, msg) {
    // console.log(msg, input)
    let small = input.nextElementSibling
    small.textContent = msg;
    small.classList.add('show', 'red')

}
function showSuccess(input, msg) {
    let small = input.nextElementSibling;
    console.log(small);

    // msg.textContent = `Please give fill the ${input}`;
    small.className = 'input-feedback';


}

function checkEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email.value.trim())) {
        showSuccess(email)
        return true;
    } else {

        showError(email, ` ${email.value} is not a valid email`)

        return false;
    }
}
function checkPincode(pincode) {
    const isvlaid = !isNaN(pincode.value.trim());
    if (isvlaid) {
        showSuccess(pincode)
        return true;
    } else {

        showError(pincode, `${pincode.value} is not a valid pincode`)

        return false;
    }

}

function checkPassword(pw, mp) {
    if (pw.value.trim() === mp.value.trim()) {
        showSuccess(mp)
        return true;
    } else {
        showError(mp, ` ${mp.value} is not matching`)

        return false;

    }
}