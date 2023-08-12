import type { Meta, StoryObj } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import SimpleInput from './SimpleInput';

const meta = {
  title: 'FormComponents/SimpleInput',
  component: SimpleInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 *Input text
 */
export const Text: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (e.target.value.includes('E')) {
        args.errorMessage = {
          noE: 'No puede tener la letra E',
        };
      } else {
        args.errorMessage = {};
      }
    };

    return (
      <div style={{ width: '300px' }}>
        <SimpleInput
          {...args}
          onChange={(e) => onChange(e)}
          cleanInput={() => {
            setValue('');
            args.errorMessage = {};
          }}
          value={value}
        />
      </div>
    );
  },
  args: {
    icon: 'user',
    label: 'Name',
    name: 'nombre',
    type: 'text',
    errorMessage: {},
  },
};

/**
 *Input with Error
 */
export const Error: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div style={{ width: '300px' }}>
        <SimpleInput
          {...args}
          onChange={onChange}
          cleanInput={() => {
            setValue('');
            args.errorMessage = {};
          }}
          value={value}
        />
      </div>
    );
  },
  args: {
    icon: 'user',
    label: 'Name',
    name: 'nombre',
    type: 'text',
    errorMessage: { required: 'Este error no se puede borrar' },
  },
};

/**
 *Input password
 */
export const Password: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (e.target.value.includes('E')) {
        args.errorMessage = {
          noE: 'No puede tener la letra E',
        };
      } else {
        args.errorMessage = {};
      }
    };

    return (
      <div style={{ width: '300px' }}>
        <SimpleInput
          {...args}
          cleanInput={() => {
            setValue('');
            args.errorMessage = {};
          }}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  },
  args: {
    icon: 'user',
    label: 'Name',
    name: 'nombre',
    type: 'password',
    errorMessage: {},
  },
};

/**
 *Input with no CleanInput function
 */
export const NoCleanInputFN: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (e.target.value.includes('E')) {
        args.errorMessage = {
          noE: 'No puede tener la letra E',
        };
      } else {
        args.errorMessage = {};
      }
    };

    return (
      <div style={{ width: '300px' }}>
        <SimpleInput {...args} onChange={onChange} value={value} />
      </div>
    );
  },
  args: {
    icon: 'user',
    label: 'Name',
    name: 'nombre',
    type: 'password',
    errorMessage: {},
  },
};

/**
 *Input with empty props
 */
export const Empty: Story = {};
