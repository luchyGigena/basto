import axios from 'axios';

//const url= process.env.REACT_APP_BASE_URL;

export const  GET_ALL_RECORDS = 'GET_ALL_RECORDS';
export const RECORD_DETAIL ='RECORD_DETAIL';
export const POST_NEW ='POST_NEW';
export const DELETE_RECORD='DELETE_RECORD';
export const  PUT_RECORD =' PUT_RECORD'


export const getListaAnimal = () => {
    try {
      return async (dispatch) => {
        const { data } = await axios.get("http://localhost:3001/api/listAnimals");
        //console.log('data',data)
        return dispatch({
          type: GET_ALL_RECORDS,
          payload: data,
        });
      };
    } catch (error) {
      console.log(error)
    }
  };


  export const getRecordById =(id)=>{
    try {
        return async (dispatch) => {
          const  { data } = await axios.get(`http://localhost:3001/api/findAnimal/${id}`);
         
          return dispatch({
            type:RECORD_DETAIL,
            payload: data,
          });
        };
      } catch (error) {
        console.log(error);
      }
  }



  export const postNew =({idSenasa, typeAnimal , weight,name,dispositive,deviceNumber }) =>{
    return async ( dispatch) =>{
      
            await axios.post('http://localhost:3001/api/New',{
                idSenasa,
                typeAnimal,
                weight,
                name,
                dispositive,
                deviceNumber
    
            })
            dispatch({
                type: POST_NEW
            })

    }}


    export const deleteRecord = (id) => {
        return (dispatch) => {
          return axios
            .delete(`http://localhost:3001/api/delete/${id}`)
            .then((response) => {
              dispatch({
                type: DELETE_RECORD,
                payload: response.data,
              });
            })
            .catch((error) => {
              throw error;
            });
        };
      };


      export const updateRecord = (id,{idSenasa, typeAnimal , weight,name,dispositive,deviceNumber}) => {
        return (dispatch) => {
          return axios.put(`http://localhost:3001/api/update/${id}`, {
            idSenasa,
            typeAnimal,
            weight,
            name,
            dispositive,
            deviceNumber
          })
            
            .then((response) => {
              dispatch({
                
                type: PUT_RECORD,
                payload: response.data,
               
              } );  console.log('res', response.data)
            })
            .catch((error) => {
              throw error;
            });
        };
      };      