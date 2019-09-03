import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './elements/Form';
import MessagesList from './elements/MessagesList';



class App extends Component {
state = {posts: [], myName: undefined, socket: undefined, room: undefined};


addMessage = message => {
  this.state.posts.push({
   key: message.key,
   authorName: message.authorName,
   content: message.content
 })
  this.setState({
    posts: this.state.posts
  })
}

handleSubmit = message =>{
  this.state.socket.send(
    JSON.stringify({
      authorName: this.state.myName,
      content: message
    })
  )
}

handleSetName = name => {
  this.setState({
    myName: name
  })
  this.state.socket = new WebSocket(this.props.uri);

  this.state.socket.onmessage = event => {
    const message = JSON.parse(event.data);
  //  console.log('sss' + event.data);
    if(message.type === 'message'){
      this.addMessage(message.message);
    }
    else if (message.type === 'messages') {
      this.setState({
        posts: message.messages
      })
    }
    console.log("Getted:" + event.data);
  };
}

handleSetRoom = room => {
  this.setState({
    room: room
  })
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {!this.state.myName ? <Form addMessage={this.handleSetName}/> :
          !this.state.room ? <Form addMessage={this.handleSetRoom}/> :
          <div>
          <Form addMessage={this.handleSubmit}/>
          <MessagesList posts={this.state.posts} />
          </div>

        }

      </header>
    </div>
  );
}
}

export default App;
