import React from 'react'
// redux things
import PropTypes from 'prop-types';

const MessageBlock = (props) => {
    return (
        <div className={`msg ${props.leftRight}-msg`}>
            <div
                className="msg-img"
                style={{
                    backgroundImage: `url(${props.img})`
                }}
            />

            <div className="msg-bubble">
                <div className="msg-info">
                    <div className="msg-info-name">{props.name}</div>
                    <div className="msg-info-time">{props.dateNow}</div>
                </div>
                
                <div className="msg-text" dangerouslySetInnerHTML={{
                    __html: props.text
                }}/>
            </div>
        </div>
    )
}

MessageBlock.propTypes = {
    leftRight: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dateNow: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default MessageBlock;
