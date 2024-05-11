// Modal.js
import React from "react";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content primary-wrapper primary-text">
        {children}
      </div>
    </div>
  );
};

export default Modal;
