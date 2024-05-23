import React, { useState } from "react";
import breadcrumb7 from "../Assets/breadcrumb-shape-7.png";
import breadcrumb1 from "../Assets/breadcrumb-shape-1.png";
import breadcrumb2 from "../Assets/breadcrumb-shape-2.png";
import breadcrumb6 from "../Assets/breadcrumb-shape-6.png";
import breadcrumb5 from "../Assets/breadcrumb-shape-5.png";
import { Link } from "react-router-dom";
import Location from "../Hero/Location";
import { FaEnvelope, FaLock, FaPhoneAlt, FaSkype } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    need: "",
    message: "",
    check_term: true, // Initial value for checkbox
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <div className="breadcrumb-wrapper relative overflow-hidden bg-no-repeat h-60 sm:h-60 md:h-72 lg:h-96">
        <div className="">
          <div className="absolute z-10 top-28 sm:top-28 md:top-28 lg:top-48 left-10 sm:left-10 md:left-28 lg:left-40">
            <div className="">
              <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-6xl">Contact Us</h1>
            </div>
            <div className="text-white font-bold mt-2 sm:mt-2 md:mt-4 lg:mt-6 text-base">
              <span className="mr-1">
                <Link to="https://webency.themejunction.net">Home</Link>
              </span>
              <span className="mr-1"> &gt;</span>
              <span className=""> Contact</span>
            </div>
          </div>
        </div>

        <div className="relative px-20">
          <div className="breadcrumb-shape-3 opacity-30 top-20 absolute">
            <img src={breadcrumb1} alt="" />
          </div>
          <div className="breadcrumb-shape-2 shake-y absolute top-10 opacity-40 left-20">
            <img src={breadcrumb2} alt="" />
          </div>
          <div className="breadcrumb-shape-5 pulse absolute opacity-40 right-1/4">
            <img src={breadcrumb5} alt="" />
          </div>
          <div className="breadcrumb-shape-4 shake-y absolute opacity-40 top-52 left-2/4">
            <img src={breadcrumb2} alt="" />
          </div>
          <div className="breadcrumb-shape-1 pulse absolute opacity-40 top-52 left-2/4">
            <img src={breadcrumb1} alt="" />
          </div>
          <div className="breadcrumb-shape-6 pulse absolute opacity-40 top-52 right-40">
            <img src={breadcrumb6} alt="" />
          </div>
          <div className="breadcrumb-shape-7 shake-y absolute opacity-40 top-0 right-20">
            <img src={breadcrumb7} alt="" />
          </div>
          <div className="breadcrumb-shape-8 pulse absolute opacity-40 top-0 right-20">
            <img src={breadcrumb1} alt="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-40  max-sm:px-2 max-md:px-5 pt-20  ">
        <div className="md:col-span-7 ">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#050748]">
              Have Question? Write a Message
            </h2>
            <p className="my-5 text-[#6a6a8e] text-lg">
              We will catch you as early as we receive the message
            </p>
          </div>
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            data-toggle="validator"

          >
            <div class="px-12  max-sm:px-3 max-md:px-5 pt-10">
              <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Enter your name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    class="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6]  focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Enter your email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    class="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6]  focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    id="form_phone"
                    type="text"
                    name="phone"
                    placeholder="Enter your Phone No *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    class="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6]  focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
                  />
                  <div class="text-red-500 text-sm"></div>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <select
                    id="form_need"
                    name="need"
                    required
                    value={formData.need}
                    onChange={handleChange}
                    class="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6]  focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
                  >
                    <option value="">Select Service</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Web Design">Web Design</option>
                    <option value="App Design">App Design</option>
                    <option value="Other">Other</option>
                  </select>
                  <div class="text-red-500 text-sm"></div>
                </div>
              </div>
              
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message for me *"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  class="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6]  focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
                ></textarea>
            </div>

            <div className="px-12 mt-5">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck"
                name="check_term"
                checked={formData.check_term}
                onChange={() =>
                  setFormData({
                    ...formData,
                    check_term: !formData.check_term,
                  })
                }
              />
              <label className="text-[#6a6a8e] text-base ml-2" htmlFor="customCheck">
                I agree to the <Link to="#" className="text-black">Terms &amp; Conditions</Link> of
                Business Name.
              </label>
            </div>
            <div className="fieldsets mt-7 px-20">
            <button type="submit" className="lnk px-8 py-0 w-full text-white text-lg font-normal leading-[56px] bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] rounded-full shadow-[0_10px_15px_0_rgba(233,30,99,0.15)] outline-none border-none inline-block relative">
  Submit <span className="circle dkpr"></span>
</button>

            
            </div>
            <p className="flex gap-4 justify-center items-center text-[#6a6a8e] mt-10">
             <FaLock />We hate spam, and we respect your
              privacy.
            </p>
          </form>
        </div>

        <div className="md:col-span-5">
          <div className="info-card  text-[#6a6a8e]  bg-[#fff8f2]">
            <span className="flex items-center gap-3 font-bold text-xl">
              <FaPhoneAlt /> Phone:
            </span>
            <p className="mt-3 mb-2">
              Assistance hours: Monday – Friday, 9 am to 5 pm
            </p>
            <a href="tel:+91-7056937000" className="font-semibold text-xl ">
              (+91) 7056937000
            </a>
          </div>
          <div className="info-card  text-[#6a6a8e]  bg-[#ffecec]">
            <span className="flex items-center gap-3 font-bold text-xl">
              <FaEnvelope /> Email:
            </span>

            <p className="mt-3 mb-2">
              Our support team will get back to in 24-h during standard business
              hours.
            </p>
            <a
              href="mailto:info@futuretouch.in"
              className="font-semibold text-xl "
            >
              info@futuretouch.in
            </a>
          </div>
          <div className="info-card  text-[#6a6a8e]  bg-[#eafffd]">
            <span className="flex items-center gap-3 font-bold text-xl">
              <FaSkype /> Skype:
            </span>
            <p className="mt-3 mb-2">
              We Are Online: Monday – Friday, 9 am to 5 pm
            </p>
            <a href="skype:futuretouch" className="font-semibold text-xl ">
              Futuretouch
            </a>
          </div>
        </div>
      </div>
      <Location />
      <div className="px-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27444.62041181375!2d76.683024!3d30.702160000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a838963fb5049%3A0x4188b8c6dd4c764a!2sFuture%20IT%20Touch%20Private%20Limited%20%7C%20Website%20Design%20and%20Development%20Company!5e0!3m2!1sen!2sin!4v1716290401199!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Future IT Touch Private Limited - Location"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
