import { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function nameHandler(e) {
    setName(e.target.value);
  }

  function mailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      let res = await fetch(`${import.meta.env.VITE_BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      let data = await res.json();

      if (res.ok) {
        console.log("hello", data);
        navigate("/login");
        setName("");
        setEmail("");
        setPassword("");
        setMessage("");
      } else {
        throw new Error(data.message);
      }
    } catch (e) {
      console.log("catch", e);
      setMessage(e.message);
    }
  }

  return (
    <div className=" bg-[#090b0f] text-white  flex justify-center items-center h-screen">
      <div className="w-[90%] sm:w-[60%] md:w-[35%] lg:w-[25%] h-fit bg-[#1c1c29] flex flex-col justify-around  items-center rounded-2xl shadow-2xl shadow-gray-800 gap-3 py-5">
        <IoPersonCircleSharp size={90} className="text-[#b3b3dc]" />

        <form
          className="flex flex-col items-center justify-center gap-6 pb-3"
          onSubmit={submitHandler}
        >
          {message && <p className="text-red-400">{message}</p>}
          <input
            type="text"
            name="name"
            value={name}
            onChange={nameHandler}
            className="border-[#b3b3dc] border rounded-md p-1 outline-0 text-center"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={mailHandler}
            className="border-[#b3b3dc] border rounded-md p-1 outline-0 text-center"
            placeholder="Enter Your EmailID"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={passwordHandler}
            className="border-[#b3b3dc] border rounded-md p-1 outline-0 text-center"
            placeholder="Enter Your Password"
          />
          <button className="bg-[#5b4fc2] w-[50%]  py-1 rounded-2xl font-semibold font-sans hover:transition-transform ease-in-out hover:scale-105 cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
