import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    let search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    const searchTimer = setTimeout(() => {
      if (term !== "") {
        search();
      }
    }, 1000);
    console.log(searchTimer);
  }, [term]);

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
