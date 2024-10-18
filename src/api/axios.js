import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const publicClient = axios.create({
   baseURL: API_URL,
   withCredentials: true,
});

export const protectedClient = axios.create({
   baseURL: API_URL,
   withCredentials: true,
});

protectedClient.interceptors.response.use(
   (response) => response,
   async (error) => {
      if (error.response.status === 401) {
         // if unauthorized access ==> redirect to login
         window.location.href = "/login";
      }
      return Promise.reject(error);
   },
);
