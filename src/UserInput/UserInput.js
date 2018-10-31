import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return (
    <input 
      type="text" 
      className="UserInput"
      value={props.userName}
      onChange={props.changed}/>
  );
};

export default userInput;
