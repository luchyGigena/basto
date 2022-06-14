import React,{ useEffect }  from 'react';
import {getRecordById} from '../../redux/actions/index';
import {useDispatch, useSelector} from 'react-redux';
import {useParams,  Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import {
    Heading,
  
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  


function RecordDetails() {
    const {id} = useParams();
    const dispatch = useDispatch()
    const detailId = useSelector((state) => state.detail)

    useEffect(()=>{
        dispatch(getRecordById(id))
    }, [dispatch])




  return (
    <>
    <NavBar />
    <Center py={6}>
    <Box
      maxW={'320px'}
      w={'full'}
      
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}>
  
      <Heading fontSize={'l'} fontFamily={'body'}>
      _id :  {detailId?._id}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
      idSenasa : {detailId?.idSenasa}
      </Text>
      <Text
        textAlign={'center'}
        px={3}>
        Type Animal: {detailId?.typeAnimal} </Text>
        <Text
        textAlign={'center'}
        px={3}>
        Potrero's Name: {detailId?.name} </Text>  
        <Text
        textAlign={'center'}
        px={3}>
        Type Dispositive: {detailId?.dispositive} </Text>
        <Text
        textAlign={'center'}
        px={3}>
        Animal weight: {detailId?.weight} </Text>

        <Text
        textAlign={'center'}
        px={3}>
        Type Animal: {detailId?.deviceNumber} </Text>
      

      <Stack mt={8} direction={'row'} spacing={4}>
       
      <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'blue.500',
          }}
          _focus={{
            bg: 'blue.500',
          }}>
        <Link to='/'>
          Back
          </Link>
        </Button>
        
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'blue.500',
          }}
          _focus={{
            bg: 'blue.500',
          }}>
          Edit
        </Button>
      </Stack>
    </Box>
  </Center>

  </>


  )
}

export default RecordDetails