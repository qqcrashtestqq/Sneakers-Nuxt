<script lang="ts" setup>
const statusPay = ref(false);

function status() {
  statusPay.value = !statusPay.value;
}
</script>

<template>
  <button class="pay" :class="{ active: statusPay }" @click="status">
    <Icon v-if="!statusPay" class="pay__default" name="IconPlus" zise="20" />
    <Icon v-else class="pay__active" name="IconCheckbox" zise="20" />
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/pay";
</style>
