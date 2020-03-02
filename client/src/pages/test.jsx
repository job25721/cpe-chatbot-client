import React from "react";
import { ReactMic } from "@cleandersonlobo/react-mic";
import $ from "jquery";
import "../css/record-button.css";
import Axios from "axios";
import api from "../api";
import Mic from "../components/Mic"
import MyTest from '../components/MyTest'

export default class test extends React.Component {
  
  render() {
    return (
      <React-DocumentFragment>
        
        <MyTest/>
        
        {/* <div>
          <ReactMic
            record={this.state.record}
            className="sound-wave collapse"
            onStop={this.onStop}
            onData={this.onData}
            strokeColor="#ebf0f5"
            backgroundColor="#34312e"
          />
        </div>
        <button id="recButton" className="rec-button text-center align-middle">
          <i className="fas fa-microphone fa-lg"></i>
        </button> */}
      </React-DocumentFragment>
    );
  }
}
