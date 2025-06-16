import type { IBasketProduct } from "./basketProduct";

export interface IBasket {
  basketProducts: IBasketProduct;
  status: boolean;
}
