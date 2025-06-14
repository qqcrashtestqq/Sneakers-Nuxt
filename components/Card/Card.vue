<script lang="ts" setup>
const props = defineProps<{
  name: string;
  image: string;
  price: string;
  favorite: boolean;
}>();
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img :src="props.image" alt="" />
    </div>
    <h3 class="card__title">{{ props.name }}</h3>
    <div class="card__box">
      <div class="card__price">
        <span class="card__price-text">Цена:</span>
        <p class="card__price-value">{{ props.price }}</p>
      </div>
      <!-- тут будет кнопка -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/card/card";
</style>
