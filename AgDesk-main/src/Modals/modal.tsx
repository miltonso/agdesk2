import React, { useState, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode; // Use ReactNode for children to accept any valid React child
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    console.log("Modal open state is now:", isOpen); // This will log every time isOpen changes
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Closing modal");
    e.stopPropagation();
    onClose();
  };

  const modalContent = isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative rounded bg-white p-6">
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 text-lg"
        >
          ✖
        </button>
        {children || <p>No data available</p>} {/* Render children or default message */}
      </div>
    </div>
  ) : null;

  if (isBrowser && document.getElementById("modal-root")) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root") as Element,
    );
  } else {
    return null;
  }
};

export default Modal;
