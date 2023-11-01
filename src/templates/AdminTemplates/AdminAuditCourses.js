import { useState, useEffect } from "react";
import SubjectCard from "../../molecules/Cards/SubjectCard/SubjectCard";
import AdminCoursePage from "./AdminCoursePage";
import ButtonPrimary from "../../atoms/buttons/ButtonPrimary/ButtonPrimary";
import axios from "axios";
import { useSelector } from "react-redux";

function AdminAuditCourses() {
  const [current, setCurrent] = useState("Admin");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentSubjectsData, setCurrentSubjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state) => state.auth);
  const api = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${api}courses`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.authToken}`,
      },
    })
    .then((response) => {
      setCurrentSubjectsData(response.data.data);
      setLoading(false); // Data has arrived, set loading to false
    })
    .catch((error) => {
      console.error(error);
      setLoading(false); // Handle errors and set loading to false
    });
  },[]);

  const chooseOption = (option) => {
    setCurrent(option);
  }

  const colors = ['bg-yellow', 'bg-pink', 'bg-green'];

  const handleCardClick = (course) => {
    setSelectedCourse(course);
  }

  const closePopup = () => {
    setSelectedCourse(null);
  }

  // Add event listener to close the popup on click outside
  useEffect(() => {
    const closePopupOnClickOutside = (event) => {
      if (selectedCourse && event.target === document.documentElement) {
        closePopup();
      }
    };

    if (selectedCourse) {
      document.addEventListener("click", closePopupOnClickOutside);
    }

    return () => {
      if (selectedCourse) {
        document.removeEventListener("click", closePopupOnClickOutside);
      }
    };
  }, [selectedCourse]);

  return (
    <div className="AdminAuditCourses">
      <div className="PageTitle text-xl ml-16">
        Choose Course to audit
      </div>
      <div className="UserCardContainer flex flex-wrap justify-start">
        {currentSubjectsData.map((course, index) => (
          <div key={course.title} className="w-1/3">
            <SubjectCard
              cardTitle={course.course_name}
              semester={course.course_semester}
              color={colors[index % colors.length]}
              onClick={() => handleCardClick(course)}
            />
          </div>
        ))}
      </div>
      {selectedCourse && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="w-3/4 bg-white relative">
            <button
              className="text-black text-xl p-1  hover:text-gray-400 rounded-full absolute top-2 right-2"
              onClick={closePopup}
            >
              X
            </button>
            <AdminCoursePage course={selectedCourse.title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminAuditCourses;
