import React, { Component } from "react";
import avatar from "./avatar.png";
import avatar2 from "./avatar2.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Sidebar />
          <ChatWindow />
        </Row>
      </div>
    );
  }
}

const Sidebar = props => (
  <div className="sidebar fullHeight">
    {[1, 2, 3, 4, 5].map(item => (
      <div className="contact-card flex-row" key={item}>
        <Avatar file={avatar} />
        <div className="person-container">
          <Name name="Person Name" />
          <Description desc="LMAO ROFL...IPSUM" />
        </div>
        <Dot color="bluey-purple" />
      </div>
    ))}
  </div>
);

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

const Row = props => {
  console.log(props);
  return <div className="flex-row">{props.children}</div>;
};

const Avatar = props => {
  if (props.file) {
    return (
      <div className="avatar">
        <img src={props.file} alt="avatar" />
      </div>
    );
  }
  return <div className="avatar" />;
};

const Name = props => {
  return <div className="personname">{props.name}</div>;
};

const Description = props => {
  return <div className="description">{props.desc}</div>;
};

const InputField = props => {
  return (
    <div className="inputfield">
      <input type="text" placeholder="You can write words here!" />
    </div>
  );
};

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

const Dot = props => {
  const klasse = `dot ${props.color}`;
  return <div className={klasse} />;
};
export default App;
