import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { ICON_LIBARY } from "utils/constants";
import Button from "./Button";

type InputQuantityPropsType = {
  className?: string;
  size?: "sm" | "md";
};
function InputQuantity(props: InputQuantityPropsType) {
  const { className = "", size = "", ...rest } = props;
  const [value, setValue] = useState(1);
  const handlePlus = () => {
    setValue(value + 1);
  };
  const handleSubtraction = () => {
    value > 1 ? setValue(value - 1) : setValue(1);
  };
  return (
    <div className={`${className} input_quantity input_quantity--${size} flex justify-center gap-4`}>
      <Button className="text-[1rem]" size="icon" onClick={handlePlus}>
        <Icon icon={ICON_LIBARY.i_plus} />
      </Button>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(parseInt(e.target.value));
        }}
        type="text"
        value={value}
      />
      <Button size="icon" onClick={handleSubtraction}>
        <Icon className="font-[bold]" width={20} icon={ICON_LIBARY.i_subtraction} />
      </Button>
    </div>
  );
}

export default InputQuantity;
