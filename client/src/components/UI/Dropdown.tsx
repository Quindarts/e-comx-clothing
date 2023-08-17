import React from "react";
interface DropdownPropsType {
  list?: Array<string>;
  className?: string;
  label?: string;
}
function Dropdown(props: DropdownPropsType) {
  const { className = "", list, label, ...rest } = props;

  return (
    <div className={`dropdown ${className}`}>
      {label && <div className="text-[1.6rem] mb-[1rem] font-[600]">{label}</div>}
      <div className="">
        <select {...rest} className={` dropdown_select `}>
          {list?.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
          <option>Orthers</option>
        </select>
      </div>
    </div>  
  );
}

export default Dropdown;
