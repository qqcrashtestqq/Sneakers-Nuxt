import { defineStore } from "pinia";
import type { ICatalog } from "../types/catalog";
import { useCustomFetch } from "@/composables/useCustomFetch";

export const useCatalog = defineStore("catalog", {
  state: (): ICatalog => ({
    catalog: [],
  }),

  actions: {
    async getCatalog() {
      const { data, error } = await useCustomFetch("/products");
      this.catalog = data;
      return this.catalog;
    },
  },
});
