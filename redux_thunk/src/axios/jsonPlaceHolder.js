import axios from "axios";

const preConfig = () => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    params: {
      limit: 10,
    },
  });
};

export default preConfig;
