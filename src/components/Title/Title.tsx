import { TitleProps } from './Title.type';

const Title = (props: TitleProps) => {
  switch (props.variant) {
    case 'title1':
      return (
        <h1 {...props} className={`title1 ${props.className}`}>
          {props.label}
        </h1>
      );
    case 'title2':
      return (
        <h2 {...props} className={`title2 ${props.className}`}>
          {props.label}
        </h2>
      );
    case 'title3':
      return (
        <h3 {...props} className={`title3 ${props.className}`}>
          {props.label}
        </h3>
      );
    case 'subtitle':
      return (
        <h3 {...props} className={`subtitle ${props.className}`}>
          {props.label}
        </h3>
      );
    default:
      return (
        <h1 {...props} className={`title1 ${props.className}`}>
          {props.label}
        </h1>
      );
  }
};

export default Title;
