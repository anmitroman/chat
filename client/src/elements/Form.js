import React, {Component} from 'react';

class Form extends Component {
  handleSubmit = event =>{
    event.preventDefault();
    let input = event.target.elements.input;
    this.props.addMessage(input.value);
    //console.log(input.value);
    input.value = '';
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="input" />
      </form>
    )
  }
}



export default Form
