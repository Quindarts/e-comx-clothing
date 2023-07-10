import React from "react";

type TextAreaPropsType = {
    label?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
};
function TextArea(props: TextAreaPropsType) {
    const {
        label,
        size,
        className = "",
        ...rest
    } = props;
    return (
        <div
            {...rest}
            className={`textArea ${className} ${
                size ? `txtArea_size-${size}` : ""
            }`}
        >
            {label && <label>{label}</label>}
            <textarea></textarea>
        </div>
    );
}

export default TextArea;
