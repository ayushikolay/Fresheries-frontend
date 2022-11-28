import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import API from "@/services/Api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    getProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProductsAction({ commit }) {
      let products = await API.getAllProduct();
      commit("getProducts", products);
      // axios("https://fakestoreapi.com/products").then((res) => {
      //   commit("getProducts", res.data);
      // });
    },
  },
});
