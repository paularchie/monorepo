import { Meta, ComponentStory } from '@storybook/react';
import { Button } from './button';
import { IconSearch } from '@tabler/icons';

export default {
  component: Button,
} as Meta;

export const primary: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
primary.args = {
  text: 'primary',
};

export const secondary: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
secondary.args = {
  variant: 'secondary',
  text: 'secondary',
};

export const disabled: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
disabled.args = {
  text: 'disabled',
  disabled: true,
};

export const withLeftIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
withLeftIcon.args = {
  text: 'button',
  leftIcon: <IconSearch size={16} />,
};

export const withRightIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
withRightIcon.args = {
  text: 'button',
  rightIcon: <IconSearch size={16} />,
};
