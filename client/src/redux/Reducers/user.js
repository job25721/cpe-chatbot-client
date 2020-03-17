import {
    SET_USER_SESSION_ID,
    SET_USER_NAME,
} from '../actions/types';

const initialState = {
    user_name: "",
    user_img: "",
    sessionId: "",
}

export default function(state=initialState, action) {
    switch(action.type){
        case SET_USER_SESSION_ID:
            return {
                ...state,
                sessionId: action.payload,
            }
        case SET_USER_NAME:
            return {
                ...state,
                user_name: action.payload.user_name,
                user_img: action.payload.user_img,
            }
        default:
            return state
    }
}