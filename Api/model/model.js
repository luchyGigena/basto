const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');


const eschema = mongoose.Schema

const animalSchema = new eschema({
    idSenasa: {
        type: String,
        unique: true,
        maxlength: [ 16, 'max 16 caracteres' ],
        minlength: [ 16, 'min 16 caracteres' ],
        required: true
    },
    typeAnimal:{
        type: String,
        enum: ["novillo","toro", "vaquillona"],
        required:true
    }, 
    weight: {
        type: Number,
        required:true
    },
    name:{
        type: String,
        maxlength: [ 200, 'max 200 caracteres'],

    },
    dispositive:{
        type: String,
        enum: ['collar', 'caravana']
    },
    deviceNumber: {
        type: String,
        unique: true,
        require: true,
        maxlength: [ 8, 'max 8 caracteres' ],
        minlength: [ 8, 'min 8 caracteres' ],

    }

})

animalSchema.plugin( validator, { message: 'Error data db' } );

const modelAnimal = mongoose.model('Data', animalSchema)

module.exports = modelAnimal



