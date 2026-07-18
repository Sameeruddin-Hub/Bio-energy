const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries');


function getData() {

    fetch('https://fakestoreapi.com/products')
        .then((response) => {
            if (!response.ok) throw new Error(`HTTP error ${response.status}`);
            // console.log(response)
            return response.json()
        })
        .then((data) => {
            renderData(data);
        })
}

function renderData(products) {
    let html = '';
    console.log(products)

    products.forEach(product => {
        // const imgUrl = Array.isArray(product.image) ? product.image : JSON.parse(product.image);

        html += `
          <article class="country">
          <img class="country__img" src=${product.image} />
          <div class="country__data">
            <h3 class="country__name">${product.title}</h3>
            <h4 class="country__region">REGION</h4>
            <p class="country__row"><span>👫</span>POP people</p>
            <p class="country__row"><span>🗣️</span>LANG</p>
            <p class="country__row"><span>💰</span>CUR</p>
          </div>
        </article>
        
        `
    })
    countriesContainer.innerHTML = html;
    countriesContainer.style.opacity = 1;

}
getData();


// https://api.escuelajs.co/api/v1/products
// https://fakestoreapi.com/products