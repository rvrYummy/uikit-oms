import React from 'react';

import Product from './Card.Product';

const Card = (props: { children: React.ReactNode }) => {
  return props.children;
};

Card.Product = Product;

export default Card;
