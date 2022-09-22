import jsonplaceholder from "../axios/jsonPlaceHolder";

export const fetchData = async () => {
  const res = await jsonplaceholder().get("/post");
  return {
    type: "API_CALL",
    payload: { res },
  };
};
