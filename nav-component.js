class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-content">
            <div class="nav-bar-container">
            <div class='nav-container-top'>
            <a href="index.html" class="navbar-linkblock"> <div class="navbar-logo-text">
                    Sai Bioenergy
                </div> </a>
                <div class="navbar-menu">
                    <div class="nav-link-wrapper">
                        <a href="about.html" class="nav-link navigation link-1">About</a>
                    </div>
                    <div class="nav-link-wrapper">
                        <a href="about" class="nav-link navigation link-1">Services</a>
                    </div>
                    <div class="nav-link-wrapper">
                        <a href="about" class="nav-link navigation link-1">Projects</a>
                    </div>
                    <div class="nav-link-wrapper">
                        <a href="about" class="nav-link navigation link-1">Blogs</a>
                    </div>
                    <div class="nav-link-wrapper">
                        <a href="about" class="nav-link navigation link-1">Testimonials</a>
                    </div>
                </div>
                <div class='nav-cta-menu'> 
                <div class="navbar-cta-wrapper">
                    <a href="" class="cta">
                        <div class="cta-text">
                            Contact Us
                        </div>
                        <div class="cta-icon-wrap">
                         <i class="icon icon-arrow"></i>
                            
                        </div>
                    </a>
                </div>
                <button class="navbar-hamburger-btn">
                    <div class="navbar-lottie-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 730 630" width="730" height="630" preserveAspectRatio="xMidYMid meet"
                            style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                            <defs>
                                <clipPath id="__lottie_element_2">
                                    <rect width="730" height="630" x="0" y="0"></rect>
                                </clipPath>
                            </defs>
                            <g clip-path="url(#__lottie_element_2)">
                                <g class="stroke-out-1" transform="matrix(1,0,0,1,365,315)" opacity="1" style="display: block;">
                                    <g class='stroke-in' opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0"
                                            stroke="rgb(255, 255, 255)" stroke-opacity="1" stroke-width="55"
                                            d=" M-327,-176.5 C-327,-176.5 327,-176.5 327,-176.5"></path>
                                    </g>
                                </g>
                                <g class="stroke-out-2" transform="matrix(1,0,0,1,365,315)" opacity="1" style="display: block;">
                                    <g class='stroke-in' opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0"
                                            stroke="rgb(255, 255, 255)" stroke-opacity="1" stroke-width="55"
                                            d=" M-327,176.5 C-327,176.5 327,176.5 327,176.5"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </button>
                </div>
                
                
            </div>
                <div class="navbar-menu-mobile hide">
                    <div class="nav-link-wrapper ">
                        <a href="about.html" class="nav-link navigation mobile-menu link-1">About</a>
                    </div>
                    <div class="nav-link-wrapper ">
                        <a href="about" class="nav-link navigation mobile-menu link-2">Services</a>
                    </div>
                    <div class="nav-link-wrapper ">
                        <a href="about" class="nav-link navigation mobile-menu link-3">Projects</a>
                    </div>
                    <div class="nav-link-wrapper ">
                        <a href="about" class="nav-link navigation mobile-menu link-4">Blogs</a>
                    </div>
                    <div class="nav-link-wrapper ">
                        <a href="about" class="nav-link navigation mobile-menu link-5">Testimonials</a>
                    </div>
                       <div class="navbar-cta-wrapper-mobile-cta">
                    <a href="" class="cta">
                        <div class="cta-text">
                            Contact Us
                        </div>
                        <div class="cta-icon-wrap">
                            <img src="" alt="">
                        </div>
                    </a>
                </div>
                </div>
            </div>
        </nav>
        `;
        this.setActiveLink();
        this.setHamburger();
        document.body.style.visibility = 'visible';
    }

    setActiveLink() {
        const current = location.pathname.split('/').pop() || 'index.html';
        console.log(current);
        this.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === current) {
                link.classList.add('active-menu');
            }

        });
    }
    
    setHamburger() {
        const btn =this.querySelector('.navbar-hamburger-btn');
        const menu =this.querySelector('.navbar-menu-mobile');

       btn.addEventListener('click', () => {
            menu.classList.toggle('hide');
        })
    
     window.addEventListener('resize', () => {
        if (window.innerWidth > 991) {
            menu.classList.add('hide');
        }
    });
    };
        
    
}
customElements.define('nav-bar', NavBar);

class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML=``
    }
}
customElements.define('footer', Footer);

// menu button
// document.querySelector('.navbar-hamburger-btn').addEventListener("click", () => {
//     document.querySelector('.navbar-menu-mobile').classList.remove('hide');

// })
