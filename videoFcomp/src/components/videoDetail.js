import React from "react";

const VideoDetail = ({ videoDetails }) => {
  const i_d = videoDetails.id?.videoId;
  const vidSrc = `https://www.youtube.com/embed/${i_d}`;
  const { snippet } = videoDetails;
  if (!Object.keys(videoDetails).length) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe src={vidSrc} title="videos" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{snippet.title}</h4>
        <p>{snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
