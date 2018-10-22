import React from 'react';

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
