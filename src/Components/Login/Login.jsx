import React, { useState } from "react";
import Biometric from "../../Images/Biometric.png";

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
      <div className="w-[25%] h-fit bg-[#1c1c29] flex flex-col justify-around  items-center rounded-2xl shadow-2xl shadow-gray-800">
        <h2 className="text-xl font-semibold font-sans pb-3 pt-6">
          Log-in into your account{" "}
        </h2>
        <p className="text-red-600 text-sm">{message}</p>
        <img src={Biometric} alt="" className="w-[80px] pb-3" />
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center gap-6 pb-3"
        >
          <input
            onChange={mailHandler}
            type="email"
            name="email"
            value={email}
            placeholder="Mail"
            className="border-[#b3b3dc] border-1 rounded-md p-1 outline-0"
          />
          <input
            onChange={passwordHandler}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            className="border-[#b3b3dc] border-1 rounded-md p-1  outline-0"
          />
          <button className="bg-[#5b4fc2] w-full px-0.5 py-1 rounded-2xl font-semibold font-sans hover:transition-transform ease-in-out hover:scale-105 cursor-pointer">
            Log-in
          </button>
        </form>
        <div className="pt-3 pb-6 flex items-center justify-around w-full">
          <div className="text-sm text-[#b3b3dc] font-light font-sans">
            New User ?
          </div>
          <button className="text-md text-[#b3b3dc] font-semibold font-sans cursor-pointer hover:underline hover:transition-transform ease-in-out hover:scale-105 ">
            Sign-up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

// #090b0f
// intercode- #1c1c29
