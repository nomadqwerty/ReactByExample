import React, { useState } from "react";

const Accordion = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  let onTitleclick = (index) => {
    setSelectedIndex(index);
  };
  let list = props.items.map((item, i) => {
    let setSelect = i === selectedIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${setSelect}`}
          onClick={() => {
            onTitleclick(i);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${setSelect}`}>
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
