<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { NuxtLink } from "#components";

const slides = ref([
  {
    title: "Stan Smith, Forever!",
    image: "/images/slider/slide-1.png",
    link: "/",
  },
  {
    title: "Успей первым — количество ограничено!",
    image: "/public/images/slider/slide-1.png",
    link: "/",
  },
  {
    title: "Качество, проверенное временем",
    image: "/images/slider/slide-1.png",
    link: "/",
  },
]);
</script>

<template>
  <section class="slider">
    <div class="container slider__container">
      <div class="slider__slider">
        <swiper
          :slides-per-view="1"
          :space-between="24"
          :loop="true"
          :modules="[Navigation, Pagination]"
          :pagination="{ clickable: true }"
          :speed="600"
          :autoplay="{ delay: 600, disableOnInteraction: false }"
          navigation
        >
          <swiper-slide v-for="(item, index) in slides" :key="index">
            <div class="slider__slide">
              <div class="slider__image">
                <img :src="item.image" alt="slider photo" />
              </div>
              <div class="slider__box">
                <h2 class="title slider__title">{{ item.title }}</h2>
                <NuxtLink :to="item.link" class="button slider__link"
                  >Купить</NuxtLink
                >
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/sliders/slider";
</style>
