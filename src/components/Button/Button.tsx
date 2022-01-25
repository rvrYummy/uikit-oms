import React from 'react';

import ButtonNormal from './Button.Normal';

const Button = (props: { children: React.ReactNode }) => {
  return props.children;
};

Button.Normal = ButtonNormal;

export default Button;
