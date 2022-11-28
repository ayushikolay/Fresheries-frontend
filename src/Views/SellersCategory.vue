<template>
  <div>
    <Navigation />
    <div id="content">
      <FeaturedSellers />
      <TopSellers />
    </div>
    <FooterSec />
  </div>
</template>

<script>
import Navigation from "@/components/NavigationBar.vue";
import FeaturedSellers from "@/components/FeaturedSellers.vue";
import TopSellers from "@/components/TopSellers.vue";
import FooterSec from "@/components/FooterSec.vue";

export default {
  name: "SellersCategory",
  components: {
    Navigation,
    FeaturedSellers,
    TopSellers,
    FooterSec,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style scoped>
#content {
  margin-top: -2rem;
  background: #f7f7f7;
}
</style>
