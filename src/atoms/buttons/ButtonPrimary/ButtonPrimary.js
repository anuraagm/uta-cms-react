import React from 'react';

function ButtonPrimary({ buttonText, alignment }) {
  return (
    <div className="ButtonPrimary">
      <button
        type="submit"
        className={`bg-orange text-white px-4 py-2 rounded-lg hover:bg-blue-600 self-start md:self-auto ${alignment}`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ButtonPrimary;
