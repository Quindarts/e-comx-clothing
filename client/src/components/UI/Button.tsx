import React, { ButtonHTMLAttributes } from "react";

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "contain" | "outline";
  size?: "sm" | "md" | "icon" | "lg";
  color?:
    | "black"
    | "white"
    | "green"
    | "basic"
    | "grey"
    | "primary"
    | "white-hv-black";
  border?: "sm" | "md" | "lg";
}
const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {

  const {
    children,
    className = "",
    variant = "",
    size = "sm",
    color,
    ...rest
  } = props;
  return (
    <button
      {...rest}
      className={` btn ${className} ${variant ? `btn_${variant}` : ""}${
        color ? `--${color}` : ""
      }  ${`btn--${size}`}`}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
