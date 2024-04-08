import React, { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={handleClick}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me
      </button>

      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-blue-500 bg-opacity-75"
        >
          <div className="bg-blue-100 rounded px-10 sm:px-40 py-20  ">
            <h2 className="text-lg font-bold mb-2">Modal Title</h2>
            <p>Modal content goes here...</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
