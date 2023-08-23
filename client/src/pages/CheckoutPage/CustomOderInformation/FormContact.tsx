import Button from "components/UI/Button";
import Textfield from "components/UI/Textfield";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "utils/constants";

function FormContact(props: any) {
  const { UnActiveObj } = props;
  const [value, getValue] = useState("");
  return (
    <div className="form_contact">
      <h1 className="flex font-bold  text-[1.6rem] sm:text-[2rem] justify-between items-center">
        Contact infomation
        <span className="font-[400]">
          Do not have an account?
          <Link className="text-[1rem] text-blue-400" to={ROUTE.LOGIN}>
            {" "}
            Log in
          </Link>
        </span>{" "}
      </h1>
      <Textfield
        className="mt-[2rem]"
        onChange={(e: any) => getValue(e.target.value)}
        label="Your phone number"
        placeholder="+84 xxx"
      />
      <Textfield
        className="mt-[2rem]"
        onChange={(e: any) => getValue(e.target.value)}
        label="Email address"
        placeholder="xxx@gmail.com"
      />
      <Button
        className="w-[10rem] h-[4rem] mt-[3rem]"
        onClick={() => UnActiveObj()}
        color="black"
        variant="contain"
      >
        Submit
      </Button>
    </div>
  );
}

export default FormContact;
