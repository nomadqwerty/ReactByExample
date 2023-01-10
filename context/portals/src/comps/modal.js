import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const backGround = {
  visible: { opacity: 0.7 },
  hidden: { opacity: 0 },

  yInit: {
    y: -1000,
  },
  yAnime: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },
};

const Modal = ({ onClose, action, info }) => {
  return ReactDOM.createPortal(
    <AnimatePresence onExitComplete>
      <motion.div variants={backGround} exit="hidden">
        <motion.div
          onClick={onClose}
          className="fixed inset-0 bg-gray-300 opacity-80"
          variants={backGround}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <motion.div
          variants={backGround}
          initial="yInit"
          animate="yAnime"
          className="fixed inset-40 p-10 bg-white"
        >
          <div className="flex flex-col justify-between h-full">
            {info}
            <div onClick={onClose} className="flex justify-end">
              {action}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.querySelector(".modalWrap")
  );
};

export default Modal;
