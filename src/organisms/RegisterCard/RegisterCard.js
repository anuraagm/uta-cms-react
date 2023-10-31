import React from 'react';
import ButtonPrimary from '../../atoms/buttons/ButtonPrimary/ButtonPrimary';

function RegisterCard({ onClose, children, buttonFunction }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop with opacity */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="modal-container p-4 mx-auto w-1/2 relative z-50 bg-white rounded-md">
        <button className="modal-close absolute top-4 right-4 text-gray-600 hover:text-gray-800" onClick={onClose}>
          X
        </button>
        {children}
        <ButtonPrimary buttonText="Register" clickFunction={buttonFunction}></ButtonPrimary>
      </div>
    </div>
  );
}

export default RegisterCard;
