import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, action, info }) => {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {info}
          <div className="flex justify-end">{action}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modalWrap")
  );
};

export default Modal;
