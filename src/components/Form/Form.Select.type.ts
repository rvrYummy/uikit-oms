export interface SelectProps {
  label?: string;
  name?: string;
  className?: string;
  borderRadius?: string;
  borderColor?: string;
  list: Array<{ label: string; value: string }>;
  placeholder?: string;
  secure?: boolean;
}
