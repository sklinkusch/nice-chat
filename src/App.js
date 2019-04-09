import React, { Component } from "react";
import ChatWindow from "./components/MessageWindow";
import avatar from "./avatar.png";
import avatar2 from "./avatar2.png";
import "./App.css";

// Main part
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

// Parts

const Row = props => {
  console.log(props);
  return <div className="flex-row">{props.children}</div>;
};

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

// Sidebar

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

const Dot = props => {
  const klasse = `dot ${props.color}`;
  return <div className={klasse} />;
};
export default App;
