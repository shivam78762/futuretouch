import React, { useState } from "react";
import {
  FaEnvelope,
  FaSkype,
  FaInstagram,
  FaPhoneAlt,
  FaCaretDown,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import country from "../Assets/country.png";
import flag from "../Assets/flag.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header className="w-full px-5 p-3 bg-gradient-to-r from-teal-400 to-indigo-700  text-white grid grid-cols-1 md:grid-cols-2  gap-3 sm:gap-2 ">
        <div className="header-top-call flex sm:justify-start justify-center font-bold sm:text-sm">
          <p className="flex items-center pr-2 ">
            <FaEnvelope className="mr-3" />
            <p> info@futuretouch.in</p>
          </p>
          <p>|</p>
          <p className="flex items-center ml-3">
            <FaSkype className="mr-2" />
            <p>futuretouch</p>
          </p>
        </div>

        <div className="header-med-email flex items-center justify-center gap-5 text-end sm:justify-end">
          <div className="relative">
            <button
              onMouseEnter={handleMouseEnter}
              onClick={()=>toggleVisibility()}
              className="flex items-center focus:outline-none"
            >
              <FaPhoneAlt className="h-4 w-5" />
              <FaCaretDown className="h-5 ml-1 " />
            </button>
            {isOpen && (
              <div
             
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute left-0 lg:right-0 mt-2 w-72 py-3 text-start bg-white rounded-md shadow-lg index-main"
              >
                <Link
                  to="#"
                  className="block px-4 pb-2 text-xl text-gray-700 rounded-md font-bold "
                >
                  Future IT Touch Contacts
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700  bg-[#e4e8ff]"
                >
                  <h5 className="block  pb-2 text-base text-[#5f637d] font-bold  ">
                    FOR HR DEPARTMENT
                  </h5>
                  <Link
                    to="#"
                    className="block  text-gray-700 font-bold text-base"
                  >
                    <li className="flex items-center gap-3">
                      <img
                        src={country}
                        className="w-8 h-8 object-cover"
                        alt=""
                      />
                      +91-7056937000
                    </li>
                  </Link>
                </Link>
                <h5 className="block px-4 py-2 text-base text-[#5f637d] font-bold ">
                  FOR SALES DEPARTMENT
                </h5>
                <ul>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-700 font-bold text-base"
                  >
                    <li className="flex items-center gap-3">
                      <img
                        src={country}
                        className="w-8 h-8 object-cover"
                        alt=""
                      />
                      +91-7056997000
                    </li>
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-700 font-bold text-base"
                  >
                    <li className="flex items-center gap-3">
                      <img
                        src={flag}
                        className="w-7 pl-1 h-5  object-cover"
                        alt=""
                      />
                      +91-7056937000
                    </li>
                  </Link>
                  <Link
                    to="#"
                    className="block px-6 py-2 text-gray-700 font-bold text-base"
                  >
                    {" "}
                    <li className="flex items-center gap-3">
                      {" "}
                      <FaSkype className="text-xl" />
                      Futuretouch
                    </li>
                  </Link>
                  <Link
                    to="#"
                    className="block px-6 py-2 text-gray-700 font-bold text-base"
                  >
                    {" "}
                    <li className="flex items-center gap-3">
                      <FaEnvelope className="text-xl" /> info@futuretouch.in
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <p>|</p>
          <div className="">Login</div>
          <p>|</p>
          <div className="flex gap-3">
            <FaFacebookF className="h-6 w-6 rounded-full bg-white text-[#4243c9] p-1" />
            <FaTwitter className="w-6 h-6 rounded-full bg-white text-[#4243c9] p-1" />
            <FaLinkedinIn className="w-6 h-6 rounded-full bg-white text-[#4243c9] p-1" />
            <FaInstagram className="w-6 h-6 rounded-full bg-white text-[#4243c9] p-1" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
