import { Text } from 'components/Text';
import React, { LegacyRef } from 'react';

import { InputProps } from './Form.Input.type';

const Input = (props: InputProps, ref: LegacyRef<HTMLInputElement>) => {
  const { secure, exampleValue, ...rest } = props;

  return (
    <>
      <label className={`block ${props.label ? 'pt-3' : undefined}`}>
        <Text
          label={props.label || ''}
          variant="micro"
          className="uppercase font-interSemiBold text-gray-600"
        />
      </label>
      <input
        {...rest}
        ref={ref}
        type={secure ? 'password' : 'text'}
        className="base-input"
        placeholder={props.placeholder}
      />
      {exampleValue && (
        <Text label={exampleValue} variant="super-small" className="mt-2 text-gray-500" />
      )}
    </>
  );
};

export default React.forwardRef(Input);
