import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import reivew1 from "../Assets/reviews-icon-1.webp";
import reivew2 from "../Assets/reviews-icon-2.webp";
import reivew3 from "../Assets/reviews-icon-3.webp";
import shape from "../Assets/shape-3.webp";
import { FaChevronRight, FaQuoteRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import axios from "axios";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      console.log('hhhhhhhh')
      try {
        const storedReviews = localStorage.getItem("reviews");
        if (storedReviews) {
          setReviews(JSON.parse(storedReviews));
          setLoading(false);
        
        }

        const placeId = "ChIJSVD7Y4mDGjkRSnZM3ca4iEE";
        const apiKey = "AIzaSyD-LPUhqM4jZ6O5YVt07jyeEuNOLT5ObIM";
        const response = await axios.get(
          `http://localhost:5000/api/google-reviews`,
          {
            params: { placeId, apiKey },
          }
        );

        const fetchedReviews = response.data;
        localStorage.setItem("reviews", JSON.stringify(fetchedReviews));
        setReviews(fetchedReviews);
        setLoading(false);
        console.log("ss", fetchedReviews);
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    customPaging: function (i) {
      return (
        <div
          className={`w-2 h-2 rounded-full ${
            i === activeIndex ? "bg-blue-500" : "bg-black"
          }`}
        />
      );
    },
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveIndex(index),
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="bg-none pt-20 px-0 sm:px-0 md:px-10 lg:px-20 overflow-hidden">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="p-4 md:col-span-6">
              <div className="text-left">
                <span className="text-lg text-[#e60072]">
                  What our clients say about Future IT Touch Pvt. Ltd..
                </span>
                <h2 className="text-4xl font-semibold mt-4 text-[#050748]">
                  Over 1200+ Satisfied Clients and Growing
                </h2>
              </div>
              <div className="mt-8">
                <h4 className="text-xl text-[#050748] mb-10 font-bold">
                  Read More Reviews
                </h4>
                <div className="flex gap-5 relative mt-4">
                  <Link to="" rel="noopener noreferrer" className="w-1/4 mx-1">
                    <img src={reivew1} alt="review" />
                  </Link>
                  <Link to="#" rel="noopener noreferrer" className="w-1/4 mx-1">
                    <img src={reivew2} alt="review" />
                  </Link>
                  <Link to="#" rel="noopener noreferrer" className="w-1/4 mx-1">
                    <img src={reivew3} alt="review" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-4 md:col-span-6">
              <div className="pl50 relative">
                <img
                  src={shape}
                  alt="shape"
                  className="test-image absolute bottom-0 w-52 h-auto"
                />
                <Slider {...settings}>
                  {reviews.map((review, index) => (
                    <div key={index}>
                      <div className="testimonial-card bg-white relative w-full p-2 sm:p-2 md:p-5 lg:p-12 h-max rounded-lg">
                        <div className="mb-10 text-lg leading-7">
                          <p className="scrollable">{review.text}</p>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-4 items-center">
                            <div className="">
                              <img
                                src={review.profile_photo_url}
                                alt="user"
                                className="w-16 h-auto rounded-full"
                              />
                            </div>
                            <div className="">
                              <h5 className="font-bold text-xl">
                                {review.author_name}
                              </h5>
                              <p className="flex gap-1 mt-1">
                                {" "}
                                {[...Array(review.rating)].map((_, i) => (
                                  <FaStar key={i} className="text-[#ffb800] " />
                                ))}
                              </p>
                            </div>
                          </div>
                          <FaQuoteRight className="w-24 text-[#00f2a6] text-6xl" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-custome py-10 px-4 sm:px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <h1 className="text-[#050748] text-3xl font-bold">
            Get New Insights Weekly
          </h1>
          <p className="mt-4">
            Your Personal data is secure as per our policy we dont share your
            personal information, <br /> Freely Subscribe !
          </p>
        </div>
        <div className="relative md:col-span-6 w-full sm:w-full md:w-full lg:w-11/12 left-0 sm:left-0 md:left-1 lg:left-10 top-5">
          <form className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Email Your Address"
              name="emails"
              className="w-full h-16 px-8 text-base text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              type="submit"
              name="submit"
              className="inline-flex items-center absolute top-0 right-0 mr-1 mt-1 px-4 py-2 text-base font-medium rounded-full text-white bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              style={{
                borderRadius: "28px 100px 100px 28px",
                lineHeight: "40px",
              }}
            >
              Subscribe <FaChevronRight className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
