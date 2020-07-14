console.log('CONNECTED')

var serviceBtn = document.querySelectorAll('#serviceBtn')
var serviceCardHidden = document.querySelectorAll('#serviceCardHidden')

console.log(serviceBtn[4])
console.log(serviceCardHidden[4])

for (let i = 0; i < serviceBtn.length; i++) {
    serviceBtn[i].addEventListener('click', function() {
        serviceCardHidden[i].classList.add('open')
    })

    serviceCardHidden[i].addEventListener('click', function() {
        serviceCardHidden[i].classList.remove('open')
    })
}