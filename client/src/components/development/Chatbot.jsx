import React, { useEffect } from "react";
import "../../css/chat.css";
import TextBoxInput from './TextBoxInput';
import MessageBlock from './MessageBlock';
import LoadingChat from './LoadingChat';

// redux things
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Chatbot = ({
    messageCollections,
    isLoadingResponse,
    user_name,
    user_img
}) => {

    const bot_img = "https://image.flaticon.com/icons/svg/327/327779.svg";
    const bot_name = "CPE-bot";

    const formatDate = date => {
        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();
        return `${h.slice(-2)}:${m.slice(-2)}`;
    }

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

                    {isLoadingResponse ? <LoadingChat/> : null}
                    

                    <div style={{ float: "left", clear: "both" }}
                        ref={(el) => { messagesEnd = el; }}>
                    </div>
                </div>

                <TextBoxInput />
            </section>
        </div>
    )
}

Chatbot.propTypes = {
    messageCollections: PropTypes.array.isRequired,
    isLoadingResponse: PropTypes.bool.isRequired,
    user_name: PropTypes.string.isRequired,
    user_img: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    messageCollections: state.message.messageCollections,
    isLoadingResponse: state.message.isLoadingResponse,
    user_name: state.user.user_name,
    user_img: state.user.user_img,
});

export default connect(mapStateToProps, null)(Chatbot)
