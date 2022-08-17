import React from "react";
import Accordion from "./accordian";
import Search from "./search";

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
const App = () => {
  return (
    <div>
      <br></br>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
