import React from 'react';

import './Button.css';

export const Button = (props) => {
  return <button className="btn" type='submit'>{props.children}</button>;
};
