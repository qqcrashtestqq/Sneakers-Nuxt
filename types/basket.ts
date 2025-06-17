import type { IProduct } from "./product";

export interface IBasket {
  basketProducts: IProduct[];
  status: boolean;
  totalSum: number;
}
