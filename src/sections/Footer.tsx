import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <>
      <div className="px-6 md:px-12 lg:px-24 ">
        <div className="md:flex md:items-center md:justify-between gap-6 py-6 border-t border-sky-400">
          <div>
            <h1 className="text-sm text-white/70 my-2 md:my-0">
              @2024, All rights reserved
            </h1>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
            <button className="flexCenter gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-white/70 text-xs">
              <h1>Facebook</h1>
              <HiMiniArrowUpRight className="w-3 h-3 text-white/90" />
            </button>
            <button className="flexCenter gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-white/70 text-xs">
              <h1>Linked in</h1>
              <HiMiniArrowUpRight className="w-3 h-3 text-white/90" />
            </button>
            <button className="flexCenter gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-white/70 text-xs">
              <h1>Github</h1>
              <HiMiniArrowUpRight className="w-3 h-3 text-white/90" />
            </button>
            <button className="flexCenter gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-white/70 text-xs">
              <h1>Twitter</h1>
              <HiMiniArrowUpRight className="w-3 h-3 text-white/90" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
