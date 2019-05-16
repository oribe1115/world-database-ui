<template>
  <div>
    <input type="text" v-model="userName" />
    <input type="text" v-model="password" />
    <button @click="login">login</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      serverlink: "https://enghzvca8cgzt.x.pipedream.net/",
      userName: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.userName != "" && this.password != "") {
        const loginData = {
          username: this.userName,
          password: this.password
        };
        axios.post(this.serverlink, loginData);
      }
    }
  }
};
</script>
