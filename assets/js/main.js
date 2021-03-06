


$(document).ready(function() {         
	
	/* ======= Fixed Header animation ======= */ 
	       
    $(window).on('scroll', function() {
         
         if ($(window).scrollTop() > 0 ) {
             $('#header').addClass('header-change');
         }
         else {
             $('#header').removeClass('header-change');             
         }
    }); 
    
    /* ======= Toggle between Signup & Login Modals ======= */ 
    $('#signup-link').on('click', function(e) {
        $('#signup-modal').modal();
        $('#login-modal').modal('toggle');
        e.preventDefault();
    });
    
    
    $('#login-link').on('click', function(e) {
        $('#login-modal').modal();
        $('#signup-modal').modal('toggle');
        e.preventDefault();
    });

	/*
	$('.navmenu-close').on('click', function(e){
		e.preventDefault();
		$("#myNavmenu").css('width', '0');
	})
	
	$('.navbar-toggle').on('click', function(e){
		$("#myNavmenu").css('width', '240');
	});
	
	*/
	
	/* ======= DEMO THEME CONFIG ====== */
	$('#navbar-toggle').click(function(e){
    	
		
		if($(this).hasClass('navmenu-open')){
          $("#myNavmenu").animate({
            left: "-=240" //same as the navemenu panel width
           }, 400);
          $(this).removeClass('navmenu-open').addClass('navmenu-hide');
         }
         else {      
         $("#myNavmenu").animate({
           left: "+=240" //same as the pnavmenu panel width
           }, 400);
          $(this).removeClass('navmenu-hide').addClass('navmenu-open');    
         }
	});
    
    $('#navmenu-close').on('click', function(e) {
        e.preventDefault();
        $('#navbar-toggle').click();
    });


    $('.hero-slider').flexslider({
        animation: "fade",
        animationLoop: true,
        directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, //remove the default control-nav
        slideshowSpeed: 8000,
        animationSpeed: 600,
        start: function(){
             $(this).find('.slide').css("display", "block"); //prevent flash of the images
        },
    });

});


    