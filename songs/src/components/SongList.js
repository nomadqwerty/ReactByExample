import React from "react";
import { connect } from "react-redux";
const SongList = ({ songs, dispatch }) => {
  const list = songs.map((song, i) => {
    return (
      <div key={i} className="item">
        <div className="right floated content">
          <button className="ui botton primary">Select</button>
        </div>

        <div className="content">{song.title}</div>
      </div>
    );
  });
  return <div className="ui divided list">{list}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
