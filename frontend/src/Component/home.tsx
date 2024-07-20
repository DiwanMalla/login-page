import { useState } from "react";
import HorizontalLine from "./Shared/HorizontalLine";
import SocialMedia from "./Shared/Social Media login/socialMedia";
import SignInHome from "./SignIn/home";
import SignUpHome from "./SignUp/SignUpHome";

const Home = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className="flex justify-center ">
      <div id="login page" className="w-[400px] mt-[25px]">
        <div className="min-h-screen bg-primary">
          <div className="ml-[8%]">
            {signIn ? (
              <SignInHome setSignIn={setSignIn} />
            ) : (
              <SignUpHome setSignIn={setSignIn} />
            )}
            <HorizontalLine />
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
