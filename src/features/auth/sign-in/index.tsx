import BackgroundSignIn from "../components/background-sign-in";
import FormSignIn from "../components/form-sign-in";

const AuthSignIn = () => {
  return (
    <div className="grid grid-cols-2">
      <BackgroundSignIn />
      <FormSignIn />
    </div>
  );
};

export default AuthSignIn;
