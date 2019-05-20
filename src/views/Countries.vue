<template>
  <div>
    <div class="dropdown-list">
      <div class="top-list" @click="changeShowRegionList()">
        <div class="triangle">
          <div v-if="showRegionList">
            <font-awesome-icon icon="caret-up" />
          </div>
          <div v-else>
            <font-awesome-icon icon="caret-down" />
          </div>
        </div>
        <div class="now-region">{{ region }}</div>
      </div>
      <div v-if="showRegionList">
        <div class="list-item list-all" @click="changeRegionToAll()">
          ALL
        </div>
        <div v-for="region in regionList" :key="region.region">
          <div class="list-item" @click="changeShowRegion(region)">
            {{ region.region }}
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div v-if="allCountriesName">
        <div v-for="country in allCountriesName" :key="country.name">
          <div v-if="judgeForShow(country)">
            <router-link v-bind:to="/citiesInThisCountry/ + country.code">
              {{ country.name }}
            </router-link>
          </div>
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
      showRegionList: false,
      region: "ALL"
    };
  },
  methods: {
    changeShowRegionList() {
      if (this.showRegionList) {
        this.showRegionList = false;
      } else {
        this.showRegionList = true;
      }
    },
    judgeForShow(country) {
      if (this.region == "ALL") {
        return true;
      }
      if (country.region == this.region) {
        return true;
      } else {
        return false;
      }
    },
    changeRegionToAll() {
      this.region = "ALL";
    },
    changeShowRegion(region) {
      this.region = region.region;
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
