import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ convertText, selected }) => {
  let [results, setResults] = useState("");
  useEffect(() => {
    let convert = async () => {
      if (!convertText) {
        return;
      }
      let { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: convertText,
            target: selected.color,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setResults(data.data.translations[0].translatedText);
    };
    convert();
  }, [convertText, selected]);

  return <div>{results}</div>;
};

export default Convert;
