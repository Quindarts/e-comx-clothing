import { Icon } from "@iconify/react";
import React from "react";
import { ICON_LIBARY } from "utils/constants";

interface TextFieldPropsType extends React.AllHTMLAttributes<HTMLInputElement> {
  label?: string;
  // placeholder?: string;
  // type?: string;
  // size?: "sm" | "md" | "lg";
  // className?: string;
  // value?: string;
  errorMessage?: string;
  error?: boolean;
}
function Textfield(props: TextFieldPropsType) {
  const {
    label,
    placeholder = "",
    type = "text",
    size,
    className = "",
    value,
    errorMessage = "",
    error,
    ...rest
  } = props;
  return (
    <div
      {...rest}
      className={`textfield textfield_${
        error ? "error" : "basic"
      } ${className} ${size ? `txt_size-${size}` : ""}`}
    >
      {label && <label className="textfield_title">{label}</label>}
      <input value={value} type={type} placeholder={placeholder} />
      {type === "password" && <div className="absolute"><Icon color="gray" width={20} icon={ICON_LIBARY.i_eye} /> </div>}
      {error && (
        <label className="textfield_error--message text-red-500">
          {errorMessage}
        </label>
      )}
    </div>
  );
}

export default Textfield;
