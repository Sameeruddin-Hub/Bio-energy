// DOM Elements - all the elements we need from HTML
const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");
const strengthBar = document.querySelector(".strength-bar");
const strengthText = document.querySelector(".strength-container p");
const strengthLabel = document.getElementById("strength-label");

// Character sets
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

lengthSlider.addEventListener('input', () => {
    lengthDisplay.textContent = lengthSlider.value
})
generateButton.addEventListener('click', makePassword)
function makePassword() {
    const length = Number(lengthSlider.value)
    const includeUppercase = uppercaseCheckbox.checked // the checked property returns True or False
    const includeLowercase = lowercaseCheckbox.checked
    const includeNumbercase = numbersCheckbox.checked
    const inlcudeSymbols = symbolsCheckbox.checked

    if (!includeUppercase && !includeLowercase && !includeLowercase && !inlcudeSymbols) {
        alert('Please select at least one char type')
        return;
    }
    const newPassword = createRandomPassword(length, includeUppercase, includeLowercase, includeNumbercase, inlcudeSymbols)
    passwordInput.value = newPassword;

    updateStrengthmeter(newPassword)
}
function updateStrengthmeter(password) {
    const passwordLength = password.length;
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSymbols = /[!@#$%^&*()-_=+[\]{}|;:,.<>?]/.test(password)

    let strenghtScore = 0;
    console.log(password.length)
    strenghtScore += Math.min(password.length * 2, 40)
    console.log(strenghtScore)

    if (hasUppercase) strenghtScore += 15
    if (hasLowercase) strenghtScore += 15
    if (hasNumber) strenghtScore += 15
    if (hasSymbols) strenghtScore += 15

    if (password.length < 8) {
        strenghtScore = Math.min(strenghtScore, 40)
    }
    const safeScore = Math.max(5, Math.min(100, strenghtScore));
    console.log(safeScore)
    // strengthBar.style.width = safeScore + '%';
    strengthBar.style.width = safeScore + '%';

    let strengthLabelText = '';
    let barColor = '';

    if (safeScore < 40) {
        strengthLabelText = 'weak'
        barColor = '#fc8181';
    } else if (safeScore < 70) {
        strengthLabelText = 'Medium'
        barColor = '#fbd38d';
    } else {
        strengthLabelText = 'Strong'
        barColor = '#089637';
    }

    strengthBar.style.backgroundColor = barColor;
    strengthLabel.textContent = strengthLabelText;
}
function createRandomPassword(length, includeUppercase, includeLowercase, includeNumbercase, inlcudeSymbols) {
    let allCharacters = '';
    if (includeUppercase) {
        allCharacters += uppercaseLetters;
    }
    if (includeLowercase) {
        allCharacters += lowercaseLetters;
    }
    if (includeNumbercase) {
        allCharacters += numberCharacters;
    }
    if (inlcudeSymbols) {
        allCharacters += symbolCharacters;
    }
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length)
        // here we are claculating with the lenght of all selected cahreagers , since the index should be pick from selected chars
        password += allCharacters[randomIndex];
    }
    return password;
}

// lengthSlider.addEventListener('input', ()
// => {
//     lengthDisplay.textContent = lengthSlider.value
// });
// generateButton.addEventListener("click", makePassword)
// function makePassword() {
//     const length = Number(lengthSlider.value)
//     const includeUppercase = uppercaseCheckbox.checked
//     const includeLowercase = lowercaseCheckbox.checked
//     const includeNumbercase = numbersCheckbox.checked
//     const includeSymbols = symbolsCheckbox.checked

//     if (!includeUppercase && !includeLowercase && !includeNumbercase && !includeSymbols) {
//         alert('Please select at least one char type')
//         return;
//     }
//     const newPassword = createRandomPassword(length, includeUppercase, includeLowercase, includeNumbercase, includeSymbols)
//     passwordInput.value = newPassword;

//     updateStrengthMeter(newPassword);

// }
// function updateStrengthMeter(password) {
//     const passwordLength = password.length;
//     const hasUppercase = /[A-Z]/.test(password)
//     const hasLowercase = /[a-z]/.test(password)
//     const hasNumbers = /[0-9]/.test(password)
//     const hasSymbols = /[!@#$%^&*()-_=+[\]{}|;:,.<>?]/.test(password)

//     let strengthScore = 0;

//     // here the .min will get the minimum value
//     // but this will make sure that 'at maximum' you would get 40
//     strengthScore += Math.min(passwordLength * 2, 40)
//     if (hasUppercase) strengthScore += 15;
//     if (hasLowercase) strengthScore += 15;
//     if (hasNumbers) strengthScore += 15;
//     if (hasSymbols) strengthScore += 15;

//     //enforece minumum score for every short password
//     if (passwordLength < 8) {
//         strengthScore = Math.min(strengthScore, 40)
//     }

//     const safeScore = Math.max(5, Math.min(100, strengthScore))
//     strengthBar.style.width = safeScore + '%';

//     let strengthLabelText = ''
//     let barColor = ''
//     if (strengthScore < 40) {
//         // weak password
//         barColor = '#fc8181'
//         strengthLabelText = "Weak"
//     } else if (strengthScore < 70) {
//         barColor = '#fbd38d';
//         strengthLabelText = "Medium";

//     } else {
//         barColor = '#089637';
//         strengthLabelText = "Strong";
//     }

//     strengthBar.style.backgroundColor = barColor;
//     strengthLabel.textContent = strengthLabelText;
// }
// function createRandomPassword(length, includeUppercase, includeLowercase, includeNumbercase, includeSymbols) {
//     let allCharacters = '';
//     if (includeUppercase) {
//         allCharacters += uppercaseLetters;
//     }
//     if (includeLowercase) {
//         allCharacters += lowercaseLetters;
//     }
//     if (includeNumbercase) {
//         allCharacters += numberCharacters;
//     }
//     if (includeSymbols) {
//         allCharacters += symbolCharacters;
//     }

//     let password = "";

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allCharacters.length)

//         password += allCharacters[randomIndex];
//     }
//     return password;
// }
// window.addEventListener('DOMContentLoaded', makePassword);

// copyButton.addEventListener('click', () => {
//     if (!passwordInput.value) return;

//     navigator.clipboard.writeText(passwordInput.value)
//         .then(() => showCopySuccess())
//         .catch((error) => {
//             console.log("Could not copy:", error)
//         })
// })

// function showCopySuccess() {
//     // alert('success')
//     copyButton.classList.remove('fi', 'fi-rr-copy-alt')
//     copyButton.classList.add('fi', 'fi-rr-check-circle')

//     setTimeout(() => {
//         copyButton.classList.remove('fi', 'fi-rr-check-cirlce')

//         copyButton.classList.add('fi', 'fi-rr-copy-alt')

//     }, 1500);

// }

