import React, { ChangeEvent, useState } from 'react';
import SimpleInput from '../../../Components/FormsComponents/Input/SimpleInput';
import Button from '../../../Components/FormsComponents/Button/Button';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './formPage.module.scss';
import CheckBox from '../../../Components/FormsComponents/CheckBox/CheckBox';

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

  const hasError = () => {
    // eslint-disable-next-line no-magic-numbers
    return Object.keys(errors).length > 0;
  };

  const submit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Submit con el boton');
  };

  return (
    <div className={styles.page}>
      <form onSubmit={submit}>
        <SimpleInput type="text" name="Simp" icon="user" />
        <SimpleInput type="text" label="Input 2" name="Simp3" icon="user" />
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
        {/*eslint-disable no-console*/}
        <Button
          disabled={hasError()}
          onClick={() => console.log('Click con el boton')}
        >
          Alto botton loco
        </Button>
        {/*eslint-enable no-console*/}
      </form>
      <CheckBox label="check this" name="ejemplo" />
    </div>
  );
};

export default FormPage;
