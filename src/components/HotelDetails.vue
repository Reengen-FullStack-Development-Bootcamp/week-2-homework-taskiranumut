<script>
import Stars from "@/components/shared/Stars.vue";
import Price from "@/components/shared/Price.vue";
import Location from "@/components/shared/Location.vue";

export default {
  name: "HotelDetails",
  props: ["hotelInfo"],
  components: {
    Stars,
    Price,
    Location,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
      this.slide = slide;
    },
    onSlideEnd(slide) {
      this.sliding = false;
      this.slide = slide;
    },
  },
};
</script>
<template>
  <div class="conteiner my-5">
    <section class="my-4 pr-3">
      <!-- Name -->
      <div class="row">
        <div class="col-sm">
          <h1 class="m-0">{{ hotelInfo.hotelName }}</h1>
        </div>
      </div>

      <!-- Stars -->
      <div class="row">
        <div class="col-sm">
          <Stars :hotelInfo="hotelInfo" />
        </div>
      </div>
    </section>

    <!-- Image slider start -->
    <section class="my-3">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Image v-for start -->
        <b-carousel-slide
          v-for="(image, index) in hotelInfo.images.imageList"
          :key="index"
          :img-src="image"
          class="slide-img"
        ></b-carousel-slide>
        <!-- Image v-for finish -->
      </b-carousel>
    </section>
    <!-- Image slider finish -->

    <section class="my-2">
      <!-- Location -->
      <div class="row">
        <div class="col-sm pl-4 d-flex align-items-center">
          <Location :hotelInfo="hotelInfo" />
        </div>
        <!-- Price -->
        <div class="col-sm d-flex justify-content-end align-items-center">
          <Price :hotelInfo="hotelInfo" />
        </div>
      </div>
    </section>

    <!-- Hotel Description start -->
    <article class="mt-4">
      <div class="row">
        <div class="col-sm">
          <p
            class="text-justify"
            v-for="(text, index) in hotelInfo.descriptions"
            :key="index"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </article>
    <!-- Hotel Description finish -->
  </div>
</template>

<style scoped>
.slide-img {
  height: 540px;
}
</style>
