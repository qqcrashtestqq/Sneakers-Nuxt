<script lang="ts" setup>
import { useBasket } from "@/stores/basket";

const basketStore = useBasket();

const tacks = ref(0.15);
</script>

<template>
  <div class="basket">
    <div class="basket__block">
      <div class="basket__head">
        <h2 class="title title--h2 basket__title">Корзина</h2>
        <AppClose @click="basketStore.toggleBasket" />
      </div>

      <div class="basket__body">
        <ul class="basket__list">
          <li
            v-for="item in basketStore.basketProducts"
            :key="item.id"
            class="basket__item"
          >
            <BasketCard :product="item" />
          </li>
        </ul>
      </div>

      <div class="basket__total">
        <div class="basket__info">
          <div class="basket__box">
            <p class="basket__box-text">Итого:</p>
            <span class="basket__box-decor"></span>
            <p class="basket__box-sum">21 498 руб.</p>
          </div>
          <div class="basket__box">
            <p class="basket__box-text">Налог 5%:</p>
            <span class="basket__box-decor"></span>
            <p class="basket__box-sum">{{ tacks }}</p>
          </div>
        </div>
        <button class="button basket__button">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/basket/basket";
</style>
