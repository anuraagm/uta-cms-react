import { useState } from "react";
import gpaGraph from './gpa-graph.png';

function QAGrades() {
  const [current, setCurrent] = useState("Semester");

  const chooseOption = (option) => {
    setCurrent(option);
  };

  return (
    <div className="QAGrades">
      <div className="PageTitle text-xl">Student Grades</div>
      <div className="SectionNavigation mt-12">
        <button
          className={`p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2 ${current === "Semester" ? "bg-gray-300" : ""}`}
          onClick={() => chooseOption("Semester")}
        >
          Semester
        </button>
        <button
          className={`p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2 ${current === "Year" ? "bg-gray-300" : ""}`}
          onClick={() => chooseOption("Year")}
        >
          Year
        </button>
        <button
          className={`p-1 px-20 bg-gray-200 text-black text-xl sm:text-md hover:bg-gray-300 border border-gray-300 mb-2 ${current === "Course" ? "bg-gray-300" : ""}`}
          onClick={() => chooseOption("Course")}
        >
          Course
        </button>
      </div>
      <div className="ContentSection bg-gray-200 m-12 ml-0 p-12">
        <div className="SelectionTitle text-xl sm:text-md text-center mb-12">
          {current === "Year" && (
            <div className="md:flex justify-between space-x-3">
              <div className="GradeValue text-left"> 
                Year Average GPA: {" "}<br />
                <span className="font-bold">3.33 / 4.00</span> 
              </div>
              <div> 
                Top Subjects Picked by students :<br /><br />
                1. Web Data Management <br />
                2. Big Data <br />
                3. Machine Learning< br/>
                4. Database Implementations<br />
                5. Advanced Database<br />
                6. Software Testing<br />
                7. Algorithms
              </div>
              <div className="md:w-1/4">
                <img src={gpaGraph} alt='GPA Graph'/> 
              </div> 
            </div>
          )}
          {current === "Semester" && (
            <div className="md:flex justify-between space-x-3">
              <div className="GradeValue text-left"> 
                Semester Average GPA: {" "}
                <span className="font-bold">3.67 / 4.00</span> 
              </div>
              <div> 
                Most Subjects This Semester :<br /><br />
                1. Database Implementations <br />
                2. Advanced Database <br />
                3. Intro to Database <br />
                4. Intro to Web Design <br />
              </div>
              <div className="md:w-1/4">
                <img src={gpaGraph} alt='GPA Graph'/> 
              </div>
            </div>
          )}
          {current === "Course" && (
            <div className="md:flex justify-between space-x-3">
              <div className="GradeValue text-left"> 
                Course Average GPA: {" "}
                <span className="font-bold">3.67 / 4.00</span> 
              </div>
              <div> 
                Course Details :<br /><br />
                 <br />
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

export default QAGrades;
