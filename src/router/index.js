import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Fresheries",
      component: () => import("@/Views/FrontPage"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("@/Views/HomePage"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/Views/RegisterPage"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/Views/LoginPage"),
    },
    {
      path: "/product/:title",
      name: "view-product",
      component: () => import("@/Views/ViewProduct"),
    },
    {
      path: "/dashboard/",
      name: "Dashboard",
      component: () => import("@/Views/SellerDashboard"),
    },
    {
      path: "/dashboard/create-product",
      name: "Create-product",
      component: () => import("@/Views/CreateProduct"),
    },
    {
      path: "/edit-product/:id",
      name: "EditProduct",
      component: () => import("@/Views/EditProduct"),
    },
    {
      path: "/seller-category",
      name: "SellerCategory",
      component: () => import("@/Views/SellersCategory"),
    },
    {
      path: "/display-products",
      name: "DisplayProducts",
      component: () => import("@/Views/DisplayProducts"),
    },
    {
      path: "/seller-register",
      name: "SellerRegister",
      component: () => import("@/Views/SellerRegister"),
    },
    {
      path: "/seller-login",
      name: "SellerLogin",
      component: () => import("@/Views/SellerLogin"),
    },
    {
      path: "*",
      name: "MainPage",
      component: () => import("@/Views/FrontPage"),
    },
  ],
  mode: "history",
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});
