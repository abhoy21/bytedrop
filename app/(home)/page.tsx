import React from "react";
import UploadFile from "./_Components/UploadFile";
import Download from "./_Components/Download";
import Footer from "./_Components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col md:p-10 min-h-screen md:max-h-[50em] overflow-hidden bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Upload Section */}
          <div
            className="col-span-1 bg-gray-200 pt-4 md:pt-8 h-[30em] md:h-[50em] overflow-hidden md:overflow-visible px-4 md:px-0 bg-no-repeat bg-bottom"
            style={{ backgroundImage: "url('/upload_bg.svg')" }}
          >
            <span className="md:flex text-3xl md:text-5xl text-gray-800 justify-center">
              <p className="text-purple-500 text-underline font-bold mr-4">
                Seamlessly
              </p>
              <p className="text-gray-500 font-bold">upload and share files</p>
            </span>
            <UploadFile />
          </div>
          {/* Download Section */}
          <div
            className="col-span-1 bg-gray-200 py-4 md:py-8 h-[30em] md:h-[50em] overflow-hidden md:overflow-visible md:pt-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/download_bg.svg')",
            }}
          >
            <Download />
          </div>
        </div>
      </div>{" "}
      <div className="w-full fixed bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
