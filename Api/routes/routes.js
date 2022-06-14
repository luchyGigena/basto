const express = require('express')
const router = express.Router();
const data = require('../model/model')

//Create New record
router.post('/New', async(req, res)=>{
 const newAnimal= new data({
    idSenasa: req.body.idSenasa,
    typeAnimal: req.body.typeAnimal,
    weight: req.body.weight,
    name: req.body.name,
    dispositive: req.body.dispositive,
    deviceNumber: req.body.deviceNumber
 })
 await newAnimal.save(function(err){
     if(!err){
         res.status(200).send('record created successfully')
     }else{
         res.status(400).send(err)
     }
 })

})

//Get all records and query for searchbar
router.get('/listAnimals', async (req,res) =>{
    const {typeAnimal} = req.query
    try{
        if(typeAnimal){
            const onetype = await typeAnimal.toLowerCase()
        
        if( onetype === 'novillo' ||  onetype === 'toro'||  onetype === 'vaquillona'){
            data.find({
                typeAnimal: onetype
            },(err,dato)=> {
                if(!err){
                    res.status(200).send(dato)
                }else{
                    res.status(400).send(err)
                }
            })}
        }else{
            data.find({}, function(docs, err){
                if(!err){ res.send(docs)
                }else{
                    res.send(err)
                }
            })

        }
    }catch(error){
        console.log(error)
    }
})

//route delete record by id
router.delete('/delete/:id', async (req,res)=> {
    const {id} = req.params
    console.log('id', id)
    try{
    
     await data.findByIdAndDelete(
         {_id : id}
         )
     res.status(200).json('Record has been deleted')
    
    }catch(err){
        res.status(404).send(err)
        console.log(err)
    }  
    
    })
    




//get One record by id
 router.get('/findAnimal/:id', async(req, res) =>{

     const {id} = req.params
    //console.log('id',id)

    try{
          await data.findOne({_id : id}, function(err,docs ){
              console.log('que es err',err)
              console.log('docs',docs)
        if(!err){
            res.status(200).send(docs)
        }else{
            res.status(400).send(err)
        }

     })
    
     }catch(err){
        console.log(err)

    }
 })


 // route put by id

 router.put('/update/:id', async(req, res)=>{
     const {id} = req.params
     data.findOneAndUpdate({_id :id},{
        idSenasa: req.body.idSenasa,
        typeAnimal: req.body.typeAnimal,
        weight: req.body.weight,
        name: req.body.name,
        dispositive: req.body.dispositive,
        deviceNumber: req.body.deviceNumber

     },(err)=>{
        if(!err){
            res.status(200).send('Record update Success')
        }else{
            res.status(400).send(err)
        }

     })

 })


module.exports = router;
