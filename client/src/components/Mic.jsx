import React from "react";
import { ReactMic } from "@cleandersonlobo/react-mic";
import $ from "jquery";
import "../css/record-button.css";
import Axios from "axios";

export default class Mic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    };
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.recordToggle = this.recordToggle.bind(this);
  }

  startRecording() {
    this.setState({ record: true });
    console.log(this.state.record);
  }

  stopRecording() {
    this.setState({ record: false });
    console.log(this.state.record);
  }

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);
    const url = "http://localhost:5000/api/audio-message";
    const formData = new FormData();
    formData.append("audio", recordedBlob.blob);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    Axios.post(url, formData, config);
  }

  recordToggle() {
    $("#recButton").addClass("notRec");
    document.getElementById("recButton").addEventListener("click", () => {
      if ($("#recButton").hasClass("notRec")) {
        console.log("rec");
        this.setState({ record: true });
        $("#recButton").removeClass("notRec");
        $("#recButton").addClass("Rec");
      } else {
        console.log("stop");
        this.setState({ record: false });
        $("#recButton").removeClass("Rec");
        $("#recButton").addClass("notRec");
      }
    });
  }

  componentDidMount() {
    this.recordToggle();
  }
  render() {
    return (
      <React-DocumentFragment>
        <div className="p-0">
          <ReactMic
            record={this.state.record}
            className="sound-wave collapse"
            onStop={this.onStop}
            onData={this.onData}
            strokeColor="#ebf0f5"
            backgroundColor="#34312e"
          />
        <div id="recButton" className="rec-button mr-1">
          <i className="fas fa-microphone fa-3x mic-pic"></i>
        </div>
        </div>
      </React-DocumentFragment>
    );
  }
}
