import axios from "axios";

const REACT_APP_API_URL ="http://localhost:8000/api/"
// const REACT_APP_API_URL = "http://192.168.1.172:8000/api/";
// const REACT_APP_API_URL = "https://teacher.mr-quynh.com/api/";
let token = localStorage.getItem("USER_TOKEN") ?? "";
token = token ? token.replace(/"/g, "") : "";
const request = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    // 'Content-Type': 'application/json',
  },
});

export const GET = async (path: string, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export const POST = async (path: string, options = {}) => {
  const response = await request.post(path, options);
  return response.data;
};
export const PATCH = async (path: string, options = {}) => {
  const response = await request.patch(path, options);
  return response.data;
};
export const DELETE = async (path: string, options = {}) => {
  const response = await request.delete(path, options);
  return response.data;
};
export const POSTASYNC = async (path: string, options = {}, token_: string) => {
  const response = await axios
    .create({
      baseURL: REACT_APP_API_URL,
      headers: {
        Authorization: `Bearer ${token_}`,
      },
    })
    .post(path, options);
  return response.data;
};
