<script>
import data from "@/assets/data.json";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  data() {
    return {
      hotelDatas: null,
    };
  },
  created() {
    this.hotelDatas = data;
  },
};
</script>

<template>
  <div>
    <AppHeader :hotelDatas="hotelDatas" />
    <div class="container">
      <router-view :hotelDatas="hotelDatas"></router-view>
    </div>
  </div>
</template>
