import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
const Facebook = () => {
  return (
    <div className="w-full">
      <LoginSocialFacebook
        appId={`301614582539259`}
        onResolve={(res) => console.log(res)}
        onReject={(error) => console.log(error)}
      >
        <FacebookLoginButton style={{ width: "20rem" }} />
      </LoginSocialFacebook>
    </div>
  );
};

export default Facebook;
