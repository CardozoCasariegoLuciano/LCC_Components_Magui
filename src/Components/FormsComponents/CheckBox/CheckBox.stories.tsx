import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from './CheckBox';

const meta = {
  title: 'FormComponents/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultChecked: Story = {
  args: {
    defaultCheck: true,
  },
};

export const LabelLeft: Story = {
  args: {
    name: 'check',
    label: 'check this',
    labelLeft: true,
  },
};

export const LabelRigth: Story = {
  args: {
    name: 'check2',
    label: 'check this',
    labelLeft: false,
  },
};
