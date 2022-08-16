import React, { useState } from "react";

const Accordion = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  let onTitleclick = (index) => {
    setSelectedIndex(index);
    console.log(useState);
  };

  let list = props.items.map((item, i) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => {
            onTitleclick(i);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {list}
      <h1>{selectedIndex}</h1>
    </div>
  );
};

export default Accordion;
