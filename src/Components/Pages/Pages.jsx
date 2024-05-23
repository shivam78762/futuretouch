import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import customer from "../Assets/deal.png";
import computer from "../Assets/computers.png";
import worker from "../Assets/worker.svg";
import service from "../Assets/customer-service.svg";
import trendtech from "../Assets/trendtech.png";
import MutipleServices from "../Hero/MutipleServices";
import Testimonial from "../Hero/Testimonial";
import Location from "../Hero/Location";
import realestate from "../Assets/teama.svg"
import tour from "../Assets/link.svg"
import education from "../Assets/tech.svg"
import transport from "../Assets/hi.svg"
import event from "../Assets/badge.svg"
import ecommerce from "../Assets/tin.svg"
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Pages = () => {
  const industriesData = [
    { icon: realestate, title: "Reliable Service. In House Team" },
    { icon: tour, title: "Trusted by People Like You" },
    { icon: education, title: "Complete Technical Competency" },
    { icon: transport, title: "Friendly & Cordial in Nature" },
    { icon: event, title: "EvExcellent Quality Delivered on Timeent" },
    { icon: ecommerce, title: "Effective & Continuous Communication" },
   
  ];
  const [happyClients, setHappyClients] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(0);

  // Simulating data loading or real-time updates
  useEffect(() => {
    // Simulating data loading or real-time updates
    // This is just a simulation, you would fetch actual data here
    const fetchData = () => {
      // Simulating asynchronous data fetching
      setTimeout(() => {
        setHappyClients(450);
        setProjectsDone(48000);
        setHoursWorked(95000);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <>
        <div className="h-20 sm:h-20 md:h-20 lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-80 max-sm:h-auto">
        <div className="">
          <div className="px-28 max-sm:px-5  pt-14 max-sm:py-7 max-pt-1">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl">
              Website & Application Trending Technologies
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Standards in web development sometimes change faster than they
                can be implemented. To stay one step ahead, it is important to
                focus on trends, techniques, and approaches that are gaining
                popularity. We have analyzed tendencies across industries to
                create this ultimate list of web development trends in 2021. As
                a bonus, you’ll read about the top web technology stacks worth
                your attention in the coming year. No matter what your current
                interests are — marketplace development, startup innovations, —
                you should be aware of these trends.{" "}
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <button className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700">
                Quick Enquiry
              </button>
              <button className="flex items-center bg-dark-200 justify-center border text-white py-2  px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700">
                Call us-7056937000
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-[#fff6f3] to-[ #fffefb] p-8 ">
        <div className="flex max-sm:block max-md:block justify-evenly">
          <div className="flex gap-5  items-center">
            <div className="w-20 h-20 p-4 mt-0 max-sm:mt-5 max-md:mt-5 bg-white border-custom">
              <img src={customer} alt="happy" className="img-fluid" />
            </div>
            <div className="statnumb">
              <CountUp
                end={happyClients}
                className="text-4xl text-[#050748] font-extrabold"
              />
              <p className="text-xl text-[#6a6a8e]">Happy Clients</p>
            </div>
          </div>
          <div className="flex gap-5  items-center">
          <div className="w-20 h-20 p-4 mt-0 max-sm:mt-5 max-md:mt-5 bg-white border-custom">
              <img src={computer} alt="project" className="img-fluid" />
            </div>
            <div className="statnumb counter-number">
              <CountUp
                end={projectsDone / 1000}
                suffix="k"
                className="text-4xl text-[#050748] font-extrabold"
              />
              <p className="text-xl text-[#6a6a8e]">Projects Done</p>
            </div>
          </div>
          <div className="flex gap-5  items-center">
          <div className="w-20 h-20 p-4 mt-0 max-sm:mt-5 max-md:mt-5 bg-white border-custom">
              <img src={worker} alt="work" className="img-fluid" />
            </div>
            <div className="statnumb">
              <CountUp
                end={hoursWorked / 1000}
                suffix="k"
                className="text-4xl text-[#050748] font-extrabold"
              />
              <p className="text-xl text-[#6a6a8e]">Hours Worked</p>
            </div>
          </div>
          <div className="flex gap-5  items-center">
          <div className="w-20 h-20 p-4 mt-0 max-sm:mt-5 max-md:mt-5 bg-white border-custom">
              <img src={service} alt="support" className="img-fluid" />
            </div>
            <div className="statnumb">
              <span className="text-4xl text-[#050748] font-extrabold">24</span>
              <span className="text-4xl text-[#050748] font-extrabold">/</span>
              <span className="text-4xl text-[#050748] font-extrabold">7</span>
              <p className="text-xl text-[#6a6a8e]">Support Available</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-[#fff6f3] to-[#fffefb] py-20 px-20 max-sm:px-0 max-md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 ">
          <div className="p-4 md:col-span-4">
            <img src={trendtech} className="w-96 h-80 rounded-lg mx-auto" alt="" />
          </div>

          <div className="common-heading md:col-span-8">
            <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-4 px-0 max-sm:px-5 max-md:px-5">Top Trending Technologies Solutions</h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10 max-sm:px-5 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              As the web development technologies mature and the versatility of
              online space rapidly grows, the way of building a feature-rich
              application gets considerably more complicated. Nowadays it’s not
              that easy to satisfy customers with a basic online presence as
              everyone wants to see your business updated as per the latest
              technology trends. However, the burden can be reduced largely if
              you work with web developers on the latest web development
              technologies and frameworks like blockchain development, virtual
              reality, chatbot development, etc.{" "}
            </p>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10 max-sm:px-5 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              We provide custom mobile app development services. This includes
              expert business analysis, design and development of your mobile
              application from idea to launch, integrating the new product into
              your infrastructure and providing further optimization and
              scale-up on demand.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-[#ffe2e2] to-[#fff9f4] pb-20">
        <div className="">
          <div className="pt-24 md:col-span-12 text-center">
            <span className="text-xl font-semibold mb-5 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest">
            We Deliver Our Best
            </span>
            <h2 className="text-4xl m-2 font-bold">Why Choose Future IT Touch Pvt. Ltd.</h2>
          </div>
        </div>
        <div className="flex flex-wrap px-40 max-sm:px-0 max-md:px-5 mt-16 ">
          {industriesData.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/3 px-4 mb-4"
            >
              <div className="bg-white border border-[#d4f0ff] custom-shadow flex h-36 items-center pl-5 rounded-lg shadow-md overflow-hidden">
                <img src={item.icon} className="w-14 h-14" alt="img" />
                <div className="p-4">
                  <h6 className="font-bold text-2xl text-[#050748]">
                    {item.title}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-card mt-10 flex max-sm:block max-md:block justify-center items-center gap-5 px-5">
              <h3 className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold   ">
                Let's Start Link
                <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text">
                  {""} New Project
                </span>
             {""}   Together
              </h3>

              <Link
                to="#"
                className="btn-outline float-right flex items-center border-2 border-black text-black px-8 py-2 font-poppins text-base bg-white shadow-md rounded-full  ml-2 hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-current "
              >
                Request A Quote <FaAngleRight className="relative left-2" />
              </Link>
            
            </div>
      </div> 
      <MutipleServices />
      <Testimonial />
      <Location />
    </>
  );
};

export default Pages;
