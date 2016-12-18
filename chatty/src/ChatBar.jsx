import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}; //what's typed in before submit is hit
  }

  updateInputText = (event) => {
    this.setState({value: event.target.value}); //value is what's being typed in #new-message
  }

  submitInput = (event) => {
    event.preventDefault();
    if (this.props.currentUser.name !== this.props.currentUser.lastSubmittedName) { //if previous user isn't the same as lastSubmittedName, then send the following to server
      this.props.sendToServer({
        username: this.props.currentUser.name,
        type: "postNotification",
        content: `${this.props.currentUser.lastSubmittedName} has changed their name to ${this.props.currentUser.name}`
      })
      this.props.submitName(this.props.currentUser.name)  //submitName function saves lastSubmittedName
    }
    this.props.sendToServer({ //receives props,changes this.state.value to new_message and sends username & content to sendMessage in App.jsx
      username: this.props.currentUser.name,
      type: "postMessage",
      content: this.state.value}) //#new-message object once submitted
    this.setState({value:''});  //clears #new-message once submitted
    }
  }

  updateUser = (event) => {
    this.props.updateName(event.target.value);
  }

  render() {
    return (
        <form onSubmit={this.submitInput}>
          <footer>
            <input id="username" type="text" placeholder="Type username (optional)" value={this.props.currentUser.name} onChange={this.updateUser}/>
            <input id="new-message" type="text" placeholder="Type a message and hit ENTER" value={this.state.value} onChange={this.updateInputText}/>
            <input id="submit-button" type ="submit"/>
            {/* css uses display: none; to hide submit-button. Another way around would be to put form inside footer and remove btn(?) */}
          </footer>
        </form>
    )
  }
}
export default ChatBar;
