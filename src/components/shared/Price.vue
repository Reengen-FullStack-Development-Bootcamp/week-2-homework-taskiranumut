<script>
export default {
  props: ["hotelInfo"],
};
</script>

<template>
  <div class="row">
    <div class="col-1 d-flex justify-content-center align-items-center">
      <span><i class="fas fa-money-bill-wave money-icon"></i> </span>
    </div>
    <div class="col p-0 pl-1">
      <p class="m-0">
        <strong class="price-text">${{ hotelInfo.price }}</strong>
        <small> / per night</small>
      </p>
    </div>
  </div>
</template>

<style scoped>
.money-icon {
  color: #368b85;
}
.price-text {
  font-size: 22px;
}
</style>
