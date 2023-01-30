const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//initialize app
const app = express(); 

//create a PORT; read it from a config folder or default it to a certain value
const PORT = process.env.PORT || 5001 

const server = app.listen(PORT, () => {
    //confirm it's running
    console.log(`Server is listening on PORT ${PORT}`)
})

//kill the server gracefully
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`)
    
    server.close(()=> process.exit(1)) // 1 inidcates server failure
})