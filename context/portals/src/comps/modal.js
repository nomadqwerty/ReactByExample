import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, action, info }) => {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
        {info}
        {action}
      </div>
    </div>,
    document.querySelector(".modalWrap")
  );
};

export default Modal;
