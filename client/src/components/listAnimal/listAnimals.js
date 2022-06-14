import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NavBar from '../NavBar/NavBar';

import {Link} from 'react-router-dom';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer, Button} from '@chakra-ui/react';
import { getListaAnimal, deleteRecord} from '../../redux/actions/index'



function ListAnimals() {
   const dispatch = useDispatch()
   const allRecords = useSelector((state)=>state.records)
   const [data, setData] = useState(allRecords)
   const [prueba, setPrueba]= useState(0)


  useEffect(()=>{
    dispatch(getListaAnimal())
  },[prueba])


 

  function handleDelete(id){
  
    setData(data.filter((item) => item.id !== id));
    alert('Record Deleted')
    dispatch(deleteRecord(id))
    setPrueba(prueba +1)
  }





  return (
    <div>
        <NavBar />
        <h2>All Records</h2>
        

        <TableContainer>
        <Table variant='striped' colorScheme='teal'>
        
        <Thead>
         <Tr>
        <Th>idSenasa</Th>
        <Th>typeAnimal</Th>
        <Th>weight</Th>
        <Th>Potrero's Name</Th>
        <Th>Dispositive</Th>
        <Th>Device Number</Th>
        <Th>Actions</Th>
        
        </Tr>
        </Thead>
        <Tbody>
          {
            allRecords?.map((el, inx)=>(
              <Tr key={inx}>
              <Td>{el.idSenasa}</Td>
              <Td>{el.typeAnimal}</Td>
              <Td>{el.weight}</Td>
              <Td>{el.name}</Td>
              <Td>{el.dispositive}</Td>
              <Td>{el.deviceNumber}</Td>
              <Td> <Link to={`/findAnimal/${el._id}`}>
                <Button>View Record</Button>
              </Link>
                </Td>
              <Td>
              <Link to={`/update/${el._id}`}>
                <Button>Edit</Button></Link>
              </Td>
              <Td><Button onClick={()=>handleDelete(el._id)}>Delete</Button></Td>
      </Tr>
      
            ))
          }
        
    </Tbody>
    
  </Table>
</TableContainer>



        <div>
        <Link to='/New'><Button> Create New Record</Button></Link>
        </div>
    </div>
  )
}

export default ListAnimals