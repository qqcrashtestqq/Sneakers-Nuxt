import type { IProduct } from "./product";

export interface IBasketProduct extends IProduct {
  quantity: number;
}
