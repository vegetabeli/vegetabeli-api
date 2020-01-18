require ('dotenv/config');
const express = require ('express')
const logger = require ('morgan')
const cors = require ('cors')
const helmet = require ('helmet')
const bodyParser = require ('body-parser')
const redis = require ('redis')

const client = redis.createClient(process.env.REDIS_PORT)

const router = require('./src/routes/index')

const index = express ();

index.listen (process.env.PORT || 5000, () => {
    console.log ('Server is running on port' + process.env.PORT)
})

index.use (logger('dev'))
index.use (helmet.xssFilter())
index.use (cors())
index.use (bodyParser.json())
index.use (bodyParser.urlencoded({extended: false}))

const cache = ( req, res, next) => {
    const username = req.params.username

    client.get(username, (err, data) =>{
        if(err) throw err
        if(data !== null){
            res.send(setResponse(username, data))
        }else{
            next()
        }
    })
}

index.use('/', router)

module.exports = index