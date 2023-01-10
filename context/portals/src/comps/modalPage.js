import React, { useState, useEffect } from "react";
import Modal from "./modal";

import paragraph from "./text";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    let body = document.querySelector("body");

    if (showModal) {
      body.style.overflow = "hidden";
    }

    return () => {
      if (!showModal) {
        body.style.overflow = "";
      }
    };
  }, [showModal]);

  const onModalClick = () => {
    setShowModal(!showModal);
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  const button = (
    <div>
      <button className="ui button primary">I_Accept</button>
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
      {paragraph}
    </div>
  );
};

export default ModalPage;
