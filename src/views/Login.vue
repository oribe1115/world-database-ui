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
        axios.post("/api/login", loginData);
      }
    }
  }
};
</script>
