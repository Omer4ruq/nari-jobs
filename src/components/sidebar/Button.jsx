import React from "react";

const Button = ({ onClickHandler, value, title }) => {
  console.log(value);
  return (
    <div>
      <button
        onClick={onClickHandler}
        value={value}
        className={`px-2 py-1 border text-sm hover:bg-blue-600 hover:text-white`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
