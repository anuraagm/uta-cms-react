import React from 'react';

function ButtonSecondary({ buttonText, alignment, clickFunction }) {
  return (
    <div className="ButtonSecondary font-bold">
      <button
        type="submit"
        className={`border border-orange text-orange px-4 py-2 rounded-lg hover:bg-orange hover:text-white hover:border-transparent self-start md:self-auto ${alignment}`}
        onClick={clickFunction}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ButtonSecondary;
