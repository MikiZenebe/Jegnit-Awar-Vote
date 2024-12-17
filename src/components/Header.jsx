import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Header({ setIsAuthenticated }) {
  const handleLogout = async () => {
    await signOut(auth); // Logout the admin
  };

  return (
    <header className="mb-2 px-4 shadow bg-gray-900 sticky top-0 z-50">
      <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to={"/"} className="flex items-center text-xl font-black">
          <span className="mr-2 text-3xl text-blue-600">
            <p>Voting</p>
          </span>
          <span>System</span>
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
              <Link
                to={"/"}
                className="text-white hover:text-blue-600"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to={"/"}
                className="text-white hover:text-blue-600"
                href="#"
              >
                Categories
              </Link>
            </li>

            <li className="mt-2 sm:mt-0">
              {setIsAuthenticated && (
                <Link
                  className="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
                  onClick={handleLogout}
                >
                  Admin
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
