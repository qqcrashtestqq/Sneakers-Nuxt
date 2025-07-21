<script lang="ts" setup>
import { useBasket } from "@/stores/basket";

const basketStore = useBasket();
const { status } = toRefs(basketStore);
</script>

<template>
  <div class="">
    <!-- header -->
    <AppHeader />

    <main>
      <slot />
    </main>

    <!-- footer  -->
    <AppFooter />
    <!-- basket model  -->
    <Transition name="fade">
      <Basket v-if="status" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/transition";
</style>
