import { defineStore } from "pinia";
import type { IBasket } from "@/types/basket";
import type { IProduct } from "@/types/product";
import type { IBasketProduct } from "~/types/basketProduct";

export const useBasket = defineStore("basket", {
  state: (): IBasket => ({
    basketProducts: [],
    status: false,
    totalSum: 0,
  }),

  actions: {
    // open close basket
    toggleBasket() {
      this.status = !this.status;
      document.body.style.overflow = this.status ? "hidden" : "";
    },

    // add product in basket
    addProductsBasket(product: IProduct) {
      const newProduct: IBasketProduct = {
        ...product,
        quantity: 0,
      };

      this.basketProducts.push(newProduct);
    },
  },
});
