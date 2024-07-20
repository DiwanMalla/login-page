import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignUpInfo = { ...signUpInfo };
    copySignUpInfo[name] = value;
    setSignUpInfo(copySignUpInfo);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpInfo),
      });
      const result = await response.json();
      const { success } = result;
      if (success) {
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      }
    } catch (err) {
      console.log(`Error to signup ${err}`);
    }
    setSignUpInfo({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div id="form">
        <form onSubmit={handleSubmit} className="w-[330px]">
          <div id="userName" className="">
            <label>Name</label>
            <br />
            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-white" />
              </span>
              <input
                className=" bg-primary border border-2 rounded-lg p-2 w-full shadow appearance-none py-2 px-10"
                type="text"
                required
                placeholder="Full name"
                name="name"
                autoFocus
                value={signUpInfo.name}
                onChange={handleChange}
              />
            </div>
          </div>
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
                name="email"
                value={signUpInfo.email}
                onChange={handleChange}
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
                name="password"
                value={signUpInfo.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div id="checkbox">
            <input type="checkbox" className="mr-3" />
            <label>
              Agree with{" "}
              <Link to="/termsAndCondition">
                <span className="underline font-bold">Terms & Condition</span>
              </Link>
            </label>
          </div>
          <div>
            <button className="bg-login w-full p-3 rounded-lg mt-5 hover:bg-white hover:text-black">
              <h1 className="text-[22px]">Register</h1>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
