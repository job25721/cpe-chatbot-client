import {
    SET_USER_NAME,
    SET_USER_SESSION_ID,
} from './types';

import { v1 } from 'uuid';

export const setUserSessionId = () => dispatch => {
    dispatch({
        type: SET_USER_SESSION_ID,
        payload: v1(),
    });
}

export const setUserName = (user_name, user_img) => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: {user_name, user_img}
    })
}