import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Logo from "../assets/JegnitLogo-02.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full  bottom-0 ">
      <div className="text-center bg-[#FFB000] py-5 flex  flex-col w-full mx-auto gap-[2rem]  px-10">
        <div className="flex  justify-between">
          {" "}
          <div className="flex flex-col gap-3">
            {" "}
            <p className="flex items-center justify-center  text-2xl font-semibold text-[#FFB001]">
              <img
                width={100}
                src={Logo}
                className="rounded-full h-14 mr-3 sm:h-9"
                alt="Landwind Logo"
              />
            </p>
            <div className="flex justify-center items-center gap-[1rem]">
              <Link to="https://web.facebook.com/jegnit.et">
                <FaFacebook size={20} color="#003138" />
              </Link>
              <Link to="https://www.instagram.com/jegnit.et">
                <FaInstagram size={20} color="#003138" />
              </Link>
              <p>
                <FaTiktok size={20} color="#003138" />
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
            <p className="text-[#003138]">ለበለጠ መረጃ</p>
            <p className="flex flex-col text-[#003138]">
              <span> 09 12 34 56 78</span> <span>09 87 65 43 21</span>
            </p>
            <p className="text-[#003138]">Info@jegnitawad.com</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-[#003138]">
            Copyright © 2024 Developed by{" "}
            <Link to="http://elfedigital.com/" className="font-semibold">
              ELFE Digital
            </Link>{" "}
            . ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
