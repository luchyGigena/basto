import { Button } from '@chakra-ui/react';
import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {postNew} from '../../redux/actions/index';
import Styles from './CreateAnimal.module.css';
import NavBar from '../NavBar/NavBar';


function CreateAnimal() {
  const dispatch = useDispatch()
  const [error, setError] = useState({})
  const [input,setInput]= useState({
       idSenasa:"",
      typeAnimal:["novillo", 'toro','vaquillona'],
      name:"",
      dispositive:['collar', 'caravana'],
      deviceNumber:"",
      weight:0,
  })


  function validate(){
    let error={};
    if(!input.idSenasa || !input.typeAnimal|| !input.name || !input.dispositive|| !input.deviceNumber){
        error.name = ' ** Los Campos deben estar completos'
    }
    return error
}








  function handleSubmit(e){
    e.preventDefault()
    console.log(input)
    dispatch(postNew(input))
    alert('Record Created Succesfully')
    setInput({
      idSenasa:"",
      typeAnimal:["novillo", 'toro','vaquillona'],
      name:"",
      dispositive:['collar', 'caravana'],
      deviceNumber:"",
      weight:0,
    })
  
    
  }

  function handleChange(e){
    setInput({
        ...input, //haceme una copia de lo que tengo
        [e.target.name] : e.target.value
    })
    setError(validate({
      ...input,
      [e.target.name] : e.target.value
  }))
    
}

function handleCheck(e){
  if(e.target.checked){
      setInput({
          ...input,
          dispositive: e.target.value
      })
      setError(validate({
        ...input,
        [e.target.name] : e.target.value
    }))
      
  } 
}


  return (
    
    <>
    <NavBar />
    <div  className={Styles.formContainer}>
        <h1> Create New Record</h1>
        <div>
        <form onSubmit={(e)=> handleSubmit(e)} className={Styles.form}>
                <div className={Styles.activityName} >
                    <label>Id Senasa:</label> 
                    <input
                     type='text' maxLength={16} minLength={16} value={input.idSenasa}
                     name='idSenasa' placeholder="ID senasa..."
                     onChange={(e)=>handleChange(e)} />
                     {error.name && (
                      <p className={Styles.error}>{error.name}</p>
                      )}
                     
                </div>
                <div className={Styles.difficulty}>
                    <label>Type Animal</label>
                    <select onChange={handleChange} name="typeAnimal" value={input.typeAnimal}>
                    <option selected="true" disabled="">Select type</option>
                        <option value={'novillo'}>novillo</option>
                        <option value={'toro'}>toro</option>
                        <option value={'vaquillona'}>vaquillona</option>
                    </select>

                    {error.name && (
                          <p className={Styles.error}>{error.name}</p>
                      )}
                  
                </div>
                <div className={Styles.duration}>
                    <label>Weight :</label>
                    <input type='number' value={input.weight} onChange={handleChange}  name='weight' placeholder='Mins...'/>
                    
                </div>

                <div className={Styles.duration}>
                    <label>Potrero's Name :</label>
                    <input type='text' maxLength={200} value={input.name} onChange={handleChange }  name='name' placeholder='Potreros Name'/>
                    
                </div>




                <div className={Styles.season}>
                    <label>Dispositive : </label>
                    <div>
                    <label><input type='checkbox' name='collar' value='collar' onChange={e =>handleCheck(e)}/> collar</label>
                    <label><input type='checkbox' name='caravana' value='caravana' onChange={e =>handleCheck(e)}/> caravana </label>
                    {error.name && (
                          <p className={Styles.error}>{error.name}</p>
                      )}
                    </div>
                   
                </div>

                <div className={Styles.activityName} >
                    <label>Device Number:</label> 
                    <input
                     type='text' maxLength={8} min={8} value={input.deviceNumber}
                     name='deviceNumber' placeholder="Please Enter 8 caracters..."
                     onChange={handleChange} />
                      {error.name && (
                      <p className={Styles.error}>{error.name}</p>
                      )}
                      
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

export default CreateAnimal