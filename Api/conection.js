const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudBasto');

const db = mongoose.connection

db.on('connected', ()=>{console.log('Connect db Succesfully to MongoDB')})
db.on('error', ()=>{console.log(' error connection to  MongoDB')})

module.export= mongoose