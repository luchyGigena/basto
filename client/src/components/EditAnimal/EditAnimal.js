import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {updateRecord ,getRecordById } from '../../redux/actions/index';
import Styles from './EditAnimal.module.css';
import NavBar from '../NavBar/NavBar';



function EditAnimal() {

const {id} = useParams();  

const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getRecordById(id))
},[])

const detail = useSelector((state)=> state.detail)

//console.log('detail', detail)
const [input,setInput]= useState({
    idSenasa:detail.idSenasa,
     typeAnimal: detail.typeAnimal,
     name:detail.name,
     dispositive:detail.dispositive,
     deviceNumber:detail.deviceNumber,
     weight:detail.weight,
 })




  function handleSubmit(e){
    e.preventDefault()
   // console.log(input)
    dispatch(updateRecord(id,input))
    alert('Record Updated Succesfully')
    
  }

  function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    
}

function handleCheck(e){
  if(e.target.checked){
      setInput({
          ...input,
          dispositive: e.target.value
      })
      
  } 
}


  return (
    
    <>
    <NavBar />
    <div  className={Styles.formContainer}>
        <h1> Edit Record</h1>
        <div>
        <form onSubmit={(e)=> handleSubmit(e)} className={Styles.form}>
                <div className={Styles.activityName} >
                    <label>Id Senasa:</label> 
                    <input
                     type='text' value={input.idSenasa}
                     name='idSenasa' placeholder="ID senasa..."
                     onChange={(e)=>handleChange(e)} />
                     
                </div>
                <div className={Styles.difficulty}>
                    <label>Type Animal</label>
                    <select onChange={handleChange} name="typeAnimal" value={input.typeAnimal}>
                    <option selected="true" disabled="">Select type</option>
                        <option value={'novillo'}>novillo</option>
                        <option value={'toro'}>toro</option>
                        <option value={'vaquillona'}>vaquillona</option>
                    </select>
                  
                </div>
                <div className={Styles.duration}>
                    <label>Weight :</label>
                    <input type='number' value={input.weight} onChange={handleChange}  name='weight' placeholder='Mins...'/>
                    
                </div>

                <div className={Styles.duration}>
                    <label>Potrero's Name :</label>
                    <input type='text' value={input.name} onChange={handleChange }  name='name' placeholder='Potreros Name'/>
                    
                </div>




                <div className={Styles.season}>
                    <label>Dispositive : </label>
                    <div>
                    <label><input type='checkbox' name='collar' value='collar' onChange={(e) =>handleCheck(e)}/> collar</label>
                    <label><input type='checkbox' name='caravana' value='caravana' onChange={(e) =>handleCheck(e)}/> caravana </label>
                    
                    </div>
                   
                </div>

                <div className={Styles.activityName} >
                    <label>Device Number:</label> 
                    <input
                     type='text' value={input.deviceNumber}
                     name='deviceNumber' placeholder="Device Number..."
                     onChange={handleChange} />
                      
                </div>
             
               

                 
                        <input className={Styles.submit}
                           type="submit" value="Submit"
                           disabled={
                           !input.idSenasa ||
                           !input.typeAnimal ||
                           !input.weight||  
                           !input.name || 
                           !input.dispositive ||
                           !input.deviceNumber
                           }/>
                        
        </form>
        </div>

        <Link to='/'>                  
        <Button>Back to Home</Button></Link> 

       

    </div>
    </>
  )
}

export default EditAnimal