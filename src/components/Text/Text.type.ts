export type TextVariant =
  | 'x-x-large'
  | 'x-large'
  | 'large'
  | 'micro'
  | 'regular'
  | 'small'
  | 'super-small';

export interface TextProps {
  variant?: TextVariant;
  label: string;
  className?: string;
}
