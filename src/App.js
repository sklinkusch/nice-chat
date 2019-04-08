import React, { Component } from "react"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Sidebar />
          <ChatWindow />
        </Row>
      </div>
    )
  }
}

const Sidebar = props => (
  <div className="sidebar fullHeight">
    {[1, 2, 3, 4].map(item => (
      <div className="contact-card">Hello {item}</div>
    ))}
  </div>
)

const ChatWindow = props => <div className="chatwindow fullHeight" />

const Row = props => {
  console.log(props)
  return <div className="flex-row">{props.children}</div>
}

export default App
