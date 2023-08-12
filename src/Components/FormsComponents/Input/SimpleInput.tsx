import React, { useState } from 'react';
import Svg from '../../SVGs/Svg';
import { SimpleInputPropType } from './SimpleInput.interface';
import styles from './SimpleInput.module.scss';

const SimpleInput = ({ type = 'text', ...props }: SimpleInputPropType) => {
  const [svgEye, setSvgEye] = useState('EyeOpen');
  const [inputType, setInputType] = useState(type);

  const inputID = `id_${props.name}`;

  const errorMessagge =
    props.errorMessage &&
    props.errorMessage[Object.keys(props.errorMessage!)[0]];

  const defaultPlaceholder = props.name
    ? `Write your ${props.name} here`
    : 'Write here';

  const inputPlaceholder = props.placeholder
    ? props.placeholder
    : defaultPlaceholder;

  const toggleInputType = () => {
    if (inputType === 'text') {
      setInputType('password');
      setSvgEye('EyeOpen');
    } else {
      setInputType('text');
      setSvgEye('EyeClose');
    }
  };

  return (
    <div className={styles.SimpleInput} style={props.styles}>
      {props.label && (
        <label className={styles.SimpleInput__label} htmlFor={inputID}>
          {props.label}
        </label>
      )}
      <div
        className={`${styles.inputContainer} ${
          errorMessagge && styles.inputContainer__error
        }`}
      >
        <div className={styles.SimpleInput__input}>
          <Svg svgName={props.icon} />
          <input
            className={styles.input}
            type={inputType}
            placeholder={inputPlaceholder}
            name={props.name}
            autoComplete="off"
            id={inputID}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
        <div className={styles.SimpleInput__actions}>
          {props.value && type === 'password' && (
            <div
              onClick={() => toggleInputType()}
              className={styles.SimpleInput__SVG}
            >
              <Svg style={{ cursor: 'pointer' }} svgName={svgEye} />
            </div>
          )}
          {props.value && props.cleanInput && (
            <div
              onClick={() => props.cleanInput && props.cleanInput()}
              className={styles.SimpleInput__SVG}
            >
              <Svg style={{ cursor: 'pointer' }} svgName="X" />
            </div>
          )}
        </div>
      </div>
      <p className={styles.SimpleInput__error}>{errorMessagge}</p>
    </div>
  );
};

export default SimpleInput;
