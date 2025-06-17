import { defineStore } from "pinia";
import type { IBasket } from "@/types/basket";

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

    // addProductsBasket(product: object) {
    //   this.basketProducts.push(product);
    // },
  },
});
