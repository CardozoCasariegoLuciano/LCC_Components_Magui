import React, { ChangeEvent, useState } from 'react';
import SimpleInput from '../../../Components/FormsComponents/Input/SimpleInput';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './formPage.module.scss';

const FormPage = () => {
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState({});

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes('E')) {
      setErrors({
        e: 'No puede tener la letra E',
      });
    } else {
      setErrors({});
    }
    setValue(e.target.value);
  };

  return (
    <div className={styles.page}>
      <SimpleInput type="text" name="Simp" icon="user" />
      <SimpleInput
        type="text"
        label="Input 2"
        name="Simp2"
        value={value}
        icon="user"
        errorMessage={errors}
        onChange={onChange}
        cleanInput={() => {
          setValue('');
          setErrors({});
        }}
      />
      <SimpleInput type="text" label="Input 2" name="Simp3" icon="user" />
    </div>
  );
};

export default FormPage;
