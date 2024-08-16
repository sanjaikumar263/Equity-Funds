import React from "react";
import bg_1 from "../assets/bg_1.jpg";
import logok from "../assets/logo-Photoroom.png";
import head_bg from "../assets/header_bg.jpg";
import { FaCirclePlay } from "react-icons/fa6"; //play-icon
import { FaSearch } from "react-icons/fa"; //search-icon
// import fun_img from "../assets/fund.jpeg";
// import fun_img1 from "../assets/fund2.jpeg";
// import fun_img2 from "../assets/fund3.jpeg";
// import fun_img3 from "../assets/fund4.jpg";
// import fun_img4 from "../assets/fund5.jpeg";
// import fun_img5 from "../assets/fund6.webp";
import { FaAngleRight } from "react-icons/fa"; //faq-
import phone from "../assets/Phone.png";
// import logo from "../assest/image.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
// corosel
import simg1 from "../assets/sponsor1.png";
import simg2 from "../assets/sponsor2.png";
import simg3 from "../assets/sponsor3.png";
import simg4 from "../assets/sponsor4.png";
import simg5 from "../assets/sponsor5.png";
import simg6 from "../assets/sponsor6.png";
import simg7 from "../assets/sponsor7.png";
import simg8 from "../assets/sponsor8.png";
import simg9 from "../assets/sponsor9.png";
import simg10 from "../assets/sponsor10.png";

import logog from "../assets/Group_1.png";
import fun_img16 from "../assets/logo11.png";
import { useState, useEffect } from "react";
import bg_2 from "../assets/anie.jpg";
import bg_3 from "../assets/katt.jpg";
import bg_4 from "../assets/joe.jpg";
import { Link } from "react-router-dom";

import img1 from "../assets/Img1.jpeg"
import img2 from "../assets/img2.jpeg"
// import { Element, animateScroll as scroll } from 'react-scroll';
import { Link as Linkin } from "react-scroll";
const dataCart = [{
  img:img1,
  date:"25/03/2023",
  header:'My friend  is deying ',
  details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugit?q",
  donatedpreson:"200"
},{
  img:img2,
  date:"25/03/2023",
  header:'Deying on cancer',
  details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugit?",
  donatedpreson:"200"
},
{
  img:img2,
  date:"25/03/2023",
  header:'My friend  is deying ',
  details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugit?",
  donatedpreson:"200"
},{
  img:img2,
  date:"25/03/2023",
  header:'My friend  is deying ',
  details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugit?",
  donatedpreson:"200"
},
]


const Home = () => {
  const [showmore, setshowmore] = useState(false);
  const [showmore1, setshowmore1] = useState(false);
  const [showmore2, setshowmore2] = useState(false);
  const [showmore3, setshowmore3] = useState(false);
  const [readmore, setreadmore] = useState(false);

  const [val, setVal] = useState(bg_4);

  const cars = [head_bg, bg_1, bg_2, bg_3];

  useEffect(() => {
    let currentIndex = 0;

    const setValWithDelay = () => {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % cars.length;
        setVal(cars[currentIndex]);
      }, 1000);

      setTimeout(setValWithDelay, 5000);
    };

    setValWithDelay();
  }, []);

  return (
    <div className="h-full w-full bg-gray-200 space-y-18 ">
      {/* Main div */}
      <div className="relative h-screen bg-indigo-500 flex">
        {/* Transparent overlay div */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col">
          {/* Navigation div */}
          <nav className="p-4 bg-transparent">
            <ul className="text-md font-medium flex justify-between items-center w-full text-white text-lg">
              {/* Left Side Logo and Text */}
              <div className="flex items-center space-x-2">
                <img className="w-12 h-12" src={logok} alt="Logo" />
                <p className="text-xl font-bold">Equity Funds</p>
              </div>

              {/* Right Side Navigation Items */}
              <div className="flex  space-x-4 items-center">
                <Linkin
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  {" "}
                  <li>Browse Fundraisers</li>
                </Linkin>
                <Link to="/howitswork">
                  <li>How it Works?</li>
                </Link>
                <Link to="/Form">
                  <span>
                    <li>Start Fund</li>
                  </span>
                </Link>
                <Link to="/login">
                  {" "}
                  <button className="bg-transparent text-emerald-700 -500 border border-emerald-500 py-2 px-4 rounded hover:bg-emerald-500 hover:text-white">
                    Login
                  </button>
                </Link>
                <Link to="/login">
                  {" "}
                  <button className="bg-transparent text-emerald-700 -500 border border-emerald-500 py-2 px-4 rounded hover:bg-emerald-500 hover:text-white">
                    Sign Up
                  </button>
                </Link>
                {/* <Link to='/Admin'> <button className="bg-transparent text-emerald-700 -500 border border-emerald-500 py-2 px-4 rounded hover:bg-emerald-500 hover:text-white">Admin Login</button></Link> */}
              </div>
            </ul>
          </nav>
          {/* Centered button div */}
          <div className="flex-grow flex flex-col items-center justify-center space-y-8">
            <div className="text-center ">
              <p className="text-5xl text-gray-400 font-bold mb-4">
                Be the <span className="text-green-300"> hand </span>that lifts
                others up.
              </p>
              <p className="text-md text-gray-400 italic font-semibold">
                Be a part of the breakthrough and make someone’s dream come
                true.
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-emerald-500 text-white py-3 px-6 rounded-lg shadow-lg text-lg">
                Donate Now
              </button>
              <button className="bg-transparent text-emerald-700 -500 border border-emerald-500 py-3 px-6 rounded-lg shadow-lg flex items-center space-x-2 text-lg">
                <FaCirclePlay /> <span>Watch Video</span>
              </button>
            </div>
          </div>
        </div>
        <img
          id="maain"
          className={` maain object-cover h-full w-full`}
          src={val}
          alt="BACKGROUND"
        />
      </div>

      {/* Card  */}

      <div className=" flex flex-col items-center justify-center h-full w-full mt-10 space-y-6">
        <div className="h-[20%] w-full text-center text-3xl font-bold mb-4">
          Open <span className="text-emerald-700 -500">donations</span>
        </div>
        <div className="relative">
          <input
            className=" border-2 bg-gray-100 w-96 rounded-3xl p-2 pl-4"
            placeholder="Open donations..."
            type="search"
          />
          <div className="absolute right-4 top-4">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
        <div>{/* cards */}</div>

        <>
          <div className="flex flex-row gap-12 " name="section1">
            <div className="flex flex-wrap gap-2">
              <div className="border-2 text-emerald-700  rounded-2xl px-2 py-1 flex justify-center items-center border-emerald-700">
                All
              </div>
              <div className="border-2 text-emerald-700  rounded-2xl px-2 py-1 flex justify-center items-center border-emerald-700">
                Disaster
              </div>
              <div className="border-2 text-emerald-700   rounded-2xl px-2 py-1 flex justify-center items-center border-emerald-700">
                Children
              </div>
              <div className="border-2 text-emerald-700  rounded-2xl px-2 py-1 flex justify-center items-center border-emerald-700">
                Food Crisis
              </div>
              <div className="border-2 text-emerald-700  rounded-2xl px-2 py-1 flex justify-center items-center border-emerald-700">
                Health
              </div>
              <div className="border-2 text-emerald-700  rounded-2xl px-2 py-1 flex justify-center items-center border-emerald-700">
                Education
              </div>
              <div className="border-2 text-emerald-700  rounded-2xl px-2 py-1 flex justify-center items-center border-emerald-700">
                Homeless
              </div>
              <div className="border-2 text-emerald-700  rounded-2xl px-2 py-1 flex justify-center items-center border-emerald-700">
                Animal
              </div>
              <div className="border-2 text-emerald-700  rounded-2xl px-2 py-1 flex justify-center items-center border-emerald-700">
                Pandemic
              </div>
              <div className="border-2 text-emerald-700  rounded-2xl px-2 py-1 flex justify-center items-center border-emerald-700">
                War Crisis
              </div>
            </div>
          </div>
          <New />

          {/* bread crumbs */}

          {/* Platform  */}
          <div className=" h-full space-y-8 w-full">
            <div className="mt-16 mx-10">
              <p className="italic font-bold text-sm">
                MODERN CROWDFUNDING PLATFORM
              </p>
              <p className="text-2xl">
                Distribute aid <span className="text-emerald-700 -500">easily</span>,{" "}
                <span className="text-emerald-700 -500">quickly</span> and{" "}
                <span className="text-emerald-700 -500">transparently</span>.
              </p>
            </div>
            <div className="flex justify-evenly">
              {/* left-div-image-platform */}
              <div className="w-[45%] h-full ">
                <img src={phone} alt="img" className="rounded-xl " />
              </div>
              {/* right-div  */}
              <div className="w-[45%] h-full flex flex-col justify-between">
                <div className="w-full mb-4">
                  <p>
                    Open Data is the idea that some data should be freely
                    available for everyone to use and republish as they see fit,
                    without restrictions from copyright, patents, or other
                    control mechanisms.
                    <span
                      onClick={() => {
                        setreadmore(!readmore);
                      }}
                    >
                      <u className={`${readmore ? "" : "hidden"}`}>
                        Read more.
                      </u>
                      <span className={`${readmore ? "hidden" : ""}`}>
                        When a fundraiser uses the word small, the intention is
                        to make a potential donor feel that they can be a part
                        of the solution with very little contribution. It’s
                        basically highlighting the amount of effort needed –
                        which really isn’t much overall.{" "}
                      </span>
                      <span
                        className={`${
                          readmore ? "hidden" : ""
                        } underline text-emerald-700 -500`}
                      >
                        HIDE
                      </span>
                    </span>
                  </p>
                </div>
                <div className="w-full">
                  {/* Additional content for the second half */}
                  {/* Faq */}
                  <p className="text-xl font-semibold mb-4">
                    Frequently Asked Questions
                  </p>
                  <div className="space-y-4">
                    <div className="bg-emerald-400 h-[3rem] w-[65%] flex items-center justify-between p-2 rounded-lg ">
                      <span>
                        I want to start a medical fundraiser. What all do i
                        need?
                      </span>{" "}
                      <FaAngleRight onClick={() => setshowmore(!showmore)} />
                    </div>
                    <div
                      className={` bg-emerald-200 w-[65%] flex items-center justify-between p-2 rounded-lg ${
                        showmore ? "" : "hidden"
                      }`}
                    >
                      <span className="">
                        For your fundraiser to be as transparent as possible,
                        upload a scanned copy of your hospital bill mentioning
                        the medical condition and the amount you require along
                        with high resolution photograph of the patient.
                      </span>
                    </div>
                    <div className="bg-emerald-400 h-[3rem] w-[65%] flex items-center justify-between p-2 rounded-lg">
                      <span>
                        I don’t see the medical treatment I want to raise funds
                        for in the list, what do I do?
                      </span>{" "}
                      <FaAngleRight onClick={() => setshowmore1(!showmore1)} />
                    </div>
                    <div
                      className={` bg-emerald-200 w-[65%] flex items-center justify-between p-2 rounded-lg ${
                        showmore1 ? "" : "hidden"
                      }`}
                    >
                      {" "}
                      <span>
                        You can raise funds for - Bone Marrow Transplant, Kidney
                        Transplant, NICU Care(in case of premature babies),
                        Cancer Treatment, Open Heart Surgery, Heart defect,
                        Brain tumor, Cerebral Palsy, Aplastic Anaemia, Joint
                        Replacement, Eye Surgery. However, if your treatment
                        option isn’t mentioned here, you can get in touch with
                        us to get assistance - someone from our team will get in
                        touch with you
                      </span>
                    </div>
                    <div className="bg-emerald-400 h-[3rem] w-[65%] flex items-center justify-between p-2 rounded-lg">
                      <span>
                        I want to start raising funds, how do I start a
                        fundraiser on Equity Funds?
                      </span>{" "}
                      <FaAngleRight onClick={() => setshowmore2(!showmore2)} />
                    </div>
                    <div
                      className={` bg-emerald-200 w-[65%] flex items-center justify-between p-2 rounded-lg ${
                        showmore2 ? "" : "hidden"
                      }`}
                    >
                      <span>
                        Starting a fundraiser on Equity Fudns takes just 3
                        minutes and signing up is absolutely free*. Just sign
                        up, fill details of what you need money for and hit
                        submit.
                      </span>
                    </div>
                    <div className="bg-emerald-400 h-[3rem] w-[65%] flex items-center justify-between p-2 rounded-lg">
                      <span>I have more questions, who do I write to?</span>{" "}
                      <FaAngleRight onClick={() => setshowmore3(!showmore3)} />
                    </div>
                    <div
                      className={` bg-emerald-200 w-[65%] flex items-center justify-between p-2 rounded-lg ${
                        showmore3 ? "" : "hidden"
                      }`}
                    >
                      <span>
                        You can write to equityfunds4354@gmail.com Know someone
                        who needs funds for medical treatment urgently? Help
                        them out by sharing this information with them.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Humanity-bar */}
          <div className="w-full size-96 pt-8 px-10">
            {/* head-div */}
            <div className="w-full h-[25%] ">
              <p className="text-sm font-bold">HUMANITARIAN MISSION</p>
              <p className="text-2xl">
                Help the Affected by
                <br />
                <span className="text-emerald-700 -500">Disasters</span>,
                <span className="text-emerald-700 -500">Shortagges</span>, and{" "}
                <span className="text-emerald-700 -500">Emergency Relief.</span>{" "}
              </p>
            </div>
            <div className="flex flex-row justify-stretch py-10 gap-48">
              {/* first-sub-div */}
              <div className="w-[20%] space-y-4">
                <p>
                  <span className="text-emerald-700 -500">22,690</span> Donations
                  have been verified and still active
                </p>
                <p>
                  <span className="text-emerald-700 -500">6,450</span> Donations have
                  been distributed to disaster-affected areas.
                </p>
                <p>
                  <span className="text-emerald-700 -500">1.4 Billion</span> total
                  funds raised so far.
                </p>
              </div>
              {/* second-sub-div */}
              <div className="w-[20%] space-y-4">
                <p>
                  <span className="text-emerald-700 -500">10,517</span> donations
                  have been distributed to the needy.
                </p>
                <p>
                  <span className="text-emerald-700 -500">5,058</span> donations were
                  distributed to social foundation and orphanges
                </p>
                <p>
                  <span className="text-emerald-700 -500">4,803</span> donations have
                  been distributed to people in emergency situations
                </p>
              </div>
              {/* third-sub-div */}
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={logog}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </>
      </div>

      <Caro />
      <Support />

      <Bottom />
    </div>
  );
};

const Support = () => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="flex w-[75%] h-52 bg-emerald-500">
          <div className="text-white w-[50%] ml-[2rem] mt-[2rem]">
            <p>Call Center</p>
            <p className="text-2xl">(0351) 1117-555</p>

            <p className="mt-[3rem]">Email</p>
            <p className="text-2xl">equityfunds3565@gmail.com</p>
          </div>
          <div className="w-[50%]  flex justify-end overflow-hidden">
            <img
              src={fun_img16}
              className="w-screen  h-full object-cover transform scale-150 ml-[1rem]"
              alt="Hand "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const New = () => {
  const [showDetails, setShowDetails] = useState(false);

  const openDetails = () => {
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="flex flex-row gap-12">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2">
        {/* Your existing filter buttons */}
      </div>

      {/* Main content */}
      <div className="row-1 flex justify-center mx-[32px] mt-[70px] gap-[60px]">
      <div className='grid grid-cols-3 gap-4'>
        {dataCart.map((e)=>(
          <div className='ml-1 p-3 w-[100%] h-[30rem] rounded-lg my-1 bg-white shadow-2xl mr-10"'>
            <img src={e.img} alt="" className='w-[50rem] h-60'  />
            <p className="flex justify-end ">{e.date}</p>
            <p className="flex justify-end">{e.donatedpreson}</p>
            <p className='font-bold'>{e.header}</p>
            <p>{e.header}</p>
            <p>{e.details}</p>
            <button
              className="border-2 border-green-500  text-green-600 w-[280px] h-[40px] mt-[32px] ml-[70px] rounded hover:bg-green-600 hover:text-white tracking-wider"
              onClick={openDetails}
            >
              Show more..
            </button>
          </div>
        ))
        }
      </div>

        {/* Detailed card content */}
        {showDetails && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="border-2 border-white w-[900px] h-[500px] rounded-lg shadow-xl bg-white p-8 relative">
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={closeDetails}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 hover:text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-4">Detailed Content</h1>
              {/* <div className="maincard mx-[20%] shadow-2xl mb-11 mt-10 py-10 px-16 rounded-md"> */}
              <div className="imgandDetails flex gap-8 justify-center mt-3">
                <div className="img w-[90%] h-[100%]  ">
                  <img src="image1.jpg" alt="" />
                </div>
                <div>
                  <p className="font-bold text-2xl">
                    My friend have Liver Cancer and he is deying and He need a
                    Help
                  </p>
                  <p>We Need a 300000 </p>
                  <div className="flex flex-col gap-2 font-bold  mt-10">
                    <div className="donatebtn p-2  rounded-2xl  text-center ml-10 mr-16 hover:bg-green-500 bg-green-600 ">
                      <p>Donate Now</p>
                    </div>
                    <div className="sharebtn  p-2  rounded-2xl text-center ml-10 mr-16 hover:bg-green-500 bg-green-600 ">
                      <p>Share</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
              {/* </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Caro = () => {
  const images = [
    simg1,
    simg2,
    simg3,
    simg4,
    simg5,
    simg6,
    simg7,
    simg8,
    simg9,
    simg10,
  ];
  return (
    <div className="slider w-[100%] ">
      <div className="flex justify-evenly w-[100%] slider-track">
        {images.map((src, index) => (
          <div className="slide ">
            <img
              key={index}
              src={src}
              alt={`slide${index}`}
              className=" mt-24 w-[75%] h-24 rounded-3xl hover:rounded-3xl "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export function Bottom() {
 return (
    <>
      <div className="flex justify-between border-2 bg-[rgba(35,39,51,1)] w-100% h-96 mt-12">
        {/* logo and head */}
        <div className="flex text-white font-semibold gap-x-5 mt-16 ml-16">
          <img src={logok} className="h-16 w-16 cursor-pointer" alt="log"></img>
          <p className="text-2xl mt-4">Equity Funds</p>
        </div>

        {/* social media section and conatct */}
        <div className="flex gap-24 mt-20 mr-20">
          <div className="">
            <p className="text-emerald-700 -500 font-semibold">QUICK LINK</p>
            <p className="text-white mt-4 cursor-pointer">Home</p>
            <p className="text-white mt-4 cursor-pointer">Start Fund</p>
          </div>

          <div className="">
            <p className="text-emerald-700 -500 font-semibold">HOW ITS WORK</p>
            <Link to="/howitswork">
              {" "}
              <p className="text-white mt-4 cursor-pointer">How its work ?</p>
            </Link>
            <p className="text-white mt-4 cursor-pointer">Support</p>
            <p className="text-white mt-4 cursor-pointer">FAQ</p>
            <p className="text-white mt-4 cursor-pointer">About us</p>
          </div>

          <div className="">
            <p className="text-emerald-700 -500 font-semibold">FOLLOW US</p>
            <div className="flex items-center gap-x-2 mt-6 cursor-pointer">
              <FaFacebook className="text-2xl text-white" />
              <p className="text-white">Facebook</p>
            </div>

            <div className="flex items-center gap-x-2 mt-6 cursor-pointer">
              <FaInstagramSquare className="text-2xl text-white" />
              <p className="text-white">Instagram</p>
            </div>

            <div className="flex items-center gap-x-2 mt-6 cursor-pointer">
              <FaSquareTwitter className="text-2xl text-white" />
              <p className="text-white">Twitter</p>
            </div>
          </div>

          <div className="">
            <p className="text-emerald-700 -500 font-semibold">Contact Us</p>
            <p className="text-white mt-6 cursor-pointer">+91 9424544554</p>
            <p className="text-white mt-6 cursor-pointer">
              equityfunds4354@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="w-100% h-20 border-1 bg-[rgba(35,39,51,1)]">
        <p className="text-white ml-[38rem] font-semibold">
          copyright@equityfunds 2024
        </p>
      </div>
    </>
  );
}

export default Home;
