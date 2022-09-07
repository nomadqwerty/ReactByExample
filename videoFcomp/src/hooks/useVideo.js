import React, { useEffect, useState } from "react";
import precon from "../api/youTubeApi";

const useVideo = (defaultTerm) => {
  let [video, setData] = useState([]);
  let vidSearch = async (term) => {
    try {
      let res = await precon(term).get("/search");
      setData(res?.data?.items);
      return;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!defaultTerm) {
      vidSearch("");
    } else {
      vidSearch(defaultTerm);
    }
  }, []);

  console.log(video);
  return [video, vidSearch];
};

export default useVideo;
