import React, { useEffect, useState } from "react";
import "./Hero.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import image1 from "../Assets/hero-about-1.jpg";
import image2 from "../Assets/h2-about-img-right.jpg";
import lines1 from "../Assets/about2-shape-1.png";
import lines from "../Assets/about2-shape-2.png";
import marketing from "../Assets/market-positioning.png";
import compass from "../Assets/compass.png";
import trending from "../Assets/trending-topic.png";
import faq from "../Assets/h2-faq-bg-right.png";
import ui from "../Assets/ui.png";
import backimage from "../Assets/h2-about-bg-3.png";
import circle1 from "../Assets/h2-about-bg-1.png";
import circle2 from "../Assets/h2-about-bg-2.png";
import animated5 from "../Assets/h2-about-img-right.jpg";
import sliderImg1 from "../Assets/slider-img-1.jpg";
import sliderImg2 from "../Assets/slider-img-2.jpg";
import sliderImg3 from "../Assets/slider-img-3.jpg";
import design from "../Assets/data.png";
import graphic from "../Assets/shopping-cart.png";
import designing from "../Assets/marketing.png";
import future from "../Assets/future.png";
import designing1 from "../Assets/app-development.png";
import company from "../Assets/company.jpg";
import employee from "../Assets/employee.png";
import test from "../Assets/online-test.png";
import office from "../Assets/hand-shake.png";
import icon1 from "../Assets/icon-1.png";
import icon2 from "../Assets/icon-2.png";
import icon3 from "../Assets/icon-3.png";
import icon4 from "../Assets/icon-4.png";
import icon5 from "../Assets/icon-5.png";
import icon6 from "../Assets/icon-6.png";
import icon7 from "../Assets/icon-7.png";
import icon8 from "../Assets/icon-8.png";
import icon9 from "../Assets/icon-9.png";
import icon10 from "../Assets/icon-10.png";
import icon11 from "../Assets/icon-11.png";
import icon12 from "../Assets/icon-12.png";

import animated1 from "../Assets/h2-animated-img-1.jpg";
import animated2 from "../Assets/h2-animated-img-3 (1).jpg";
import animated3 from "../Assets/h2-animated-img-3.jpg";
import search from "../Assets/search.png";
import digital from "../Assets/digital-marketing.png";
import family from "../Assets/family.png";
import lines2 from "../Assets/animated-img-3.png";
import cirlce3 from "../Assets/animated-img-2.png";
import card1 from "../Assets/portfolio-img-1.jpg";
import card2 from "../Assets/portfolio-img-2.jpg";
import card3 from "../Assets/portfolio-img-3.jpg";
import card4 from "../Assets/portfolio-img-4.jpg";
import card5 from "../Assets/portfolio-img-5.jpg";
import card6 from "../Assets/portfolio-img-6.jpg";
import {
  FaAngleRight,
  FaArrowRight,
  FaCheck,
  FaCrown,
  FaPaperPlane,
  FaRocket,
  FaTimes,
} from "react-icons/fa";
import Forms from "../Forms/Forms";
import Navbartwo from "../Navbar/Navbartwo";
import Testimonial from "./Testimonial";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("website");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const cardsData = [
    {
      id: 1,
      src: icon1,
      alt: "Industries",
      text: "Social Networking",
      bgColor: "bg-blue-200",
    },
    {
      id: 2,
      src: icon2,
      alt: "Industries",
      text: "Digital Marketing",
      bgColor: "bg-green-200",
    },
    {
      id: 3,
      src: icon3,
      alt: "Industries",
      text: "Ecommerce Development",
      bgColor: "bg-purple-200",
    },
    {
      id: 4,
      src: icon4,
      alt: "Industries",
      text: "Video Service",
      bgColor: "bg-yellow-200",
    },
    {
      id: 5,
      src: icon5,
      alt: "Industries",
      text: "Banking Service",
      bgColor: "bg-red-200",
    },
    {
      id: 6,
      src: icon6,
      alt: "Industries",
      text: "Enterprise Service",
      bgColor: "bg-pink-200",
    },
    {
      id: 7,
      src: icon7,
      alt: "Industries",
      text: "Education Service",
      bgColor: "bg-indigo-200",
    },
    {
      id: 8,
      src: icon8,
      alt: "Industries",
      text: "Tour and Travels",
      bgColor: "bg-yellow-200",
    },
    {
      id: 9,
      src: icon9,
      alt: "Industries",
      text: "Health Service",
      bgColor: "bg-blue-200",
    },
    {
      id: 10,
      src: icon10,
      alt: "Industries",
      text: "Event & Ticket",
      bgColor: "bg-green-200",
    },
    {
      id: 11,
      src: icon11,
      alt: "Industries",
      text: "Restaurant Service",
      bgColor: "bg-purple-200",
    },
    {
      id: 12,
      src: icon12,
      alt: "Industries",
      text: "Business Consultant",
      bgColor: "bg-red-200",
    },
  ];
  const servicesData = [
    {
      icon: design,
      title: "Web Development",
      link: "https://webency.themejunction.net/services/logo-design/",
      number: "01",
      imageUrl:
        "https://webency.themejunction.net/wp-content/uploads/2024/03/service-img-1.jpg",
      description:
        "Your business can get a reliable facelift for long-term branding solutions across all verticals including e-commerce solutions and open source content management exclusively at Future IT Touch Pvt. Ltd.",

      arrowLink: "https://webency.themejunction.net/services/logo-design/",
      heading: "Web Development",
      courseone: "PHP",
      coursetwo: ".Net",
      coursethree: "Java",
      coursefour: "Jhomla",
      hoverImage: image1,
    },
    {
      icon: graphic,
      title: "Ecommerce Development",
      link: "https://webency.themejunction.net/services/web-design/",
      number: "02",
      imageUrl:
        "https://webency.themejunction.net/wp-content/uploads/2024/03/service-img-2.jpg",
      description:
        "IT is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout Future IT Touch Pvt. Ltd., we deliver cutting edge technology solutions for online commerce industry. Our ecommerce solutions are built on latest technology.",

      arrowLink: "https://webency.themejunction.net/services/web-design/",
      heading: "Ecommerce Development",
      courseone: "Magento",
      coursetwo: "WP",
      coursethree: "Shopify",
      coursefour: "Laravel",
    },
    {
      icon: designing1,
      title: "Mobile App Development",
      link: "https://webency.themejunction.net/services/mobile-apps/",
      number: "03",
      imageUrl:
        "https://webency.themejunction.net/wp-content/uploads/2024/03/service-img-3.jpg",
      description:
        "Transform and mobilize your business anytime, anywhere with custom mobile app development services from Future IT Touch Pvt. Ltd. India.",

      arrowLink: "https://webency.themejunction.net/services/mobile-apps/",
      heading: "Mobile App Development",
      courseone: "Iphone",
      coursetwo: "Android",
      coursethree: "Cross Platform",
    },
    {
      icon: future,
      title: "Trending Technologies",
      link: "https://webency.themejunction.net/services/mobile-apps/",
      number: "03",
      imageUrl:
        "https://webency.themejunction.net/wp-content/uploads/2024/03/service-img-3.jpg",
      description:
        "Future IT Touch Pvt. Ltd. India, we create winning business models through innovative product development practices. Committed to delivering the right value.",

      arrowLink: "https://webency.themejunction.net/services/mobile-apps/",
      heading: "Mobile App Development",
      courseone: "react.js",
      coursetwo: "Node.js",
      coursethree: "angular.js",
    },
    {
      icon: designing,
      title: "Digital Marketing",
      link: "https://webency.themejunction.net/services/mobile-apps/",
      number: "03",
      imageUrl:
        "https://webency.themejunction.net/wp-content/uploads/2024/03/service-img-3.jpg",
      description:
        "Digital marketing is the best way to reach your audiences and create relationships with your client. We provide all types of digital marketing tools like PPC, SMO, SEO, SMM for example Google Ads and Facebook Ads.",

      arrowLink: "https://webency.themejunction.net/services/mobile-apps/",
      heading: "Mobile App Development",
      courseone: "seo",
      coursetwo: "cms",
      coursethree: "ppc",
      coursefour: "smm",
    },
  ];

  const portfolioItems = [
    {
      image: card1,
      category: "Business Consulting",
      title: "Paid Media Solution",
      link: "https://webency.themejunction.net/portfolios/paid-media-solution/",
    },
    {
      image: card2,
      category: "UI Design",
      title: "IT Project Management",
      link: "https://webency.themejunction.net/portfolios/it-project-management/",
    },
    {
      image: card3,
      category: "Website Design",
      title: "Data Backup and Recovery",
      link: "https://webency.themejunction.net/portfolios/data-backup-and-recovery/",
    },
    {
      image: card4,
      category: "Business Consulting",
      title: "Cyber security management",
      link: "https://webency.themejunction.net/portfolios/cyber-security-management/",
    },
    {
      image: card5,
      category: "Website Design",
      title: "Banking Landing Page Design",
      link: "https://webency.themejunction.net/portfolios/banking-landing-page-design/",
    },
    {
      image: card6,
      category: "Website Design",
      title: "Travel Website Design",
      link: "https://webency.themejunction.net/portfolios/travel-website-design/",
    },
    // Add more portfolio items as needed
  ];
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Example FAQ data
  const faqData = [
    {
      id: "01",
      question: "What is a digital platform?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
      id: "02",
      question: "How can a digital platform help your business grow?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
      id: "03",
      question: "How do I book my slot to meet with your technical team?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
      id: "04",
      question: "How many projects have you completed so far?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [sliderImg1, sliderImg2, sliderImg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once on mount

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div
        className="hero-main w-full relative"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: window.innerWidth <= 768 ? "400px" : "700px", // Conditionally set height based on window width
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent mix-blend-multiply"></div>
        <Navbartwo />
        <div className="absolute top-24 sm:top-24 md:lg-50 lg:top-60 left-4 sm:left-4 md:left-12 lg:left-28  text-white">
          <h3
            className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold font-serif tracking-widest "
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Collaboration With Chat
          </h3>
          <h1 className="title text-3xl sm:text-3xl md:text-6xl lg:text-7xl leading-tight pt-4 font-bold">
            <div>
              Better Design <br />
              For Digital <span>Products.</span>
            </div>
          </h1>

          <div className="desc pt-5 w-full sm:w-full md:w-full lg:w-6/12 ">
            <div>
              <p className="text-lg  font-medium">
                It is Link long established fact that Link reader will be
                distracted by the readable content of Link page when looking at
                its layout. The point of using Lorem Ipsum is that it has Link
                more.
              </p>
            </div>
          </div>

          <div className="hero-button d-flex">
            <Link className="mt-5 hidden sm:hidden md:hidden lg:block flex items-center w-40 bg-gradient-to-r from-teal-400 to-indigo-700 justify-center bg-black text-white py-4 px-8 font-heading transition duration-400 ease-in-out rounded-md text-lg font-medium focus:outline-none  hover:bg-gray-300 hover:bg-gradient-to-r ">
              Get Started
            </Link>
          </div>
        </div>

        <div className="absolute top-2/4 right-5  mb-4">
          <button
            onClick={() => handleClick(0)}
            className={`w-5 h-5 mb-2 rounded-full focus:outline-none ${
              currentIndex === 0
                ? "bg-gradient-to-r from-green-400 to-purple-500"
                : "bg-white bg-opacity-60"
            }`}
          />{" "}
          <br />
          <button
            onClick={() => handleClick(1)}
            className={`w-5 h-5 mb-2  rounded-full focus:outline-none ${
              currentIndex === 1
                ? "bg-gradient-to-r from-green-400 to-purple-500"
                : "bg-white bg-opacity-60"
            }`}
          />{" "}
          <br />
          <button
            onClick={() => handleClick(2)}
            className={`w-5 h-5  rounded-full focus:outline-none ${
              currentIndex === 2
                ? "bg-gradient-to-r from-green-400 to-purple-500"
                : "bg-white bg-opacity-60"
            }`}
          />
        </div>
      </div>

      <div className="hero-about block mt-20 px-5 mb-20 relative sm:px-5 md:px-10 lg:px-20 sm:block md:block lg:flex">
        <div className="absolute bottom-0 sm:bottom-0  md:bottom-3 lg:bottom-6 left-0">
          <img src={backimage} alt="" />
        </div>
        <div className="relative flex w-11/12 sm:w-11/12 md:full lg:w-1/2 ">
          <div className="hero-images mr-5 relative w-full pulse max-w-335 h-490">
            <img className="image-one object-cover" src={image1} alt="" />
            <img className="shape-1  absolute" src={lines1} alt="" />
          </div>
          <div className="hero-images-two w-full pulse relative">
            <img className="image-two object-cover" src={image2} alt="" />
            <img className="shape-2 absolute" src={lines} alt="" />
            <div className="about-circle-box absolute">
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
          <img
            className="hidden sm:block md:block lg:block absolute bottom-0 w-40 left-40"
            src={circle1}
            alt=""
          />
        </div>

        <div className="w-full sm:w-full md:full lg:w-1/2 pl-0 sm:pl-0 md:pl-5 lg:pl-14">
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
          <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 mb-4 sm:mt-3 md:mt-4 lg:mt-5  sm:mb-4 md:mb-6 lg:mb-8  font-bold">
            Creative Problem <br /> Solving{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text">
              Innovation
            </span>
          </h3>

          <p className="text-lg mb-8 font-small text-justify">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <div className="block sm:block lg:flex lg:flex-wrap lg:gap-x-4 lg:gap-y-8 lg:w-full">
            <div className="max-w-300 w-full about-width font-semibold p-4 border border-purple-600 rounded-lg ">
              <div className="about-category-item flex gap-x-5">
                <div className="about-icon ">
                  <img
                    className="w-12 relative top-2 "
                    src={marketing}
                    alt=""
                  />
                </div>
                <div className="about-text">
                  <h5 className="title font-semibold text-lg">
                    Brand Strategy & Art Direction
                  </h5>
                </div>
              </div>
            </div>
            <div className="max-w-300 w-full about-width font-semibold p-4 border border-purple-600 rounded-lg ">
              <div className="about-category-item flex gap-x-5">
                <div className="about-icon">
                  <img className="w-12 relative top-2" src={ui} alt="" />
                </div>
                <div className="about-text">
                  <h5 className="title font-semibold text-lg">
                    UX/UI Design & Website / App Design
                  </h5>
                </div>
              </div>
            </div>
            <div className="max-w-300 w-full about-width font-semibold p-4 border border-purple-600 rounded-lg ">
              <div className="about-category-item flex gap-x-5">
                <div className="about-icon">
                  <img className="w-12 relative top-2 " src={trending} alt="" />
                </div>
                <div className="about-text">
                  <h5 className="title font-semibold text-lg">
                    Trending Designing Experience
                  </h5>
                </div>
              </div>
            </div>
            <div className="max-w-300 w-full about-width font-semibold p-4 border border-purple-600 rounded-lg ">
              <div className="about-category-item flex gap-x-5">
                <div className="about-icon">
                  <img className="w-12 relative top-2" src={compass} alt="" />
                </div>
                <div className="about-text">
                  <h5 className="title font-semibold text-lg">
                    Brand Strategy & Art Direction
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <button className="flex items-center mt-5  justify-center bg-gradient-to-r from-gray-700 to-gray-700 text-white py-4 px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-medium focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-indigo-700">
            Read More
          </button>
        </div>
      </div>

      <div className="m-0 sm:m-0 md:m-5 lg:m-10">
        <div className="relative">
          <div className="w-full sm:w-full md:w-full  lg:w-1/2 pl-5 pt-0 sm:pt-0 md:pt-2 lg:pt-5 sm:pl-5 md:pl-6 lg:pl-14 ">
            <span
              className=" text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
              style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
            >
              Our Services
            </span>
            <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-8 font-bold">
              We Empower Clients <br /> To{" "}
              <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text">
                Be Loved
              </span>
            </h3>
          </div>
        </div>
        <ul className="divide-y px-2 sm:px-2 md:px-10 lg:px-20 custom-divide-gray">
          {servicesData.map((service, index) => (
            <li
              key={index}
              className="services-list-item grid grid-cols-2 py-8 relative hover:overflow-visible"
            >
              <div className="flex card-data">
                <img className="w-16 h-16 mr-14" src={service.icon} alt="" />
                <h3 className="font-semibold ">
                  <Link
                    className="text-2xl sm:text-2xl md:text-2xl lg:text3xl bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text"
                    to={service.link}
                  >
                    {service.title}
                  </Link>
                  <ul className="service-list flex mt-4 mb-3 uppercase">
                    <li className="border-r-2 border-gray-300 pr-4 ">
                      <Link to="PHP.php">{service.courseone}</Link>
                    </li>
                    <li className="border-r-2 border-gray-300 px-4">
                      <Link to="Asp-net.php">{service.coursetwo}</Link>
                    </li>
                    <li className="border-r-2 border-gray-300 px-4">
                      <Link to="Java.php">{service.coursethree}</Link>
                    </li>
                    <li className="pl-4">
                      <Link to="WP-Shopify-Joomla-Magento.php">
                        {service.coursefour}
                      </Link>
                    </li>
                  </ul>
                </h3>
              </div>
              <div className="flex gap-3 w-full sm:w-full md:w-full lg:w-10/12">
                <p className="text-gray-600 text-lg mb-8 font-small text-justify line-clamp-2 hover:line-clamp-none">
                  {service.description}
                </p>
                <FaArrowRight className="absolute w-10 h-10 top-10 sm:top:10 md:top-12 lg:top:14 right-7" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className=" mt-10 p-5 sm:p-5 md:p-5 lg:p-8 choose-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="col-lg-6">
            <div className="common-heading text-left">
              <div className="relative text-center">
                <div className="text-justify pl-0 sm:pl-0 md:pl-0 lg:pl-14 pt-0 ">
                  <span
                    className=" text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
                    style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
                  >
                    Why Choose us
                  </span>
                  <h3 className="text-2xl sm:text-2xl md:text-2xl lg:4xl  mt-5 mb-8 font-bold">
                    Why The
                    <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text">
                      {""} Future IT Touch Pvt. Ltd.
                    </span>
                    {""} Ranked Top Among The Leading Web & App Development
                    Companies
                  </h3>
                  <p className="leading-7 text-base">
                    Our <strong>top IT company in India</strong>, known for
                    innovation and top-notch solutions, offers a diverse range
                    of services including web development, software, and mobile
                    app development, driving business growth and staying at the
                    forefront of technology.
                  </p>
                </div>
              </div>
              <div className="itm-media-object pl-0 sm:pl-0 md:pl-10 lg:pl-16 text-justify mt-8">
                <div className="flex mt-4">
                  <div className="w-full sm:w-full md:w-full lg:w-40">
                    <img
                      src={test}
                      alt="icon"
                      className="w-16 h-16 bg-gray-200 rounded-lg p-3"
                    />
                  </div>
                  <div className="media-body">
                    <h4 className="text-2xl font-bold">
                      Streamlined Project Management
                    </h4>
                    <p className="leading-7 text-base">
                      Project management is very crucial for efficiently
                      handling any project. Project management helps in the
                      proper allocation of tasks and meeting deadlines.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-6">
                  <div className="w-full sm:w-full md:w-full lg:w-40">
                    <img
                      src={employee}
                      alt="icon"
                      className="w-16 h-16 bg-gray-200 rounded-lg p-3"
                    />
                  </div>
                  <div className="media-body">
                    <h4 className="text-2xl font-bold">
                      Link Dedicated Team of Experts
                    </h4>
                    <p className="leading-7 text-base">
                      Building long-term relationships with an expert advanced
                      software development service provider attracting Link
                      mature team of skilled and experienced quality
                    </p>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="w-full sm:w-full md:w-full lg:w-40">
                    <img
                      src={office}
                      alt="icon"
                      className="w-16 h-16 bg-gray-200 rounded-lg p-3"
                    />
                  </div>
                  <div className="media-body">
                    <h4 className="text-2xl font-bold">
                      Completion of Project in Given Time
                    </h4>
                    <p className="leading-7 text-base">
                      Link project schedule is Link timetable that organizes
                      tasks, resources and due dates in an ideal sequence so
                      that Link project can be completed on time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="relative single-image bg-shape-dez">
              <img
                className="relative z-10 rounded w-full sm:w-full md:w-full lg:w-11/12 h-80 object-cover"
                src={company}
                alt=""
              />
            </div>
            <p className="text-justify mt-8 leading-7 text-base pr-0 sm:pr-0 md:pr-0 lg:pr-16">
              As Link top <strong>web development company</strong>, we create
              robust, scalable websites for diverse business objectives. Our
              skilled developers use the latest technologies to deliver
              flawless, on-time, and budget-friendly projects, making us Link
              trusted partner for web development endeavors. From static sites
              to complex web apps, we hand over on time and budget. We are your
              trusted partner in crafting visually stunning and highly
              functional websites that leave Link lasting impression. Elevate
              your online presence with Future IT Touch.
            </p>
            <div className="cta-card mt-8 text-left  pr-0 sm:pr-0 md:pr-0 lg:pr-16">
              <h3 className="mb-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold float-start  ">
                Let's Start Link <br />
                <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text">
                  {""} New Project
                </span>{" "}
                Together
              </h3>

              <Link
                to="#"
                className="btn-outline float-right flex items-center border-2 border-black text-black px-8 py-2 font-poppins text-base bg-white shadow-md rounded-full mt-5 ml-2 hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-current "
              >
                Request A Quote <FaAngleRight className="relative left-2" />
              </Link>
              {/* <p className="text-center mt-8 leading-7 text-base pr-16">
                You already have Link project in mind and want to work with us?
                Fill out the form below and let us know right away in which
                direction IT should go.
              </p> */}
              <Link to="#" className="text-right mt-5"></Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" Business-domain  mt-5 sm:mt-5 md:mt-7 lg:mt-10   px-0 sm:px-0 md:px-0 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-lg-5 text-white v-center px-5 sm:px-5 md:px-0 lg:px-20 mt-20 ">
            <div className="common-heading text-l">
              <span
                className=" text-4xl mb-8  tracking-widest"
                style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
              >
                Industries we work for
              </span>
              <h3 className="text-4xl  mt-5 mb-5 font-bold">
                Helping Businesses in All Domains{" "}
              </h3>
              <p className="text-justify text-lg leading-6 mt-5">
                We develop websites that build businesses! We believe, there is
                no room for a one-size-fits-all approach in web development
                services. Each website is unique and it needs a personal touch
                to meet specific business needs. Our experienced UI/UX designers
                and full stack web development team can effectively transform
                your idea into reality.
              </p>
              <p className="text-justify text-lg leading-6 mt-5">
                As a reputable website development company in India, we've
                assisted hundreds of companies worldwide to achieve their goals,
                drive businesses growth, and create happy customers. From LAMP
                to MEAN, business websites for startups to custom web
                applications for corporate - we do it all! Engage our custom web
                design services to build a stunning website for your business.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="mx-5 mt-5">
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  className={`work-card cd${card.id} ${card.bgColor} h-44 w-36 relative  inline-block p-8 shadow-lg`}
                >
                  <div className="ml-2">
                    <img src={card.src} alt={card.alt} />
                  </div>
                  <p className="text-center mt-2 font-semibold">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 pb-10 gap-4 bg-gray-200">
        <div className="pt-20 md:col-span-12 text-center">
          <span
            className="text-4xl mb-5 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Our Price
          </span>
          <h3 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text">
              Price{" "}
            </span>
            Template
          </h3>
          <ul className="flex justify-center mt-5 gap-5">
            <li>
              <button
                onClick={() => handleTabClick("website")}
                className={`inline-block rounded-full border-2 border-indigo-600 text-indigo-600 px-4 py-2 text-black-300 font-semibold ${
                  activeTab === "website"
                    ? "bg-gradient-to-r from-indigo-600 to-teal-400 text-white"
                    : "hover:bg-gradient-to-r hover:from-indigo-600 hover:to-teal-400 hover:text-white transition duration-300 ease-in-out"
                }`}
              >
                Website
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("seo")}
                className={`inline-block rounded-full border-2 border-indigo-600 text-indigo-600 px-4 py-2 text-black-300 font-semibold ${
                  activeTab === "seo"
                    ? "bg-gradient-to-r from-indigo-600 to-teal-400 text-white"
                    : "hover:bg-gradient-to-r hover:from-indigo-600 hover:to-teal-400 hover:text-white transition duration-300 ease-in-out"
                }`}
              >
                SEO
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("apps")}
                className={`inline-block rounded-full border-2 border-indigo-600 text-indigo-600 px-4 py-2 text-black-300 font-semibold ${
                  activeTab === "apps"
                    ? "bg-gradient-to-r from-indigo-600 to-teal-400 text-white"
                    : "hover:bg-gradient-to-r hover:from-indigo-600 hover:to-teal-400 hover:text-white transition duration-300 ease-in-out"
                }`}
              >
                Apps
              </button>
            </li>
          </ul>
        </div>

        {activeTab === "website" && (
          <div className="p-4 md:col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  px-0 sm:px-0 md:px-10 lg:px-40 ">
              {/* Standard Package */}
              <div className="bg-[#0086c5] text-white  py-4 px-px relative">
                <div className="icon-plan absolute top-0 left-5 bg-[#0086c5] p-5 rounded-full shadow-main">
                  <FaPaperPlane className="text-4xl" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#050748]">
                    Standard
                  </h3>
                  <p className="text-lg font-semibold mb-4">INR 4999</p>
                </div>
                <ul className="text-center mb-4 rounded-b-lg bg-white  text-[#7c7c7c]">
                  <div className="rating pb-1 text-4xl text-[#ffd600]">
                    <label className="checked">☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>
                  </div>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Disk Space 200 MB{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#0086c5] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    One Domain{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#0086c5] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    1 Creative Landing Page{" "}
                    <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Search Optimization{" "}
                    <FaTimes
                      className="w-9 
                     h-9 p-2 bg-[#d9d9d9] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center py-2 px-5 ">
                    Advanced Settings{" "}
                    <FaTimes
                      className="w-9 
                     h-9 p-2 bg-[#d9d9d9] text-white rounded-full"
                    />
                  </li>
                  <button className="bg-[#0086c5] text-white px-5 py-3 text-lg font-bold mt-3 mb-5  rounded">
                    Select Plan <i className="fas fa-angle-right ml-2"></i>
                  </button>
                </ul>

                <Link
                  to="Pricing-Package.php"
                  className="block text-center mt-3 font-semibold text-white"
                >
                  See More Plan Details
                </Link>
              </div>

              {/* Premium Package */}
              <div className="bg-[#ffcd48] text-white py-4 px-px relative">
                <div className="icon-plan absolute top-0 left-5 bg-[#ffcd48] p-5 shadow-main rounded-full ">
                  <FaCrown className="text-4xl " />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold  text-[#ba7d00]">
                    Premium
                  </h3>
                  <p className="text-lg font-semibold mb-4">INR 7999</p>
                </div>
                <ul className="text-center mb-4 rounded-b-lg bg-white  text-[#7c7c7c]">
                  <div className="rating pb-1 text-4xl text-[#ffd600]">
                    {" "}
                    <label className="checked">☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>{" "}
                  </div>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    SSD Disk Space 500 MB{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    One Domain{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    10 Html Page{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Search Optimization{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center  py-2 px-5">
                    Advanced Settings{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <button className="bg-[#ffcd48] text-white px-5 py-3 text-lg font-bold mt-3 mb-5 rounded">
                    Select Plan{" "}
                  </button>
                </ul>
                <Link
                  to="Pricing-Package.php"
                  className="block text-center mt-3 font-semibold text-white"
                >
                  See More Plan Details
                </Link>
              </div>

              {/* Enhanced Package */}
              <div className="bg-[#6fc713] text-white py-4 px-px relative">
                <div className="icon-plan absolute top-0 left-5 bg-[#6fc713] p-5 shadow-main rounded-full">
                  <FaRocket className="text-4xl" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#050748]">
                    Enhanced
                  </h3>
                  <p className="text-lg font-semibold mb-4">INR 15999</p>
                </div>

                <ul className="text-center mb-4  bg-white rounded-b-lg text-[#7c7c7c]">
                  <div className="rating pb-1 text-4xl text-[#ffd600]">
                    {" "}
                    <label className="checked">☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>{" "}
                  </div>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    SSD Disk Space 1GB{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    One Domain{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    15 Page Dynamics{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Search Optimization{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center py-2 px-5">
                    Advanced Settings{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <button className="bg-[#6fc713] text-white px-5 py-3 text-lg font-bold mt-3 mb-5 rounded">
                    Select Plan
                  </button>
                </ul>
                <Link
                  to="Pricing-Package.php"
                  className="block text-center mt-3 font-semibold text-white"
                >
                  See More Plan Details
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === "seo" && (
          <div className="p-4 md:col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-0 sm:px-0 md:px-10 lg:px-40 ">
              {/* Standard Package */}
              <div className="bg-[#0086c5] text-white  py-4 px-px relative">
                <div className="icon-plan absolute top-0 left-5 bg-[#0086c5] p-5 rounded-full shadow-main">
                  <FaPaperPlane className="text-4xl" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#050748]">
                    Standard
                  </h3>
                  <p className="text-lg font-semibold mb-4">INR 9999</p>
                </div>
                <ul className="text-center mb-4 rounded-b-lg bg-white  text-[#7c7c7c]">
                  <div className="rating pb-1 text-4xl text-[#ffd600]">
                    {" "}
                    <label className="checked">☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>
                  </div>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    15 Keywords to be optimised
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#0086c5] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Off Page Optimization
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#0086c5] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    On Page Optimization
                    <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Social Media Optimization
                    <FaTimes
                      className="w-9 
                      h-9 p-2 bg-[#d9d9d9] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center py-2 px-5 ">
                    SEO Ranking Weekly Reports
                    <FaTimes
                      className="w-9 
                      h-9 p-2 bg-[#d9d9d9] text-white rounded-full"
                    />
                  </li>
                  <button className="bg-[#0086c5] text-white px-5 py-3 text-lg font-bold mt-3 mb-5  rounded">
                    Select Plan <i className="fas fa-angle-right ml-2"></i>
                  </button>
                </ul>

                <Link
                  to="Pricing-Package.php"
                  className="block text-center mt-3 font-semibold text-white"
                >
                  See More Plan Details
                </Link>
              </div>

              {/* Premium Package */}
              <div className="bg-[#ffcd48] text-white py-4 px-px relative">
                <div className="icon-plan absolute top-0 left-5 bg-[#ffcd48] p-5 shadow-main rounded-full ">
                  <FaCrown className="text-4xl " />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold  text-[#ba7d00]">
                    Premium
                  </h3>
                  <p className="text-lg font-semibold mb-4">INR 11999</p>
                </div>
                <ul className="text-center mb-4 rounded-b-lg bg-white  text-[#7c7c7c]">
                  <div className="rating pb-1 text-4xl text-[#ffd600]">
                    {" "}
                    <label className="checked">☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>{" "}
                  </div>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    15 Keywords to be optimised
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Off Page Optimization
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    On Page Optimization
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Social Media Optimization
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center  py-2 px-5">
                    SEO Ranking Weekly Reports
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <button className="bg-[#ffcd48] text-white px-5 py-3 text-lg font-bold mt-3 mb-5 rounded">
                    Select Plan{" "}
                  </button>
                </ul>
                <Link
                  to="Pricing-Package.php"
                  className="block text-center mt-3 font-semibold text-white"
                >
                  See More Plan Details
                </Link>
              </div>

              {/* Enhanced Package */}
              <div className="bg-[#6fc713] text-white py-4 px-px relative">
                <div className="icon-plan absolute top-0 left-5 bg-[#6fc713] p-5 shadow-main rounded-full">
                  <FaRocket className="text-4xl" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#050748]">
                    Enhanced
                  </h3>
                  <p className="text-lg font-semibold mb-4">INR 14999</p>
                </div>

                <ul className="text-center mb-4  bg-white rounded-b-lg text-[#7c7c7c]">
                  <div className="rating pb-1 text-4xl text-[#ffd600]">
                    {" "}
                    <label className="checked">☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>{" "}
                  </div>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    20 Keywords to be optimised
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Off Page Optimization
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    On Page Optimization
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Social Media Optimization
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center py-2 px-5">
                    SEO Ranking Weekly Reports
                    <FaCheck
                      className="w-9 
                      h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <button className="bg-[#6fc713] text-white px-5 py-3 text-lg font-bold mt-3 mb-5 rounded">
                    Select Plan
                  </button>
                </ul>
                <Link
                  to="Pricing-Package.php"
                  className="block text-center mt-3 font-semibold text-white"
                >
                  See More Plan Details
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === "apps" && (
          <div className="p-4 md:col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-0 sm:px-0 md:px-10 lg:px-40 ">
              {/* Standard Package */}
              <div className="bg-[#0086c5] text-white  py-4 px-px relative">
                <div className="icon-plan absolute top-0 left-5 bg-[#0086c5] p-5 rounded-full shadow-main">
                  <FaPaperPlane className="text-4xl" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#050748]">
                    Standard
                  </h3>
                  <p className="text-lg font-semibold mb-4">INR 24999</p>
                </div>
                <ul className="text-center mb-4 rounded-b-lg bg-white  text-[#7c7c7c]">
                  <div className="rating pb-1 text-4xl text-[#ffd600]">
                    {" "}
                    <label className="checked">☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>
                  </div>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Maximum Number of Screens: 7
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#0086c5] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Maximum Number of Api: 7
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#0086c5] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Web Panel Login: 1
                    <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Payment Gateway Integration: No
                    <FaTimes
                      className="w-9 
                     h-9 p-2 bg-[#d9d9d9] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center py-2 px-5 ">
                    Advanced Settings
                    <FaTimes
                      className="w-9 
                     h-9 p-2 bg-[#d9d9d9] text-white rounded-full"
                    />
                  </li>
                  <button className="bg-[#0086c5] text-white px-5 py-3 text-lg font-bold mt-3 mb-5  rounded">
                    Select Plan <i className="fas fa-angle-right ml-2"></i>
                  </button>
                </ul>

                <Link
                  to="Pricing-Package.php"
                  className="block text-center mt-3 font-semibold text-white"
                >
                  See More Plan Details
                </Link>
              </div>

              {/* Premium Package */}
              <div className="bg-[#ffcd48] text-white py-4 px-px relative">
                <div className="icon-plan absolute top-0 left-5 bg-[#ffcd48] p-5 shadow-main rounded-full ">
                  <FaCrown className="text-4xl " />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold  text-[#ba7d00]">
                    Premium
                  </h3>
                  <p className="text-lg font-semibold mb-4">INR 39999</p>
                </div>
                <ul className="text-center mb-4 rounded-b-lg bg-white  text-[#7c7c7c]">
                  <div className="rating pb-1 text-4xl text-[#ffd600]">
                    {" "}
                    <label className="checked">☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>{" "}
                  </div>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Maximum Number of Screens: 10
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Maximum Number of Api: 8
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Web Panel Login: 1
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Payment Gateway Integration: Yes
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center  py-2 px-5">
                    Advanced Settings{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#ffcd48] text-white rounded-full"
                    />
                  </li>
                  <button className="bg-[#ffcd48] text-white px-5 py-3 text-lg font-bold mt-3 mb-5 rounded">
                    Select Plan{" "}
                  </button>
                </ul>
                <Link
                  to="Pricing-Package.php"
                  className="block text-center mt-3 font-semibold text-white"
                >
                  See More Plan Details
                </Link>
              </div>

              {/* Enhanced Package */}
              <div className="bg-[#6fc713] text-white py-4 px-px relative">
                <div className="icon-plan absolute top-0 left-5 bg-[#6fc713] p-5 shadow-main rounded-full">
                  <FaRocket className="text-4xl" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#050748]">
                    Enhanced
                  </h3>
                  <p className="text-lg font-semibold mb-4">INR 49999</p>
                </div>

                <ul className="text-center mb-4  bg-white rounded-b-lg text-[#7c7c7c]">
                  <div className="rating pb-1 text-4xl text-[#ffd600]">
                    {" "}
                    <label className="checked">☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>
                    <label>☆</label>{" "}
                  </div>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Maximum Number of Screens: 12
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Maximum Number of Api: 10
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Web Panel Login: 1
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center border-b-2 py-2 px-5">
                    Payment Gateway Integration: Yes
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <li className="flex justify-between items-center py-2 px-5">
                    Advanced Settings{" "}
                    <FaCheck
                      className="w-9 
                     h-9 p-2 bg-[#6fc713] text-white rounded-full"
                    />
                  </li>
                  <button className="bg-[#6fc713] text-white px-5 py-3 text-lg font-bold mt-3 mb-5 rounded">
                    Select Plan
                  </button>
                </ul>
                <Link
                  to="Pricing-Package.php"
                  className="block text-center mt-3 font-semibold text-white"
                >
                  See More Plan Details
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Testimonial />

      <div className="grid grid-cols-1 bg-[#FAFAFC]  md:grid-cols-12 gap-4 py-20  px-5 sm:px-5 md:px-10 lg:px-20">
        <div className=" p-0 sm:p-0 md:p-4 lg:p-4 md:col-span-6">
          <div className="w-full">
            <div className="text-start ">
              <span
                className="text-4xl bg-gradient-to-r  from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
                style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
              >
                Web Design &amp; Development
              </span>
              <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl mt-5 text-justify font-bold text-gray-900 mb-4">
                We Make Finest Marketing With{" "}
                <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text">
                  Great Passion
                </span>
              </h2>
            </div>
          </div>

          <div className=" rounded-lg my-10 border border-[#705fff] sm:border-[#705fff] md:border-[#ccc] lg:border-[#FAFAFC]   hover:border-[#705fff] p-4 sm:p-4 md:p-4 lg:p-6">
            <div className="block sm:block md:block lg:flex lg:gap-5  text-justify mb-4">
              <img src={search} className="w-12 h-12 mr-4" alt="" />
              <div className="">
                <h4 className="text-2xl font-bold mt-2 sm:mt-2 md:mt-2  mb-4 bg-[#705fff] text-transparent bg-clip-text  text-gray-900">
                  Search engine optimisation
                </h4>

                <p className="text-gray-700 mb-4">
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, It is a long established fact
                  that.
                </p>
                <div className="w-full bg-gray-300 rounded-full">
                  <div
                    className="bg-[#705fff] hover:bg-gradient-to-r  from-teal-400 to-indigo-700  text-xs leading-none py-1 text-center text-white rounded-full"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" rounded-lg my-10 border border-[#705fff] sm:border-[#705fff] md:border-[#ccc] lg:border-[#FAFAFC]   hover:border-[#705fff] p-4 sm:p-4 md:p-4 lg:p-6">
            <div className="block sm:block md:block lg:flex lg:gap-5  text-justify mb-4">
              <img src={family} className="w-12 h-12 mr-4" alt="" />
              <div className="">
                <h4 className="text-2xl font-bold mt-2 sm:mt-2 md:mt-2  mb-4 bg-[#705fff] text-transparent bg-clip-text  text-gray-900">
                  Carefully crafted
                </h4>

                <p className="text-gray-700 mb-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="w-full bg-gray-300 rounded-full">
                  <div
                    className="bg-[#705fff] hover:bg-gradient-to-r  from-teal-400 to-indigo-700 text-xs leading-none py-1 text-center text-white rounded-full"
                    style={{ width: "70%" }}
                  >
                    70%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" rounded-lg my-10 border border-[#705fff] sm:border-[#705fff] md:border-[#ccc] lg:border-[#FAFAFC]   hover:border-[#705fff] p-4 sm:p-4 md:p-4 lg:p-6">
            <div className="block sm:block md:block lg:flex lg:gap-5  text-justify mb-4">
              <img src={digital} className="w-12 h-12 mr-4" alt="" />
              <div className="">
                <h4 className="text-2xl font-bold mt-2 sm:mt-2 md:mt-2 lg:mt-0 mb-4 bg-[#705fff] text-transparent bg-clip-text  text-gray-900">
                  Marketing strategy
                </h4>

                <p className="text-gray-700 mb-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="w-full bg-gray-300 rounded-full">
                  <div
                    className="bg-[#705fff] hover:bg-gradient-to-r  from-teal-400 to-indigo-700 text-xs leading-none py-1 text-center text-white rounded-full"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:col-span-6 hidden sm:hidden md:hidden lg:block">
          <div className="hero-images-three top-0 p-4 mr-5 relative w-full pulse max-w-335 h-490">
            <img className="image-three object-cover" src={animated1} alt="" />
          </div>
          <div className="hero-images-three mr-5 relative w-full pulse max-w-335 h-96">
            <img className="absolute w-38  -z-10" src={circle2} alt="" />
            <img className="image-three object-cover" src={animated2} alt="" />
          </div>
          <div className="relative bottom-1/4">
            <div className="hero-images-four mr-5 absolute w-full pulse max-w-335  bottom-1/2 left-96 h-490">
              <img
                className="shape-1  absolute -z-10 bottom-80"
                src={lines2}
                alt=""
              />
              <img
                className="shape-right  absolute -z-10 right-20 rounded-full  "
                src={cirlce3}
                alt=""
              />
              <img className="image-one object-cover" src={animated3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 sm:mx-5 md:mx-10 lg:mx-20 text-center">
        <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-8 font-bold">
          <span
            className=" text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Portfolio <br />
          </span>
          Featured
          <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text ml-2">
            Products
          </span>
        </h3>

        <p className="text-lg font-medium text-gray-500 text-center px-0 sm:px-0 md:px-0 lg:px-52  mb-5">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident,
        </p>
        <div className="flex flex-wrap justify-center">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4 border"
            >
              <img className="w-full" src={item.image} alt={item.title} />
              <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">
                  Category:{" "}
                  <Link
                    to={item.link}
                    className="font-semibold bg-gradient-to-r from-indigo-700 to-teal-600 text-transparent leading-normal bg-clip-text"
                  >
                    {item.category}
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <img src={faq} className="absolute right-0" alt="" />
        <div className="mx-5 sm:mx-5 md:mx-10 lg:mx-20 mt-20 ">
          <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-3 font-bold">
            <span
              className=" text-4xl mb-5 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest "
              style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
            >
              FAQ <br />
            </span>
            Our Expert
            <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text ml-2">
              Answers
            </span>
          </h3>

          <p className="text-lg font-medium text-justify text-gray-500  md:w-1/2">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="p-4 md:col-span-6  hidden sm:hidden md:hidden lg:block">
              <div className="hero-images-four top-16 p-4  relative w-full pulse h-96 ">
                <img
                  className="image-one object-cover"
                  src={animated5}
                  alt=""
                />
              </div>
              <img className="absolute w-38  -z-10" src={circle2} alt="" />
              <div className="relative bottom-3/4">
                <div className="hero-images-three mr-5 absolute w-full pulse  top-0  left-96 ">
                  <img
                    className="shape-1  absolute -z-10 bottom-80"
                    src={lines2}
                    alt=""
                  />
                  <img
                    className="shape-right  absolute -z-10 right-20 rounded-full  "
                    src={cirlce3}
                    alt=""
                  />
                  <img
                    className="image-three object-cover"
                    src={animated3}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="py-4 px-0 sm:px-0 md:px-0 lg:px-4 md:col-span-6 ml-0 sm:ml-0 md:ml-10 lg:ml:20 ">
              <div className="w-full max-w-2xl mx-auto">
                <div className="accordion mt-5">
                  {faqData.map((item, index) => (
                    <div
                      className="accordion-item "
                      style={{
                        border:
                          activeAccordion === index ? "1px solid blue" : "",
                        borderRadius:
                          activeAccordion === index ? "20px 20px 0 20px" : "",
                      }}
                      key={index}
                    >
                      <h2
                        
                        onClick={() => toggleAccordion(index)}
                        className={` accordion-header transform transition-transform ${
                          activeAccordion === index
                            
                        }`}
                      >
                        <button
                          className={`accordion-button flex gap-5 font-bold text-xl items-center py-6 px-6 w-full text-left focus:outline-none ${
                            activeAccordion === index ? "active" : ""
                          }`}
                          type="button"
                          style={{
                            background:
                              activeAccordion === index
                                ? "linear-gradient(90deg, #20d9a1 0%, #5f39ff 100%)"
                                : "none",
                            color:
                              activeAccordion === index ? "#ffffff" : "#000000",
                            borderRadius:
                              activeAccordion === index ? "20px 20px 0 0" : "",
                          }}
                        >
                          <span className="mr-2 font-bold text-2xl">
                            {item.id}
                          </span>
                          {item.question}
                          <span
                            className={`ml-2 transform transition-transform ${
                              activeAccordion === index
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M15.293 5.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L10 9.586l5.293-5.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      {activeAccordion === index && (
                        <div
                          className="accordion-collapse font-sans py-5 px-6 bg-gray-50"
                          style={{
                            borderRadius:
                              activeAccordion === index ? "0 0 0 20px" : "",
                          }}
                        >
                          <div className="text-lg font-semibold">
                            {item.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-0 sm:mt-0 md:mt-20 lg:mt-40">
        <Forms />
      </div>
    </>
  );
};

export default Hero;
