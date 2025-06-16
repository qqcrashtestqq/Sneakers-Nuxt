import { defineStore } from "pinia";
import type { IBasket } from "@/types/basket";

export const useBasket = defineStore("basket", {
  state: (): IBasket => ({
    basketProducts: [],
    status: false,
  }),

  actions: {
    // open close basket
    toggleBasket() {
      this.status = !this.status;
      document.body.style.overflow = this.status ? "hidden" : "";
    },

    // product(s) to basket
    async getOneProduct(product: object) {
      this.basketProducts.push(product);
      console.log("basketProducts", this.basketProducts);

      // localStorage.getItem("basket", JSON.stringify(this.basketProducts));
    },
  },
});
