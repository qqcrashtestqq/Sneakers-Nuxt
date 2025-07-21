<script lang="ts" setup>
import type { IUser } from "../types/User";

const userName = ref<string>("");
const userEmail = ref<string>("");
const userPassword = ref<string>();

const userData = ref<IUser[]>([
  {
    label: "Name",
    value: "",
  },
  {
    label: "Email",
    value: "",
  },
  {
    label: "Password",
    value: "",
  },
]);
</script>

<template>
  <section class="auth">
    <div class="container">
      <div class="auth__wrapper">
        <div class="auth__head">
          <button class="auth__button">Register</button>
          <button class="auth__button">Authorization</button>
        </div>
        <form class="auth__form">
          <AppInput
            v-for="(item, index) in userData"
            :key="index"
            v-model="item.value"
            :label="item.label"
          />

          <button>cilick</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/auth.scss";
</style>
