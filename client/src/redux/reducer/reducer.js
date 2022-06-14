import { GET_ALL_RECORDS, RECORD_DETAIL, POST_NEW ,DELETE_RECORD,  PUT_RECORD, SEARCH_TYPE} from "../actions"

const initialState ={
    records:[],
    detail: {},
    searchType: []
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
            
        case SEARCH_TYPE:
            return{
                ...state,
                searchType : [...action.payload],
                records :[...action.payload]
            }    
            default :
                return {
                ...state,
             }

}

}
