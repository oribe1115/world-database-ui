<template>
  <div>
    <div v-if="cityInfo">{{ cityInfo }}</div>
    <div v-else>街が見つかりませんでした</div>
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
