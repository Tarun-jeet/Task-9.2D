// src/components/Label.js
import React from 'react';


function Label({ text, htmlFor }) {
  return <label htmlFor={htmlFor}>{text}</label>;
}

export default Label;
