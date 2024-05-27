import { GET_BOOKS_API, GET_BOOK_API } from "@/constants";
import { axiosInstance } from "./axiosInstance";

export const getallBooks = async (query: string) => {
  const res = await axiosInstance.get(`${GET_BOOKS_API}?${query}`);
  return res.data;
};

export const getBookById = async (id: string) => {
  const res = await axiosInstance.get(`${GET_BOOK_API}/${id}`);
  return res.data;
};
