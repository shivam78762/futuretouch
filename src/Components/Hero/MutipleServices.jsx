import React from 'react'
import realestate from "../Assets/house.svg";
import tour from "../Assets/travel-case.svg";
import education from "../Assets/video-tutorials.svg";
import transport from "../Assets/taxi.svg";
import event from "../Assets/event.svg";
import ecommerce from "../Assets/smartphone.svg";
import game from "../Assets/joystick.svg";
import healthcare from "../Assets/healthcare.svg";
import finance from "../Assets/money-growth.svg";
import restaurant from "../Assets/baker.svg";
import ondemand from "../Assets/mobile.png";
import grocery from "../Assets/groceries.svg";

const MutipleServices = () => {
    const industriesData = [
        { icon: realestate, title: "Real estate" },
        { icon: tour, title: "Tour & Travels" },
        { icon: education, title: "Education" },
        { icon: transport, title: "Transport" },
        { icon: event, title: "Event" },
        { icon: ecommerce, title: "eCommerce" },
        { icon: game, title: "Game" },
        { icon: healthcare, title: "Healthcare" },
        { icon: finance, title: "Finance" },
        { icon: restaurant, title: "Restaurant" },
        { icon: ondemand, title: "On-Demand" },
        { icon: grocery, title: "Grocery" },
      ];
  return (
    <>
     <div className=" bg-gradient-to-b from-[#fbf9ed] to-[#fbeaf8]  pb-20">
        <div className="">
          <div className="pt-24 md:col-span-12 text-center">
            <span className="text-xl font-semibold mb-5 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest">
              We Have Worked Across Multiple Industries
            </span>
            <h2 className="text-4xl m-2 font-bold">Industries We Serve</h2>
            <p className="text-lg text-gray-700 mt-3  ">
              Successfully delivered digital products Lorem Ipsum is simply
              dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap px-0 sm:px-0 md:px-20 lg:px-40 mt-16 ">
          {industriesData.map((item, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-4"
            >
              <div className="bg-white custom-shadow block sm:block md:block lg:flex h-28 items-center pl-0 sm:pl-0 md:pl-2 lg:pl-5 rounded-lg shadow-md overflow-hidden text-center sm:text-center md:text-center lg:text-right pt-3 sm:pt-3 md:pt-3 lg:pt-0 ">
                <img src={item.icon} className="w-14 h-14 mx-auto sm:mx-auto md:mx-auto lg:mx-0" alt="img" />
                <div className="p-2 sm:p-2 md:p-2 lg:p-4 ">
                  <h6 className="font-bold text-base text-[#050748]">
                    {item.title}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </>
  )
}

export default MutipleServices
