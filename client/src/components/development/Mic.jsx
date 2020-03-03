import React, { useState, useEffect } from "react";

import "../../css/record-button.css";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

// redux things
import { connect } from 'react-redux';
import { changeMessageBox, sendInputMessageToServer } from '../../redux/actions/message';


const Mic = (props) => {

  props.recognition.lang = 'th';
  const [isRecording, setIsRecording] = useState(false);
  const changeMessage = props.changeMessageBox;

  useEffect(()=>{
    changeMessage(props.transcript);
  }, [changeMessage, props.transcript]);

  const toggleRecording = async () => {

    if (!props.browserSupportsSpeechRecognition){
      console.error("Browser not support...");
      return;
    }

    if(isRecording){
      // stop recording...
      props.stopListening();
      const transcript = props.transcript;
      console.log(transcript);
      await sendInputMessageToServer(transcript, "sessionId");
      setIsRecording(false);
      console.log("stopRecording...");
    } else {
      // start recording...
      console.log("Recording...");
      props.startListening();
      setIsRecording(true);
    }
  }

  return (
    <React-DocumentFragment>
        <div className="p-0">
        <div id="recButton" className={`rec-button mr-1 ${isRecording ? "Rec" : "notRec"}`} onClick={toggleRecording}>
          <i className="fas fa-microphone fa-3x mic-pic"></i>
        </div>
        </div>
      </React-DocumentFragment>
  )
}


// For Speech recognision
const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  recognition: PropTypes.object,

  // redux prop,
  changeMessageBox: PropTypes.func.isRequired,
  sendInputMessageToServer: PropTypes.func.isRequired,
};

Mic.propTypes = propTypes;

// Speech Regcognision option;
const options = {
  autoStart: false,
  continuous: false,
}


export default connect(null, { changeMessageBox, sendInputMessageToServer })(SpeechRecognition(options)(Mic));
