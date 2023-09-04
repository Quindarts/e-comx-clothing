import Button from "components/UI/Button";
import Textfield from "components/UI/Textfield";
import { Link } from "react-router-dom";
import { REGEX, REGEX_ERROR_MESSAGE, ROUTE } from "utils/constants";
import Google from "./Google";
import Facebook from "./Facebook";
import { useFormik } from "formik";
import * as Yup from "yup";
interface RegisterPropsTypes {
  email: string;
  password: string;
  confirm_password: string;
}
function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(REGEX_ERROR_MESSAGE.EMAIL.basic)
        .required(REGEX_ERROR_MESSAGE.EMAIL.require),

      password: Yup.string()
        .min(8, REGEX_ERROR_MESSAGE.PASSWORD.length)
        .matches(REGEX.PASSWORD, REGEX_ERROR_MESSAGE.PASSWORD.basic)
        .required(REGEX_ERROR_MESSAGE.PASSWORD.require),

      confirm_password: Yup.string()
        .min(8, REGEX_ERROR_MESSAGE.CONFIRM_PASSWORD.length)
        .required(REGEX_ERROR_MESSAGE.CONFIRM_PASSWORD.require)
        .oneOf(
          [Yup.ref("password")],
          REGEX_ERROR_MESSAGE.CONFIRM_PASSWORD.require
        ),
    }),
    onSubmit: (values: RegisterPropsTypes) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="register_page flex flex-col items-center justify-center">
      <h1>Sign up</h1>
      <div className="flex">
        <Google />
        <Facebook />
      </div>
      <div className="text-[1.6rem] my-[1rem]">OR</div>
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <Textfield
          placeholder="example@gmail.com"
          className="w-full my-[1rem]"
          label="Email address"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          errorMessage={formik.errors.email}
        />
        <Textfield
          className="w-full my-[1rem]"
          label="Password"
          name="password"
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          errorMessage={formik.errors.password}
        />
        <Textfield
          className="w-full my-[1rem]"
          label="Confirm Password"
          name="confirm_password"
          id="confirm_password"
          type="confirm_password"
          onChange={formik.handleChange}
          value={formik.values.confirm_password}
          errorMessage={formik.errors.confirm_password}
        />

        <Button
          type="submit"
          className="w-full my-[1rem] btn_submit_login"
          variant="contain"
          color="black"
        >
          Continue
        </Button>
      </form>
      <p>
        Already have an account?<Link to={ROUTE.LOGIN}>Sign in</Link>
      </p>
    </div>
  );
}

export default Register;
