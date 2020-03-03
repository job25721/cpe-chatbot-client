import {
    CHANGE_MESSAGE_BOX,
    SEND_MESSAGE_TO_SERVER,
    SET_RESPONSE_MESSAGE,
    SEND_MESSAGE_ERROR,
} from './types';

import api from '../../api';
import $ from "jquery";
import { v1 } from 'uuid';

export const changeMessageBox = (msg) => dispatch => {
    dispatch({
        type: CHANGE_MESSAGE_BOX,
        payload: msg,
    });
}

export const sendInputMessageToServer = (msg, sessionId) => async dispatch => {

    dispatch({
        type: SEND_MESSAGE_TO_SERVER,
        payload: {
            textCollection: {
                id: v1(),
                text: msg,
                leftRight: "right"
            }
        }
    });

    try {

        console.log("Sending message");

        const result = await api.post('api/dialogflowGateway', {
            message: msg,
            sessionId: sessionId,
        });

        dispatch(setResponseMessage(result.data.fulfillmentText));

    } catch (error) {

        // Do Something with error...
        dispatch({
            type: SEND_MESSAGE_ERROR,
        });


    }
}

export const setResponseMessage = (newResponseMsg) => dispatch => {

    let response = newResponseMsg;

    if (newResponseMsg === "")
        response = "อะไร ?";

    
    // bot say things
    const responseText = $(`<p>${response}</p>`).text();
    window.responsiveVoice.speak(responseText, "Thai Female");

    dispatch({
        type: SET_RESPONSE_MESSAGE,
        payload: {
            textCollection: {
                id: v1(),
                text: response,
                leftRight: "left"
            },
        }
    });
}