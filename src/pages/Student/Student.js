import Header from "../../organisms/Header/Header";
import StudentDashboard from "../../templates/StudentTemplates/StudentDashboard";

function Student() {
    return (
        <div className="Student">
            <Header></Header>
            <StudentDashboard></StudentDashboard>
        </div>
    );
}

export default Student;