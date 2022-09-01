import React, { useState, useEffect } from "react";
import Accordion from "./accordian";
import Search from "./search";
import DropDown from "./dropDown";
import Translate from "./translate";

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
  var [selected, setSelected] = useState(options[0]);
  let [toggle, setToggle] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {/* <Translate /> */}
      {/* {toggle ? (
        <DropDown
        options={options}
        onSetSelected={setSelected}
        selected={selected}
        />
      ) : null} */}
      <br></br>
      {pathFunc(pathName)}
    </div>
  );
};
let pathName = window.location.pathname;

let pathFunc = (path) => {
  if (path === "/") {
    return <Accordion items={items} />;
  }
  if (path === "/search") {
    return <Search />;
  }
  if (path === "/dropdown") {
    return <DropDown />;
  }
  if (path === "/translate") {
    return <Translate />;
  }
};

export default App;
