//import express module
const express = require('express')
const cors = require('cors')

// Utils - connecting to database
const { db } = require('./utils/database');

//import routers
const {usersRouter} = require('./routes/users.routes')
const {transferRouter} = require('./routes/transfers.routes')


//init express app
const app = express()


//enable cors
app.use(cors())

// Enable incoming JSON data
app.use(express.json());

//ENDPOINTS
//http://localhost:6000/api/v1/users - users endpoint
app.use('/api/v1/users', usersRouter)

//http://localhost:6000/api/v1/transfers - repairs endpoint
app.use('/api/v1/transfers', transferRouter)


module.exports = {app}