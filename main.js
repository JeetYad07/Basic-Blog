const toggle = document.querySelector('#header .toggle-btn')
const collapse = document.querySelectorAll('#header .collapse')

toggle.addEventListener('click', function () {
    collapse.forEach((col) => col.classList.toggle('collapse-toggle'))
})

//Masonary
new Masonry('#posts .grid', {
    itemSelector: '.grid-item',
    gutter: 20,
    columnWidth: 200,
    // columnheight: 100,
})

// Swipper lib init
new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay: {
        delay: 3000,
    },
    // responsive brakpoints
    breakpoints: {
        '@0': {
            slidesPerView: 2,
        },
        // 888px
        '@1.00': {
            slidesPerView: 3,
        },
        // 1110px
        '@1.25': {
            slidesPerView: 4,
        },
        // 1330px
        '@1.50': {
            slidesPerView: 5,
        },
    },
})

//Sticky Navigation
window.onscroll = function () {
    myFunction()
}
//Get the current value

let navbar = document.getElementById('header')
//Get the navbar position
let sticky = navbar.offsetTop

//Sticky function
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}
