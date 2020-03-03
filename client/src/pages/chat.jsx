import React from "react";

import Chatbox from "../components/development/Chatbot";
import {Helmet} from "react-helmet";
export default class Chat extends React.Component {
  render() {
    return (
      <React-DocumentFragment>
        <Helmet>
          <title>CPE-Chatbot</title>
        </Helmet>
        <span className="t-head d-flex justify-content-center text-cb">
          CPE Chat Bot
        </span>
        <div className="d-flex justify-content-center mr-auto">
          <Chatbox />
        </div>
      </React-DocumentFragment>
    );
  }
}
