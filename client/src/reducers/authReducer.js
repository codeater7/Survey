import {FETCH_USER} from '../actions/types';



export default function(state = null, action){    // initial state supposed to be empty object
    
    switch (action.type){
        case FETCH_USER:    // fetch_user is action
            return action.payload || false;
        default:
            return state;
    }
}