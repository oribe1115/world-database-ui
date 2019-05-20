<template>
  <div>
    <div v-if="allCites">
      <div v-for="city in allCites" :key="city.Name">
        <p>{{ city.Name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cites",
  data() {
    return {
      allCites: null
    };
  },
  mounted() {
    const countryCoude = this.$route.params.countryCoude;
    axios.get("/api/citiesInThisCountry/" + countryCoude).then(res => {
      this.allCites = res.data;
    });
  }
};
</script>
