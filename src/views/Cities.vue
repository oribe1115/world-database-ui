<template>
  <div>
    <div>
      <p>hoge</p>
    </div>
    <div v-if="allCities">
      {{ allCities }}
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
    const countryCoude = this.$route.params.countryCode;
    axios.get("/api/citiesInThisCountry/" + countryCoude).then(res => {
      this.allCities = res.data;
    });
  }
};
</script>
