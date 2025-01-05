import React from "react";
import { Words } from "@/assets/constants/constants";
import { BsStars } from "react-icons/bs";
import Marquee from "react-fast-marquee";

const Tape = () => {
  return (
    <div className="py-16">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-300 overflow-x-clip -rotate-3 ">
        <Marquee>
          <div className="flex  ">
            <div className="flex items-center gap-4">
              {Words?.map((word, index) => (
                <div key={index}>
                  <h1 className="inline-flex gap-4 items-center">
                    <span className="uppercase font-bold text-gray-900 text-xs px-2">
                      {word}
                    </span>
                    <BsStars className="w-4 h-4 text-gray-900" />
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Tape;
