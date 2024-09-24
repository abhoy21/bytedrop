"use client";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import FileDownload from "./FileDownload";
import FileUpload from "./FileUpload";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import UploadSuccessNotification from "./UploadSuccessNotification";
import { WelcomeMessage } from "./WelcomeMessage";

export default function FileSharingPage() {
  const [uploadedCode, setUploadedCode] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleUpload = (code: string) => {
    setUploadedCode(code);
    setIsUploading(false);
    toast.success("File uploaded successfully!", {
      position: "top-right",
      autoClose: 5000,
    });
  };

  const handleDownload = async (code: string) => {
    setIsDownloading(true);
    try {
      const db = getFirestore();
      const docRef = doc(db, "tempud", code);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const url = docSnapshot.data()?.url; // Get the URL from Firestore
        if (url) {
          // Trigger file download
          const response = await fetch(url);
          const blob = await response.blob();
          const filename = url.substring(url.lastIndexOf("/") + 1);
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = filename;
          link.click();
          toast.success(`Downloaded file: ${filename}`, {
            position: "top-right",
            autoClose: 5000,
          });
        }
      } else {
        toast.error("Invalid code or file not found.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Download failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className=' min-h-screen bg-gradient-to-br from-white to-purple-200 flex flex-col items-center justify-center p-4'>
        <div>
          <WelcomeMessage />
        </div>
        <div className='w-full max-w-4xl bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden'>
          <div className='p-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Upload Section */}
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold text-purple-800'>
                Share Your File
              </h2>
              <FileUpload onUpload={handleUpload} isUploading={isUploading} />
              <UploadSuccessNotification code={uploadedCode} />
            </div>

            {/* Download Section */}
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold text-purple-800'>
                Get Your File
              </h2>
              <FileDownload
                onDownload={handleDownload}
                isDownloading={isDownloading}
              />
              <div className='bg-purple-100 bg-opacity-70 border border-purple-200 rounded-2xl p-4 flex items-center space-x-4'>
                <AlertCircle className='h-6 w-6 text-purple-500 flex-shrink-0' />
                <p className='text-sm text-purple-700'>
                  Enter the 6-digit code provided by the file uploader to
                  download the shared file.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
