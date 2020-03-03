import React, { useEffect } from "react";
import "../../css/chat.css";
import TextBoxInput from './TextBoxInput';
import MessageBlock from './MessageBlock';

// redux things
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setResponseMessage } from '../../redux/actions/message';


const Chatbot = ({
    setResponseMessage,
    messageCollections
}) => {

    const user_img = "https://image.flaticon.com/icons/svg/145/145867.svg";
    const bot_img = "https://image.flaticon.com/icons/svg/327/327779.svg";

    const user_name = "Guest";
    const bot_name = "CPE-bot";

    const formatDate = date => {
        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();
        return `${h.slice(-2)}:${m.slice(-2)}`;
    }

    // run once when website start
    useEffect(() => {
        setResponseMessage(`สวัสดี ${user_name} ฉันคือ Bot ของ CPE-Chatbot มีอะไรให้ช่วย😄`);
    }, [setResponseMessage]);

    // scroll chat to botton
    let messagesEnd = null;
    const scrollToBottom = () => {
        if (messagesEnd != null)
            messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    });

    return (
        <div className="m-box anantason">
            <section className="msger">

                <div className="msger-chat">
                    {messageCollections.map(message => (
                        <MessageBlock
                            key={message.id}
                            text={message.text}
                            leftRight={message.leftRight}
                            img={message.leftRight === 'right' ? user_img : bot_img}
                            name={message.leftRight === 'right' ? user_name : bot_name}
                            dateNow={formatDate(new Date())}
                        />
                    ))}
                    <div style={{ float: "left", clear: "both" }}
                        ref={(el) => { messagesEnd = el; }}>
                    </div>
                </div>

                <TextBoxInput sessionId={user_name} />
            </section>
        </div>
    )
}

Chatbot.propTypes = {
    messageCollections: PropTypes.array.isRequired,
    setResponseMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    messageCollections: state.message.messageCollections,
});

export default connect(mapStateToProps, { setResponseMessage })(Chatbot)
