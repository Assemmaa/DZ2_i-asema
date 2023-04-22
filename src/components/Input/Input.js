import React from "react";

const Input = ({ placeholder, name, setValue }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        name={name}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
