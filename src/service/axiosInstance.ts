import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.VITE_BOOKS_BASE_URL,
});
