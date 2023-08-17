import { Icon } from "@iconify/react";
import Button from "components/UI/Button";
import Textfield from "components/UI/Textfield";
import React from "react";

function FormPayment(props: any) {
  const { UnActiveObj } = props;

  return (
    <div className="form_payment">
      <div className="flex gap-[1rem] items-center">
        <div className="p-[0.5rem] credit_icon">
          <Icon width={20} icon="wpf:bank-cards" />
        </div>
        <span className="text-[1.6rem] font-[600]"> Debit / Credit Card</span>
      </div>
      <div className="credit_input mt-[1.5rem]">
        <Textfield className="mt-[1rem]" label="Card number" placeholder="000-xxx-000" />
        <Textfield className="mt-[2rem]" label="Name on Card" placeholder="Agribank" />
        <div className="flex gap-5 mt-[1rem]">
        <Textfield className="mt-[1rem] w-full sm:flex-1" label="Card number" placeholder="000-xxx-000" />
        <Textfield className="mt-[1rem] w-full sm:flex-1" label="Name on Card" placeholder="Agribank" />
        </div>
      </div>
      <div className="flex gap-5">
      <Button
        className="w-[15rem] h-[4rem] mt-[3rem]"
        onClick={() => UnActiveObj()}
        color="black"
        variant="contain"
      >
        Confirm order
      </Button>
      <Button
        className="w-[10rem] h-[4rem] mt-[3rem]"
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

export default FormPayment;
