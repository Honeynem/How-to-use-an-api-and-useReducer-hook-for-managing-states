import { ACTION_TYPES } from "./factAction";

export const initialState = {
    loading : false,
    fact : '',
    error : false
}

    // Fetch-start      : loading : true
    // Fetch-success    : loading : false
    //                  : fact : red.data.fact
    //
    // Fetch-error      : loading : false
    //                  : error   : true
    //creating this function:
export const factReducer = (state , action) => {
        //the state will be given but for action we have to determine that what is gonna happen
        //{type :  would be one of above states fetch start or success or error, data  : replacement for fact}
        
        
        // if(action.type === 'Fetch-start')
        // return {loading : true , fact : '' , error : false};
        // if(action.type === 'Fetch-success')
        // return {loading : false , fact : action.data , error : false};
        // if(action.type === 'Fetch-error')
        // return {loading : false , fact : '' , error : true};
        //using switch instead
        switch (action.type) {
            case ACTION_TYPES.Fetch_start:
                return {loading : true , fact : '' , error : false};
            case ACTION_TYPES.Fetch_success:
                return {loading : false , fact : action.data , error : false};
            case ACTION_TYPES.Fetch_error : 
                return {loading : false , fact : '' , error : true};
            default: 
            return state


        }


    }