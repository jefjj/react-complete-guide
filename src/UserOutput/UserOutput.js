import React from 'react';
import './UserOutput.css';

const styles = {
  fontSize: '16px',
  color: '#999999'
};

const userOutput = (props) => {
  return (
    <div style={styles}>
      <p>{ props.user }</p>
      <p>{ props.text }</p>
    </div>
  );
};

export default userOutput;