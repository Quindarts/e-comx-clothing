import React from "react";

interface TextFieldPropsType extends React.AllHTMLAttributes<HTMLInputElement>  {
    label?: string;
    // placeholder?: string;
    // type?: string;
    // size?: "sm" | "md" | "lg";
    // className?: string;
    // value?: string;
};
function Textfield(props: TextFieldPropsType) {
    const {
        label,
        placeholder = "",
        type = "text",
        size,
        className = "",
        value,
        ...rest
    } = props;
    return (
        <div
            {...rest}
            className={`textfield ${className} ${
                size ? `txt_size-${size}` : ""
            }`}
        >
            {label && <label>{label}</label>}
            <input value={value} type={type} placeholder={placeholder} />
        </div>
    );
}

export default Textfield;
