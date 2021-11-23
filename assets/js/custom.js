// -----------> jQuery
(function($) {
    "use strict";

    // preloader area here js
    // ------------------------ 
    $(window).on("load", function(){
        $(".preloder").fadeOut(1000);
    });


    // -----------------------
    // This will create a counter up js
    // -----------------------
    $('.counter span').counterUp({
        delay: 10,
        time: 1000
    });


    // -----------------------
    // This will create a owlCarousel
    // logo carousel area here js
    // -----------------------
    $('.footer-logo-carousel').owlCarousel({
        loop: true,
        items: 10,
        margin: 39,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 3,
                margin: 10
            },
            500: {
                items: 5,
                margin: 40
            },
            700: {
                items: 8,
                margin: 40
            },
            1000: {
                items: 10,
                margin: 60
            }
        }
    });


    // -----------------------
    //  telegram button area js
    // ------------------------ 
    $(window).scroll(function(){
        if($(this).scrollTop() > 80){
            $(".topUp-btn").fadeIn(1000);
        } else{
            $(".topUp-btn").fadeOut(1000);
        }
    });

    
    // -----------------------
    // This will create a sticky js
    // -----------------------
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-section").removeClass("sticky");
        } else {
            $(".header-section").addClass("sticky");
        }
    });


    // -----------------------
    // aos animate js
    // -----------------------
    AOS.init({
      duration: 1000,
      once: true
    });
    
}(jQuery));



// -----------> javaScript
// -----------------------
// header mobile menu area here
// ------------------------ 
const menuBar = document.querySelector(".mobile-menu-bar");
const sideBarMenu = document.querySelector(".off-canvas-menu");
const closeMenu = document.querySelector(".close-menu");
const bodyOverlay = document.querySelector(".body-overlay");
// menu bar 
menuBar.onclick = ()=>{
    sideBarMenu.classList.add("active");
    bodyOverlay.classList.add("active");
};
// close menu 
closeMenu.onclick = ()=>{
    sideBarMenu.classList.remove("active");
    bodyOverlay.classList.remove("active");
};
// body Overlay 
bodyOverlay.onclick = ()=>{
    sideBarMenu.classList.remove("active");
    bodyOverlay.classList.remove("active");
};
// --------------------------
// -JS area ends here
// --------------------------