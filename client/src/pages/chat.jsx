import React, { useEffect } from "react";

import Chatbox from "../components/development/Chatbot";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: "SET_ENABLE_BOT_SPEECH", payload: true })
  })
  
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
