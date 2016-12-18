import React, {Component} from 'react';

class Message extends Component {
  render(props) {
    return (
      <div className="message">
        <span className="username">{this.props.msg.username}</span>
        <span className="content">{this.props.msg.content}</span>
      </div>
    )
  }
}
export default Message;
