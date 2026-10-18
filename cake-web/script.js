/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav__menu'),
    navToggle = document.getElementById('nav__toggle'),
    navClose = document.getElementById('nav__close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linAction = () => {
    navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => {
    n.addEventListener('click', linAction)
})

/*=============== HOME SWIPER ===============*/
const swiperHome = new Swiper('.home__swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    grabCursor: true,
    speed: 800,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: ['-120%', 0, -500],
            rotate: [0, 0, -45],
            opacity: 0,
        },
        next: {
            translate: ['120%', 0, -500],
            rotate: [0, 0, 45],
            opacity: 0,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,

    }

    // // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

/*=============== CHANGE HEADER STYLES ===============*/


/*=============== PRODUCTS SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
