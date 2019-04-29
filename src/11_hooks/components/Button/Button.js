import React from 'react';

const Button = ({ title, onChange }) => (
  <button onClick={onChange} className='btn btn-outline-secondary mx-1 px-4'>{title}</button>
);

export default Button;