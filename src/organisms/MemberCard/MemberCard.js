import React, { useState } from "react";
import ButtonPrimary from "../../atoms/buttons/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../atoms/buttons/ButtonSecondary/ButtonSecondary"

function MemberCard({ user }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative">
      <div
        className={`w-60 h-60 m-12 bg-blue text-white text-xl cursor-pointer transform transition-transform ${
          showDetails ? "scale-110" : ""
        }`}
        onClick={handleCardClick}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="text-2xl font-bold mb-4">{user.name}</div>
        </div>
      </div>
      {showDetails && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="w-96 bg-blue text-white text-xl rounded-lg p-4 transform translate-x-0 translate-y-0 transition-transform">
            <div className="flex justify-end">
              <button
                className="text-white text-xl p-1 hover:text-gray-400 rounded-full"
                onClick={() => setShowDetails(false)}
              >
                X
              </button>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="text-2xl font-bold mb-4">{user.name}</div>
              <div className="text-lg">{user.info}</div>
              <ButtonPrimary buttonText={"VIEW USER"}></ButtonPrimary>
              <ButtonPrimary buttonText={"EDIT PERMISSIONS"}></ButtonPrimary>
              <ButtonPrimary buttonText={"DELETE USER"}></ButtonPrimary>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberCard;
