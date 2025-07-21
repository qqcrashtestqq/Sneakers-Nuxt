<script lang="ts" setup>
import { useCustomFetch } from "@/composables/useCustomFetch";
import type { IProduct } from "@/types/product";
const route = useRoute();

const idProduct = route.params.id;
const dataProduct = ref<IProduct>();
const imagesArrow = ref<string[]>([]);
async function getProduct() {
  const { data, error } = await useCustomFetch(`/products/${idProduct}`);
  dataProduct.value = data;
  imagesArrow.value = [data.photes];
}
getProduct();
</script>

<template>
  <section class="product">
    <div class="container product__container">
      <SlidersGallery :images="dataProduct?.photos" />
      <div class="product__info">
        <AppLike class="product__like" :status-like="dataProduct?.favorite" />

        <h1 class="product__title">{{ dataProduct?.name }}</h1>
        <p class="product__sum">Цена: {{ dataProduct?.price }} $</p>

        <div class="product__sizes">
          <p>Размеры:</p>
          <ul class="product__list">
            <li
              v-for="(item, index) in dataProduct?.sizes"
              :key="index"
              class="product__item"
            >
              <button class="product__size">{{ item }}</button>
            </li>
          </ul>
        </div>
        <div class="">
          <p>{{ dataProduct?.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/product.scss";
</style>
