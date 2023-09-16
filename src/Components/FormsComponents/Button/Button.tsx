import React from 'react';
import { ButtonPropType } from './Button.interface';
import styles from './Button.module.scss';

const Button = ({ disabled = false, ...props }: ButtonPropType) => {
  const statusStyles = disabled ? styles.disabled : '';
  const styleClases = `${styles.button} ${statusStyles}`;

  return (
    <button
      className={styleClases}
      onClick={() => {
        !disabled && props.onClick && props.onClick();
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
