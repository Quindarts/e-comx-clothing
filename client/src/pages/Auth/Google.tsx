import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";

function Google() {
  return (
    <div className="w-full">
      <LoginSocialGoogle
        client_id={
          "879197444147-ual8j5bkml7kjb3c3g1j3a9i06uv7ode.apps.googleusercontent.com"
        }
        typeResponse={"accessToken"}
        auto_select={true}
        onResolve={(res) => console.log(res)}
        onReject={(error) => console.log(error)}
      >
        <GoogleLoginButton style={{ width: "20rem" }} />
      </LoginSocialGoogle>
    </div>
  );
}

export default Google;
