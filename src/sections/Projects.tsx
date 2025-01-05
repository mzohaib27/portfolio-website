import React from "react";
import { portfolioProjects } from "@/assets/constants/constants.js";
import Image from "next/image";
import { FaRegCircleCheck, FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-9">
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
        <p className="text-sm md:text-lg text-white/80">
          Explore Some Awesome results
        </p>
        <h1 className="text-3xl md:text-5xl py-2 ">Projects</h1>
        <p className="py-6 md:py-12 text-white/80">
          Take a look how i convert beautifull designs into useable functional
          projects
        </p>
        <div className="project-container overflow-hidden">
          {portfolioProjects?.map((project, index) => (
            <div
              key={index}
              className="lg:flex bg-gray-800 rounded-3xl shadow-sm shadow-black border border-white/30"
            >
              <div className="p-4 md:p-6 lg:p-8 lg:w-[50%]">
                <h1 className="uppercase font-semibold tracking-widest bg-gradient-to-tr from-emerald-300 via-cyan-500 to-sky-500 text-transparent bg-clip-text ">
                  Year : <span> {project.year} </span>
                </h1>
                <h1 className="text-xl md:text-3xl font-serif py-2">
                  {" "}
                  {project.title}{" "}
                </h1>
                <hr />
                <ul className="flex flex-col py-4">
                  {project.results.map((result, i) => (
                    <li
                      key={i}
                      className="flexStart gap-2 text-sm md:text-base text-gray-400"
                    >
                      <FaRegCircleCheck className="w-4 h-4" />
                      <h1>{result.title}</h1>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="flexCenter w-full md:w-32 gap-2 bg-white text-center text-sm md:text-base font-semibold rounded-xl text-gray-900 px-4 py-2"
                >
                  <button className="">View Site</button>
                  <FaArrowUpRightFromSquare className="w-3 h-3 text-gray-900" />
                </a>
              </div>
              <Image
                src={project.image}
                alt="project-image"
                className=" lg:w-[50%] xs:rounded-br-3xl xs:rounded-bl-3xl lg:rounded-t-3xl bg-cover"
              />

              {/* <Image src={project.image} alt="project-image" /> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
