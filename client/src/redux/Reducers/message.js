import {
    CHANGE_MESSAGE_BOX,
    SEND_MESSAGE_TO_SERVER,
    SET_RESPONSE_MESSAGE,
    SEND_MESSAGE_ERROR,
} from '../actions/types';

const initialState = {
    messageBoxInput: "",
    isLoadingResponse: false,
    messageCollections: [],
}

export default function(state=initialState, action) {
    switch(action.type){
        case CHANGE_MESSAGE_BOX:
            return {
                ...state,
                messageBoxInput: action.payload,
            }
        case SEND_MESSAGE_TO_SERVER:
            return {
                ...state,
                isLoadingResponse: true,
                messageCollections: [...state.messageCollections, action.payload.textCollection],
                messageBoxInput: "",
            }
        case SET_RESPONSE_MESSAGE:
            return {
                ...state,
                messageCollections: [...state.messageCollections, action.payload.textCollection],
            }
        // Handle Error...
        case SEND_MESSAGE_ERROR:
        default:
            return state
    }
}