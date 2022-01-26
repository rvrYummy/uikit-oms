import { Text } from 'components/Text';

import { CardProductProps } from './Card.Product.type';

const Product = (props: CardProductProps) => {
  return (
    <div
      className={`group ${props.backgroundColor ?? 'bg-white'} ${
        props.rounded ?? 'rounded-none'
      } p-4 m-1 h-24 items-center cursor-pointer ${props.borderColor ?? 'border-gray-300'} ${
        props.borderWidth ?? 'border[1px]'
      } hover:bg-gray-200 active:bg-gray-300 justify-center flex`}
      onClick={props.onPress}
      {...props}>
      <Text
        className="group-hover:text-primary-green group-active:text-gray-700 text-center font-interSemiBold"
        label={props.label}
      />
    </div>
  );
};

export default Product;
