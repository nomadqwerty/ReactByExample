import { combineReducers } from "redux";
import { posts, users } from "./postReducer";

const reducers = combineReducers({
  posts: posts,
  users: users,
});

export default reducers;
