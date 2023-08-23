import { Icon } from "@iconify/react";
import Button from "components/UI/Button";
import Textfield from "components/UI/Textfield";
import React from "react";
import { Link } from "react-router-dom";
import { ICON_LIBARY, ROUTE } from "utils/constants";

function Register() {
  return (
    <div className="register_page flex flex-col items-center justify-center">
      <h1>Sign up</h1>
      <button className="form_btn flex items-center gap-2 justify-start">
        <Icon width={20} icon={ICON_LIBARY.i_facebook} />
        <div className="flex justify-center w-full text-[1.4rem]">Continue with Facebook</div>
      </button>
      <button className="form_btn flex items-center gap-2 justify-start">
        <Icon width={20} icon={ICON_LIBARY.i_google} />
        <div className="flex justify-center w-full text-[1.4rem]">Continue with Google</div>
      </button>
      <div className="text-[1.6rem] my-[1rem]">OR</div>
      <Textfield placeholder="example@gmail.com" className="w-full my-[1rem]" label="Email address" />
      <Textfield className="w-full my-[1rem]" label="Password" />
      <Button
        className="w-full my-[1rem] btn_submit_login"
        variant="contain"
        color="black"
      >
        Continue
      </Button>
      <p>
      Already have an account?<Link to={ROUTE.LOGIN}>Sign in</Link>
      </p>
    </div>
  );
}

export default Register;
