import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

import styles from './Button.module.css';

import { ButtonColors, ButtonDisplay, ButtonSizes, ButtonVariants } from '@/types';

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: ButtonSizes;
  variant?: ButtonVariants;
  colorScheme?: ButtonColors;
  display?: ButtonDisplay;
  callback?: () => void;
  children: string;
}

interface ButtonCases {
  size: Record<ButtonSizes, ButtonSizes>;
  variant: Record<ButtonVariants, ButtonVariants>;
  color: Record<ButtonColors, ButtonColors>;
  display: Record<ButtonDisplay, ButtonDisplay>;
}

const buttonsCases: ButtonCases = {
  size: {
    md: 'md',
    lg: 'lg',
  },
  variant: {
    solid: 'solid',
    link: 'link',
  },
  color: {
    default: 'default',
    success: 'success',
    danger: 'danger',
  },
  display: {
    block: 'block',
    inline: 'inline',
  },
};

export const Button = ({
  callback,
  children,
  variant = 'solid',
  size = 'md',
  colorScheme = 'default',
  display = 'inline',
  ...rest
}: Props): ReactElement => {
  const finalClassName = `${styles.button} ${styles[buttonsCases.variant[variant]]} ${
    styles[buttonsCases.size[size]]
  } ${styles[buttonsCases.color[colorScheme]]} ${styles[buttonsCases.display[display]]}`;

  return (
    <button className={finalClassName} onClick={callback} type="button" {...rest}>
      {children}
    </button>
  );
};
