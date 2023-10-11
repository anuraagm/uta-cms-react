function BlueCard({ cardText, onClick }) {
    const handleCardClick = () => {
        // Call the onClick callback with the desired data (e.g., course title)
        onClick(cardText);
      };
    return (
        <div className="BlueCard bg-blue mr-12 my-4 text-center text-white font-bold shadow-lg p-4 border 
        transition-transform transform hover:shadow-xl hover:cursor-pointer hover:scale-105 
        h-[40vh] flex flex-col justify-center" onClick={handleCardClick}>
            <div className="my-auto">{cardText}</div>
        </div>
    );
}

export default BlueCard;
