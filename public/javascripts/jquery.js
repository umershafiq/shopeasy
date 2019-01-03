$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
})

// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...} 

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...} 

//  Medium devices (landscape tablets, 768px and up) 
// @media only screen and (min-width: 768px) {...} 

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...} 

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}