import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MoneyBoxFormPage from "@/views/MoneyBoxFormPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/moneybox/add",
    name: "MoneyBoxAdd",
    component: MoneyBoxFormPage,
  },
  {
    path: "/moneybox/edit/:id",
    name: "MoneyBoxEdit",
    component: MoneyBoxFormPage,
    meta: {
      edit: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
