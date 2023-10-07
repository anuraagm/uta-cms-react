import React from 'react';

function ButtonPrimary({ buttonText, alignment, clickFunction }) {
  return (
    <div className="ButtonPrimary font-bold">
      <button
        type="submit"
        className={`bg-orange text-white px-4 py-2 rounded-lg hover:bg-opacity-80 self-start md:self-auto ${alignment}`}
        onClick={clickFunction}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ButtonPrimary;
