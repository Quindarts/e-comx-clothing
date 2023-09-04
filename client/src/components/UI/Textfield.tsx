import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { ICON_LIBARY } from "utils/constants";

interface TextFieldPropsType extends React.AllHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  error?: boolean;
}
function Textfield(props: TextFieldPropsType) {
  const {
    label,
    placeholder = "",
    type = "",
    size,
    className = "",
    errorMessage = "",
    error,
    ...rest
  } = props;

  const [newType, setnewType] = useState("password");
  const handleShowPassword = () => {
    if (newType === "text") setnewType("password");
    if (newType === "password") setnewType("text");
  };
  console.log(newType);
  return (
    <div
      {...rest}
      className={`textfield relative textfield_${
        error ? "error" : "basic"
      } ${className} ${size ? `txt_size-${size}` : ""}`}
    >
      {label && <label className="textfield_title">{label}</label>}

      {type === "password" ? (
        <>
          <input
            className="pr-[1rem]"
            type={newType}
            {...rest}
            placeholder={placeholder}
          />
          <div className="absolute right-[1rem] top-[5rem]">
            <Icon
              onClick={handleShowPassword}
              color="gray"
              className="font-[500]"
              width={20}
              style={{ cursor: "pointer" }}
              icon={ICON_LIBARY.i_eye}
            />{" "}
          </div>
        </>
      ) : (
        <input
          className="pr-[1rem]"
          type={type}
          {...rest}
          placeholder={placeholder}
        />
      )}
      {!error && (
        <label className="textfield_error--message text-red-500">
          {errorMessage}
        </label>
      )}
    </div>
  );
}

export default Textfield;
