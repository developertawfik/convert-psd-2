$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    })


})