const express = require('express');
const app = express()

//import connection mongodb
const filedb= require('./conection')
const cors = require('cors')

//import body parser
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//import routeAnimal y modelAnimal
const routeAnimal = require('./routes/routes')

app.use('/api', routeAnimal)


//config basic server
app.listen(3001, function(){
    console.log('Server Run in port 3001, success')
})