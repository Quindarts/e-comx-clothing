import React from "react";
interface DropdownPropsType {
    list: Array<string>;
    className?: string;
}
function Dropdown(props: DropdownPropsType) {
    const { className = "", list, ...rest } = props;

    return (
        <select {...rest} className={`${className} dropdown`}>
            {list.map((item, index) => (
                <option value={item} key={index}>
                    {item}
                </option>
            ))}
            <option>heloww</option>
        </select>
    );
}

export default Dropdown;
