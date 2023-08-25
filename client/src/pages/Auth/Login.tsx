import { Icon } from "@iconify/react";
import Button from "components/UI/Button";
import Textfield from "components/UI/Textfield";
import React from "react";
import { Link } from "react-router-dom";
import { ICON_LIBARY, ROUTE } from "utils/constants";
import Facebook from "./Facebook";
import Google from "./Google";

function Login() {
  return (
    <div className="login_page flex flex-col items-center justify-center  ">
      <h1>Login</h1>
      <div className="flex">
        <Facebook />
        <Google />
      </div>
      <div className="text-[1.6rem] my-[1rem]">OR</div>
      <Textfield
        placeholder="example@gmail.com"
        className="w-full my-[1rem]"
        label="Email address"
      />
      <Textfield className="w-full my-[1rem]" label="Password" />
      <Button
        className="w-full my-[1rem] btn_submit_login"
        variant="contain"
        color="black"
      >
        Continue
      </Button>
      <div className=""></div>
      <p>
        New user? <Link to={ROUTE.REGISTER}>Create an account</Link>
      </p>
    </div>
  );
}

export default Login;
