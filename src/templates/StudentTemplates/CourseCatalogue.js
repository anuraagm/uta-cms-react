import React, { useEffect, useState } from 'react';
import SubjectCard from "../../molecules/Cards/SubjectCard/SubjectCard";
import axios from 'axios';
import { useSelector } from 'react-redux';
import RegisterCard from '../../organisms/RegisterCard/RegisterCard';

function CourseCatalogue({ setStudentCourse }) {
  
  const api = process.env.REACT_APP_API_URL;
  const auth = useSelector((state) => state.auth);
  const role = useSelector((state) => state.auth.role);
  
  const [currentSubjectsData, setCurrentSubjectsData] = useState([]); // State to store API response
  const colors = ['bg-yellow', 'bg-pink', 'bg-green'];

  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true); // Loading state

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [currentCourse, setCurrentCourse] = useState('');

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
  }, []);

  const handleSubjectCardClick = (overview, id) => {
    setModalContent(overview);
    setShowModal(true);
    setCurrentCourse(id);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  const registerForCourse = () => {
    console.log("registering");
    
    const tok = JSON.parse(atob(auth.authToken.split('.')[1]));
    console.log(tok['user_id']);

    const formData = {
      userId: tok['user_id'],
      courseId: currentCourse
    }
    
    axios.post(`${api}registerUser`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.authToken}`,
      },
    }) // Replace with your actual API endpoint
    .then((response) => {
      // Handle the response if needed
      console.log(response);
      localStorage.setItem("view","Dashboard");
      localStorage.setItem("current","Dashboard");
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const filteredSubjects = currentSubjectsData.filter((course) =>
    course.course_name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const subjectsPerRow = 3; // Number of subjects to display per row

  return (
    <div className="CourseCatalogue">
      <div className="Heading mx-16 text-left text-xl">Search for Subjects</div>
      <div className="SearchBar mb-4 m-4 md:ml-16 bg-gray-200  md:mr-48 flex">
        <input
          className='bg-gray-200 p-4 w-full'
          type="text"
          placeholder="Search subjects..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="btn btn-primary p-4 text-center">Search</button>
      </div>
      {loading ? (
        <div>Loading...</div> // Render a loading indicator
      ) : (
        <div className="CurrentSubjects text-lg md:text-md">
          <div className="CurrentList md:flex flex-wrap">
            {filteredSubjects.map((course, index) => (
              <div key={index} className={`md:w-1/${subjectsPerRow}`}>
                <SubjectCard
                  cardTitle={course.course_name}
                  // classDetails={course.details}
                  semester={course.course_semester}
                  color={colors[index % colors.length]}
                  onClick={() => handleSubjectCardClick(course.course_overview, course.course_id)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {showModal && (
        <RegisterCard onClose={closeModal} buttonFunction={registerForCourse}>
          <div className="overflow-y-auto p-4">
            <p>{modalContent}</p>
          </div>
        </RegisterCard>
      )}
    </div>
  );
}

export default CourseCatalogue;