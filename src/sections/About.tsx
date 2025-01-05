import React from "react";

const About = () => {
  return (
    <>
      <div className="p-8 md:p-16 lg:p-24">
        <div className="flex py-2 border-b border-sky-300">
          <h1 className="text-2xl md:text-3xl lg:text-5xl">About</h1>
        </div>
        <p className="py-4 md:py-6 tracking-widest text-gray-400 md:text-lg">
          I'm a Front-End Developer with 3 years of experience in building
          dynamic and user-friendly web applications. Skilled in HTML, CSS,
          JavaScript, TypeScript, React, and Next.js, I create responsive,
          modern designs with a focus on performance and accessibility. I
          specialize in animations with Framer Motion and state management using
          Redux Toolkit, ensuring seamless and engaging user experiences.
          Passionate about innovation and problem-solving, I continuously
          explore new technologies to deliver top-notch solutions. Let's bring
          ideas to life!
        </p>
      </div>
    </>
  );
};

export default About;
