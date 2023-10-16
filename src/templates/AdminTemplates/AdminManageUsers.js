import React, { useState } from "react";
import MemberCard from "../../organisms/MemberCard/MemberCard";

function AdminManageUsers() {
  const [current, setCurrent] = useState("Admin");

  const chooseOption = (option) => {
    setCurrent(option);
  }

  const adminUsers = [
    { id: 1, name: "Admin 1", info: "User Information 1" },
    { id: 2, name: "Admin 2", info: "User Information 2" },
    { id: 3, name: "Admin 3", info: "User Information 3" },
    { id: 4, name: "Admin 4", info: "User Information 4" },
    { id: 5, name: "Admin 5", info: "User Information 5" },
    { id: 6, name: "Admin 6", info: "User Information 6" },
    // Add more user objects as needed
  ];

  const instructorUsers = [
    { id: 1, name: "Instructor 1", info: "User Information 1" },
    { id: 2, name: "Instructor 2", info: "User Information 2" },
    { id: 3, name: "Instructor 3", info: "User Information 3" },
    { id: 4, name: "Instructor 4", info: "User Information 4" },
    { id: 5, name: "Instructor 5", info: "User Information 5" },
    { id: 6, name: "Instructor 6", info: "User Information 6" },
  ];

  const StudentUsers = [
    { id: 1, name: "Student 1", info: "User Information 1" },
    { id: 2, name: "Student 2", info: "User Information 2" },
    { id: 3, name: "Student 3", info: "User Information 3" },
    { id: 4, name: "Student 4", info: "User Information 4" },
    { id: 5, name: "Student 5", info: "User Information 5" },
    { id: 6, name: "Student 6", info: "User Information 6" },
  ];

  const QAUsers = [
    { id: 1, name: "QA User 1", info: "User Information 1" },
    { id: 2, name: "QA User 2", info: "User Information 2" },
    { id: 3, name: "QA User 3", info: "User Information 3" },
    { id: 4, name: "QA User 4", info: "User Information 4" },
    { id: 5, name: "QA User 5", info: "User Information 5" },
    { id: 6, name: "QA User 6", info: "User Information 6" },
  ];

  // const usersToDisplay = current === "Admin" ? adminUsers : instructorUsers;
  const usersToDisplay =
  current === "StudentUsers"
    ? StudentUsers
    : current === "Instructor"
    ? instructorUsers
    : current === "QAUsers"
    ? QAUsers
    : StudentUsers;


  return (
    <div className="AdminManageUsers">
      <div className="PageTitle text-xl">
        Choose user to view
      </div>
      <div className="SectionNavigation mt-12">
        <button
          className="p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2"
          onClick={() => chooseOption("StudentUsers")}
        >
          Student
        </button>
        <button
          className="p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2"
          onClick={() => chooseOption("Instructor")}
        >
          Instructor
        </button>
        <button className="p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2"
        onClick={() =>chooseOption("QAUsers")}
        >
          QA
        </button>
      </div>
      <div className='SelectionBody text-lg sm:text-md text-center bg-gray-200 md:mr-12' style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <div className="UserCardContainer flex flex-wrap justify-center">
          {usersToDisplay.map((user) => (
            <div key={user.id} className="w-1/3 p-4">
              <MemberCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminManageUsers;
