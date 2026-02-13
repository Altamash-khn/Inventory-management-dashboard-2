import React, { useState } from "react";
import Biometric from "../../Images/Biometric.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function mailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      let res = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      let data = await res.json();

      if (res.ok) {
        console.log("hello", data);
      } else {
        throw new Error(data.message);
      }
    } catch (e) {
      console.log("catch", e);
      setMessage(e.message);
    }
  }

  return (
    <div className="bg-[#090b0f] text-white  flex justify-center items-center h-screen">
      <div className="mx-6 sm:w-fit px-10 py-2 lg:px-14 sm:h-fit  bg-[#1c1c29] flex flex-col justify-around  items-center rounded-2xl shadow-2xl shadow-gray-800">
        <h2 className=" text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold font-sans pb-3 pt-6">
          Log-in into your account{" "}
        </h2>
        <p className="text-red-600 text-sm md:text-md">{message}</p>
        <img
          src={Biometric}
          alt=""
          className="w-[80px] md:w-[100px] lg:w-[120px] pb-3"
        />
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center gap-6 pb-3"
        >
          <input
            onChange={mailHandler}
            type="mail"
            name="email"
            value={email}
            placeholder="Mail"
            className="border-[#b3b3dc] border-1 rounded-md p-1 md:p-2 lg:p-3 outline-0"
          />
          <input
            onChange={passwordHandler}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            className="border-[#b3b3dc] border-1 rounded-md p-1 md:p-2  lg:p-3 outline-0"
          />
          <button className="bg-[#5b4fc2] w-full px-0.5 md:px-1 py-1 md:py-2 rounded-2xl md:rounded-3xl  font-semibold font-sans hover:transition-transform ease-in-out hover:scale-105 cursor-pointer">
            Log-in
          </button>
        </form>
        <div className="pt-3 pb-6 flex items-center justify-around w-full">
          <div className="text-sm md:text-md lg:text-xl text-[#b3b3dc] font-light font-sans">
            New User ?
          </div>
          <Link to={"/signin"}>
            <button className="text-md md:text-lg lg:text-xl text-[#b3b3dc] font-semibold font-sans cursor-pointer hover:underline hover:transition-transform ease-in-out hover:scale-105 ">
              Sign-up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

// #090b0f
// intercode- #1c1c29
