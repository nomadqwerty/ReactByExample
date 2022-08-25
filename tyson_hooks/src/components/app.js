import React, { useState, useEffect } from "react";
import Accordion from "./accordian";
import Search from "./search";
import DropDown from "./dropDown";

const items = [
  {
    title: "whats react",
    content: "front end js frameWork",
  },
  {
    title: "why use react",
    content: "its what everyone is using",
  },
  {
    title: "why not vue?",
    content: "ion really know dude.",
  },
];

const options = [
  {
    title: "the color red",
    color: "red",
  },
  {
    title: "the color green",
    color: "green",
  },
  {
    title: "the color blue",
    color: "blue",
  },
];
const App = () => {
  let [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <br></br>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <DropDown
        options={options}
        onSetSelected={setSelected}
        selected={selected}
      />
    </div>
  );
};

export default App;
