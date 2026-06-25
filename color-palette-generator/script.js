// const generateBtn = document.getElementById('generate-btn')
// console.log('generateBtn');

// const paletteContainer = document.querySelector('.palette-container')
// // const copyBtn = document.querySelector(".copy-btn");
// // console.log(paletteContainer)

// generateBtn.addEventListener('click', generatePalette);
// paletteContainer.addEventListener('click', (e) => {
//     // console.log(e)
//     if (e.target.classList.contains('copy-btn')) {
//         const hexValue = e.target.previousElementSibling.textContent;

//         navigator.clipboard.writeText(hexValue)
//             .then(() => showCopySuccess(e.target))
//             .catch((err) => console.log(err));

//     } else if (e.target.classList.contains('colors')) {
//         const hexValue = e.target.nextElementSibling.querySelector('.hex-value').textContent;

//         navigator.clipboard.writeText(hexValue)
//             .then(() => showCopySuccess(e.target.nextElementSibling.querySelector('.copy-btn')))
//             .catch((err) => console.log(err));
//     }
// })
// function showCopySuccess(copyBtn) {
//     copyBtn.classList.remove('fi-rr-copy-alt')
//     copyBtn.classList.add('fi-rr-check')
//     copyBtn.style.color = "#48bb78";

//     setTimeout(() => {
//         copyBtn.classList.remove('fi-rr-check')
//         copyBtn.classList.add('fi-rr-copy-alt')
//     }, 1500)
// }
// function generatePalette() {
//     const colors = []

//     for (let i = 0; i < 5; i++) {
//         colors.push(generateRandomColor())
//     }
//     setTimeout(() => {
//         generateBtn.textContent = "Hey fellas"
//     }, 5000);

//     generateBtn.style.background = "#000000";


//     updatePaletteDisplay(colors)


// }

// function generateRandomColor() {
//     const letters = "0123456789ABCDEF"
//     let color = "#"

//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//     }
//     return color
// }
// function updatePaletteDisplay(colors) {
//     const colorBoxes = document.querySelectorAll('.color-box')

//     colorBoxes.forEach((box, index) => {
//         const color = colors[index]
//         const colorDiv = box.querySelector('.color')
//         const hexValue = box.querySelector('.hex-value')

//         colorDiv.style.backgroundColor = color;
//         hexValue.textContent = color;
//     })


// }
// generatePalette();

const generateBtn = document.getElementById('generate-btn');
const paletteContainer = document.querySelector('.palette-container');

generateBtn.addEventListener('click', generatePalette)

function generatePalette() {
    const colors = [];
    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColors());
    }

    updateColorPalette(colors);
    // console.log(colors);

}

function generateRandomColors() {
    const letters = '0123456789ABCDF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateColorPalette(colors) {
    const colorBoxes = document.querySelectorAll('.color-box');
    // console.log(colors, "list");

    colorBoxes.forEach((box, index) => {
        const color = colors[index];
        console.log(colors);

        const colorDiv = box.querySelector('.color')
        const hexValue = box.querySelector('.hex-value')
        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
    })
}
paletteContainer.addEventListener('click', (e) => {
    console.log(e)
    if (e.target.classList.contains('copy-btn')) {
        const hexValue = e.target.previousElementSibling.textContent;
        console.log(e);


        navigator.clipboard.writeText(hexValue)
            .then(() => showCopySuccess(e.target))
            .catch((err) => console.log(err));
    }
})

function showCopySuccess(e) {
    e.classList.remove('fi-rr-copy-alt')
    e.classList.add('fi-rr-check')
    e.style.color = 'blue'

    setTimeout(() => {
        e.classList.remove('fi-rr-check')
        e.classList.add('fi-rr-copy-alt')
        e.style.color = "grey"
    }, 3000)
}