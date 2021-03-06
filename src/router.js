import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Axios from "./views/Axios.vue";
import Login from "./views/Login.vue";
import City from "./views/City.vue";
import Countries from "./views/Countries.vue";
import Cities from "./views/Cities.vue";
import axios from "axios";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/axios",
      name: "axios",
      component: Axios,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/city/:cityID",
      name: "City",
      component: City
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/countries",
      name: "Countries",
      component: Countries
    },
    {
      path: "/citiesInThisCountry/:countryCode",
      name: "Cities",
      component: Cities
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  try {
    await axios.get("/api/whoami");
  } catch (_) {
    if (to.meta.isPublic) {
      return next(true);
    }
    return next("/login");
  }
  next(true);
});

export default router;
