import React from "react";
import avatar from "../avatar.png";
import avatar2 from "../avatar2.png";

// Message window

const ChatWindow = props => (
  <div className="chatwindow fullHeight">
    <ChatMessage
      text="Do you know that: Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus"
      file={avatar}
      left={true}
    />
    <ChatMessage text="LMAO ROFL...IPSUM" file={avatar2} left={false} />
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
