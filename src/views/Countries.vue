<template>
  <div>
    <div v-if="allCountriesNameJSON">{{ allCountriesNameJSON }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Countries",
  data() {
    return {
      allCountriesNameJSON: null,
      allCountriesName: []
    };
  },
  mounted() {
    axios.get("api/countries").then(res => {
      this.allCountriesNameJSON = res.data;
    });
  }
};
</script>
