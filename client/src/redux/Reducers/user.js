import {
    SET_USER_SESSION_ID,
    SET_USER_NAME,
    SET_ENABLE_BOT_SPEECH,
    SET_ENABLE_MIC_INPUT,
    SET_RESPONSE_MESSAGE
} from '../actions/types';

const initialState = {
    user_name: "",
    user_img: "",
    sessionId: "",
    enableBotSpeech: true,
    enableMicInput: false,
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
        case SET_ENABLE_BOT_SPEECH:
            return {
                ...state,
                enableBotSpeech: action.payload,
            }
        case SET_ENABLE_MIC_INPUT:
            return {
                ...state,
                enableMicInput: action.payload,
            }
        case SET_RESPONSE_MESSAGE:
            return {
                ...state,
                enableMicInput: false,
            }
        default:
            return state
    }
}