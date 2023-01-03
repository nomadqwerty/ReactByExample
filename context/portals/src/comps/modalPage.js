import React, { useState } from "react";
import Modal from "./modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onModalClick = () => {
    setShowModal(!showModal);
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  const button = (
    <div>
      <button className="ui button primary">i Accept</button>
    </div>
  );

  const text = (
    <div>
      <p className="">
        this is a text but can be any thing as long as react can rendr it
      </p>
    </div>
  );
  const modal = (
    <Modal onClose={onModalClose} action={button} info={text}></Modal>
  );
  return (
    <div className="relative">
      <button
        onClick={onModalClick}
        className="ui button primary"
        style={{ marginBottom: "10px" }}
      >
        Open Modal
      </button>

      {showModal ? modal : ""}
    </div>
  );
};

export default ModalPage;
