const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', (e) => {
    // console.log(e.target, 'running')
    if (e.target.classList.contains('operations__tab')) {
        const clicked = e.target;
        console.log(clicked, "tabhere")

        tabs.forEach(t => {
            t.classList.remove('operations__tab--active')
        })
        tabsContent.forEach(c => {
            c.classList.remove('operations__content--active')

        })
        clicked.classList.add('operations__tab--active')

        document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
    }



})





































// tabsContainer.addEventListener('click', (e) => {
//     const clicked = e.target.closest('.operations__tab');
//     if (!clicked) return;
//     tabs.forEach((t) => {
//         t.classList.remove('operations__tab--active');
//     })
//     tabsContent.forEach(c => {
//         c.classList.remove('operations__content--active');
//     })
//     if (clicked.classList.contains('operations__tab')) {
//         console.log(clicked)
//         clicked.classList.add('operations__tab--active');

//         document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

//     }

// })