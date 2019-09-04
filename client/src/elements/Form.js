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
        <div className="form-group">
          <input type="text" className="form-control" placeholder={this.props.placeHolder} id="input" required />
        </div>
      </form>
    )
  }
}



export default Form
