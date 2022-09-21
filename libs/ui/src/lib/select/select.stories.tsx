import { Meta, ComponentStory } from '@storybook/react';
import { Select, SelectProps } from './select';

export default {
  component: Select
} as Meta;

const genericArgs = {
  label: 'Your favorite framework/library',
  placeholder: 'Pick one',
  data: [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' }
  ]
};

const SelectComponent = (args: SelectProps) => (
  <div style={{ width: '20rem' }}>
    <Select {...args} />
  </div>
);

export const basic: ComponentStory<typeof Select> = (args) => (
  <SelectComponent {...args} />
);
basic.args = genericArgs;

export const searchable: ComponentStory<typeof Select> = (args) => (
  <SelectComponent {...args} />
);
searchable.args = {
  ...genericArgs,
  searchable: true,
  nothingFound: 'No options'
};

export const disabled: ComponentStory<typeof Select> = (args) => (
  <SelectComponent {...args} />
);
disabled.args = {
  ...genericArgs,
  disabled: true,
  value: 'react'
};

export const readOnly: ComponentStory<typeof Select> = (args) => (
  <SelectComponent {...args} />
);
readOnly.args = {
  ...genericArgs,
  readOnly: true,
  value: 'svelte'
};

export const witError: ComponentStory<typeof Select> = (args) => (
  <SelectComponent {...args} />
);
witError.args = {
  ...genericArgs,
  error: true
};

export const witErrorMessage: ComponentStory<typeof Select> = (args) => (
  <SelectComponent {...args} />
);
witErrorMessage.args = {
  ...genericArgs,
  error: 'Please pick at least one option'
};
