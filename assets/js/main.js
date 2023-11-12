$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        loop:true,
        margin:10,
        nav:true,
        autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/images/free_icon_1.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/images/close.png";
    }
}