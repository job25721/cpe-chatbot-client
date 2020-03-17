import React from 'react';

import Mic from './Mic';

// redux things
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeMessageBox, sendInputMessageToServer } from '../../redux/actions/message';

const TextBoxInput = (props) => {

  const submitMessage = async (e) => {
    e.preventDefault();
    await props.sendInputMessageToServer(props.messageBoxInput, props.sessionId);
  }

  return (
    <form
      className="msger-inputarea"
      onSubmit={submitMessage}
    >

      <Mic />

      <input
        type="text"
        className="msger-input"
        placeholder="Enter your message..."
        value={props.messageBoxInput}
        onChange={e => props.changeMessageBox(e.target.value)}
      />
      <button type="submit" className="msger-send-btn">
        Send
      </button>
    </form>
  )

}

TextBoxInput.propTypes = {
  messageBoxInput: PropTypes.string.isRequired,
  sendInputMessageToServer: PropTypes.func.isRequired,
  changeMessageBox: PropTypes.func.isRequired,
  sessionId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  messageBoxInput: state.message.messageBoxInput,
  sessionId: state.user.sessionId,
})

export default connect(mapStateToProps, { sendInputMessageToServer, changeMessageBox })(TextBoxInput)
