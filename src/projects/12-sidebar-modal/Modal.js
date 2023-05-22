import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      } `}
    >
      <div className="modal-container">
        <h3 className="modal-content">modal content</h3>
        <button className="btn-close-modal" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
