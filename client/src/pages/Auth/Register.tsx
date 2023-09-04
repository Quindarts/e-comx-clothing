import Button from "components/UI/Button";
import Textfield from "components/UI/Textfield";
import { Link } from "react-router-dom";
import { ROUTE } from "utils/constants";
import Google from "./Google";
import Facebook from "./Facebook";

function Register() {
  return (
    <div className="register_page flex flex-col items-center justify-center">
      <h1>Sign up</h1>
      <div className="flex">
        <Google />
        <Facebook />
      </div>
      <div className="text-[1.6rem] my-[1rem]">OR</div>
      <Textfield
        placeholder="example@gmail.com"
        className="w-full my-[1rem]"
        label="Email address"
      />
      <Textfield className="w-full my-[1rem]" label="Password" />
      <Textfield className="w-full my-[1rem]" label="Confirm Password" />

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
