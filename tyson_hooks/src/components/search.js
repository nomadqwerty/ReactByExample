import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    let debounceTimer = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [term]);

  useEffect(() => {
    let search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: debouncedTerm,
        },
      });
      console.log(data.query.search[3].title);
      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);

  //
  let onChanges = (e) => {
    setTerm(e.target.value);
  };

  //
  let renderedResults = results.map((res, i) => {
    return (
      <div key={res.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${res.pageid}`}
          >
            Click
          </a>
        </div>
        <div className="content">
          <div className="header">{res.title}</div>
          <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="field">
        <label>search stuff</label>
        <input
          value={term}
          type="text"
          placeholder="Search..."
          onChange={onChanges}
        />
      </div>
      <div className="celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
