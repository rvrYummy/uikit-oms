enum ColorBaseEnum {
  black = '#000',
  white = '#FFF',
}

export interface CheckboxProps {
  onPress: () => void;
  checkColor: ColorBaseEnum;
  disabled?: boolean;
  isChecked?: boolean;
}
