import React, { useEffect, useState } from 'react';
import SubjectCard from "../../molecules/Cards/SubjectCard/SubjectCard";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function InstructorDashboard({ setInstructorCourse }) {
  const navigate = useNavigate();
  const [currentSubjectsData, setCurrentSubjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [studentSubjects, setStudentSubjects] = useState();
  const api = process.env.REACT_APP_API_URL;
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    axios.get(`${api}studentCourses`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.authToken}`,
      },
    })
    .then((response) => {
      setStudentSubjects(response.data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false); // Handle errors and set loading to false
    });
  },[]);

  const colors = ['bg-yellow', 'bg-pink', 'bg-green'];

  const handleSubjectCardClick = (courseTitle) => {
    setInstructorCourse(courseTitle);
  };

  function navigateToInstructorCourse(courseName) {
    navigate(`/Instructor/course/${courseName}`);
  }

  return (
    <div className="InstructorDashboard">
      {
        loading ? (<div>Loading...</div>) :
        (<>
          <div className="CurrentSubjects text-lg md:text-md">
          <div className="Heading mx-16 text-left">
            Current Subjects
          </div>
          <div className="CurrentList md:flex flex-wrap">
            {studentSubjects?.map((course, index) => (
              <div key={index} className="md:w-1/3 md:px-2">
                <SubjectCard
                  cardTitle={course.course_name}
                  semester={course.course_semester}
                  color={colors[index % colors.length]}
                  onClick={handleSubjectCardClick}
                />
              </div>
            ))}
          </div>
        </div>
        </>
        )
      }
    </div>
  );
}

export default InstructorDashboard;
