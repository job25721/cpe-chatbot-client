import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    messageBox: "",
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function changeMessageBox(newMsg) {
        dispatch({
            type: 'CHANGE_MESSAGE_BOX',
            payload: newMsg
        });
    }

    function clearMessageBox() {
        dispatch({
            type: "CLEAR_MESSAGE_BOX",
        });
    }


    return (<GlobalContext.Provider value={{
        messageBox: state.messageBox,
        changeMessageBox,
        clearMessageBox
    }}>
        {children}
    </GlobalContext.Provider>);
}