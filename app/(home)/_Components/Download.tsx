import React, { useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as FileSaver from "file-saver";
import { ScanEye, Download, CircleX } from "lucide-react";
import Loader from "./Loader";

const DownloadFile: React.FC = () => {
  const [uid, setUid] = useState<string>("");
  const [userDownload, setUserDownload] = useState<string | undefined>(
    undefined
  );
  const [showCard, setShowCard] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function getNameByUid(): Promise<void> {
    setLoading(true);
    try {
      const db = getFirestore();
      const docRef = doc(db, "tempud", uid);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const url = docSnapshot.get("url");
        setUserDownload(url);
        const notify = () => toast.success("File Found!");
        notify();
        console.log(url);
      } else {
        console.log("Document does not exist.");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setShowCard(true);
      }, 1500);
    }
  }

  function hideCard(): void {
    setShowCard(false);
  }

  async function handleDownloadClick(): Promise<void> {
    if (userDownload) {
      try {
        const response = await fetch(userDownload);
        const blob = await response.blob();

        // Extracting filename from URL
        const startIndex = userDownload.lastIndexOf("/") + 1;
        const endIndex = userDownload.indexOf("?");
        const filename = userDownload.substring(startIndex, endIndex);

        FileSaver.saveAs(blob, filename);
      } catch (error) {
        console.error("Error downloading file:", error);
      }
    }
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === "Enter") {
      getNameByUid();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center pt-8 md:pt-36">
      <div className="relative rounded-full overflow-hidden bg-white shadow-xl w-3/4">
        <input
          type="text"
          name="text"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          onKeyDown={handleKeyPress} // Added keydown event listener
          placeholder="Search by Code"
          className="bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
        />
        <div className="absolute right-2 top-[0.4em]">
          <button
            className="w-14 h-14 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden"
            onClick={getNameByUid}
          >
            <svg
              width={50}
              height={50}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              <path
                d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                fill="white"
                fillOpacity="0.01"
              />
              <path
                d="M42.8496 18.7067L21.0628 44.6712"
                stroke="white"
                strokeWidth="3.76603"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                stroke="white"
                strokeWidth="3.76603"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000" />
            <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000" />
          </button>
        </div>
      </div>
      {loading && (
        <div className="flex items-center justify-center pt-12">
          <div>
            <Loader />
          </div>
        </div>
      )}
      {showCard && userDownload && (
        <div className="flex items-center justify-center pt-12">
          <div className="card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 15L8 11M12 15L16 11"
                  />{" "}
                </g>
              </svg>
            </div>

            <div className="content">
              <span className="title text-lg md:text-2xl">Hola Amigo!</span>
              <div className="desc flex">
                This File is now available for download.
              </div>
              <div className="actions">
                <div>
                  <a
                    href={userDownload}
                    className="preview items-center hover:bg-fuchsia-200 hover:text-gray-700 duration-300 ease-in-out"
                  >
                    <span className="hidden md:flex">Preview</span>
                    <ScanEye className="w-6 h-6 md:ml-2" />
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="download items-center hover:bg-purple-400 hover:text-gray-900 duration-300 ease-in-out"
                    onClick={handleDownloadClick}
                  >
                    <span className="hidden md:flex">Download</span>
                    <Download className="w-6 h-6 md:ml-2" />
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="notnow items-center hover:bg-red-300 hover:text-gray-900 duration-300 ease-in-out"
                    onClick={hideCard}
                  >
                    <span className="hidden md:flex">Cancel</span>
                    <CircleX className="w-6 h-6 md:ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="close hover:bg-gray-400 duration-300 ease-in-out"
              onClick={hideCard}
            >
              <svg
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {!showCard && (
        <div className="flex items-center justify-center pt-14">
          <span className="md:flex text-3xl md:text-5xl text-gray-800 justify-center">
            <p className="text-gray-700 font-bold mr-4">Enter</p>
            <p className="text-purple-500 text-underline font-bold mr-4">
              Search Code
            </p>
            <p className="text-gray-700 font-bold">to get your files</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default DownloadFile;
