(function ($) {
    "use strict";
    $(document).ready(function () {
        jQuery('#countdown_dashboard').countDown({
            targetDate: {
                'day': 30,
                'month': 11,
                'year': 2021,
                'hour': 10,
                'min': 0,
                'sec': 0
            }
        });
        var windowHeight = $(window).height();
        $('.hero').height(windowHeight);
        $(window).resize(function () {
            var windowHeight = $(window).height();
            $('.hero').height(windowHeight);
        });
        $('#menuToggle, .menu-close').on('click', function () {
            $('#menuToggle').toggleClass('active');
            $('body').toggleClass('body-push-toleft');
            $('#theMenu').toggleClass('menu-open');
        });
        // new Photostack(document.getElementById('photostack'), {
        //     callback: function (item) {}
        // });
        // $('.photostack').magnificPopup({
        //     delegate: 'a',
        //     type: 'image',
        //     tLoading: 'Loading image #%curr%...',
        //     mainClass: 'mfp-img-mobile',
        //     gallery: {
        //         enabled: true,
        //         navigateByImgClick: true,
        //         preload: [0, 1]
        //     },
        //     image: {
        //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        //         titleSrc: function (item) {
        //             return item.el.attr('title');
        //         }
        //     },
        // });
        jQuery.supersized({
            slide_interval: 3000,
            transition: 1,
            transition_speed: 700,
            slide_links: 'blank',
            slides: [{
                image: 'images/baby-1.jpg'
            }, {
                image: 'images/baby-2.jpg'
            }, {
                image: 'images/baby-3.jpg'
            }]
        });
    });
})(jQuery);
