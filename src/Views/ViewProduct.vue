<template>
  <div>
    <Navigation />
    <div class="heading"></div>
    <h1>Shop Wisely</h1>
    <section class="sellers">
      <div v-for="product in products" :key="product._id">
        <SameProductCard :product="product" />
      </div>
    </section>
    <FooterSec />
  </div>
</template>

<script>
import API from "@/services/Api";
import Navigation from "@/components/NavigationBar.vue";
import SameProductCard from "@/components/SameProductCard.vue";
import FooterSec from "@/components/FooterSec.vue";

export default {
  name: "ViewProduct",
  data() {
    return {
      products: {},
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
  async created() {
    const response = await API.getAllProductsByTitle(this.$route.params.title);
    this.products = response;
  },
  components: {
    Navigation,
    SameProductCard,
    FooterSec,
  },
};
</script>

<style scoped>
section {
  padding: 4rem 8% 5rem;
}

.heading {
  background-image: url("@/assets/wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  padding-top: 12rem;
  padding-bottom: 8rem;
}

h1 {
  text-align: center;
  color: #4caf50;
}

.sellers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
}

#head {
  color: #4caf50;
  text-align: center;
  font-size: 1.1rem;
  margin: 0;
  background: #f7f7f7;
}
</style>
