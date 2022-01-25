export type TitleVariant = 'title1' | 'title2' | 'title3' | 'subtitle';

export interface TitleProps {
  variant?: TitleVariant;
  label: string;
  className?: string;
}
