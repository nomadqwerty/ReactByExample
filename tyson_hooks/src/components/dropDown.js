import React, { useEffect } from "react";

let DropDown = ({ options, selected, onSetSelected }) => {
  useEffect(() => {}, [selected]);

  let list = options.map((option, i) => {
    if (option.color === selected.color) {
      return null;
    }
    return (
      <div
        key={i}
        onClick={() => {
          onSetSelected(option);
        }}
      >
        <button className="ui button">{option.title}</button>
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">pick a color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">selected {selected.title}</div>
          <div className="menu visible transition">{list}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
