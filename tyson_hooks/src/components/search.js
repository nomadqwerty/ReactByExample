import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log(
      "rerendered after the first and onwards and when state is changed"
    );
  }, [term]);

  let onTermSubmit = (e) => {
    e.preventDefault();
    console.log(term, "submited");
  };
  let onChanges = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div>
      <form className="ui form" onSubmit={onTermSubmit}>
        <div className="field">
          <label>search stuff</label>
          <input
            value={term}
            type="text"
            placeholder="Search..."
            onChange={onChanges}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
