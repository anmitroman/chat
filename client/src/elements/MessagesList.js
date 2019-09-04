import React from 'react';



const MessagesList =  (props) => props.posts.map(
  element => <div className="media text-muted pt-3" key={element.key}>
  <svg className="bd-placeholder-img mr-2 rounded" width="15" height="15" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect fill="#007bff" width="100%" height="100%"></rect><text fill="#007bff" dy=".3em" x="50%" y="50%">32x32</text></svg>
  <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
    <strong className="d-block text-gray-dark">@{element.authorName}</strong>
    <small className="d-block text-info">{element.date}</small>
    {element.content}
  </p>
  </div>
  );


export default MessagesList;
