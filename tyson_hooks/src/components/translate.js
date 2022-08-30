import React, { useState } from "react";
import DropDown from "./dropDown";

const options = [
  {
    title: "Afrikaans",
    color: "af",
  },
  {
    title: "Arabic",
    color: "ar",
  },
  {
    title: "hindi",
    color: "hi",
  },
];
const Translate = () => {
  let [selected, setSelected] = useState(options[0]);
  let [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>enter text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <DropDown
        options={options}
        onSetSelected={setSelected}
        selected={selected}
        label={"language"}
      />
    </div>
  );
};

export default Translate;
