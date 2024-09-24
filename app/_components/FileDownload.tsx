"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";

interface FileDownloadProps {
  onDownload: (code: string) => void;
  isDownloading: boolean;
}

const FileDownload: React.FC<FileDownloadProps> = ({
  onDownload,
  isDownloading,
}) => {
  const [downloadCode, setDownloadCode] = useState("");

  const handleDownload = () => {
    if (downloadCode.length === 6) {
      onDownload(downloadCode);
    }
  };

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='download-code' className='text-purple-700'>
          Enter Search code
        </Label>
        <Input
          id='download-code'
          placeholder='Enter code'
          value={downloadCode}
          onChange={(e) => setDownloadCode(e.target.value)}
          maxLength={6}
          className='bg-white bg-opacity-50 border-purple-300 text-purple-800 placeholder-purple-400 focus:border-purple-500 focus:ring-purple-500'
        />
      </div>
      <Button
        onClick={handleDownload}
        disabled={downloadCode.length !== 6 || isDownloading}
        className='w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50'
      >
        {isDownloading ? (
          <Loader2 className='h-5 w-5 animate-spin mr-2' />
        ) : (
          <Download className='h-5 w-5 mr-2' />
        )}
        Download File
      </Button>
    </div>
  );
};

export default FileDownload;
