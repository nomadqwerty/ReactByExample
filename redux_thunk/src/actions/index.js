import jsonplaceholder from "../axios/jsonPlaceHolder";

export const fetchData = () => {
  return async (dispatch) => {
    const res = await jsonplaceholder().get("/post");
    dispatch({
      type: "API_CALL",
      payload: res,
    });
  };
};
