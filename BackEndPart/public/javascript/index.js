$(function () {
    var scroll = $(document).scrollTop()
    var navheight = $('.nav-area').outerHeight()
    var i = 0;
    $(window).scroll(function () {
        var scrolled = $(document).scrollTop()

        if (scrolled > navheight) {
            $('.nav-area').addClass('animate')
        } else {
            $('.nav-area').removeClass('animate')
        }

        if (scrolled > scroll) {
            $('.nav-area').removeClass('sticky')
            i = 0;
            console.log(i);
        } else {
            i = i + scroll - scrolled;
            console.log(i);
            if (i > 400) {
                $('.nav-area').addClass('sticky')
            }
        }
        scroll = $(document).scrollTop()
    })
})