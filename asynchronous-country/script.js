const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries');


function getData() {

    fetch('https://fakestoreapi.com/products')
        .then((response) => {
            console.log(response)
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
// getData();


// https://api.escuelajs.co/api/v1/products
// https://fakestoreapi.com/products

function getJSON(url, errorMessage = "somthing went wrong") {
    return fetch(url).then(response => {
        console.log(response)

        if (!response.ok)
            throw new Error(`Country not found ${response.status}`);

        return response.json();
    })
}

const getCountryData = function (country) {
    getJSON(`https://fakestoreapi.com/products`)
        .then(data => {
            renderData(data)

            if (!neighbour) throw new Error('No neighbour found!');
            return getJSON(`https://fakestoreapi.com/products`, 'COuntry not found')

        })
        .then(data => renderData(data))
        .catch(err => alert(err))
        // .catch(err => renderError(`Something went wrong 🔥🔥${err.message}. Try again`))
        .finally(() => {
            // to perform something to happen alwasy like spining wheel

        })

}

// Handling Rejected Promises

// const getCountryData = function (country) {
//     // getJSON()
//     fetch('https://fakestoreapi.com/products')
//         .then((response) => response.json())
//         .then(response => {
//             console.log(response)

//             if (!response.ok)
//                 throw new Error(`Country not found ${response.status}`);

//             return response.json();
//         })

//         .then(data => renderData(data))

//     .then((response) => response.json(), err => alert(err))

//     if(!neighbour) return ;

//     return fetch(`https://fakestoreapi.com/products`)
//         .then(response => response.json())
//         .then(data => renderData(data))
//         .catch(err => alert(err))
//         // .catch(err => renderError(`Something went wrong 🔥🔥${err.message}. Try again`))
//         .finally(() => {
//             // to perform something to happen alwasy like spining wheel

//         })
// }
const whereAmi = function (lat, lng) {
    fetch(`https://fakestoreapi.com/products`)
        .then(response => {
            if (!response.ok) throw new Error(`Problem with the API`)

            return response.json()
        })
        .then(data => {
            return fetch(`https://fakestoreapi.com/products`);
        })
        .then(res => {
            if (!res.ok) throw new Error('Problem with the API')
            return res.json()
        })
        .then(data => {
            return renderData(data)
        })
        .catch(err => {
            renderError(err)
        })
}

// javacript runtime 
// console.log('Test start')
// setTimeout(() => console.log('0 Sec timer'), 0)
// Promise.resolve('Resolved Promise 1').then(res => console.log(res));
// Promise.resolve('Resolveed Promise 2').then(res => {
//     for (let i = 0; i < 1000000; i++) { }
//     console.log(res)
// });

// console.log('Test End')

const lotteryPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            resolve('You win !')
        } else {
            // reject('You lost!')
            reject(new Error('You lost the money!'))
        }
    }, 2000)

})

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err))

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

wait(1).then(() => {
    console.log('1 Second passed');
    return wait(1);
})


Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.error(x));

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error("Image not found"));
        });
    })
}

let currentImg;

createImage('image-1.png').then(img => {
    currentImg = img;
    console.log("Image 1 Loaded");
    return wait(2);
}).then(() => {
    currentImg.style.display = 'none';
    return createImage('image-2.jpg');

}).then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
}).then(() => {
    currentImg.style.display = 'none';
}).catch((err) => console.log(err))



// Async and await
// const whereAmI = async function (country) {
//     const response = await fetch('https://jsonplaholder.typecpde.com/1');

//     const data = await response.json();

//     return renderData(data);
// }

// whereAmI();

const whereAmI = async function (country) {
    try {
        const response = await fetch('https://jsonplaholder.typecpde.com/1');

        if (!response.ok) throw new Error("somthing went wrong");
        const data = await response.json();

        return renderData(data);
    } catch (error) {
        console.log(error, "went wrong")
    }

}

    (async function () {
        try {
            const city = await whereAmI();
            console.log(`2: ${city}`);
        } catch (err) {
            console.log(`2: ${err.message}`);
        }
        console.log(`3: Finished getting location`);
    }())


// 
const get3Countries = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://jsonplaholder.com${c1}`);
        // const [data2] = await getJSON(`https://jsonplaholder.com${c2}`);
        // const [data3] = await getJSON(`https://jsonplaholder.com${c3}`);
        console.log([data1.capital, data2.capital, data3.capital]);

        // Fecthing all at the same time
        const data = await Promise.all([getJSON(`https://jsonplaholder.com${c1}`),
        getJSON(`https://jsonplaholder.com${c1}`),
        getJSON(`https://jsonplaholder.com${c1}`)]);
        console.log(data.map(data => d[0].capital));

    } catch (err) {
        console.log(err);
    }
}

get3Countries('portugal', 'canada', 'tanzania')


// promise Race
const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long!`))
        }, sec * 1000)
    })
}

Promise.race([
    getJSON(`https://jsonplaholder.com${c1}`),
    timeout(),
]).then(res => { console.log(res[0]) })
    .catch(err => console.error(err));


//Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject("Error"),
    Promise.resolve('Another success'),
]).then(res => console.log(res))
    .catch(err => console.log(err));

// Challenge
const loadNpause = async function () {
    try {
        let img = await createImage('image-1.png');
        await wait(2);

        img.style.display = 'none';

        //load 2
        img = await createImage('image-2.jpg');
        await wait(2);

        img.style.display = 'none';

    } catch (err) {

    }
}
loadNpause();

// Part 2
const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));

        const imgsEl = await Promise.all(imgs);

    } catch (err) {
        console.error(err)
    }
}
loadAll([`image-1.png`, `image-2.jpg`])

