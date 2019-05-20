<template>
  <div>
    <div v-if="allCountriesName">
      <div v-for="country in allCountriesName" :key="country.Name">
        <p>{{ country.name }}:{{ country.code }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Countries",
  data() {
    return {
      allCountriesName: null
    };
  },
  mounted() {
    axios.get("/api/countries").then(res => {
      this.allCountriesName = res.data;
    });
  }
};
</script>
