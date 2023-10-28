import Header from "../../organisms/Header/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgramCoordinatorDashboard from "../../templates/ProgramCoordinatorTemplates/ProgramCoordinatorDashboard";
import ProgramCoordinatorGrades from "../../templates/ProgramCoordinatorTemplates/ProgramCoordinatorGrades";
import ProfileTemplate from "../../templates/CommonTemplates/ProfileTemplate";
import MessageTemplate from "../../templates/CommonTemplates/MessageTemplate";
import ProgramCoordinatorManageUsers from "../../templates/ProgramCoordinatorTemplates/ProgramCoordinatorManageUsers";
import ProgramCoordinatorAuditCourses from "../../templates/ProgramCoordinatorTemplates/ProgramCoordinatorAuditCourses";
import ProgramCoordinatorManageProgram from "../../templates/ProgramCoordinatorTemplates/ProgramCoordinatorManageProgram";

function ProgramCoordinator() {

    const [current, setCurrent] = useState(
        localStorage.getItem("current") || ""
      );
      const [view, setView] = useState(
        localStorage.getItem("view") || ""
      ); // Initialize with localStorage value or "Course"
      const navigate = useNavigate(); // Get the navigation function
    
      useEffect(() => {
        if (localStorage.getItem("view") === "Course") {
          setView("");
        }
        if (localStorage.getItem("view") != null) {
            console.log("view : ", localStorage.getItem("view"));
        }
        else {
            setView("");
        }
      }, []);
    
      useEffect(() => {
        if (current !== "") {
          setView(current);
          localStorage.setItem("view", current);
          localStorage.setItem("current", current);
        }
      }, [current]);

      const resetLocalStorage = () => {
        localStorage.removeItem("view");
        localStorage.removeItem("current");
        setCurrent("Dashboard");
        setView("Dashboard");
        navigate("programcoordinator");
      };

    return (
        <div className="ProgramCoordinator">
            <Header userRole={"ProgramCoordinator"} setProgramCoordinatorOption={setCurrent}></Header>
            <div className="Toptext mt-24">
                <div className="Pagecontext ml-16 my-8 font-bold">
                <a href="/ProgramCoordinator" onClick={resetLocalStorage}>Dashboard</a>
                {" >> "}
                {
                    view === "Profile" && <span>Profile{" >> "}</span>
                    ||
                    view === "Messages" && <span>Messages{" >> "}</span>
                    ||
                    view === "Generate Performance Reports" && <span>Generate Performance Reports{" >> "}</span>
                    ||
                    view === "Manage Program" && <span>Manage Program{" >> "}</span>
                    ||
                    view === "Manage Course Content" && <span>Manage Course Content{" >> "}</span>
                    ||
                    view === "Conduct Course Review" && <span>Conduct Course Review{" >> "}</span>
                }
                </div>
                <div className="Welcome text-xl ml-16 mb-8">
                {view === "Dashboard" && <ProgramCoordinatorDashboard setOption={setCurrent}></ProgramCoordinatorDashboard>}
                {view === "Profile" && <ProfileTemplate></ProfileTemplate>}
                {view === "Messages" && <MessageTemplate></MessageTemplate>}
                {view === "Generate Performance Reports" && <ProgramCoordinatorGrades></ProgramCoordinatorGrades>}
                {view === "Conduct Course Review" && <ProgramCoordinatorManageUsers></ProgramCoordinatorManageUsers>}
                {view === "Manage Course Content" && <ProgramCoordinatorAuditCourses></ProgramCoordinatorAuditCourses>}
                {view === "Manage Program" && <ProgramCoordinatorManageProgram></ProgramCoordinatorManageProgram>}
                </div>
            </div>
        </div>
    );
}

export default ProgramCoordinator;