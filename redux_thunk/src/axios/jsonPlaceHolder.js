import axios from "axios";

const preConfig = () => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.comz",
    params: {},
  });
};

export default preConfig;
