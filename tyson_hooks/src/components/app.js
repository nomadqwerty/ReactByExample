import React from "react";
import Accordion from "./accordian";

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
      <Accordion items={items} />
    </div>
  );
};

export default App;
