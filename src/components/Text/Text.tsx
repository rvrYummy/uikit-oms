import { TextProps } from './Text.type';

const Text = (props: TextProps) => {
  return (
    <p
      {...props}
      className={`
        ${props.variant === 'x-x-large' ? 'text-x-x-large' : ''}
        ${props.variant === 'x-large' ? 'text-x-large' : ''}
        ${props.variant === 'large' ? 'text-large' : ''}
        ${!props.variant || props.variant === 'regular' ? 'text-regular font-interLight' : ''}
        ${props.variant === 'small' ? 'text-small' : ''}
        ${props.variant === 'super-small' ? 'text-super-small' : ''}
        ${props.variant === 'micro' ? 'text-micro' : ''}
        ${props.className}
    `}>
      {props.label}
    </p>
  );
};

export default Text;
