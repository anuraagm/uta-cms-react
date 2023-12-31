import Header from "../../organisms/Header/Header";
import ProfileTemplate from "../../templates/CommonTemplates/ProfileTemplate";
import StudentCourse from "../../templates/StudentTemplates/StudentCourse";
import StudentDashboard from "../../templates/StudentTemplates/StudentDashboard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import StudentGrades from "../../templates/StudentTemplates/StudentGrades";
import CourseCatalogue from "../../templates/StudentTemplates/CourseCatalogue";
import MessageTemplate from "../../templates/CommonTemplates/MessageTemplate";

function Student() {
    const [current, setCurrent] = useState(
        localStorage.getItem("current") || ""
      );
      const [course, setCourse] = useState(
        localStorage.getItem("course") || ""
      ); // Initialize with localStorage value or ""
      const [view, setView] = useState(
        localStorage.getItem("view") || ""
      ); // Initialize with localStorage value or "Course"
      const navigate = useNavigate(); // Get the navigation function
    
      useEffect(() => {
        if (localStorage.getItem("view") != null) {
            console.log("view : ", localStorage.getItem("view"));
        }
        else {
            setView("");
        }
      }, []);
    
      useEffect(() => {
        if (course !== "") {
          setView("Course");
          console.log("Course : ", course);
          localStorage.setItem("view", "Course");
          localStorage.setItem("course", course);
        }
      }, [course]);
    
      useEffect(() => {
        if (current !== "") {
          setView(current);
          console.log("Current : ", current);
          localStorage.setItem("view", current);
          localStorage.setItem("current", current);
        }
      }, [current]);
    
      // Function to navigate to the student course with the specified course name
    //   const navigateToStudentCourse = (courseName) => {
    //     navigate(`/student/course/${courseName}`);
    //   };

      const resetLocalStorage = () => {
        localStorage.removeItem("view");
        localStorage.removeItem("course");
        localStorage.removeItem("current");
        setCourse("");
        setCurrent("");
        setView("");
        navigate("student");
      };

  return (
    <div className="Student">
      <Header userRole={"student"} setStudentOption={setCurrent}></Header>
      <div className="Toptext mt-24">
        <div className="Pagecontext ml-16 my-8 font-bold">
          <a href="/student" onClick={resetLocalStorage}>Dashboard</a>
          {" >> "}
          {
            view === "Course" && <span>{course+" >> "}</span>
            ||
            view === "Profile" && <span>Profile{" >> "}</span>
            ||
            view === "Grades" && <span>Grades{" >> "}</span>
            ||
            view === "Messages" && <span>Messages{" >> "}</span>
            ||
            view === "Course Catalogue" && <span>Course Catalogue{" >> "}</span>
          }
        </div>
        <div className="Welcome text-xl ml-16 mb-8">
          {view === "" && <>Welcome User,</>}
        </div>
      </div>
      {
        view === "" && <StudentDashboard setStudentCourse={setCourse}></StudentDashboard>
        ||
        view === "Course" && <StudentCourse courseName={course}></StudentCourse>
        ||
        view === "Profile" && <ProfileTemplate></ProfileTemplate>
        ||
        view === "Grades" && <StudentGrades></StudentGrades>
        ||
        view === "Course Catalogue" && <CourseCatalogue></CourseCatalogue>
        ||
        view === "Messages" && <MessageTemplate></MessageTemplate>
       }
    </div>
  );
}

export default Student;
