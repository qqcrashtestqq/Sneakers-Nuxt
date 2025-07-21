<script lang="ts" setup>
import { useBasket } from "@/stores/basket";

const basketStore = useBasket();
const { toggleBasket } = basketStore;
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <NuxtLink to="/" class="header__logo">
        <img src="../../public/images/logo.svg" alt="" />
      </NuxtLink>

      <ul class="header__list">
        <li class="header__item">
          <button class="header__button" @click="toggleBasket">
            <Icon name="IconBasket" zise="18" />
            {{ 0 }} $
          </button>
        </li>
        <li class="header__item">
          <NuxtLink class="header__button" to="/like">
            <Icon name="IconLike" zise="18" />
            Закладки
          </NuxtLink>
        </li>
        <li class="header__item">
          <NuxtLink to="/auth" class="header__button">
            <Icon name="IconUser" zise="18" />
            Вход
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/header";
</style>
