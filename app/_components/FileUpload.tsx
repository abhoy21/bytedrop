import { Button } from "@/components/ui/button";
import { collection, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Loader2, Upload } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import ShortUniqueId from "short-unique-id";
import { datastore, db } from "../../firebase";

interface FileUploadProps {
  onUpload: (code: string) => void;
  isUploading: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload, isUploading }) => {
  const uid = new ShortUniqueId();
  const MAX_FILE_SIZE_BYTES = 1024 * 1024; // 1 MB in bytes
  const [fileName, setFileName] = useState<string | null>(null);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      setFileName(file.name);

      if (file.size > MAX_FILE_SIZE_BYTES) {
        toast.error("Maximum file size is 1 MB", {
          position: "top-right",
          autoClose: 5000,
        });
        return;
      }

      try {
        const storageRef = ref(datastore, file.name);
        await uploadBytes(storageRef, file);
        const datastoreurl = await getDownloadURL(storageRef);

        const data = {
          url: datastoreurl,
        };
        const tempDocid = uid.rnd();
        const docRef = doc(collection(db, "tempud"), tempDocid);
        await setDoc(docRef, data);

        onUpload(tempDocid);
        toast.success(`Your code is: ${tempDocid}`, {
          position: "top-right",
          autoClose: 5000,
        });
      } catch (error) {
        console.error("Error uploading file:", error);
        toast.error("An error occurred while uploading the file", {
          position: "top-right",
          autoClose: 5000,
        });
      } finally {
        setFileName(null);
      }
    },
    [MAX_FILE_SIZE_BYTES, onUpload, uid],
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE_BYTES,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div
      {...getRootProps()}
      className='bg-gradient-to-br from-white to-purple-100 rounded-3xl px-4 transition-all duration-300 ease-in-out'
    >
      <input {...getInputProps()} />
      <AnimatePresence>
        {isUploading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='flex flex-col items-center justify-center h-64'
          >
            <Loader2 className='w-16 h-16 text-purple-500 animate-spin' />
            <p className='mt-4 text-purple-700 font-medium'>
              Uploading your file...
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`flex flex-col items-center justify-center h-64 border-3 border-dashed rounded-2xl transition-colors duration-300 ${
              isDragActive
                ? "border-purple-500 bg-purple-100"
                : "border-purple-300 hover:border-purple-400 hover:bg-purple-50"
            }`}
          >
            {fileName ? (
              <FileText className='w-16 h-16 text-purple-500 mb-4' />
            ) : (
              <Upload className='w-16 h-16 text-purple-400 mb-4' />
            )}
            <p className='text-purple-700 font-medium text-center mb-2'>
              {isDragActive
                ? "Drop the file here ..."
                : fileName
                ? `File selected: ${fileName}`
                : "Drag & drop a file here"}
            </p>
            <p className='text-sm text-purple-500 mb-4'>Max file size: 1 MB</p>
            <Button
              onClick={open}
              className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300'
            >
              Select File
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FileUpload;
