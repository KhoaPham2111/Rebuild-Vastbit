/* ---------------------------------------------
 common scripts
 --------------------------------------------- */

;(function () {

    "use strict";  

    var $window = $(window);


    /* ---------------------------------------------
     WOW init
     --------------------------------------------- */

    new WOW().init();

    $(document).ready(function () {

        /* ---------------------------------------------
         menu scrolling
         --------------------------------------------- */
        $('.nav').onePageNav({
            //currentClass: 'current',
            filter: ':not(.external)'
        });

        $('.go-down a, .next').on('click', function(e) {
            e.preventDefault();
            var element_id = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(element_id).offset().top -10
            },500);
        });


        /* ---------------------------------------------
         Closes the Responsive Menu on Menu Item Click
         --------------------------------------------- */

        $('.navbar-collapse ul li a').on('click', function() {
            $('.navbar-toggle:visible').click();
        });


        /* ---------------------------------------------
         height 100%
         --------------------------------------------- */

        $(".full-height").height($window.height());

        $window.on('resize', function(){
            $(".full-height").height($window.height());
        });



        /* ---------------------------------------------
         add sticky
         --------------------------------------------- */

        $window.on('scroll', function () {
            var wSize = $window.width();
            if (wSize > 767 && $(this).scrollTop() > 1) {
                $('.header nav').removeClass("navbar-expanded");
            }
            else {
                $('.header nav').addClass("navbar-expanded");
            }
        });


        /* ---------------------------------------------
         portfolio filtering
         --------------------------------------------- */

        var $portfolio = $('.portfolio');
        if ($.fn.imagesLoaded && $portfolio.length > 0) {
            imagesLoaded($portfolio, function () {
                $portfolio.isotope({
                    itemSelector: '.portfolio-item',
                    filter: '*'
                });
                $(window).trigger("resize");
            });
        }

        $('.portfolio-filter').on('click', 'a', function (e) {
            e.preventDefault();
            $(this).parent().addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $portfolio.isotope({filter: filterValue});
        });


        /* ---------------------------------------------
         testimonial
         --------------------------------------------- */

        $("#testimonial-list").owlCarousel({
            rtl: false,
            autoplay: true,
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });


        /*---------------------------------------------
         Portfolio popup
         ---------------------------------------------*/

        $(".portfolio-gallery").each(function () {
            $(this).find(".popup-gallery").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        });


        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            disableOn: 300,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /* ---------------------------------------------
         Fun facts
         --------------------------------------------- */

        function animateFacts(fact) {
            if($.fn.visible && $(fact).visible() && ! $(fact).hasClass('animated') ) {
                $(fact).animateNumber({
                    number: parseInt($(fact).data('target'),10)
                }, 2000);
                $(fact).addClass('animated');
            }
        }

        function initFunFacts() {
            var funFacts = $('.fun-box').find('.value');
            funFacts.each(function() {
                animateFacts(this);
            });
        }

        initFunFacts();

        $(window).on("scroll", function () {
            initFunFacts();
        });

        /* ---------------------------------------------
         footer height
         --------------------------------------------- */

        if($(window).width()>768) {
            var f = $(".footer").height() + 200;
            $(".footer").prev().css("marginBottom", f);
        }


    });

})(jQuery);
