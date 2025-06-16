<script lang="ts" setup>
import { useBasket } from "@/stores/basket";

const basketStore = useBasket();
const { toggleBasket } = basketStore;
const balance = ref(0);
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <NuxtLink to="/" class="header__logo">
        <img src="../../public/images/logo.svg" alt="" />
      </NuxtLink>

      <ul class="header__list">
        <li class="header__item" @click="toggleBasket">
          <Icon name="IconBasket" zise="18" />
          {{ balance }} $
        </li>
        <li class="header__item">
          <Icon name="IconLike" zise="18" />
          Закладки
        </li>
        <li class="header__item">
          <Icon name="IconUser" zise="18" />
          Вход
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/header";
</style>
