import { reviewsApiMap } from "./apiMap";
import Axios from "../utils/axiosInstance";
// types
import { ReviewType } from "../types/global-type";

export const listAllReview = async () => {
  const res = await Axios.get(reviewsApiMap.LIST_ALL);
  return res.data;
};

export const listSingleReview = async (id: string) => {
  const res = await Axios.get(`${reviewsApiMap.LIST_SINGLE}/${id}`);
  return res.data;
};

export const createNew = async (
  body: Pick<ReviewType, "title" | "content">
) => {
  const res = await Axios.post(`${reviewsApiMap.CREATE_NEW}`, body);
  return res.data;
};

export const deleteReview = async (id: string) => {
  const res = await Axios.delete(`${reviewsApiMap.DELETE_REVIEW}/${id}`);
  return res.data;
};

export const updateReview = async (
  id: string,
  body: Pick<ReviewType, "title" | "content">
) => {
  const res = await Axios.put(`${reviewsApiMap.DELETE_REVIEW}/${id}`, body);
  return res.data;
};
