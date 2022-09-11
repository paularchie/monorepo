import { Button as MantineButton, MantineColor } from '@mantine/core';
import React from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonType = 'button' | 'submit' | 'reset';

type ButtonProps = {
  text: string;
  variant?: ButtonVariant;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

const buttonColorMapping: Record<ButtonVariant, MantineColor> = {
  primary: 'blue',
  secondary: 'red',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  type = 'button',
  text,
  disabled,
  onClick,
  leftIcon,
  rightIcon,
}) => {
  return (
    <MantineButton
      type={type}
      disabled={disabled}
      color={buttonColorMapping[variant]}
      onClick={onClick}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {text}
    </MantineButton>
  );
};
