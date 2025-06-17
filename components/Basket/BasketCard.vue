<script lang="ts" setup>
import type { IBasketProduct } from "@/types/basketProduct";

const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

const product = defineProps<{
  product: IBasketProduct;
}>();
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img :src="`${baseUrl}/${product.product.image}`" alt="photo ptoduct" />
    </div>
    <div class="card__box">
      <h3 class="card__title">{{ product.product.name }}</h3>
      <p class="card__price">{{ product.product.price }} $</p>
    </div>
    <AppClose />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/basket/card";
</style>
