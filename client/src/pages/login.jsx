import React from "react";
// import { motion } from "framer-motion";
import logo from "../assets/s4dsLogo.svg";
import loginBackground from "../assets/login-Right.svg";
import { Navigate, useNavigate } from "react-router-dom";
import mapVideo from "../assets/after_signin.mp4";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [signedIn, setSignedIn] = React.useState(false);

  const signIn = () => {
    setSignedIn(true);
    setTimeout(() => {
      navigate("/map");
    }, 13000); // Adjust the delay as needed
  };
  return (
    <div
      className="flex items-center  h-screen text-white"
      style={{ backgroundColor: "#0E1020" }}
    >
      {!signedIn && (
        <div className=" w-screen ml-5  md:w-1/2 md:ml-20 md:mr-0 ">
          <img src={logo} alt="s4ds-logo" />
          <h1 className="text-5xl mt-5 lg:text-7xl">SIGN IN</h1>
          <h3 className="text-md" style={{ color: "#6680D1" }}>
            This world Needs You
          </h3>
          <div>
            <h1 className="text-xl mt-5 lg:text-3xl">
              Sign in with your username
            </h1>
            <div className="mr-10 lg:mr-20">
              <input
                className="w-full  mt-1 h-10 rounded-xl text-whitesmoke px-5"
                style={{ background: "#252B4E" }}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>{" "}
          </div>
          <div>
            <h1 className="text-xl mt-5 lg:text-3xl">
              Please Enter your Password
            </h1>
            <div className="mr-10 lg:mr-20">
              <input
                className="w-full  mt-1 h-10 rounded-xl text-whitesmoke px-5"
                style={{ background: "#252B4E" }}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
            </div>{" "}
          </div>
          <div className="mr-10 lg:mr-20">
            {" "}
            <div
              className="w-full  h-12 mt-5 rounded-xl text-center bg-blue-700 flex items-center justify-center text-xl font-semibold hover:bg-blue-800 cursor-pointer"
              onClick={signIn}
            >
              Continue
            </div>
          </div>
          <a
            href="mailto:dubeyajitesh07@gmail.com"
            className="mt-3 underline text-sm text-center mr-20 lg:text-l hover:cursor-pointer hover:text-red-400"
            style={{ color: "#6680D1" }}
          >
            Click here if you continue to face any issue
          </a>

          <p className="absolute bottom-0 mb-5">
            Made with{" "}
            <span className="inline-block align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="red"
                viewBox="0 0 512 512"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </span>{" "}
            from Djs-s4ds team
          </p>
        </div>
      )}
      {!signedIn && (
        <div
          className="w-0 md:w-1/2 h-screen bg-cover bg-no-repeat bg-center rounded-tl-lg rounded-bl-[300px]"
          style={{ backgroundImage: `url(${loginBackground})` }}
        ></div>
      )}
      {signedIn && (
        <video
          autoPlay
          muted
          loop
          onEnded={() => navigate("/map")} // Navigate after video ends
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={mapVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Login;
