import React from "react";
import About from "./_Components/About";

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center">
      <About />
      <div className="w-[800px] h-[800px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-200 via-purple-200 to-fuchsia-200 rounded-[999px]"></div>
      <div className="md:w-[1000px] md:h-[800px] absolute -bottom-20 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-200 via-purple-200 to-fuchsia-200 rounded-[999px]"></div>
    </div>
  );
};

export default AboutPage;
