import { combineReducers } from "redux";

const reducer1 = () => {
  return [];
};
const reducer2 = () => {
  return [];
};

const reducers = combineReducers({ reducer1: reducer1, reducer2: reducer2 });

export default reducers;
