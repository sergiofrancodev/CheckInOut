const express = require('express');

//Routers
const { registrationsRouter } = require('./routes/registrations.routes')

//Utils
const { db } = require('./utils/database.util')

//Init express app
const app = express()
app.use(express.json()) 

//Define endpoints
app.use('/registrations', registrationsRouter)

// Authenticate sync and listen server
db.authenticate()
.then(() => console.log('db synced'))
.catch(err => console.log(err));

db.sync()
.then(() => console.log('db create or synced'))
.catch(err => console.log(err));

app.listen(4020, () => {
    console.log('Server listening')
})