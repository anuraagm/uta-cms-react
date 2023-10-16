import ButtonPrimary from "../../atoms/buttons/ButtonPrimary/ButtonPrimary";

function AdminCourseCard({ title, sub }) {
    return (
        <div className="AdminCourseCard bg-gray-300 shadow-lg border md:m-24 m-6 px-4 py-6">
            <div className="Title text-left text-xl font-bold">
                {title}
            </div>
            <div className="Content text-left mb-8 text-sm font-bold mt-2">
                <div className="Created text-left">
                    {sub}
                </div>
            </div>
            <div className="Actions justify-end flex space-x-3">
                <ButtonPrimary buttonText={"View"}></ButtonPrimary>
                <ButtonPrimary buttonText={"Edit"}></ButtonPrimary>
                <ButtonPrimary buttonText={"Delete"}></ButtonPrimary>
            </div>
        </div>
    );
}

export default AdminCourseCard;