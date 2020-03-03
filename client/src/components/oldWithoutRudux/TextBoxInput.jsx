import React,{useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import PropTypes from "prop-types";

import Mic from "./Mic";

const propTypes = {
    sendMsg: PropTypes.func.isRequired,
  };

export const TextBoxInput = (props) => {

    const { messageBox, changeMessageBox, clearMessageBox } = useContext(GlobalContext);

    return (
        <form
              className="msger-inputarea"
              onSubmit={async e => {
                e.preventDefault();
                await props.sendMsg(messageBox);
                clearMessageBox();
              }}
            >
              <Mic/>

              <input
                type="text"
                className="msger-input"
                placeholder="Enter your message..."
                value={messageBox}
                onChange={e => changeMessageBox( e.target.value )}
              />
              <button type="submit" className="msger-send-btn">
                Send
              </button>
            </form>
    )
}

TextBoxInput.propTypes = propTypes
