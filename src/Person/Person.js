import React from 'react';
import Radium from 'radium';

const styles = {
  '@media (min-width: 500px)': {
    width: '400px'
  }
}

const person = (props) => {
  return (
    <div 
      className="Person"
      style={styles}>
      <p onClick={props.removed}>I'm {props.name}, I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default Radium(person);
