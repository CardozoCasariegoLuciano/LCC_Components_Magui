import type { Meta, StoryObj } from '@storybook/react';
import FormPage from './FormPage';

const meta = {
  title: 'Pages/FormPage',
  component: FormPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FormPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const formPage: Story = {};
