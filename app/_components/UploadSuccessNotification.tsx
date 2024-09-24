import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

interface UploadSuccessNotificationProps {
  code: string | null;
}

const UploadSuccessNotification: React.FC<UploadSuccessNotificationProps> = ({
  code,
}) => {
  return (
    <AnimatePresence>
      {code && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-6 flex items-center space-x-4 text-white shadow-lg'
        >
          <div className='bg-white rounded-full p-2'>
            <Check className='h-6 w-6 text-purple-500' />
          </div>
          <div>
            <p className='font-semibold text-lg'>File uploaded successfully!</p>
            <p className='text-purple-100'>Your code: {code}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UploadSuccessNotification;
