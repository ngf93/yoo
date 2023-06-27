import React from 'react';

const ManagerMessage = (props) => {
  return (
    <div className="chat-message manager">
      <time>{props.time}</time>
      <div className="bubble">
        {props.text}
      </div>
    </div>
  );
};

export default ManagerMessage;