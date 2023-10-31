function SubjectCard({ cardTitle, classDetails, semester, color, onClick }) {
  const handleCardClick = () => {
    // Call the onClick callback with the desired data (e.g., course title)
    onClick(cardTitle);
  };
    return (
        <div className={`SubjectCard bg-white rounded-sm text-center shadow-lg p-2 border sm:w-1/2 mx-16 my-6 transition-transform transform hover:shadow-xl hover:bg-gray-100 hover:cursor-pointer hover:scale-105 `} onClick={handleCardClick}>
          <div className={`Title ${color} text-xl font-bold p-16 text-center`}>
            {cardTitle}
          </div>
          <div className="ClassInfo text-md text-left mt-2 mb-10 font-bold">
            <div className="Class">
              {classDetails}
            </div>
            <div className="SemesterInfo">
              {semester}
            </div>
          </div>
        </div>
    );
  }
  
  export default SubjectCard;
  