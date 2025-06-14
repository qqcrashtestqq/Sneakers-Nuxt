<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
</script>

<template>
  <section class="slider">
    <div class="container">
      <div class="slider__slider">
        <swiper :slides-per-view="1" :space-between="24" navigation>
          <swiper-slide>
            <div class="slider__slide"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="slider__slide"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="slider__slide"></div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/sliders/slider";
</style>
