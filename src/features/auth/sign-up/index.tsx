import BackgroundSignUp from "../components/background-sign-up";
import FormSignUp from "../components/form-sign-up";

const AuthSignUp = () => {
  return (
    <div className="grid grid-cols-2">
      <BackgroundSignUp />
      <FormSignUp />
    </div>
  );
};

export default AuthSignUp;
