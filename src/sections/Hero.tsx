import React from "react";
import heroimage from "@/assets/images/hero-image2.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div>
        <div className="hero-container">
          <div className="wrapper">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Image
            src={heroimage}
            alt="hero-iamge"
            className="h-32  w-32  rounded-full shadow-lg shadow-purple-600 my-4"
          />
          <div className="absolute w-64 md:w-96 h-64 md:h-96 border border-purple-400 rounded-full -z-20 opacity-40" />
          <div className="flexCenter px-4 py-1 rounded-lg bg-black gap-2">
            <div className="h-2  w-2  rounded-full bg-green-600" />
            <div className="text-sm md:text-md">Muhammad Zohaib Hasan</div>
          </div>
          <h1 className="text-5xl  font-semibold italic">
            Front End <br /> Developer
          </h1>
          <p className="text-white/70 text-xs md:text-base w-[80%] md:w-[55%] text-center">
            I specializes to convert designs into functional, high-performing
            web applications. Let's connect 👋
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-1 rounded-full border border-white/50 bg-gray-700 hover:bg-transparent hoverEffect text-xs md:text-base">
              Explore Projects
            </button>
            <button className="text-xs md:text-base bg-white/90 text-gray-800 px-4 py-1 rounded-full border border-white hover:bg-transparent hover:text-white hoverEffect">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
