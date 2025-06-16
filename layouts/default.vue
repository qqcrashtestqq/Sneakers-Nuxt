<script lang="ts" setup>
import { useBasket } from "@/stores/basket";

const basketStore = useBasket();
const { status } = toRefs(basketStore);
</script>

<template>
  <main>
    <AppHeader />
    <slot />
    <AppFooter />
    <Transition name="fade">
      <Basket v-if="status" />
    </Transition>
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/transition";
</style>
