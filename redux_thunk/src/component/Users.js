import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataUsers } from "../actions";

const User = ({ ID, fetchDataUsers, user }) => {
  useEffect(() => {
    try {
      fetchDataUsers(ID);
    } catch (error) {
      console.log(error);
    }
  }, [fetchDataUsers]);

  return <div>{user?.name}</div>;
};

const state2props = (state, ownProps) => {
  return { user: [state?.users].find((user) => user?.id === ownProps.userId) };
};

export default connect(state2props, { fetchDataUsers })(User);
