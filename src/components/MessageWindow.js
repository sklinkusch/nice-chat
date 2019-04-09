import React from "react";
import chat from "./chat";
import avatar from "../images/avatar.png";
import avatar2 from "../images/avatar2.png";
import "../styles/MessageWindow.css";

// Message window

const ChatWindow = props => (
  <div className="chatwindow fullHeight">
    <ChatMessage text={chat[0].message} file={avatar} left={chat[0].left} />
    <ChatMessage text={chat[1].message} file={avatar2} left={chat[1].left} />
    <InputField />
  </div>
);

const ChatMessage = props => {
  if (props.left) {
    return (
      <div className="message-container flex-start">
        <div className="avatar-ct">
          <img src={props.file} alt="avatar" />
        </div>
        <div className="message-left">
          <div className="messageText">{props.text}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="message-container flex-end">
      <div className="message-right">
        <div className="messageText">{props.text}</div>
      </div>
      <div className="avatar-ct">
        <img src={props.file} alt="avatar" />
      </div>
    </div>
  );
};

const InputField = props => {
  return (
    <div className="inputfield">
      <input type="text" placeholder="You can write words here!" />
    </div>
  );
};

export default ChatWindow;
