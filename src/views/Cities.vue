<template>
  <div>
    <div v-if="citiesName">{{ citiesName }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cites",
  data() {
    return {
      citiesName: null
    };
  },
  mounted() {
    const countryCoude = this.$route.params.countryCoude;
    axios.get("api/" + countryCoude + "/cities").then(res => {
      this.citiesName = res.data;
    });
  }
};
</script>
