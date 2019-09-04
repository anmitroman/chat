import React, {Component} from 'react';
import {animateScroll} from 'react-scroll';
import './App.css';
import Form from './elements/Form';
import MessagesList from './elements/MessagesList';
import UsersList from './elements/UsersList';


class App extends Component {
state = {posts: [], myName: undefined, room: undefined, usersOnline: []};
socket: undefined;

addMessage = message => {
  this.state.posts.push({
   key: message.key,
   authorName: message.authorName,
   content: message.content,
   date: message.date
 })
  this.setState({
    posts: this.state.posts
  })
}

handleSubmit = message =>{
  this.socket.send(
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
  this.socket = new WebSocket(this.props.uri);

  this.socket.onmessage = event => {
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

componentDidUpdate(){
  animateScroll.scrollToBottom();
}

render(){
  return (
    <div className="container">
      <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
        <div className="lh-100">
          <h1 className="mb-0 text-white lh-100">Просточат</h1>

        </div>
      </div>
      <div className="col-md-12 col-xs-12">


        {!this.state.myName ?
          <div className="my-3 p-3 bg-white rounded shadow-sm">
            <Form addMessage={this.handleSetName}  placeHolder="Введите Ваше имя"/>
            </div> :
          <div>
            <div className="my-3 p-3 bg-white rounded shadow-sm col-md-8 col-xs-12 float-left">
              <h6 className="border-bottom border-gray pb-2 mb-0">Последние обновления в комнате:</h6>
                <small>Вы зашли под именем: @{this.state.myName}</small>
                <MessagesList posts={this.state.posts} />
                <Form addMessage={this.handleSubmit} placeHolder="Введите сообщение"/>
            </div>
            <div className="my-3 p-3 bg-white rounded shadow-sm col-md-4 col-xs-12 float-right">
              <h6 className="border-bottom border-gray pb-2 mb-0">С нами в чате:</h6>
                <UsersList posts={this.state.posts} myName={this.state.myName} />
            </div>
          </div>
        }

        </div>

    </div>
  );
}
}

export default App;
