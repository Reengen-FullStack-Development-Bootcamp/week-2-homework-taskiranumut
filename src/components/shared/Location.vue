<script>
export default {
  props: ["hotelInfo"],
};
</script>

<template>
  <div class="row">
    <div class="col-1 d-flex justify-content-center">
      <span><i class="fas fa-map-marker-alt location-icon"></i></span>
    </div>
    <div class="col p-0 pl-n2">
      <span
        >{{ hotelInfo.location.city }} / {{ hotelInfo.location.country }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.location-icon {
  color: #368b85;
}
</style>
