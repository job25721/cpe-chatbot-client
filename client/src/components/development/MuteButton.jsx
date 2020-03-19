import React from "react";

import "../../css/mute-button.css";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { setEnableBotSpeech } from '../../redux/actions/user';


const MuteButton = ({
    enableBotSpeech,
    setEnableBotSpeech
}) => {
    return (
        <div className="p-0">
            <div id="muteButton" className={`volume-button mr-1`} onClick={() => setEnableBotSpeech(!enableBotSpeech)}>
                <i className={`fas ${enableBotSpeech ? "fa-volume-up" : "fa-volume-mute"} fa-3x volume-pic`}></i>
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