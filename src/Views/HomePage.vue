<template>
  <div>
    <Navigation />
    <section id="home">
      <div class="hero-content">
        <HeroContent name="DisplayProducts" btnName="Explore More" />
      </div>
      <div class="img-section">
        <img src="@/assets/home-img.png" alt="" />
      </div>
    </section>
    <section id="features" class="features">
      <h1 class="heading">
        <span>F</span>
        <span>E</span>
        <span>A</span>
        <span>T</span>
        <span>U</span>
        <span>R</span>
        <span>E</span>
        <span>S</span>
      </h1>
      <div class="box-container">
        <CardComp
          imageUrl="fresh.jpg"
          serviceName="Fresh &amp; Organic"
          description="Get Fresh, organic and healthy products deliver at your doorstep."
          btnName="Read More"
        />

        <div class="box blink_border">
          <img src="@/assets/seller.jpg" alt="" />
          <h3 class="blink_me">Trusted Seller</h3>
          <p>
            You can now shop from your nearby trusted seller by your own choice.
          </p>
          <router-link :to="{ name: 'SellerCategory' }"
            ><button class="btn">Shop Now</button></router-link
          >
        </div>

        <CardComp
          imageUrl="easy_payments.jpg"
          serviceName="Easy Payments"
          description="Make online payments, cash on delivery easily."
          btnName="Read More"
        />
      </div>
    </section>

    <section id="categories">
      <h1 class="heading">
        <span>C</span>
        <span>A</span>
        <span>T</span>
        <span>E</span>
        <span>G</span>
        <span>O</span>
        <span>R</span>
        <span>I</span>
        <span>E</span>
        <span>S</span>
      </h1>
      <div class="box-container">
        <CardComp
          imageUrl="cat-1.png"
          serviceName="Vegetables"
          description="Upto 45% off"
          btnName="Shop Now"
        />
        <CardComp
          imageUrl="cat-2.png"
          serviceName="Fresh Fruits"
          description="Upto 45% off"
          btnName="Shop Now"
        />
        <CardComp
          imageUrl="cat-3.png"
          serviceName="Dairy Products"
          description="Upto 45% off"
          btnName="Shop Now"
        />
      </div>
    </section>

    <section class="products" id="products">
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
      <div class="product-item-list">
        <div v-for="product in products" :key="product.id">
          <ProductCard
            :_id="product._id"
            :image="product.image"
            :title="product.title"
            :stock="product.stock"
            :discount="product.discount"
            :ratings="product.ratings"
            :cost="product.cost"
            :prev_cost="product.prev_cost"
          />
        </div>
      </div>
    </section>
    <FooterSec />
  </div>
</template>

<script>
import Navigation from "@/components/NavigationBar.vue";
import CardComp from "@/components/CardComp.vue";
import HeroContent from "@/components/HeroContent.vue";
import ProductCard from "@/components/ProductCard.vue";
import FooterSec from "@/components/FooterSec.vue";
import API from "@/services/Api";

export default {
  name: "HomePage",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
  async created() {
    this.products = await API.getAllProduct();
  },
  components: {
    Navigation,
    HeroContent,
    CardComp,
    ProductCard,
    FooterSec,
  },
};
</script>

<style scoped>
section {
  padding: 2rem 6%;
}

#home {
  display: flex;
  justify-content: space-between;
  padding-top: 9rem;
}

.hero-content {
  padding-left: 5rem;
}

.heading {
  margin-top: 2rem;
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

.box-container {
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
}

.features .box-container .box {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  outline: 0.1rem solid rgba(0, 0, 0, 0.1);
  outline-offset: -1rem;
  text-align: center;
}

.features .box-container .box:hover {
  outline: 0.2rem solid #4caf50;
  outline-offset: 0rem;
}

.features .box-container .box img {
  margin: 0.5rem 0 0.5rem;
  height: 14rem;
}

.features .heading {
  text-align: center;
}
.features .heading span {
  font-size: 2rem;
  background: #4caf50;
  color: #fff;
  gap: 1rem;
  padding: 0.2rem 1rem;
}
.features .box-container .box h3 {
  font-size: 1.5rem;
}

.features .box-container .box p {
  font-size: 1.2rem;
  color: #666;
}

.features .box-container .box .blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

.features .box-container .blink_border {
  border: 5px goldenrod solid;
  animation: blink 1s;
  animation-iteration-count: infinite;
}

@keyframes blink {
  50% {
    border-color: #fff;
  }
}

.features .box-container .box a {
  text-decoration: none;
}
.btn {
  margin-top: 0.5rem;
  display: inline-block;
  padding: 0.8rem 3rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: 0.2rem solid #4caf50;
  color: #4caf50;
  cursor: pointer;
  background: none;
}

.btn:hover {
  background: #4caf50;
  color: #fff;
  border: 0.2rem solid #fff;
}

.product-item-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5rem;
  margin: 7rem 1rem;
  gap: 2rem;
}
</style>
