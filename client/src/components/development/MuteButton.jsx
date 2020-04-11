import React from "react";

import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { setEnableBotSpeech } from '../../redux/actions/user';



const MuteButton = ({
    enableBotSpeech,
    setEnableBotSpeech
}) => {
    return (
        <div className="p-0">
            <div id="muteButton" style={enableBotSpeech ? {backgroundColor : "#66BB6A" }: {backgroundColor:"#EF5350"}} className={`msgr-button mr-1`} onClick={() => setEnableBotSpeech(!enableBotSpeech)}>
                <i className={`fas ${enableBotSpeech ? "fa-volume-up" : "fa-volume-mute"} msgr-button-pic`}></i>
            </div>
        </div>
    )
}

MuteButton.propTypes = {
    enableBotSpeech: PropTypes.bool.isRequired,
    setEnableBotSpeech: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
    enableBotSpeech: state.user.enableBotSpeech,
});

export default connect(mapStateToProps, { setEnableBotSpeech })(MuteButton);