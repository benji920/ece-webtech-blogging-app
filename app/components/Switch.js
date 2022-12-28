import React from "react";

const Switch = ({ isOn, handleToggle, className }) => {
  return (
    <div className="h-full  pb-10">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox  border-2"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#E2E8F0" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;
