import React from "react";
import help from "../Assets/call-agent.png";
const Forms = () => {
  return (
    <div className="bg-[#EEECFF] py-12 lg:py-0  contact-bg overflow-hidden">
      <div className=" mx-auto relative">
        <img
          src="https://webency.themejunction.net/wp-content/uploads/2024/03/h2-contact-right.png"
          alt=""
          className="absolute top-0 right-0 lg:w-2/3 opacity-20 lg:h-auto"
        />
        <img
          src="https://webency.themejunction.net/wp-content/uploads/2024/03/h2-contact-bg-2.png"
          alt=""
          className="hidden lg:block absolute top-0 right-0 w-60 h-auto"
        />
        <div className="flex items-center flex-col p-3 sm:p-3 md:p-5 lg:p-16  lg:flex-row">
          <div className="w-full lg:w-1/2 relative z-20 bg-white px-5 sm:px-5 md:px-10 lg:px-16 rounded-2xl py-14">
            <form aria-label="Contact form" noValidate>
              <div className="mb-4 lg:flex">
                <div className="lg:w-1/2 lg:pr-2">
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded px-4 py-4"
                  />
                </div>
                <div className="lg:w-1/2 lg:pl-2 mt-4 lg:mt-0">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded px-4 py-4"
                  />
                </div>
              </div>
              <div className="mb-4 lg:flex">
                <div className="lg:w-1/2 lg:pr-2">
                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    accept="image/*"
                    className="w-full border border-gray-300 photo-main rounded px-4 pt-3"
                  />
                </div>
                <div className="lg:w-1/2 lg:pl-2 mt-4 lg:mt-0">
                  <input
                    type="text"
                    name="skype_id"
                    id="skype_id"
                    placeholder="Skype ID"
                    className="w-full border border-gray-300 rounded px-4 py-4"
                  />
                </div>
              </div>
              <div className="mb-4 lg:flex">
                <div className="lg:w-1/2 lg:pr-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded px-4 py-4"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                  />
                </div>
                <div className="lg:w-1/2 lg:pl-2 mt-4 lg:mt-0">
                  <select
                    name="subject"
                    id="subject"
                    className="w-full border border-gray-300 text-[#9ea4b0] font-normal rounded px-4 py-4 mb-4"
                  >
                    <option
                      value=""
                      selected
                      disabled
                      className="text-[#9ea4b0] font-semibold"
                    >
                      Select Course
                    </option>
                    <option value="design">Design</option>
                    <option value="web">Web Development</option>
                    <option value="digital">Digital Marketing</option>
                    <option value="mobile">Mobile Development</option>
                  </select>
                </div>
              </div>

              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
                placeholder="Type your query"
                className="w-full border border-gray-300 rounded px-4 py-4 mb-4"
              ></textarea>

              <button
                type="submit"
                value="submit"
                className="bg-gradient-to-r from-teal-400 to-indigo-600 hover:from-indigo-400 hover:to-teal-600 text-white font-bold py-4 w-full px-4 rounded"
              >
                Contact Us
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
            <div className="mb-8">
              <span
                className=" text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
                style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
              >
                Request A Free Quote <br />
              </span>
              <h3 className="text-4xl sm:text-4xl md:text-3xl lg:text:5xl text-gray-700 mt-5 font- mb-8 font-bold">
                Make Brand As <br /> Brilliant One
              </h3>

              <p className="text-lg font-medium text-gray-500 mb-5">
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={help}
                alt=""
                className="w-16 bg-black rounded-full p-3 "
              />

              <div>
                <span className="block font-bold text-xl bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text">
                  Hepl Line:
                </span>
                <a href="tel:+00-123-456-789" className="text-base font-medium">
                  + 00 123-456-789
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
