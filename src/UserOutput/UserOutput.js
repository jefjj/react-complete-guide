import React from 'react';

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