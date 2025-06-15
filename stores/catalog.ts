import { defineStore } from "pinia";
import type { ICatalog } from "../types/catalog";

export const useCatalog = defineStore("catalog", {
  state: (): ICatalog => ({
    catalog: [],
  }),

  actions: {
    async getCatalog() {
      const { data, error } = await useCastomFetch("/products");
      this.catalog = data.value.data;
      return this.catalog;
    },
  },
});
