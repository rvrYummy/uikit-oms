import React from 'react';

import { RadioButtonProps } from './RadioButton.type';

const RadioButton = (props: RadioButtonProps) => {
  return (
    <div
      className={`flex items-center ${
        props.isActive
          ? 'border-primary-green'
          : props.disabled
          ? 'border-white'
          : 'border-gray-300'
      } rounded-xl border-2 h-5 justify-center p-0 w-5`}
      {...props}>
      <div
        className={`${props.isActive ? 'bg-primary-green' : 'bg-transparent'} rounded-xl h-3 w-3`}
        {...props}
      />
    </div>
  );
};

export default RadioButton;
