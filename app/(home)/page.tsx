"use client";
import React from "react";
import UploadFile from "./_Components/UploadFile";

import Footer from "./_Components/Footer";
import DownloadFile from "./_Components/Download";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col md:p-10 min-h-screen md:max-h-[50em] overflow-hidden">
        <h1 className="flex items-center justify-center text-xl md:text-7xl font-mono font-bold py-12 text-purple-500">
          Your Files, Anywhere, Anytime
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Upload Section */}
          <div
            className="col-span-1 bg-white bg-opacity-60 border-2 border-white pt-4 lg:pt-8 h-[30em] lg:h-[50em] overflow-hidden md:overflow-hidden px-4 md:px-0  md:rounded-[5em]"
            // style={{ backgroundImage: "url('/upload_bg.svg')" }}
          >
            <span className="md:flex text-3xl md:text-5xl text-gray-700 justify-center md:pt-16">
              <p className="text-purple-500 text-underline font-bold mr-4">
                Seamlessly
              </p>
              <p className="text-gray-700 font-bold">upload and share files</p>
            </span>
            <UploadFile />
          </div>
          {/* Download Section */}
          <div
            className="col-span-1 bg-white bg-opacity-50 border-2 border-white py-4 lg:py-8 h-[30em] lg:h-[50em] overflow-hidden md:overflow-visible md:pt-0 md:rounded-[5em]"
            // style={{
            //   backgroundImage: "url('/download_bg.svg')",
            // }}
          >
            <DownloadFile />
          </div>
        </div>

        <div className="w-[800px] h-[800px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-100 via-purple-100 to-fuchsia-200 rounded-[999px]"></div>
        <div className="md:w-[1000px] md:h-[800px] absolute -bottom-20 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-100 via-purple-100 to-fuchsia-200 rounded-[999px]"></div>
      </div>{" "}
      <div className="hidden md:flex items-center justify-center py-4">
        <div className="hidden md:flex w-[800px] h-[200px] absolute -bottom-30 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-100 via-purple-100 to-fuchsia-200 rounded-[999px]"></div>

        <div className="col-span-1 space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl border-2 border-white drop-shadow-lg p-4">
            <svg
              className="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="mb-2 text-2xl font-bold">Safe Storage</h3>
            <p className="font-light text-gray-500">
              Securely store and access your files
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl border-2 border-white drop-shadow-lg p-4">
            <svg
              className="w-[46px] h-[46px]"
              viewBox="0 0 76 76"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              baseProfile="full"
              enable-background="new 0 0 76.00 76.00"
            >
              <path
                fill="#7C3AED"
                fill-opacity="1"
                stroke-width="0.4"
                stroke-linejoin="round"
                d="M 38,15.8333C 50.2423,15.8333 60.1667,25.7577 60.1667,38C 60.1667,50.2423 50.2423,60.1667 38,60.1667C 25.7577,60.1667 15.8333,50.2423 15.8333,38C 15.8333,25.7577 25.7577,15.8333 38,15.8333 Z M 38,19C 37.0389,19 36.0944,19.0714 35.1716,19.2091C 34.9741,19.6392 34.8333,20.1113 34.8333,20.5833C 34.8333,22.1667 33.25,19 31.6667,22.1667C 30.0833,25.3333 31.6667,22.1667 31.6667,25.3333C 31.6667,26.9167 29.3752,25.771 30.0833,26.125C 31.6667,26.9167 31.6667,26.9167 30.0833,28.5C 30.0833,28.5 26.9167,26.9167 26.9167,28.5C 26.9167,30.0833 25.3333,30.0833 23.75,30.0833C 22.1667,30.0833 23.75,33.25 22.1667,33.25C 20.9493,33.25 21.6039,31.3779 20.5322,30.5126C 20.1248,31.4618 19.7925,32.4508 19.5428,33.4722C 20.6099,34.4283 20.7886,38.2053 22.1667,39.5834C 23.75,38 23.75,39.5834 25.3333,39.5834C 26.9167,39.5834 26.9167,39.5834 27.7083,41.1667C 29.2917,41.1667 30.0833,42.75 31.6667,44.3333C 33.25,45.9167 36.4166,45.9167 36.4166,47.5C 36.4166,49.0833 34.8333,47.5 34.8333,50.6667C 34.8333,52.25 34.8333,52.25 33.25,52.25C 32.2531,52.25 31.2561,54.1331 30.6544,55.528C 32.9142,56.4761 35.3959,57 38,57C 43.3179,57 48.1255,54.8153 51.5742,51.2944L 50.6666,49.4792C 50.6666,49.4792 52.6458,46.3125 51.0625,44.7292C 49.4791,43.1459 49.4791,41.5625 49.4791,41.5625C 49.4791,41.5625 46.3125,44.7292 44.7291,43.1458C 43.1458,41.5625 43.1458,43.1458 41.5625,39.9792C 39.9791,36.8125 43.1458,35.2292 43.1458,35.2292C 43.1458,35.2292 43.1458,32.0625 44.7291,32.0625C 46.3125,32.0625 47.8958,28.8959 51.0625,32.0625C 51.0625,32.0625 52.8924,30.8426 55.4814,30.5444C 54.6693,28.6428 53.5561,26.9006 52.2016,25.3777C 51.9172,25.5822 51.545,25.7292 51.0625,25.7292C 49.4791,25.7292 52.6458,28.8959 51.0625,28.8959C 49.4791,28.8959 49.4791,27.3125 47.8958,27.3125C 46.3125,27.3125 46.3125,28.8959 44.7291,30.4792C 43.1458,32.0625 44.7291,30.4792 43.1458,28.8959C 41.5625,27.3125 46.3125,28.8959 44.7291,27.3125C 43.1458,25.7292 46.3125,25.7292 46.3125,24.1459C 46.3125,22.904 48.2605,22.6362 49.1008,22.5784C 48.187,21.9195 47.2124,21.3398 46.3125,20.9792C 47.8958,22.5625 44.7291,24.1459 43.1458,24.1459C 41.6585,24.1459 42.9653,21.3518 43.1294,19.7005C 41.4977,19.2441 39.7773,19 38,19 Z M 19,38C 19,43.5885 21.4127,48.6134 25.2533,52.09L 23.75,49.0833C 22.1667,49.0833 21.375,45.5209 21.375,43.9375C 21.375,42.6669 20.8651,41.6512 21.4821,40.4812C 19.2482,38.2376 20.5833,39.454 20.5833,38C 20.5833,37.2463 19.8657,36.4925 19.1137,35.9096C 19.0385,36.5961 19,37.2935 19,38 Z "
              />
            </svg>
            <h3 className="mb-2 text-2xl font-bold ">Send Files Anywhere</h3>
            <p className="font-light text-gray-500 ">
              Easily send files from one place to another
            </p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl border-2 border-white drop-shadow-lg p-4">
            <svg
              className="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 52 52"
              enable-background="new 0 0 52 52"
            >
              <path
                d="M50,43v2.2c0,2.6-2.2,4.8-4.8,4.8H6.8C4.2,50,2,47.8,2,45.2V43c0-5.8,6.8-9.4,13.2-12.2
	c0.2-0.1,0.4-0.2,0.6-0.3c0.5-0.2,1-0.2,1.5,0.1c2.6,1.7,5.5,2.6,8.6,2.6s6.1-1,8.6-2.6c0.5-0.3,1-0.3,1.5-0.1
	c0.2,0.1,0.4,0.2,0.6,0.3C43.2,33.6,50,37.1,50,43z M26,2c6.6,0,11.9,5.9,11.9,13.2S32.6,28.4,26,28.4s-11.9-5.9-11.9-13.2
	S19.4,2,26,2z"
              />
            </svg>
            <h3 className="mb-2 text-2xl font-bold">Instant Access</h3>
            <p className="font-light text-gray-500">
              Skip registration, just upload or type code for instant download.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full relative bottom-0">
        <div className="md:hidden w-[100px] h-[200px] absolute bottom-10 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-br from-indigo-200 via-purple-200 to-fuchsia-200 rounded-[999px]"></div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
