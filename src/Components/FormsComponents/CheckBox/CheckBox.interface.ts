import { ChangeEvent } from 'react';

export type CheckBoxPropType = {
  label?: string;
  labelLeft?: boolean;
  defaultCheck?: boolean;
  onChange?: (_ev: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
};
