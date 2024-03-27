import React from "react";
import UploadFile from "./_Components/UploadFile";
import Download from "./_Components/Download";
import Footer from "./_Components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col md:p-10 min-h-screen overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Upload Section */}
          <div className="col-span-1 bg-gray-200 pt-8 h-screen overflow-hidden md:overflow-visible md:pt-0 px-4 md:px-0">
            <span className="md:flex text-3xl md:text-5xl text-gray-800 justify-center mt-14">
              <p className="text-purple-500 text-underline font-bold mr-4">
                Seamlessly
              </p>
              <p className="text-gray-500 font-bold">upload and share files</p>
            </span>
            <UploadFile />
          </div>
          {/* Download Section */}
          <div className="col-span-1 bg-gray-200 pt-8 h-screen overflow-hidden md:overflow-visible md:pt-0">
            <Download />
          </div>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
};

export default HomePage;
