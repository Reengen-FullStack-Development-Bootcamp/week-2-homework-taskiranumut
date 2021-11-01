<script>
export default {
  name: "AppHeader",
  props: ["hotelDatas"],
};
</script>

<template>
  <div class="shadow">
    <!-- App Title start -->
    <div class="container-fluid header-text-color">
      <div class="row header-bg-color">
        <div
          class="
            col-sm-6
            offset-3
            d-flex
            justify-content-center
            align-items-center
            mt-3
            mb-n2
            fs-30px
          "
        >
          <div class="mx-2">
            <i class="fas fa-hotel icon-color"></i>
          </div>
          <div class="mx-2">
            <h1 class="text-center m-0">Find Hotel</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- App Title finish -->

    <!-- Navbar start -->
    <div class="conteiner-fluid">
      <div>
        <b-navbar
          class="header-bg-color pt-0 pb-2 pl-5"
          toggleable="sm"
          type="dark"
        >
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item>
                <router-link
                  class="nav-router-link"
                  to="/"
                  exact-active-class="active"
                  >Home</router-link
                ></b-nav-item
              >
              <!-- Hoverable dropdown start -->
              <b-nav-item class="dropdown">
                <router-link
                  class="nav-router-link"
                  to="#"
                  exact-active-class="active"
                  >Hotels</router-link
                >
                <div class="dropdown-content">
                  <router-link
                    :to="`/hotel/${hotel.id}`"
                    v-for="hotel in hotelDatas"
                    :key="hotel.id"
                    >{{ hotel.hotelName }}</router-link
                  >
                </div>
              </b-nav-item>
              <!-- Hoverable dropdown finish -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <!-- Navbar finish -->
  </div>
</template>

<style scoped>
.fs-30px {
  font-size: 30px;
}

.header-bg-color {
  background-color: #464660;
}

.header-text-color {
  color: #f1e9e5;
}

.icon-color {
  color: #b4b897;
}

.nav-router-link {
  color: rgb(241, 233, 229);
  text-decoration: none;
  font-size: 22px;
  margin-right: 20px;
}

.nav-router-link:hover {
  text-decoration: none;
  color: #b4b897;
}

.active {
  color: #b4b897;
}

/* --------------- Hoverable Dropdown Menu ------------------- */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
/* ---------------------------------------------------------- */
</style>
