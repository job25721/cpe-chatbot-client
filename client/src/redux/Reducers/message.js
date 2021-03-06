import {
    CHANGE_MESSAGE_BOX,
    SEND_MESSAGE_TO_SERVER,
    SET_RESPONSE_MESSAGE,
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
                isLoadingResponse: true,
                messageCollections: [...state.messageCollections, action.payload.textCollection],
                messageBoxInput: "",
            }
        case SET_RESPONSE_MESSAGE:
            return {
                ...state,
                isLoadingResponse: false,
                messageCollections: [...state.messageCollections, action.payload.textCollection],
            }
        default:
            return state
    }
}