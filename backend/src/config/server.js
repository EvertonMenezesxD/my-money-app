const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extend: true }))
server.use(bodyParser.json())
server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND IS RUNNING ON PORT ${port}.`)
})

module.exports = server