<script lang="ts" setup>
const statusLike = defineProps<{ statusLike: boolean }>();

const statusColor = ref(statusLike.statusLike);

function status() {
  statusColor.value = !statusColor.value;
}
</script>

<template>
  <button class="like" :class="{ active: statusColor }" @click="status">
    <Icon name="IconLike" size="14" />
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/like";
</style>
