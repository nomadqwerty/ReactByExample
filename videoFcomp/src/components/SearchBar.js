import React, { useState } from "react";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  let onFormSubmit = (e) => {
    e.preventDefault();
    props.vidSearch(input);
  };
  let onInput = (e) => {
    let userVal = e.target.value;
    setInput(userVal);
  };
  return (
    <div className="ui left icon input loading">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field ui input focus">
          <label>Video search</label>
          <input
            type="text"
            value={input}
            placeholder="Search..."
            onChange={onInput}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
