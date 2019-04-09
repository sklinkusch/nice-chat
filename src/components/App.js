import React, { Component } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./MessageWindow";
import "../styles/App.css";

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

export default App;
