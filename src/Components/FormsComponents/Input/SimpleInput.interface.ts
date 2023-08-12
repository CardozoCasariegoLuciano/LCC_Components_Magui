import { ChangeEvent } from 'react';

export interface SimpleInputPropType {
  icon?: string;
  errorMessage?: { [key: string]: string };
  onChange?: (_ev: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (_ev: ChangeEvent<HTMLInputElement>) => void;
  styles?: { [key: string]: string };
  placeholder?: string;
  cleanInput?: () => void;
  label?: string;
  type?: 'text' | 'password';
  name?: string;
  value?: string;
}
