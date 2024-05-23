import React from 'react';
import classNames from 'classnames';


interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant, size = 'medium', disabled, onClick }) => {
  const buttonClass = classNames('button', {
    'button--primary': variant === 'primary',
    'button--secondary': variant === 'secondary',
    'button--outlined': variant === 'outlined',
    'button--disabled': disabled,
    'button--small': size === 'small',
    'button--medium': size === 'medium',
    'button--large': size === 'large',
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
