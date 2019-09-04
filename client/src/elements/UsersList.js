import React, {Component} from 'react';



class UsersList extends Component {

  render(){
    let result = [this.props.myName];

    for (let str of this.props.posts) {
      if (!result.includes(str.authorName)) {
        result.push(str.authorName);
      }
    }
console.log(result);
    return (
        result.map(
          (element, index) => <div className="media text-muted pt-3" key={index}>
          <svg className="bd-placeholder-img mr-2 rounded" width="15" height="15" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect fill="#007bff" width="100%" height="100%"></rect><text fill="#007bff" dy=".3em" x="50%" y="50%">32x32</text></svg>
          <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-center w-100">
              <strong className="text-gray-dark">@{element}</strong>
            </div>
          </div>
        </div>
      )
    )
  }
}


export default UsersList;
