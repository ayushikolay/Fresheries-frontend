<template>
  <div>
    <Navigation />
    <h1 class="heading">
      <span>P</span>
      <span>R</span>
      <span>O</span>
      <span>D</span>
      <span>U</span>
      <span>C</span>
      <span>T</span>
      <span>S</span>
    </h1>
    <div class="wrapper">
      <!-- <FilterComp :filterProducts="filterProducts" :search="searchTerm" /> -->
      <div>
        <div id="search-container">
          <select v-model="filterByCategory">
            <option value="">All Categories</option>
            <option
              v-for="product in getAllCategories($store.state.products)"
              :value="product"
              :key="product.id"
            >
              {{ product }}
            </option>
          </select>
          <input
            type="text"
            placeholder="Search product name here.."
            v-model="searchProduct"
          />
          <button id="search">Search</button>
        </div>
        <ProductsList :products="filterProducts" />
      </div>
    </div>
    <FooterSec />
  </div>
</template>

<script>
import Navigation from "@/components/NavigationBar.vue";
import API from "@/services/Api";
import ProductsList from "@/components/ProductsList.vue";
// import FilterComp from "@/components/FilterComp.vue";
import FooterSec from "@/components/FooterSec.vue";

export default {
  name: "DisplayProducts",
  data() {
    return {
      products: [],
      search: "",
      prods: [],
      searchProduct: "",
      filterByCategory: "",
      sortByPrice: "",
      sortByRating: "",
    };
  },
  async created() {
    this.products = await API.getAllProduct();
    this.prods = this.products;
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
  components: { Navigation, FooterSec, ProductsList },
  computed: {
    filterProducts() {
      return this.$store.state.products.filter((product) => {
        return (
          product.title
            .toLowerCase()
            .includes(this.searchProduct.toLowerCase()) &&
          this.capitalized(product.category).includes(
            this.capitalized(this.filterByCategory)
          )
        );
      });
    },
  },
  methods: {
    formatProduct(product) {
      if (product) {
        return product.slice(0, 15) + "...";
      } else {
        return "Undefined";
      }
    },
    getAllCategories(products) {
      let arr = [];
      products.forEach((product) => {
        arr.push(product.category);
      });
      return [...new Set(arr)];
    },
    capitalized(data) {
      return data.charAt(0).toUpperCase() + data.slice(1);
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f7f7f7;
}

.heading {
  margin-top: 7rem;
  text-align: center;
}

.heading span {
  font-size: 1.5rem;
  background: #4caf50;
  color: #fff;
  gap: 1rem;
  padding: 0.2rem 1rem;
  border: 2px solid #fff;
}

.wrapper {
  width: 97%;
  margin: 0 auto;
  text-align: center;
}

.wrapper .buttons {
  text-align: center;
}
.button-value {
  margin-top: 2rem;
  margin-right: 0.5rem;
  border: 2px solid #4caf50;
  padding: 0.5em 2.2em;
  border-radius: 3em;
  background-color: transparent;
  color: #4caf50;
  cursor: pointer;
}

.active {
  background-color: #4caf50;
  color: #ffffff;
}

select {
  width: 7.5rem;
  margin-right: 2rem;
  outline: none;
  border: none;
  color: #4caf50;
}

option {
  color: #4caf50;
}
#search-container > input {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  margin: 1em 0;
  text-align: center;
}
#search-container input {
  background-color: transparent;
  border: none;
  width: 40%;
  border-bottom: 2px solid #110f29;
  padding: 1em 0.3em;
}
#search-container input:focus {
  border-bottom-color: #4caf50;
}
#search-container button {
  border: none;
  padding: 0.5em 2em;
  margin-left: 1em;
  background-color: #4caf50;
  color: #ffffff;
  border-radius: 5px;
  margin-top: 0.5em;
}
</style>
