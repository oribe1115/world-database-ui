<template>
  <div>
    <div v-for="city in allCities" :key="city.id">
      <router-link v-bind:to="/city/ + city.id">{{ city.name }}</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cites",
  data() {
    return {
      allCities: null
    };
  },
  mounted() {
    const countryCode = this.$route.params.countryCode;
    axios.get("/api/citiesInThisCountry/" + countryCode).then(res => {
      this.allCities = res.data;
    });
  }
};
</script>
