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

var serviceBtn = document.querySelectorAll('#serviceBtn')
var serviceCardHidden = document.querySelectorAll('#serviceCardHidden')

for (let i = 0; i < serviceBtn.length; i++) {
    serviceBtn[i].addEventListener('click', function() {
        serviceCardHidden[i].classList.add('open')
    })

    // serviceCardHidden[i].addEventListener('click', function() {
    //     serviceCardHidden[i].classList.remove('open')
    // })
}