<script lang="ts" setup>
interface IInput {
  icon?: string;
  label?: string;
}

const props = defineProps<IInput>();
</script>

<template>
  <label class="input">
    <!-- <Icon :name="props.icon" /> -->
    {{ props.label }}
    <input type="text" :placeholder="props.text" class="input__element" />
  </label>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/app/input.scss";
</style>
