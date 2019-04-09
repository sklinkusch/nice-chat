import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/MessageWindow";
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

export default App;
