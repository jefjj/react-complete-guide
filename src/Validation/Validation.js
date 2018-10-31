import React from 'react';
import './Validation.css';

const minimun = 5;
let validationText = '';

const validateTextString = (size) => {
  return (size < minimun ? 'Text too short!' : 'Text long enough!');
}

const validation = (props) => {
  return (
    <p className="Validation">{ validateTextString(props.testStringSize)}</p>
  );
};

export default validation;
