"use client";

import React, { useState, ChangeEvent } from "react";
import { Folder, Send } from "lucide-react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore";
import { datastore, db } from "../../../firebase";
import ShortUniqueId from "short-unique-id";
import { toast } from "react-toastify";

const UploadFile: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [docid, setDocid] = useState<string | undefined>();
  const uid = new ShortUniqueId();
  const MAX_FILE_SIZE_BYTES = 1024 * 1024; // 1 MB in bytes

  const handleSubmit = async () => {
    try {
      if (selectedFiles.length === 0) {
        console.log("No files found.");
        return;
      }

      const file = selectedFiles[0];

      // Check file size
      if (file.size > MAX_FILE_SIZE_BYTES) {
        console.log("File size exceeds the maximum limit (10MB).");
        const notify = () =>
          toast.error("File size exceeds the maximum limit (10MB).");
        notify();
        return;
      }

      const storageRef = ref(datastore, file.name);
      await uploadBytes(storageRef, file);
      const datastoreurl = await getDownloadURL(storageRef);
      console.log(datastoreurl);

      // Example of setting data in Firestore
      const data = {
        url: datastoreurl,
      };
      const tempDocid = uid.rnd();
      setDocid(tempDocid);
      console.log("doc id: ", tempDocid);
      const docRef = doc(collection(db, "tempud"), tempDocid);
      console.log(tempDocid);
      await setDoc(docRef, data);
      const notify = () => toast.success("Upload Successful");
      notify();

      // Clear selectedFiles state after successful upload
      setSelectedFiles([]);
    } catch (error) {
      console.error("Error uploading file:", error);
      const notify = () =>
        toast.error("Error uploading File, Check for file size Limit once!");
      notify();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files: FileList = event.target.files;
      setSelectedFiles(Array.from(files));
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="pt-8 pb-16 md:pt-18 lg:pt-24 md:pb-0 flex">
        <div className="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
          <div className="file_upload p-3 md:p-5 relative border-4 border-dotted border-gray-300 rounded-lg w-[450px]">
            <svg
              className="text-[#8a2be2] w-14 md:w-24 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <div className="input_field flex flex-col w-max mx-auto text-center">
              <div className="flex items-center justify-center space-x-4">
                <label>
                  <input
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                  />
                  <div className="flex items-center justify-center text-md md:text-xl bg-[#8a2be2] text-white border border-gray-300 font-semibold cursor-pointer py-2 px-3 hover:bg-indigo-500 rounded-xl">
                    {selectedFiles.length > 0
                      ? `${selectedFiles.length} file selected`
                      : "Select Files"}
                    <Folder className="ml-2 h-6" />
                  </div>
                </label>
                <div
                  className="flex items-center justify-center text-md md:text-xl bg-[#8a2be2] text-white border border-gray-300 font-semibold cursor-pointer py-2 px-3 hover:bg-indigo-500 rounded-xl"
                  onClick={handleSubmit}
                >
                  Upload <Send className="ml-2 h-6" />
                </div>
              </div>
              {docid && (
                <span className="mt-10 py-4 text-lg md:text-xl bg-gray-200 rounded-xl">
                  {docid}
                </span>
              )}

              <div className="text-md md:text-xl mt-6 text-black uppercase">
                or drop files here (file size: 1 mb)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
