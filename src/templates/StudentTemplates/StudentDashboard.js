import React from 'react';
import SubjectCard from "../../molecules/Cards/SubjectCard/SubjectCard";

function StudentDashboard() {
  const currentSubjectsData = [
    {
      title: "Web Data Management",
      details: "CSE 5335-002",
      semester: "Fall 2023"
    },
    {
      title: "DBMS Models and Implementations",
      details: "CSE 5331-003",
      semester: "Fall 2023"
    },
    {
      title: "Advanced Database Systems",
      details: "CSE 6331-001",
      semester: "Fall 2023"
    }
  ];

  const pastSubjectsData = [
    {
      title: "Machine Learning",
      details: "CSE 6361-003",
      semester: "Spring 2023"
    },
    {
      title: "Data Mining",
      details: "CSE 5336-001",
      semester: "Spring 2023"
    },
    {
      title: "Software Testing",
      details: "CSE 5360-002",
      semester: "Spring 2023"
    }
  ];

  const colors = ['yellow', 'pink', 'green'];

  return (
    <div className="StudentDashboard">
      <div className="CurrentSubjects text-lg">
        <div className="Heading mx-16 text-left">
            Current Subjects
        </div>
        <div className="CurrentList md:flex">
          {currentSubjectsData.map((course, index) => (
            <SubjectCard
              key={index}
              cardTitle={course.title}
              classDetails={course.details}
              semester={course.semester}
              color={colors[index % colors.length]} // Cycle through colors
            />
          ))}
        </div>
      </div>
      <div className="PastSubjects text-lg">
        <div className="Heading mx-16 text-left">
            Past Subjects
        </div>
        <div className="PastList md:flex">
          {pastSubjectsData.map((course, index) => (
            <SubjectCard
              key={index}
              cardTitle={course.title}
              classDetails={course.details}
              semester={course.semester}
              color={colors[index % colors.length]} // Cycle through colors
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
