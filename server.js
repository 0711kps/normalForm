const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 6699

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile('register.html', { root: __dirname })
})

app.get('/register', (req, res) => {
    console.log(req.query)
    res.redirect(200, '/')
})

app.post('/register', (req, res) => {
    console.log(req.body)
    res.redirect(200, '/')
})

app.listen(port, () => {
    console.log(`開始監聽 http://localhost:${port}`)
})
