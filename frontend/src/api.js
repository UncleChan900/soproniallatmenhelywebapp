import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

let pending = 0;

api.interceptors.request.use(config => {
  if (pending === 0) window.dispatchEvent(new Event('loadingStart'));
  pending++;
  return config;
});

api.interceptors.response.use(
  res => {
    pending = Math.max(0, pending - 1);
    if (pending === 0) window.dispatchEvent(new Event('loadingEnd'));
    return res;
  },
  err => {
    pending = Math.max(0, pending - 1);
    if (pending === 0) window.dispatchEvent(new Event('loadingEnd'));
    return Promise.reject(err);
  }
);

export default api;
