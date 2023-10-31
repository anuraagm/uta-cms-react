import React, { useState } from "react";
import "./OverviewTemplate.css"; // Import your CSS file

function OverviewTemplate({toggleEditPopup}) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [text, setText] = useState("Default Text");

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleOkay = () => {
    alert("You entered: " + text);
    closePopup();
  };

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Enter Text:</h2>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="button-container">
              <button className="ok-button" onClick={handleOkay}>
                OK
              </button>
              <button className="cancel-button" onClick={closePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OverviewTemplate;
