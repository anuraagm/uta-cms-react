import React, { useState } from 'react';
import SubjectCard from "../../molecules/Cards/SubjectCard/SubjectCard";

function CourseCatalogue({ setStudentCourse }) {
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

  const [searchInput, setSearchInput] = useState('');

  const handleSubjectCardClick = (courseTitle) => {
    setStudentCourse(courseTitle);
  };

  const filteredSubjects = currentSubjectsData.filter((course) =>
    course.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const subjectsPerRow = 3; // Number of subjects to display per row

  return (
    <div className="CourseCatalogue">
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
      <div className="CurrentSubjects text-lg md:text-md">
        <div className="Heading mx-16 text-left">Current Subjects</div>
        <div className="CurrentList md:flex flex-wrap">
          {filteredSubjects.map((course, index) => (
            <div key={index} className={`md:w-1/${subjectsPerRow}`}>
              <SubjectCard
                cardTitle={course.title}
                classDetails={course.details}
                semester={course.semester}
                color={colors[index % colors.length]}
                onClick={handleSubjectCardClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseCatalogue;
