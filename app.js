require ('dotenv/config');
const express = require ('express')
const logger = require ('morgan')
const cors = require ('cors')
const helmet = require ('helmet')
const bodyParser = require ('body-parser')

const router = require('./src/routes/index')

const index = express ();

index.listen (process.env.PORT, () => {
    console.log ('Server is running on port ' + process.env.PORT)
})

index.use (logger('dev'))
index.use (helmet.xssFilter())
index.use (cors())
index.use (bodyParser.json())
index.use (bodyParser.urlencoded({extended: false}))

index.use('/', router)

module.exports = index