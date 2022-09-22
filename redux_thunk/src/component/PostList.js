import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";

const PostList = ({ fetchData }) => {
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [fetchData]);

  return <div>PostListed</div>;
};

const state2props = (state) => {
  return {};
};

export default connect(state2props, { fetchData })(PostList);
