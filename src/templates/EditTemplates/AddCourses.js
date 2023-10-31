import React, { useState } from 'react';
import './AddCourses.css';

function AddCourses({toggle}) {
  const [isPopupVisible, setPopupVisible] = useState(true);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [semester, setSemester] = useState('');

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const handleOk = () => {
    // Perform actions with the input values (title, details, semester)
    console.log('Title:', title);
    console.log('Details:', details);
    console.log('Semester:', semester);
    hidePopup();
  };

  return (
    <div className="button-with-popup">
      {isPopupVisible && (
        <div className="popup-container">
          <div className="popup">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              className="input-field"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="details">Details:</label>
            <input
              type="text"
              id="details"
              className="input-field"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <label htmlFor="semester">Semester:</label>
            <input
              type="text"
              id="semester"
              className="input-field"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            />
            <div>
              <button className="popup-button" onClick={handleOk}>
                OK
              </button>
              <button className="popup-button cancel-button" onClick={hidePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCourses;
