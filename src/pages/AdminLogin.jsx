/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

export default function AdminLogin({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
      // After successful login
      localStorage.setItem(
        "admin",
        JSON.stringify({ email: "jegnitaward@gmail.com" })
      );
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-[30rem]">
      <div className="xl:w-[700px] px-10 h-auto rounded-3xl xl:shadow-xl bg-[#111827]">
        <h1 className="text-center text-2xl font-bold my-[1rem] ">
          Admin Login
        </h1>
        <hr />

        <div className="flex justify-center my-10">
          <form onSubmit={handleLogin} className="flex flex-col gap-[1rem]">
            <input
              type="email"
              className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] text-[#111827]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400 text-[#111827]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="py-3 bg-[#FFB001] text-blue-950 w-full rounded-md font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
