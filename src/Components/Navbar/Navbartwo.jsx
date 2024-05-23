import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Components/Assets/secondary-logo.png';
const Navbartwo = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text' : '';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  return (
    <>
    <nav className={`bg-white border-gray-200 nav-width dark:bg-gray-900 absolute z-50 mx-4 sm:mx-8 md:mx-12 lg:mx-20 mt-3 rounded-md ${isScrolled ? 'sticky-nav scrolled' : ''}`}>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between relative z-50 mx-auto px-3">
      
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-auto nav-logo" alt="Flowbite Logo" />
        </Link>
        <button
          onClick={toggleNav}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`${isNavOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="navbar-main font-medium text-base flex flex-col pl-4 py-4 pr-10 md:p-0 mt-1  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white ${isActive('/')}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li       onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
            <Link
            to="/about" 
        
        className={` relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-gradient-to-r md:hover:from-teal-400 md:hover:to-indigo-700 md:hover:text-transparent md:hover:bg-clip-text md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive('/about')}`}
      >
        About
      
             
      {isOpen && (
        <ul   onClick={() => setIsOpen(false)} className="absolute top-8 left-0 mt-2 w-48 bg-white border-t-2 border-teal-400 to-indigo-700 shadow-lg dark:bg-gray-800">
          <li>
            <Link
              to="/about/team"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700"
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              to="/about/history"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="/about/contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
            Mission & Vision 
            </Link>
          </li>
          <li>
            <Link
              to="/about/contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
            Our Portfolio 
            </Link>
          </li>
          <li>
            <Link
              to="/about/contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
            Our Pricing Package 
            </Link>
          </li>
        </ul>
      )}
    </Link>
    </li>
    <li>
              <Link
                to="/service"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-gradient-to-r md:hover:from-teal-400 md:hover:to-indigo-700 md:hover:text-transparent md:hover:bg-clip-text md:p-0  ${isActive('/service')}`}
              >
                Services
              
              </Link>
            </li>
            <li>
              <Link
                to="/pages"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-gradient-to-r md:hover:from-teal-400 md:hover:to-indigo-700 md:hover:text-transparent md:hover:bg-clip-text md:p-0 ${isActive('/pages')}`}
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-gradient-to-r md:hover:from-teal-400 md:hover:to-indigo-700 md:hover:text-transparent md:hover:bg-clip-text md:p-0 ${isActive('/blog')}`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-gradient-to-r md:hover:from-teal-400 md:hover:to-indigo-700 md:hover:text-transparent md:hover:bg-clip-text md:p-0 ${isActive('/contact')}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button className="flex items-center bg-dark-200 justify-center bg-black text-white py-2 sm:py-4 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-full text-xs sm:text-xs md:text-sm lg:text-base  focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700">
          Contact Us
                  </button>
      </div>
    </nav>
 
   
</>
  );
};

export default Navbartwo;
