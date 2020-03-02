import React from "react";

import Navbar from "../components/Navbar";
import Chatbox from "../components/Chatbox";

export default class Chat extends React.Component {
  render() {
    return (
      <React-DocumentFragment>
        <span className="noselect t-head d-flex justify-content-center text-cb">
          CPE Chat Bot
        </span>
        <div className="d-flex justify-content-center mr-auto">
          <Chatbox />
        </div>
      </React-DocumentFragment>
    );
  }
}
