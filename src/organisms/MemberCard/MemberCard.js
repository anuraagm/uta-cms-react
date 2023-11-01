import React, { useState, useEffect } from "react";
import ButtonPrimary from "../../atoms/buttons/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../atoms/buttons/ButtonSecondary/ButtonSecondary";
import axios from "axios";

function MemberCard({ user, type }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRole, setSelectedRole] = useState(user.role);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [role, setRole] = useState(user.role);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("Select");
  const [loading, setLoading] = useState();
  const [currentSubjectsData, setCurrentSubjectsData] = useState();
  const [chosenSubject, setChosenSubject] = useState();

  const api = process.env.REACT_APP_API_URL;

  // Define the roles for the dropdown
  const roles = ["Student", "Instructor", "Admin", "ProgramCoordinator", "QA"];

  const [instructorSubjects, setInstructorSubjects] = useState([]);

  useEffect(() => {
    axios.get(`${api}courses`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      const subs = response.data.data;
      const sub_names = [];
      subs.forEach(element => {
        sub_names.push([element["course_name"], element["course_id"]]);
      });

      setCurrentSubjectsData(sub_names);
      setLoading(false); // Data has arrived, set loading to false
    })
    .catch((error) => {
      console.error(error);
      setLoading(false); // Handle errors and set loading to false
    });
  }, []);

  // useEffect(() => {
  //   if (selectedRole === "Instructor") {
  //     // Fetch instructor subjects and update the state
  //     const instructorSubjectsData = fetchInstructorSubjects();
  //     setInstructorSubjects(instructorSubjectsData);
  //   }
  // }, [selectedRole]);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset input values to their original state
    setSelectedRole(user.role);
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setEmail(user.email);
    setPhoneNumber(user.phone_number);
  };

  const handleSubmit = () => {
    // Here you can submit the edited data to your backend or perform any other actions.
    const formData = {
      user_id: user.user_id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      role: selectedRole
    }
    axios.post(`${api}editUser`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    }) // Replace with your actual API endpoint
    .then((response) => {
      // Handle the response if needed
      console.log(response);
      window.location.reload();      
    })
    .catch((error) => {
      console.error(error);
    });
    setIsEditing(false);
  };

  const addSubject = () => {
    const formData = {
      userId: user.user_id,
      courseId: selectedSubject
    }
    axios.post(`${api}registerUser`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    }) // Replace with your actual API endpoint
    .then((response) => {
      // Handle the response if needed
      console.log(response);
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <div className="relative">
      <div
        className={`w-60 h-60 m-12 bg-blue text-white text-xl cursor-pointer transform transition-transform ${
          showDetails ? "scale-110" : ""
        }`}
        onClick={handleCardClick}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="text-2xl font-bold mb-4">
            {firstName + " " + lastName}
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="w-96 bg-blue text-white text-xl rounded-lg p-4 transform translate-x-0 translate-y-0 transition-transform">
            <div className="flex justify-end">
              <button
                className="text-white text-xl p-1 hover-text-gray-400 rounded-full"
                onClick={() => setShowDetails(false)}
              >
                X
              </button>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <select
                className={`text-2xl font-bold mb-4 text-white bg-transparent bg-opacity-0 ${
                  isEditing ? "bg-opacity-100" : ""
                } text-center`}
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                disabled={!isEditing}
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className={`text-2xl mb-4 text-white bg-transparent bg-opacity-0 ${
                  isEditing ? "bg-opacity-100" : ""
                } text-center`}
                value={firstName + " " + lastName}
                onChange={(e) => {
                  const fullName = e.target.value.split(" ");
                  setFirstName(fullName[0]);
                  setLastName(fullName[1]);
                }}
                readOnly={!isEditing}
              />
              <input
                type="text"
                className={`text-2xl mb-4 text-white bg-transparent bg-opacity-0 ${
                  isEditing ? "bg-opacity-100" : ""
                } text-center`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!isEditing}
              />
              <input
                type="text"
                className={`text-2xl mb-4 text-white bg-transparent bg-opacity-0 ${
                  isEditing ? "bg-opacity-100" : ""
                } text-center`}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                readOnly={!isEditing}
              />
              {type === "Admin" && (
                <span className="flex">
                  {isEditing ? (
                    <ButtonPrimary
                      className="text-white text-xl p-1 hover-text-gray-400 rounded-full"
                      clickFunction={handleCancelEdit}
                      buttonText={"Cancel"}
                    >
                      Cancel
                    </ButtonPrimary>
                  ) : (
                    <ButtonPrimary
                      clickFunction={handleEditClick}
                      buttonText={"Edit"}
                    >
                      Edit
                    </ButtonPrimary>
                  )}
                  {isEditing && (
                    <ButtonPrimary
                      clickFunction={handleSubmit}
                      buttonText={"Save"}
                    >
                      Save
                    </ButtonPrimary>
                  )}
                  <ButtonPrimary buttonText={"Delete"}></ButtonPrimary>
                </span>
              )}
              {selectedRole === "Instructor" && (
                <>
                <select
                  className="text-2xl mb-4 text-white bg-transparent bg-opacity-0 text-center"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  disabled={!isEditing}
                >
                  <option value="Select" disabled>
                    Select
                  </option>
                  {currentSubjectsData.map((subject) => (
                    <option key={subject[0]} value={subject[1]}>
                      {subject[0]}
                    </option>
                  ))}
                </select>
                <ButtonPrimary buttonText={"Add Subject"} clickFunction={addSubject}></ButtonPrimary>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberCard;
