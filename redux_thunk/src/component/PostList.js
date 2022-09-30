import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import User from "./Users";

const PostList = ({ fetchData, posts }) => {
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [fetchData]);
  const list = posts.map((post, i) => {
    return (
      <div key={i}>
        <i className="large middle aligned icon user"></i>
        <div className="content">
          <div className="description">
            <h2 className="">{post?.title}</h2>
            <p className="">{post?.body}</p>
          </div>
          <User ID={posts[i]?.userId} />
        </div>
      </div>
    );
  });

  return <div>{list}</div>;
};

const state2props = (state) => {
  return { posts: state?.posts };
};

export default connect(state2props, { fetchData })(PostList);
