import { useState, useEffect } from "react";
import SubjectCard from "../../molecules/Cards/SubjectCard/SubjectCard";
import QACoursePage from "./QACoursePage";

function QAAuditCourses() {
  const [current, setCurrent] = useState("Admin");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const chooseOption = (option) => {
    setCurrent(option);
  }

  const currentSubjectsData = [
    {
      title: "Web Data Management",
      details: "CSE 5335-002",
      semester: "Fall 2023",
    },
    {
      title: "DBMS Models and Implementations",
      details: "CSE 5331-003",
      semester: "Fall 2023",
    },
    {
      title: "Advanced Database Systems",
      details: "CSE 6331-001",
      semester: "Fall 2023",
    },
    {
      title: "Machine Learning",
      details: "CSE 6361-003",
      semester: "Spring 2023",
    },
    {
      title: "Data Mining",
      details: "CSE 5336-001",
      semester: "Spring 2023",
    },
    {
      title: "Software Testing",
      details: "CSE 5360-002",
      semester: "Spring 2023",
    },
  ];

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
    <div className="QAAuditCourses">
      <div className="PageTitle text-xl ml-16">
        Choose Course to audit
      </div>
      <div className="UserCardContainer flex flex-wrap justify-start">
        {currentSubjectsData.map((course, index) => (
          <div key={course.title} className="w-1/3">
            <SubjectCard
              cardTitle={course.title}
              classDetails={course.details}
              semester={course.semester}
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
            <QACoursePage course={selectedCourse.title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default QAAuditCourses;
