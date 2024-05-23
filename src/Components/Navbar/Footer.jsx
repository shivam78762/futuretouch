import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/secondary-logo.png"
import { FaEnvelope, FaHeart, FaMapPin, FaPhoneAlt } from 'react-icons/fa';
import company1 from "../Assets/badges-a.webp"
import company2 from "../Assets/badges-b.webp"
import company3 from "../Assets/badges-c.webp"
import company4 from "../Assets/badges-d.webp"
import online from "../Assets/picktime-book-online-blue.png"

const Footer = () => {
  return (<>
    <div className=" bg-white py-12">
      <div className=" px-3 sm:px-3 md:px-5 lg:px-28 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="#" className="block mb-6">
              <img src={logo} alt="Logo" className="w-60" />
            </Link>
            <p className="mb-6 text-justify pr-5 font-medium text-[#727272]">Future IT Touch Pvt. Ltd. is an innovative one-stop Web Solution Company in Chandigarh, delivering solutions with customized &amp; quality services to businesses globally.</p>
            <Link to="get-quote" className="btn-main bg-gray-700  hover:bg-gradient-to-r from-teal-400 to-indigo-700 text-white py-2 px-4 rounded-full inline-flex items-center">
              Become Partner <i className="fas fa-chevron-right ml-2"></i>
            </Link>
          
          </div>
          <div className="col-span-1">
            <h5 className="mb-4 text-xl font-bold  text-[#3a3a3a]">Our Links</h5>
            <ul className="leading-loose  font-medium text-[#727272]">
              <li ><Link to="index">Home</Link></li>
              <li><Link to="about">About Us</Link></li>
              <li><Link to="why-us">Why Us </Link></li>
              <li><Link to="Services">Services </Link></li>
              <li><Link to="team">Our Teams</Link></li>
              <li><Link to="Contact-Us">Contact Us </Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="mb-4 text-xl font-bold text-[#3a3a3a]">Company</h5>
            <ul className="leading-loose  font-medium text-[#727272]">
              <li><Link to="get-quote">Get Link Quote</Link></li>
              <li><Link to="Pricing-Package">Our Pricing Package</Link></li>
              <li><Link to="Customers-faq">Customer's FAQ</Link></li>
              <li><Link to="Refund-Policy">Refund Policy</Link></li>
              <li><Link to="Privacy-Policy">Privacy Policy</Link></li>
              <li><Link to="Terms-Conditions">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="mb-4 text-xl font-bold text-[#3a3a3a]">Contact Us</h5>
            <ul className="leading-loose  font-medium text-[#727272]">
              <li className='flex gap-3 '>
                <span><FaMapPin className='mt-2' /></span>
                <p > <span className='font-bold text-lg'> Address </span> F-426, First Floor, Sector 91, Near Start Hub Nation (HQ), Mohali, Punjab 160055</p>
              </li>
              <li className='flex gap-3 items-center'>
                <span><FaEnvelope /></span>
                <p > <span className='font-bold text-lg'>Email :</span> <Link to="mailto:info@futuretouch.in">info@futuretouch.in</Link></p>
              </li>
              <li className='flex items-center gap-3' >
                <span><FaPhoneAlt /></span>
                <p><span className='font-bold text-lg'> Phone : </span><Link to="tel:+91-7056937000">+91-7056937000</Link></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#f8f9fa] py-12">
      <div className=" px-3 sm:px-3 md:px-5 lg:px-28 ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center sm:text-center md:text-center lg:text-start">
            <h5 className="mb-4 text-xl font-bold text-[#3a3a3a]">Top App Development Companies</h5>
            <p className="mb-6 font-medium text-[#727272] pr-0 sm:pr-0 md:pr-5 lg:pr-40 ">
              We design and develop custom mobile applications for IOS, Android
              & Hybrid platforms.
            </p>
            <Link
              to="https://www.picktime.com/de9e5f18-25cb-40fb-b5db-d12e8b722029"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <img
                src={online}
                alt="Book an appointment with Future IT Touch Private Limited"
              />
            </Link>
          </div>
          <div className="lg:w-1/2">
            <ul className="flex justify-center lg:justify-end">
              <li className="mx-2">
                <Link to="#">
                  <img
                    src={company1}
                    alt="badges"
                    className="w-120"
                  />
                </Link>
              </li>
              <li className="mx-2">
                <Link to="#">
                  <img
                    src={company2}
                    alt="badges"
                    className="w-120"
                  />
                </Link>
              </li>
              <li className="mx-2">
                <Link to="#">
                  <img
                    src={company3}
                    alt="badges"
                    className="w-120"
                  />
                </Link>
              </li>
              <li className="mx-2">
                <Link to="#">
                  <img
                    src={company4}
                    alt="badges"
                    className="w-120"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="block sm:block lg:flex text-center sm:text-center md:text-center lg:text-start lg:justify-between mt-8">
          <div className="w-full lg:w-2/5">
            <ul className="font-medium text-[#727272]">
              <li>Copyright © 2017 Future IT Touch Pvt. Ltd.</li>
            </ul>
          </div>
          <div className="w-full sm:w-full lg:w-1/4">
            <ul className="font-medium text-[#727272] ">
              <li className='flex justify-center sm:justify-center  lg:justify-start items-center'>
                Made with <FaHeart className='mx-2' style={{ color: "#f00" }}/> in Chandigarh
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4">
            <ul className="flex gap-5 font-medium text-[#727272] justify-center">
              <li>
                <Link to="Privacy-Policy">Privacy & Policy.</Link>
              </li>
              <li>
                <Link to="Customers-faq">Faq.</Link>
              </li>
              <li>
                <Link to="Terms-Conditions">Terms.</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
