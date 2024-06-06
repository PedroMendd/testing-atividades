import { IProduct } from "../interfaces/product.interfaces";

let id = 0;

export let productDatabase: IProduct[] = [];

export const resetDatabase = () => {
  productDatabase = [];
};

export const generateId = () => {
  id++;
  return id;
};
