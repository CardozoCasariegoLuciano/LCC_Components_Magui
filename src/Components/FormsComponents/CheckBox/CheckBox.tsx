import styles from './CheckBox.module.scss';
import React from 'react';
import { CheckBoxPropType } from './CheckBox.interface';

const checkID = (name: string) => `checkbox_${name}_id`;

const showLabel = (text: string, name: string) => {
  return <label htmlFor={checkID(name)}>{text}</label>;
};

const CheckBox = (props: CheckBoxPropType) => {
  return (
    <div className={styles.SimpleCheckBox}>
      {!props.labelLeft && props.label && showLabel(props.label, props.name)}
      <input
        className={styles.input}
        type="checkbox"
        id={checkID(props.name)}
        name={props.name}
        defaultChecked={props.defaultCheck}
        onChange={(ev) => props.onChange && props.onChange(ev)}
      />
      {props.labelLeft && props.label && showLabel(props.label, props.name)}
    </div>
  );
};

export default CheckBox;
