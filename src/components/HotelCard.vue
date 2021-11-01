<script>
import Stars from "@/components/shared/Stars.vue";
import Price from "@/components/shared/Price.vue";
import Location from "@/components/shared/Location.vue";

export default {
  name: "HotelCard",
  props: ["hotelInfo"],
  components: {
    Stars,
    Price,
    Location,
  },
  methods: {
    goHotelPageRoute(hotelId) {
      this.$router.push({
        name: "HotelPage",
        params: {
          id: hotelId,
        },
      });
    },
  },
};
</script>

<template>
  <div class="mb-4">
    <b-card no-body class="card shadow p-3">
      <b-row no-gutters>
        <b-col md="7" class="p-0 d-flex align-items-center">
          <b-card-img
            :src="hotelInfo.images.cardImage"
            alt="Image"
            class="card-img shadow"
          ></b-card-img>
        </b-col>
        <b-col md="5">
          <b-card-body class="py-0" style="height: 192px">
            <!-- Hotel Name start-->
            <h3 class="m-0">{{ hotelInfo.hotelName }}</h3>
            <!-- Hotel Name finish-->

            <!-- Stars -->
            <div class="mt-1 mb-3">
              <Stars :hotelInfo="hotelInfo" />
            </div>

            <!-- Price -->
            <div class="pl-2 my-2">
              <Price :hotelInfo="hotelInfo" />
            </div>

            <!-- Location  -->
            <div class="pl-2 my-2">
              <Location :hotelInfo="hotelInfo" />
            </div>
          </b-card-body>
        </b-col>
      </b-row>

      <!-- More info button start -->
      <b-row class="mt-3">
        <b-col>
          <b-button
            @click="goHotelPageRoute(hotelInfo.id)"
            block
            class="btn submit-btn"
            >More info</b-button
          >
        </b-col>
      </b-row>
      <!-- More info button finish -->
    </b-card>
  </div>
</template>

<style scoped>
.card {
  background-color: #f4f4f2;
  border-radius: 10px;
  width: 540px;
}

.card-img {
  border-radius: 10px;
  width: 295px;
  height: 185px;
}

.star-color {
  color: #368b85;
}

.loc-icon {
  color: #368b85;
}

.price-text {
  font-size: 22px;
}
</style>
