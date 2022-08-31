import React, { useState } from "react";
import DropDown from "./dropDown";
import Convert from "./convert";

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
  let [convertText, setConvertText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>enter text</label>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setConvertText(text);
            }}
          >
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></input>
          </form>
        </div>
      </div>

      <DropDown
        options={options}
        onSetSelected={setSelected}
        selected={selected}
        label={"language"}
      />
      <hr />
      <h3 className="ui header">
        <Convert selected={selected} convertText={convertText} />
      </h3>
    </div>
  );
};

export default Translate;
