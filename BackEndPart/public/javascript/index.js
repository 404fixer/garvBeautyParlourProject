$(function () {
    var scroll = $(document).scrollTop()
    var navheight = $('.nav-area').outerHeight()
    $(window).scroll(function () {
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
    serviceBtn[i].addEventListener('click', function () {
        serviceCardHidden[i].classList.add('open')
    })

    // serviceCardHidden[i].addEventListener('click', function() {
    //     serviceCardHidden[i].classList.remove('open')
    // })
}
console.log('hlo')
//jquery for refreshing page at same place on form submission
var frm = $('#contactForm1');

frm.submit(function (e) {

    e.preventDefault();

    $.ajax({
        type: frm.attr('method'),
        url: frm.attr('action'),
        data: frm.serialize(),
        success: function (data) {
            console.log('Submission was successful.');
            formdata: {
                name: $("#name").val();
                email: $("#email").val();
                address: $("#address").val();
                mobile: $("#mobile").val();
                date: $("#date").val();
                branch: $("#branch").val();
                enquiry: $("#enquiry").val();
            }
            
            // console.log(data);
        },
        error: function (data) {
            console.log('An error occurred.');
            // console.log(data);
        },
    });
});
// $('#submit-btn').click(function(e) {
//     console.log("working")
//     e.preventDefault();
//     var form = $(this);
//     var url = form.attr('action');
//     console.log(url)
//     $.ajax({
//         type: "POST",
//         url: url,
//         data: form.serialize(), // serializes the form's elements.
//         success: function(data)
//         {
//             alert(data); // show response from the php script.
//         }
//       });
    // $.ajax({
    //     global: false,
    //     type: 'POST',
    //     url: url, // missing quotes  
    //     dataType: 'html',
    //     data: {
    //         name: $("#name").val(),
    //         email: $("#email").val(),
    //         address: $("#address").val(),
    //         mobile: $("#mobile").val(),
    //         date: $("#date").val(),
    //         branch: $("#branch").val(),
    //         enquiry: $("#enquiry").val()
    //     },
    //     success: function (result) {
    //         // console.log(result);
    //         console.log("success");
    //     },
    //     error: function (request, status, error) {
    //         console.log("error");
    //     }
    // });
// });