
import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

var data = {
  currentUser: {name: "", lastSubmittedName: ""},
  messages: [],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  updateText = (message) => {
    const messages = this.state.messages.concat(message); //to add new message to messages: []
    this.setState({messages: messages}) //key=this.state.data.messages, value=^
  }

  updateName = (nameProvided) => {
    this.setState({currentUser: {
                  name: nameProvided,
                  lastSubmittedName: this.state.currentUser.lastSubmittedName
                }})
  }

  submitName = (nameProvided) => {
    this.setState({currentUser: {
                  name: this.state.currentUser.name,
                  lastSubmittedName: nameProvided}
    })
  }

  sendMessage = (new_message) => {  //sendMessage is a cb fn
    this.socket.send(JSON.stringify(new_message));  //takes new_message, turns it into a string and sends it to this.socket server
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:5000');
    this.socket.onmessage = (event) => {  //server sends data/messages to client-side who is listening on 5000
      const data = JSON.parse(event.data);  //parsed event.data from server
      console.log(data);
      switch(data.type) {
        case "incomingMessage":
          this.updateText(data);  //concat new parsed message
          break;
        case "incomingNotification":
          this.updateText(data);
          break;
        case "onlineUsers":
          this.setState({onlineUsers: data.howMany})  //setState to object that adds new key onlineUsers and value is howMany
          break;
        default:
          throw new Error("Unknown event type " + data.type);
      }
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <nav>
          <h1> Chatty</h1>
          <span> {this.state.onlineUsers} </span>
        </nav>
          <MessageList messages = {this.state.messages}/>
          <ChatBar
            currentUser={this.state.currentUser} sendToServer={this.sendMessage}
            updateName={this.updateName}
            submitName={this.submitName}
          /> {/* sending props(fn) down as sendToServer to ChatBar  */}
      </div>
    )
  }
}
export default App;
