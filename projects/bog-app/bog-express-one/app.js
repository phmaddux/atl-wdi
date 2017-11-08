require('dotenv').config
const express = require('express')
const mongoose = require('mongoose')
const logger = require ('morgan')
const bodyParser = require('body-parser')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})

const db = mongoose.connection
db.on('error', err => {
    console.log(err)
})

db.on('open', () => {
    console.log('Connect with MongoDb')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(`${__dirname}/client/build`))

const creatureRoutes = require('./routes/creatureController')
app.use('/api/creature', creatureRoutes)

app.get('/', (req, res) => {
    rs.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.Port || 3001

app.listen(PORT, () => {
    console.log('App is up and running on port ' + PORT)
})