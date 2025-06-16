<script lang="ts" setup>
import type { IProduct } from "@/types/product";
import { useBasket } from "@/stores/basket";

const basketStore = useBasket();
const { getOneProduct } = basketStore;
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

const product = defineProps<{
  product: IProduct;
}>();

console.log();
</script>

<template>
  <div class="card">
    <AppLike :statusLike="product.product.favorite" />
    <div class="card__image">
      <img :src="`${baseUrl}/${product.product.image}`" alt="photo product" />
    </div>
    <a :href="product.product.id" class="title title--h3 card__title">{{
      product.product.name
    }}</a>
    <div class="card__box">
      <div class="card__price">
        <span class="card__price-text">Цена:</span>
        <p class="card__price-value">{{ product.product.price }} $</p>
      </div>
      <AppPay
        :id="product.product.id"
        @click="getOneProduct(product.product)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/card/card";
</style>
