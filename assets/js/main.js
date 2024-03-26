
 (function($) {
    "use strict";
    $(window).on('load', function() {
        $('#portfolio').mixItUp();
         $('#preloader').fadeOut();
        $(window).on('scroll', function() {
             if ( $(window).scrollTop() >100 ) {
                $('.scrolling-navbar').addClass('top-nav-collapse');  
              }
              else { 
                  $('.scrolling-navbar').removeClass('top-nav-collapse');
              } 
        });

        function close_toggle() {
            if ($(window).width() <= 768) { 
                $('.navbar-collapse a').on('click',
                function() {
                    $('.navbar-collapse').collapse('hide');
                }); 
            } else { 
                $('.navbar .navbar-inverse a').off('click'); 
            }
        }
        close_toggle();
        $(window).resize(close_toggle);
        $("#flyVideo").prop('controls', false);
        $('.navbar-nav').onePageNav({ currentClass: 'active' });
        $('.mobile-menu').slicknav({ prependTo: '.navbar-header', parentTag: 'liner', allowParentLinks: true, duplicate: true, label: '', closedSymbol: '<i class="lni-chevron-right"></i>', openedSymbol: '<i class="lni-chevron-down"></i>', });
        var wow = new WOW({ mobile: false });
        wow.init();
        $('.counter').counterUp({ time: 1000 });
        var owl = $("#testimonials");
        owl.owlCarousel({ loop: true, nav: false, dots: true, center: true, margin: 15, slideSpeed: 1000, stopOnHover: true, autoPlay: true, responsiveClass: true, responsiveRefreshRate: true, responsive: { 0: { items: 1 }, 768: { items: 1 }, 960: { items: 1 }, 1200: { items: 1 }, 1920: { items: 1 } } });
        //  $('.video-popup').magnificPopup({ disableOn: 700, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false, });
        $('.lightbox').nivoLightbox({ effect: 'fadeScale', keyboardNav: true, });
        var offset = 200;
        var duration = 500;
        $(window).scroll(function() { 
            if ($(this).scrollTop() > offset) { 
                $('.back-to-top').fadeIn(400); 
            } else { 
                $('.back-to-top').fadeOut(400); 
            } 
        });
        // $('.back-to-top').on('click', function(event) { event.preventDefault();
        // $('html, body').animate({ scrollTop: 0 }, 400); return false; });
        // $('.go-top').on('click', function(event) { event.preventDefault();
        // $('html, body').animate({ scrollTop: 0 }, 400); return false; });
        // var scrollLink = $('.scroll');
        // scrollLink.click(function(e) {
        //     e.preventDefault();
        //     $('html, body').animate({
        //         scrollTop: $(this.hash).offset().top
        //     }, 400);
        // });

$(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    var scrollLink = $('.scroll');
    scrollLink.each(function() {
        var sectionOffset = $(this.hash).offset().top - 60;
        if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    })


});
$("#flyVideo").hover(function() {
    $(this).prop("controls", true);
  }, function() {
    $(this).prop("controls", false);
  });
//    $("#flyVideo").parent().click(function () {
//     if($(this).children("#flyVideo").get(0).paused){
//     $(this).children("#flyVideo").get(0).play();
//         $(this).children()(".play").fadeOut();
//     }else{
//     $(this).children("#flyVideo").get(0).pause();
//         $(this).children(".pause").fadeIn();
//     }
//  });
    });
 }(jQuery));