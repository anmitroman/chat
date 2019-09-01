import React from 'react';



const MessagesList =  (props) => props.posts.map(element => <div key={element.key}>{element.authorName}<p>{element.content}</p></div>)


export default MessagesList
