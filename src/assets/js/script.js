!function (s) {
    "use strict";
    $(document).on('click', 'ul.tabs li', function () {
        var tab_id = $(this).attr('href');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    }),

    $(document).on('click', "#sidebarToggle, #sidebarToggleTop", function (e) {
        s("body").toggleClass("sidebar-toggled"),
            s(".sidebar").toggleClass("toggled"),
            s(".sidebar").hasClass("toggled") && s(".sidebar .collapse").collapse("hide")
    }),
        s(window).resize(function () {
            s(window).width() < 768 && s(".sidebar .collapse").collapse("hide"),
                s(window).width() < 480 && !s(".sidebar").hasClass("toggled") && (s("body").addClass("sidebar-toggled"),
                    s(".sidebar").addClass("toggled"),
                    s(".sidebar .collapse").collapse("hide"))
        }),
        s("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function (e) {
            if (768 < s(window).width()) {
                var o = e.originalEvent, l = o.wheelDelta || -o.detail; this.scrollTop += 30 * (l < 0 ? 1 : -1), e.preventDefault()
            }
        }),
        s(document).on("scroll", function () {
            100 < s(this).scrollTop() ? s(".scroll-to-top").fadeIn() : s(".scroll-to-top").fadeOut()
        }),
        s(document).on("click", ".scroll-to-top", function (e) {
            var o = s(this);
            s("html, body").stop().animate({ scrollTop : 0 }, 1e3, "easeInOutExpo"),
                e.preventDefault()
        })
}(jQuery);