import { useState } from "react";
import gpaGraph from './gpa-graph.png';

function InstructorGrades() {
  const [current, setCurrent] = useState("Cummulative");

  const chooseOption = (option) => {
    setCurrent(option);
  };

  return (
    <div className="InstructorGrades ml-16">
      <div className="PageTitle text-xl">Instructor Grades</div>
      <div className="SectionNavigation mt-12">
        <button
          className={`p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2 ${current === "Cummulative" ? "bg-gray-300" : ""}`}
          onClick={() => chooseOption("Cummulative")}
        >
          Cummulative
        </button>
        <button
          className={`p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2 ${current === "Semester" ? "bg-gray-300" : ""}`}
          onClick={() => chooseOption("Semester")}
        >
          Semester
        </button>
      </div>
      <div className="ContentSection bg-gray-200 m-12 ml-0 p-12">
        <div className="SelectionTitle text-xl sm:text-md text-center mb-12">
          {current === "Cummulative" && (
            <div className="md:flex justify-between space-x-3">
              <div className="GradeValue text-left"> 
                Cummulative GPA: {" "}<br />
                <span className="font-bold">3.67 / 4.00</span> 
              </div>
              <div> 
                Cummulative Subject Grades :<br /><br />
                1. Web Data Management - A <br />
                2. Big Data - B <br />
                3. Machine Learning - A <br /> 
                4. DAMT - A <br />
                5. DAA - A <br />
                6. Software Testing - B
              </div>
              <div className="md:w-1/4">
                <img src={gpaGraph} alt='GPA Graph'/> 
              </div> 
            </div>
          )}
          {current === "Semester" && (
            <div className="md:flex justify-between space-x-3">
              <div className="GradeValue text-left"> 
                Semester GPA: {" "}
                <span className="font-bold">4.00 / 4.00</span> 
              </div>
              <div> 
                Current Subjects :<br /><br />
                1. Database Implementations - Pending Grade <br />
                2. Advanced Database - Pending Grade
              </div>
              <div className="md:w-1/4">
                <img src={gpaGraph} alt='GPA Graph'/> 
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InstructorGrades;
