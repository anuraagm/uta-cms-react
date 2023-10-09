import Header from "../../organisms/Header/Header";
import StudentDashboard from "../../templates/StudentTemplates/StudentDashboard";

function Student() {
    return (
        <div className="Student">
            <Header userRole={"student"}></Header>
            <div className="Toptext mt-24">
                <div className="Pagecontext ml-16 my-8 font-bold">
                    <a href="/student">
                        Dashboard
                    </a>
                    {" >> "} 
                </div>
                <div className="Welcome text-xl ml-16 mb-8">
                    Welcome User,
                </div>
            </div>
            <StudentDashboard></StudentDashboard>
        </div>
    );
}

export default Student;