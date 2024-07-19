import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div id="form">
        <form onSubmit={handleSubmit} className="w-[330px]">
          <div id="Email" className="">
            <label>Email</label>
            <br />
            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaEnvelope className="text-white" />
              </span>
              <input
                className=" bg-primary border border-2 rounded-lg p-2 w-full shadow appearance-none py-2 px-10"
                type="email"
                required
                placeholder="Enter@address.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div id="password">
            <label>Password</label>
            <br />
            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-0 flex  items-center pl-3">
                <FaLock className="" />
              </span>
              <input
                className="bg-primary border border-2 rounded-lg p-2 px-10 w-full pb-3"
                type="password"
                required
                placeholder="......"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div id="forgetPassword" className="">
            <Link to="/forgotpassword">
              <h1 className="cursor-pointer text-right">Forgot Password?</h1>
            </Link>
          </div>
          <div>
            <button className="bg-login w-full p-3 rounded-lg mt-5 hover:bg-white hover:text-black">
              <h1 className="text-[22px]">Log In</h1>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
