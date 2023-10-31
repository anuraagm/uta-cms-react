import React, { useState } from 'react';
import SubjectCard from "../../molecules/Cards/SubjectCard/SubjectCard";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function StudentDashboard({ setStudentCourse }) {
  const navigate = useNavigate();
  const api = process.env.REACT_APP_API_URL;
  const auth = useSelector((state) => state.auth);
  const [studentSubjects, setStudentSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${api}studentCourses`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.authToken}`,
      },
    })
    .then((response) => {
      setStudentSubjects(response.data.data);
      setLoading(false); // Data has arrived, set loading to false
      // console.log(JSON.parse(response.data.data));
      // console.log(response);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false); // Handle errors and set loading to false
    });
  }, []);

  const colors = ['bg-yellow', 'bg-pink', 'bg-green'];

  const handleSubjectCardClick = (courseTitle, courseId) => {
    setStudentCourse(courseTitle);
  };

  function navigateToStudentCourse(courseName) {
    navigate(`/student/course/${courseName}`);
  }

  return (
    <div className="StudentDashboard">
      <div className="CurrentSubjects text-lg md:text-md">
        <div className="Heading mx-16 text-left">
          Current Subjects
        </div>
        {loading ? (
          <div>Loading...</div> // Render a loading indicator
        ) : (
        <div className="CurrentList md:flex flex-wrap">
          {studentSubjects.map((course, index) => (
            <div key={index} className="md:w-1/3 md:px-2">
              <SubjectCard
                cardTitle={course.course_name}
                semester={course.course_semester}
                color={colors[index % colors.length]}
                onClick={() => handleSubjectCardClick(course.course_name, course.course_id)}
              />
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;
