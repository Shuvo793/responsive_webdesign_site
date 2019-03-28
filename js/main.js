$(document).ready(function () {
    //humbergur menu
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'

    });

    //page-slider
     $('.slider-active').slick({
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        arrows:false,
    });
     //testmonial-slider
     $('.testmonial-active').slick({
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:500,
        arrows:false,
         dots: true,
    });
     //brand-slider
     $('.brand-active').slick({
        infinite:true,
        slidesToShow:5,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:500,
        arrows:false,
         dots: false,
         responsive: [
             {
                 breakpoint: 991,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 1,
                 }
             },
             {
                 breakpoint: 767,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
             },
             {
                 breakpoint: 576,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1
                 }
             }
             // You can unslick at a given breakpoint now by adding:
             // settings: "unslick"
             // instead of a settings object
         ]
     });
     //page-counter-area
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

});
