import React, { useState } from 'react';
import './AddPopup.css';

function AddPopup() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="button-with-popup">
      {isPopupVisible && (
        <div className="popup">
          <button className="popup-button add-button" onClick={hidePopup}>Add</button>
          <button className="popup-button ok-button" onClick={hidePopup}>OK</button>
          <button className="popup-button cancel-button" onClick={hidePopup}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default AddPopup;
