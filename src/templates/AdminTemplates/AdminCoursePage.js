import { useState } from "react";
import AdminCourseCard from "../../organisms/AdminCourseCard/AdminCourseCard";

function AdminCoursePage({course}) {
    const [current, setCurrent] = useState("Admin");

    const chooseOption = (option) => {
        setCurrent(option);
    }

    const courses = [
        { id: 1, title: "Module 1", info: "How the web works" },
        { id: 2, title: "Module 2", info: "HTML Basics" },
        { id: 3, title: "Module 3", info: "Javascript" },
        { id: 4, title: "Module 4", info: "React"  },
    ];


    return (
        <div className="AdminCoursePage bg-gray-200">
        <div className="PageTitle text-xl">
            {course}
        </div>
        <div className='SelectionBody text-lg sm:text-md text-center bg-gray-200 md:mr-12' style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <div className="UserCardContainer justify-center">
            {courses.map((course) => (
                <div key={course.id} className="p-4">
                <AdminCourseCard title={course.title} sub={course.info}></AdminCourseCard>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}

export default AdminCoursePage;