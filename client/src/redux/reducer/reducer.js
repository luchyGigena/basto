import { GET_ALL_RECORDS, RECORD_DETAIL, POST_NEW ,DELETE_RECORD,  PUT_RECORD} from "../actions"

const initialState ={
    records:[],
    detail: {},
}


export default function rootReducer (state= initialState, action){
    switch(action.type){
        case GET_ALL_RECORDS:
            return{
                ...state,
                records: action.payload
            }
        case RECORD_DETAIL:
            return{
                ...state,
                detail: action.payload
            }    
        case POST_NEW: 
            return{
                ...state
            }
        case DELETE_RECORD:
            return{
                ...state
            } 

        case  PUT_RECORD:
            return{
                ...state
            }    
            default :
                return {
                ...state,
             }

}

}
