import Form from "./form";
import { Link } from "react-router-dom";
const SignInHome = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <div id="login page" className="w-[400px] mt-[25px]">
          <div className="min-h-screen bg-primary">
            <div className=""></div>
            <div id="container" className="pt-[8rem] text-white ml-[8%]">
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
                    <span className=" font-bold underline">Sign Up</span>
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInHome;
