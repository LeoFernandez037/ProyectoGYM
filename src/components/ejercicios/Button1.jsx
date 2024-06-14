import React from 'react';

const Button1 = ({ children, onClick, className }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button1;
