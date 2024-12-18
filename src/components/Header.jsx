import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Header() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = async () => {
    await signOut(auth); // Logout the admin
    localStorage.removeItem("admin");
    window.location.reload(); // Optional: To refresh the UI
  };

  useEffect(() => {
    // Check if admin is logged in by checking local storage
    const adminData = localStorage.getItem("admin");
    setIsAdmin(!!adminData); // If adminData exists, set isAdmin to true
  }, []);

  return (
    <header className="mb-2 px-4 shadow bg-gray-900 sticky top-0 z-50">
      <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to={"/"} className="flex items-center text-xl font-black gap-3">
          <img src={Logo} alt="" width={50} className="rounded-full" />
          <p className="flex">
            {" "}
            <span className="mr-2 text-xl text-[#FFB001]">
              <p>Jegnit</p>
            </span>
            <span>Vote</span>
          </p>
        </Link>
        <input className="peer hidden" type="checkbox" id="navbar-open" />
        <label
          className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
        >
          <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
            <li className="">
              <Link to={"/"} className="text-white hover:text-[#FFB001]">
                Home
              </Link>
            </li>
            <li className="">
              <Link to={"/"} className="text-white hover:text-[#FFB001]">
                Categories
              </Link>
            </li>
            {isAdmin ? (
              <p className="flex items-center gap-3">
                <li>
                  <Link
                    to={"/dashboard"}
                    className="text-white hover:text-[#FFB001]"
                  >
                    Dashboard
                  </Link>
                </li>{" "}
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-400 hover:text-[#FFB001]"
                  >
                    Logout
                  </button>
                </li>
              </p>
            ) : (
              <Link to="/admin" className="text-red-400 hover:text-[#FFB001]">
                Admin Login
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
