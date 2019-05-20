<template>
  <div>
    <div v-if="allCities">
      <div v-for="city in allCities" :key="city.id">
        <p>{{ city.name }}</p>
      </div>
    </div>
    <div v-else>国が見つかりませんでした</div>
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
