import React from "react";
import breadcrumb7 from "../Assets/breadcrumb-shape-7.png";
import breadcrumb1 from "../Assets/breadcrumb-shape-1.png";
import breadcrumb2 from "../Assets/breadcrumb-shape-2.png";
import breadcrumb6 from "../Assets/breadcrumb-shape-6.png";
import breadcrumb5 from "../Assets/breadcrumb-shape-5.png";
import { Link } from "react-router-dom";
import image1 from "../Assets/hero-about-1.jpg";
import image2 from "../Assets/h2-about-img-right.jpg";
import lines1 from "../Assets/about2-shape-1.png";
import lines from "../Assets/about2-shape-2.png";
import circle1 from "../Assets/h2-about-bg-1.png";
import circle2 from "../Assets/h2-about-bg-2.png";
import Testimonial from "../Hero/Testimonial";
import Forms from "../Forms/Forms";

const About = () => {
  return (
    <>
      <div className="breadcrumb-wrapper relative overflow-hidden bg-no-repeat h-60 sm:h-60 md:h-72 lg:h-96">
        <div className="container">
          <div className="absolute z-10 top-28 sm:top-28 md:top-28 lg:top-48 left-10 sm:left-10 md:left-28 lg:left-40">
            <div className="">
              <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-6xl">About Us</h1>
            </div>
            <div className="text-white font-bold mt-2 sm:mt-2 md:mt-4 lg:mt-6 text-base">
              <span className="mr-1">
                <Link to="https://webency.themejunction.net">Home</Link>
              </span>
              <span className="mr-1"> &gt;</span>
              <span className=""> About Us</span>
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

        <div className="hero-about block mt-10 sm:mt-10 md:mt-16 lg:mt-20 px-5  relative sm:px-5 md:px-10 lg:px-20 sm:block md:block lg:flex ">
          <div className="relative flex w-11/12 sm:w-11/12 md:full lg:w-1/2 ">
            <div className="w-60 h-32 sm:h-32 md:h-40 lg:h-60 bg-teal-400 rounded-full padding-about pulse relative">
              <img
                className="w-full h-full p-2 sm:p-2 md:p-3 lg:p-5 bg-white rounded-full object-cover"
                src={image1}
                alt=""
              />
              <img className="shape-2 absolute" src={lines} alt="" />
            </div>
            <div className="relative top-10 sm:top-10 md:top-16 lg:top-20 left-48 sm:left-48 md:left-52 lg:left-1/2">
              <div className="about-circle-box absolute bg-circle">
                <div className="ab-circle">
                  <svg
                    className="shape-circle"
                    viewBox="0 0 100 100"
                    width="100"
                    height="100"
                  >
                    <defs>
                      <path
                        id="circle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      ></path>
                    </defs>
                    <text fontSize="15">
                      <textPath xlinkHref="#circle" className="shape-1">
                        Future IT Touch Pvt. Ltd. Future I
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-96 h-48 sm:h-48 md:h-52 lg:h-96 bg-gradient-to-r from-teal-400 to-indigo-700 rounded-full padding-about top-40 pulse relative">
              <img
                className="shape-1 h-60 w-60 -z-50 absolute "
                src={lines1}
                alt=""
              />

              <img
                className="w-full h-full  p-3 sm:p-3 md:p-3 lg:p-5 bg-white rounded-full object-cover"
                src={image2}
                alt=""
              />
            </div>
            <img
              className="hidden sm:block md:block lg:block absolute pulse bottom-0 w-40 left-40"
              src={circle1}
              alt=""
            />
          </div>

          <div className="w-full sm:w-full md:full lg:w-1/2 mt-48 sm:mt-48 md:mt-48 lg:mt-0 pl-0 sm:pl-0 md:pl-5 lg:pl-0">
            <img
              className="hidden sm:block md:block lg:block absolute top-10 w-28 right-20 "
              src={circle2}
              alt=""
            />
            <span
              className=" text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
              style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
            >
              About Us
            </span>
            <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl my-3 sm:my-3 md:my-4 lg:my-5   font-bold">
              Making Your Business <br />
            </h3>
              <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-4 sm:mb-4 md:mb-6 lg:mb-8  font-bold bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text">
                More Unique
              </span>

            <p className="text-lg mb-8 font-medium mt-8 text-[#727272] text-justify">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="mb-9 text-lg font-medium text-[#727272] text-justify">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,


            </p>
            <p className="text-lg mb-8 font-medium text-[#727272] text-justify">
            by injected humour, or randomised words which don't look even slightly believable.
            </p>

            <button className="flex items-center mt-5 border border-blue-700 justify-center text-blue-700 py-4 px-8 font-heading transition duration-400 ease-in-out rounded-full text-base font-medium focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-indigo-700 hover:text-white">
              Read More
            </button>
          </div>
        </div>


      <Testimonial />
      <Forms />
    </>
  );
};

export default About;
