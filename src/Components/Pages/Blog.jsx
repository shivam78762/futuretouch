import React from "react";
import breadcrumb7 from "../Assets/breadcrumb-shape-7.png";
import breadcrumb1 from "../Assets/breadcrumb-shape-1.png";
import breadcrumb2 from "../Assets/breadcrumb-shape-2.png";
import breadcrumb6 from "../Assets/breadcrumb-shape-6.png";
import breadcrumb5 from "../Assets/breadcrumb-shape-5.png";
import blog1 from "../Assets/blog-dg-1.webp";
import blog2 from "../Assets/blog-dg-2.webp";
import blog3 from "../Assets/blog-dg-3.webp";
import { Link } from "react-router-dom";
import { FaClock, FaEnvelope, FaFacebook, FaFacebookMessenger, FaLinkedin, FaTag, FaTwitter } from "react-icons/fa";

const Blog = () => {
  const blogData = [
    {
      title: "Everything You Need To Know About Nodejs!",
      category: "Nodejs",
      date: "Sep 23, 2020",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: blog1,
      bgColor: "dg-bg2",
    },
    {
      title: "Exploring the Key Features of Laravel 7 Framework",
      category: "Laravel",
      date: "Sep 24, 2020",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: blog2,
      bgColor: "bg-gradient12",
    },
    {
      title: "Best Technology for Mobile Application Development",
      category: "Mobile Application",
      date: "Sep 25, 2020",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: blog3,
      bgColor: "dg-bg2",
    },
    {
      title: "Everything You Need To Know About Nodejs!",
      category: "Nodejs",
      date: "Sep 23, 2020",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: blog1,
      bgColor: "dg-bg2",
    },
    {
      title: "Exploring the Key Features of Laravel 7 Framework",
      category: "Laravel",
      date: "Sep 24, 2020",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: blog2,
      bgColor: "bg-gradient12",
    },
    {
      title: "Best Technology for Mobile Application Development",
      category: "Mobile Application",
      date: "Sep 25, 2020",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: blog3,
      bgColor: "dg-bg2",
    },
  ];

  return (
    <>
      <div className="breadcrumb-wrapper relative overflow-hidden bg-no-repeat h-60 sm:h-60 md:h-72 lg:h-96">
        <div className="">
          <div className="absolute z-10 top-28 sm:top-28 md:top-28 lg:top-48 left-10 sm:left-10 md:left-28 lg:left-40">
            <div className="">
              <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-6xl">Our Blogs</h1>
            </div>
            <div className="text-white font-bold mt-2 sm:mt-2 md:mt-4 lg:mt-6 text-base">
              <span className="mr-1">
                <Link to="https://webency.themejunction.net">Home</Link>
              </span>
              <span className="mr-1"> &gt;</span>
              <span className=""> Blogs</span>
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
      <div className=" mx-auto py-20 px-44 max-sm:px-5 max-md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <div key={index} className="blog-item  rounded-lg shadow-lg">
            <img
              className="w-full h-48 object-cover rounded-t-lg"
              src={blog.image}
              alt=""
            />
            <div className="p-8">
              <div
                className={`flex justify-between items-center ${blog.bgColor} -top-14  relative text-white py-3 rounded-3xl px-3`}
              >
                <p className=" text-sm  flex items-center gap-2 ">
                  <FaTag />
                  {blog.category}
                </p>
                <p className=" text-sm flex items-center gap-2">
                  <FaClock /> {blog.date}
                </p>
              </div>
              <h2 className="text-xl font-bold -mt-8 mb-3">{blog.title}</h2>
              <p className="text-gray-800 border-b-2 pb-5">{blog.content}</p>
              <div className="flex mt-5 text-[#6a6a8e] items-center gap-3">
    <Link to="" className=" text-lg">Shares</Link>
    <Link to="" target="_blank" rel="noopener noreferrer">
      <FaFacebook  />
    </Link>
    <Link to="" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </Link>
    <Link to="" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </Link>
    <Link to="" target="_blank" rel="noopener noreferrer">
      <FaEnvelope />
    </Link>
    <Link to="" target="_blank" rel="noopener noreferrer">
      <FaFacebookMessenger />
    </Link>
  </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
