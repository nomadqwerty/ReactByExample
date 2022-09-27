import { combineReducers } from "redux";
import { posts } from "./postReducer";

const reducer1 = (dataList = [], action) => {
  if (action.type === "API_CALL") {
    return [...dataList, ...action.payload];
  }
  return [];
};
const reducer2 = () => {
  return [];
};

const reducers = combineReducers({
  reducer1: reducer1,
  reducer2: reducer2,
  posts: posts,
});

export default reducers;
