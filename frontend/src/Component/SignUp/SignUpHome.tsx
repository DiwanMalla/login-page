import Form from "./Form";
import { Link } from "react-router-dom";
const SignUpHome = ({ setSignIn }) => {
  return (
    <div>
      <div id="container" className="pt-[8rem] text-white">
        <div id="header">
          <h1 className="text-2xl  font-bold">Sign Up</h1>
          <h2 className="text-sm">Sign in to continue</h2>
        </div>
        <div id="form" className="mt-5">
          <Form />
        </div>

        <div id="signup" className="text-center m-3">
          <h1>
            Have an account?
            <Link to="/signin">
              <span
                className=" font-bold underline ml-2"
                onClick={() => setSignIn(true)}
              >
                Sign In
              </span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUpHome;
