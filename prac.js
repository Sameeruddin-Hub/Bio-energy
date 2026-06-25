// async function getProducts() {
//     const response = await fetch('https://dummyjson.com/products');
//     const data = await response.json();
//     console.log(data);

//     data.products.forEach(item => {
//         const html = '';


//     });
// }

// getProducts();

function toggleSubmenu(button) {
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

}