import React from "react";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; //carousel CSS
import img1 from '../assets/carousel_image1.jpg';
import img2 from '../assets/carousel image2.jpg';
import img3 from '../assets/carousel image3.jpg';
import img4 from '../assets/carousel image4.jpg';
import img5 from '../assets/carousel image5.jpg';
import img6 from '../assets/carousel image6.jpg';
import img7 from '../assets/carousel image7.jpg';
import img8 from '../assets/carousel image8.jpg';
import logo from "../assets/logo.png";
import { PiMoney } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import { FaTools } from "react-icons/fa";
import { GiSmart } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

// import "../components/silde.css"

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const How = () => {
 
  return (
    <>
      <nav className="p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-10" />
            <Link to="/" className="text-black font-bold hover:text-emerald-600">Equity Funds</Link>
            <Link to="/browse" className="text-black hover:text-emerald-600">Browse Fundraisers</Link>
            <Link to="/howitsworks" className="text-black hover:text-emerald-600">How it Works?</Link>
            <Link to="/Form" className="text-black hover:text-emerald-600">Start Fund</Link>
          </div>
          <div className="space-x-3 mt-2 md:mt-0">
            <Link to="/signup" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-full">Sign Up</Link>
            <Link to="/login" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-full">Login</Link>
          </div>
        </div>
      </nav>

      <h1 className="text-emerald-500 text-4xl font-extrabold text-center mt-10">
        Raising Funds was never this easy. Start a <br />fundraiser in 5 minutes!
      </h1>

      <div className="flex justify-center   ">
        
      <Carousel
        className="h-[340px] w-[650px] mt-20 shadow-lg rounded-xl overflow-hidden"
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={true}
        showStatus={false}
        showArrows={false}
  
      >
        {images.map((img, index) => (
          
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div> 

    <div className="max-w-xl mx-auto rounded-lg shadow-lg shadow-emerald-400 px-3 py-4 md:px-5 md:py-6 mt-10">
  <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
    <div className="mt-3">
      <h1 className="text-emerald-500 text-2xl font-bold">72 Lakh+</h1>
      <p className="text-gray-400 mt-1">DONORS</p>
    </div>
    <div className="hidden md:block w-1 h-10 bg-slate-300"></div>
    <div className="mt-3">
      <h1 className="text-emerald-500 text-2xl font-bold">3.2 Lakh+</h1>
      <p className="text-gray-400 mt-1">FUNDRAISERS</p>
    </div>
    <div className="hidden md:block w-1 h-10 bg-slate-300"></div>
    <div className="mt-3">
      <h1 className="text-emerald-500 text-2xl font-bold">0%</h1>
      <p className="text-gray-400 mt-1">PLATFORM FEE</p>
    </div>
  </div>
</div>


      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold pb-4">What is Crowdfunding <span className="text-emerald-500">?</span></h1>
        <p className="text-gray-400">
          In its simplest form, Crowdfunding is a practice of giving monetary funds to <br /> overcome specific social, cultural, or economic hurdles individuals face in their <br />
          daily lives.
        </p>
      </div>

      
        <div className="flex justify-center mt-10">
          <iframe className="border rounded-xl shadow-md " width="600px" height="300px" src="https://www.youtube.com/embed/voF1plqqZJA?si=ZLr4n3I6XFCfOSOD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        
          <div className=" mt-10 text-center">
          <h1 className="text-2xl font-medium pb-5">So how does Crowdfunding work On EquityFunds <span className="text-emerald-500">?</span></h1>
          <p className="text-gray-400 ">
            Let us assume an individual, unfortunately, meets with an accident on the road. His medical expenses and hospital bills start piling up. Now he needs ₹5 Lakh to pay his expensive medical bills. Fortunately, his best friend signed up on Ketto’s crowdfunding platform, completed the process of submitting valid documents needed for verification. In a few minutes, he created a crowdfunding campaign to raise funds for his friend’s medical expenses. Now, this campaign can be shared with all his near and dear ones through WhatsApp, Instagram, Twitter, Facebook and E-mail. In a matter of few minutes, funds start coming in to support the financial needs of the injured friend.
          </p>
          </div>
       

      <h1 className="pt-28 text-4xl font-bold text-center text-gray-900">Start a Fundraiser in three simple steps</h1>

      <div className="flex flex-col md:flex-row gap-8 pt-20 justify-center">
        <div className="flex justify-center md:block">
          <img className="w-16" src="https://ketto.gumlet.io/assets/images/homepage/sac-separator.png?w=100&dpr=1.0" alt="" />
        </div>
        <div className="text-center md:text-left">
          <div>
            <h1 className="text-emerald-500 text-xl font-medium pb-3">Start your fundraiser</h1>
            <p className="text-gray-800">
              It’ll take only 2 minutes. Just tell us a few details <br /> about you and the ones you are raising funds for.
            </p>
          </div>

          <div className="pt-16">
            <h1 className="text-emerald-500 text-xl font-medium pb-3">Share your fundraiser</h1>
            <p className="text-gray-800">
              All you need to do is share the fundraiser with your <br /> friends and family. In no time, support will start <br /> pouring in.
            </p>
            <p className="text-gray-400 text-xs pt-2">Share your fundraiser directly from dashboard on social media.</p>
          </div>

          <div className="pt-16">
            <h1 className="text-emerald-500 text-xl font-medium pb-3">Withdraw Funds</h1>
            <p className="text-gray-800">
              The funds raised can be withdrawn without any <br /> hassle directly to your bank account.
            </p>
            <p className="text-gray-400 text-xs pt-2">It takes only 5 minutes to withdraw funds on EquityFunds.</p>
          </div>
        </div>
      </div>

      <h1 className="pt-28 text-4xl font-bold text-center text-gray-900 pb-10">We provide everything you need</h1>
      <div className="w-full px-5 py-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <PiMoney className="text-emerald-500 h-10 w-10" />
            <h2 className="mt-2 font-bold text-lg">Lowest Platform Fee</h2>
            <p className="text-gray-400 mt-2">Set up your fundraiser for FREE! We have the lowest platform fee in the industry</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <TbWorld className="text-emerald-500 h-10 w-10" />
            <h2 className="mt-2 font-bold text-lg">Global Payments</h2>
            <p className="text-gray-400 mt-2">Accept donations from around the globe</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <IoIosPeople className="text-emerald-500 h-10 w-10" />
            <h2 className="mt-2 font-bold text-lg">Easy Fund Withdrawal</h2>
            <p className="text-gray-400 mt-2">Withdraw funds raised without any hassle</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CgWebsite className="text-emerald-500 h-10 w-10" />
            <h2 className="mt-2 font-bold text-lg">No Website Required</h2>
            <p className="text-gray-400 mt-2">You don’t need to build a separate website</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaHandHoldingDollar className="text-emerald-500 h-10 w-10" />
            <h2 className="mt-2 font-bold text-lg">0% Platform Fee</h2>
            <p className="text-gray-400 mt-2">We take no fees from the funds you raise!</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <BiSupport className="text-emerald-500 h-10 w-10" />
            <h2 className="mt-2 font-bold text-lg">24/7 Customer Support</h2>
            <p className="text-gray-400 mt-2">Our team is here to help you at every step</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <HiSpeakerphone className="text-emerald-500 h-10 w-10" />
            <h2 className="mt-2 font-bold text-lg">Integrated Social Media</h2>
            <p className="text-gray-400 mt-2">Share your fundraiser directly on social media</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaTools className="text-emerald-500 h-10 w-10" />
            <h2 className="mt-2 font-bold text-lg">Real-Time Analytics</h2>
            <p className="text-gray-400 mt-2">Track donations with our real-time dashboard</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <GiSmart className="text-emerald-500 h-10 w-10" />
            <h2 className="mt-2 font-bold text-lg">Smart Campaigns</h2>
            <p className="text-gray-400 mt-2">Use our tools to run smarter campaigns</p>
          </div>
        </div>
      </div>

    
      <div className="flex justify-between border-2 bg-[rgba(35,39,51,1)] w-100% h-96 mt-12">

  <div className="flex text-white font-semibold gap-x-5 mt-16 ml-16">
    <img src={logo} className="h-16 w-16 cursor-pointer" alt="log"></img>
    <p className="text-2xl mt-4">Equity Funds</p>
  </div>

  <div className="flex gap-24 mt-20 mr-20">
    <div className="">
      <p className="text-emerald-500 font-semibold">QUICK LINK</p>
      <p className="text-white mt-4 cursor-pointer">Home</p>
      <p className="text-white mt-4 cursor-pointer">Start Fund</p>
    </div>

    <div className="">
      <p className="text-emerald-500 font-semibold">HOW ITS WORK</p>
      <p className="text-white mt-4 cursor-pointer">How its work ?</p>
      <p className="text-white mt-4 cursor-pointer">Support</p>
      <p className="text-white mt-4 cursor-pointer">FAQ</p>
      <p className="text-white mt-4 cursor-pointer">About us</p>
    </div>

    <div className="">
      <p className="text-emerald-500 font-semibold">FOLLOW US</p>
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
      <p className="text-emerald-500 font-semibold">Contact Us</p>
      <p className="text-white mt-6 cursor-pointer">+91 9424544554</p>
      <p className="text-white mt-6 cursor-pointer">
        equityfunds4354@gmail.com
      </p>
    </div>
  </div>
</div>


<div className="bg-[rgba(35,39,51,1)] text-white text-center py-4">
  <p className="text-sm">
    &copy; {new Date().getFullYear()} Equity Funds. All rights reserved.
  </p>
</div>


     
      

      


    </>
  );
}

      
    
export default How;
