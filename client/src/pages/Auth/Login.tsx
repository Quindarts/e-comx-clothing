import Button from "components/UI/Button";
import Textfield from "components/UI/Textfield";
import { Link } from "react-router-dom";
import { REGEX, REGEX_ERROR_MESSAGE, ROUTE } from "utils/constants";
import Facebook from "./Facebook";
import Google from "./Google";
import { useFormik } from "formik";
import * as Yup from "yup";

interface LoginPropsTypes {
  email: string;
  password: string;
}

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(REGEX_ERROR_MESSAGE.EMAIL.basic)
        .required(REGEX_ERROR_MESSAGE.EMAIL.require),

      password: Yup.string()
        .matches(REGEX.PASSWORD, REGEX_ERROR_MESSAGE.PASSWORD.basic)
        .required(REGEX_ERROR_MESSAGE.PASSWORD.require),
    }),
    onSubmit: (values: LoginPropsTypes) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="login_page flex flex-col items-center justify-center  ">
      <h1>Login</h1>
      <div className="flex">
        <Facebook />
        <Google />
      </div>
      <div className="text-[1.6rem] my-[1rem]">OR</div>
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <Textfield
          placeholder="example@gmail.com"
          className="w-full my-[1rem]"
          label="Email address"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          errorMessage={formik.errors.email}
        />
        <Textfield
          name="password"
          id="password"
          className="w-full my-[1rem]"
          label="Password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          errorMessage={formik.errors.password}
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
      <div className=""></div>
      <p>
        New user? <Link to={ROUTE.REGISTER}>Create an account</Link>
      </p>
    </div>
  );
}

export default Login;
