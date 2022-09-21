import React from "react";
import { connect } from "react-redux";

const Details = ({ state }) => {
  return (
    <div>
      {state?.selectSong?.title} {state?.selectSong?.duration}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(Details);
