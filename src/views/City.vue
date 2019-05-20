<template>
  <div>
    <h1>{{ cityInfo.name }}</h1>
    <div>Country Code: {{ cityInfo.countryCode }}</div>
    <div>District: {{ cityInfo.district }}</div>
    <div>Population: {{ cityInfo.population }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "City",
  data() {
    return {
      cityInfo: null
    };
  },
  mounted() {
    const cityID = this.$route.params.cityID;
    axios.get("/api/cities/" + cityID).then(res => {
      this.cityInfo = res.data;
    });
  }
};
</script>
