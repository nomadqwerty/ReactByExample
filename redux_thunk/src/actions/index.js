import jsonplaceholder from "../axios/jsonPlaceHolder";

export const fetchData = () => {
  return async (dispatch) => {
    const res = await jsonplaceholder().get("/posts");
    dispatch({
      type: "API_CALL",
      payload: res.data,
    });
  };
};

export const fetchDataUsers = (id) => {
  return async (dispatch) => {
    const res = await jsonplaceholder().get(`/users/${id}`);
    dispatch({
      type: "API_CALL_USER",
      payload: res.data,
    });
  };
};
