<script>
import { filter } from "@/mixins/filter.js";

export default {
  name: "PaymentModal",
  props: ["reservationInfo", "infoFormList"],
  mixins: [filter],
  data() {
    return {
      owner: null,
      isLoading: true,
    };
  },
  created() {
    this.owner = this.infoFormList.find((item) => item.index === 1);
  },
  mounted() {
    this.removeLoading();
  },
  computed: {
    totalPrice() {
      const price =
        this.reservationInfo.price *
        this.reservationInfo.dayNumber *
        this.reservationInfo.personNumber;
      return price;
    },
    ownerFullName() {
      return `${this.owner.firstName} ${this.owner.lastName}`;
    },
  },
  methods: {
    handleOk() {
      this.$emit("modalStatus", false);
      this.$router.push({
        name: "HomePage",
      });
    },
    removeLoading() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>

<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click="$emit('modalStatus', false)">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content" @click="$event.stopPropagation()">
          <section v-if="isLoading">
            <p class="modal-title mt-3 text-center header-p pb-2 mx-5">
              Payment is in progress...
            </p>
            <div
              class="
                spinner-container
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <b-spinner class="spinner"></b-spinner>
            </div>
          </section>
          <section v-else>
            <p class="modal-title mt-3 text-center header-p pb-2 mx-5">
              Payment Summary
            </p>
            <div class="modal-body px-5 mt-3">
              <h4>
                <strong
                  >{{ owner.gender | chooseGender }} {{ ownerFullName }}</strong
                >
                payment is successful for
                <strong>{{ reservationInfo.hotelName }}</strong> reservation for
                <strong>{{ reservationInfo.personNumber }}</strong> persons.
              </h4>

              <ol class="my-4 px-5">
                <li v-for="info in infoFormList" :key="info.index">
                  {{ info.firstName }} {{ info.lastName }}
                </li>
              </ol>

              <p>Total price paid: ${{ totalPrice }}</p>
            </div>
            <div class="modal-footer border-0 d-flex justify-content-center">
              <button @click="handleOk" type="button" class="btn submit-btn">
                OK
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-p {
  font-size: 26px;
  border-bottom: 2px solid #495464;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: table;
}
.modal-wrapper {
  display: table-cell;
  /* vertical-align: top; */
}

.modal-dialog {
  top: 20vh;
}

.modal-content,
.modal-header {
  background-color: #f4f4f2;
}

.spinner-container {
  height: 30vh;
}

.spinner {
  width: 70px;
  height: 70px;
  font-size: 20px;
  color: #368b85;
}
</style>
