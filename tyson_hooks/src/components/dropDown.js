import React, { useEffect, useState } from "react";

let DropDown = ({ options, selected, onSetSelected }) => {
  let [active, setActive] = useState("");
  let [trans, setTrans] = useState("");

  useEffect(() => {}, [selected, active, trans]);

  let onDropDownClick = () => {
    let val = "visible active";
    let val2 = "visible transition";
    if (!active && !trans) {
      setActive(val);
      setTrans(val2);
    } else {
      setActive("");
      setTrans("");
    }
  };

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
        <div
          onClick={onDropDownClick}
          className={`ui selection dropdown ${active} `}
        >
          <i className="dropdown icon"></i>
          <div className="text">selected {selected.title}</div>
          <div className={`menu ${trans} `}>{list}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
