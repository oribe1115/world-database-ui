<template>
  <div>
    <ul>
      <li @click="show">ALL</li>
      <div v-if="showRegion">
        <div v-for="region in regionList" :key="region.region">
          <li>{{ region.region }}</li>
        </div>
      </div>
    </ul>
    <div v-if="allCountriesName">
      <div v-for="country in allCountriesName" :key="country.name">
        <router-link v-bind:to="/citiesInThisCountry/ + country.code">
          {{ country.name }}
        </router-link>
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
      allCountriesName: null,
      regionList: null,
      shoewRegion: false
    };
  },
  methods: {
    show() {
      if (this.shoewRegion) {
        this.shoewRegion = false;
      } else {
        this.shoewRegion = true;
      }
    }
  },
  mounted() {
    axios.get("/api/countries").then(res => {
      this.allCountriesName = res.data;
    });
    axios.get("api/region").then(res => {
      this.regionList = res.data;
    });
  }
};
</script>

<style src="./Countries.css"></style>
