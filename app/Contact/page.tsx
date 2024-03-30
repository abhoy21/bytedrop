import React from "react";
import Contact from "./_Components/Contact";

const ContactPage = () => {
  return (
    <div>
      <Contact />
      <div className="w-[800px] h-[800px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-30 bg-gradient-to-r from-indigo-100 via-purple-100 to-fuchsia-100 rounded-[999px]"></div>
      <div className="md:w-[1000px] md:h-[800px] absolute -bottom-20 left-0 -z-10 blur-3xl bg-opacity-30 bg-gradient-to-r from-indigo-100 via-purple-100 to-fuchsia-100 rounded-[999px]"></div>
    </div>
  );
};

export default ContactPage;
