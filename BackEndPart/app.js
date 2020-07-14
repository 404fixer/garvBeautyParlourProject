const express = require('express'),
    app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/gallery', (req, res) => {
    res.render('galleryPage')
})

app.listen('3000', () => {
    console.log('SERVER HAS STARTED')
})