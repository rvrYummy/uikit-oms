import React from 'react';

import Input from './Form.Input';
import Select from './Form.Select';

const Form = (props: { children: React.ReactNode }) => {
  return props.children;
};

Form.Input = Input;
Form.Select = Select;

export default Form;
