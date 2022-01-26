import { Text } from 'components/Text';

import { SelectProps } from './Form.Select.type';

const Select = (props: SelectProps) => {
  return (
    <label>
      <Text
        label={props.label || ''}
        variant="micro"
        className="uppercase font-interSemiBold text-gray-600"
      />
      <select
        className={`${props.borderRadius ?? 'rounded-xl'} ${
          props.borderColor ?? 'border-gray-500'
        } block w-full focus:border-black focus:ring-black focus:ring-0 border-[1px] border-solid p-3`}
        {...props}
        name={props.name}
        placeholder={props.placeholder}>
        {props.list.map((data, index) => (
          <option key={index} value={data.value}>
            {data.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
