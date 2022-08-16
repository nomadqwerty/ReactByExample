import React from "react";

const Accordion = (props) => {
  let list = props.items.map((item, i) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{list}</div>;
};

export default Accordion;
