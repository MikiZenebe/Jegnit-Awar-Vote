import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="w-full bottom-0 mt-[30rem]">
      <div className="text-center bg-[#111827] py-5 flex  flex-col w-full mx-auto gap-[2rem]  px-10">
        <div className="flex  justify-between">
          {" "}
          <div className="flex flex-col gap-3">
            {" "}
            <p className="flex items-center justify-center  text-2xl font-semibold text-[#FFB001]">
              <img
                src={Logo}
                className="rounded-full h-12 mr-3 sm:h-9"
                alt="Landwind Logo"
              />
              Jegnit
            </p>
            <div className="flex justify-center items-center gap-[1rem]">
              <p>
                <FaFacebook size={20} />
              </p>
              <p>
                <FaInstagram size={20} />
              </p>
              <p>
                <FaTiktok size={20} />
              </p>
            </div>
          </div>
          {/* <span className="block text-sm text-center text-gray-500">
          © 2021-2022 Landwind™. All Rights Reserved. Built with
          <a
            href="https://flowbite.com"
            className="text-purple-600 hover:underline"
          >
            Flowbite
          </a>{" "}
          and
          <a
            href="https://tailwindcss.com"
            className="text-purple-600 hover:underline"
          >
            Tailwind CSS
          </a>
          .
        </span> */}
          <div className="flex flex-col gap-1">
            <p>Contact Us</p>
            <p className="text-gray-400">example@gmail.com</p>
            <p className="text-gray-400"> 090000000</p>
          </div>
        </div>

        <div>
          <p className="text-xs">
            Copyright © 2024 Developed by ELFE Digital . ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
