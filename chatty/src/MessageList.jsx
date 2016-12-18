import React, {Component} from 'react';
import Message from './Message.jsx';
const uuid = require('node-uuid');

class MessageList extends Component {
  render(props) {
    console.log("Rendering <MessageList/>")
    return (
        <div id="message-list">
          {this.props.messages.map ((message) => {
            return <Message  msg={message} key={uuid.v4()}/>
          })}
          <div className="message system"></div>
        </div>
    );
  }
}
export default MessageList;
