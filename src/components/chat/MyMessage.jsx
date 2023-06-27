import React from 'react';

const MyMessage = (props) => {
  return (
    <div className="chat-message mine">
      <time>{props.time}</time>
      <div className="bubble">
        {props.text}
      </div>
    </div>
  );
};

export default MyMessage;