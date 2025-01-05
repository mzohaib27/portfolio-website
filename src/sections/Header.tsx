import React from "react";

const Header = () => {
  return (
    <>
      <div className=" flexCenter py-2 md:py-4 fixed w-full">
        <nav className="nav-container z-10">
          <a href="#home" className=" nav-item">
            Home
          </a>
          <a href="#about" className=" nav-item">
            About
          </a>
          <a href="#projects" className=" nav-item">
            Projects
          </a>

          <a
            href="#contact"
            className=" nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
