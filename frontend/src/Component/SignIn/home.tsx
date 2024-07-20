import Form from "./form";
import { Link } from "react-router-dom";
const SignInHome = ({ setSignIn }) => {
  return (
    <div>
      <div id="container" className="pt-[8rem] text-white">
        <div id="header">
          <h1 className="text-2xl  font-bold">Sign In</h1>
          <h2 className="text-sm">Sign in to continue</h2>
        </div>
        <div id="form" className="mt-5">
          <Form />
        </div>

        <div id="signup" className="text-center m-3">
          <h1>
            Don't have an account?
            <Link to="/signup">
              <span
                className=" font-bold underline"
                onClick={() => setSignIn(false)}
              >
                Sign Up
              </span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignInHome;
