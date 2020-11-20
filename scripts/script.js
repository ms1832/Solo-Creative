/*      Preloader       */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/*      About-Slider     */
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
});


/*      Team Progress-Bar     */
$(function () {

    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });


    /*      Services 02 Responsive tabs     */
    $(function () {
        $("#services-tabs").responsiveTabs({
            animation: 'slide'
        });
    });

});

/*      Portfolio     */
$(window).on('load', function () {

    $(".isotop-container").isotope({});

    $("#isotop-filters").on('click', 'button', function () {
        var filtervalue = $(this).attr('data-filter');
        $(".isotop-container").isotope({
            filter: filtervalue
        });
        $("#isotop-filters").find(".active").removeClass('active');
        $(this).addClass('active');
    });

});

/*  Magnifier   */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});


/*      Testimonial     */

$(function () {

    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

});


/*      Counter     */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});


/*  Clients */

$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });

});

/*      Map     */

$(window).on('load', function () {

    // Map Variables
    var address = '230 Brodway, NY, New York 10007, USA';
    var latLong = {
        lat: 40.712685,
        lng: -74.005920
    };

    // Render Map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: latLong,
    });

    // Add Marker
    var marker = new google.maps.Marker({
        position: latLong,
        map: map,
        title: "Click to See Address"
    });

    // Info Window
    const infowindow = new google.maps.InfoWindow({
        content: address,
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });

    // resize function
    google.maps.event.addDomListener(window, 'resize', function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

});



/*      Navigation     */

// show & Hide navbar
$(function () {

    // show/hide on page load
    showHide();

    $(window).scroll(function () {
        // show/hide on window scroll
        showHide();
    });

    function showHide() {
        if ($(window).scrollTop() > 50) {
            //show white navbar
            $("nav").addClass("white-nav-top");
            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            // show back to top btn
            $("#back-to-top").fadeIn();
        } else {
            //Hide white navbar
            $("nav").removeClass("white-nav-top");
            //show normal logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            // hide back to top btn
            $("#back-to-top").fadeOut();
        }
    }

});

/*    Smooth Scrolling      */

$(function () {

    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get section Id
        var sectionId = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(sectionId).offset().top - 54
        }, 1250, "easeInOutExpo");

    });

});


/*      Mobile Menu     */

$(function () {

    // show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });
    // hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});


/*      Animation       */

// init wow js
$(function () {
    new WOW().init();
});

$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");

    $("#home-text").addClass("animated zoomIn");
    $("#btn-home").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});