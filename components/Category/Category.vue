<script lang="ts" setup>
import { useCatalog } from "@/stores/catalog";

const catalog = useCatalog();

onMounted(() => {
  catalog.getCatalog();
});
</script>

<template>
  <section class="category">
    <div class="container category__container">
      <div class="category__head">
        <h2 class="title title--h2 category__title">Все кроссовки</h2>
      </div>
      <ul class="category__list">
        <li v-for="item in catalog.catalog" :key="item.id">
          <ProductCard :product="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/category/category";
</style>
