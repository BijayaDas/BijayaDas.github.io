$(document).ready(function() {
   
    /* ======= Owl Carousel ======= */    
    /* Ref: http://owlgraphic.com/owlcarousel/index.html */
    
    $("#home-slideshow, #home-slideshow1, #home-slideshow2, #home-slideshow3").owlCarousel({
        autoplay:true,       
        autoPlayTimeout : 6000,
        smartSpeed : 400,
        autoplayHoverPause:true,
        items: 1,
        loop: true
        
    });

    // $("#home-slideshow1").owlCarousel({
    //     autoplay:true,       
    //     autoPlayTimeout : 6000,
    //     smartSpeed : 400,
    //     autoplayHoverPause:true,
    //     items: 1,
    //     loop: true
        
    // });

    // $("#home-slideshow2").owlCarousel({
    //     autoplay:true,       
    //     autoPlayTimeout : 6000,
    //     smartSpeed : 400,
    //     autoplayHoverPause:true,
    //     items: 1,
    //     loop: true
        
    // });

    // $("#home-slideshow3").owlCarousel({
    //     autoplay:true,       
    //     autoPlayTimeout : 6000,
    //     smartSpeed : 400,
    //     autoplayHoverPause:true,
    //     items: 1,
    //     loop: true
        
    // });


    $("#press-slideshow").owlCarousel({      
        autoplay:true,       
        autoPlayTimeout : 6000,
        loop: true,
        smartSpeed : 400,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            900:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
                
    });
    
    $("#jobs-promo-slideshow").owlCarousel({
        
        nav: true, // Show next and prev buttons
        //navText: false,
        items : 1,
        autoplay:true,       
        autoPlayTimeout : 6000,
        loop: true,
        smartSpeed : 400,
        autoHeight : true,
        loop: true
        
    });

});