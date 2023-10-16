import BlueCard from "../../molecules/Cards/GenericCard/BlueCard";

function AdminDashboard({ setOption }) {
    const AdminOptions = [ "Manage Program", "Audit Courses", "Manage Users", "Generate Performance Reports"]
    const optionsPerRow = 4;
    return (
        <div className="AdminDashboard">
            <div className="Welcome text-xl mb-8">
                Welcome Username,
            </div>
            <div className="Options text-lg md:text-md">
                <div className="OptionsList md:flex flex-wrap">
                {AdminOptions.map((option, index) => (
                    <div key={index} className={`md:w-1/${optionsPerRow}`}>
                        <BlueCard cardText={option} onClick={setOption}></BlueCard>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;