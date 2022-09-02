import React, { useState, useEffect } from "react";
import Accordion from "./accordian";
import Search from "./search";
import DropDown from "./dropDown";
import Translate from "./translate";
import Router from "./route";
import Header from "./header";

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
      <Header />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <Router route={"/translate"}>
        <Translate />
      </Router>
      <Router route={"/search"}>
        <Search />
      </Router>
      <Router route={"/dropdown"}>
        <DropDown
          options={options}
          onSetSelected={setSelected}
          selected={selected}
          label={"color"}
        />
      </Router>
      <Router route={"/"}>
        <Accordion items={items} />
      </Router>

      <br></br>
    </div>
  );
};

export default App;
