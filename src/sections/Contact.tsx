import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Contact = () => {
  return (
    <>
      <div className="p-6 md:p-12 lg:p-24 lg:py-16 ">
        <div className="lg:flex items-center bg-gradient-to-r from-emerald-300 via-sky-200 to-sky-400 rounded-3xl py-6">
          <div className="flex flex-col gap-2 px-12 py-6 lg:w-[80%] ">
            <h1 className="text-2xl md:text-3xl font-serif text-gray-900">
              Let's Create Something Amazing Together!
            </h1>
            <p className="text-gray-900  tracking-wider">
              Ready to bring your next project to life? Let's connect and
              discuss how can i help you to achieve your goals
            </p>
          </div>
          <div className="flexCenter lg:w-[20%]">
            <button className="px-4 py-2 bg-gray-900 font-semibold rounded-xl flexCenter gap-2">
              <h1 className="text-center  text-white/90  ">Contact Me</h1>
              <HiMiniArrowUpRight className="w-3 h-3 text-white/90" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
