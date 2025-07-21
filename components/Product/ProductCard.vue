<script lang="ts" setup>
import type { IProduct } from "@/types/product";
import { useBasket } from "@/stores/basket";

const basketStore = useBasket();
const { addProductsBasket } = basketStore;
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

const props = defineProps<{
  product: IProduct;
}>();
</script>

<template>
  <article class="card">
    <AppLike :statusLike="props.product.favorite" />
    <div class="card__image">
      <img :src="`${baseUrl}/${props.product.image}`" alt="photo product" />
    </div>
    <header class="card__header">
      <NuxtLink
        :to="`/product/${props.product.id}`"
        class="title title--h3 card__title"
        >{{ props.product.name }}</NuxtLink
      >
    </header>

    <div class="card__box">
      <div class="card__price">
        <span class="card__price-text">Цена:</span>
        <p class="card__price-value">{{ props.product.price }} $</p>
      </div>
      <!-- <AppPay
        :id="props.product.id"
        @click="addProductsBasket(props.product)"
      /> -->
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/card/card";
</style>
