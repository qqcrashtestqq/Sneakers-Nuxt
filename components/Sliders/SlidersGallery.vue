<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

const thumbsSwiper = ref<HTMLElement | null>(null);
const props = defineProps<{ images: string[] }>();
</script>

<template>
  <div class="gallery">
    <!-- Основной слайдер -->
    <Swiper
      :modules="[Thumbs]"
      :thumbs="{ swiper: thumbsSwiper }"
      :slides-per-view="1"
      :space-between="12"
      class="gallery__thumbs"
    >
      <SwiperSlide v-for="(item, index) in props.images" :key="+index">
        <div class="gallery__image">
          <img
            :src="`https://sneakers-api-ndi4.onrender.com/${item}`"
            alt="photo product"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <!--  -->
    <Swiper
      :slides-per-view="4"
      :space-between="24"
      :modules="[Navigation, Pagination, Thumbs]"
      navigation
      :watch-slides-progress="true"
      class="gallery__list"
      @swiper="thumbsSwiper = $event"
    >
      <SwiperSlide v-for="(item, index) in props.images" :key="index">
        <div class="gallery__image">
          <img :src="`${baseUrl}/${item}`" alt="photo product" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/sliders/gallery.scss";
</style>
