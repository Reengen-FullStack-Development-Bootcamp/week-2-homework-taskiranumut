<script>
import HotelCard from "@/components/HotelCard.vue";

export default {
  name: "HomePage",
  props: ["hotelDatas"],
  components: {
    HotelCard,
  },
  created() {
    localStorage.removeItem("reservationInfo");
  },
};
</script>

<template>
  <div>
    <!-- TODO: HotelCard component-->
    <div class="container my-5 p-0">
      <b-card-group
        deck
        class="d-flex justify-content-around align-items-center"
      >
        <HotelCard
          v-for="hotelInfo in hotelDatas"
          :key="hotelInfo.id"
          :hotelInfo="hotelInfo"
        />
      </b-card-group>
    </div>
  </div>
</template>
