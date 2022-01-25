import { ButtonNormalProps } from './Button.Normal.type';

const ButtonNormal = (props: ButtonNormalProps) => {
  const { rounded, ...rest } = props;

  return (
    <button
      {...rest}
      onClick={props.onClick}
      className={`
      ${
        props?.variant === 'white'
          ? 'button-white'
          : props?.variant === 'outline'
          ? 'button-outline'
          : 'button-primary'
      }
      ${rounded ? 'rounded-lg' : ''}
      ${props.className}`}
      type={props.type || 'button'}>
      {props.label}
    </button>
  );
};

export default ButtonNormal;
