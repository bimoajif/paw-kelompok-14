const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())

const db = require('./app/models/')
db.mongoose
    .connect(db.url, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then((result) => {
        console.log(`Database Connected`)
    }).catch((err) => {
        console.log(`Cannot Connect to Database`, err)
        process.exit()
    });

app.get('/', (req, res) => {
    res.send(`selamat datang`)
})

require('./app/routes/book.routes')(app)

const PORT = 8000

app.listen(PORT, ()  =>{
    console.log(`server is running on http://localhost:${PORT}`)
})