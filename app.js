const express = require('express'),
    app = express()

const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cookieParser = require('cookie-parser')
// const session = require('express-session')
const port = process.env.PORT || 8000;


app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

// Pass messages
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParser('secret'))
app.use(session({ cookie: { maxAge: null } }))

//flash message middleware
app.use((req, res, next) => {
    res.locals.message = req.session.message
    delete req.session.message
    next()
})

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/send', (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var enquiry = req.body.enquiry
    var mobile = req.body.mobile
    var address = req.body.address
    var date = req.body.date
    var branch = req.body.branch

    var emailMessage = `Hi ${name},Thank you for contacting us.Your email is: ${email}.Your enquiry is: ${enquiry}.Your address is: ${address}.Your mobile is: ${mobile}.Your date is: ${date}.Your branch is: ${branch}.`

    console.log(emailMessage)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testingsparsh@gmail.com',
            pass: 'admintesting123'
        }
    })

    var emailOptions1 = {
        from: 'testingsparsh@gmial.com',
        to: email,
        subject: 'confirmation on user end',
        text: `Hi ${name}, your query have been received by sparsh beauty parlour.we will contact you soon.\nthankyou.`
    }

    var emailOptions2 = {
        from: 'testingsparsh@gmial.com',
        to: 'codergarv22@gmail.com',
        subject: 'Developer end confirmation',
        text: `An appointment request have been made,,,details is as follow,,,\n${emailMessage}`
    }

    if (
        req.body.name == '' ||
        req.body.email == '' ||
        req.body.enquiry == '' ||
        req.body.address == '' ||
        req.body.date == '' ||
        req.body.branch == ''
    ) {
        req.session.message = {
            type: 'danger',
            intro: 'Empty fields! ',
            message: 'Please fill all the details.'
        }
        res.redirect('/#appointment-id')
    } else if (req.body.mobile.length != 10 || req.body.mobile[0] < 6) {
        req.session.message = {
            type: 'danger',
            intro: 'invalid phone ',
            message: 'Please fill valid mobile number.'
        }
        res.redirect('/#appointment-id')
    } else {
        transporter.sendMail(emailOptions1, (error, info) => {
            if (error) {
                console.log(error)
                console.log('error comes in sending email to client')
                req.session.message = {
                    type: 'danger',
                    intro: 'can not send mail ',
                    message: 'Please enter valid email.'
                }
                res.redirect('/#appointment-id')
            } else {
                console.log('Message Sent: ' + info.response)
                console.log('Email Message: ' + emailMessage)
            }
        })

        transporter.sendMail(emailOptions2, (error, info) => {
            if (error) {
                console.log(error)
                console.log('error comes in sending email to developer')
                req.session.message = {
                    type: 'danger',
                    intro: 'can not send mail ',
                    message: 'email of host is not correct.'
                }
                res.redirect('/#appointment-id')
            } else {
                console.log('Message Sent: ' + info.response)
                console.log('Email Message: ' + emailMessage)
            }
        })

        req.session.message = {
            type: 'success',
            intro: 'form submitted successfully ',
            message: 'submit another form.'
        }

        console.log(req.body.name, req.body.email, req.body.enquiry)
        console.log('hlo world')
        res.redirect('/#appointment-id')
    }
})

//GALLERY ROUTES
app.get('/gallery', (req, res) => {
    res.render('galleryPage')
})

//SERVICE ROUTES
app.get('/service1', (req, res) => {
    res.render('servicesRoutes/service1')
})

app.get('/service2', (req, res) => {
    res.render('servicesRoutes/service2')
})

app.get('/service3', (req, res) => {
    res.render('servicesRoutes/service3')
})

app.get('/service4', (req, res) => {
    res.render('servicesRoutes/service4')
})

app.get('/service5', (req, res) => {
    res.render('servicesRoutes/service5')
})

app.get('/service6', (req, res) => {
    res.render('servicesRoutes/service6')
})

app.listen(port, () => {
    console.log('SERVER HAS STARTED '+port)
    // console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})