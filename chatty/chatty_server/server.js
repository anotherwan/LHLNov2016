
const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('node-uuid');

const PORT = 5000;

const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.broadcast = (data) => {           //broadcasting function that to clients
  wss.clients.forEach((client) => {
    client.send(data);
  })
}

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');  //shows that client is connected to ws
  console.log(wss.clients.length);  //shows me how many clients are online
  let online_users = {howMany: `${wss.clients.length} user(s) online`,
                      type: "onlineUsers"}  //variable of an object showing howMany are online and a type that corresponds to type in App.jsx
  wss.broadcast(JSON.stringify(online_users));  //broadcast stringified var

  ws.on('message', (event) => { //receives new_message/(Data) from client
    let new_msg = JSON.parse(event);  //new_msg is the parsed new_message from App.jsx
    console.log('Message', new_msg)
    let new_response = {};  //create new object to add id and change so that original object from client is unaltered
    switch(new_msg.type) {  //server receives props via submitInput fn and compares the type with the type of new_msg
      case "postMessage": //if type of msg === postMessage,
        new_response.id = uuid.v4();  //add id, change type to incomingMessage
        new_response.type = "incomingMessage";
        new_response.username = new_msg.username;
        new_response.content = new_msg.content;
      break;
      case "postNotification":  //if postNotificaiton, change to incomingNotification
        new_response.type = "incomingNotification"
        new_response.content = new_msg.content;
      break;
    }

    wss.broadcast(JSON.stringify(new_response));  //sending new_msg as string to clientside App.jsx
    console.log('Response', new_response);
  })
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));

});
