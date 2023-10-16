import Header from "../../organisms/Header/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../../templates/AdminTemplates/AdminDashboard";
import AdminGrades from "../../templates/AdminTemplates/AdminGrades";
import ProfileTemplate from "../../templates/CommonTemplates/ProfileTemplate";
import MessageTemplate from "../../templates/CommonTemplates/MessageTemplate";
import AdminManageUsers from "../../templates/AdminTemplates/AdminManageUsers";
import AdminAuditCourses from "../../templates/AdminTemplates/AdminAuditCourses";
import AdminManageProgram from "../../templates/AdminTemplates/AdminManageProgram";

function Admin() {

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
          console.log("Current : ", current);
          localStorage.setItem("view", current);
          localStorage.setItem("current", current);
        }
      }, [current]);

      const resetLocalStorage = () => {
        localStorage.removeItem("view");
        localStorage.removeItem("current");
        setCurrent("");
      };

    return (
        <div className="Admin">
            <Header userRole={"Admin"} setAdminOption={setCurrent}></Header>
            <div className="Toptext mt-24">
                <div className="Pagecontext ml-16 my-8 font-bold">
                <a href="/Admin" onClick={resetLocalStorage}>Dashboard</a>
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
                    view === "Audit Courses" && <span>Audit Courses{" >> "}</span>
                    ||
                    view === "Manage Users" && <span>Manage Users{" >> "}</span>
                }
                </div>
                <div className="Welcome text-xl ml-16 mb-8">
                {view === "" && <AdminDashboard setOption={setCurrent}></AdminDashboard>}
                {view === "Profile" && <ProfileTemplate></ProfileTemplate>}
                {view === "Messages" && <MessageTemplate></MessageTemplate>}
                {view === "Generate Performance Reports" && <AdminGrades></AdminGrades>}
                {view === "Manage Users" && <AdminManageUsers></AdminManageUsers>}
                {view === "Audit Courses" && <AdminAuditCourses></AdminAuditCourses>}
                {view === "Manage Program" && <AdminManageProgram></AdminManageProgram>}
                </div>
            </div>
        </div>
    );
}

export default Admin;