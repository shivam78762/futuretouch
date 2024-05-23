import React from 'react'
import indian from "../Assets/india-img.png";
import italy from "../Assets/italy.png";
import paris from "../Assets/paris.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Location = () => {
  return (
    <>
      <div className="bg-[#ffecec] shadow-location mx-44 max-sm:mx-0 max-md:mx-20 mt-20 py-8 text-center">
        <h2 className="text-4xl m-2 font-bold text-[#050748]">
          Our Office Locations
        </h2>
      </div>
      <div className="container">
        <div className="flex max-sm:block max-md:block justify-center my-10 gap-10">
          <div className="w-96 px-5 py-6 bg-white border-b-4 border-b-[#b0bdff] rounded-lg shadow-location">
            <div className="bg-[#fbfbfb] text-center">
              <img
                src={indian}
                alt="location"
                className="img-fluid mx-auto d-block"
              />
            </div>
            <div className="mt-4">
            <h4 className="text-2xl font-bold text-[#050748]">India</h4>
            <h6 className="mt-2 text-base font-bold text-[#050748]">
              Registered Office
            </h6>
            <p className="text-lg text-[#6a6a8e] mt-4 text-justify">
              232, 21st East Street, Kamaraj Nagar, Jaipur, Rajasthan 303030
            </p>
            <ul className="text-lg text-[#6a6a8e] mt-4">
              <li>
                <a
                  href="mailto:info@businessname.com"
                  className="flex items-center gap-3"
                >
                  <FaEnvelope /> info@futuretouch.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+91-7059477000"
                  className="flex items-center gap-3"
                >
                  <FaPhoneAlt /> +91-7059477000
                </a>
              </li>
            </ul>
            </div>
          </div>
          <div className="w-96 px-5 py-6 bg-white border-b-4 border-b-[#b0bdff] rounded-lg shadow-location">
            <div className="bg-[#fbfbfb] text-center">
              <img
                src={italy}
                alt="location"
                className="img-fluid mx-auto d-block"
              />
            </div>

            <div className="mt-4">
              <h4 className="text-2xl font-bold text-[#050748]">Italy</h4>
              <h6 className="mt-2 text-base font-bold text-[#050748]">
                Registered Office
              </h6>
              <p className="text-lg text-[#6a6a8e] mt-4 text-justify">
                SEO: 85,86 Sector 34-A Near Piccadily Chandigarh
              </p>
              <ul className="text-lg text-[#6a6a8e] mt-4">
                <li>
                  <a
                    href="mailto:info@businessname.com"
                    className="flex items-center gap-3"
                  >
                    <FaEnvelope /> info@futuretouch.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+91-7059477000"
                    className="flex items-center gap-3"
                  >
                    <FaPhoneAlt /> +91-7059477000
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-96 px-5 py-6 bg-white border-b-4 border-b-[#b0bdff] rounded-lg shadow-location">
            <div className="bg-[#fbfbfb] text-center">
              <img
                src={paris}
                alt="location"
                className="img-fluid mx-auto d-block"
              />
            </div>

            <div className="mt-4">
              <h4 className="text-2xl font-bold text-[#050748]">
                United States
              </h4>
              <h6 className="mt-2 text-base font-bold text-[#050748]">
                Registered Office
              </h6>
              <p className="text-lg text-[#6a6a8e] mt-4 text-justify">
                603 FA Forest Avenue, New York, USA 10021
              </p>
              <ul className="text-lg text-[#6a6a8e] mt-4">
                <li>
                  <a
                    href="mailto:info@businessname.com"
                    className="flex items-center gap-3"
                  >
                    <FaEnvelope /> info@futuretouch.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+91-7059477000"
                    className="flex items-center gap-3"
                  >
                    <FaPhoneAlt /> +91-7059477000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location
