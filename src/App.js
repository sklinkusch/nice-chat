import React, { Component } from "react";

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
    <div className="contact-card flex-row">
      <Avatar file="./avatar.png" />
      <div className="person-container">
        <Name name="Person Name" />
        <Description desc="LMAO ROFL...IPSUM" />
      </div>
    </div>
    {[2, 3, 4, 5].map(item => (
      <div className="contact-card" key={item}>
        Hello {item}
        {/* <Avatar />
        <div className="person-container">
          <Name name="Person Name" />
          <Description desc="LMAO ROFL...IPSUM" />
        </div> */}
      </div>
    ))}
  </div>
);

const ChatWindow = props => (
  <div className="chatwindow fullHeight">
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
export default App;
