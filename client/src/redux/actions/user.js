import {
    SET_USER_NAME,
    SET_USER_SESSION_ID,
    SET_ENABLE_BOT_SPEECH,
    SET_ENABLE_MIC_INPUT,
} from './types';

import { v1 } from 'uuid';

export const setUserSessionId = () => dispatch => {
    dispatch({
        type: SET_USER_SESSION_ID,
        payload: v1()
    });
}

export const setUserName = (user_name, user_img) => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: {user_name, user_img}
    });
}

export const setEnableBotSpeech = (enable) => dispatch => {

    if(!enable) window.responsiveVoice.cancel();

    dispatch({
        type: SET_ENABLE_BOT_SPEECH,
        payload: enable
    });
}

export const setEnableMicInput = (input) => dispatch => {
    dispatch({
        type: SET_ENABLE_MIC_INPUT,
        payload: input
    });
}