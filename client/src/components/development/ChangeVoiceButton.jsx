import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
    const dispatch = useDispatch();
    const Sex = useSelector((state) => state.user.botSpeech_gender);

    function toggleVoice() {
        if (Sex === "Female") {
            dispatch({ type: "SET_BOT_GENDER_PIC", payload: "Male" })
        }
        else {
            dispatch({ type: "SET_BOT_GENDER_PIC", payload: "Female" })
        }
    }

    return (
        <div className="p0" onClick={toggleVoice}>
            <div className="msgr-button mr-1" style={Sex === "Female" ? { backgroundColor: "#EC407A" } : { backgroundColor: "#0f4c81" }}>
                <div className={`fas fa-${Sex.toLowerCase()} msgr-button-pic`} />
            </div>
        </div>
    )
}

