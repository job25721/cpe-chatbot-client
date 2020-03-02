import React, { useContext, useEffect, useState } from "react";
import $ from "jquery";
import "../css/record-button.css";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

import { GlobalContext } from '../context/GlobalState';

// For Speech recognision
const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  recognition: PropTypes.object,
};

const Mic = (props) => {

  // props.recognition.lang = 'th';

  const { changeMessageBox } = useContext(GlobalContext);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(()=>{
    changeMessageBox(props.transcript)
  }, [props.transcript]);

  const toggleRecording = () => {
    if(isRecording){
      props.stopListening();
      setIsRecording(false);
    } else {
      props.startListening();
      setIsRecording(true);
    }
  }

  return (
    <React-DocumentFragment>
        <div className="p-0">
        <div id="recButton" className={"rec-button mr-1 "+ (isRecording ? "Rec" : "notRec")} onClick={toggleRecording}>
          <i className="fas fa-microphone fa-3x mic-pic"></i>
        </div>
        </div>
      </React-DocumentFragment>
  )
}


// class Mic extends React.Component {
//   constructor(props) {

//     super(props);
    

//     this.recordToggle = this.recordToggle.bind(this);
//     this.props.recognition.lang = 'th';
//   }

//   recordToggle() {
//     $("#recButton").addClass("notRec");
//     document.getElementById("recButton").addEventListener("click", () => {
//       if ($("#recButton").hasClass("notRec")) {
//         console.log("rec");
//         this.setState({ record: true });
//         this.props.startListening();
//         $("#recButton").removeClass("notRec");
//         $("#recButton").addClass("Rec");
//       } else {
//         console.log("stop");
//         this.setState({ record: false });
//         this.props.stopListening();
//         $("#recButton").removeClass("Rec");
//         $("#recButton").addClass("notRec");

//         console.log("this transcript", this.props.transcript);
//       }
//     });
//   }

//   componentDidMount() {
//     this.recordToggle();
//   }

//   componentDidUpdate(prevProps, prevState, snapshot){
//     if (this.props.transcript !== prevProps.transcript) {
//       const { changeMessageBox } = useContext(GlobalContext);
//       changeMessageBox(this.props.transcript);
//     }
//   }

//   render() {
//     return (
//       <React-DocumentFragment>
//         <div className="p-0">
//           {/* <div
//             record={this.state.record}
//             className="sound-wave collapse"
//             onStop={this.onStop}
//             onData={this.onData}
//             strokeColor="#ebf0f5"
//             backgroundColor="#34312e"
//           /> */}
//         <div id="recButton" className="rec-button mr-1">
//           <i className="fas fa-microphone fa-3x mic-pic"></i>
//         </div>
//         </div>
//       </React-DocumentFragment>
//     );
//   }
// }

Mic.propTypes = propTypes;

const options = {
  autoStart: false,
  continuous: false,
}

export default SpeechRecognition(options)(Mic);
