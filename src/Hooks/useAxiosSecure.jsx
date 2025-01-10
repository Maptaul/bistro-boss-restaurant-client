import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  //request interceptor to add authorization for every secure call to the api
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token");
    console.log("request stop by interceptors", token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }),
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    };
  return axiosSecure;
};

export default useAxiosSecure;
