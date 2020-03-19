import React from "react";

import "../../css/record-button.css";
import PropTypes from "prop-types";
// import SpeechRecognition from "react-speech-recognition";

// redux things
import { connect } from 'react-redux';
import { changeMessageBox, sendInputMessageToServer } from '../../redux/actions/message';
import { setEnableMicInput } from '../../redux/actions/user';

// ------------------------

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition != null) {
  recognition.continous = true;
  recognition.interimResults = true;
  recognition.lang = 'th';
}


// -------------------------
const Mic = ({
  messageBoxInput,
  changeMessageBox,
  sendInputMessageToServer,
  sessionId,
  enableMicInput,
  setEnableMicInput,
}) => {

  const toggleListen = () => {
    if (!recognition) {
      console.error("Browser doesn't support speech recognition please use chrome");
      return;
    }
    setEnableMicInput(!enableMicInput);
    handleListen();
  }

  const handleListen = () => {

    if (!enableMicInput) {
      recognition.start()
      recognition.onend = () => {
        changeMessageBox(finalTranscript);
        recognition.start();
      }
    } else {
      recognition.stop()
      recognition.onend = () => {
        sendInputMessageToServer(messageBoxInput, sessionId);
      }
    }

    // recording ...
    let finalTranscript = '';
    recognition.onresult = event => {
      let interimTranscript = finalTranscript;
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      changeMessageBox(interimTranscript);
    }

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }

  }

  return (
    <div className="p-0">
      <div id="recButton" className={`rec-button mr-1 ${enableMicInput ? "Rec" : ""}`} onClick={toggleListen}>
        <i className="fas fa-microphone fa-3x mic-pic"></i>
      </div>
    </div>
  )
}

Mic.propTypes = {
  messageBoxInput: PropTypes.string.isRequired,
  changeMessageBox: PropTypes.func.isRequired,
  enableMicInput: PropTypes.bool.isRequired,
  sendInputMessageToServer: PropTypes.func.isRequired,
  sessionId: PropTypes.string.isRequired,
  setEnableMicInput: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  messageBoxInput: state.message.messageBoxInput,
  sessionId: state.user.sessionId,
  enableMicInput: state.user.enableMicInput,
});

export default connect(mapStateToProps, { changeMessageBox, sendInputMessageToServer, setEnableMicInput })(Mic);