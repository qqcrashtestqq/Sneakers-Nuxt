<script lang="ts" setup>
const MENU_LOGO = [
  {
    icon: "IconBasket",
    name: "0 $",
    link: "",
  },
  {
    icon: "IconLike",
    name: "Закладки",
    link: "",
  },
  {
    icon: "IconUser",
    name: "Профиль",
    link: "",
  },
];
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <NuxtLink to="/" class="header__logo">
        <img src="../../public/images/logo.svg" alt="" />
      </NuxtLink>

      <ul class="header__list">
        <li v-for="(item, key) in MENU_LOGO" :key="key" class="header__item">
          <Icon :name="item.icon" zise="18" />
          {{ item.name }}
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/header";
</style>
