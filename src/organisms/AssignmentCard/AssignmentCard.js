import ButtonPrimary from "../../atoms/buttons/ButtonPrimary/ButtonPrimary";

function AssignmentCard() {
    return (
        <div className="AssignmentCard bg-gray-300 shadow-lg border md:m-24 m-6 px-4 py-6">
            <div className="Title text-left text-xl font-bold">
                Assignment Title
            </div>
            <div className="Dates text-left mb-8 text-sm font-bold mt-2">
                <div className="Created text-left">
                    Created on 08-05-2023
                </div>
                <div className="Due text-left">
                    Due on 09-05-2023
                </div>
            </div>
            <div className="Actions justify-end flex space-x-3">
                <ButtonPrimary buttonText={"Submissions"}></ButtonPrimary>
                <ButtonPrimary buttonText={"Grade"}></ButtonPrimary>
                <ButtonPrimary buttonText={"Edit"}></ButtonPrimary>
            </div>
        </div>
    );
}

export default AssignmentCard;