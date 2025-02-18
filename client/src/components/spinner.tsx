import { motion } from 'framer-motion';

export const Spinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-center items-center h-full"
    >
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent border-primary"></div>
    </motion.div>
  );
};