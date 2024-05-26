import { GET_BOOKS_API } from "@/constants";
import { axiosInstance } from "./axiosInstance";

export const getallBooks = async (query: string) => {
    const res = await axiosInstance.get(`${GET_BOOKS_API}?${query}`);
    return res.data;
  };