import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VidList from "./vidList";
import VideoDetail from "./videoDetail";
import preCon from "../api/youTubeApi";

const App = (props) => {
  let [data, setData] = useState([]);
  let [selectedVideo, setSelectedVideo] = useState({});

  let vidSearch = async (term) => {
    try {
      let res = await preCon(term).get("/search");
      console.log(res);
      setData(res.data.items);
      setSelectedVideo(res.data.items[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  let onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    vidSearch("");
  }, []);

  return (
    <div className="ui container">
      <SearchBar vidSearch={vidSearch} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail videoDetails={selectedVideo} />
          </div>
          <div className="five wide column">
            <VidList onVideoSelect={onVideoSelect} items={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
