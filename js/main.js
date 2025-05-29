/*-----------------------------------------------------------------------------------

    Template Name: Kargon - Transport and Logistics HTML Template
    Description: Transport and Logistics HTML Template
    Author: Website Layout
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Resize function
        07. FullScreenHeight function
        08. ScreenFixedHeight function
        09. FullScreenHeight and screenHeight with resize function
        10. Wow animation - on scroll
        11. Sliders
        12. Curren Year
        13. Odometer
        14. Portfolio
        
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logochange = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logochange.attr('src', 'img/logos/logo-inner.png');
                logodefault.attr('src', 'img/logos/logo.png');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logochange.attr('src', 'img/logos/logo.png');
                logodefault.attr('src', 'img/logos/logo.png');
            }
        });

        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        const scrollTopPercentage = ()=> {
            const scrollPercentage = () => {
                const scrollTopPos = document.documentElement.scrollTop;
                const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
                const scrollElementWrap = $(".scroll-top-percentage");

                scrollElementWrap.css("background", `conic-gradient( #F94735 ${scrollValue}%, #0f313a ${scrollValue}%)`);

                if ( scrollTopPos > 100 ) {
                    scrollElementWrap.addClass("active");
                } else {
                    scrollElementWrap.removeClass("active");
                }

                if( scrollValue < 96 ) {
                    $("#scroll-value").text(`${scrollValue}%`);
                } else {
                    $("#scroll-value").html('<i class="fa-solid fa-angle-up"></i>');
                }
            }
            window.onscroll = scrollPercentage;
            window.onload = scrollPercentage;

            // Back to Top
            function scrollToTop() {
                document.documentElement.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }

            $(".scroll-top-percentage").on("click", scrollToTop);
        }
        scrollTopPercentage();

        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
        
        /*------------------------------------
            05. Video
        --------------------------------------*/

        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        /*------------------------------------
            06. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            07. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            08. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            09. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        SetResizeContent();

        /*------------------------------------
            10. Wow animation - on scroll
        --------------------------------------*/
        
        var wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: false, // default
            live: true // default
        })
        wow.init();

    // === when document ready === //
    $(document).ready(function() {

        /*------------------------------------
            11. Sliders
        --------------------------------------*/

        // service-carousel-two
        $('.service-carousel-two').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 1500,
            nav: false,
            navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
            dots: true,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        // service-carousel-one
        $('.service-carousel-one').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center: true,
            margin: 60,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    margin: 20
                },
                1200: {
                    items: 2,
                    margin: 40
                },
                1400: {
                    items: 2
                }
            }
        });

        // testmonial-carousel3
        $('.testimonial-carousel3').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            thumbs: false,
            thumbsPrerendered: false,
            center:false,
            margin: 50,
            items: 1
        });

        // process-slider
        $('.process-slider').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        // testmonial-carousel-three
        $('.testimonial-carousel-two').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            navText: ["<span class='fa-solid fa-arrow-left-long'></span>", "<span class='fa-solid fa-arrow-right-long'></span>"],
            dots: false,
            margin: 0,
            center: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            items: 1,
            responsive: {
                992: {
                    dots: false,
                    nav: true
                }
            }
        });

        // testmonial-carousel-one
        $('.testimonial-carousel-one').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            navText: ["<span class='fa-solid fa-arrow-left-long'></span>", "<span class='fa-solid fa-arrow-right-long'></span>"],
            dots: false,
            margin: 0,
            center: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            items: 1,
            responsive: {
                992: {
                    dots: false,
                    nav: false
                }
            }
        });

        // blog-carousel
        $('.blog-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        // history-carousel
        $('.history-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            responsive: {
                0: {
                    items: 1
                },
                481: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200:{
                    items: 4
                },
                1400:{
                    items: 5
                }
            }
        });

        // slider-fade1
        $('.slider-fade1').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            nav: true,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            autoplay: true,
            smartSpeed:1500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                576: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 1,
                    nav: false
                },
                992: {
                    items: 1,
                    nav: true
                }
            }
        });        
        
        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            autoplay:true,
            smartSpeed:500
        });

        // Slider text animation
        var owl = $('.slider-fade1');
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('a').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('a').addClass('animated fadeInUp');
        });

        /*------------------------------------
            12. Curren Year
        --------------------------------------*/

        $('.current-year').text(new Date().getFullYear());

        /*------------------------------------
            13. Odometer
        --------------------------------------*/

        $('.odometer').waypoint(function(direction) {
            if (direction === 'down') {
                let countNumber = $(this.element).attr("data-count");
                $(this.element).html(countNumber);
            }
        }, {
            offset: '80%'
        });
      
    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            14. Portfolio
        --------------------------------------*/

        var $PortfolioGallery = $('.portfolio-gallery-isotope').isotope({
            // options
        });

        // filter items on button click
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $PortfolioGallery.isotope({
                filter: filterValue
            });
        });

        $('.filtering').on('click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

        $('.portfolio-link').on('click', (e) => {
            e.stopPropagation();
        });

        $('.portfolio-gallery,.portfolio-gallery-isotope').lightGallery();

    });

})(jQuery);