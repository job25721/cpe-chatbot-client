import React, { useState, Fragment } from "react";

import "../../css/record-button.css";
import PropTypes from "prop-types";
// import SpeechRecognition from "react-speech-recognition";

// redux things
import { connect } from 'react-redux';
import { changeMessageBox, sendInputMessageToServer } from '../../redux/actions/message';

// ------------------------

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition != null){
  recognition.continous = true;
  recognition.interimResults = true;
  recognition.lang = 'th';
}


// -------------------------
const Mic = (props) => {

  const [listening, setListening] = useState(false);

  const toggleListen = () => {
    if (!recognition){
      console.error("Browser doesn't support speech recognition please use chrome");
      return;
    }
    setListening(!listening);
    handleListen();
  }

  const handleListen = () => {

    if (!listening) {
      recognition.start()
      recognition.onend = () => {
        props.changeMessageBox(finalTranscript);
        recognition.start();
      }
    } else {
      recognition.stop()
      recognition.onend = () => {
        props.sendInputMessageToServer(props.messageBoxInput, "SessionId");
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
      props.changeMessageBox(interimTranscript);
    }

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }

  }

  return (
    <Fragment>
      <div className="p-0">
        <div id="recButton" className={`rec-button mr-1 ${listening ? "Rec" : "notRec"}`} onClick={toggleListen}>
          <i className="fas fa-microphone fa-3x mic-pic"></i>
        </div>
      </div>
    </Fragment>
  )
}

Mic.propTypes = {
  messageBoxInput: PropTypes.string.isRequired,
  changeMessageBox: PropTypes.func.isRequired,
  sendInputMessageToServer: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  messageBoxInput:  state.message.messageBoxInput,
});

export default connect(mapStateToProps, { changeMessageBox, sendInputMessageToServer })(Mic);