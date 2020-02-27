import React from "react";

import Navbar from "../components/Navbar";
import Chatbox from "../components/Chatbox";
import Chatbox_extend from "../components/Chatbox_extend"

export default class Chat extends React.Component {
  render() {
    return (
      <React-DocumentFragment>
        <div className="">
            <Navbar />
<<<<<<< HEAD
            <div className="d-flex justify-content-center mr-auto"  >
                <Chatbox />
=======
            <div className="d-flex justify-content-center mr-auto">
                {/* <Chatbox /> */}
                <Chatbox_extend />
>>>>>>> 7d44417bc9fdff70882d710f7d01ab3f8a09ceee
            </div>
        </div>
      </React-DocumentFragment>
    );
  }
}
