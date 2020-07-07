$(function() {
    var scroll = $(document).scrollTop()
    var navheight = $('.nav-area').outerHeight()
    $(window).scroll(function() {
        var scrolled = $(document).scrollTop()

        if (scrolled > navheight) {
            $('.nav-area').addClass('animate')
        } else {
            $('.nav-area').removeClass('animate')
        }

        if (scrolled > scroll) {
            $('.nav-area').removeClass('sticky')
        } else {
            $('.nav-area').addClass('sticky')
        }
        scroll = $(document).scrollTop()
    })
})