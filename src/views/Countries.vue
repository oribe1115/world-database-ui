<template>
  <div>
    <div class="dropdown-list">
      <div class="list-item list-all" @click="show()">ALL</div>
      <div v-if="showRegion">
        <div v-for="region in regionList" :key="region.region">
          <div class="list-item">{{ region.region }}</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div v-if="allCountriesName">
        <div v-for="country in allCountriesName" :key="country.name">
          <router-link v-bind:to="/citiesInThisCountry/ + country.code">
            {{ country.name }}
          </router-link>
        </div>
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
      showRegion: false
    };
  },
  methods: {
    show() {
      if (this.showRegion) {
        this.showRegion = false;
      } else {
        this.showRegion = true;
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
