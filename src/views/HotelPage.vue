<script>
import HotelDetails from "@/components/HotelDetails.vue";
import ReservationForm from "@/components/ReservationForm.vue";

export default {
  name: "HotelPage",
  props: ["hotelDatas"],
  components: {
    HotelDetails,
    ReservationForm,
  },
  data() {
    return {
      hotelInfo: null,
    };
  },
  created() {
    this.hotelInfo = this.getHotelInfoByRouteId();
    localStorage.removeItem("reservationInfo");
  },
  watch: {
    $route() {
      this.hotelInfo = this.getHotelInfoByRouteId();
    },
  },
  methods: {
    getHotelInfoByRouteId() {
      const hotelId = this.$route.params.id;
      return this.hotelDatas.find((item) => item.id === hotelId);
    },
    sendDataToReservationPage(ownerForm) {
      const reservationInfo = {
        hotelName: this.hotelInfo.hotelName,
        price: this.hotelInfo.price,
        personNumber: ownerForm.personNumber,
        dayNumber: ownerForm.dayNumber,
      };
      this.$router.push({
        name: "ReservationPage",
        params: {
          reservationInfo,
        },
      });
    },
  },
};
</script>

<template>
  <div>
    <HotelDetails :hotelInfo="hotelInfo" />
    <ReservationForm @ownerForm="sendDataToReservationPage" />
  </div>
</template>
