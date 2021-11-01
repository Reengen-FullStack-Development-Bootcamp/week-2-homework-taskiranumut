<script>
export default {
  props: ["hotelInfo"],
};
</script>

<template>
  <div class="row">
    <div class="col-sm">
      <span
        v-for="i in Number(hotelInfo.starNumber)"
        :key="i"
        class="fa fa-star star-color mr-1"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.star-color {
  color: #368b85;
}
</style>
