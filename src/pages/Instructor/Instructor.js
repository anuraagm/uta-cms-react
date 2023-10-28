import Header from "../../organisms/Header/Header";
import ProfileTemplate from "../../templates/CommonTemplates/ProfileTemplate";
import InstructorCourse from "../../templates/InstructorTemplates/InstructorCourse";
import InstructorDashboard from "../../templates/InstructorTemplates/InstructorDashboard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import MessageTemplate from "../../templates/CommonTemplates/MessageTemplate";

function Instructor() {
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
          localStorage.setItem("view", current);
          localStorage.setItem("current", current);
        }
      }, [current]);
    
      // Function to navigate to the Instructor course with the specified course name
    //   const navigateToInstructorCourse = (courseName) => {
    //     navigate(`/Instructor/course/${courseName}`);
    //   };

      const resetLocalStorage = () => {
        localStorage.removeItem("view");
        localStorage.removeItem("course");
        localStorage.removeItem("current");
        setCourse("");
        setCurrent("Dashboard");
        setView("Dashboard");
        navigate("instructor");
      };

  return (
    <div className="Instructor">
      <Header userRole={"Instructor"} setInstructorOption={setCurrent}></Header>
      <div className="Toptext mt-24">
        <div className="Pagecontext ml-16 my-8 font-bold">
          <a href="/Instructor" onClick={resetLocalStorage}>Dashboard</a>
          {" >> "}
          {
            view === "Course" && <span>{course+" >> "}</span>
            ||
            view === "Profile" && <span>Profile{" >> "}</span>
            ||
            view === "Messages" && <span>Messages{" >> "}</span>
          }
        </div>
        <div className="Welcome text-xl ml-16 mb-8">
          {view === "Dashboard" && <>Welcome User,</>}
        </div>
      </div>
      {
        view === "Dashboard" && <InstructorDashboard setInstructorCourse={setCourse}></InstructorDashboard>
        ||
        view === "Course" && <InstructorCourse courseName={course}></InstructorCourse>
        ||
        view === "Profile" && <ProfileTemplate></ProfileTemplate>
        ||
        view === "Messages" && <MessageTemplate></MessageTemplate>
       }
    </div>
  );
}

export default Instructor;
