import React, { useState } from "react";
import "./AssignmentTemplate.css"; // Import your CSS file

function AssignmentTemplate({toggleTemplateEditPopup}) {
  const [isPopupVisible, setPopupVisible] = useState(true);
  const [text, setText] = useState("");

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleOkay = () => {
    // Handle the OK button click here
    alert("You entered: " + text);
    closePopup();
  };

  return (
    <div className="app-container">
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

export default AssignmentTemplate;
