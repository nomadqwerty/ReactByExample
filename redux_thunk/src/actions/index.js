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
