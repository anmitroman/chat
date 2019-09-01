import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './elements/Form';
import MessagesList from './elements/MessagesList';


let posts = [
  {
    key:1,
    authorName: "Семен",
    content: "Привет!"
  },
  {
    key:2,
    authorName: "Зина",
    content: "Привет в ответ!"
  },
  {
    key:3,
    authorName: "Игорь",
    content: "Я в теме"
  }
]


class App extends Component {
state = {posts: posts, myName: 'Сергей'};
addMessage = message => {
  this.state.posts.push({
   key:posts.length + 1,
   authorName: this.state.myName,
   content: message
 })
  this.setState({
    posts: this.state.posts
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
        <Form addMessage={this.addMessage}/>
        <MessagesList posts={this.state.posts} />
      </header>
    </div>
  );
}
}

export default App;
