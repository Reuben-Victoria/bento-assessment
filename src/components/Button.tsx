import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outlined";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  className,
  size = "medium",
  disabled,
  onClick,
  ...props
}) => {
  const buttonClass = classNames("button", className, {
    "button--primary": variant === "primary",
    "button--secondary": variant === "secondary",
    "button--outlined": variant === "outlined",
    "button--disabled": disabled,
    "button--small": size === "small",
    "button--medium": size === "medium",
    "button--large": size === "large",
  });

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
