import React, { useEffect, useState } from "react";
import MemberCard from "../../organisms/MemberCard/MemberCard";
import ButtonPrimary from "../../atoms/buttons/ButtonPrimary/ButtonPrimary";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "../../organisms/AddUser/AddUser";
import "./AdminManageUsers.css";

function AdminManageUsers() {
  const [current, setCurrent] = useState("Admin");
  const api = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();
  const [isCreatePopupVisible, setCreatePopupVisible] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState();
  const [studentUsers, addStudentUsers] = useState([]);
  const [adminUsers, addAdminUsers] = useState([]);
  const [instructorUsers, addInstructorUsers] = useState([]);
  const [qaUsers, addQAUsers] = useState([]);

  const chooseOption = (option) => {
    setCurrent(option);
  }

  const addNewUser = () => {
    toggleCreatePopup();
  }

  const toggleCreatePopup = () => {
    setCreatePopupVisible(!isCreatePopupVisible);
  };

  useEffect(() => {
    axios.get(`${api}getAllUsers`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.authToken}`,
      },
    })
    .then((response) => {
      const users = response.data.data;
      const studs = [];
      const insts = [];
      const adms = [];
      const qas = [];
      users.forEach(element => {
        if (element['role'] == "Student") {
          studs.push(element);
        }  
        else if (element['role'] == "Instructor") {
          insts.push(element);
        }
        else if (element['role'] == "Admin") {
          adms.push(element);
        }
        else if (element['role'] == "QA") {
          qas.push(element);
        }
      });
      addStudentUsers(studs);
      addInstructorUsers(insts);
      addAdminUsers(adms);
      addQAUsers(qas);
      // setLoading(false); // Data has arrived, set loading to false
    })
    .catch((error) => {
      setLoading(false); // Handle errors and set loading to false
    });
  },[]);

  // const usersToDisplay = current === "Admin" ? adminUsers : instructorUsers;
  const usersToDisplay =
  current === "StudentUsers"
    ? studentUsers
    : current === "Instructor"
    ? instructorUsers
    : current === "QAUsers"
    ? qaUsers
    : studentUsers;


  return (
    <div className="AdminManageUsers">
      {isCreatePopupVisible && (
        <div className="create-popup">
          <AddUser setBoxVisibility={toggleCreatePopup} />
        </div>
      )}
      <div className="PageTitle text-xl">Choose user to view</div>
      <div className="SectionNavigation mt-12 flex">
        <button
          className="p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2"
          onClick={() => chooseOption("StudentUsers")}
        >
          Student
        </button>
        <button
          className="p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover-bg-gray-300 border border-gray-300 mb-2"
          onClick={() => chooseOption("Instructor")}
        >
          Instructor
        </button>
        <button
          className="p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover-bg-gray-300 border border-gray-300 mb-2"
          onClick={() => chooseOption("QAUsers")}
        >
          QA
        </button>
        <ButtonPrimary buttonText={"Add+"} clickFunction={addNewUser} />
      </div>
      <div
        className="SelectionBody text-lg sm:text-md text-center bg-gray-200 md:mr-12"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <div className="UserCardContainer flex flex-wrap justify-center">
          {usersToDisplay.map((user) => (
            <div key={user.user_id} className="w-1/3 p-4">
              <MemberCard user={user} type={"Admin"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminManageUsers;
