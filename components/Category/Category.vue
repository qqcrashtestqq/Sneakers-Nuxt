<script lang="ts" setup></script>

<template>
  <section class="category">
    <div class="container category__container">
      <div class="category__head">
        <h2 class="title title--h2 category__title">Все кроссовки</h2>
      </div>
      <ul class="category__list">
        <CategoryItem />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/category/category";
</style>
