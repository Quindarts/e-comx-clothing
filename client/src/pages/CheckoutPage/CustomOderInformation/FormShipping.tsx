import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Button from "components/UI/Button";
import Dropdown from "components/UI/Dropdown";
import Textfield from "components/UI/Textfield";
import React from "react";

function FormShipping(props: any) {
  const LIST_COUNTRY = ["VietNam", "American", "England", "France"];
  const [value, setValue] = React.useState("Delivery every day");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const { UnActiveObj } = props;
  return (
    <div className="form_shipping">
      <div className="flex flex-wrap gap-5">
        <Textfield
          className="mt-[2rem]  w-full sm:flex-1 "
          placeholder="Le"
          label="First name"
        />
        <Textfield
          className="mt-[2rem]  w-full sm:flex-1 "
          placeholder="Quang"
          label="Last name"
        />
      </div>
      <div className="flex flex-wrap gap-5">
        <Textfield
          className="mt-[2rem]  w-full sm:flex-1"
          placeholder="Go Vap, Ho Chi Minh"
          label="Address"
        />
        <Textfield
          className="mt-[2rem]  w-full sm:flex-1"
          label="Apt, Suite *"
        />
      </div>
      <div className="flex flex-wrap gap-5">
        <Textfield
          className="mt-[2rem]  w-full sm:flex-1"
          value="Ho Chi Minh"
          label="City"
        />
        <Dropdown className="mt-[2rem]  w-full sm:flex-1" label="Country" list={LIST_COUNTRY} />
      </div>
      <div className="flex flex-wrap gap-5">
        <Textfield
          className="mt-[2rem]  w-full sm:flex-1"
          placeholder="Texas"
          label="State/Province"
        />
        <Textfield
          className="mt-[2rem]  w-full sm:flex-1"
          placeholder="2500"
          label="Postal code"
        />
      </div>
      <div className="mt-[2rem]">
        <FormControl>
          <FormLabel className="text-[2rem]" id="address_checked">
            Address type
          </FormLabel>
          <RadioGroup
            aria-labelledby="address_checked"
            name="radio_check"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Delivery every day"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Only Receive Day Off"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="flex flex-wrap gap-5  w-full sm:flex-1 my-[1rem]">
        <Button
          className=" h-[4rem]"
          onClick={() => UnActiveObj()}
          color="black"
          variant="contain"
        >
          Save and next to Payment
        </Button>
        <Button
          className="w-[10rem] h-[4rem]"
          onClick={() => UnActiveObj()}
          color="white"
          variant="contain"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default FormShipping;
