import React from "react";
import VideoCard from "./videoCard";

const vidList = (props) => {
  const videos = props.items.map((video, i) => {
    return (
      <VideoCard
        onVideoSelect={props.onVideoSelect}
        key={i + 1}
        video={video}
      />
    );
  });

  return (
    <div className="listWrapVid">
      <div className="ui relaxed divided list">{videos}</div>
    </div>
  );
};

export default vidList;
