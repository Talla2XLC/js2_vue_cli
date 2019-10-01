import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";
import Detail from "@/pages/Detail.vue";
import Cart from "@/pages/Cart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/product/:productId",
      name: "detail",
      component: Detail
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
  ]
});
