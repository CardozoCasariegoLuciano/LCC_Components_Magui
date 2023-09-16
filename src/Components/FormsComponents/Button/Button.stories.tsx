import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from './Button';

const meta = {
  title: 'FormComponents/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EnableButton: Story = {
  render: (args) => {
    return <Button {...args}>{args.children}</Button>;
  },
  args: {
    children: 'Button',
    disabled: false,
  },
};

export const DisabledButton: Story = {
  render: (args) => {
    return <Button {...args}>{args.children}</Button>;
  },
  args: {
    children: 'Button',
    disabled: true,
  },
};
