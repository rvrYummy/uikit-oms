export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonNormalProps {
  label: string;
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'white' | 'outline';
  type?: ButtonType;
  onClick?: () => void;
  rounded?: boolean;
}
