import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FallingLines } from "react-loader-spinner";
const Login = () => {
  let [email, setEmail] = useState("");
  let [fullname, setFullname] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [showPassword, setShowPassword] = useState(false);

  let [emailErr, setEmailErr] = useState("");
  let [fullnameErr, setFullnameErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  let handleFullName = (e) => {
    setFullname(e.target.value);
    setFullnameErr("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  let handleSubmit = () => {
    if (!email) {
      setEmailErr("Email is required");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailErr("Email is Invalid");
      }
    }
    if (!fullname) {
      setFullnameErr("Full Name is required");
    }
    if (!password) {
      setPasswordErr("Password is required");
    }
    /* else {
      if (!/^(?=.*[a-z])/.test(password)) {
        setPasswordErr("lowercase is required");
      } else if (!/^(?=.*[A-Z])/.test(password)) {
        setPasswordErr("Uppercase is required");
      } else if (!/^(?=.*[0-9])/.test(password)) {
        setPasswordErr("Number is required");
      } else if (!/^(?=.*[!@#$%^&*])/.test(password)) {
        setPasswordErr("Symbol is required");
      } else if (!/^(?=.{8,})/.test(password)) {
        setPasswordErr("At least 8 charecter need ");
      }
    } */
    toast("Wow so easy!");
  };
  let handleGoogle = () => {
   console.log("hi google");
  };
  return (
    <div className="flex">
      <ToastContainer position="bottom-center" />
      <div className="w-1/2 flex justify-end items-center">
        <div className="mr-16">
          <h1 className="text-4xl font-bold font-Nunito text-secondary mb-5">
            Login to your account!
          </h1>
          <button
            onClick={handleGoogle}
            className="border-2 rounded py-5 px-10 text-xl mb-14 text-[#03014C] font-OpenSans flex justify-center items-center font-semibold"
          >
            <img className="mr-5" src="images/google.png" />
            <span>Login with Google</span>
          </button>
          <div className="w-96 relative mb-14">
            <input
              className="border-b-2 py-7 w-full outline-0"
              type="email"
              onChange={handleEmail}
              value={email}
            />
            <p className="absolute top-[-10px] left-[0] font-semibold font-sm bg-white text-inputText font-Nunito">
              Email Address
            </p>
            {emailErr && (
              <p className="font-semibold font-sm p-2.5 mt-2 bg-red-500 text-white font-Nunito ">
                {emailErr}
              </p>
            )}
          </div>

          <div className="w-96 relative mb-14">
            <input
              className="border-b-2 py-7 w-full outline-0"
              type={showPassword ? "text" : "password"}
              onChange={handlePassword}
              value={password}
            />
            <p className="absolute top-[-10px] left-[0] font-semibold font-sm bg-white text-inputText font-Nunito ">
              Password
            </p>
            {showPassword ? (
              <AiFillEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[45%] right-[20px] translate-y-[-45%]"
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[45%] right-[20px] translate-y-[-45%]"
              />
            )}

            {passwordErr && (
              <p className="font-semibold font-sm p-2.5 mt-2 bg-red-500 text-white font-Nunito ">
                {passwordErr}
              </p>
            )}
          </div>

          {loading ? (
            <div className="bg-primary  w-96 rounded-full flex justify-center">
              <FallingLines
                color="#fff"
                width="70"
                visible={true}
                ariaLabel="falling-lines-loading"
              />
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-primary py-5 w-96 rounded text-xl text-white font-semibold font-Nunito"
            >
              Login to Continue
            </button>
          )}

          <p className="text-sm	w-96 text-center mt-9 font-OpenSans">
            Already have an account ?{" "}
            <button to="/registation" className="font-bold text-[#EA6C00]">
              Sign Up
            </button>
          </p>
          <p className="text-sm	w-96 text-center mt-9 font-OpenSans">
            <button to="/forgotPassword" className="font-bold text-[#EA6C00]">
              Forgot Password
            </button>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <picture>
          <img
            className="w-full h-screen object-cover	"
            src="images/login.png"
          />
        </picture>
      </div>
    </div>
  );
};

export default Login;
