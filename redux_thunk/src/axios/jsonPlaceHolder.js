import axios from "axios";

const preConfig = () => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    params: {},
  });
};

export default preConfig;
