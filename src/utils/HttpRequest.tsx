import axios from 'axios';

const REACT_APP_API_URL ="https://fb.api.mr-quynh.com/api/"
const token = localStorage.getItem('USER_TOKEN') ??"";
const tokenType = localStorage.getItem('TOKEN_TYPE') ??"";
const request = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        Authorization: `${tokenType} ${token}`,
        // 'Content-Type': 'application/json',
    },
});

export const GET = async (path:string, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const POST = async (path:string, options = {}) => {
    const response = await request.post(path, options);
    return response.data;
};
export const PATCH = async (path:string, options = {}) => {
    const response = await request.patch(path, options);
    return response.data;
};
export const DELETE = async (path:string, options = {}) => {
    const response = await request.delete(path, options);
    return response.data;
};

